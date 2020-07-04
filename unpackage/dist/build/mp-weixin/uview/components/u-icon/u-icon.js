(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview/components/u-icon/u-icon"],{"16bf":function(t,e,n){"use strict";n.r(e);var u=n("1a37"),i=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=i.a},"1a37":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={props:{name:{type:String,default:""},color:{type:String,default:"inherit"},size:{type:[Number,String],default:"inherit"},bold:{type:Boolean,default:!1},index:{type:[Number,String],default:""},hoverClass:{type:String,default:""},customPrefix:{type:String,default:"uicon"}},data:function(){return{}},computed:{customClass:function(){var t=[];return t.push(this.customPrefix+"-"+this.name),"uicon"==this.customPrefix?t.push("u-iconfont"):t.push(this.customPrefix),t}},methods:{click:function(){this.$emit("click",this.index)},touchstart:function(){this.$emit("touchstart",this.index)}}};e.default=u},"481b":function(t,e,n){"use strict";n.r(e);var u=n("e51d"),i=n("16bf");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("d89e");var o,c=n("f0c5"),a=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"4f5040ff",null,!1,u["a"],o);e["default"]=a.exports},"9add":function(t,e,n){},d89e:function(t,e,n){"use strict";var u=n("9add"),i=n.n(u);i.a},e51d:function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview/components/u-icon/u-icon-create-component',
    {
        'uview/components/u-icon/u-icon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("481b"))
        })
    },
    [['uview/components/u-icon/u-icon-create-component']]
]);
