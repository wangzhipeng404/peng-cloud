"use strict";(self["webpackChunkonline_conplier"]=self["webpackChunkonline_conplier"]||[]).push([[1830],{1350:function(e,t,o){o(27515)},12333:function(e,t,o){o.r(t),o.d(t,{default:function(){return g}});o(1350);var n=o(10252),r=o(10311),a=o(72748),i=o(32202),l=o(529),s=o(29583),u=o(10525),p=o(15941);const c={class:"container"};var v={__name:"tmagic",setup(e){const t=(0,r.ref)(),o=(0,r.ref)({left:[],center:["delete","undo","redo","zoom-in","zoom-out"],right:[{type:"button",text:"保存",icon:a.qWi,handler:()=>{n.ZP.info("功能还在开发中")}},{type:"button",icon:a.BBB,text:"源码",handler:e=>e?.uiService.set("showSrc",!e?.uiService.get("showSrc"))}]}),v=(0,r.ref)({type:"app",id:"app_1",items:[]}),m=`${location.pathname}#/runtime`,g=(0,r.ref)({"van-row":[{text:"间隔",name:"gutter"}],"van-col":[{type:"select",text:"占比",name:"span",options:[{text:"24",value:24},{text:"16",value:16},{text:"12",value:12},{text:"8",value:8},{text:"6",value:6},{text:"4",value:4},{text:"3",value:3},{text:"2",value:2},{text:"1",value:1}]}],"van-image":[{name:"width",text:"宽度"},{name:"height",text:"高度"},{name:"src",text:"图片地址"}]}),d=(0,r.ref)({}),f=(0,r.ref)([{title:"容器",items:[{icon:a.JZA,text:"Row",type:"van-row"},{icon:a.JZA,text:"Col",type:"van-col"}]},{title:"基础组件",items:[{icon:a.NuB,text:"图片",type:"van-image"}]}]),x=e=>{const o={},n=e?.dr?.target?.id;if(!n||!t.value)return o;const r=t.value.editorService.getNodeById(n);if(!r)return o;const a=r.type===i.J.PAGE;return o.draggable=!a,o.resizable=!a,o};return(0,r.onMounted)((async()=>{const e=await(0,s.findComponents)();f.value.push({title:"自定义组件",items:e.map((e=>{const{script:t,code:o,propsConfigs:n,initValues:r,eventConfigs:i,createTime:s,updateTime:u,type:c,...v}=e;let m={};try{m=JSON.parse(r)}catch(d){p.log("解析initValue出错"),p.log(d)}l.propsService.setPropsValues(e.type,m);let g=[];try{g=JSON.parse(n)}catch(d){p.log("解析propsConfigs出错"),p.log(d)}return l.propsService.setPropsConfig(e.type,g),{icon:a.NuB,text:e.name,type:e.type}}))}),p.log(g.value);const t=await(0,u.fX)(),o=t.map((e=>{const{protocl:t,...o}=e;return{...o,items:JSON.parse(t).items}}));p.log(v.value),v.value.items.push(...o),p.log(l.editorService.set("root",v.value)),l.editorService.set("page",v.value.items[0]),l.editorService.set("parent",v.value.items[0]),l.propsService.getPropsConfig("van-image").then((e=>{p.log(e)}))})),(e,n)=>{const a=(0,r.resolveComponent)("m-editor");return(0,r.openBlock)(),(0,r.createElementBlock)("div",c,[(0,r.createVNode)(a,{ref_key:"editor",ref:t,modelValue:v.value,"onUpdate:modelValue":n[0]||(n[0]=e=>v.value=e),menu:o.value,"runtime-url":m,"props-configs":g.value,"props-values":d.value,"component-group-list":f.value,"moveable-options":x},null,8,["modelValue","menu","props-configs","props-values","component-group-list"])])}}};const m=v;var g=m}}]);