<template>
	<view class="detail">
		<view class="imgContainer">
			<!-- 手机壁纸布局 -->
			<template v-if="type=='iphone'?true:false">
				<image style="width: 100%; height: 100%;" mode="aspectFit" :src="imgURL"></image>
			</template>
			<!-- 电脑壁纸布局 -->
			<template v-else>
				<u-image class="img" style="width: 100%;" mode="widthFix" :src="imgURL"></u-image>
			</template>
			<view class="toolBar">
				<view class="toolBar-item" @click="goBack">
					<u-icon name="arrow-left" size="34"></u-icon>
					<view>返回</view>
				</view>
				<view class="toolBar-item" @click="collect">
					<u-icon :name="isCollect?'heart-fill':'heart'" :color="isCollect?'red':'white'" size="34"></u-icon>
					<view>收藏</view>
				</view>
				<view class="toolBar-item" @click="download">
					<u-icon name="download" size="34"></u-icon>
					<view>下载</view>
				</view>
				<!-- 编译到微信小程序 -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="toolBar-item">
					<button plain open-type='share' class="shareBtn">
						<u-icon name="zhuanfa" size="34"></u-icon>
						<view style="height: 18.5px; line-height: 18.5px; margin-top: 3rpx;" @click="share">分享</view>
					</button>
				</view>
				<!-- #endif -->
				<!-- 编译到APP -->
				<!-- #ifdef APP-PLUS -->
				<view class="toolBar-item" @click="share">
					<u-icon name="zhuanfa" size="34"></u-icon>
					<view style="height: 18.5px; line-height: 18.5px; margin-top: 3rpx;">分享</view>
				</view>
				<!-- #endif -->
			</view>
		</view>
		<!-- 进度条 -->
		<u-circle-progress class="progress" bg-color='rgba(0,0,0,0.4)' v-if="isShowLoading" active-color="#2979ff" :percent="percent">
			<view class="u-progress-content">
				<view class="u-progress-dot"></view>
				<text class='u-progress-info' style="color: #fff;">下载中</text>
			</view>
		</u-circle-progress>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgURL: '',
				id: '',
				type: '',
				isCollect: false,
				isShowLoading: false,
				// 下载进度
				percent: 0
			}
		},
		onLoad(option) {
			this.imgURL = option.imgURL;
			this.id = option.id;
			this.type = option.type;
		},

		// #ifdef MP-WEIXIN
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			} else { // 来自小程序右上角的胶囊分享
				console.log(res.target)
			}
			return {
				title: '这么好看的壁纸，当然要分享给有品味的你',
				path: `/pages/detail/detail?imgURL=${this.imgURL}`
			}
		},
		// #endif
		methods: {
			goBack() {
				// uni.switchTab({
				// 	url: '/pages/index/index'
				// });
				// 返回原页面
				uni.navigateBack();
			},
			// 收藏
			collect() {
				this.isCollect = !this.isCollect;
			},
			share() {
				let _this = this;
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: _this.imgURL,
					title: "这么好看的壁纸，当然要分享给有品味的你",
					imageUrl: _this.imgURL,
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			download() {
				this.isShowLoading = true;
				// 下载文件资源到本地
				const downloadTask = uni.downloadFile({
					url: this.imgURL,
					success: (res) => {
						if (res.statusCode === 200) {
							this.isShowLoading = false;
							let file = res.tempFilePath;
							this.save(file);
						}
					},
					fail: () => {}
				});

				downloadTask.onProgressUpdate((res) => {
					this.percent = res.progress;
				});
			},
			// 保存图片到本地
			save(url) {
				this.isShowLoading = true;
				uni.saveImageToPhotosAlbum({
					filePath: url,
					success: () => {
						this.isShowLoading = false;
						this.$u.toast('图片已保存');
					},
					fail: () => {
						this.isShowLoading = false;
						this.$u.toast('保存失败');
					}
				});
			},
		}
	}
</script>

<style scoped>
	.detail {
		width: 100%;
		height: 100vh;
		background-color: #000000;
		position: relative;
	}

	.imgContainer {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.img {
		-webkit-box-reflect: below 0 -webkit-linear-gradient(transparent 40%, rgba(0, 0, 0, .4));
	}

	.toolBar {
		width: 90%;
		height: 100rpx;
		position: fixed;
		left: 50%;
		bottom: 5%;
		transform: translateX(-50%);
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: white;
		font-size: 28rpx;
		background: rgba(74, 74, 74, 0.55);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(4.5px);
		-webkit-backdrop-filter: blur(4.5px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		-moz-box-shadow: 2px 2px 5px #333333;
		-webkit-box-shadow: 2px 2px 5px #333333;
		box-shadow: 2px 2px 5px #333333;
	}

	.toolBar-item {
		text-align: center;
	}

	.toolBar-item:active,
	.shareBtn:active {
		color: #00ffff;
	}

	.shareBtn {
		border: none;
		margin: 0;
		padding: 0;
		color: white;
		font-size: 28rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.progress {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
</style>
