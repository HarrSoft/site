import { error } from '@sveltejs/kit';
import { libraryItems, referenceChat } from '$lib/library/content';

export const prerender = true;

export function entries() {
	return libraryItems.map((item) => ({ slug: item.slug }));
}

export function load({ params }) {
	const item =
		params.slug === 'peter-singer-ai-chat'
			? referenceChat
			: libraryItems.find((i) => i.slug === params.slug);
	if (!item) {
		throw error(404, 'Not found');
	}
	return { item };
}
