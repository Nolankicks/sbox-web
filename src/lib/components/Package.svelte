<script lang="ts">
    let { SboxPackage: pkg }: { SboxPackage: SboxPackage } = $props();

    import { base } from '$app/paths';
    import type { SboxPackage } from '$lib/types/SboxWeb';

    let link = pkg.FullIdent?.replaceAll(".", "/");
</script>

<a href="{base}/browse/{link}" class="flex w-full">
    <div class="my-5 flex h-auto sm:h-52 items-center flex-col sm:flex-row justify-start rounded-md bg-primary p-2 w-full font-poppins text-white transition-all hover:scale-[1.01] active:scale-[0.99] overflow-hidden">
        <img src={pkg.Thumb} alt={pkg.Title} class="h-32 w-32 sm:h-full sm:w-auto max-w-full max-h-full rounded-md shadow-sm shadow-black flex-shrink-0 object-contain" />
        <div class="flex flex-col items-center justify-center w-full flex-shrink h-full p-4 pb-0 sm:pb-4 gap-5">
            <div class="flex flex-col items-center sm:items-start">
                <p class="text-lg sm:text-xl font-bold flex">{pkg.Title}</p>
                {#if pkg.Org}
                    <p class="flex">from {pkg.Org.Title}</p>
                {/if}
            </div>
        </div>
    </div>
</a>

<style>
    .overflow-hidden {
        overflow: hidden;
    }
</style>
