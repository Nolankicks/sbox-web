<script lang="ts">
    import DiscordEmbed from "$lib/components/DiscordEmbed.svelte";
    import PackageColumn from "$lib/components/PackageColumn.svelte";

    let { data } = $props();
</script>

{#if data.packages}
    <PackageColumn SboxPackages={data.packages} title="Browse" />
{/if}

<DiscordEmbed title="S&Box Web" description="Browse" />
