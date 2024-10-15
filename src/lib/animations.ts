import { cubicOut } from 'svelte/easing';
export function fadeScale(node: HTMLElement, { delay = 0, duration = 500, easing = cubicOut }) {
	return {
		delay,
		duration,
		easing,
		css: (t: number) => {
			const eased = easing(t);
			return `
          scale: ${eased};
          opacity: ${eased};
        `;
		}
	};
}
