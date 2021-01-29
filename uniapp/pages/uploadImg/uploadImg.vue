<template>
	<view class="uploadImg">
		<view class="uploadBox">
			<view class="tag">
				<u-dropdown ref="uDropdown" @open='changeDropdownItem'>
					<u-dropdown-item title="创建标签">
						<view class="tags">
							<u-input v-model="tagName" type="text" border placeholder='请输入标签名' border-color='#FED1B0' trim clearable />
							<u-button type="primary" :plain="true" style="margin-top: 40rpx;" @click="createTag">提交</u-button>
						</view>
					</u-dropdown-item>
					<u-dropdown-item title="添加标签">
						<view class="slot-content">
							<view class="tags">
								<view class="tags-item">
									<u-tag v-for="(item,index) in tagList" :key='item.id' :text="item.name" :mode="item.checked?'dark':'plain'"
									 type="primary" shape="circle" @click="tagClick(index)" />
								</view>
								<u-button type="primary" :plain="true" style="margin-top: 40rpx;" @click="closeDropdown">确定</u-button>
							</view>
						</view>
					</u-dropdown-item>
				</u-dropdown>
			</view>
			<!-- 图片上传 -->
			<u-upload ref="uUpload" name='image' :action="action" :auto-upload="false" max-count="1" :form-data='formData'
			 @on-success='uploadSuccess' @on-error='uploadError' class="uploadPick"></u-upload>
			<view class="checkedTags">
				<u-tag v-for="(item,index) in checkedTagList" :key='item.id' :text="item.name" mode="dark" type="primary" closeable
				 shape="circle" @close="cancelTag(item)" class="tag" />
			</view>
			<u-button @click="submit" type="primary">提交</u-button>
		</view>
		<u-top-tips ref="uTips"></u-top-tips>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 遇见图床上传地址
				action: 'https://www.hualigs.cn/api/upload',
				formData: {
					token: 'aaaaa131231313131313131', //请配置你自己遇见图床的信息
					apiType: 'muke,toutiao,ali,sougou'
				},
				tagName: '',
				tagList: []
			}
		},
		computed: {
			checkedTagList: function() {
				return this.tagList.filter(item => item.checked == true)
			}
		},
		onLoad() {},
		methods: {
			// 开始上传图片
			submit() {
				this.$refs.uUpload.upload();
			},
			// 图片上传成功的回调
			async uploadSuccess(data, index, lists, name) {
				// console.log(data);
				const {
					toutiao,
					sougou,
					muke,
					distribute,
					ali
				} = data.data.url;

				// 将上传成功到图床的壁纸链接保存到数据库
				const result = await this.myRequest({
					url: this.$api.uploadImg,
					method: 'post',
					data: {
						id: 0,
						size: 0,
						path: toutiao  
					}
				});

				// 给壁纸添加标签
				const tags = this.checkedTagList.map(item => item.name);
				const result2 = await this.myRequest({
					url: `${this.$api.BASEURL}/wallpaper/${result.data.id}/tags`,
					method: 'post',
					data: {
						tags
					}
				});

				if (result2.data.statusCode === 200) {
					this.$refs.uUpload.clear();
					for (let item of this.tagList) {
						item.checked = false;
					}
					this.$refs.uTips.show({
						title: '上传成功',
						type: 'success',
						duration: '2000'
					})
				}
			},
			// 图片上传失败的回调
			uploadError(res, index, lists, name) {
				console.log(res, index, lists, name);
			},
			// 关闭下拉菜单
			closeDropdown() {
				this.$refs.uDropdown.close();
			},
			// 监听下拉菜单点击事件
			changeDropdownItem(e) {
				if (e === 1){
					this.getTagList();
				}
			},
			// 监听标签点击事件
			tagClick(index) {
				this.tagList[index].checked = !this.tagList[index].checked;
			},
			// 取消选中的标签
			cancelTag(item) {
				for (let i of this.tagList) {
					if (i.id == item.id) {
						i.checked = false;
					}
				}
			},
			// 创建壁纸标签
			async createTag() {
				const result = await this.myRequest({
					url: this.$api.creatTag,
					method: 'post',
					data: {
						name: this.tagName
					}
				});
				if (result.statusCode === 200) {
					this.tagName = '';
					this.$refs.uDropdown.close();
					this.$refs.uTips.show({
						title: '创建标签成功',
						type: 'success',
						duration: '2000'
					})
				}
			},
			// 获取壁纸标签列表
			async getTagList() {
				const result = await this.myRequest({
					url: this.$api.getTagList,
					method: 'get'
				});
				if (result.statusCode === 200) {
					for (let i of result.data) {
						i.checked = false;
					}
					this.tagList = result.data;
				}
			},
		}
	}
</script>

<style scoped>
	.uploadBox {}

	.uploadPick {
		text-align: center;
		margin: auto;
		display: block;
	}

	.tags {
		width: 100%;
		background-color: #fff;
		padding: 20rpx;
	}

	.tags-item {
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(7, auto);
		grid-row-gap: 30rpx;
		grid-column-gap: 40rpx;
		text-align: center;
	}

	.checkedTags {
		margin: 40rpx 0rpx;
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-row-gap: 20rpx;
		grid-column-gap: 20rpx;
		text-align: center;
	}

	.tag {
		display: flex;
		justify-content: space-between;
	}
</style>
