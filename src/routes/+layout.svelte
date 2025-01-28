<script lang="ts">
	import '../app.css';
	import Nav from '$com/nav.svelte';
	import { isModalOpen } from '$lib/stores/modal';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Votist</title>
	<meta name="description" content="The Voting platform." />
</svelte:head>

<div
	transition:fade={{ duration: 200 }}
	class="min-h-screen w-full bg-white {$isModalOpen ? 'pr-[17px]' : ''} overflow-x-clip"
>
	<main class="bg-white pt-14">
		<slot />
	</main>
</div>
