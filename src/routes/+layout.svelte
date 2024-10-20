<script lang="ts">
	import '../app.css';
	import Nav from '$com/nav.svelte';
	import { isModalOpen } from '$lib/stores/modal';
</script>

<svelte:head>
	<title>HarrSoft Studio</title>
	<meta name="description" content="We Build." />
</svelte:head>

<div class="min-h-screen w-full bg-white {$isModalOpen ? 'pr-[17px]' : ''} overflow-x-clip">
	<Nav />
	<main class="bg-white pt-14">
		<slot />
	</main>
</div>
