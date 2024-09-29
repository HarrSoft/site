<script setup lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cubicOut } from 'svelte/easing';

	const dispatch = createEventDispatcher();
	function close(e: MouseEvent | KeyboardEvent) {
		dispatch('close', e);
	}
	export let isOpen = false;

	$: {
		if (typeof document !== 'undefined' && isOpen) {
			const scrollY = `${window.scrollY}px`;
			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollY}`;
			const appElement: Element | null = document.getElementById('app');
			if (appElement) {
				appElement.classList.add('frozen');
			}
		} else if (typeof document !== 'undefined') {
			const scrollY = document.body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			const appElement: Element | null = document.getElementById('app');
			if (appElement) {
				appElement.classList.remove('frozen');
			}
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
		}
	}
	function modalFade(node: HTMLElement, { delay = 0, duration = 700, easing = cubicOut }) {
		return {
			delay,
			duration,
			easing,
			css: (t: number) => {
				const eased = easing(t);
				return `
          opacity: ${eased};
          transform: scale(${1 + 0.3 * (1 - eased)});
          filter: blur(${(1 - eased) * 10}px);
        `;
			}
		};
	}
</script>

{#if isOpen}
	<div
		id="modal-backdrop"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		on:click|self={close}
		on:keydown={(e) => {
			if (e.key === 'Escape') close(e);
		}}
		aria-hidden={!isOpen}
		class="fixed top-0 right-0 bottom-0 left-0 justify-center items-center flex z-20"
		transition:modalFade={{ duration: 700 }}
	>
		<div class="focused-content bg-cyan-600 flex-initial basis-4/5 h-4/5 overflow-y-auto">
			<button id="closer" aria-label="Close" on:click={close} class="absolute z-21">
				Close <span aria-hidden="true">❌</span>
			</button>
			<slot></slot>
		</div>
	</div>
{/if}

<style scoped>
	#modal-backdrop {
		background-color: rgba(24, 24, 31, 0.87);
	}
	.focused-content {
		box-shadow: 2px 2px 20px 1px rgb(59, 59, 124);
	}
	#closer {
		top: 12%;
		right: 12%;
		z-index: 21;
	}
</style>
