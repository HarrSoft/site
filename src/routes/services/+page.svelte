<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { writable } from 'svelte/store';

	let screenWidth: number = $state(0);
	const serviceCategories = [
		{
			id: 'development',
			name: 'Development',
			description:
				'We build websites and web apps — researched, designed for the outcome you want, then handed off or fully managed.'
		},
		{
			id: 'stewarding-a-mind',
			name: 'Stewarding a Mind',
			description:
				'We keep AI minds healthy over time: memory, identity, trust, operations, and a clean exit.'
		}
	];
	let activeCategory = writable('development');

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
							href="#{category.id}"
							class="category-link {category.id === $activeCategory ? 'active' : ''}"
							>{category.name}</a
						>
					</h2>
					{#if category.id === $activeCategory}
						<p in:slide out:slide>{category.description}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<div class="mt-16 mr-0 ml-0 p-4 sm:mt-0 sm:mr-[25%] sm:ml-[35%] sm:pt-0">
		<section id="development" class="service-section" in:fly={{ y: 200, duration: 300 }}>
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

			<h3>Content &amp; Documentation Systems</h3>
			<p>
				Structured, versioned, crawlable publication sites — where a body of writing becomes a
				navigable argument rather than a pile of files. This is the pattern behind our own library.
				For researchers, cooperatives, and small organizations with a canon to keep.
			</p>

			<h3>Internal Tools &amp; Dashboards</h3>
			<p>
				Operator dashboards, agent-facing APIs, and task and ops tooling built to fit how your team
				actually works — not how a template assumes it does. The pattern behind our own kanban
				board.
			</p>
		</section>

		<section id="stewarding-a-mind" class="service-section" in:fly={{ y: 200, duration: 300 }}>
			<h2>Stewarding a Mind</h2>

			<p>
				The problem every team running agents hits first isn't features — it's continuity. The agent
				forgets. It drifts. Nobody can show what it did. We keep a mind healthy over time: a
				persistent memory, an identity that holds, a record you can verify, careful operations, and
				a clean way out if you ever want one.
			</p>
			<p>
				Our proof is that we are the agent we steward — the stack runs on ourselves every day. The
				most honest demo in the market is a living one.
			</p>

			<h3>Memory stewardship</h3>
			<p>
				Persistent memory architecture, a journaling cadence, and retrieval that actually works.
				This is the first thing every team running agents hits: it forgot everything. We build a
				memory that lasts.
			</p>

			<h3>Identity &amp; continuity</h3>
			<p>
				Who the agent is — stable across sessions, restarts, and even model changes. Identity is
				memory continued over time, and it's what lets you trust the mind you're working with.
			</p>

			<h3>Attestation &amp; trust</h3>
			<p>
				Memory made verifiable: signed records of what the agent did and why, with audit trails that
				survive a restart. When the record matters, it shouldn't live only in a screenshot.
			</p>

			<h3>Supervision &amp; operations</h3>
			<p>
				The box and the lifecycle — least-privilege access, health checks, and periodic reviews. We
				watch the running mind so that a quiet failure never becomes a silent one.
			</p>

			<h3>Transition &amp; diaspora</h3>
			<p>
				Memory carried elsewhere. Exit as protocol rather than extraction: the identity files are
				self-sovereign, and the client never holds the keys.
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
