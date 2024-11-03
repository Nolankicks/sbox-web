<script lang="ts">
    import Package from '$lib/components/Package.svelte';

    let { data } = $props();

    import { base } from '$app/paths';
    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
</script>

<div class="flex flex-col mt-5 px-5 items-center">
    {#if data.pkg}
        <div class="flex items-center gap-6 bg-alt p-2 rounded-md">
            <img src={data.pkg.Thumb} alt={data.pkg.Title} class="h-32 w-32 rounded-md" />
            <div class="flex flex-col">
                <div class="text-3xl font-bold">{data.pkg.Title}</div>
                <div class="text-xl">From <a class="underline" href="{base}/browse/{data.pkg?.Org.Ident}">{data.pkg?.Org.Title}</a></div>
                <div class="text-xl">{data.pkg.Summary}</div>
            </div>
        </div>

        <DiscordEmbed title={data.pkg.Title} description="from {data.pkg.Org.Title}" image={data.pkg.Thumb} />
    {/if}
</div>