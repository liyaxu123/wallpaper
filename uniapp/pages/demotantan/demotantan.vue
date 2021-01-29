<template>
	<view style="width: 100%;height: 100vh;">
		<view v-if="actionName!=''" style="color:#fff;background: rgba(0,0,0,.3);padding:10px 20px;font-size:24px;position: absolute;z-index:999;left: 50%;top:50%;transform: translate(-50%,-50%);">{{actionName}}</view>
		<ezflycard @onDragMove='onCardDragMove' @onDragStop='onCardDragStop' @onThrowDone='onCardThrowDone' :cardWidth="300"
		 :cardHeight="340" :throwTriggerDistance="100" dragDirection="all" :hasShadow="true">
			<view slot="firstCard" style="width:100%;height:100%;">
				<view v-if="cards[0]" class="tantanCard" @click="clickCard">
					<image :src="cards[0].image" style="width: 100%;height: 100%;" mode="aspectFill"></image>
				</view>
			</view>
			<view slot="secondCard" style="width:100%;height:100%;">
				<view v-if="cards[1]" class="tantanCard">
					<image :src="cards[1].image" style="width: 100%;height: 100%;" mode="aspectFill"></image>
				</view>
			</view>
			<view slot="thirdCard" style="width:100%;height:100%;">
				<view v-if="cards[2]" class="tantanCard">
					<image :src="cards[2].image" style="width: 100%;height: 100%;" mode="aspectFill"></image>
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
				actionName: "",
				cards: []
			}
		},
		onLoad(option) {
			// 动态修改导航栏文字
			uni.setNavigationBarTitle({
				title: option.title
			})
		},
		onShow() {
			this.getImg();
			this.getImg();
		},
		methods: {
			onCardDragMove(obj) {
				// console.log(obj);

				if (obj.left < -10) {
					this.actionName = "不喜欢";
				} else if (obj.left > 10) {
					this.actionName = "喜欢";
				} else {
					this.actionName = "";
				}
			},
			onCardDragStop(obj) {
				this.actionName = "";
			},
			onCardThrowDone(obj) {
				this.cards.splice(0, 1);
				this.getImg();
				this.getImg();
			},
			getImg() {
				this.myRequest({
					url: 'https://api.ixiaowai.cn/mcapi/mcapi.php?return=json',
					method: 'get',
					hasLoading: false
				}).then(res => {
					this.cards.push({
						image: res.data.imgurl
					});
				})
			},
			clickCard(){
				uni.navigateTo({
				    url: `/pages/detail/detail?imgURL=${this.cards[0].image}&type='iphone'`
				});
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

	.tantanCard {
		width: 100%;
		height: 100%;
	}
</style>
