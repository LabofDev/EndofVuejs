<template>
	<form v-on:submit.prevent="submitForm">
		<div>
			<label for="username">id:</label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="username">pw:</label>
			<input id="password" type="text" v-model="password" />
		</div>
		<!-- <button v-bind:disabled="!isUsernameValid" type="submit">로그인</button> -->
		<button :disabled="!isUsernameValid || !password" type="submit">
			로그인
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				// const response = await loginUser(userData);
				// console.log(response);
				const { data } = await loginUser(userData);
				console.log(data.user.username);
				this.logMessage = `${data.user.username} 님 환영합니다.`;
			} catch (error) {
				// console.log(error.response);
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
