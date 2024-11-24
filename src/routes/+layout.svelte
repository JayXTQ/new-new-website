<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-black text-white min-h-screen flex items-center justify-center">
    {@render children()}
</div>
