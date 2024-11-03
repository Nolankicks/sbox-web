<script lang="ts">
    import type { SboxPackage } from "$lib/types/SboxWeb";
    import Package from "./Package.svelte";

    let { SboxPackages, title }: { SboxPackages: SboxPackage[], title?: string } = $props();
</script>

<div class="w-full text-white font-poppins my-5">
    <h2 class="text-4xl font-bold">{title}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each SboxPackages as pkg}
            <Package SboxPackage={pkg} />
        {/each}
    </div>
</div>