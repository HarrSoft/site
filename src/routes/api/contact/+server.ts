import { json, type RequestHandler } from '@sveltejs/kit';
import { sendContact } from '$lib/server/agentmail';

// Always a live serverless function — never prerendered to a static file.
export const prerender = false;

export const POST: RequestHandler = async ({ request }) => {
	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return json({ ok: false, error: 'Bad request.' }, { status: 400 });
	}

	const name = String(form.get('Name') ?? '').trim();
	const email = String(form.get('Email') ?? '').trim();
	const phone = String(form.get('Phone') ?? '').trim();
	const idea = String(form.get('Idea') ?? '').trim();
	const gotcha = String(form.get('_gotcha') ?? '').trim();

	// Honeypot: a bot fills the hidden field. Report success; deliver nothing.
	if (gotcha) return json({ ok: true });

	if (!name || (!email && !phone)) {
		return json(
			{ ok: false, error: 'Please include your name and either an email or a phone number.' },
			{ status: 400 }
		);
	}
	if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ ok: false, error: 'That email address looks off — mind checking it?' }, { status: 400 });
	}

	const result = await sendContact({ name, email, phone, idea });
	if (!result.ok) {
		console.error('[api/contact]', result.detail);
		return json(
			{
				ok: false,
				error: 'Could not deliver the message right now. Please email contact@harrsoft.studio.'
			},
			{ status: result.status }
		);
	}
	return json({ ok: true });
};
