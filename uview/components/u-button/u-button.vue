<template>
	<button id="u-wave-btn" class="u-btn u-line-1 u-fix-ios-appearance" :class="[
		'u-size-' + size,
		plain ? 'u-' + type + '-plain' : '',
		loading ? 'u-loading' : '',
		shape == 'circle' ? 'u-round-circle' : '',
		hairLine ? showHairLineBorder : 'u-bold-border',
	]"
	:disabled="disabled"
	:form-type="formType"
	:open-type="openType"
	:app-parameter="appParameter"
	:hover-stop-propagation="hoverStopPropagation"
	:send-message-title="sendMessageTitle"
	send-message-path="sendMessagePath"
	:lang="lang"
	:session-from="sessionFrom"
	:send-message-img="sendMessageImg"
	:show-message-card="showMessageCard"
	@getphonenumber="getphonenumber"
	@getuserinfo="getuserinfo"
	@error="error"
	@opensetting="opensetting"
	@launchapp="launchapp"
	:style="[buttonStyle]" @tap="click($event)" :hover-class="getHoverClass" :loading="loading">
		<slot></slot>
		<view v-if="ripple" class="u-wave-ripple" :class="[waveActive ? 'u-wave-active' : '']" :style="{
			'top': rippleTop + 'px',
			'left': rippleLeft + 'px',
			'width': fields.targetWidth + 'px',
			'height': fields.targetWidth + 'px',
			'background-color':  (rippleBgColor || 'rgba(0, 0, 0, 0.15)')
		}">
		</view>
	</button>
</template>

