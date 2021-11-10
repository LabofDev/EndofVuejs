<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<!-- <div v-if="isLoading">Loading...</div> -->
			<LoadingSpinner v-if="isLoading"></LoadingSpinner>
			<ul v-else>
				<PostListItem
					v-for="postItem in postItems"
					v-bind:key="postItem._id"
					v-bind:postItem="postItem"
				></PostListItem>
			</ul>
		</div>
		<router-link to="/add" class="create-button">
			<i class="ion-md-add"></i>
		</router-link>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/index';

export default {
	components: {
		PostListItem,
		LoadingSpinner,
	},
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	methods: {
		async fetchData() {
			// const response = await fetchPosts();
			// console.log(response);
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
