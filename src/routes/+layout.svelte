<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<a href="/">Home</a>
<a href="/browse">Browse</a>

{@render children()}
