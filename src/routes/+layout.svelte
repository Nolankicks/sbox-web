<script lang="ts">
	import '../app.css';
	let { children } = $props();
	
	import { base } from '$app/paths';
</script>

<a href="{base}/">Home</a>
<a href="{base}browse">Browse</a>

{@render children()}
