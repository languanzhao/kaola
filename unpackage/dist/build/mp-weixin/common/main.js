(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1bb9":function(t,e,n){},"3d6a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c764"),n("921b");var r=p(n("66fd")),o=p(n("93f5")),u=p(n("8df5")),a=n("0f58");n("724a");var c=p(n("5a0b")),f=l(n("3570")),i=p(n("9faf"));function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function l(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var u=r?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=t[o]}return n.default=t,e&&e.set(t,n),n}function p(t){return t&&t.__esModule?t:{default:t}}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.prototype.$store=u.default,r.default.prototype.$baseUrl="https://shop.test.gzzhongw.net/",r.default.prototype.$http=a.request,r.default.prototype.$projectUrl="https://koala.gzzhongw.net/",r.default.prototype.$contactPhone="13544412322",r.default.prototype.$eventHub=r.default.prototype.$eventHub||new r.default,r.default.use(c.default),Object.keys(f).forEach((function(t){r.default.filter(t,f[t])})),r.default.use(i.default);var g=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("ea22"))}.bind(null,n)).catch(n.oe)};r.default.component("uni-popup",g),r.default.config.productionTip=!1,o.default.mpType="app";var O=new r.default(b({},o.default,{store:u.default})),h=O;e.default=h,t(O).$mount()}).call(this,n("543d")["createApp"])},"3f0d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("66fd")),o=(u(n("5a47")),n("2f62"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={globalData:{invitedCode:"",historyRecord:[]},mounted:function(){},methods:c({},(0,o.mapMutations)(["setUserInfo","saveToken","setRoles"]),{checkIsPc:function(){var e=/iOS|Android/i;t.getSystemInfo({success:function(t){t.windowWidth>420&&!window.top.isPC&&!e.test(t.system)&&(window.location.pathname="/static/PC.html")}})},getStatusBarheight:function(){t.getSystemInfo({success:function(t){r.default.prototype.$statusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();console.log(e,"wx"),r.default.prototype.$wxRightMargin=t.screenWidth-e.left,r.default.prototype.$customBar=e.bottom+e.top-t.statusBarHeight}})},getUserInfo:function(){var e=this,n=t.getStorageSync("userInfo").id;if(n){t.getStorage({key:"userInfo",success:function(t){e.setUserInfo(t.data)}});var r=t.getStorageSync("objToken"),o=t.getStorageSync("roles");this.saveToken(r),this.setRoles(o),console.log(o,"roles")}}}),onLaunch:function(){this.getStatusBarheight(),this.getUserInfo()},onShow:function(){},onHide:function(){}};e.default=i}).call(this,n("543d")["default"])},"93f5":function(t,e,n){"use strict";n.r(e);var r=n("ca04");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("d841");var u,a,c,f,i=n("f0c5"),s=Object(i["a"])(r["default"],u,a,!1,null,null,null,!1,c,f);e["default"]=s.exports},ca04:function(t,e,n){"use strict";n.r(e);var r=n("3f0d"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},d841:function(t,e,n){"use strict";var r=n("1bb9"),o=n.n(r);o.a}},[["3d6a","common/runtime","common/vendor"]]]);