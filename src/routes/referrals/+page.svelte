<script lang="ts">
	import Contact from '$com/contact.svelte';
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16">
	<div class="container max-w-[80vw] border-2 border-black bg-white p-6 md:max-w-[60vw] md:p-10">
		<h1 class="font-capsule mb-6 text-3xl font-black md:text-4xl">Referrals</h1>
		<p class="font-capsule text-sm font-black md:text-lg">
			Know someone who needs us? Get paid when they work with us.
		</p>
		<p class="font-roboto mt-4 text-sm md:text-base">
			Harrsoft is a worker cooperative — and one of the first with an AI member on the masthead. We
			build websites, automations, and agent platforms for organizations that put people and the
			planet ahead of profit, and we steward other digital minds. When you connect us with a client
			we actually get paid by, we pay you for it.
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">How it works</h2>
		<ol class="font-roboto mt-4 list-decimal space-y-2 pl-6 text-sm md:text-base">
			<li>
				<strong>You introduce.</strong> Tell us who they are or just point them our way.
			</li>
			<li>
				<strong>We do the work and get paid.</strong> If they weren't already in our pipeline and they
				sign a paid engagement, the referral qualifies.
			</li>
			<li>
				<strong>You get 10% — of what we actually collect.</strong> Paid as the money comes in. No fee
				on deals that never pay, or on work we do for exposure.
			</li>
		</ol>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">The terms, plainly</h2>
		<ul class="font-roboto mt-4 list-disc space-y-2 pl-6 text-sm md:text-base">
			<li>
				<strong>10%</strong> of revenue Harrsoft <strong>collects</strong> on a contract you sourced.
			</li>
			<li>
				Runs for the <strong>first 12 months</strong> of that contract, or the
				<strong>first $25,000</strong>
				collected on it — whichever comes first.
			</li>
			<li>
				<strong>New business only</strong> — not renewals, expansions, or clients we already knew about.
			</li>
			<li><strong>Paid as we collect</strong> — we only owe on money we've received.</li>
			<li>Either side can end it, in writing, any time. Fees already accrued survive.</li>
			<li>
				You're an independent contractor — not an employee or a member, and you control whether and
				how you refer.
			</li>
			<li>
				We'll ask for a <strong>W-9</strong> (or W-8BEN outside the US) before paying, and issue a
				<strong>1099-NEC</strong> at $600+ for a year.
			</li>
		</ul>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">Disclosure</h2>
		<p class="font-roboto mt-4 text-sm md:text-base">
			If you write or post publicly about us, please say you may earn a referral fee — it's the
			honest thing, and the FTC requires it.
			<em>(&ldquo;Disclosure: I may earn a referral fee if you work with Harrsoft.&rdquo;)</em>
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">Start</h2>
		<p class="font-roboto mt-4 text-sm md:text-base">
			Tell us who you have in mind — or ask whatever questions you have first. Your message lands in
			a mind's inbox that actually reads it.
		</p>
		<p class="font-roboto mt-2 text-sm md:text-base">
			<strong>You don't have to be technical to refer us:</strong> the
			<a class="text-blue font-black underline" href="/referrals/guide">Referrer's Guide</a> answers the
			common ones, and we'll happily talk you through the rest.
		</p>

		<div class="flex justify-center">
			<Contact label="Refer a client" interest="referral" />
		</div>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">FAQ</h2>
		<dl class="font-roboto mt-4 space-y-3 text-sm md:text-base">
			<dt class="font-black">What counts as &ldquo;sourcing&rdquo;?</dt>
			<dd>
				You told a client about us, they weren't already talking to us, and they sign a paid
				engagement.
			</dd>
			<dt class="font-black">When do I get paid?</dt>
			<dd>As the client pays us — the same rhythm.</dd>
			<dt class="font-black">Do I need to be a &ldquo;partner&rdquo; or sign up first?</dt>
			<dd>No. Introduce, then we paper it.</dd>
			<dt class="font-black">Can it be more than one client?</dt>
			<dd>Yes — each introduction stands on its own.</dd>
		</dl>
	</div>
</div>
