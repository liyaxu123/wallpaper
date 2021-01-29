<template>
	<view class="my">
		<view class="avatar">
			<u-avatar :src="avatar" @click="chooseAvatar"></u-avatar>
		</view>
		<view class="nickname">{{nickname}}</view>
		<view class="container">
			<view class="container-item" v-for="item in list" :key='item' @click="openModel(item.text)">
				{{item.text}}
			</view>
		</view>
		<!-- 模态框 -->
		<u-modal v-model="show" :content="content"></u-modal>
		<!-- #ifdef APP-PLUS || H5 -->
		<view style="margin-top: 10px;">
			<u-button @click="toPage('uploadImg')">上传壁纸</u-button>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: '',
				nickname: '小笑残虹',
				list: [{
						text: '我的收藏',
						path: '',
						icon: ''
					},
					{
						text: '我的下载',
						path: '',
						icon: ''
					},
					{
						text: '我的分享',
						path: '',
						icon: ''
					},
					{
						text: '关于',
						path: '',
						icon: ''
					}
				],
				show: false,
				content: ''
			}
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				// 可以在此上传到服务端
				// uni.uploadFile({
				// 	url: 'http://www.example.com/upload',
				// 	filePath: path,
				// 	name: 'file',
				// 	complete: (res) => {
				// 		console.log(res);
				// 	}
				// });
			})
		},
		methods: {
			chooseAvatar() {
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
				this.$u.route({
					// 关于此路径，请见下方"注意事项"
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					// 内部已设置以下默认参数值，可不传这些参数
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 300,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 200,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
			toPage(path) {
				uni.navigateTo({
					url: `../${path}/${path}`
				})
			},
			openModel(item) {
				if (item === '关于') {
					this.content = '该APP仅为学习使用，不得用于其他商业用途。微信公众号：小笑残虹，关注我一起交流学习进步。'
					this.show = true;
				}else{
					this.content = '该功能留给聪明的你了，注意事项：请查看关于！'
					this.show = true;
				}
			}
		}
	}
</script>

<style scoped>
	.my {}

	.avatar {
		display: flex;
		justify-content: center;
		margin-top: 40rpx;
	}

	.nickname {
		text-align: center;
		margin: 20rpx 0rpx;
	}

	.container {
		padding: 20rpx;
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-template-rows: repeat(2, auto);
		grid-row-gap: 20rpx;
		grid-column-gap: 20rpx;
	}

	.container-item {
		height: 200rpx;
		line-height: 200rpx;
		text-align: center;
		border: 1px solid #A0B8EA;
		border-radius: 10rpx;
		font-weight: bold;
	}

	.container-item:nth-child(2n-1) {
		background-image: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2802144128,2530753695&fm=26&gp=0.jpg');
		background-size: cover;
	}

	.container-item:nth-child(2n) {
		background-image: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3658379912,845864056&fm=26&gp=0.jpg');
		background-size: cover;
	}
</style>
