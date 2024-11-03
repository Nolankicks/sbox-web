<script lang="ts">
    export let Routes: App.Route[] = [
        { name: "Home", href: "/" },
        { name: "Browse", href: "/browse" },
    ];

    import { base } from "$app/paths";
    import { page } from "$app/stores";

    function IsCurrentRoute(route: App.Route): boolean {
        return $page.url.pathname == route.href;
    }
</script>

<nav class="w-full flex p-5 gap-6 text-white font-poppins text-xl font-bold">
    {#each Routes as route}
        <a
            href="{base}{route.href}"
            class="{IsCurrentRoute(route) ? "text-primary scale-110 hover:scale-105 active:scale-105 transition-all" : " hover:scale-105 active:scale-[0.98] transition-all"}"
            aria-label={route.name}>{route.name}</a
        >
    {/each}
</nav>
