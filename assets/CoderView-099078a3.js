import{y as h,e as w,j as v,w as g,m as x,o as _,c as b,a as t,d as n,u as s}from"./index-7bf2ceb8.js";import{u as C}from"./chew-defd715b.js";import{p as l,P as y}from"./prism-tomorrow-71f2994e.js";import{a as k,b as S,c as V,r as j}from"./TrashIcon-9d3030c9.js";import"./index-3b85fe61.js";const I={class:"w-full bg-slate-900 px-5 py-3 flex justify-between"},$=t("span",{class:"ml-3"},"Code Chew 專業口香糖",-1),B={class:"flex"},E=t("div",{class:"text-white font-normal py-2 px-4 mx-1"}," 模式：JavaScript ",-1),J={__name:"CoderView",setup(G){const r=h(),e=w(""),i=v(()=>window.innerWidth<768);function c(o){return l.highlight(o,l.languages.js)}g(e,()=>{e.value?window.onbeforeunload=()=>!0:window.onbeforeunload=null,sessionStorage.setItem("chew-content",e.value)});function u(){e.value&&!confirm("確定要離開？")||(sessionStorage.removeItem("chew-content"),r.push("/"))}function m(){e.value&&!confirm("確定要離開？")||r.replace("/writer")}function d(){e.value=""}async function p(){if(!e.value){alert("請輸入內容");return}if(!confirm("確定要送出？"))return;const a=await C().post("gum",{json:{type:"js",content:e.value}}).json();sessionStorage.removeItem("chew-content"),r.replace(`/result/${a._id}`)}return x(()=>{if(i.value){r.replace("/writer");return}const o=sessionStorage.getItem("chew-content");o&&(e.value=o)}),(o,a)=>(_(),b("div",null,[t("div",I,[t("button",{class:"bg-slate-900 flex hover:bg-slate-800 text-white font-normal py-2 px-4 mx-1",onClick:u},[n(s(k),{class:"h-6 w-6"}),$]),t("div",B,[E,t("button",{class:"bg-slate-900 hover:bg-slate-800 text-white font-normal py-2 px-4 mx-1",title:"一般模式",onClick:m},[n(s(S),{class:"h-6 w-6"})]),t("button",{class:"bg-slate-900 hover:bg-slate-800 text-white font-normal py-2 px-4 mx-1",title:"清空內容",onClick:d},[n(s(V),{class:"h-6 w-6"})]),t("button",{class:"bg-amber-900 hover:bg-amber-800 text-white font-normal py-2 px-4 mx-1",title:"我打完了",onClick:p},[n(s(j),{class:"h-6 w-6"})])])]),n(s(y),{class:"code-editor",modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=f=>e.value=f),highlight:c,"line-numbers":""},null,8,["modelValue"])]))}};export{J as default};
