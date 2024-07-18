export const env = process.env.NODE_ENV



let imageUrl = 'https://db.contron.vn/photo/'
let serverPath = '/domains/db.contron.vn/public_html/photo/'
let authTokenName = 'token'

let apiUrl: string =
	env == 'production'
		? 'https://contron.vn/api/'
		: 'http://localhost:9955/api/'

let siteUrl: string =
	env == 'production'
		? 'https://contron.vn/'
		: 'http://localhost:9955/'
let cmsUrl: string =
	env == 'production'
		? 'https://contron.vn/cms/'
		: 'http://localhost:9955/cms/'
const localStorageName = {
	previouspage: 'previouspage',
	cart: 'cart',
	user: 'user',
	token: 'token',
}
// emai account

export {
	apiUrl,
	siteUrl,
	cmsUrl,
	imageUrl,
	serverPath,
	authTokenName,
	localStorageName,
}
