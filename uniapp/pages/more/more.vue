<template>
	<view class="more">
		<view class="moreWrap">
			<view class="item" v-for="item in imgList">
				<navigator style="width: 100%; height: 100%;" :url="`../../pages/detail/detail?id=${item.id}&imgURL=${item.imgURL}`">
					<u-lazy-load border-radius='10' loading-img='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1701309144,2775778002&fm=26&gp=0.jpg'
					 error-img='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1662195914,2317478299&fm=26&gp=0.jpg' :image=item.imgURL
					 img-mode='widthFix'></u-lazy-load>
				</navigator>
			</view>
		</view>
		<u-divider v-if="isNoMore" type='primary' bg-color='#000' border-color='#fff' color='#fff'>已到网络的尽头</u-divider>
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop" top="2000"></u-back-top>
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
				scrollTop: 0
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
			this.offset += 10;
			this.getImgList();
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
				} else {
					this.isNoMore = true;
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
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(10, auto);
		grid-row-gap: 10rpx;
		grid-column-gap: 10rpx;
	}

	.item {
		/* background-color: pink; */

	}
</style>
