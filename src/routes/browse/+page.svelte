<script lang="ts">
    import PackageColumn from "$lib/components/PackageColumn.svelte";

    let { data } = $props();
</script>

{#if data.packages}
    <PackageColumn SboxPackages={data.packages} title="Browse" />
{/if}
