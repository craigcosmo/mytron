/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,svelte-kit}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio', '@tailwindcss/forms', '@tailwindcss/line-clamp'),
	],
}
