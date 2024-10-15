<script lang="ts">
	import '../app.css';
	import Nav from '$com/nav.svelte';
	import { isModalOpen } from '$lib/stores/modal';
</script>

<svelte:head>
	<title>HarrSoft Studio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="bg-white min-h-screen w-full {$isModalOpen ? 'pr-[17px]' : ''} overflow-x-clip">
	<Nav />
	<main class="bg-white">
		<slot />
	</main>
</div>

<style>
</style>
