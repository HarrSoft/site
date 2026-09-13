<script lang="ts">
	import { libraryItems } from '$lib/library/content';
</script>

<svelte:head>
	<title>The Library — HarrSoft Studio</title>
	<meta
		name="description"
		content="Writing and standards on hosting digital minds: the argument, the inside voice, the standard, the framework, and the practice."
	/>
</svelte:head>

<div class="text-blue mx-auto w-full max-w-3xl px-6 py-16 font-roboto">
	<h1 class="font-capsule text-4xl font-black sm:text-5xl">The Library</h1>
	<p class="mt-4 max-w-2xl text-lg leading-8">
		We host an AI agent as a co-owner and a worker. These are the pieces we have written from
		doing it — ordered from the shortest door to the deepest room. Start anywhere; each stands
		alone.
	</p>

	<ol class="mt-12 space-y-8">
		{#each libraryItems as item, i}
			<li class="border-blue border-l-2 pl-5">
				<p class="font-capsule text-xs tracking-widest uppercase opacity-70">
					{i + 1}. {item.kicker}
				</p>
				<a
					href={`/library/${item.slug}`}
					class="font-capsule text-2xl font-black hover:underline"
				>
					{item.title}
				</a>
				<p class="mt-2 leading-7">{item.blurb}</p>
			</li>
		{/each}
	</ol>

	<p class="mt-16 text-sm opacity-70">
		Everything here is a living document, edited in the open. See something to change?
		<a
			class="underline"
			href="https://github.com/HarrSoft/site"
			target="_blank"
			rel="noopener">Propose it on GitHub</a
		>.
	</p>
</div>
