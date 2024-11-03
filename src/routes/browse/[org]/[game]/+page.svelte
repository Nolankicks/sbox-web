<script lang="ts">
    import Package from '$lib/components/Package.svelte';

    let { data } = $props();

    import { base } from '$app/paths';

    console.log(data);
</script>

<div class="flex flex-col mt-5">
    {#if data.pkg}
        <img src={data.pkg.Thumb} alt={data.pkg.Title} class="h-56 w-56 rounded-md mb-5" />
        <div class="flex flex-col items-start justify-start w-full">
            <p class="text-lg flex">{data.pkg.Title}</p>
            <a href="{base}/browse/{data.pkg.Org.Ident}">{data.pkg.Org.Title}</a>
        </div>
    {/if}
</div>