import Vue from 'vue';
import Vuex from 'vuex';
import {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
		clearToken(state) {
			state.token = '';
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			console.log(data.token);

			// store에 토큰과 사용자 이름 설정
			commit('setToken', data.token);
			commit('setUsername', data.user.username);

			// 쿠키에 토큰과 사용자 이름 설정
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);

			return data; // 기본적으로 promise를 자동으로 리턴한다.(명시적으로 반환)
		},
	},
});
