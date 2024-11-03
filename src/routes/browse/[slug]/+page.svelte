<script lang="ts">
    import Package from "$lib/components/Package.svelte";

    let { data } = $props();
</script>

{#if data.packages && data.packages[0]}
    <Package SboxPackage={data.packages[0]} />
{/if}