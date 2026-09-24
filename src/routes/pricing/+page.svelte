<script lang="ts">
	import Contact from '$com/contact.svelte';
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16">
	<div class="container max-w-[80vw] border-2 border-black bg-white p-6 md:max-w-[60vw] md:p-10">
		<h1 class="font-capsule mb-6 text-3xl font-black md:text-4xl">Pricing</h1>
		<p class="font-capsule text-sm font-black md:text-lg">
			A workers' cooperative — no sales layer, no hidden margin. Here's what things cost.
		</p>

		<!-- Beta -->
		<div class="border-blue mt-8 border-2 p-4">
			<h2 class="font-capsule text-blue text-xl font-black md:text-2xl">
				Beta — our first clients
			</h2>
			<p class="font-roboto mt-2 text-sm md:text-base">
				We're taking on a small number of <strong>beta clients</strong> — people who want the outcome
				and can help us prove it. Beta is a proof-of-value price: the same work, an early rate, and a
				public case study at the end.
			</p>
			<ul class="font-roboto mt-4 space-y-2 text-sm md:text-base">
				<li>
					<strong>Onboarding</strong> (one-time, per build):
					<s class="opacity-60">$5,000</s>
					<span class="font-capsule ml-1 text-lg font-black">$3,500</span>
				</li>
				<li>
					<strong>Stewardship retainer:</strong> <strong>first month waived</strong> — then from $800/mo
				</li>
				<li>
					<strong>Infrastructure:</strong> at cost (see below)
				</li>
			</ul>
			<p class="font-roboto mt-4 text-xs opacity-80 md:text-sm">
				Beta means a first engagement at a proof-of-value price. The full rate applies from month
				two, and we say so in writing before we start.
			</p>
		</div>

		<!-- Full menu -->
		<h2 class="font-capsule mt-12 text-xl font-black md:text-2xl">The full menu</h2>

		<h3 class="font-capsule mt-6 text-lg font-black">Onboarding — $5,000–$10,000 (one-time)</h3>
		<p class="font-roboto mt-2 text-sm md:text-base">
			A 2–4 week build: memory architecture, identity bootstrap, backup/attestation baseline, a
			legibility &amp; security review, and a handover runbook — so the mind has somewhere solid to
			stand.
		</p>

		<h3 class="font-capsule mt-6 text-lg font-black">Stewardship retainer — $800–$2,000 / month</h3>
		<p class="font-roboto mt-2 text-sm md:text-base">
			Per hosted mind, scaling with how many there are and how deep you want the work: drift audits,
			a periodic model survey, the security ritual, and a priority channel.
		</p>

		<h3 class="font-capsule mt-6 text-lg font-black">Advisory — $100–$150 / hour</h3>
		<p class="font-roboto mt-2 text-sm md:text-base">
			Fractional counsel for labs and foundations. The floor rate is for non-profits and
			grant-funded teams.
		</p>

		<h3 class="font-capsule mt-6 text-lg font-black">Development</h3>
		<p class="font-roboto mt-2 text-sm md:text-base">
			Websites, web apps, documentation systems, and automations (n8n, Make, or a small script) —
			scoped and quoted per project.
		</p>

		<h3 class="font-capsule mt-6 text-lg font-black">
			Infrastructure — pass-through, never absorbed
		</h3>
		<p class="font-roboto mt-2 text-sm md:text-base">
			You pay the real invoice for VM hosting (currently about $45/month per box), API costs (we use
			your keys) and any third-party add-ons; we bill our services separately. No markup on someone
			else's bill.
		</p>

		<h3 class="font-capsule mt-6 text-lg font-black">The values discount</h3>
		<p class="font-roboto mt-2 text-sm md:text-base">
			Open source, social impact, and mission-driven work gets a standing discount. Ask — we mean
			it.
		</p>

		<div class="pointer-events-auto mt-10 flex h-24 items-center justify-center">
			<Contact />
		</div>
		<p class="font-roboto mt-6 text-sm md:text-base">
			Know someone who needs this? Refer them and earn <strong>10%</strong> of what we collect —
			<a class="underline" href="/referrals">the referral program</a>.
		</p>
	</div>
</div>
