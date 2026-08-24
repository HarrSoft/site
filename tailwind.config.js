/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'project-grid': 'repeat(10, 50vw)',
				'project-grid-mobile': 'repeat(10, 70vw)'
			},
			aspectRatio: {
				'project-img': 'auto 960 / 540'
			}
		}
	},
	plugins: []
};
