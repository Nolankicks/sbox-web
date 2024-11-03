<script lang="ts">
    import Package from '$lib/components/Package.svelte';

    let { data } = $props();

    import { base } from '$app/paths';
    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
</script>

<div class="flex flex-col mt-5 h-screen items-center p-4">
    {#if data.pkg}
        <div class="flex flex-col md:flex-row items-center gap-6 p-2 bg-primary rounded-md w-full max-w-4xl">
            <img src={data.pkg.Thumb} alt={data.pkg.Title} class="h-32 w-32 rounded-md" />
            <div class="flex flex-col text-center md:text-left">
                <div class="text-2xl md:text-3xl font-bold">{data.pkg.Title}</div>
                <div class="text-lg md:text-xl">From <a class="underline" href="{base}/browse/{data.pkg?.Org.Ident}">{data.pkg?.Org.Title}</a></div>
                <div class="text-lg md:text-xl">{data.pkg.Summary}</div>
            </div>
        </div>

        <DiscordEmbed title={data.pkg.Title} description="from {data.pkg.Org.Title}" image={data.pkg.Thumb} />
    {/if}
</div>