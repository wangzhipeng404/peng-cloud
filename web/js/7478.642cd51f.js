"use strict";(self["webpackChunkonline_conplier"]=self["webpackChunkonline_conplier"]||[]).push([[7478],{20480:function(e,t,n){n.d(t,{Yy:function(){return s},i5:function(){return u},jE:function(){return r},sI:function(){return a},y9:function(){return c}});var o=n(51435),i=n(15941);async function r(e){const t=await o.db.libs.where("type").equalsIgnoreCase(e.type).count();if(!e.id&&t>0)throw"key已存在，请修改";const n={...e,createTime:e.createTime||(new Date).getTime(),updateTime:(new Date).getTime()};i.log(e);const r=await o.db.libs.put(n,n.id);return r}async function c(){const e=await o.db.libs.reverse().sortBy("updateTime");return e}async function u(e){const t=await o.db.libs.get(+e);return i.log(t),t}async function a(e){await o.db.libs["delete"](e)}async function s(){const e=await o.db.libs.count();return e}},67478:function(e,t,n){n.r(t),n.d(t,{defaultLibs:function(){return r},initImportMap:function(){return c}});var o=n(20480),i=n(15941);const r=[{type:"1",name:"vue",key:"vue",code:"",path:"./esm/vue.mjs",createTime:1661078329130,updateTime:1661078329130}];function c(){return i.log("initImportMap"),new Promise((e=>{(0,o.y9)().then((t=>{const n=[...r,...t],o={};n.forEach((e=>{if(e.path)o[e.key]=e.path;else{const t=new Blob([e.code],{type:"text/javascript"}),n=URL.createObjectURL(t);o[e.key]=n}}));const i=document.createElement("script");i.setAttribute("type","importmap"),i.textContent=JSON.stringify({imports:o,scopes:{}}),document.getElementsByTagName("head")[0].prepend(i),window.moduleLoaded=()=>{e()};const c=document.createElement("script");c.type="module",c.textContent="import * as vue from 'vue';window.Vue=vue;window.moduleLoaded();window.moduleLoaded=null;",i.after(c)}))}))}}}]);