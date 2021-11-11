import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 엑시오스 초기화 함수 (인증전 즉, 로그인 전)
function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

// 액시오스 초기화 함수 (인증후 즉, 로그인 후)
function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});
	return setInterceptors(instance);
}
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');
