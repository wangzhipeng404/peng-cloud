"use strict";(self["webpackChunkonline_conplier"]=self["webpackChunkonline_conplier"]||[]).push([[779],{53920:function(e,t,a){a(27515)},6566:function(e,t,a){a(27515),a(26),a(81830)},24348:function(e,t,a){a(27515),a(24535)},1350:function(e,t,a){a(27515)},34229:function(e,t,a){a(27515),a(53920)},64339:function(e,t,a){a(27515),a(24535)},79313:function(e,t,a){a(27515),a(24535),a(53920),a(8710),a(16938),a(79643),a(34229),a(81830),a(24348)},26512:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});a(79313);var n=a(84537),l=(a(24348),a(68626)),o=(a(6566),a(99332)),r=(a(64339),a(48856)),u=(a(37173),a(86013)),d=(a(24535),a(74246)),i=(a(1350),a(10252)),c=a(10311),m=a(22483),f=a(28934),s=a(29583),p=a(55743),k=a.n(p),y=a(24887),x=a(15941);const N={class:"filter-wrap"},V=(0,c.createTextVNode)("搜索"),v=(0,c.createTextVNode)("重置"),C={class:"operation-wrap"},w=(0,c.createTextVNode)("新增"),Z={class:"table-wrap"};var T={__name:"index",setup(e){const t=(0,m.tv)(),a=(0,c.ref)([]),p=(0,c.ref)(a.value),T=()=>{p.value=a.value.filter((e=>e.name.indexOf(Y.name)>-1&&e.key.indexOf(Y.key)-1))},h=()=>{Y.name="",Y.key="",p.value=a.value},_=async()=>{const e=await(0,s.findComponents)();a.value=e.map((e=>({...e,createTime:k()(+e.createTime).format("YYYY-MM-DD HH:mm:ss"),updateTime:k()(+e.updateTime).format("YYYY-MM-DD HH:mm:ss")}))),T()},P=()=>t.push({name:"editor"}),I=async(e,t)=>{await(0,s.deleteComponet)(e),_(),(0,y.unregistComponet)(t),i.ZP.success({content:"删除成功",duration:3})},Y=(0,c.reactive)({name:"",key:""}),b=(0,c.ref)([{title:"名称",dataIndex:"name",key:"name"},{title:"key",dataIndex:"key",key:"key"},{title:"创建时间",dataIndex:"createTime",key:"createTime"},{title:"最后更新时间",dataIndex:"updateTime",key:"updateTime"},{title:"操作",dataIndex:"action",customRender:({record:e})=>(0,c.createVNode)(c.Fragment,null,[(0,c.createVNode)(d.Z,{size:"small",type:"link",onClick:()=>t.push({name:"editor",params:{id:e.id}})},{default:()=>[(0,c.createTextVNode)("编辑")]}),(0,c.createVNode)(u.Z,{type:"vertical"},null),(0,c.createVNode)(r.Z,{title:"确认删除此组件？",okText:"确认",cancelText:"取消",onConfirm:()=>I(e.id,e.key)},{default:()=>[(0,c.createVNode)(d.Z,{size:"small",type:"link",onClick:()=>x.log(e)},{default:()=>[(0,c.createTextVNode)("删除")]})]})])}]);return(0,c.onMounted)((()=>{_()})),(e,t)=>((0,c.openBlock)(),(0,c.createBlock)((0,c.unref)(f.PageContainer),null,{default:(0,c.withCtx)((()=>[(0,c.createElementVNode)("div",N,[(0,c.createVNode)((0,c.unref)(o.ZP),{layout:"inline",model:Y},{default:(0,c.withCtx)((()=>[(0,c.createVNode)((0,c.unref)(o.ZP).Item,{label:"组件名称",name:"name"},{default:(0,c.withCtx)((()=>[(0,c.createVNode)((0,c.unref)(l.ZP),{value:Y.name,"onUpdate:value":t[0]||(t[0]=e=>Y.name=e)},null,8,["value"])])),_:1}),(0,c.createVNode)((0,c.unref)(o.ZP).Item,{label:"组件key",name:"key"},{default:(0,c.withCtx)((()=>[(0,c.createVNode)((0,c.unref)(l.ZP),{value:Y.key,"onUpdate:value":t[1]||(t[1]=e=>Y.key=e)},null,8,["value"])])),_:1}),(0,c.createVNode)((0,c.unref)(o.ZP).Item,null,{default:(0,c.withCtx)((()=>[(0,c.createVNode)((0,c.unref)(d.Z),{type:"primary",onClick:T},{default:(0,c.withCtx)((()=>[V])),_:1})])),_:1}),(0,c.createVNode)((0,c.unref)(o.ZP).Item,null,{default:(0,c.withCtx)((()=>[(0,c.createVNode)((0,c.unref)(d.Z),{onClick:h},{default:(0,c.withCtx)((()=>[v])),_:1})])),_:1})])),_:1},8,["model"])]),(0,c.createElementVNode)("div",C,[(0,c.createVNode)((0,c.unref)(d.Z),{type:"primary",onClick:P},{default:(0,c.withCtx)((()=>[w])),_:1})]),(0,c.createElementVNode)("div",Z,[(0,c.createVNode)((0,c.unref)(n.ZP),{class:"table",dataSource:p.value,columns:b.value,size:"middle"},null,8,["dataSource","columns"])])])),_:1}))}};const h=T;var _=h}}]);