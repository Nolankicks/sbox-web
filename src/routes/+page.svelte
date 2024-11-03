<script lang="ts">
    import DiscordEmbed from "$lib/components/DiscordEmbed.svelte";
    import PackageColumn from "$lib/components/PackageColumn.svelte";
    import { GetPackageGroup, GetPackageList, type SboxPackage } from "$lib/types/SboxWeb";
    import { onMount } from "svelte";

    let trending: SboxPackage[] = $state([]);
    let updated: SboxPackage[] = $state([]);
    let featured: SboxPackage[] = $state([]);
    let popular: SboxPackage[] = $state([]);

    onMount( () => {
        GetPackageList().then((res) => {
            GetPackageGroup(res, "Trending").then((res) => {
                trending = res;
            });
            GetPackageGroup(res, "Updated").then((res) => {
                updated = res;
            });
            GetPackageGroup(res, "Featured").then((res) => {
                featured = res;
            });
            GetPackageGroup(res, "Popular").then((res) => {
                popular = res;
            });
        });
    })
</script>

{#if trending}
    <PackageColumn title="Trending" SboxPackages={trending} />
{/if}

{#if updated}
    <PackageColumn title="Updated" SboxPackages={updated} />
{/if}

{#if featured}
    <PackageColumn title="Featured" SboxPackages={featured} />
{/if}

{#if popular}
    <PackageColumn title="Popular" SboxPackages={popular} />
{/if}

<DiscordEmbed title="S&Box Web" />
