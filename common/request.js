// 对uni.request二次封装
import Vue from 'vue'
import store from '@/vuex/store.js'
import context from '@/main.js'
import { isTokenExpired } from '@/common/utils.js'
export function request({api, method = "POST", params, header = {} }) {
		return new Promise((resolve, reject) => {
			uni.request({
			    url: context.$projectUrl + '/config.json?time=' + Math.random().toString(36), 
				success: (jsonData) => {
					Vue.prototype.$baseUrl = jsonData.data.baseUrl
					Vue.prototype.$contactPhone = jsonData.data.contactPhone
					
					let objToken = store.state.objToken
					if(objToken && objToken.access_token){
						header.Authorization = objToken.token_type + ' ' + objToken.access_token
					}
					let url = context.$baseUrl + api
					uni.request({
						url,
						data:params,
						method,
						header,
						success: res => {
							isTokenExpired()
							if(res.statusCode === 200 || res.statusCode === 201 || res.statusCode === 204) {
								resolve(res)
							}else if(res.statusCode === 401){
								if(store.state.userInfo && store.state.userInfo.id){
									uni.clearStorageSync()
									// #ifdef H5
										sessionStorage.removeItem("loginCode")
									// #endif
									store.commit('clearUserInfo')
									uni.navigateTo({
										url:'/pages/login/index'
									})
								}
							}else {
									reject(res)
							}
						}
					})
				}
			})
		})
}
// 'Content-Type': 'application/json; charset=utf-8'
// 'Content-Type':'application/x-www-form-urlencoded'
// 'Content-Type': 'multipart/form-data'