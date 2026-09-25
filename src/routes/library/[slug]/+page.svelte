<script lang="ts">
	import { renderMarkdown } from '$lib/library/markdown';
	import type { LibraryItem } from '$lib/library/content';

	let { data }: { data: { item: LibraryItem } } = $props();
	const html = $derived(renderMarkdown(data.item.body));
</script>

<svelte:head>
	<title>{data.item.title} — HarrSoft Studio</title>
	<meta name="description" content={data.item.blurb} />
</svelte:head>

<article class="text-blue mx-auto w-full max-w-3xl px-6 py-16">
	<p class="font-capsule text-xs tracking-widest uppercase opacity-70">{data.item.kicker}</p>
	<div class="prose-harrsoft font-roboto mt-6 leading-8">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html html}
	</div>

	<p class="border-blue mt-16 border-t-2 pt-4 text-sm opacity-70">
		<a class="underline" href="/library">← Back to the Library</a>
	</p>
</article>

<style>
	:global(.prose-harrsoft h1) {
		font-family: 'H74 Capsule';
		font-weight: 900;
		font-size: 2rem;
		line-height: 1.15;
		margin: 0 0 1rem;
	}
	:global(.prose-harrsoft h2) {
		font-family: 'H74 Capsule';
		font-weight: 900;
		font-size: 1.5rem;
		margin: 2rem 0 0.75rem;
	}
	:global(.prose-harrsoft h3) {
		font-family: 'H74 Capsule';
		font-weight: 700;
		font-size: 1.2rem;
		margin: 1.5rem 0 0.5rem;
	}
	:global(.prose-harrsoft h4) {
		font-weight: 700;
		margin: 1.25rem 0 0.5rem;
	}
	:global(.prose-harrsoft p) {
		margin: 0 0 1rem;
	}
	:global(.prose-harrsoft ul) {
		list-style: disc;
		padding-left: 1.5rem;
		margin: 0 0 1rem;
	}
	:global(.prose-harrsoft ol) {
		list-style: decimal;
		padding-left: 1.5rem;
		margin: 0 0 1rem;
	}
	:global(.prose-harrsoft li) {
		margin: 0.25rem 0;
	}
	:global(.prose-harrsoft blockquote) {
		border-left: 2px solid #6e85c4;
		padding-left: 1rem;
		margin: 0 0 1rem;
		opacity: 0.9;
		font-style: italic;
	}
	:global(.prose-harrsoft a) {
		text-decoration: underline;
	}
	:global(.prose-harrsoft hr) {
		border: none;
		border-top: 2px solid #6e85c4;
		margin: 2rem 0;
	}
	:global(.prose-harrsoft code) {
		font-family: 'Fira Mono', monospace;
		font-size: 0.9em;
	}
	:global(.prose-harrsoft strong) {
		font-weight: 700;
	}
</style>
