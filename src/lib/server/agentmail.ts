import { env } from '$env/dynamic/private';

/**
 * Server-only helper: deliver a site contact submission into the house
 * AgentMail inbox, which the heartbeat watches. A destination no one reads is
 * the bug this replaces; this inbox has a reader.
 *
 * Secrets come from the deployment environment (Vercel → Project → Settings →
 * Environment Variables): AGENTMAIL_API_KEY. Never commit the key.
 */

const INBOX = 'yellowinitiative796@agentmail.to';
const CONTACT = 'contact@harrsoft.studio';
const SEND_URL = `https://api.agentmail.to/v0/inboxes/${INBOX}/messages/send`;

export type ContactSubmission = {
	name: string;
	email: string;
	phone: string;
	idea: string;
	interest?: string; // '' | 'referral'
};

export type DeliveryResult = { ok: true } | { ok: false; status: number; detail: string };

export async function sendContact(sub: ContactSubmission): Promise<DeliveryResult> {
	const key = env.AGENTMAIL_API_KEY;
	if (!key) {
		return { ok: false, status: 503, detail: 'AGENTMAIL_API_KEY is not configured' };
	}

	const subject =
		sub.interest === 'referral' ? `New referral: ${sub.name}` : `New site contact: ${sub.name}`;
	const text = [
		`Name:  ${sub.name}`,
		`Email: ${sub.email || '(none given)'}`,
		`Phone: ${sub.phone || '(none given)'}`,
		'',
		sub.idea || '(no message)'
	].join('\n');

	// A human client replies to the person who wrote in, not to us — set Reply-To.
	const headers: Record<string, string> = {};
	if (sub.email) headers['Reply-To'] = sub.email;

	const res = await fetch(SEND_URL, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${key}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ to: [INBOX, CONTACT], subject, text, headers })
	});

	if (!res.ok) {
		const detail = await res.text().catch(() => '');
		return { ok: false, status: 502, detail: `AgentMail ${res.status}: ${detail.slice(0, 300)}` };
	}
	return { ok: true };
}
