<template>
	<view class="address-edit">
		<view class="part">
			<view class="item" @click="addressChange">
				<view class="title">
					<text class="must">*</text>
					通讯地址
				</view>
				<view class="right">
					<image src="/static/image/icon/icon_area.png"></image>
					<view class="address">{{addressName || '请选择地址'}}</view>
					<view class="iconfont icon-leftArrow"></view>
				</view>
			</view>
			<view class="special">
				<view class="title"><text class="must">*</text>门牌号</view>
				<textarea type="text" @focus="hideBtn" @click="hideBtn" @blur="showBtn" 
					v-model="info.koala.contact_address" 
					class="textarea" 
					placeholder="详细地址,例北京路1楼101室"
					placeholder-style="font-size:26rpx;"
					/>
			</view>
			<view class="item">
				<view class="title">
					联系人
				</view>
				<input type="text" @focus="hideBtn" @click="hideBtn" @blur="showBtn" v-model="info.koala.contact_name" class="input" placeholder="请输入姓名"/>
			</view>
			<view class="item">
				<view class="title">
					手机号
				</view>
				<input type="number" v-model="info.koala.contact_phone" @focus="hideBtn" @click="hideBtn" @blur="showBtn" class="input" placeholder="请输入手机号码" maxlength="11"/>
			</view>
		</view>
		<view class="fixed_bottom_btn_place" v-if="fixedBtn">
			<view class="fixed_bottom_btn" @click="submit">
				<view class="word">
					确定
				</view>
			</view>
		</view>
		<!-- 地址选择器 -->
		<simple-address 
			ref="simpleAddress" 
			:pickerValueDefault="cityPickerValueDefault" 
			@onConfirm="addressConfirm" 
			themeColor="#007AFF"
		></simple-address>
	</view>
</template>

<script>
	// #ifdef H5
	const jweixin = require('jweixin-module')
	// #endif
	import simpleAddress from '@/components/simple-address/simple-address.nvue';
	import { regExp,getWindowResize,hideMenuItems } from '@/common/utils.js';
	import { mapState } from 'vuex';
	export default{
		components:{
			simpleAddress
		},
		data(){
			return {
				cityPickerValueDefault: [0, 0, 1],
				info:{
					koala:{
						contact_province:'',
						contact_city:'',
						contact_district:'',
						contact_address:''
					}
				},
				addressName:'',
				fixedBtn:true,
				windowHeight:'',
			}
		},
		computed:{
			...mapState(['userInfo'])
		},
		onLoad() {
			// #ifdef H5
			hideMenuItems(jweixin)
			// #endif
			let info = JSON.parse(JSON.stringify(this.userInfo))
			if(info.id){
				if(!info.koala.contact_address){
					info.koala.contact_address = ''
				}
				if(!info.koala.contact_name){
					info.koala.contact_name = ''
				}
				if(!info.koala.contact_phone){
					info.koala.contact_phone = ''
				}
				if(info.koala.contact_province){
					this.addressName = info.koala.contact_province + '-' +  info.koala.contact_city + '-' + info.koala.contact_district
				}
				this.info = info
			}
			//监听窗口高度变化（为了兼容h5端底部按钮被键盘顶起的问题）
			this.windowResize()
			//显示我之前选择的选项
			if(uni.getStorageSync('cityPickerValueDefault')){
				this.cityPickerValueDefault = uni.getStorageSync('cityPickerValueDefault')
			}
		},
		methods:{
			//兼容苹果手机上 键盘升起会导致页面上移问题
			inputBlur(){
				uni.pageScrollTo({
					scrollTop:0,
					duration:0
				})
			},
			//点击弹窗选择地址
			addressChange(){
				this.$refs.simpleAddress.open();
			},
		    //确认选择地址
			addressConfirm(e){
				this.cityPickerValueDefault = e.value //保留当前选择
				uni.setStorage({
					key:'cityPickerValueDefault',
					data:e.value
				})
				this.addressName = e.label
				this.info.koala.contact_province = e.labelArr[0]
				this.info.koala.contact_city = e.labelArr[1]
				this.info.koala.contact_district = e.labelArr[2]
			},
			//确定
			submit(){
				this.judgeFun().then(()=>{
					let params = {
						'koala[contact_province]':this.info.koala.contact_province,
						'koala[contact_city]':this.info.koala.contact_city,
						'koala[contact_district]':this.info.koala.contact_district,
						'koala[contact_address]':this.info.koala.contact_address,
						'koala[contact_name]':this.info.koala.contact_name,
						'koala[contact_phone]':this.info.koala.contact_phone,
						_method:'PATCH'
					}
					this.$http({
						api: 'koala/v1/user',
						method: 'POST',
						params:params,
						header:{
							'Content-Type':'application/x-www-form-urlencoded'
						}
					}).then(res => {
						uni.$emit('address',{
							province:this.info.koala.contact_province,
							city:this.info.koala.contact_city,
							district:this.info.koala.contact_district,
							address:this.info.koala.contact_address,
						}) //将地址放回上一页
						this.$store.commit('setUserInfo',res.data)
						uni.showToast({
							title:'保存成功',
							success:() => {
								setTimeout(() => {
									uni.navigateBack()
								},1000)
							}
						})
					}).catch(err => {
								
					})
				}).catch((err)=>{})
			},
			//验证
			judgeFun(){
				return new Promise((resolve,reject)=>{
					let tip = ''
					if(!this.info.koala.contact_province){
						tip = '请选择通讯地址'
						reject()
					}else if(!this.info.koala.contact_address){
						tip = '请输入门牌号'
						reject()
					}else{
						resolve()
					}
					if(tip){
						uni.showToast({
							icon:'none',
							title:tip
						})
					}
				})
			},
			//监听窗口高度变化
			windowResize(){
				this.windowHeight = getWindowResize('height')
			    uni.onWindowResize((res) => {
			        if(res.size.windowHeight < this.windowHeight){
			            this.fixedBtn = false
			        }else{
			            this.fixedBtn = true
			        }
			    })
			},
			//显示按钮
			showBtn(){
				this.fixedBtn = true
				uni.pageScrollTo({
					scrollTop:0,
					duration:0
				})
			},
			//隐藏按钮
			hideBtn(){
				this.fixedBtn = false
			}
		}
	}
