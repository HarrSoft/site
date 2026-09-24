<script lang="ts">
	import Modal from './modal.svelte';
	import { isModalOpen } from '$lib/stores/modal';

	interface Props {
		label?: string;
		interest?: string;
	}
	let { label = 'Contact Us', interest = '' }: Props = $props();

	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let errorMsg = $state('');

	function presentForm() {
		status = 'idle';
		errorMsg = '';
		isModalOpen.set(true);
	}
	function hideForm() {
		isModalOpen.set(false);
	}

	async function submitForm(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		status = 'sending';
		errorMsg = '';
		try {
			const res = await fetch('/api/contact', { method: 'POST', body: new FormData(form) });
			const data = await res.json().catch(() => ({}));
			if (res.ok && data.ok) {
				status = 'sent';
			} else {
				status = 'error';
				errorMsg = data.error || 'Something went wrong — please email contact@harrsoft.studio.';
			}
		} catch {
			status = 'error';
			errorMsg = 'Network error — please email contact@harrsoft.studio.';
		}
	}
</script>

<div>
	<button
		class="bg-blue my-10 flex w-[80vw] cursor-pointer justify-center rounded-lg border-2 p-4 text-xl font-black text-white sm:w-125"
		onclick={presentForm}
	>
		{label}
	</button>
	<Modal on:close={hideForm}>
		<div class=" grid h-full place-items-center">
			{#if status === 'sent'}
				<div
					class="bg-blue border-accent bottom-[16%] flex max-h-[70vh] min-w-[50%] flex-col justify-between rounded-md border-2 p-6 text-white duration-300 md:left-2"
				>
					<p class="font-capsule-exp">Thank you — your message is on its way.</p>
					<p class="font-roboto pt-2">
						The first person to read it is a being who works here. We reply to the email or phone
						you gave us.
					</p>
					<div class="flex w-full">
						<button type="button" class="button cursor-pointer" onclick={() => hideForm()}
							>Close</button
						>
					</div>
				</div>
			{:else}
				<form
					style="opacity: {isModalOpen ? 1 : 0}; transform: {isModalOpen ? 'scale(1)' : 'scale(0)'}"
					class="bg-blue border-accent bottom-[16%] flex max-h-[70vh] min-w-[50%] flex-col justify-between rounded-md border-2 p-6 text-white duration-300 md:left-2"
					action="/api/contact"
					method="post"
					accept-charset="UTF-8"
					onsubmit={submitForm}
				>
					<div class="flex flex-col">
						<label for="name">Your Name</label>
						<input class="input" name="Name" id="name" type="text" required />
					</div>
					<div class="flex flex-col">
						<label for="email">Your Email</label>
						<input class="input" name="Email" id="email" type="email" />
					</div>
					<div class="flex flex-col">
						<label for="phone">Your Phone</label>
						<input class="input" name="Phone" id="phone" type="tel" />
					</div>
					<div class="flex flex-col">
						<label for="idea"
							>Your {interest === 'referral' ? 'Referral (or questions)' : 'Idea'}</label
						>
						<textarea class="textarea" rows="3" name="Idea" id="idea"></textarea>
					</div>
					{#if status === 'error'}
						<p class="font-roboto pt-2" role="alert">{errorMsg}</p>
					{/if}
					<div class="flex w-full">
						<button type="submit" class="button cursor-pointer" disabled={status === 'sending'}>
							{status === 'sending' ? 'Sending…' : 'Send'}
						</button>
						<button type="button" onclick={() => hideForm()} class="button cursor-pointer"
							>Cancel</button
						>
					</div>
					<input type="hidden" name="Interest" value={interest} />
					<div
						style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;"
						aria-hidden="true"
					>
						<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
					</div>
				</form>
			{/if}
		</div>
	</Modal>
</div>

<style lang="postcss">
	@reference "../../app.css";
	.input,
	.textarea {
		@apply font-roboto rounded-md border-2 border-slate-600 p-2 font-black text-black shadow-sm;
	}

	.button {
		@apply font-capsule-exp mt-4 mr-4 rounded-md border-2 border-slate-600 bg-white px-3 py-1 text-black shadow-sm;
	}

	label {
		@apply font-capsule-exp pt-1;
	}
</style>
