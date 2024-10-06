/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#EBF0F1',
        blue: '#6E85C4'
			}
		},
		fontFamily: {
			Roboto: ['Roboto'],
			CapsuleSemiExpanded: ['H74 Capsule SemiExpanded'],
			HCapsuleBlack: ['H74 Capsule']
		}
	},
	plugins: []
};
