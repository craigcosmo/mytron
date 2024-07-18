// import adapter from '@sveltejs/adapter-auto'
// import adapter from '@sveltejs/adapter-node'
import adapter from 'svelte-adapter-bun'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) return
		if (warning.code === 'missing-exports-condition') return
		if (warning.code === 'a11y-no-static-element-interactions') return
		if (warning.code === 'svelte-ignore a11y-autofocus') return
		if (warning.code.startsWith('css-unused-selector')) return
		handler(warning)
	},
	kit: {
		adapter: adapter(),
	},
}

export default config
