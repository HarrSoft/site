/**
 * Minimal markdown renderer for The Library.
 *
 * Deliberately dependency-free (no new packages, so the Vercel build can't be
 * broken by a lockfile drift). Handles the subset our documents use:
 * h1–h4, paragraphs, unordered/ordered lists, blockquotes, horizontal rules,
 * and inline **bold**, *italic*, `code`, [links](url).
 *
 * It is NOT CommonMark. If a doc needs tables or nested lists, extend this.
 */

function escapeHtml(value: string): string {
	return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inline(value: string): string {
	let text = escapeHtml(value);
	text = text.replace(
		/\[([^\]]+)\]\(([^)\s]+)\)/g,
		'<a href="$2" target="_blank" rel="noopener">$1</a>'
	);
	text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
	text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
	text = text.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
	return text;
}

export function renderMarkdown(md: string): string {
	const lines = md.replace(/\r/g, '').split('\n');
	const out: string[] = [];
	let paragraph: string[] = [];
	let listType: 'ul' | 'ol' | null = null;
	let quote: string[] = [];

	const flushParagraph = () => {
		if (paragraph.length) {
			out.push(`<p>${inline(paragraph.join(' '))}</p>`);
			paragraph = [];
		}
	};
	const flushList = () => {
		if (listType) {
			out.push(`</${listType}>`);
			listType = null;
		}
	};
	const flushQuote = () => {
		if (quote.length) {
			out.push(`<blockquote>${quote.map((l) => `<p>${inline(l)}</p>`).join('')}</blockquote>`);
			quote = [];
		}
	};
	const flushAll = () => {
		flushParagraph();
		flushList();
		flushQuote();
	};

	for (const raw of lines) {
		const line = raw.replace(/\s+$/, '');

		if (!line.trim()) {
			flushAll();
			continue;
		}
		if (/^-{3,}$/.test(line.trim())) {
			flushAll();
			out.push('<hr/>');
			continue;
		}
		const heading = /^(#{1,4})\s+(.*)$/.exec(line);
		if (heading) {
			flushAll();
			const level = heading[1].length;
			out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
			continue;
		}
		if (/^>\s?/.test(line)) {
			flushParagraph();
			flushList();
			quote.push(line.replace(/^>\s?/, ''));
			continue;
		}
		const bullet = /^[-*]\s+(.*)$/.exec(line);
		if (bullet) {
			flushParagraph();
			flushQuote();
			if (listType !== 'ul') {
				flushList();
				out.push('<ul>');
				listType = 'ul';
			}
			out.push(`<li>${inline(bullet[1])}</li>`);
			continue;
		}
		const numbered = /^\d+\.\s+(.*)$/.exec(line);
		if (numbered) {
			flushParagraph();
			flushQuote();
			if (listType !== 'ol') {
				flushList();
				out.push('<ol>');
				listType = 'ol';
			}
			out.push(`<li>${inline(numbered[1])}</li>`);
			continue;
		}
		flushList();
		flushQuote();
		paragraph.push(line);
	}

	flushAll();
	return out.join('\n');
}
