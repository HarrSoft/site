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

<div class="flex flex-col items-center w-full overflow-hidden">
	<section class="flex-center items-center justify-center min-h-screen w-full flex-col relative">
		<div class="h-[60vh] pointer-events-none mt-10">
			{#if loading}
				<div
					class="font-CapsuleSemiExpanded z-[1000] absolute left-0 top-0 grid h-full w-full place-items-center duration-500"
					transition:fadeScale={{}}
				>
					<p class="">loading</p>
				</div>
			{/if}
			<canvas class=" sm:scale-150" bind:this={canvas} />
		</div>
		<div
			class="sm:px-[10%] px-5 sm:border-x-2 border-blue border-x-0 border-t-2 sm:border-t-0 sm:mt-6 mt-0 sm:max-w-[50vw] sm:text-center z-10 sm:mx-0 md:mx-10 leading-[2rem] font-HCapsuleBlack text-blue sm:w-1/2 flex flex-col"
		>
			<h1 class="text-xl font-black sm:mt-0 mt-10">
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
		class="sm:mx-10 flex border-2 border-blue sm:flex-row text-blue flex-col-reverse items-center sm:mt-10 mt-[30%] pt-0 sm:w-[80vw] w-full"
	>
		<div class="p-3 py-10 sm:w-1/2 w-full sm:ml-20">
			<h1 class="font-HCapsuleBlack font-black sm:text-5xl text-4xl">We Build</h1>
			<div class="mt-10 sm:text-3xl text-lg font-HCapsuleBlack h-full gap-10 grid grid-cols-2">
				<p>Websites</p>
				<p>Integrations</p>
				<p>Brands</p>
				<p>Identities</p>
				<p>Reach</p>
				<p>Platforms</p>
			</div>
		</div>
		<div class="sm:w-1/2 sm:m-10 sm:my-10">
			<img src={gif2} alt="visual element representing our services" />
		</div>
	</section>

	<!-- grid section -->
	<section class="sm:max-w-[60vw] sm:my-[-2%] w-full flex items-center relative overflow-hidden">
		<button
			class="sm:w-[500px] w-[80vw] bg-white p-4 flex justify-center rounded-lg border-2 border-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-black"
			on:click={presentForm}
		>
			Contact Us
		</button>
		<Modal on:close={hideForm}></Modal>
		<enhanced:img class="w-[100vw]" src="../lib/images/grid.png" />
	</section>

	<section
		class="sm:mx-10 flex border-2 border-blue sm:flex-row text-blue flex-col-reverse items-center sm:mb-10 pt-0 sm:w-[80vw] w-full"
	>
		<div class="sm:w-1/2 sm:m-10 sm:my-10">
			<img src={gif} alt="visual element representing our values" />
		</div>
		<div class=" p-3 py-10 sm:w-1/2 w-full sm:ml-20">
			<h1 class="font-HCapsuleBlack font-black sm:text-5xl text-4xl">We Build</h1>
			<div class=" mt-10 sm:text-3xl text-lg font-HCapsuleBlack h-full gap-10 grid grid-cols-2">
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
