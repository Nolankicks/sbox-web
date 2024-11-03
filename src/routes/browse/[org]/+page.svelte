<script lang="ts">
    import Package from "$lib/components/Package.svelte";
    import PackageColumn from "$lib/components/PackageColumn.svelte";
    import type { Org } from "$lib/types/SboxWeb";

    let { data } = $props();

    let org: Org | null = $state( data?.packages[0]?.Org );
</script>

{#if data.packages}
    <PackageColumn SboxPackages={data.packages} title={org?.Title ?? null} />
{/if}