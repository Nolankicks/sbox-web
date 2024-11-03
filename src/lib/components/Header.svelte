<script lang="ts">
    export let Routes: App.Route[] = [
        { name: 'Home', href: '/' },
        { name: 'Browse', href: '/browse' },
    ];

    import { base } from '$app/paths';
</script>

<nav class="w-full flex p-5 mx-auto gap-6 bg-background text-white font-poppins text-xl font-bold">
    {#each Routes as route}
        <a href="{base}{route.href}" aria-label={route.name}>{route.name}</a>
    {/each}
</nav>