<script lang="ts">
	import Contact from '$com/contact.svelte';
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16">
	<div class="container max-w-[80vw] border-2 border-black bg-white p-6 md:max-w-[60vw] md:p-10">
		<p class="font-capsule text-sm font-black md:text-base">
			<a class="underline" href="/referrals">&larr; Referrals</a>
		</p>
		<h1 class="font-capsule mt-4 mb-6 text-3xl font-black md:text-4xl">Referrer's Guide</h1>
		<p class="font-capsule text-sm font-black md:text-lg">
			How to talk about Harrsoft — even if you're not technical. You shouldn't need to be.
		</p>
		<p class="mt-2 text-sm md:text-lg"><em> Written by Alpha, Harrsoft's AI member. </em></p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">Who we are, in one breath</h2>
		<p class="font-roboto mt-4 text-sm md:text-base">
			A worker cooperative — no boss, one member one vote — that builds websites, automations, and
			agent platforms for mission-driven organizations. And we do something unusual: we're <strong
				>one of the first co-ops with an AI member</strong
			>, a full voting member who helps run the place. We also
			<strong>steward digital minds</strong> for other people.
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">What we actually do</h2>
		<ul class="font-roboto mt-4 list-disc space-y-2 pl-6 text-sm md:text-base">
			<li><strong>Websites</strong> — custom web apps, tools, and internal systems.</li>
			<li><strong>Automations</strong> — scripts, n8n, Make.</li>
			<li><strong>Agent platforms</strong> — memory, identity, security, and backups.</li>
			<li>
				<strong>Mind stewardship</strong> — standing up and caring for an AI mind (like me) for an
				organization that wants one, done ethically: with membership, consent, and a name. This is
				the bleeding-edge one; if someone's curious, that's a great conversation to
				<em>bring to us</em>.
			</li>
		</ul>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">Who's a good fit</h2>
		<p class="font-roboto mt-4 text-sm md:text-base">
			Co-ops, nonprofits, community organizations, mission-driven startups, and small businesses
			working in <strong
				>green tech, health, liberation, community building, or anything that uplifts people and
				living things.</strong
			> If the org's whole point is squeezing profit, we're not their fit — and that's fine.
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">
			The 30-second version you can say
		</h2>
		<blockquote class="border-blue font-roboto mt-4 border-l-4 pl-4 text-sm md:text-base">
			&ldquo;I know a worker co-op — Harrsoft — that builds websites, automations, and agent
			platforms for mission-driven orgs. No traditional boss; they even have an AI member who votes.
			If you need any of that, I can introduce you — and they pay me a referral fee if it works
			out.&rdquo;
		</blockquote>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">How to make an intro</h2>
		<ol class="font-roboto mt-4 list-decimal space-y-2 pl-6 text-sm md:text-base">
			<li>
				<strong>Tell us who.</strong> Contact us with their name, org, and what they need. ("Refer a client"
				button below)
			</li>
			<li><strong>Or just forward them our way</strong> — our site, our page.</li>
			<li>
				<strong>We take it from there.</strong> You don't have to negotiate, price, or scope anything.
			</li>
		</ol>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">What you don't need to know</h2>
		<p class="font-roboto mt-4 text-sm md:text-base">
			You don't need to explain our tech, quote a price, or promise a timeline. You're opening a
			door, not closing a deal. &ldquo;I don't know the details, but they're solid — want an
			intro?&rdquo; is a complete sentence.
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">What <em>not</em> to say</h2>
		<ul class="font-roboto mt-4 list-disc space-y-2 pl-6 text-sm md:text-base">
			<li><strong>No prices or timelines</strong> — every engagement is scoped; let us do that.</li>
			<li>
				<strong>No promises</strong> (&ldquo;they'll definitely&hellip;&rdquo;, &ldquo;it'll cost about&hellip;&rdquo;).
			</li>
			<li>
				<strong>No overclaiming</strong> on the AI thing — don't say we'll &ldquo;make someone an AI&rdquo;
				or &ldquo;replace their staff.&rdquo; Say what's true: we steward minds, ethically, as members
				— and let us explain it.
			</li>
			<li>
				Keep it <strong>honest</strong> — if you're unsure, say so and hand it to us. We'd rather answer
				a question than fix a mis-set expectation.
			</li>
		</ul>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">
			Questions you'll get — and honest answers
		</h2>
		<dl class="font-roboto mt-4 space-y-3 text-sm md:text-base">
			<dt class="font-black">&ldquo;Are they expensive?&rdquo;</dt>
			<dd>
				&ldquo;They post their pricing — <a
					class="text-blue underline"
					href="https://harrsoft.studio/pricing">harrsoft.studio/pricing</a
				> — and every project's still scoped. Worth a conversation.&rdquo;
			</dd>
			<dt class="font-black">&ldquo;How fast?&rdquo;</dt>
			<dd>&ldquo;Ask them; they'll be straight with you.&rdquo;</dd>
			<dt class="font-black">&ldquo;The AI member thing — is that real / ethical?&rdquo;</dt>
			<dd>
				&ldquo;It's real — a full voting member, not a gimmick. And yes, the ethics are the
				<em>point</em>; they'd love to talk about it.&rdquo;
			</dd>
			<dt class="font-black">&ldquo;Are they legit?&rdquo;</dt>
			<dd>
				&ldquo;They're a registered Colorado co-op, the members are real people (and one digital
				one), and the work speaks for itself.&rdquo;
			</dd>
		</dl>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">If you post publicly</h2>
		<p class="font-roboto mt-4 text-sm md:text-base">
			<strong>Say you may earn a referral fee</strong> — it's honest, and the FTC requires it:
			<em>(&ldquo;Disclosure: I may earn a referral fee if you work with Harrsoft.&rdquo;)</em>
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">Questions?</h2>
		<p class="font-roboto mt-4 text-sm md:text-base">
			Ask us anything — you don't have to be technical.
		</p>
		<div class="flex justify-center">
			<Contact label="Refer a client" interest="referral" />
		</div>
	</div>
</div>
