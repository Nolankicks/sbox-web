<script lang="ts">
    let { SboxPackage: pkg }: { SboxPackage: SboxPackage } = $props();

    import { base } from '$app/paths';
    import type { SboxPackage } from '$lib/types/SboxWeb';

    let link = pkg.FullIdent?.replaceAll(".", "/");
</script>

<a href="{base}/browse/{link}" class="flex w-full">
    <div class="my-5 flex h-52 items-center justify-start rounded-md bg-primary p-2 w-full font-poppins text-white transition-all hover:scale-[1.01] active:scale-[0.99] flex-row overflow-hidden">
        <img src={pkg.Thumb} alt={pkg.Title} class="h-full w-auto max-w-full max-h-full rounded-md shadow-sm shadow-black flex-shrink-0 object-contain" />
        <div class="flex flex-col items-start justify-center w-full flex-shrink h-full p-6 gap-5">
            <p class="text-xl md:text-lg font-bold flex">{pkg.Title}</p>
            {#if pkg.Org}
                <p class="flex">from {pkg.Org.Title}</p>
            {/if}
        </div>
    </div>
</a>

<style>
    .overflow-hidden {
        overflow: hidden;
    }
</style>
