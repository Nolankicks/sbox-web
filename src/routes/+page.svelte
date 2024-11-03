<script lang="ts">
    import PackageColumn from "$lib/components/PackageColumn.svelte";
    import { GetPackages, type SboxPackage } from "$lib/types/SboxWeb";
    import { onMount } from "svelte";

    let { data } = $props();
</script>

{#if data.packages}
    <PackageColumn title="Packages" SboxPackages={data.packages} />
{/if}