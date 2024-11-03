<script lang="ts">
    import DiscordEmbed from "$lib/components/DiscordEmbed.svelte";
import Package from "$lib/components/Package.svelte";
    import PackageColumn from "$lib/components/PackageColumn.svelte";
    import type { Org, SboxPackage } from "$lib/types/SboxWeb";

    let { data } = $props();

    let org: Org = $state( { Title: "Loading...", Description: "Loading...", Thumb: "https://via.placeholder.com/150", Ident: "kicks" } );
    let packages: SboxPackage[] = $state([ { Title: "Loading...", Summary: "Loading...", Thumb: "https://via.placeholder.com/150", Ident: "kicks" } ]);

    /*$effect( () => {
        let link = new URL("https://services.facepunch.com/sbox/package/find");
        link.searchParams.set("q", `org:${data.org}`);

        fetch(link.toString()).then( res => res.json() ).then( body => {
            if ( body ) {
                org = body.Packages[0]?.Orgs[0];
                
                packages = body.Packages;
            }
        });
    })*/
</script>

{#if packages}
    {#if org}
        <div class="w-full flex flex-col">
            <div
                class="w-full p-4 text-4xl font-bold flex flex-row items-center gap-4"
            >
                <img
                    src={org.Thumb}
                    alt={org.Title}
                    class="h-12 w-12 rounded-md"
                />
                <div>{org.Title}</div>
            </div>
            <div class="w-full px-4 text-1xl font-bold">{org.Description}</div>
        </div>

        <DiscordEmbed
            title={org.Title}
            description={org.Description}
            image={org.Thumb}
        />
    {/if}

    <PackageColumn SboxPackages={packages} />
{/if}
