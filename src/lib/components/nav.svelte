<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { isModalOpen } from '$lib/stores/modal';

	let lastScrollY = 0;
	let visible = $state(true);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		visible = !$isModalOpen && (currentScrollY <= lastScrollY || currentScrollY < 100); // Show on scroll up or top

		lastScrollY = currentScrollY;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const menuItems = [
		{
			title: 'Home',
			link: '/'
		},
		{
			title: 'Services',
			link: '/services'
		},
		{
			title: 'How We Serve',
			link: '/how-we-serve'
		}
	];
</script>

<div
	role="navigation"
	aria-label="Main Navigation"
	class={`top-bar fixed top-0 left-0 z-20 flex h-max
	w-screen justify-center 
	transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
>
	<div class="flex w-full justify-center sm:w-5/6">
		<nav
			aria-hidden={visible ? true : undefined}
			aria-label="Main Navigation"
			class="bg-blue flex w-full flex-row justify-between rounded-b-lg border-b-2 border-white px-[3%] py-4 shadow-md sm:w-4/6 sm:px-[6%]"
		>
			{#each menuItems as menuItem}
				<a
					aria-current={menuItem.link === page.url.pathname ? 'page' : undefined}
					class={`sm:text-l sm:text-m font-capsule text-sm font-normal  text-white  sm:font-black`}
					href={menuItem.link}
				>
					{menuItem.title}
				</a>
			{/each}
		</nav>
	</div>
</div>

<style scoped>
	.top-bar {
		transition: transform 0.3s ease;
	}
</style>
