<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { writable } from 'svelte/store';

	let screenWidth: number = $state(0);
	const serviceCategories = [
		{
			name: 'Development',
			description:
				'We build websites and web apps. We research your goals, design for the outcome you want to have, and create business tools that help you reach success.'
		}
	];
	let activeCategory = writable('Development');

	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeCategory.set(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		const sections = document.querySelectorAll('.service-section');
		sections.forEach((section) => observer.observe(section));
	});
</script>

<svelte:window bind:innerWidth={screenWidth} />
<div class="sticky flex">
	<div
		class={`fixed top-0 left-0 flex h-screen flex-col justify-center bg-white p-2 sm:w-1/6 ${screenWidth < 500 ? 'hidden' : ''}`}
	>
		<ul class=" ">
			{#each serviceCategories as category}
				<li class="my-4">
					<h2>
						<a
							href="#{category.name}"
							class="category-link {category.name === $activeCategory ? 'active' : ''}"
							>{category.name}</a
						>
					</h2>
					{#if category.name === $activeCategory}
						<p in:slide out:slide>{category.description}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<div class="mt-16 mr-0 ml-0 p-4 sm:mt-0 sm:mr-[25%] sm:ml-[35%] sm:pt-0">
		<section id="Development" class="service-section" in:fly={{ y: 200, duration: 300 }}>
			<h2>Development</h2>

			<h3>Basic Website</h3>
			<p>
				We build and provide a fully branded and customized site for publishing your written and
				multimedia content. We work with you for the initial setup and get it to your desired state
				before handing it off for hosting/management.
			</p>
			<p>
				We also provide maintenance services where we take care of everything for a monthly fee that
				varies based on your business needs, allowing for feature requests and content updates.
			</p>

			<h3>Custom Webapp</h3>
			<p>
				We use modern TypeScript frameworks such as Nuxt and SvelteKit to create custom business and
				marketing tools that deliver next-generation web experiences to your customers.
			</p>
			<p>
				Upon completion of the app, we hand it off to you for hosting. Or, if you prefer a fully
				managed solution, you can hire us to take care of hosting and scaling your application.
			</p>
		</section>
	</div>
</div>

<style scoped lang="postcss">
	@reference "tailwindcss";
	@reference "../../app.css";
	.service-section {
		@apply mt-[2vh] min-h-[98vh] w-full sm:grid sm:place-content-center;
	}

	p {
		@apply font-roboto mt-2;
		font-size: 0.875rem;
	}

	h2 {
		@apply font-capsule mt-2 font-black;
		font-size: 1.25rem;
	}

	h3 {
		@apply font-capsule-exp mt-2;
	}

	.category-link {
		transition: color 0.3s ease;
	}

	.category-link.active {
		@apply text-blue;
	}
</style>
