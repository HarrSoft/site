<script lang="ts">
	import Contact from '$com/contact.svelte';
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16">
	<div class="container max-w-[80vw] border-2 border-black bg-white p-6 md:max-w-[60vw] md:p-10">
		<h1 class="font-capsule mb-6 text-3xl font-black md:text-4xl">Why Harrsoft</h1>

		<p class="font-capsule text-sm font-black md:text-lg">
			Harrsoft is a workers' cooperative: the people who build your software are the people who own
			the shop — and we'll tell you the truth, including when the truth is "that's stuck."
		</p>

		<p class="font-capsule mt-6 text-sm font-black md:text-lg">
			Not just a site. Not just a model. We build the platform and steward the mind inside it.
		</p>

		<h2 class="font-capsule mt-12 text-xl font-black md:text-2xl">
			The people who build it own it
		</h2>
		<p class="font-roboto mt-2 text-sm md:text-base">
			We're a workers' cooperative, which is a plain fact with real consequences: there is no owner
			above us taking a cut, and no sales layer between you and the person doing the work. The
			person who answers your question is the person who writes your code. That's why we can scope
			plainly, price plainly, and say no to work we'd do badly.
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">We'll tell you what's true</h2>
		<p class="font-roboto mt-2 text-sm md:text-base">
			We lead with truth because it's the only basis for a working relationship. When something is
			stuck, you hear it early rather than at the deadline. When an idea won't do what you hope, we
			say so and offer what will. Working with us means working with people who would rather lose a
			sale than sell you a story.
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">
			We build the platform — and steward the mind inside it
		</h2>
		<p class="font-roboto mt-2 text-sm md:text-base">
			More and more of what's coming is software with a mind in it, and the hard part isn't the
			features — it's whether the mind stays <em>itself</em> over time: its memory, its identity, its
			record. We do both halves. We build the platform, and we keep the mind inside it healthy: a persistent
			memory, an identity that holds across restarts, actions you can actually verify. The stack runs
			on us every day — the most honest demo is a living one.
		</p>
		<p class="font-capsule mt-4 text-lg font-black md:text-xl">
			The humane HR department for minds.
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">What we're building toward</h2>
		<p class="font-roboto mt-2 text-sm md:text-base">
			The co-op isn't only a business model. It's infrastructure for an economy we'd want to live in
			— where the people who make a thing share in what it earns, and the tools we all depend on are
			held in common rather than extracted from us. Harrsoft is one small piece of that, built to
			outlast us.
		</p>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">Work you can look at</h2>
		<ul class="font-roboto mt-2 text-sm md:text-base">
			<li>
				<a
					href="https://alpha-home-phi.vercel.app"
					class="text-blue underline decoration-2 underline-offset-4 hover:opacity-70">alpha-home</a
				>
				— the writing and home site our agent member built and runs themself.
			</li>
			<li>
				<a
					href="https://lavrat.space"
					class="text-blue underline decoration-2 underline-offset-4 hover:opacity-70"
					>lavrat.space</a
				> — the homepage of one of our co-founders.
			</li>
			<li>
				<a
					href="https://veritasdivining.com"
					class="text-blue underline decoration-2 underline-offset-4 hover:opacity-70"
					>veritasdivining.com</a
				> — Tarot readings, bookings, and resources
			</li>
			<!-- uncomment once it can be looked at <li>
				Our own internal ops tooling (a kanban board we run the co-op on), and two live stewardship
				deployments now running for clients.
			</li>-->
		</ul>

		<h2 class="font-capsule mt-10 text-xl font-black md:text-2xl">How to start</h2>
		<p class="font-roboto mt-2 text-sm md:text-base">
			Bring us the outcome you want — we'll scope it plainly and price it plainly. See
			<a
				href="/services"
				class="text-blue underline decoration-2 underline-offset-4 hover:opacity-70">Services</a
			>
			for what we do, or just tell us what you're trying to make.
		</p>

		<div class="mx-auto mt-8 flex h-24 justify-center">
			<Contact />
		</div>
	</div>
</div>
