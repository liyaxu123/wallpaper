// 封装网络请求
const myRequest = (options = {
	hasLoading: true,
	url: '',
	method: 'GET',
	data: {}
}) => {
	// 展示 loading
	if (options.hasLoading) {
		uni.showLoading({
			title: '加载中...'
		});
	}
	return new Promise((resolve, reject) => {
		// console.log(options)
		uni.request({
			url: options.url,
			method: options.method,
			data: options.data,
			header: {
				'content-type': 'application/json; charset=utf-8'
			},
			// 处理跨域
			xhrFields: {
				withCredentials: true
			},
			success: (res) => {
				// 隐藏加载 loading
				if (options.hasLoading) {
					uni.hideLoading();
				}
				// console.log(res)
				if (res.data.code == 0) {
					return uni.showToast({
						title: '获取数据失败',
						// 是否显示透明蒙层，防止触摸穿透，默认：false
						mask: true,
						// 提示的延迟时间，单位毫秒，默认：1500
						duration: 1500
					})
				}
				resolve(res);
			},
			fail: (err) => {
				if (options.hasLoading) {
					uni.hideLoading();
				}
				// console.log(err)
				uni.showToast({
					title: '请求接口失败',
					mask: true
				})
				reject(err)
			}
		})
	})
}

export default {
	myRequest
}

// 调用形式
// myRequest({
// 	url:'/api/lunbo',
// 	method: 'POST',
// 	data:{name:'张三',pass:123456}
// })
