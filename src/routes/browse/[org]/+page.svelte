<script lang="ts">
    import DiscordEmbed from "$lib/components/DiscordEmbed.svelte";
import Package from "$lib/components/Package.svelte";
    import PackageColumn from "$lib/components/PackageColumn.svelte";
    import type { Org } from "$lib/types/SboxWeb";

    let { data } = $props();

    let org: Org | null = $state( data?.packages[0]?.Org );
</script>

{#if data.packages}
    
    {#if org}
        <div class="w-full flex flex-col">
            <div class="w-full p-4 text-4xl font-bold flex flex-row items-center gap-4">
                <img src={org.Thumb} alt={org.Title} class="h-12 w-12 rounded-md" />
                <a href="https://sbox.game/{org.Ident}">{org.Title}</a>
            </div>
            <div class="w-full px-4 text-1xl font-bold">{org.Description}</div>
        </div>

        <DiscordEmbed title={org.Title} description={org.Description} image={org.Thumb} />
    {/if}

    <PackageColumn SboxPackages={data.packages} />
{/if}