<script lang="ts">
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';
	import gif from '$lib/gif/landinggif-harrsoft.gif';
	import gif2 from '$lib/gif/landinggif2-harrsoft.gif';

	// canvas
	let canvas: HTMLCanvasElement;
	let loading: boolean;

	// window
	let height: number;
	let width: number;

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

<section class="flex flex-col items-center w-full overflow-hidden max-w-screen">
	<div
		class=" font-CapsuleSemiExpanded z-[1000] grid h-screen w-screen max-w-screen place-items-center duration-500"
		style="
		opacity: {loading ? 1 : 0}; 
		height: {loading ? '100vh' : '0%'};
		"
	>
		<p class="">loading</p>
	</div>
	<section class="flex-center items-center justify-center min-h-screen flex-col translate-y-[-10%]">
		<div class="h-[60vh] w-screen pointer-events-none mt-[10vh]">
			<canvas class=" sm:scale-150" bind:this={canvas} />
		</div>
		<div
			class=" sm:px-[10%] px-5 sm:border-x-2 border-blue border-x-0 border-t-2 sm:border-t-0 sm:mt-6 mt-0 sm:max-w-[50vw] sm:text-center z-10 sm:mx-0 md:mx-10 leading-[2rem] font-HCapsuleBlack text-blue sm:w-1/2 flex flex-col"
		>
			<h1 class="text-xl font-black sm:mt-0 mt-10">
				Harrsoft is a Cooperative Cooperation of designers, software developers, and creators.
			</h1>
			<br />
			<p class=" font-Roboto">
				We are uniting across disciplines to create the platforms that will be the bedrock of the
				next generation of communities.
			</p>
		</div>
	</section>
	<section
		class=" sm:mx-10 flex border-2 border-blue sm:flex-row text-blue flex-col-reverse items-center sm:mt-10 mt-[30%] pt-0 sm:w-[80vw] w-screen"
	>
		<div class=" p-3 py-10 sm:w-1/2 w-full sm:ml-20">
			<h1 class="font-HCapsuleBlack font-black sm:text-5xl text-4xl">We Build</h1>
			<div class=" mt-10 sm:text-3xl text-lg font-HCapsuleBlack h-full gap-10 grid grid-cols-2">
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
	<section
		class="sm:max-w-[80vw] sm:my-[-2%] w-screen min-h-[60vh] flex items-center relative overflow-hidden"
	>
		<div
			class=" sm:w-[500px] w-[80vw] bg-white p-10 rounded-lg border-2 border-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
		>
			<h2 class=" text-center font-HCapsuleBlack font-black pb-3 text-blue">
				Let's Build Together - Contact Us
			</h2>
			<form>
				<div>
					<label for="Name" class=" text-right italic text-blue font-Roboto font-medium">
						Name
					</label>
					<input
						type="text"
						class=" mt-3 rounded-bl-xl font-Roboto p-1 w-full border-b-2 border-l-[.1px] border-blue bg-white"
					/>
				</div>
				<div>
					<label for="Name" class=" text-right italic text-blue font-Roboto font-medium">
						Email
					</label>
					<input
						type="text"
						class=" mt-3 rounded-bl-xl font-Roboto p-1 w-full border-b-2 border-l-[.1px] border-blue bg-white"
					/>
				</div>
				<div>
					<label for="Name" class=" text-right italic text-blue font-Roboto font-medium">
						What we will be building
					</label>
					<textarea
						class=" mt-3 rounded-bl-xl font-Roboto p-1 w-full border-b-2 border-l-[.1px] border-blue bg-white"
					/>
				</div>
			</form>
		</div>
		<enhanced:img class="w-[100vw] h-[60vh]" src="../lib/images/grid.png" />
	</section>

	<section
		class=" sm:mx-10 flex border-2 border-blue sm:flex-row text-blue flex-col-reverse items-center sm:mb-10 pt-0 sm:w-[80vw] w-screen"
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
</section>
