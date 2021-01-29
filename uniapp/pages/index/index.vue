<template>
	<view class="index">
		<view class="swiper">
			<u-swiper :list="swiperList" height='340' :effect3d="true" @click="swiperClick"></u-swiper>
		</view>
		<view class="top10">
			<u-grid :col="3">
				<u-grid-item @click="toPath('more')">
					<u-image style="width: 25%;" mode="widthFix" src="http://123.56.1.202/xxch/bizhi/cqbz.png"></u-image>
					<view class="grid-text">超清壁纸</view>
				</u-grid-item>
				<u-grid-item @click="toPath('classify')">
					<u-image style="width: 25%;" mode="widthFix" src="http://123.56.1.202/xxch/bizhi/bzhj.png"></u-image>
					<view class="grid-text">壁纸合集</view>
				</u-grid-item>
				<u-grid-item @click="toPath('more')">
					<u-image style="width: 25%;" mode="widthFix" src="http://123.56.1.202/xxch/bizhi/top.png"></u-image>
					<view class="grid-text">排行榜</view>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 今日精选 -->
		<view class="top10">
			<imgContainer title='今日精选' type='iphone' btnText='往日' :imgList='imgList' />
		</view>
		<view class="top10">
			<imgContainer title='电脑壁纸' type='pc' imgWidth='100%' btnText='查看更多' :imgList='pcImgList' />
		</view>
		<view class="top10">
			<imgContainer title='今日最新' type='iphone' btnText='查看更多' :imgList='imgList' />
		</view>
		<view class="top10">
			<imgContainer title='近期热门' type='iphone' btnText='查看更多' :imgList='hotImgList' />
		</view>
		<view class="top10">
			<imgContainer title='随机推荐' path='/pages/turnImg/turnImg' type='iphone' btnText='试试手气' :imgList='randImgList' />
		</view>
		<view class="top10">
			<imgContainer title='每日一图' type='pc' path='/pages/demozhihu/demozhihu' imgWidth='100%' btnText='查看更多' :imgList='everyDateImg' />
		</view>
		<view class="top10">
			<imgContainer title='二次元动漫' path='/pages/demozhihu/demozhihu' type='pc' imgWidth='100%' btnText='查看更多' :imgList='anime' />
		</view>
		<view class="top10">
			<imgContainer title='menhear酱' path='/pages/demotantan/demotantan' type='pc' imgWidth='100%' btnText='查看更多' :imgList='menhear' />
		</view>
		<view class="top10">
			<imgContainer title='风景' path='/pages/demozhihu/demozhihu' type='pc' imgWidth='100%' btnText='查看更多' :imgList='scenery' />
		</view>
		<!-- 无网络提示 -->
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	import imgContainer from '../../components/ImgContainer.vue';
	export default {
		components: {
			imgContainer
		},
		computed: {
			swiperList: function() {
				return this.pcImgList.filter((item, index) => {
					item.image = item.imgURL;
					return index % 2 != 0;
				})
			}
		},
		data() {
			return {
				// 今日精选
				imgList: [],
				// 电脑壁纸
				pcImgList: [],
				// 随机推荐
				randImgList: [],
				// 近期热门
				hotImgList: [],
				// 每日一图
				everyDateImg: [{
					imgURL: 'https://api.dujin.org/bing/1920.php'
				}],
				// 2次元动漫
				anime: [{
					imgURL: 'https://api.ixiaowai.cn/api/api.php'
				}],
				// menhear酱
				menhear: [{
					imgURL: 'https://api.ixiaowai.cn/mcapi/mcapi.php'
				}],
				// 风景
				scenery: [{
					imgURL: 'https://api.ixiaowai.cn/gqapi/gqapi.php'
				}],
				offset: 0,
				size: 10
			}
		},
		onLoad() {},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.getImgList('手机壁纸');
			this.getImgList('电脑壁纸');
			uni.redirectTo({
				url: '../index/index'
			})
		},

		// 监听页面触底
		// onReachBottom() {
		// 	console.log('页面触底事件');
		// },
		onShow() {
			this.getImgList('手机壁纸');
			this.getImgList('电脑壁纸');
			this.getRandImgList();
			this.getHotImgList();
		},
		methods: {
			// 获取图片列表
			async getImgList(type) {
				const result = await this.myRequest({
					url: `${this.$api.BASEURL}/wallpaper?type=${type}&offset=${this.offset}&size=${this.size}`,
					method: 'get'
				});
				switch (type) {
					case '手机壁纸':
						this.imgList = result.data;
						break;
					case '电脑壁纸':
						this.pcImgList = result.data;
						break;
					default:
						break;
				}
				// 停止当前页面的下拉刷新
				uni.stopPullDownRefresh();
			},
			async getRandImgList() {
				const result = await this.myRequest({
					url: this.$api.randList,
					data: {
						type: '手机壁纸',
						size: 10
					},
					method: 'post'
				});
				this.randImgList = result.data;
			},
			async getHotImgList() {
				const result = await this.myRequest({
					url: this.$api.randList,
					data: {
						type: '手机壁纸',
						size: 10
					},
					method: 'post'
				});
				this.hotImgList = result.data;
			},
			swiperClick(i) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${this.swiperList[i].id}&imgURL=${this.swiperList[i].image}&type=电脑壁纸`
				})
			},
			toPath(path) {
				if (path === 'more') {
					uni.navigateTo({
						url: '/pages/more/more?title=手机壁纸'
					})
				} else {
					uni.switchTab({
						url: '/pages/classify/classify'
					})
				}

			}
		}
	}
</script>

<style lang="scss">
	.index {
		background-color: #eee;
	}

	.swiper {
		width: 98%;
		padding-top: 10rpx;
		margin: auto;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 10rpx;
		color: $u-type-info;
	}

	.top10 {
		margin-top: 20rpx;
	}
</style>
