(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-webView"],{"06ca":function(t,e,a){"use strict";a.r(e);var n=a("9dd8"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},8493:function(t,e,a){"use strict";var n,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-web-view",{attrs:{src:t.url}})],1)},r=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}))},"9dd8":function(t,e,a){"use strict";var n=a("ee27");a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("5a47")),r={data:function(){return{url:""}},onLoad:function(t){var e=this;this.getLatestApplications().then((function(){e.openService()}))},methods:{getLatestApplications:function(){var t=this;return new Promise((function(e,a){t.$http({api:o.default.latestApplications,method:"GET"}).then((function(a){var n={};a.data&&(n={majorName:a.data.major&&a.data.major.name?a.data.major.name:"",schoolName:a.data.school&&a.data.school.name?a.data.school.name:"",time:a.data.created_at}),t.applyInfo=n,e()}))}))},openService:function(){var t={head:this.$store.state.userInfo.koala.avatar,"名称":this.$store.state.userInfo.koala.name,"真实姓名":this.$store.state.userInfo.koala.id_name,"手机":this.$store.state.userInfo.phone,"报读院校":this.applyInfo.schoolName,"报读专业":this.applyInfo.majorName,"当前学历":"middle"===this.$store.state.userInfo.koala.education?"初中":"高中","户籍地址":this.$store.state.userInfo.koala.id_province+this.$store.state.userInfo.koala.id_city+this.$store.state.userInfo.koala.id_district,"申请时间":this.applyInfo.time};t=JSON.stringify(t),t=encodeURIComponent(t);var e=this.$projectUrl+"/chat.html?history=true&&customer="+t;this.url=e}}};e.default=r},ee38:function(t,e,a){"use strict";a.r(e);var n=a("8493"),o=a("06ca");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);var i,s=a("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"3eb36628",null,!1,n["a"],i);e["default"]=u.exports}}]);