import { apiUrl } from './config'
import { loadUserToken } from './loadLocalStorage'
import { message } from './message'
import type { FileToUpload } from '$lib/interface'

export const postUpload = async (
	apiName: string,
	data: FileToUpload,
) => {
	const url = apiUrl + apiName
	const token = loadUserToken()

	const formData: any = new FormData()
	formData.append('file', data.file)
	formData.append('id', data.id)
	try {
		consoleRequest(url, data)
		let res = await fetch(url, {
			headers: {
				Authorization: token,
				// 'Content-Type': 'application/json; charset=utf-8',
				// 'Content-Type': 'multipart/form-data',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			method: 'POST',
			body: formData,
		})
		let response = await res.json()
		consoleResponse(url, response)
		return response
	} catch (error) {
		console.log('can not not connect to server', error)
		return {
			message: message.fail,
			error: 'can not not connect to server',
		}
	}
}

const consoleRequest = (url, data) => {
	console.group(`posting to ${url}  `)
	console.info(JSON.stringify(data, undefined, 4))
	console.groupEnd()
}
const consoleResponse = (url, response) => {
	console.group(`response from ${url}  `)
	if (typeof response == 'object') {
		console.info(JSON.stringify(response, undefined, 4))
	} else {
		console.info(response)
	}
	console.groupEnd()
}
