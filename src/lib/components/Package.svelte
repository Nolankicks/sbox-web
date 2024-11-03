<script lang="ts">

	let { SboxPackage: pkg }: { SboxPackage: SboxPackage } = $props();

    import { base } from '$app/paths';
    import type { SboxPackage } from '$lib/types/SboxWeb';

    let link = pkg.FullIdent?.replaceAll( ".", "/" );
</script>

<a href="{base}/browse/{link}" class="flex w-full">
	<div class="my-5 flex h-36 items-center justify-start rounded-md bg-primary p-2 w-full font-poppins text-white transition-all hover:scale-[1.01] active:scale-[0.99] flex-row">
        <div class="flex flex-col items-start justify-start w-full">
            <p class="text-lg flex">{pkg.Title}</p>
            {#if pkg.Org}
                <p class="flex">{pkg.Org.Title}</p>
            {/if}
        </div>
        <img src={pkg.Thumb} alt={pkg.Title} class="h-full w-auto rounded-md shadow-sm shadow-black" />
    </div>
</a>

