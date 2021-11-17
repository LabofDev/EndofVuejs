// import { sum } from './math';

// sum(10, 20);
// describe('math.js', () => {
// 	test('10 + 20 = 30', () => {
// 		const result = sum(10, 20);
// 		expect(result).not.toBe(30);
// 	});
// });

// import Vue from 'vue';
import LoginForm from './LoginForm.vue';
import { shallowMount } from '@vue/test-utils';

describe('LoginForm.vue', () => {
	test('#1. ID는 이메일 형식이여야 한다.', () => {
		// const instance = new Vue(LoginForm).$mount();
		// console.log(instance);
		// expect(instance.username).toBe('');

		// const wrapper = shallowMount(LoginForm);
		// console.log(wrapper.vm.username);
		// expect(wrapper.vm.username).toBe('');

		// const wrapper = shallowMount(LoginForm);
		// const idInput = wrapper.find('#username');
		// console.log(idInput.html());

		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test@abc.com',
				};
			},
		});
		const idInput = wrapper.find('#username');
		console.log('InputBox Value ', idInput.element.value);
		console.log(wrapper.vm.isUsernameValid);
	});

	test('#2. ID는 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});

	test('#3. ID와 PWD가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'a@a.com',
					password: '1234',
				};
			},
		});
		const button = wrapper.find('button'); // '.btn'
		expect(button.element.disabled).toBeTruthy();
	});
});
