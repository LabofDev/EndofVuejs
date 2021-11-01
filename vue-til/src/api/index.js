import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL, //'http://localhost:3000/',
});

function registerUser(userData) {
	// const url = "http://localhost:3000/signup";
	// return axios.post(url, userData);
	return instance.post('signup', userData);
}

export { registerUser };
