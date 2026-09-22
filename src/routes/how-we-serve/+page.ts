// The "serve" framing became the "Why" page (2026-09-22). Keep the old URL working.
import { redirect } from '@sveltejs/kit';

export const prerender = true;

export function load() {
	redirect(308, '/why');
}
