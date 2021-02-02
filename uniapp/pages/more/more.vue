<template>
	<view class="more">
		<!-- 电脑壁纸布局 -->
		<template v-if="title==='电脑壁纸'?true:false">
			<view class="moreWrap">
				<view class="item" v-for="item in imgList">
					<navigator style="width: 100%; height: 100%;" :url="`../../pages/detail/detail?id=${item.id}&imgURL=${item.imgURL}`">
						<u-lazy-load border-radius='10' loading-img='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1701309144,2775778002&fm=26&gp=0.jpg'
						 error-img='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1662195914,2317478299&fm=26&gp=0.jpg'
						 :image=item.imgURL img-mode='widthFix'></u-lazy-load>
					</navigator>
				</view>
			</view>
		</template>
		<!-- 手机壁纸布局：瀑布流 -->
		<template v-else>
			<u-waterfall v-model="imgList">
				<template v-slot:left="{leftList}">
					<view class="warter-left" v-for="(item, index) in leftList" :key="index">
						<navigator style="width: 100%; height: 100%;" :url="`../../pages/detail/detail?id=${item.id}&imgURL=${item.imgURL}`">
							<u-lazy-load border-radius='10' loading-img='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1701309144,2775778002&fm=26&gp=0.jpg'
							 error-img='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1662195914,2317478299&fm=26&gp=0.jpg'
							 :image=item.imgURL img-mode='widthFix'></u-lazy-load>
						</navigator>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="warter-right" v-for="(item, index) in rightList" :key="index">
						<navigator style="width: 100%; height: 100%;" :url="`../../pages/detail/detail?id=${item.id}&imgURL=${item.imgURL}`">
							<u-lazy-load border-radius='10' loading-img='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1701309144,2775778002&fm=26&gp=0.jpg'
							 error-img='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1662195914,2317478299&fm=26&gp=0.jpg'
							 :image=item.imgURL img-mode='widthFix'></u-lazy-load>
						</navigator>
					</view>
				</template>
			</u-waterfall>
		</template>

		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop" top="2000"></u-back-top>
		<!-- 加载更多 -->
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="getImgList"></u-loadmore>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				offset: 0,
				size: 10,
				title: '',
				// 控制“已到网络的尽头”是否显示
				isNoMore: false,
				scrollTop: 0,
				loadStatus: 'loadmore'
			}
		},
		// 监听页面滚动
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad(option) {
			// 动态修改导航栏文字
			uni.setNavigationBarTitle({
				title: option.title
			})
			this.title = option.title;
		},
		onShow() {
			this.getImgList(this.title);
		},
		// 监听页面触底
		onReachBottom() {
			this.loadStatus = 'loading';
			this.offset += 10;
			this.getImgList(this.title);
		},
		methods: {
			// 获取图片列表
			async getImgList(type = '手机壁纸') {
				const result = await this.myRequest({
					url: `${this.$api.BASEURL}/wallpaper?type=${type}&offset=${this.offset}&size=${this.size}`,
					method: 'get'
				});
				if (result.data.length) {
					for (let i of result.data) {
						this.imgList.push(i);
					}
					this.loadStatus = 'loadmore';
				} else {
					this.loadStatus = 'nomore';
				}
			}
		}
	}
</script>

<style scoped>
	.more {
		/* background-color: #000000; */
	}

	.moreWrap {
		padding: 10rpx;
		display: grid;
		grid-template-columns: repeat(1, auto);
		grid-template-rows: repeat(10, auto);
		grid-row-gap: 10rpx;
		grid-column-gap: 10rpx;
	}

	.warter-left {
		margin-left: 8rpx;
		padding: 8rpx;
	}
	
	.warter-right {
		margin-right: 8rpx;
		padding: 8rpx;
	}

	.item {
		/* background-color: pink; */

	}
</style>
