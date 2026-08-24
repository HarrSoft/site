<script lang="ts">
	import baseClamp from '$lib/helpers/clamp';
	import grid from '$lib/gif/landinggif-harrsoft.gif';
	import grid2 from '$lib/gif/landinggif2-harrsoft.gif';
	import { onMount } from 'svelte';
	import Contact from '$com/contact.svelte';
	let isDown: boolean = false;
	let offsetX: number = -2000;
	let offsetY: number = -900;
	let bgX: number = $state(0);
	let bgY: number = $state(0);
	let multiSlider: HTMLElement = $state();

	onMount(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (isDown) {
				bgX = baseClamp(e.clientX + offsetX, -multiSlider.clientWidth / 2, multiSlider.clientWidth);
				bgY = baseClamp(
					e.clientY + offsetY,
					-multiSlider.clientHeight / 2,
					multiSlider.clientHeight
				);
			}
		};

		const handleMouseDown = (e: MouseEvent) => {
			isDown = true;
			offsetX = baseClamp(
				offsetX - e.clientX,
				-multiSlider.clientWidth / 2,
				multiSlider.clientWidth
			);
			offsetY = baseClamp(
				offsetY - e.clientY,
				-multiSlider.clientHeight / 2,
				multiSlider.clientHeight
			);
		};

		const handleMouseUp = (e: MouseEvent) => {
			isDown = false;
		};

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	});
</script>

<div
	class=" no-scrollbar fixed top-0 left-0 z-10 grid h-screen w-screen place-items-center overflow-clip"
>
	<div
		class="selectDisable pointer-events-none z-20 container min-h-11 max-w-[80vw] border-2 border-black bg-white p-4 md:max-w-[60vw]"
	>
		<p class=" font-[HCapsuleBlack] text-sm font-black md:text-lg">
			All you have to do is convince us that you have a good idea, and that you believe in it enough
			to let us help you succeed. <br />
			<br /> We dont ask for anything upfront. We are open on willing to negotiate on how our
			partnership can be build.
			<br /><br /> The most important thing is to get started, that's what we are here for. We have pricing
			models that are accessible for where you are at, helping you get where you want to be.
		</p>
		<div class="pointer-events-auto relative h-24 max-w-5">
			<Contact />
		</div>
	</div>
	<div
		bind:this={multiSlider}
		class="selectDisable md:grid-cols-project-grid grid-cols-project-grid-mobile absolute grid h-fit min-h-screen w-fit min-w-screen gap-[7vw] p-[10vw] duration-500 ease-in-out"
		style="
			top: {bgY}px; ; left: {bgX}px;
		"
	>
		{#each new Array(50) as _, i}
			<img
				src={i % 2 ? grid : grid2}
				class="aspect-project-img pointer-events-none h-[500px] min-w-[10vw] rounded-lg object-cover py-[2vh]"
				alt=""
				style="scale: {i % 2 ? '1' : '.9'}; translate: transform({i % 2 ? '1' : '.9'}rem,{i % 2
					? '1'
					: '.9'}rem)"
			/>
		{/each}
	</div>
</div>
