(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index","common/main"],{"00d9":function(t,e,o){"use strict";var n=o("f6cf"),i=o.n(n);i.a},"04c7":function(t,e,o){},"1bb9":function(t,e,o){},"29d8":function(t,e,o){"use strict";var n={"simple-address":function(){return Promise.all([o.e("common/vendor"),o.e("components/simple-address/simple-address")]).then(o.bind(null,"73d2"))}},i=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.propertyList,(function(e,o){var n=t.ItemSelect(1,e.value);return{$orig:t.__get_orig(e),m0:n}}))),n=t.__map(t.schoolType,(function(e,o){var n=t.ItemSelect(2,e);return{$orig:t.__get_orig(e),m1:n}}));t.$mp.data=Object.assign({},{$root:{l0:o,l1:n}})},c=[];o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return c})),o.d(e,"a",(function(){return n}))},"3d6a":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("c764"),o("921b");var n=d(o("66fd")),i=d(o("93f5")),c=d(o("8df5")),a=o("0f58");o("724a");var s=d(o("5a0b")),r=p(o("3570")),l=d(o("9faf"));function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function p(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var c=n?Object.getOwnPropertyDescriptor(t,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=t[i]}return o.default=t,e&&e.set(t,o),o}function d(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function h(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?f(Object(o),!0).forEach((function(e){g(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function g(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}n.default.prototype.$store=c.default,n.default.prototype.$baseUrl="https://shop.test.gzzhongw.net/",n.default.prototype.$http=a.request,n.default.prototype.$projectUrl="https://koala.gzzhongw.net/",n.default.prototype.$contactPhone="13544412322",n.default.prototype.$eventHub=n.default.prototype.$eventHub||new n.default,n.default.use(s.default),Object.keys(r).forEach((function(t){n.default.filter(t,r[t])})),n.default.use(l.default);var v=function(){o.e("components/uni-popup/uni-popup").then(function(){return resolve(o("ea22"))}.bind(null,o)).catch(o.oe)};n.default.component("uni-popup",v),n.default.config.productionTip=!1,i.default.mpType="app";var y=new n.default(h({},i.default,{store:c.default})),m=y;e.default=m,t(y).$mount()}).call(this,o("543d")["createApp"])},"3f0d":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(o("66fd")),i=(c(o("5a47")),o("2f62"));function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var l={globalData:{invitedCode:"",historyRecord:[]},mounted:function(){},methods:s({},(0,i.mapMutations)(["setUserInfo","saveToken","setRoles"]),{checkIsPc:function(){var e=/iOS|Android/i;t.getSystemInfo({success:function(t){t.windowWidth>420&&!window.top.isPC&&!e.test(t.system)&&(window.location.pathname="/static/PC.html")}})},getStatusBarheight:function(){t.getSystemInfo({success:function(t){n.default.prototype.$statusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();console.log(e,"wx"),n.default.prototype.$wxRightMargin=t.screenWidth-e.left,n.default.prototype.$customBar=e.bottom+e.top-t.statusBarHeight}})},getUserInfo:function(){var e=this,o=t.getStorageSync("userInfo").id;if(o){t.getStorage({key:"userInfo",success:function(t){e.setUserInfo(t.data)}});var n=t.getStorageSync("objToken"),i=t.getStorageSync("roles");this.saveToken(n),this.setRoles(i),console.log(i,"roles")}}}),onLaunch:function(){this.getStatusBarheight(),this.getUserInfo()},onShow:function(){},onHide:function(){}};e.default=l}).call(this,o("543d")["default"])},4693:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o("5a47")),i=o("2f62"),c=o("a33c");function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}getApp();var u=function(){o.e("components/school-list/list").then(function(){return resolve(o("18e6"))}.bind(null,o)).catch(o.oe)},p=function(){o.e("components/auditData/index").then(function(){return resolve(o("a98e"))}.bind(null,o)).catch(o.oe)},d=function(){Promise.all([o.e("common/vendor"),o.e("components/simple-address/simple-address")]).then(function(){return resolve(o("73d2"))}.bind(null,o)).catch(o.oe)},f={components:{schoolList:u,simpleAddress:d,auditData:p},data:function(){return{applyedBool:!1,weapp_check_bool:!0,chooseShow:!0,invitedCode:"",current_page:1,last_page:0,userId:0,scrollTop:0,schoolList:null,conditionBool:!1,schoolType:(0,c.schoolType)(),cityPickerValueDefault:[0,0,1],selectedCity:{name:"",code:""},locationRes:null,currentType:1,college_level:"",college_level_list:[{title:"不限",value:""},{title:"中专",value:"secondary"},{title:"大专",value:"junior"},{title:"本科",value:"undergraduate"},{title:"研究生",value:"master"},{title:"早教托管",value:"early"}],condLeftList:[{type:1,title:"综合"},{type:2,title:"附近"}],propertyList:[{title:"公办教育",value:"pubilc"},{title:"民办教育",value:"private"},{title:"联办教育",value:"unite"},{title:"国际公立",value:"international_public"},{title:"国际私立",value:"international_private"}],totalLength:0,propertySelectList:[],schoolTypeSelectList:[],propertySelectList_value:"",schoolTypeSelectList_value:"",auditData:[{id:0,title:"逆境是磨练意志的熔钢炉",src:"https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1123578154,3549181330&fm=55&app=54&f=JPEG?w=1140&h=640"},{id:1,title:"一本好书是一个艺术大师宝贵的血液",src:"https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=3960943378,4108671332&fm=85&app=92&f=JPEG?w=121&h=75&s=32E5DD0406B037968208A59D0300C082"},{id:2,title:"我阅读关于我所不懂的题目之书籍时，所用的方法",src:"https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1123578154,3549181330&fm=55&app=54&f=JPEG?w=1140&h=640"},{id:3,title:"家庭成为快乐的种子",src:"http://www.59xihuan.cn/uploads/allimg/20130708/5501373284923-lp.jpg"},{id:4,title:"关于读书名言大全寄语",src:"https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3824556614,2647611468&fm=55&app=54&f=JPEG?w=1140&h=640"}]}},computed:r({},(0,i.mapState)(["intentionObj","objToken","userInfo","roles"])),onLoad:function(e){var o=this;if(e.scene){var n=decodeURIComponent(e.scene),i=n.split(",");i[0]&&(this.invitedCode=i[0]),console.log(e.scene,"options.scene"),console.log(n,"scene"),console.log(this.invitedCode,"invitedCode")}e.invitedCode&&(this.invitedCode=e.invitedCode),(0,c.login_mp_wx)(this.invitedCode),this.wxInit(),this.get_wx_location(),t.$on("mpwx",(function(t){o.get_wx_location()}));var a=t.getStorageSync("selectedCity");a&&(this.cityPickerValueDefault=a.value,this.selectedCity.name=a.name,this.selectedCity.code=a.code)},onShow:function(){this.unReadCount_api(),this.$store.state.objToken.access_token&&this.getApplication()},onHide:function(){},onUnload:function(){console.log("监听页面卸载"),history.pushState(null,"考拉上学","#"),window.addEventListener("popstate",(function(){history.pushState(null,"考拉上学","#")}))},methods:{wxInit:function(){var t=this;this.$http({api:n.default.mpwxInit,method:"GET"}).then((function(e){1==e.data.weapp_check&&(t.weapp_check_bool=!1)})).catch((function(t){}))},getApplication:function(){var t=this;this.$http({api:n.default.latestApplications,method:"GET"}).then((function(e){e.data&&!1===e.data.closed&&(t.applyedBool=!0)})).catch((function(t){}))},unReadCount_api:(0,c.Throttle)((function(t){(0,c.unReadCount_news)()}),1e4,!1),get_app_location:function(){var e=this;t.getLocation({success:function(o){e.locationRes={longitude:o.longitude,latitude:o.latitude},t.request({header:{"Content-Type":"application/text"},url:"https://apis.map.qq.com/ws/geocoder/v1?location="+o.latitude+","+o.longitude+"&key=HIBBZ-OJZ3I-YB2GQ-55VMG-F44K3-ZYBHI",success:function(t){var o=t.data.result.ad_info;if(o.adcode){var n=o.adcode.substring(0,2);e.local_province=n+"0000",e.$store.commit("save_local_province",e.local_province)}e.reset()}})},fail:function(t){e.reset()}})},get_wx_location:function(){var t=this;(0,c.checkAuthSetting)().then((function(){t.get_app_location()})).catch((function(e){t.reset()}))},getLocalProvince:function(){var t=this;return new Promise((function(e,o){var i=location.href.split("#")[0],c=t;c.$http({api:n.default.configuration,method:"POST",params:{url:i}}).then((function(t){jweixin.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,url:t.data.url,jsApiList:["getLocation"]}),jweixin.ready((function(){jweixin.getLocation({type:"wgs84",success:function(t){c.$jsonp("https://apis.map.qq.com/ws/geocoder/v1?coord_type=5&get_poi=1&output=jsonp&poi_options=page_size=1;page_index=1",{key:"DNTBZ-K6SH4-YK2UA-XNK6V-VRG2T-IEBJ2",location:t.latitude+","+t.longitude}).then((function(t){var o=t.result.ad_info;if(o.adcode){var n=o.adcode.substring(0,2);c.local_province=n+"0000",c.$store.commit("save_local_province",c.local_province)}e()})).catch((function(t){o()}))},fail:function(){o()}})})),jweixin.error((function(t){o()}))})).catch((function(t){o()}))}))},chooseShowClick:function(){this.chooseShow=!this.chooseShow},touchstartPage:function(){},condLeftItemClick:function(t){this.currentType=t,1===t?(this.locationRes=null,this.selectedCity.name="",this.get_wx_location()):2===t&&(this.local_province="",this.get_MP_WEIXIN_location())},chooseAddress:function(){this.$refs.simpleAddress.open()},addressConfirm:function(e){this.cityPickerValueDefault=e.value,this.selectedCity={name:e.labelArr[1],code:e.cityCode,value:e.value},this.currentType=1,this.locationRes=null,this.local_province="",t.setStorage({key:"selectedCity",data:this.selectedCity}),this.reset()},ItemSelect:function(t,e){return 1===t?this.propertySelectList.some((function(t){return t===e})):2===t?this.schoolTypeSelectList.some((function(t){return t===e})):void 0},propertyItemClick:function(t){var e=this.propertySelectList.some((function(e){return e===t}));if(e){var o=this.propertySelectList.findIndex((function(e){return e===t}));-1!==o&&this.propertySelectList.splice(o,1)}else this.propertySelectList.push(t);console.log(this.propertySelectList,"学校性质")},schoolTypeItemClick:function(t){var e=this.schoolTypeSelectList.some((function(e){return e===t}));if(e){var o=this.schoolTypeSelectList.findIndex((function(e){return e===t}));-1!==o&&this.schoolTypeSelectList.splice(o,1)}else this.schoolTypeSelectList.push(t);console.log(this.schoolTypeSelectList,"学校类型")},college_level_click:function(t){this.college_level=t},chooseItem:function(){this.propertySelectList[0]?this.propertySelectList_value=this.propertySelectList.join(","):this.propertySelectList_value="",this.schoolTypeSelectList[0]?this.schoolTypeSelectList_value=this.schoolTypeSelectList.join(","):this.schoolTypeSelectList_value="",this.reset(),this.conditionLength(this.propertySelectList,this.schoolTypeSelectList),this.conditionClickOrCancel()},conditionAll:function(t){1===t?(this.propertySelectList=[],this.propertySelectList_value=""):2===t&&(this.schoolTypeSelectList=[],this.schoolTypeSelectList_value="")},conditionLength:function(t,e){this.college_level?this.totalLength=t.length+e.length+1:this.totalLength=t.length+e.length},conditionClickOrCancel:function(){this.conditionBool=!this.conditionBool},conditionReset:function(){this.propertySelectList=[],this.propertySelectList_value="",this.schoolTypeSelectList=[],this.schoolTypeSelectList_value="",this.college_level=""},reset:function(){this.current_page=1,this.last_page=0,this.schoolList=null,this.getSchoolList()},getSchoolList:function(){var e=this;t.showLoading({title:"加载中"});var o=this.schoolList||[],i={page:this.current_page,perPage:5};this.$store.state.local_province?i.province=this.local_province:(this.locationRes&&this.locationRes.longitude&&(i.geo_distance=100,i.lon=this.locationRes.longitude,i.lat=this.locationRes.latitude),this.selectedCity&&this.selectedCity.code&&(i.city=this.selectedCity.code)),this.college_level&&(i.college_level=this.college_level),this.propertySelectList_value&&(i.properties=this.propertySelectList_value),this.schoolTypeSelectList_value&&(i.college_classes=this.schoolTypeSelectList_value),this.$http({api:n.default.getSchoolList,method:"GET",params:i}).then((function(n){e.schoolList=o.concat(n.data.data||[]),e.current_page=n.data.meta.current_page,e.last_page=n.data.meta.last_page,t.hideLoading()})).catch((function(e){t.hideLoading()}))},get_APP_PLUS_location:function(){var e=this;t.getLocation({success:function(o){e.locationRes={longitude:o.longitude,latitude:o.latitude},t.request({header:{"Content-Type":"application/text"},url:"https://apis.map.qq.com/ws/geocoder/v1?location="+o.latitude+","+o.longitude+"&key=HIBBZ-OJZ3I-YB2GQ-55VMG-F44K3-ZYBHI",success:function(t){var o=t.data.result.ad_info;e.selectedCity={name:o.city},e.reset()}})},fail:function(t){e.reset()}})},get_MP_WEIXIN_location:function(){var e=this;(0,c.checkAuthSetting)().then((function(){t.getLocation({success:function(o){e.locationRes={longitude:o.longitude,latitude:o.latitude},t.request({header:{"Content-Type":"application/text"},url:"https://apis.map.qq.com/ws/geocoder/v1?location="+o.latitude+","+o.longitude+"&key=DNTBZ-K6SH4-YK2UA-XNK6V-VRG2T-IEBJ2",success:function(t){var o=t.data.result.ad_info;e.selectedCity={name:o.city},e.reset()}})},fail:function(t){e.reset()}})})).catch((function(t){e.reset()}))},getLocation:function(){var t=this;return new Promise((function(e,o){var i=location.href.split("#")[0],c=t;c.$http({api:n.default.configuration,method:"POST",params:{url:i}}).then((function(t){jweixin.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,url:t.data.url,jsApiList:["getLocation"]}),jweixin.ready((function(t){jweixin.getLocation({type:"wgs84",success:function(t){c.locationRes=t,c.$jsonp("https://apis.map.qq.com/ws/geocoder/v1?coord_type=5&get_poi=1&output=jsonp&poi_options=page_size=1;page_index=1",{key:"DNTBZ-K6SH4-YK2UA-XNK6V-VRG2T-IEBJ2",location:t.latitude+","+t.longitude}).then((function(t){var o=t.result.ad_info;c.selectedCity={name:o.city},e()})).catch((function(t){o()}))},fail:function(){o()}})})),jweixin.error((function(t){o()}))})).catch((function(t){o()}))}))},searchLink:function(){t.navigateTo({url:"/pages/search/index"})},onPageScroll:function(t){this.scrollTop=t.scrollTop},goTop:function(){t.pageScrollTo({scrollTop:0,duration:500})},share_h5:function(){var t=this,e=location.href.split("#")[0],o=this.$projectUrl+"h6",i=this.$store.state.userInfo.koala;i&&i.code&&(o+="?invitedCode="+i.code),t.$http({api:n.default.configuration,method:"POST",params:{url:e}}).then((function(n){jweixin.config({debug:!1,appId:n.data.appId,timestamp:n.data.timestamp,nonceStr:n.data.nonceStr,signature:n.data.signature,url:e,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),jweixin.ready((function(){jweixin.updateAppMessageShareData({title:"考拉上学（你的择校好帮手）",desc:"择校好难？你是没有使用考拉上学吧！收录百大院校，求学有考拉上学，我的前途不迷茫",link:o,imgUrl:t.$projectUrl+"koala_images/logo.png",success:function(t){},cancel:function(t){}}),jweixin.updateTimelineShareData({title:"考拉上学（你的择校好帮手）",link:o,imgUrl:t.$projectUrl+"koala_images/logo.png",success:function(){},cancel:function(){}})}))})).catch((function(t){}))}},onPullDownRefresh:function(){this.reset(),setTimeout((function(){t.stopPullDownRefresh()}),1e3)},onReachBottom:function(){this.current_page<this.last_page&&(this.current_page=this.current_page+1,this.getSchoolList())},onShareAppMessage:function(t){var e="";if(this.userInfo.koala&&this.userInfo.koala.code&&(e=this.userInfo.koala.code),"button"===t.from){var o=t.target.dataset.item;return{title:o.name,imageUrl:o.avatar,path:"/sub_school/pages/detail/index?id=".concat(o.id,"&invitedCode=").concat(e)}}if("menu"===t.from)return{title:"考拉上学",imageUrl:this.$projectUrl+"koala_images/logo.png",path:"/pages/index/index?invitedCode=".concat(e)}}};e.default=f}).call(this,o("543d")["default"])},"5cab":function(t,e,o){"use strict";(function(t){o("c764"),o("921b");n(o("66fd"));var e=n(o("e9f1"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"7b42":function(t,e,o){"use strict";o.r(e);var n=o("4693"),i=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},"8a6e":function(t,e,o){"use strict";var n=o("04c7"),i=o.n(n);i.a},"93f5":function(t,e,o){"use strict";o.r(e);var n=o("ca04");for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);o("d841");var c,a,s,r,l=o("f0c5"),u=Object(l["a"])(n["default"],c,a,!1,null,null,null,!1,s,r);e["default"]=u.exports},ca04:function(t,e,o){"use strict";o.r(e);var n=o("3f0d"),i=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},d841:function(t,e,o){"use strict";var n=o("1bb9"),i=o.n(n);i.a},e9f1:function(t,e,o){"use strict";o.r(e);var n=o("29d8"),i=o("7b42");for(var c in i)"default"!==c&&function(t){o.d(e,t,(function(){return i[t]}))}(c);o("00d9"),o("8a6e");var a,s=o("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"7aff359c",null,!1,n["a"],a);e["default"]=r.exports},f6cf:function(t,e,o){}},[["5cab","common/runtime","common/vendor"]]]);