<template>
	<view class="turnCard">
		<view class="card-box">
			<view class="card" :class="{'open': isOpen}">
				<!-- 背面 -->
				<view class="back cardView" @click="openCard"></view>
				<!-- 正面 -->
				<view class="front cardView">
					<slot></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object
			}
		},
		data() {
			return {
				isOpen: false
			}
		},
		methods: {
			openCard() {
				this.isOpen = !this.isOpen;
			}
		}
	}
</script>

<style scoped>
	.turnCard {
		height: 100%;
	}

	.card-box {
		width: 100%;
		height: 100%;
		max-width: 310rpx;
		/* 景深 */
		perspective: 900rpx;
	}

	.card {
		height: 100%;
		/* 开启3D */
		transform-style: preserve-3d;
		position: relative;
		transition: all .8s ease;
	}

	.open {
		transform: rotateY(180deg);
	}

	.cardView {
		height: 100%;
		position: absolute;
		border-radius: 30rpx;
		box-shadow: 2rpx 4rpx 8rpx 0rpx rgb(14, 13, 13);
		background-color: #fff;
		text-align: center;
		font-family: cursive;
		backface-visibility: hidden;
		overflow: hidden;
	}

	.front,
	.back {
		width: 100%;
	}

	/* 正面 */
	.front {
		z-index: 1;
		transform: rotateY(180deg);
		position: relative;
	}

	/* 背面 */
	.back {
		background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
		z-index: 2;
		transform: rotateY(0deg);
	}
</style>
