<script lang="ts">
    import Package from '$lib/components/Package.svelte';

    let { data } = $props();

    import { base } from '$app/paths';
    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
    import { onMount } from 'svelte';
    import type { SboxPackage } from '$lib/types/SboxWeb.js';

    let pkg: SboxPackage = $state( { Title: "Loading...", Summary: "Loading...", Thumb: "https://via.placeholder.com/150", Ident: "Test" } );

    /*$effect(() => {
        fetch( `https://services.facepunch.com/sbox/package/get/${data.org}.${data.indnt}` ).then( res => res.json() ).then( body => {
            if ( body ) {
                pkg = body;
            }
        });
    })*/
</script>

<div class="flex flex-col mt-5 px-5 items-center">
    {#if pkg}
        <div class="flex items-center gap-6 bg-alt p-2 rounded-md">
            <img src={pkg.Thumb} alt={pkg.Title} class="h-32 w-32 rounded-md" />
            <div class="flex flex-col">
                <div class="text-3xl font-bold">{pkg.Title}</div>
                <div class="text-xl">From <a class="underline" href="{base}/browse/{pkg?.Org.Ident}">{pkg?.Org.Title}</a></div>
                <div class="text-xl">{pkg.Summary}</div>
            </div>
        </div>

        <DiscordEmbed title={pkg.Title} description="from {pkg.Org.Title}" image={pkg.Thumb} />
    {/if}
</div>