<script>
	export default {
		props: {
			// 是否细边框
			hairLine: {
				type: Boolean,
				default: true
			},
			// 按钮的预置样式，default，primary，error，warning，success
			type: {
				type: String,
				default: 'default'
			},
			// 按钮尺寸，default，medium，mini
			size: {
				type: String,
				default: 'default'
			},
			// 按钮形状，circle（两边为半圆），square（带圆角）
			shape: {
				type: String,
				default: 'square'
			},
			// 按钮是否镂空
			plain: {
				type: Boolean,
				default: false
			},
			// 是否禁止状态
			disabled: {
				type: Boolean,
				default: false
			},
			// 是否加载中
			loading: {
				type: Boolean,
				default: false
			},
			// 开放能力，具体请看uniapp稳定关于button组件部分说明
			// https://uniapp.dcloud.io/component/button
			openType: {
				type: String,
				default: ''
			},
			// 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
			// 取值为submit（提交表单），reset（重置表单）
			formType: {
				type: String,
				default: ''
			},
			// 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
			// 只微信小程序、QQ小程序有效
			appParameter: {
				type: String,
				default: ''
			},
			// 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
			hoverStopPropagation: {
				type: Boolean,
				default: false
			},
			// 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
			lang: {
				type: String,
				default: 'en'
			},
			// 会话来源，open-type="contact"时有效。只微信小程序有效
			sessionFrom: {
				type: String,
				default: ''
			},
			// 会话内消息卡片标题，open-type="contact"时有效
			// 默认当前标题，只微信小程序有效
			sendMessageTitle: {
				type: String,
				default: ''
			},
			// 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效	
			// 默认当前分享路径，只微信小程序有效
			sendMessagePath: {
				type: String,
				default: ''
			},
			// 会话内消息卡片图片，open-type="contact"时有效
			// 默认当前页面截图，只微信小程序有效
			sendMessageImg: {
				type: String,
				default: ''
			},
			// 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
			// 用户点击后可以快速发送小程序消息，open-type="contact"时有效
			showMessageCard: {
				type: Boolean,
				default: false
			},
			// 手指按（触摸）按钮时按钮时的背景颜色
			hoverBgColor: {
				type: String,
				default: ''
			},
			// 水波纹的背景颜色
			rippleBgColor: {
				type: String,
				default: ''
			},
			// 是否开启水波纹效果
			ripple: {
				type: Boolean,
				default: false
			},
			// 按下的类名
			hoverClass: {
				type: String,
				default: ''
			},
			// 自定义样式，对象形式
			customStyle: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		computed: {
			// 当没有传bgColor变量时，按钮按下去的颜色类名
			getHoverClass() {
				// 如果开启水波纹效果，则不启用hover-class效果
				if (this.loading || this.disabled || this.ripple || this.hoverClass) return '';
				let hoverClass = '';
				hoverClass = this.plain ? 'u-' + this.type + '-plain-hover' : 'u-' + this.type + '-hover';
				return hoverClass;
			},
			// 按钮主题
			buttonStyle() {
				let style = {};
				if (this.type == 'default') {
					if (this.disabled) {
						style.color = "#c0c4cc";
						style.backgroundColor = "#ffffff";
						style.borderColor = "#e4e7ed";
					} else {
						style.color = this.$u.color['contentColor'];
						style.backgroundColor = "#ffffff";
						style.borderColor = "#c0c4cc"; 
					}
				} else {
					if (this.disabled) {
						if(this.plain) {
							style.color = this.$u.color[this.type + 'Disabled'];
							style.backgroundColor = this.$u.color[this.type + 'Light'];
							style.borderColor = this.$u.color[this.type + 'Disabled'];
						} else {
							style.color = "#ffffff";
							style.backgroundColor = this.$u.color[this.type + 'Disabled'];
							style.borderColor = this.$u.color[this.type + 'Disabled'];
						}
					} else {
						if(this.plain) {
							style.color = this.$u.color[this.type]
							style.backgroundColor = this.$u.color[this.type + 'Light'];
							style.borderColor = this.$u.color[this.type + 'Disabled'];
						} else {
							style.color = "#ffffff";
							style.backgroundColor = this.$u.color[this.type];
							style.borderColor = this.$u.color[this.type];
						}
					}
				}

				return Object.assign(style, this.customStyle);
			},
			// 在'primary', 'success', 'error', 'warning'类型下，不显示边框，否则会造成四角有毛刺现象
			showHairLineBorder() {
				if(['primary', 'success', 'error', 'warning'].indexOf(this.type) >= 0 && !this.plain) {
					return '';
				} else {
					return 'u-hairline-border';
				}
			}
		},
		data() {
			return {
				rippleTop: 0, // 水波纹的起点Y坐标到按钮上边界的距离
				rippleLeft: 0, // 水波纹起点X坐标到按钮左边界的距离
				fields: {}, // 波纹按钮节点信息
				waveActive: false, // 激活水波纹
			}
		},
		methods: {
			// 按钮点击
			click(e) {
				// 如果按钮时disabled和loading状态，不触发水波纹效果
				if (this.loading === true || this.disabled === true) return;
				// 是否开启水波纹效果
				if (this.ripple) {
					// 每次点击时，移除上一次的类，再次添加，才能触发动画效果
					this.waveActive = false;
					this.$nextTick(function() {
						this.getWaveQuery(e);
					});
				}
				this.$emit('click');
			},
			// 查询按钮的节点信息
			getWaveQuery(e) {
				this.getElQuery().then(res => {
					// 查询返回的是一个数组节点
					let data = res[0];
					// 查询不到节点信息，不操作
					if (!data.width || !data.width) return;
					// 水波纹的最终形态是一个正方形(通过border-radius让其变为一个圆形)，这里要保证正方形的边长等于按钮的最长边
					// 最终的方形（变换后的圆形）才能覆盖整个按钮
					data.targetWidth = (data.height > data.width ? data.height : data.width);
					if (!data.targetWidth) return;
					this.fields = data;
					let touchesX = '',
						touchesY = '';
					// #ifdef MP-BAIDU
					touchesX = e.changedTouches[0].clientX;
					touchesY = e.changedTouches[0].clientY;
					// #endif
					// #ifdef MP-ALIPAY
					touchesX = e.detail.clientX;
					touchesY = e.detail.clientY;
					// #endif
					// #ifndef MP-BAIDU || MP-ALIPAY
					touchesX = e.touches[0].clientX;
					touchesY = e.touches[0].clientY;
					// #endif
					// 获取触摸点相对于按钮上边和左边的x和y坐标，原理是通过屏幕的触摸点（touchesY），减去按钮的上边界data.top
					// 但是由于`transform-origin`默认是center，所以这里再减去半径才是水波纹view应该的位置
					// 总的来说，就是把水波纹的矩形（变换后的圆形）的中心点，移动到我们的触摸点位置
					this.rippleTop = (touchesY - data.top - (data.targetWidth / 2));
					this.rippleLeft = (touchesX - data.left - (data.targetWidth / 2));
					this.$nextTick(() => {
						this.waveActive = true;
					})
				})
			},
			// 获取节点信息
			getElQuery() {
				return new Promise(resolve => {
					let queryInfo = '';
					// 获取元素节点信息，请查看uniapp相关文档
					// https://uniapp.dcloud.io/api/ui/nodes-info?id=nodesrefboundingclientrect
					queryInfo = uni.createSelectorQuery().in(this);
					queryInfo.select('.u-btn').boundingClientRect();
					queryInfo.exec((data) => {
						resolve(data)
					});
				})
			},
			// 下面为对接uniapp官方按钮开放能力事件回调的对接
			getphonenumber(res) {
				this.$emit('getphonenumber', res);
			},
			getuserinfo(res) {
				this.$emit('getuserinfo', res); 
			},
			error(res) {
				this.$emit('error', res);
			},
			opensetting(res) {
				this.$emit('opensetting', res);
			},
			launchapp(res) {
				this.$emit('launchapp', res);
			},
		}
	}
</script>

<style scoped lang="scss">
	button::after {
		border: none;
	}

	.u-btn {
		position: relative;
		border: 0;
		//border-radius: 10rpx;
		display: inline-block;
		overflow: hidden;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		padding: 0 40rpx;
		z-index: 1;
		box-sizing: border-box;
		transition: all 0.15s;
	}
	
	.u-hairline-border:after {
		content: ' ';
		position: absolute;
		pointer-events: none;
		// 设置为border-box，意味着下面的scale缩小为0.5，实际上缩小的是伪元素的内容（border-box意味着内容不含border）
		box-sizing: border-box;
		// 中心点作为变形(scale())的原点
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		left: 0;
		top: 0;
		width: 200%;
		height: 200%;
		-webkit-transform: scale(0.5, 0.5);
		transform: scale(0.5, 0.5);
		border: 1px solid currentColor;
		z-index: 0;
	}
	
	.u-bold-border {
		border: 1px solid #FFFFFF;
	}

	.u-wave-ripple {
		z-index: 0;
		position: absolute;
		border-radius: 100%;
		background-clip: padding-box;
		pointer-events: none;
		user-select: none;
		transform: scale(0);
		opacity: 1;
		transform-origin: center;
	}

	.u-wave-ripple.u-wave-active {
		opacity: 0;
		transform: scale(2);
		transition: opacity 1s linear, transform 0.4s linear;
	}

	.u-round-circle {
		border-radius: 100rpx;
	}

	.u-round-circle::after {
		border-radius: 100rpx;
	}

	.u-loading::after {
		background-color: hsla(0, 0%, 100%, .35);
	}

	.u-size-default {
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
	}

	.u-size-medium {
		display: inline-flex;
		width: auto;
		font-size: 26rpx;
		height: 70rpx;
		line-height: 70rpx;
		padding: 0 80rpx;
	}

	.u-size-mini {
		display: inline-flex;
		width: auto;
		font-size: 22rpx;
		padding-top: 1px;
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 20rpx;
	}

	.u-primary-plain-hover {
		color: #FFFFFF!important;
		background: $u-type-primary-dark !important;
	}

	.u-default-plain-hover {
		color: $u-type-primary-dark !important;
		background: $u-type-primary-light !important;
	}

	.u-success-plain-hover {
		color: #FFFFFF!important;
		background: $u-type-success-dark!important;
	}

	.u-warning-plain-hover {
		color: #FFFFFF!important;
		background: $u-type-warning-dark !important;
	}

	.u-error-plain-hover {
		color: #FFFFFF!important;
		background: $u-type-error-dark !important;
	}
	
	.u-info-plain-hover {
		color: #FFFFFF!important;
		background: $u-type-info-dark !important;
	}

	.u-default-hover {
		color: $u-type-primary-dark !important;
		border-color: $u-type-primary-dark !important;
		background-color: $u-type-primary-light !important;;
	}

	.u-primary-hover {
		background: $u-type-primary-dark !important;
		color: #fff;
	}

	.u-success-hover {
		background: $u-type-success-dark !important;
		color: #fff;
	}

	.u-info-hover {
		background: $u-type-info-dark !important;
		color: #fff;
	}

	.u-warning-hover {
		background: $u-type-warning-dark !important;
		color: #fff;
	}

	.u-error-hover {
		background: $u-type-error-dark !important;
		color: #fff;
	}
</style>