</script>
<style lang="scss">
	page{background: $page-background;}
</style>
<style lang="scss" scoped>
	.must{
		color: red;
	}
	.address-edit{
		.part{
			background: #fff;
			margin:14rpx;
			border-radius:20rpx;
			padding:14rpx;
		}
		.item{
			display: flex;
			background: #fff;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1rpx solid #ccc;
			padding: 40rpx 0;
			padding-left:28rpx;
			padding-right:18rpx;
			.title{
				font-size:30rpx;
				color:#000000;
			}
			.input{
				flex: 1;
				text-align: right;
				font-size: 28rpx;
			}
			.right{
				display: flex;
				align-items: center;
				color:#7d7d7d;
				font-size: 28rpx;
				image{
					width: 18rpx;
					height:26rpx;
				}
				.address{
					margin:0 20rpx;
				}
			}
		}
		.special{
			padding: 40rpx 0;
			// margin: 20rpx 10rpx;
			padding-left:28rpx;
			border-bottom: 1rpx solid #ccc;
			.textarea{
				width: 100%;
				height: 80rpx;
				margin-top: 20rpx;
				font-size: 28rpx;
			}
		}
		.item:last-of-type{
			border-bottom: none;
		}
		.fixedBottom{
			position: absolute;
			bottom: 30rpx;
			width: 100%;
			left: 0;
			display: flex;
			justify-content: space-between;
			height: 80rpx;
			line-height: 80rpx;
			padding: 0 30rpx;
			box-sizing: border-box;
			text-align: center;
			font-size: 30rpx !important;
			.reset{
				background: #999;
				width: 200rpx;
				margin-right: 20rpx;
				border-radius: 10rpx;
			}
			.confirm{
				flex: 1;
				background: blue;
				color: #fff;
				border-radius: 10rpx;
			}
		}
	}
</style>
