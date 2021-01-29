<template>
	<view class="turnImg">
		<view class="moreWrap">
			<view class="item" v-for="(item,index) in imgList" :key='item.id'>
				<turnCard class='turncard' style="height: 100%;">
					<view style="height: 100%;" @click='turnCardClick(index)'>
						<image style="width: 100%; height: 100%;" mode="aspectFill" :src="item.imgURL"></image>
						<!-- <u-lazy-load border-radius='10' loading-img='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1701309144,2775778002&fm=26&gp=0.jpg'
						 error-img='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1662195914,2317478299&fm=26&gp=0.jpg' :image="item.imgURL"
						 img-mode='aspectFill' style="width: 100%; height: 100%;"></u-lazy-load> -->
					</view>
				</turnCard>
			</view>
		</view>
	</view>
</template>

<script>
	import turnCard from '../../components/turnCard.vue'
	export default {
		components: {
			turnCard
		},
		data() {
			return {
				imgList: [],
				size: 9
			}
		},
		onLoad() {
			this.getImgList("手机壁纸");
		},
		methods: {
			// 获取图片列表
			async getImgList(type = '手机壁纸') {
				const result = await this.myRequest({
					url: this.$api.randList,
					data:{
						type,
						size: this.size
					},
					method: 'post'
				});
				this.imgList = result.data;
			},
			turnCardClick(index) {
				uni.navigateTo({
					url: `/pages/detail/detail?imgURL=${this.imgList[index].imgURL}&type='iphone'`
				});
			}
		}
	}
</script>

<style scoped>
	.turnImg {
		height: 100%;
	}

	.moreWrap {
		height: calc(100vh - 104rpx);
		padding: 20rpx;
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(3, auto);
		grid-row-gap: 20rpx;
		grid-column-gap: 20rpx;
	}

	/* #ifdef MP-WEIXIN */
	.moreWrap {
		height: 100vh;
	}

	/* #endif */

	.turncard {
		height: 100%;
	}
</style>
