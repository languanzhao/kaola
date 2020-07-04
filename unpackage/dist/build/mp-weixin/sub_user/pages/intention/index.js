require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["sub_user/pages/intention/index"],{"1b27":function(t,e,i){"use strict";(function(t){i("c764"),i("921b");n(i("66fd"));var e=n(i("9718"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"246c":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("5a47"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return u(t)||a(t)||o(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"===typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(t,e):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={components:{},data:function(){return{categoryList:[],educationObj:{secondary:"中专",junior:"大专",adult:"继续教育",training:"技能培训"},educationList:[{title:"中专",value:"secondary",icon:"icon-fangzi2"},{title:"大专",value:"junior",icon:"icon-fangzi1"},{title:"继续教育",value:"adult",icon:"icon-jiaoyu"},{title:"技能培训",value:"training",icon:"icon-jineng"}],educationValue:"secondary",leftSelectedList:[],sameLeftSelectedList:[],rightList:[],rightSelectedList:[],leftList:[],phoneHeight:0,topViewHeight:0,scrollViewHeight:0}},onLoad:function(t){var e=this;if(t.params){var i=JSON.parse(t.params);this.educationValue=i.intentionValue||"secondary"}this.getMajorsList().then((function(){if(t.params){var i=JSON.parse(t.params);i.intentionList&&e.leftList.map((function(t,n){i.intentionList.map((function(i,n){t.id===i.id&&e.leftSelectedList.push(t)}))})),e.rightList.map((function(t,n){i.intentionList&&i.intentionList.map((function(i,n){for(var r in t.children)for(var s in t.children[r].children)t.children[r].children[s].id===i.id&&(e.rightSelectedList.push(t.children[r].children[s]),e.sameLeftSelectedList.push(t))}))}))}}))},methods:{searchLink:function(){t.navigateTo({url:"/pages/search/index"})},educationClick:function(t){this.educationValue=t,this.rightList=[],this.getMajorsList()},getMajorsList:function(){var t=this;return new Promise((function(e,i){t.leftSelectedList=[],t.rightSelectedList=[],t.$http({api:n.default.getMajorsList,method:"GET",params:{education:t.educationValue}}).then((function(i){t.leftList=i.data,t.leftList.map((function(e,i){t.rightList.push(e)})),e()})).catch((function(t){i()}))}))},selectActive:function(t,e){return 1===t?this.leftSelectedList.some((function(t){return t.id===e})):2===t?this.rightSelectedList.some((function(t){return t.id===e})):void 0},leftListClick:function(t){var e=this;if("all"===t)this.leftSelectedList=[],this.rightSelectedList=[],this.rightList=[],this.leftList.map((function(t,i){e.rightList.push(t)}));else{var i=this.leftSelectedList.some((function(e){return e.id===t.id}));if(i){var n=this.leftSelectedList.findIndex((function(e){return e.id===t.id}));-1!==n&&this.leftSelectedList.splice(n,1);var r=this.sameLeftSelectedList.findIndex((function(e){return e.id===t.id}));-1!==r&&this.sameLeftSelectedList.splice(r,1);var c=this.rightList.findIndex((function(e){return e.id===t.id}));-1!==c&&this.rightList.splice(c,1);var o=[];for(var a in t.children)for(var u in t.children[a].children)o.push(t.children[a].children[u]);o.map((function(t,i){var n=e.rightSelectedList.findIndex((function(e){return e.id===t.id}));-1!==n&&e.rightSelectedList.splice(n,1)})),this.leftSelectedList[0]||this.leftList.map((function(t,i){e.rightList.push(t)}))}else this.leftSelectedList[0]||(this.rightList=[]),this.leftSelectedList.push(t),this.leftList.map((function(i,n){i.id===t.id&&(e.rightList.unshift(i),e.rightList=e.rightList.reduce((function(t,e){return t.some((function(t){return t["id"]==e["id"]}))?t:[].concat(s(t),[e])}),[]))}))}},rightListClick:function(t,e){var i=this,n=this.rightSelectedList.some((function(t){return t.id===e.id}));if(n){var r=this.rightSelectedList.findIndex((function(t){return t.id===e.id}));-1!==r&&this.rightSelectedList.splice(r,1);var s=[];if(this.sameLeftSelectedList.map((function(e,n){e.id===t.id&&(s.push(e),i.sameLeftSelectedList.splice(n,1))})),!s[0]){var c=this.leftSelectedList.findIndex((function(e){return e.id===t.id}));-1!==c&&this.leftSelectedList.splice(c,1)}}else{this.rightSelectedList.push(e);var o=this.leftSelectedList.some((function(e){return e.id===t.id}));o||this.leftSelectedList.push(t),this.sameLeftSelectedList.push(t)}console.log(this.leftSelectedList,"leftSelectedList")},resetBtn:function(){this.leftSelectedList=[],this.rightSelectedList=[]},searchBtn:function(){var e=this.sameLeftSelectedList.reduce((function(t,e){return t.some((function(t){return t["id"]==e["id"]}))?t:[].concat(s(t),[e])}),[]);console.log(e,"listsss");var i=s(this.leftSelectedList);e.map((function(t,e){var n=i.findIndex((function(e){return e.id===t.id}));-1!==n&&i.splice(n,1)}));var n=i.concat(this.rightSelectedList);n.length>3?t.showToast({icon:"none",title:"只能选择3个哦"}):this.purposesSave(n)},purposesSave:function(e){var i=e.map((function(t,e){return t.id}));this.$http({api:n.default.purposeSave,method:"POST",params:{categories:i.join(",")}}).then((function(e){t.$emit("purposes"),t.switchTab({url:"/pages/index/index"})})).catch((function(t){}))}},onReady:function(){var e=this;t.getSystemInfo({success:function(i){e.phoneHeight=i.windowHeight;var n=t.createSelectorQuery().select(".topPart");n.boundingClientRect((function(t){e.topViewHeight=t.height,e.scrollViewHeight=e.phoneHeight-e.topViewHeight-80})).exec()}})}};e.default=d}).call(this,i("543d")["default"])},"44ba":function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.leftList,(function(e,i){var n=t.selectActive(1,e.id),r=t.selectActive(1,e.id);return{$orig:t.__get_orig(e),m0:n,m1:r}}))),n=t.__map(t.rightList,(function(e,i){var n=t.__map(e.children,(function(e,i){var n=t.__map(e.children,(function(e,i){var n=t.selectActive(2,e.id),r=t.selectActive(2,e.id);return{$orig:t.__get_orig(e),m2:n,m3:r}}));return{$orig:t.__get_orig(e),l1:n}}));return{$orig:t.__get_orig(e),l2:n}}));t.$mp.data=Object.assign({},{$root:{l0:i,l3:n}})},s=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"6ea3":function(t,e,i){"use strict";var n=i("ebf2"),r=i.n(n);r.a},"87dc":function(t,e,i){},"94d7":function(t,e,i){"use strict";var n=i("87dc"),r=i.n(n);r.a},9718:function(t,e,i){"use strict";i.r(e);var n=i("44ba"),r=i("b7c8");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("94d7"),i("6ea3");var c,o=i("f0c5"),a=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"9d0036dc",null,!1,n["a"],c);e["default"]=a.exports},b7c8:function(t,e,i){"use strict";i.r(e);var n=i("246c"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},ebf2:function(t,e,i){}},[["1b27","common/runtime","common/vendor"]]]);