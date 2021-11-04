import Vue from 'vue';
import VueRouter from 'vue-router';
//import LoginPage from '@/views/LoginPage.vue';
//import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/login',
			//component: LoginPage,
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			//component: SignupPage,
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});
