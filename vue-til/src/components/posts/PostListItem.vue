<template>
	<li>
		<div class="post-title">
			{{ postItem.title }}
		</div>
		<div class="post-contents">
			{{ postItem.contents }}
		</div>
		<div class="post-time">
			{{ postItem.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';
// import { formatDate } from '@/utils/filter';

export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	// 전역으로 사용하기 때문에 필요 없음(main.js 참조)
	// filters: {
	// 	formatDate(value) {
	// 		return new Date(value);
	// 	},
	// },
	methods: {
		async deleteItem() {
			if (confirm('You want to delete it?')) {
				await deletePost(this.postItem._id);
				this.$emit('refresh');
			}
		},
		routeEditPage() {
			const id = this.postItem._id;
			this.$router.push(`/post/${id}`);
		},
	},
};
</script>

<style></style>
