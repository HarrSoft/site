<script lang="ts">
	import Modal from './modal.svelte';
	import { isModalOpen } from '$lib/stores/modal';
	function presentForm() {
		isModalOpen.set(true);
	}
	function hideForm() {
		isModalOpen.set(false);
	}
</script>

<div>
	<button
		class="border-blue my-10 flex w-[80vw] justify-center rounded-lg border-2 bg-white p-4 font-black sm:w-[500px]"
		onclick={presentForm}
	>
		Contact Us
	</button>
	<Modal on:close={hideForm}>
		<div class=" grid h-full place-items-center">
			<form
				style="opacity: {isModalOpen ? 1 : 0}; transform: {isModalOpen ? 'scale(1)' : 'scale(0)'}"
				class="bg-blue border-accent bottom-[16%] flex max-h-[70vh] min-w-[50%] flex-col justify-between rounded-md border-2 p-6 text-white duration-300 md:left-2"
				action="https://public.herotofu.com/v1/326727e0-8f33-11ef-9c6a-57d55e63ff7c"
				method="post"
				accept-charset="UTF-8"
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
					<label for="email">Your Phone</label>
					<input class="input" name="Phone" id="phone" type="tel" />
				</div>
				<div class="flex flex-col">
					<label for="your idea">Your Idea</label>
					<textarea class="textarea" rows="3" name="Idea" id="idea"></textarea>
				</div>
				<div class="flex w-full">
					<button type="submit" class="button">Book</button>
					<button onclick={() => hideForm()} class="button">Cancel</button>
				</div>
				<div
					style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;"
					aria-hidden="true"
				>
					<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
				</div>
			</form>
		</div>
	</Modal>
</div>

<style lang="postcss">
	@reference "../../app.css";
	.input,
	.textarea {
		@apply rounded-md border-2 border-slate-600 p-2 font-[Roboto] font-black text-black shadow-sm;
	}

	.button {
		@apply mt-4 mr-4 rounded-md border-2 border-slate-600 bg-white px-3 py-1 font-[CapsuleSemiExpanded] text-black shadow-sm;
	}

	label {
		@apply pt-1 font-[CapsuleSemiExpanded];
	}
</style>
