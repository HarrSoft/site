<script lang="ts">
	import baseClamp from '$lib/helpers/clamp';
	import grid from '$lib/gif/landinggif-harrsoft.gif';
	import grid2 from '$lib/gif/landinggif2-harrsoft.gif';
	import { onMount } from 'svelte';
	let isDown: boolean = false;
	let offsetX: number = -2000;
	let offsetY: number = -900;
	let bgX: number = 0;
	let bgY: number = 0;
	let multiSlider: HTMLElement;

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
	class=" no-scrollbar w-screen h-screen fixed grid place-items-center overflow-clip top-0 left-0 z-10"
>
	<div
		class="container md:max-w-[60vw] max-w-[80vw] p-4 bg-white z-20 min-h-11 border-2 border-black pointer-events-none selectDisable"
	>
		<p class=" font-HCapsuleBlack font-black md:text-lg text-sm">
			All you have to do is convince us that you have a good idea, and that you believe in it enough
			to let us help you succeed. <br />
			<br /> We dont ask for anything upfront other than trust. We trust that if we help you make
			it, you wont leave us behind. As well as trust that we wont charge beyond operating costs and
			for whats needed to make what you do real.
			<br /><br /> The most important thing is to get started, that's what we are here for.
		</p>
	</div>
	<div
		bind:this={multiSlider}
		class="grid w-fit duration-500 ease-in-out selectDisable h-fit min-h-screen min-w-screen md:grid-cols-project-grid grid-cols-project-grid-mobile absolute gap-[7vw] p-[10vw]"
		style="
			top: {bgY}px; ; left: {bgX}px;
		"
	>
		{#each new Array(50) as _, i}
			<img
				src={i % 2 ? grid : grid2}
				class="min-w-[10vw] pointer-events-none object-cover aspect-project-img h-[500px] py-[2vh] rounded-lg"
				alt=""
				style="scale: {i % 2 ? '1' : '.9'}; translate: transform({i % 2 ? '1' : '.9'}rem,{i % 2
					? '1'
					: '.9'}rem)"
			/>
		{/each}
	</div>
</div>
