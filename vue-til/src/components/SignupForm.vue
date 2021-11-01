<template>
	<!-- <form @submit.prevent="submitForm"> -->
	<form v-on:submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button type="submit">회원 가입</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',

			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			console.log('폼 제출');
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			// const response = await registerUser(userData);
			const { data } = await registerUser(userData);
			// console.log(response.data);
			console.log(data.username);
			this.logMessage = `${data.username}님이 가입되었습니다.`;

			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
