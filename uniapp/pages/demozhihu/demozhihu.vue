<template>
	<view style="width: 100%;height: 100vh;">
		<ezflycard @onDragMove='onCardDragMove' @onDragStop='onCardDragStop' @onThrowDone='onCardThrowDone' :cardWidth="340"
		 :cardHeight="220" :throwTriggerDistance="100" dragDirection="horizontal" :hasShadow="true" class="ezflycard">
			<view slot="firstCard" style="width:100%;height:100%;">
				<view v-if="imgList[0]" class="zhihuCard" @click="clickCard">
					<image :src="imgList[0].image" style="width: 100%;height: 100%;" mode="aspectFill"></image>
				</view>
			</view>
			<view slot="secondCard" style="width:100%;height:100%;">
				<view v-if="imgList[1]" class="zhihuCard" @click="clickCard">
					<image :src="imgList[1].image" style="width: 100%;height: 100%;" mode="aspectFill"></image>
				</view>
			</view>
			<view slot="thirdCard" style="width:100%;height:100%;">
				<view v-if="imgList[2]" class="zhihuCard" @click="clickCard">
					<image :src="imgList[2].image" style="width: 100%;height: 100%;" mode="aspectFill"></image>
				</view>
			</view>
		</ezflycard>
	</view>
</template>

<script>
	import ezflycard from "../../components/ezflycard.vue"
	export default {
		components: {
			ezflycard
		},
		data() {
			return {
				title: 'Hello',
				imgList: [],
				offset: 0,
				size: 999999,
				url: '',
			}
		},
		onLoad(option) {
			// 动态修改导航栏文字
			uni.setNavigationBarTitle({
				title: option.title
			})
			this.getImg(option.title);
			this.getImg(option.title);
		},
		onShow() {

		},
		methods: {
			// 获取图片列表
			getImg(title) {
				if (title === '二次元动漫') {
					this.url = 'https://api.ixiaowai.cn/api/api.php?return=json'
				} else if (title === '风景') {
					this.url = 'https://api.ixiaowai.cn/gqapi/gqapi.php?return=json'
				}else if(title === '每日一图'){
					this.url = 'https://api.ixiaowai.cn/gqapi/gqapi.php?return=json'
				}
				this.myRequest({
					url: this.url,
					method: 'get',
					hasLoading: false
				}).then(res => {
					this.imgList.push({
						image: res.data.imgurl
					});
				})
			},
			clickCard() {
				uni.navigateTo({
					url: `/pages/detail/detail?imgURL=${this.imgList[0].image}&type='pc'`
				});
			},
			onCardDragMove(obj) {

			},
			onCardDragStop(obj) {

			},
			onCardThrowDone(obj) {
				this.imgList.splice(0, 1);
				this.getImg();
				this.getImg();
			}
		}
	}
</script>

<style scoped>
	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	view {
		box-sizing: border-box;
	}

	.zhihuCard {
		padding: 10px;
		width: 100%;
		height: 100%;
	}

	.zhihuCard:nth-child(1) {
		font-size: 18px;
	}

	.zhihuCard>view:nth-child(2) {
		display: flex;
		position: absolute;
		width: 100%;
		left: 0px;
		bottom: 10px;
		padding: 0px 10px;
	}

	.zhihuCard>view:nth-child(2)>view:nth-child(1) {
		flex: 1;
		font-size: 14px;
		color: #666;
	}

	.zhihuCard>view:nth-child(2)>view:nth-child(2) {
		display: flex;
	}

	.zhihuCard>view:nth-child(2)>view:nth-child(2)>button:nth-child(2) {
		margin-left: 5px;
	}

	button {
		height: 24px;
		line-height: 24px;
		font-size: 12px;
	}
</style>
