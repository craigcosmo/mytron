<script lang="ts">
	let className = ''
	export { className as class }
	export let type: any = 'button'
</script>

<button
	class="pointer-events-auto cursor-pointer rounded-md bg-blue-500 p-1.5 px-3 py-2 font-semibold leading-5 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-opacity-75 {className}"
	on:click|preventDefault
	on:focus
	on:submit
	{type}>
	<slot />
</button>
