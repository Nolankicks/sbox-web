<script lang="ts">
    export let title: string;
    export let description: string = '';
    export let image: string | null = null;
</script>

<svelte:head>
    <meta content={title} property="og:title" />
    <meta content={description} property="og:description" />
    <meta content="/" property="og:url" />
    <meta content="#1E3E62" data-react-helmet="true" name="theme-color" />

    {#if image}
        <meta content={image} property="og:image" />
    {/if}
</svelte:head>