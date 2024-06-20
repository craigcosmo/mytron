module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	ignorePatterns: ['*.cjs'],
	rules: {
		'svelte/no-at-html-tags': 0,
		'svelte/valid-compile': ['error', { ignoreWarnings: true }],
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/no-inferrable-types': 0,
		'a11y-no-static-element-interactions': 0,
		'no-var': 0,
		'prefer-const': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/no-empty-function': 0,
		'a11y-label-has-associated-control': 0,
		'a11y-missing-attribute': 0,
		'a11y-click-events-have-key-events': 0,
		'no-constant-condition': 0,
		'no-prototype-builtins': 0,
		'a11y-autocomplete-valid': 0,
		'no-empty': 0,
	},
}
