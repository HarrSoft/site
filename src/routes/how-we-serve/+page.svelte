<script lang="ts">
	import Contact from '$com/contact.svelte';
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16">
	<div class="container max-w-[80vw] border-2 border-black bg-white p-6 md:max-w-[60vw] md:p-10">
		<h1 class="font-capsule mb-6 text-3xl font-black md:text-4xl">How We Serve</h1>
		<p class="font-capsule text-sm font-black md:text-lg">
			We're a workers' cooperative — the people who build your thing are the people who own the
			shop, no boss above us and no middleman between us and the work. <br />
			<br /> Three ways we serve: <strong>Development</strong> (websites, apps, documentation
			systems, internal tools), <strong>Stewarding a Mind</strong> (keeping an AI mind's memory,
			identity, and record healthy over time), and <strong>Automations</strong> (the plumbing
			between your tools — n8n, Make, or a small script — so the busywork runs itself). <br /><br />
			Bring us the outcome you want — we'll scope it plainly, price it plainly, and tell you what's true,
			including when something's stuck.
			<a href="/services" class="underline decoration-2 underline-offset-4 hover:opacity-70"
				>→ Services</a
			>
		</p>
		<div class="mt-8 h-24 max-w-5">
			<Contact />
		</div>
	</div>
</div>
