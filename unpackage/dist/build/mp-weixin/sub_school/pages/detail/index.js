require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_school/pages/detail/index","common/main"],{"1bb9":function(t,e,n){},"2a8f":function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.imageVideoList,(function(e,n){var o=e.hasOwnProperty("image_url"),i=e.hasOwnProperty("image_url");return{$orig:t.__get_orig(e),g0:o,g1:i}}))),o=t._f("timeFormat")(t.detail.built_at,"yyyy"),i=t._f("timeFormat")(t.detail.end_at,"MM-dd");t.$mp.data=Object.assign({},{$root:{l0:n,f0:o,f1:i}})},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},"2b66":function(t,e,n){},3412:function(t,e,n){"use strict";n.r(e);var o=n("2a8f"),i=n("f760");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("d1d3"),n("3f76");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"155be172",null,!1,o["a"],r);e["default"]=s.exports},"3d6a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c764"),n("921b");var o=f(n("66fd")),i=f(n("93f5")),a=f(n("8df5")),r=n("0f58");n("724a");var c=f(n("5a0b")),s=d(n("3570")),u=f(n("9faf"));function l(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return l=function(){return t},t}function d(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=l();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=o?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function f(t){return t&&t.__esModule?t:{default:t}}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.prototype.$store=a.default,o.default.prototype.$baseUrl="https://shop.test.gzzhongw.net/",o.default.prototype.$http=r.request,o.default.prototype.$projectUrl="https://koala.gzzhongw.net/",o.default.prototype.$contactPhone="13544412322",o.default.prototype.$eventHub=o.default.prototype.$eventHub||new o.default,o.default.use(c.default),Object.keys(s).forEach((function(t){o.default.filter(t,s[t])})),o.default.use(u.default);var m=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("ea22"))}.bind(null,n)).catch(n.oe)};o.default.component("uni-popup",m),o.default.config.productionTip=!1,i.default.mpType="app";var v=new o.default(h({},i.default,{store:a.default})),b=v;e.default=b,t(v).$mount()}).call(this,n("543d")["createApp"])},"3f0d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("66fd")),i=(a(n("5a47")),n("2f62"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={globalData:{invitedCode:"",historyRecord:[]},mounted:function(){},methods:c({},(0,i.mapMutations)(["setUserInfo","saveToken","setRoles"]),{checkIsPc:function(){var e=/iOS|Android/i;t.getSystemInfo({success:function(t){t.windowWidth>420&&!window.top.isPC&&!e.test(t.system)&&(window.location.pathname="/static/PC.html")}})},getStatusBarheight:function(){t.getSystemInfo({success:function(t){o.default.prototype.$statusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();console.log(e,"wx"),o.default.prototype.$wxRightMargin=t.screenWidth-e.left,o.default.prototype.$customBar=e.bottom+e.top-t.statusBarHeight}})},getUserInfo:function(){var e=this,n=t.getStorageSync("userInfo").id;if(n){t.getStorage({key:"userInfo",success:function(t){e.setUserInfo(t.data)}});var o=t.getStorageSync("objToken"),i=t.getStorageSync("roles");this.saveToken(o),this.setRoles(i),console.log(i,"roles")}}}),onLaunch:function(){this.getStatusBarheight(),this.getUserInfo()},onShow:function(){},onHide:function(){}};e.default=u}).call(this,n("543d")["default"])},"3f76":function(t,e,n){"use strict";var o=n("2b66"),i=n.n(o);i.a},7016:function(t,e,n){"use strict";(function(t){n("c764"),n("921b");o(n("66fd"));var e=o(n("3412"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"754f":function(t,e,n){},"93f5":function(t,e,n){"use strict";n.r(e);var o=n("ca04");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("d841");var a,r,c,s,u=n("f0c5"),l=Object(u["a"])(o["default"],a,r,!1,null,null,null,!1,c,s);e["default"]=l.exports},bba5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r(n("0ba7"));var o=r(n("5a47")),i=n("a33c"),a=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){n.e("components/school-list/recommend").then(function(){return resolve(n("9623"))}.bind(null,n)).catch(n.oe)},d=getApp(),f={components:{recommendList:l},data:function(){return{circleImg:this.$projectUrl+"koala_images/login/circle.png",firendsImg:this.$projectUrl+"koala_images/login/wx01.png",popupShareShow:!0,allShow:!1,scrollTop:0,invitedCode:"",applyedBool:!1,options:"",paramsCode:"",imageVideoWidth:0,imageVideoList:[],imageList:[],videoList:[],current:null,schoolId:null,detail:{},showSameSchoolBool:!1,education:{all:"学历不限",middle:"初中",high:"高中"},recent:{0:"不限",1:"应届",2:"往届"},property:{public:"公办",private:"民办",unite:"联办",international_public:"国际公立",international_private:"国际私立"},collegeLevel:{secondary:"中专",junior:"大专",undergraduate:"本科",master:"研究生",early:"早教托管"},markers:[{latitude:23.136831,longitude:113.35451,iconPath:"../../.././static/location.png",width:30,height:30}],tabList:[{title:"图片视频",icon:"icon-xiangji",currentIcon:"icon-xiangji-active"},{title:"学校概况",icon:"icon-xuesimao",currentIcon:"icon-xuesimao-active"},{title:"招收专业",icon:"icon-zhuangye",currentIcon:"icon-zhuangye-active"}],list:[]}},computed:s({},(0,a.mapState)(["roles","userInfo"])),onLoad:function(e){var n=this;if(e.id){var o=Number(e.id);this.schoolId=o}if(e.invitedCode&&(this.invitedCode=e.invitedCode),e.scene){var a=decodeURIComponent(e.scene),r=a.split(",");r[0]&&(this.schoolId=Number(r[0])),r[1]&&(this.invitedCode=r[1]),console.log(e.scene,"options.scene"),console.log(a,"scene"),console.log(this.invitedCode,"invitedCode")}(0,i.login_mp_wx)(this.invitedCode),this.getDetail(),this.getSameSchool(),this.getDataList(),this.$store.state.objToken.access_token&&this.getApplication(),t.getSystemInfo({success:function(t){n.imageVideoWidth=t.screenWidth/3}})},onShow:function(){},methods:{goHome:function(){t.switchTab({url:"/pages/index/index"})},getApplication:function(){var t=this;this.$http({api:o.default.latestApplications,method:"GET"}).then((function(e){e.data&&!1===e.data.closed&&(t.applyedBool=!0)})).catch((function(t){}))},getSameSchool:function(){var t=this;this.$http({api:o.default.getSchoolList+"/"+this.schoolId+"/similar",method:"GET"}).then((function(e){t.list=e.data}))},getDetail:function(){var t=this;this.$http({api:o.default.getSchoolList+"/"+this.schoolId,method:"GET"}).then((function(e){var n=e.data;n.summarize&&(n.summarize=n.summarize.replace(/\<img/gi,"<img class='rich-img' style='max-width:100%;height:auto;display:block;' ")),n.general_rules&&(n.general_rules=n.general_rules.replace(/\<img/gi,"<img class='rich-img' style='max-width:100%;height:auto;display:block;' ")),t.detail=n;var o=d.globalData.historyRecord;o.unshift({id:t.detail.id,name:t.detail.name,property:t.detail.prototype,college_level:t.detail.college_level,province:t.detail.province,city:t.detail.city,district:t.detail.district,avatar:t.detail.avatar});var i={};o=o.reduce((function(t,e){return!i[e.id]&&(i[e.id]=t.push(e)),t}),[]),o.length>20&&o.substr(0,20),console.log(o,"详情"),d.globalData.historyRecord=o})).catch((function(t){}))},tabClick:function(t){switch(this.current===t?this.current=null:this.current=t,t){case 0:break;case 1:break;case 2:}},collectBtn:function(e){var n=this;(0,i.checkLogin)().then((function(){var i="",a="";e?(i=o.default.favoritesDeletes,a="取消收藏",n.$set(n.detail,"is_favour",!1)):(i=o.default.favoritesStores,a="收藏成功",n.$set(n.detail,"is_favour",!0)),t.showToast({icon:"none",title:a});var r=n;n.api(r,i)}))},api:(0,i.debounce)((function(t,e){t.$http({api:e,method:"POST",params:{ids:String(t.schoolId)}}).then((function(t){})).catch((function(t){}))}),1e3,!1),applyBtn:function(e){var n=this;(0,i.checkLogin)().then((function(){if(1===e)t.navigateTo({url:"/pages/news/chat?schoolId="+n.schoolId});else if(2===e){var o=n.detail;n.applyedBool?t.showToast({icon:"none",title:"您已报过名"}):o.id&&(0,i.schoolInfoToLink)(o)}}))},locationClick:function(){var t=this;(0,i.checkAuthSetting)().then((function(){t.app_wx_openLocation()}))},app_wx_openLocation:function(){var e=this.detail,n=e.lat,o=e.lon,i=e.name,a=e.province,r=e.city,c=e.district,s=e.address;t.openLocation({latitude:Number(n),longitude:Number(o),name:i,address:a||""+r||""+c||""+s||"",scale:14,success:function(t){},fail:function(t){console.log(t,"err")}})},openLocation:function(){var t=this;return new Promise((function(e,n){var i=location.href.split("#")[0],a=t;a.$http({api:o.default.configuration,method:"POST",params:{url:i}}).then((function(t){jweixin.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,url:t.data.url,jsApiList:["openLocation"]}),jweixin.ready((function(){var t=a.detail,e=t.lat,n=t.lon,o=t.name,i=t.province,r=t.city,c=t.district,s=t.address;jweixin.openLocation({latitude:parseFloat(e),longitude:parseFloat(n),name:o,address:i+r+c+s,scale:14})}))})).catch((function(t){}))}))},showSameSchoolBtn:function(){this.list.length>0?this.showSameSchoolBool=!this.showSameSchoolBool:t.showToast({icon:"none",title:"暂无相似院校"})},getSchoolImages:function(){var t=this;return new Promise((function(e,n){var i=t.imageList||[];t.$http({api:o.default.schoolImages,method:"GET",params:{page:1,perPage:10,"filter[school_id]":t.schoolId}}).then((function(n){t.imageList=i.concat(n.data.data||[]),e()})).catch((function(t){n()}))}))},getSchoolVideos:function(){var t=this;return new Promise((function(e,n){var i=t.videoList||[];t.$http({api:o.default.schoolVideos,method:"GET",params:{page:1,perPage:10,"filter[school_id]":t.schoolId}}).then((function(n){t.videoList=i.concat(n.data.data||[]),e()})).catch((function(t){n()}))}))},crossArray:function(){for(var t=this.imageList.length+this.videoList.length,e=[],n=0;n<=t;n++)this.imageList[n]&&e.push(this.imageList[n]),this.videoList[n]&&e.push(this.videoList[n]);this.imageVideoList=e},getDataList:function(){var t=this;this.imageList=[],this.videoList=[],this.imageVideoList=[],this.getSchoolVideos().then((function(){t.getSchoolImages().then((function(){t.crossArray()})).catch((function(t){}))})).catch((function(t){}))},goDetail:function(e){if(e.hasOwnProperty("image_url")){var n=e.items.map((function(t,e){return t.image_url}));t.previewImage({current:n[0],urls:n})}else t.navigateTo({url:"/sub_school/pages/detail/img-video?schoolId="+this.schoolId})},shareSchool:function(){(0,i.schoolDetailShare)(this.detail)},popupShareClose:function(t){t.show||(this.popupShareShow=!0)},share_h5:function(){var t=this,e=location.href.split("#")[0],n=this.$projectUrl+"h6/#/sub_school/pages/detail/index?id="+this.schoolId,i=this.$store.state.userInfo.koala;i&&i.code&&(n+="&invitedCode="+i.code),t.$http({api:o.default.configuration,method:"POST",params:{url:e}}).then((function(o){jweixin.config({debug:!1,appId:o.data.appId,timestamp:o.data.timestamp,nonceStr:o.data.nonceStr,signature:o.data.signature,url:e,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),jweixin.ready((function(){jweixin.updateAppMessageShareData({title:t.detail.name,desc:t.detail.description,link:n,imgUrl:t.detail.avatar,success:function(t){},cancel:function(t){}}),jweixin.updateTimelineShareData({title:t.detail.name,link:n,imgUrl:t.detail.avatar,success:function(){},cancel:function(){}})}))})).catch((function(t){}))},appShareWx:function(t){(0,i.app_share_wx)(t,this.detail)}},onShareAppMessage:function(t){var e="";if(this.userInfo.koala&&this.userInfo.koala.code&&(e=this.userInfo.koala.code),"menu"===t.from)return{title:this.detail.name,imageUrl:this.detail.avatar,path:"/sub_school/pages/detail/index?id=".concat(this.detail.id,"&invitedCode=").concat(e)}}};e.default=f}).call(this,n("543d")["default"])},ca04:function(t,e,n){"use strict";n.r(e);var o=n("3f0d"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},d1d3:function(t,e,n){"use strict";var o=n("754f"),i=n.n(o);i.a},d841:function(t,e,n){"use strict";var o=n("1bb9"),i=n.n(o);i.a},f760:function(t,e,n){"use strict";n.r(e);var o=n("bba5"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a}},[["7016","common/runtime","common/vendor","sub_school/common/vendor"]]]);