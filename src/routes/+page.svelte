<script lang="ts">
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';
	import gif from '$lib/gif/landinggif-harrsoft.gif';
	import gif2 from '$lib/gif/landinggif2-harrsoft.gif';
	import loader from '$lib/gif/harrsoftloader.gif';
	import Contact from '$com/contact.svelte';
	import { fade } from 'svelte/transition';

	// canvas
	let canvas: HTMLCanvasElement;
	let loading: boolean = $state(true);

	// window
	let height: number = $state(0);
	let width: number = $state(0);

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

<div class="flex w-full flex-col items-center overflow-hidden">
	<section class="flex-center relative min-h-screen w-full flex-col items-center justify-center">
		<div class="pointer-events-none h-[60vh] w-full">
			{#if loading}
				<div
					class="font-capsule-exp fixed top-0 left-0 z-1000 grid min-h-screen min-w-screen place-items-center bg-white duration-500"
					out:fade={{ duration: 400 }}
				>
					<p class="font-capsule absolute z-10001 self-center text-7xl text-black">loading</p>
					<img
						in:fade={{ duration: 300 }}
						out:fade={{ duration: 400 }}
						src={loader}
						alt="loading"
					/>
				</div>
			{/if}
			<canvas class="h-full w-full sm:scale-150" bind:this={canvas}></canvas>
		</div>
		<div
			class="border-blue text-blue font-capsule z-10 mt-0 flex flex-col border-x-0 border-t-2 px-5 leading-[2rem] sm:mx-0 sm:mt-6 sm:w-1/2 sm:max-w-[50vw] sm:border-x-2 sm:border-t-0 sm:px-[10%] sm:text-center md:mx-10"
		>
			<h1 class="mt-10 text-xl font-black sm:mt-0">
				Harrsoft is a Workers Cooperative building infrastructure we all want to live with.
			</h1>
			<br />
			<p class="font-roboto">
				We are uniting across disciplines to create the platforms that will be the bedrock of the
				next generation of communities.
			</p>
		</div>
	</section>
	<section
		class="border-blue text-blue mt-[30%] flex w-full flex-col-reverse items-center border-2 pt-0 sm:mx-10 sm:mt-10 sm:w-[80vw] sm:flex-row"
	>
		<div class="w-full p-3 py-10 sm:ml-20 sm:w-1/2">
			<h1 class="font-capsule text-4xl font-black sm:text-5xl">We Build</h1>
			<div class="font-capsule mt-10 grid h-full grid-cols-2 gap-10 text-lg sm:text-3xl md:text-xl">
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
	<section
		class="relative my-[10%] flex w-full flex-col items-center overflow-hidden sm:max-w-[60vw]"
	>
		<div
			class="selectDisable pointer-events-none container max-w-[80vw] border-2 border-black bg-white p-4 md:max-w-[60vw]"
		>
			<p class=" font-capsule text-sm font-black md:text-lg">
				We are here as a full service agency and a team to back your next generation platform, dont
				hesitate to reach out, happy to talk.
			</p>
		</div>
		<Contact />
	</section>

	<section
		class="border-blue text-blue flex w-full flex-col-reverse items-center border-2 pt-0 sm:mx-10 sm:mb-10 sm:w-[80vw] sm:flex-row md:flex-col-reverse"
	>
		<div class="sm:m-10 sm:my-10 sm:w-1/2">
			<img src={gif} alt="visual element representing our values" />
		</div>
		<div class=" w-full p-3 py-10 sm:ml-20 sm:w-1/2">
			<h1 class="font-capsule text-4xl font-black sm:text-5xl">We Build</h1>
			<div
				class=" font-capsule mt-10 grid h-full grid-cols-2 gap-10 text-lg sm:text-3xl md:text-xl"
			>
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
