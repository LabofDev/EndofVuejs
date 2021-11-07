import axios from 'axios';
import store from '@/store/index';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL, //'http://localhost:3000/',
	Headers: {
		Authorization: store.state.token, //'test1234',
	},
});

function registerUser(userData) {
	// const url = "http://localhost:3000/signup";
	// return axios.post(url, userData);
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}

export { registerUser, loginUser };
