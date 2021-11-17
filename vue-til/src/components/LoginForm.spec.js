// import { sum } from './math';

// sum(10, 20);
// describe('math.js', () => {
// 	test('10 + 20 = 30', () => {
// 		const result = sum(10, 20);
// 		expect(result).not.toBe(30);
// 	});
// });

import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
		const instance = new Vue(LoginForm).$mount();
		// console.log(instance);
		expect(instance.username).toBe('');
	});
});
