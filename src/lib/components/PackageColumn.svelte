<script lang="ts">
    import type { SboxPackage } from "$lib/types/SboxWeb";
    import Package from "./Package.svelte";

    let { SboxPackages, title }: { SboxPackages: SboxPackage[], title?: string } = $props();
</script>

<div class="w-full text-white font-poppins my-5 flex items-center justify-center flex-col">
    {#if title}
        <h2 class="text-4xl font-bold flex w-full p-4">{title}</h2>
    {/if}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 w-full">
        {#each SboxPackages as pkg}
            <Package SboxPackage={pkg} />
        {/each}
    </div>
</div>