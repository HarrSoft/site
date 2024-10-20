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
		class="absolute left-1/2 md:top-1/2 top-3/4 flex w-[80vw] -translate-x-1/2 -translate-y-1/2 transform justify-center rounded-lg border-2 border-blue bg-white p-4 font-black sm:w-[500px]"
		on:click={presentForm}
	>
		Contact Us
	</button>
	<Modal on:close={hideForm}>
		<div class=" grid place-items-center h-full">
			<form
				style="opacity: {isModalOpen ? 1 : 0}; transform: {isModalOpen ? 'scale(1)' : 'scale(0)'}"
				class="duration-300 text-white bg-blue border-accent border-2 p-6 rounded-md flex justify-between min-w-[50%] flex-col max-h-[70vh] bottom-[16%] md:left-2"
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
					<button on:click={() => hideForm()} class="button">Cancel</button>
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
	.input,
	.textarea {
		@apply rounded-md font-Roboto border-2 border-slate-600 text-black font-black p-2 shadow-sm;
	}

	.button {
		@apply rounded-md font-CapsuleSemiExpanded bg-white text-black border-2 border-slate-600 shadow-sm mr-4 mt-4 px-3 py-1;
	}

	label {
		@apply font-CapsuleSemiExpanded pt-1;
	}
</style>
