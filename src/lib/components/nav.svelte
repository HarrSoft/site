<script setup lang="ts">
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
	class={`top-bar fixed left-0 w-screen top-0 h-max z-20
	flex justify-center 
	transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
>
	<div class="sm:w-5/6 w-full flex justify-center">
		<nav
			aria-hidden={visible ? true : undefined}
			aria-label="Main Navigation"
			class="shadow-md sm:w-4/6 w-full sm:px-[6%] px-[3%] border-b-2 border-white py-4 rounded-b-lg bg-blue flex flex-row justify-between"
		>
			{#each menuItems as menuItem}
				<a
					aria-current={menuItem.link === page.url.pathname ? 'page' : undefined}
					class={`sm:font-black sm:text-l sm:text-m text-white font-HCapsuleBlack  font-normal  text-sm`}
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
