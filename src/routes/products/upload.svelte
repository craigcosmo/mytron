<script lang="ts">
	import api from '$lib/api'
	import { postUpload } from '$lib/postUpload'
	import Drop from './drop.svelte'
	export let handleSubmit
	import _ from 'lodash'
	import { toast } from '@zerodevx/svelte-toast'

	const sendFile = async (file) => {
		await handleSubmit()

		toast.push('uploading file', file.name)
		const response: any = await postUpload(api.uploadFile, {
			file: file,
			id: 12,
		})
	}
</script>

<div>
	<Drop {sendFile} />
</div>
