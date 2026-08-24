<script lang="ts">
	import '../app.css';
	import Nav from '$com/nav.svelte';
	import { isModalOpen } from '$lib/stores/modal';
	import { fade } from 'svelte/transition';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>HarrSoft Studio</title>
	<meta name="description" content="We Build." />
</svelte:head>

<div
	transition:fade={{ duration: 200 }}
	class="min-h-screen w-full bg-white {$isModalOpen ? 'pr-[17px]' : ''} overflow-x-clip"
>
	<Nav />
	<main class="bg-white pt-14">
		{@render children?.()}
	</main>
</div>
