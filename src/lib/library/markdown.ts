/**
 * Minimal markdown renderer for The Library.
 *
 * Deliberately dependency-free (no new packages, so the Vercel build can't be
 * broken by a lockfile drift). Handles the subset our documents use:
 * h1-h4, paragraphs, unordered and ordered lists (including multi-line and
 * blank-line-separated "loose" items), blockquotes, horizontal rules, and
 * inline bold / italic (both asterisk and underscore), code, and links.
 *
 * It is NOT CommonMark. If a doc needs tables or nested lists, extend this.
 */

function escapeHtml(value: string): string {
	return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Inline emphasis. `*`/`**` and `_`/`__`, the latter guarded so identifiers
 * like `foo_bar_baz` and file names are left alone. */
function emphasis(value: string): string {
	return value
		.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
		.replace(/__([^_]+)__/g, '<strong>$1</strong>')
		.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>')
		.replace(/(^|[^\w])_([^_\n]+)_(?![\w])/g, '$1<em>$2</em>');
}

function inline(value: string): string {
	let text = escapeHtml(value);

	// Protect code spans and links from the emphasis pass (so `foo_bar` and
	// URLs containing underscores are never mangled), then restore them.
	const store: string[] = [];
	const token = (html: string) => {
		store.push(html);
		return `\u0000${store.length - 1}\u0000`;
	};

	text = text.replace(/`([^`]+)`/g, (_m, code) => token(`<code>${code}</code>`));
	text = text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, href) =>
		token(`<a href="${href}" target="_blank" rel="noopener">${emphasis(label)}</a>`)
	);

	text = emphasis(text);

	text = text.replace(/\u0000(\d+)\u0000/g, (_m, i) => store[Number(i)]);
	return text;
}

export function renderMarkdown(md: string): string {
	const lines = md.replace(/\r/g, '').split('\n');
	const out: string[] = [];

	let paragraph: string[] = [];
	let listType: 'ul' | 'ol' | null = null;
	let listItems: string[] = [];
	let blankSawInList = false; // a blank line *within* a list (loose list)
	let quote: string[] = [];

	const flushParagraph = () => {
		if (paragraph.length) {
			out.push(`<p>${inline(paragraph.join(' '))}</p>`);
			paragraph = [];
		}
	};

	const flushList = () => {
		if (listType) {
			out.push(`<${listType}>`);
			for (const item of listItems) out.push(`<li>${item}</li>`);
			out.push(`</${listType}>`);
			listType = null;
			listItems = [];
		}
		blankSawInList = false;
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

	const pushItem = (text: string) => {
		listItems.push(inline(text));
	};

	for (const raw of lines) {
		const line = raw.replace(/\s+$/, '');
		const trimmed = line.trim();

		// Blank line: inside a list it may separate items (loose list) — keep the
		// list open until we see whether the next line continues it.
		if (!trimmed) {
			if (listType) {
				blankSawInList = true;
			} else {
				flushAll();
			}
			continue;
		}

		if (/^-{3,}$/.test(trimmed)) {
			flushAll();
			out.push('<hr/>');
			continue;
		}

		const heading = /^(#{1,4})\s+(.*)$/.exec(trimmed);
		if (heading) {
			flushAll();
			out.push(`<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`);
			continue;
		}

		if (/^>\s?/.test(trimmed)) {
			flushParagraph();
			flushList();
			quote.push(trimmed.replace(/^>\s?/, ''));
			continue;
		}

		const bullet = /^[-*]\s+(.*)$/.exec(trimmed);
		const numbered = /^\d+\.\s+(.*)$/.exec(trimmed);

		if (bullet || numbered) {
			const type: 'ul' | 'ol' = bullet ? 'ul' : 'ol';
			flushParagraph();
			flushQuote();
			if (listType && listType !== type) flushList();
			listType = type;
			blankSawInList = false;
			pushItem((bullet ? bullet[1] : numbered![1]).trim());
			continue;
		}

		// A non-list continuation line.
		if (listType) {
			if (blankSawInList) {
				// The list ended; this starts a new paragraph.
				flushList();
				paragraph.push(trimmed);
			} else {
				// Wrapped/continuation text of the current list item.
				if (listItems.length) listItems[listItems.length - 1] += ' ' + inline(trimmed);
			}
			continue;
		}

		flushQuote();
		paragraph.push(trimmed);
	}

	flushAll();
	return out.join('\n');
}
