<script lang="ts" >
	
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';
	
	// bindings
	let canvas: HTMLCanvasElement;
	let loading: boolean;

	// dom functions
	onMount(() => {
		let app = new Application(canvas);
		loading = true;
		app.load('https://prod.spline.design/ju06hr9eWlQcSSs6/scene.splinecode').finally(() => {
			loading = false;
		});
	});	
</script>


<section class="flex justify-center">
	{#if loading}
	<div class=" z-[1000] grid h-screen overflow-hidden w-screen place-items-center duration-200"
	>
		loading
	</div>
	{/if}
	<div class="sm:m-10 h-[80vh] sm:w-[50vw] w-screen ">
		<canvas class=" md:scale-110 scale-95" bind:this={canvas} />
	</div>


</section>