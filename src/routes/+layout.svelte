<script lang="ts">
	import '../app.css';
	import Nav from '$com/nav.svelte';
</script>

<svelte:head>
	<title>HarrSoft Studio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div id="app" class="bg-white min-h-screen w-screen text-center px-0 py-2.5 overflow-x-hidden">
	<Nav></Nav>
	<main class="bg-white">
		<slot />
	</main>
</div>

<style>
</style>
