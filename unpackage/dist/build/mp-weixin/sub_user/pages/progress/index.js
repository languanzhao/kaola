require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_user/pages/progress/index","common/main"],{"14d1":function(t,e,a){"use strict";var r={"u-skeleton":function(){return a.e("uview/components/u-skeleton/u-skeleton").then(a.bind(null,"1acb"))}},n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}))},"1bb9":function(t,e,a){},"1cc9":function(t,e,a){"use strict";var r=a("2c39"),n=a.n(r);n.a},2087:function(t,e,a){"use strict";(function(t){a("c764"),a("921b");r(a("66fd"));var e=r(a("72d9"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"2c39":function(t,e,a){},"3d6a":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c764"),a("921b");var r=f(a("66fd")),n=f(a("93f5")),o=f(a("8df5")),i=a("0f58");a("724a");var s=f(a("5a0b")),u=p(a("3570")),c=f(a("9faf"));function d(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return d=function(){return t},t}function p(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=d();if(e&&e.has(t))return e.get(t);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=r?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=t[n]}return a.default=t,e&&e.set(t,a),a}function f(t){return t&&t.__esModule?t:{default:t}}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}r.default.prototype.$store=o.default,r.default.prototype.$baseUrl="https://shop.test.gzzhongw.net/",r.default.prototype.$http=i.request,r.default.prototype.$projectUrl="https://koala.gzzhongw.net/",r.default.prototype.$contactPhone="13544412322",r.default.prototype.$eventHub=r.default.prototype.$eventHub||new r.default,r.default.use(s.default),Object.keys(u).forEach((function(t){r.default.filter(t,u[t])})),r.default.use(c.default);var _=function(){a.e("components/uni-popup/uni-popup").then(function(){return resolve(a("ea22"))}.bind(null,a)).catch(a.oe)};r.default.component("uni-popup",_),r.default.config.productionTip=!1,n.default.mpType="app";var y=new r.default(h({},n.default,{store:o.default})),b=y;e.default=b,t(y).$mount()}).call(this,a("543d")["createApp"])},"3f0d":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(a("66fd")),n=(o(a("5a47")),a("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c={globalData:{invitedCode:"",historyRecord:[]},mounted:function(){},methods:s({},(0,n.mapMutations)(["setUserInfo","saveToken","setRoles"]),{checkIsPc:function(){var e=/iOS|Android/i;t.getSystemInfo({success:function(t){t.windowWidth>420&&!window.top.isPC&&!e.test(t.system)&&(window.location.pathname="/static/PC.html")}})},getStatusBarheight:function(){t.getSystemInfo({success:function(t){r.default.prototype.$statusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();console.log(e,"wx"),r.default.prototype.$wxRightMargin=t.screenWidth-e.left,r.default.prototype.$customBar=e.bottom+e.top-t.statusBarHeight}})},getUserInfo:function(){var e=this,a=t.getStorageSync("userInfo").id;if(a){t.getStorage({key:"userInfo",success:function(t){e.setUserInfo(t.data)}});var r=t.getStorageSync("objToken"),n=t.getStorageSync("roles");this.saveToken(r),this.setRoles(n),console.log(n,"roles")}}}),onLaunch:function(){this.getStatusBarheight(),this.getUserInfo()},onShow:function(){},onHide:function(){}};e.default=c}).call(this,a("543d")["default"])},"5d9a":function(t,e,a){},"69be":function(t,e,a){"use strict";a.r(e);var r=a("b656"),n=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"72d9":function(t,e,a){"use strict";a.r(e);var r=a("14d1"),n=a("69be");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("e971"),a("1cc9");var i,s=a("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"8ed27516",null,!1,r["a"],i);e["default"]=u.exports},"93f5":function(t,e,a){"use strict";a.r(e);var r=a("ca04");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("d841");var o,i,s,u,c=a("f0c5"),d=Object(c["a"])(r["default"],o,i,!1,null,null,null,!1,s,u);e["default"]=d.exports},b656:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("c508"),n=u(a("5a47")),o=a("2f62"),i=a("a33c"),s=a("3570");function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f={components:{},data:function(){return{type:null,skeletonLoading:!0,detail:{school:{}},property:{pubilc:"公办",private:"民办",unite:"联办",international_public:"国际公立",international_private:"国际私立"},collegeLevel:{secondary:"中专",junior:"大专",undergraduate:"本科",master:"研究生",early:"早教托管"},progressList:[]}},computed:d({},(0,o.mapState)(["userInfo"])),onLoad:function(t){if(t.type){var e=JSON.parse(t.type);this.type=e;var a=Number(t.id);1==e?this.inviteeProcessDetail(a):2==e&&this.getDetail(a)}},methods:{inviteeProcessDetail:function(t){var e=this;this.$http({api:n.default.userApplications+"/"+t+"/my_distribution",method:"GET"}).then((function(t){e.detail=t.data,e.progressList.push({title:"已报名交费",summary:"已成功报名交费",operation:"查看凭证",operType:"voucher",month:(0,s.timeFormat)(t.data.created_at,"MM-dd"),time:(0,s.timeFormat)(t.data.created_at,"hh:mm")}),e.translate(t.data),e.skeletonLoading=!1})).catch((function(t){}))},getDetail:function(t){var e=this;this.$http({api:n.default.userApplications+"/"+t,method:"GET"}).then((function(t){e.detail=t.data,e.progressList.unshift({title:"已报名交费",summary:"已成功报名交费",operation:"查看凭证",operType:"checkedVoucher",month:(0,s.timeFormat)(t.data.created_at,"MM-dd"),time:(0,s.timeFormat)(t.data.created_at,"hh:mm")}),e.translate(t.data),e.skeletonLoading=!1})).catch((function(t){}))},translate:function(t){"pending"===t.pass_status?this.progressList.push({title:"入学审核",summary:"当前正在审核，请耐心等待"}):"failed"===t.pass_status?(this.progressList.push({title:"入学审核",summary:"审核不通过"}),this.progressList.push({title:"报名失败",pass_status:"failed",summary:t.pass_data.refused_reason||"重新报名或者挑选其他优质院校",refused_type:t.pass_data.refused_type,operation:"voucher"==t.pass_data.refused_type?"重新上传凭证":"更多院校",operType:"voucher"==t.pass_data.refused_type?"voucher":"more",month:(0,s.timeFormat)(t.pass_data.audited_at,"MM-dd"),time:(0,s.timeFormat)(t.pass_data.audited_at,"hh:mm")})):"success"===t.pass_status?(this.progressList.push({title:"入学审核",summary:"审核通过"}),"pending"===t.ship_status?this.progressList.push({title:"报名成功",summary:"录取通知书（待处理）",operType:"copy",month:(0,s.timeFormat)(t.pass_data.audited_at,"MM-dd"),time:(0,s.timeFormat)(t.pass_data.audited_at,"hh:mm")}):"delivered"===t.ship_status&&this.progressList.push({title:"报名成功",operation:"复制单号",summary:"录取通知书（邮寄中）",operType:"copy",month:(0,s.timeFormat)(t.pass_data.audited_at,"MM-dd"),time:(0,s.timeFormat)(t.pass_data.audited_at,"hh:mm")}),"applied"===t.refund_status?this.progressList.push({title:"已发起退款申请",month:(0,s.timeFormat)(t.refund_data.refund_created_at,"MM-dd"),time:(0,s.timeFormat)(t.refund_data.refund_created_at,"hh:mm")}):"success"===t.refund_status?(this.progressList.push({title:"已发起退款申请",month:(0,s.timeFormat)(t.refund_data.refund_created_at,"MM-dd"),time:(0,s.timeFormat)(t.refund_data.refund_created_at,"hh:mm")}),this.progressList.push({title:"退款成功",month:(0,s.timeFormat)(t.refund_data.refund_audited_at,"MM-dd"),time:(0,s.timeFormat)(t.refund_data.refund_audited_at,"hh:mm")})):"failed"===t.refund_status&&(this.progressList.push({title:"已发起退款申请",month:(0,s.timeFormat)(t.refund_data.refund_created_at,"MM-dd"),time:(0,s.timeFormat)(t.refund_data.refund_created_at,"hh:mm")}),this.progressList.push({title:"退款失败",refund_status:"failed",summary:t.refund_data.refund_disagree_reason||"",month:(0,s.timeFormat)(t.refund_data.refund_audited_at,"MM-dd"),time:(0,s.timeFormat)(t.refund_data.refund_audited_at,"hh:mm")}))):"finish"===t.pass_status&&(this.progressList.push({title:"入学审核",summary:"审核通过"}),this.progressList.push({title:"报名成功",operation:"复制单号",summary:"录取通知书（已接收）",operType:"copy",month:(0,s.timeFormat)(t.pass_data.audited_at,"MM-dd"),time:(0,s.timeFormat)(t.pass_data.audited_at,"hh:mm")}),this.progressList.push({title:"入学报到",summary:"请注意领取您的助学计划"}))},operType:function(e){"copy"===e?(0,i.copyValue)(this.detail.ship_data.express_no):"checkedVoucher"===e?(t.showLoading({title:"转换格式中..."}),this.$http({api:n.default.userApplications+"/"+this.detail.id,method:"GET",params:{show_certificate:1}}).then((function(e){(0,r.base64ToPath)(e.data.certificate_data).then((function(e){t.previewImage({current:e,urls:[e]}),t.hideLoading()})).catch((function(t){console.error(t)}))}))):"more"===e?t.switchTab({url:"/pages/index/index"}):"voucher"===e&&this.voucherUpdate()},voucherUpdate:function(){var e=this.detail,a={applyId:this.detail.id,sInfo:{id:e.school.id,avatar:e.school.avatar,name:e.school.name},majorObj:{id:e.major.id,tuition:e.major.tuition}};e.school.contact_information&&e.school.contact_information.corporate_account&&(a.tInfo={contact_name:e.school.contact_information.contact_name,contact_phone:e.school.contact_information.contact_phone,corporate_account:e.school.contact_information.corporate_account}),t.navigateTo({url:"/sub_school/pages/apply/transferAccounts?updateBool=true&&info="+encodeURIComponent(JSON.stringify(a))})},showSheet:function(){var e=this,a=[];this.detail.pass_status;2==this.type&&a.push("取消报名"),t.showActionSheet({itemList:a,success:function(t){var r=a[t.tapIndex];"分享"===r||"取消报名"===r&&e.cancelApplication()}})},cancelApplication:function(){var e=this.detail,a=e.id,r=e.total_amount,n=e.school,o=e.major,i={pass_status:this.detail.pass_status,id:a,majorName:o.name,schoolId:n.id,avatar:n.avatar,name:n.name,college_level:n.college_level,property:n.property,province:n.province,city:n.city,district:n.district,total_amount:r};t.navigateTo({url:"/sub_user/pages/progress/leaveSchool?schoolInfo="+encodeURIComponent(JSON.stringify(i))})}}};e.default=f}).call(this,a("543d")["default"])},ca04:function(t,e,a){"use strict";a.r(e);var r=a("3f0d"),n=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},d841:function(t,e,a){"use strict";var r=a("1bb9"),n=a.n(r);n.a},e971:function(t,e,a){"use strict";var r=a("5d9a"),n=a.n(r);n.a}},[["2087","common/runtime","common/vendor","sub_user/common/vendor"]]]);