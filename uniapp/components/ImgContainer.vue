<!-- 栏目组件 -->
<template>
	<view class="column">
		<!-- 栏目标题 -->
		<view class="Title">
			<view class="Title-view">
				<u-image style="width:20%;" mode="widthFix" src="http://123.56.1.202/xxch/bizhi/tag.png"></u-image>
				<strong class='titleText'>{{ title }}</strong>
			</view>
			<u-button class="moreBtn" shape="circle" size="mini" @click="toPath">{{ btnText }}</u-button>
		</view>
		<!-- 主体部分,允许横向滑动-->
		<view class="column-content">
			<scroll-view scroll-x="true" class="scroll-view">
				<view v-for="(item, index) in imgList" :key="index" class="imgList-item" :style="[{width: imgWidth},{marginRight: index == imgList.length-1 ? '0rpx' : '20rpx'}]">
					<navigator style="width: 100%; height: 100%;" :url="`../../pages/detail/detail?id=${item.id}&imgURL=${item.imgURL}&type=${type}`">
						<u-lazy-load border-radius='10' loading-img='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1701309144,2775778002&fm=26&gp=0.jpg'
						 error-img='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1662195914,2317478299&fm=26&gp=0.jpg'
						 :image="item.imgURL" img-mode='aspectFill'></u-lazy-load>
					</navigator>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			btnText: {
				type: String,
				default: '查看更多'
			},
			path: {
				type: String,
				default: '/pages/more/more'
			},
			imgList: {
				type: Array
			},
			type: {
				type: String
			},
			imgWidth: {
				type: String,
				default: '250rpx'
			}
		},
		data() {
			return {}
		},
		methods: {
			toPath() {
				let resultTitle = this.title;
				if(this.title==='今日精选' || this.title==='今日最新' || this.title==='近期热门'){
					resultTitle = '手机壁纸'
				}
				uni.navigateTo({
					url: `${this.path}?title=${resultTitle}`
				});
			}
		}
	}
</script>

<style scoped>
	// 标题
	.Title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		background-color: #fff;
		border-bottom: 1px solid #FED1B0;
	}

	.Title-view {
		width: 240rpx;
		color: #323232;
		font-weight: bold;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.titleText {
		margin-left: 20rpx;
	}

	.moreBtn {
		margin: 0;
		color: #1c1c1c;
	}

	// 内容
	.column-content {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		padding: 20rpx;
		background-color: #fff;
	}

	.scroll-view {
		width: 100%;
		white-space: nowrap;
	}

	.imgList-item {
		display: inline-block;
	}
</style>
