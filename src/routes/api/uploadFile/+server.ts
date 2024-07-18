import { env, imageUrl, serverPath } from '$lib/config'
import { json } from '@sveltejs/kit'
import fs from 'fs'
import path from 'path'
import { randomNumber } from '$lib/randomNumber'

let item: any

const processFile = async (file, id) => {
	try {
		if (file && id) {
			const imageId = randomNumber(9)
			let name = randomNumber(9)
			const ext = path.extname(file.name)
			const local = env == 'production' ? '' : '_local'
			const nameext = name + '_trontron_' + local + ext
			const webpname = name + '_trontron_' + local + '.webp'
			const pathname = '' + nameext
			const convertpath = '' + webpname
			fs.writeFileSync(
				pathname,
				new Uint8Array(await file.arrayBuffer()),
			)

			return json({
				message: 'success',
				data: { name: name, id: imageId, url: imageUrl + webpname },
			})
		} else {
			return json({
				message: 'fail',
				error: 'unable to process image',
			})
		}
	} catch (error) {
		console.log('fail upload', error)
		return json({ message: 'fail', error })
	}
}

export const POST = async ({ request }) => {
	let reg = await request.formData()
	const id = reg.get('id')?.toString()
	const file = reg.get('file')?.valueOf() as File
	const uploadresult = await processFile(file, id)
	return uploadresult
}
