<script lang="ts">
    import Package from '$lib/components/Package.svelte';

    let { data } = $props();

    import { base } from '$app/paths';
    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
</script>

{#if data.pkg}
<div class="flex flex-col mt-5 items-center p-4">
        <div class="flex flex-col md:flex-row items-center gap-6 p-2 bg-primary rounded-md w-full max-w-4xl">
            <img src={data.pkg.Thumb} alt={data.pkg.Title} class="h-32 w-32 rounded-md" />
            <div class="flex flex-col text-center md:text-left">
                <a class="text-2xl md:text-3xl font-bold" href="https:sbox.game/{data.pkg.Org.Ident}/{data.pkg.Ident}">{data.pkg.Title}</a>
                <div class="text-lg md:text-xl">From <a class="underline" href="{base}/browse/{data.pkg?.Org.Ident}">{data.pkg?.Org.Title}</a></div>
                <div class="text-lg md:text-xl">{data.pkg.Summary}</div>
            </div>
        </div>

        <DiscordEmbed title={data.pkg.Title} description="from {data.pkg.Org.Title}" image={data.pkg.Thumb} />

</div>

<div class="flex h-screen p-4 flex-col items-center">
    {#if data.pkg.Description}
        <div class="w-full flex mx-auto p-4 rounded-md bg-alt">{data.pkg.Description}</div>
    {/if}

    {#if data.pkg.Screenshots}
        <div class="flex gap-6 flex-col">
            {#each data.pkg.Screenshots as screenshot}
                {#if (screenshot.IsVideo)}
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <!-- svelte-ignore a11y_media_has_caption -->
                    <video class="mx-auto my-5 flex justify-center rounded-md" controls>
                        <source src={screenshot?.Url} type="video/mp4" />
                    </video>
                {:else}
                    <img src={screenshot?.Url} alt={data.pkg.Title} class="mx-auto my-5 flex justify-center rounded-md" />
                {/if}
            {/each}
        </div>
    {/if}
</div>
{/if}