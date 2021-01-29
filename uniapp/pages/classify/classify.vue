<template>
	<view class="classify">
		<u-search placeholder="搜索壁纸" v-model="keyword" :clearabled="true" :animation="true"></u-search>
		<view class="classify-itemContainer">
			<view class="classify-item" v-for="item in classsifyList" :key='item.id' @click="toPath(item.name)">
				<view style="height: 100px; line-height: 100px;text-align: center;">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				classsifyList: []
			}
		},
		onLoad() {
			this.gettags();
		},
		methods: {
			async gettags() {
				const result = await this.myRequest({
					url: this.$api.getTagList,
					method: 'get'
				});
				console.log(result);
				this.classsifyList = result.data;
			},
			toPath(title){
				uni.navigateTo({
					url: `/pages/more/more?title=${title}`
				})
			}
		}
	}
</script>

<style scoped>
	.classify-itemContainer {
		padding: 20rpx;
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-template-rows: repeat(10, auto);
		grid-row-gap: 20rpx;
		grid-column-gap: 20rpx;
	}

	.classify-item {
		border: 1px solid #A0B8EA;
		border-radius: 10rpx;
		font-weight: bold;
	}
	.classify-item:nth-child(2n-1){
		background-image: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2802144128,2530753695&fm=26&gp=0.jpg');
		background-size: cover;
	}
	.classify-item:nth-child(2n){
		background-image: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3658379912,845864056&fm=26&gp=0.jpg');
		background-size: cover;
	}
</style>
