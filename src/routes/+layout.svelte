<script lang="ts">
	import '../app.css';
	let { children } = $props();
	
	import { base } from '$app/paths';
    import Header from '$lib/components/Header.svelte';
</script>

<Header />

<div class="fixed inset-0 bg-background" style="z-index: -5;"></div>

<div class="container mx-auto text-white font-poppins">
	{@render children()}
</div>