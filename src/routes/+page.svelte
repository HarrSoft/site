<script lang="ts">
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';
	import gif from '$lib/gif/landinggif-harrsoft.gif';
	import gif2 from '$lib/gif/landinggif2-harrsoft.gif';

	import Modal from '$com/modal.svelte';
	import { isModalOpen } from '$lib/stores/modal';
	import { fadeScale } from '$lib/animations';

	// canvas
	let canvas: HTMLCanvasElement;
	let loading: boolean;

	// window
	let height: number;
	let width: number;

	function presentForm() {
		isModalOpen.set(true);
	}
	function hideForm() {
		isModalOpen.set(false);
	}

	// dom functions
	onMount(() => {
		let app = new Application(canvas);
		loading = true;
		app.load('https://prod.spline.design/ju06hr9eWlQcSSs6/scene.splinecode').finally(() => {
			loading = false;
			app.canvas.height = height;
			app.canvas.width = width;
		});
	});
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />

<div class="-mt-14 flex w-full flex-col items-center overflow-hidden">
	<section class="flex-center relative min-h-screen w-full flex-col items-center justify-center">
		<div class="pointer-events-none h-[60vh] w-full">
			{#if loading}
				<div
					class="absolute left-0 top-0 z-[1000] grid h-full w-full place-items-center font-CapsuleSemiExpanded duration-500"
					transition:fadeScale={{}}
				>
					<p class="">loading</p>
				</div>
			{/if}
			<canvas class="h-full w-full sm:scale-150" bind:this={canvas} />
		</div>
		<div
			class="z-10 mt-0 flex flex-col border-x-0 border-t-2 border-blue px-5 font-HCapsuleBlack leading-[2rem] text-blue sm:mx-0 sm:mt-6 sm:w-1/2 sm:max-w-[50vw] sm:border-x-2 sm:border-t-0 sm:px-[10%] sm:text-center md:mx-10"
		>
			<h1 class="mt-10 text-xl font-black sm:mt-0">
				Harrsoft is a Cooperative Cooperation of designers, software developers, and creators.
			</h1>
			<br />
			<p class="font-Roboto">
				We are uniting across disciplines to create the platforms that will be the bedrock of the
				next generation of communities.
			</p>
		</div>
	</section>
	<section
		class="mt-[30%] flex w-full flex-col-reverse items-center border-2 border-blue pt-0 text-blue sm:mx-10 sm:mt-10 sm:w-[80vw] sm:flex-row"
	>
		<div class="w-full p-3 py-10 sm:ml-20 sm:w-1/2">
			<h1 class="font-HCapsuleBlack text-4xl font-black sm:text-5xl">We Build</h1>
			<div class="mt-10 grid h-full grid-cols-2 gap-10 font-HCapsuleBlack text-lg sm:text-3xl">
				<p>Websites</p>
				<p>Integrations</p>
				<p>Brands</p>
				<p>Identities</p>
				<p>Reach</p>
				<p>Platforms</p>
			</div>
		</div>
		<div class="sm:m-10 sm:my-10 sm:w-1/2">
			<img src={gif2} alt="visual element representing our services" />
		</div>
	</section>

	<!-- grid section -->
	<section class="relative flex w-full items-center overflow-hidden sm:my-[-2%] sm:max-w-[60vw]">
		<button
			class="absolute left-1/2 top-1/2 flex w-[80vw] -translate-x-1/2 -translate-y-1/2 transform justify-center rounded-lg border-2 border-blue bg-white p-4 font-black sm:w-[500px]"
			on:click={presentForm}
		>
			Contact Us
		</button>
		<Modal on:close={hideForm}></Modal>
		<enhanced:img class="w-[100vw]" src="../lib/images/grid.png" />
	</section>

	<section
		class="flex w-full flex-col-reverse items-center border-2 border-blue pt-0 text-blue sm:mx-10 sm:mb-10 sm:w-[80vw] sm:flex-row"
	>
		<div class="sm:m-10 sm:my-10 sm:w-1/2">
			<img src={gif} alt="visual element representing our values" />
		</div>
		<div class=" w-full p-3 py-10 sm:ml-20 sm:w-1/2">
			<h1 class="font-HCapsuleBlack text-4xl font-black sm:text-5xl">We Build</h1>
			<div class=" mt-10 grid h-full grid-cols-2 gap-10 font-HCapsuleBlack text-lg sm:text-3xl">
				<p>COMMUNITIES</p>
				<p>FOUNDATIONS</p>
				<p>UNDERSTANDING</p>
				<p>VISIONS</p>
				<p>MEANING</p>
				<p>GROWTH</p>
			</div>
		</div>
	</section>
</div>
