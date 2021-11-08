<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<ul>
				<li v-for="postItem in postItems" v-bind:key="postItem._id">
					{{ postItem.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/index';

export default {
	data() {
		return {
			postItems: [],
		};
	},
	methods: {
		async fetchData() {
			// const response = await fetchPosts();
			// console.log(response);
			const { data } = await fetchPosts();
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
