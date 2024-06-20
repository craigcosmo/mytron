<script lang="ts">
	import Dropzone from 'svelte-file-dropzone'

	export let sendFile
	let files: any = {
		accepted: [],
		rejected: [],
	}
	const handleFilesSelect = async (e) => {
		let { acceptedFiles, fileRejections } = e.detail
		files.accepted = [...files.accepted, ...acceptedFiles]
		files.rejected = [...files.rejected, ...fileRejections]
		await acceptedFiles.forEach(async (file) => {
			await sendFile(file)
		})
	}
</script>

<Dropzone
	containerClasses="toolong border-dashed border border-gray-900\/25 rounded-lg"
	accept={'.png, .jpg, .jpeg, .webp'}
	on:drop={handleFilesSelect}>
	<div class="text-center">
		<i class="fa-sharp fa-image text-5xl text-gray-300"></i>
		<div class="mt-4 flex text-sm leading-6 text-gray-600">
			<label
				for="file-upload"
				class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
				<span>Upload a file</span>
			</label>
			<p class="pl-1">or drag and drop</p>
		</div>
		<p class="text-xs leading-5 text-gray-600">
			PNG, JPG, GIF up to 10MB
		</p>
	</div>
</Dropzone>

<style lang="scss">
	:global(.toolong) {
		// background-color: #b5b6b7 !important;
		// color: #fff !important;
		color: #000 !important;
		font-size: 20px;
		border-radius: 6px;
		cursor: pointer;
	}
</style>
