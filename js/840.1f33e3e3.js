"use strict";(self["webpackChunkchew"]=self["webpackChunkchew"]||[]).push([[840],{3840:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-violet-500"},[e("div",{staticClass:"container my-5 px-9 py-5"},[e("div",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg px-3 py-5 bg-white"},[t._v(" 你所黏上的片段網址： "),e("span",{staticClass:"rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700"},[t._v(" "+t._s(t.url)+" ")])]),e("div",{staticClass:"mx-3 my-5 text-white"},[t._v(" 或者，將片段代碼傳送給你的朋友，讓他們利用代碼查詢這份的文字片段 ")]),e("div",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg px-3 py-5 bg-white"},[e("h4",{staticClass:"font-semibold text-slate-900"},[t._v("片段代碼：")]),e("span",{staticClass:"rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700"},[t._v(" "+t._s(t.code)+" ")])])])])},i=[],n={name:"CodeView",props:{result:{type:Object,required:!0}},computed:{url(){if(!this.result?._id)return"Unknown";const t="https://web-tech.tw/chew";return`${t}/${this.result._id}`},code(){return this.result?._id||"Unknown"}},created(){this.result?._id||this.$router.replace("/")}},a=n,r=s(1001),d=(0,r.Z)(a,l,i,!1,null,null,null),u=d.exports}}]);
//# sourceMappingURL=840.1f33e3e3.js.map