"use strict";(self["webpackChunkonline_conplier"]=self["webpackChunkonline_conplier"]||[]).push([[6569],{53920:function(e,t,a){a(27515)},6566:function(e,t,a){a(27515),a(26),a(81830)},24348:function(e,t,a){a(27515),a(24535)},1350:function(e,t,a){a(27515)},14657:function(e,t,a){a(27515),a(13680)},64339:function(e,t,a){a(27515),a(24535)},13680:function(e,t,a){a(27515),a(53920)},79313:function(e,t,a){a(27515),a(24535),a(53920),a(8710),a(16938),a(79643),a(14657),a(81830),a(24348)},5834:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});a(79313);var n=a(36306),l=(a(24348),a(68626)),r=(a(6566),a(43517)),c=(a(64339),a(48856)),o=(a(37173),a(86013)),u=(a(24535),a(74246)),i=(a(1350),a(10252)),d=a(10311),f=a(22483),m=a(28934),s=a(10525),p=a(84471);async function v(e,t){return p.Z.put("/config",{key:e,value:t})}async function y(e){return p.Z.get("/config/detail",{params:{key:e}})}var V=a(55743),h=a.n(V),x={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7l-23.1-23.1zm434.5 422.9c-6 6-13.1 10.8-20.8 13.9 7.7-3.2 14.8-7.9 20.8-13.9zm-887-34.7c5 30.3 31.4 53.5 63.1 53.5h.9c-31.9 0-58.9-23-64-53.5zm-.9-10.5v-1.9 1.9zm.1-2.6c.1-3.1.5-6.1 1-9.1-.6 2.9-.9 6-1 9.1z",fill:t}},{tag:"path",attrs:{d:"M951 510c0-.1-.1-.1-.1-.2l-1.8-2.1c-.1-.1-.2-.3-.4-.4-.7-.8-1.5-1.6-2.2-2.4L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.6 63.6 0 00-16 26.6l-.6 2.1-.3 1.1-.3 1.2c-.2.7-.3 1.4-.4 2.1 0 .1 0 .3-.1.4-.6 3-.9 6-1 9.1v3.3c0 .5 0 1 .1 1.5 0 .5 0 .9.1 1.4 0 .5.1 1 .1 1.5 0 .6.1 1.2.2 1.8 0 .3.1.6.1.9l.3 2.5v.1c5.1 30.5 32.2 53.5 64 53.5h42.5V940h691.7V614.3h43.4c8.6 0 16.9-1.7 24.5-4.9s14.7-7.9 20.8-13.9a63.6 63.6 0 0018.7-45.3c0-14.7-5-28.8-14.3-40.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z",fill:e}}]}},name:"home",theme:"twotone"},N=x,k=a(72532);function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){Z(e,t,a[t])}))}return e}function Z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e,t){var a=w({},e,t.attrs);return(0,d.createVNode)(k.Z,w({},a,{icon:N}),null)};C.displayName="HomeTwoTone",C.inheritAttrs=!1;var g=C,T=a(15941);const b={class:"filter-wrap"},P=(0,d.createTextVNode)("搜索"),_=(0,d.createTextVNode)("重置"),z=(0,d.createTextVNode)("新增"),H={class:"table-wrap"};var O={__name:"index",setup(e){const t=(0,f.tv)(),a=(0,d.ref)([]),p=(0,d.ref)(a.value),V=(0,d.ref)({key:"index",value:""}),x=()=>{p.value=a.value.filter((e=>e.name.indexOf(O.name)>-1&&e.type.indexOf(O.type)-1))},N=()=>{O.name="",O.key="",p.value=a.value},k=async()=>{const e=await(0,s.fX)();a.value=e.map((e=>({...e,createTime:h()(+e.createTime).format("YYYY-MM-DD HH:mm:ss"),updateTime:h()(+e.updateTime).format("YYYY-MM-DD HH:mm:ss")}))),x()},w=()=>t.push({name:"pageEditor"}),Z=async e=>{await(0,s.CT)(e),k(),i.ZP.success({content:"删除成功",duration:3})},C=async e=>{try{V.value.value=e;const t=await v("index",e);V.value.id=t}catch(t){return T.error(t),void i.ZP.error({content:t,duration:3})}i.ZP.success({content:"保存成功",duration:3})},O=(0,d.reactive)({name:"",type:""}),I=(0,d.ref)([{title:"",key:"icon",width:20,customRender:({record:e})=>e.id==V.value.value&&(0,d.createVNode)(g,null,null)},{title:"名称",dataIndex:"name",key:"name"},{title:"英文名",dataIndex:"type",key:"type"},{title:"创建时间",dataIndex:"createTime",key:"createTime"},{title:"最后更新时间",dataIndex:"updateTime",key:"updateTime"},{title:"操作",dataIndex:"action",customRender:({record:e})=>(0,d.createVNode)(d.Fragment,null,[(0,d.createVNode)(u.Z,{size:"small",type:"link",onClick:()=>t.push({name:"pageEditor",params:{id:e.id}})},{default:()=>[(0,d.createTextVNode)("编辑")]}),(0,d.createVNode)(o.Z,{type:"vertical"},null),(0,d.createVNode)(c.Z,{title:"确认设定此页设为首页",okText:"确认",cancelText:"取消",onConfirm:()=>C(e.id)},{default:()=>[(0,d.createVNode)(u.Z,{size:"small",type:"link",onClick:()=>T.log(e)},{default:()=>[(0,d.createTextVNode)("设为首页")]})]}),(0,d.createVNode)(o.Z,{type:"vertical"},null),(0,d.createVNode)(c.Z,{title:"确认删除此组件？",okText:"确认",cancelText:"取消",onConfirm:()=>Z(e.id)},{default:()=>[(0,d.createVNode)(u.Z,{size:"small",type:"link",onClick:()=>T.log(e)},{default:()=>[(0,d.createTextVNode)("删除")]})]})])}]);return(0,d.onMounted)((()=>{k(),y("index").then((e=>{e&&(V.value={...e},T.log(V.value))})).catch((e=>{T.log(e)}))})),(e,t)=>((0,d.openBlock)(),(0,d.createBlock)((0,d.unref)(m.PageContainer),null,{default:(0,d.withCtx)((()=>[(0,d.createElementVNode)("div",b,[(0,d.createVNode)((0,d.unref)(r.ZP),{layout:"inline",model:O},{default:(0,d.withCtx)((()=>[(0,d.createVNode)((0,d.unref)(r.ZP).Item,{label:"页面名称",name:"name"},{default:(0,d.withCtx)((()=>[(0,d.createVNode)((0,d.unref)(l.ZP),{value:O.name,"onUpdate:value":t[0]||(t[0]=e=>O.name=e)},null,8,["value"])])),_:1}),(0,d.createVNode)((0,d.unref)(r.ZP).Item,{label:"英文名",name:"type"},{default:(0,d.withCtx)((()=>[(0,d.createVNode)((0,d.unref)(l.ZP),{value:O.type,"onUpdate:value":t[1]||(t[1]=e=>O.type=e)},null,8,["value"])])),_:1}),(0,d.createVNode)((0,d.unref)(r.ZP).Item,null,{default:(0,d.withCtx)((()=>[(0,d.createVNode)((0,d.unref)(u.Z),{type:"primary",onClick:x},{default:(0,d.withCtx)((()=>[P])),_:1})])),_:1}),(0,d.createVNode)((0,d.unref)(r.ZP).Item,null,{default:(0,d.withCtx)((()=>[(0,d.createVNode)((0,d.unref)(u.Z),{onClick:N},{default:(0,d.withCtx)((()=>[_])),_:1})])),_:1}),(0,d.createVNode)((0,d.unref)(r.ZP).Item,null,{default:(0,d.withCtx)((()=>[(0,d.createVNode)((0,d.unref)(u.Z),{type:"primary",onClick:w,ghost:""},{default:(0,d.withCtx)((()=>[z])),_:1})])),_:1})])),_:1},8,["model"])]),(0,d.createElementVNode)("div",H,[(0,d.createVNode)((0,d.unref)(n.ZP),{class:"table",dataSource:p.value,columns:I.value,size:"middle"},null,8,["dataSource","columns"])])])),_:1}))}};const I=O;var M=I}}]);