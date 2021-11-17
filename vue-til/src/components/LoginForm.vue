<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form v-on:submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="username">pw:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<!-- <button v-bind:disabled="!isUsernameValid" type="submit">로그인</button> -->
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
					v-bind:class="!isUsernameValid || !password ? 'disabled' : null"
				>
					로그인
				</button>
				<p class="log">{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
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
				await this.$store.dispatch('LOGIN', userData);

				// ===============================================>
				// 하기 코드는 코드양을 줄이기 위하여 store > actions로 이동
				// // const response = await loginUser(userData);
				// // console.log(response);
				// const { data } = await loginUser(userData);
				// console.log(data.token);

				// // store에 토큰과 사용자 이름 설정
				// this.$store.commit('setToken', data.token);
				// this.$store.commit('setUsername', data.user.username);

				// // 쿠키에 토큰과 사용자 이름 설정
				// saveAuthToCookie(data.token);
				// saveUserToCookie(data.user.username);
				// ===============================================>

				this.$router.push('/main');
				// this.logMessage = `${data.user.username} 님 환영합니다.`;
			} catch (error) {
				console.log(error.response);
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
