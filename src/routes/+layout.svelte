<script lang="ts">
	import '../app.css';
	import Nav from '$com/nav.svelte';
</script>

<svelte:head>
	<title>HarrSoft Studio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="bg-white min-h-screen max-w-screen overflow-x-hidden">
	<Nav />
	<main class="bg-white">
		<slot />
	</main>
</div>

<style>
</style>
