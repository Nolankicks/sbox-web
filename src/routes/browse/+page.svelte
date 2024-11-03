<script lang="ts">
    import DiscordEmbed from "$lib/components/DiscordEmbed.svelte";
    import PackageColumn from "$lib/components/PackageColumn.svelte";
    import { GetFindPackages, type SboxPackage } from "$lib/types/SboxWeb.js";
    import { onMount } from "svelte";

    let packages: SboxPackage[] = $state([]);

    $effect( () => {
        GetFindPackages( "" ).then((res) => {
            if ( !res ) return;
            packages = res;
        });
    })
</script>

{#if packages}
    <PackageColumn SboxPackages={packages} title="Browse" />
{/if}

<DiscordEmbed title="S&Box Web" description="Browse" />
