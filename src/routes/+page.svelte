<script lang="ts">
    import PackageColumn from "$lib/components/PackageColumn.svelte";
    import { onMount } from "svelte";

    let { data } = $props();
</script>

{#if data.trending}
    <PackageColumn title="Trending" SboxPackages={data.trending} />
{/if}

{#if data.updated}
    <PackageColumn title="Updated" SboxPackages={data.updated} />
{/if}

{#if data.featured}
    <PackageColumn title="Featured" SboxPackages={data.featured} />
{/if}

{#if data.popular}
    <PackageColumn title="Popular" SboxPackages={data.popular} />
{/if}