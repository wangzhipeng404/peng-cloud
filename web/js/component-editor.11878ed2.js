(self["webpackChunkonline_conplier"]=self["webpackChunkonline_conplier"]||[]).push([[6443],{33789:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=33789,e.exports=t},25787:function(e,t,n){var r=n(47976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},93678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},82801:function(e,t,n){"use strict";var r=n(82109),i=n(17854),s=n(35005),o=n(79114),a=n(3070).f,l=n(92597),c=n(25787),u=n(79587),p=n(56277),h=n(93678),d=n(77741),f=n(19781),m=n(31913),y="DOMException",g=s("Error"),b=s(y),E=function(){c(this,v);var e=arguments.length,t=p(e<1?void 0:arguments[0]),n=p(e<2?void 0:arguments[1],"Error"),r=new b(t,n),i=g(t);return i.name=y,a(r,"stack",o(1,d(i.stack,1))),u(r,this,E),r},v=E.prototype=b.prototype,S="stack"in g(y),T="stack"in new b(1,2),x=b&&f&&Object.getOwnPropertyDescriptor(i,y),_=!!x&&!(x.writable&&x.configurable),A=S&&!_&&!T;r({global:!0,constructor:!0,forced:m||A},{DOMException:A?E:b});var w=s(y),P=w.prototype;if(P.constructor!==w)for(var C in m||a(P,"constructor",o(1,w)),h)if(l(h,C)){var O=h[C],k=O.s;l(w,k)||a(w,k,o(6,O.c))}},17689:function(e,t,n){(function(e,r){r(t,n(79941),n(75547),n(69864))})(0,(function(e,t,n,r){"use strict";const i=0,s=1,o=2,a=3,l=4,c=-1;let u;e.addSegment=void 0,e.addMapping=void 0,e.maybeAddSegment=void 0,e.maybeAddMapping=void 0,e.setSourceContent=void 0,e.toDecodedMap=void 0,e.toEncodedMap=void 0,e.fromMap=void 0,e.allMappings=void 0;class p{constructor({file:e,sourceRoot:n}={}){this._names=new t.SetArray,this._sources=new t.SetArray,this._sourcesContent=[],this._mappings=[],this.file=e,this.sourceRoot=n}}function h(e,t){for(let n=e.length;n<=t;n++)e[n]=[];return e[t]}function d(e,t){let n=e.length;for(let r=n-1;r>=0;n=r--){const n=e[r];if(t>=n[i])break}return n}function f(e,t,n){for(let r=e.length;r>t;r--)e[r]=e[r-1];e[t]=n}function m(e){const{length:t}=e;let n=t;for(let r=n-1;r>=0;n=r,r--)if(e[r].length>0)break;n<t&&(e.length=n)}function y(e,n){for(let r=0;r<n.length;r++)t.put(e,n[r])}function g(e,t){if(0===t)return!0;const n=e[t-1];return 1===n.length}function b(e,t,n,r,i,u){if(0===t)return!1;const p=e[t-1];return 1!==p.length&&(n===p[s]&&r===p[o]&&i===p[a]&&u===(5===p.length?p[l]:c))}function E(e,t,n){const{generated:r,source:i,original:s,name:o,content:a}=n;if(!i)return u(e,t,r.line-1,r.column,null,null,null,null,null);const l=i;return u(e,t,r.line-1,r.column,l,s.line-1,s.column,o,a)}(()=>{e.addSegment=(e,t,n,r,i,s,o,a)=>u(!1,e,t,n,r,i,s,o,a),e.maybeAddSegment=(e,t,n,r,i,s,o,a)=>u(!0,e,t,n,r,i,s,o,a),e.addMapping=(e,t)=>E(!1,e,t),e.maybeAddMapping=(e,t)=>E(!0,e,t),e.setSourceContent=(e,n,r)=>{const{_sources:i,_sourcesContent:s}=e;s[t.put(i,n)]=r},e.toDecodedMap=e=>{const{file:t,sourceRoot:n,_mappings:r,_sources:i,_sourcesContent:s,_names:o}=e;return m(r),{version:3,file:t||void 0,names:o.array,sourceRoot:n||void 0,sources:i.array,sourcesContent:s,mappings:r}},e.toEncodedMap=t=>{const r=e.toDecodedMap(t);return Object.assign(Object.assign({},r),{mappings:n.encode(r.mappings)})},e.allMappings=e=>{const t=[],{_mappings:n,_sources:r,_names:c}=e;for(let u=0;u<n.length;u++){const e=n[u];for(let n=0;n<e.length;n++){const p=e[n],h={line:u+1,column:p[i]};let d,f,m;1!==p.length&&(d=r.array[p[s]],f={line:p[o]+1,column:p[a]},5===p.length&&(m=c.array[p[l]])),t.push({generated:h,source:d,original:f,name:m})}}return t},e.fromMap=e=>{const t=new r.TraceMap(e),n=new p({file:t.file,sourceRoot:t.sourceRoot});return y(n._names,t.names),y(n._sources,t.sources),n._sourcesContent=t.sourcesContent||t.sources.map((()=>null)),n._mappings=r.decodedMappings(t),n},u=(e,n,r,i,s,o,a,l,u)=>{const{_mappings:p,_sources:m,_sourcesContent:y,_names:E}=n,v=h(p,r),S=d(v,i);if(!s){if(e&&g(v,S))return;return f(v,S,[i])}const T=t.put(m,s),x=l?t.put(E,l):c;if(T===y.length&&(y[T]=null!==u&&void 0!==u?u:null),!e||!b(v,S,T,o,a,x))return f(v,S,l?[i,T,o,a,x]:[i,T,o,a])}})(),e.GenMapping=p,Object.defineProperty(e,"__esModule",{value:!0})}))},83509:function(e,t,n){(function(e,r){r(t,n(79941),n(75547))})(0,(function(e,t,n){"use strict";e.addSegment=void 0,e.addMapping=void 0,e.setSourceContent=void 0,e.decodedMap=void 0,e.encodedMap=void 0,e.allMappings=void 0;class r{constructor({file:e,sourceRoot:n}={}){this._names=new t.SetArray,this._sources=new t.SetArray,this._sourcesContent=[],this._mappings=[],this.file=e,this.sourceRoot=n}}function i(e,t){for(let n=e.length;n<=t;n++)e[n]=[];return e[t]}function s(e,t,n){let r=e.length;for(let i=r-1;i>=0;i--,r--){const s=e[i],a=s[0];if(a>t)continue;if(a<t)break;const l=o(s,n);if(0===l)return r;if(l<0)break}return r}function o(e,t){let n=a(e.length,t.length);return 0!==n?n:1===e.length?0:(n=a(e[1],t[1]),0!==n?n:(n=a(e[2],t[2]),0!==n?n:(n=a(e[3],t[3]),0!==n?n:4===e.length?0:a(e[4],t[4]))))}function a(e,t){return e-t}function l(e,t,n){if(-1!==t){for(let n=e.length;n>t;n--)e[n]=e[n-1];e[t]=n}}(()=>{e.addSegment=(e,n,r,o,a,c,u)=>{const{_mappings:p,_sources:h,_sourcesContent:d,_names:f}=e,m=i(p,n);if(null==o){const e=[r],t=s(m,r,e);return l(m,t,e)}const y=t.put(h,o),g=u?[r,y,a,c,t.put(f,u)]:[r,y,a,c],b=s(m,r,g);y===d.length&&(d[y]=null),l(m,b,g)},e.addMapping=(t,n)=>{const{generated:r,source:i,original:s,name:o}=n;return e.addSegment(t,r.line-1,r.column,i,null==s?void 0:s.line-1,null===s||void 0===s?void 0:s.column,o)},e.setSourceContent=(e,n,r)=>{const{_sources:i,_sourcesContent:s}=e;s[t.put(i,n)]=r},e.decodedMap=e=>{const{file:t,sourceRoot:n,_mappings:r,_sources:i,_sourcesContent:s,_names:o}=e;return{version:3,file:t,names:o.array,sourceRoot:n||void 0,sources:i.array,sourcesContent:s,mappings:r}},e.encodedMap=t=>{const r=e.decodedMap(t);return Object.assign(Object.assign({},r),{mappings:n.encode(r.mappings)})},e.allMappings=e=>{const t=[],{_mappings:n,_sources:r,_names:i}=e;for(let s=0;s<n.length;s++){const e=n[s];for(let n=0;n<e.length;n++){const o=e[n],a={line:s+1,column:o[0]};let l,c,u;1!==o.length&&(l=r.array[o[1]],c={line:o[2]+1,column:o[3]},5===o.length&&(u=i.array[o[4]])),t.push({generated:a,source:l,original:c,name:u})}}return t}})(),e.GenMapping=r,Object.defineProperty(e,"__esModule",{value:!0})}))},78922:function(e){(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=/^[\w+.-]+:\/\//,t=/^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,n=/^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;var r;function i(t){return e.test(t)}function s(e){return e.startsWith("//")}function o(e){return e.startsWith("/")}function a(e){return e.startsWith("file:")}function l(e){return/^[.?#]/.test(e)}function c(e){const n=t.exec(e);return p(n[1],n[2]||"",n[3],n[4]||"",n[5]||"/",n[6]||"",n[7]||"")}function u(e){const t=n.exec(e),r=t[2];return p("file:","",t[1]||"","",o(r)?r:"/"+r,t[3]||"",t[4]||"")}function p(e,t,n,i,s,o,a){return{scheme:e,user:t,host:n,port:i,path:s,query:o,hash:a,type:r.Absolute}}function h(e){if(s(e)){const t=c("http:"+e);return t.scheme="",t.type=r.SchemeRelative,t}if(o(e)){const t=c("http://foo.com"+e);return t.scheme="",t.host="",t.type=r.AbsolutePath,t}if(a(e))return u(e);if(i(e))return c(e);const t=c("http://foo.com/"+e);return t.scheme="",t.host="",t.type=e?e.startsWith("?")?r.Query:e.startsWith("#")?r.Hash:r.RelativePath:r.Empty,t}function d(e){if(e.endsWith("/.."))return e;const t=e.lastIndexOf("/");return e.slice(0,t+1)}function f(e,t){m(t,t.type),"/"===e.path?e.path=t.path:e.path=d(t.path)+e.path}function m(e,t){const n=t<=r.RelativePath,i=e.path.split("/");let s=1,o=0,a=!1;for(let r=1;r<i.length;r++){const e=i[r];e?(a=!1,"."!==e&&(".."!==e?(i[s++]=e,o++):o?(a=!0,o--,s--):n&&(i[s++]=e))):a=!0}let l="";for(let r=1;r<s;r++)l+="/"+i[r];(!l||a&&!l.endsWith("/.."))&&(l+="/"),e.path=l}function y(e,t){if(!e&&!t)return"";const n=h(e);let i=n.type;if(t&&i!==r.Absolute){const e=h(t),s=e.type;switch(i){case r.Empty:n.hash=e.hash;case r.Hash:n.query=e.query;case r.Query:case r.RelativePath:f(n,e);case r.AbsolutePath:n.user=e.user,n.host=e.host,n.port=e.port;case r.SchemeRelative:n.scheme=e.scheme}s>i&&(i=s)}m(n,i);const s=n.query+n.hash;switch(i){case r.Hash:case r.Query:return s;case r.RelativePath:{const r=n.path.slice(1);return r?l(t||e)&&!l(r)?"./"+r+s:r+s:s||"."}case r.AbsolutePath:return n.path+s;default:return n.scheme+"//"+n.user+n.host+n.port+n.path+s}}return function(e){e[e["Empty"]=1]="Empty",e[e["Hash"]=2]="Hash",e[e["Query"]=3]="Query",e[e["RelativePath"]=4]="RelativePath",e[e["AbsolutePath"]=5]="AbsolutePath",e[e["SchemeRelative"]=6]="SchemeRelative",e[e["Absolute"]=7]="Absolute"}(r||(r={})),y}))},79941:function(e,t){(function(e,n){n(t)})(0,(function(e){"use strict";e.get=void 0,e.put=void 0,e.pop=void 0;class t{constructor(){this._indexes={__proto__:null},this.array=[]}}(()=>{e.get=(e,t)=>e._indexes[t],e.put=(t,n)=>{const r=e.get(t,n);if(void 0!==r)return r;const{array:i,_indexes:s}=t;return s[n]=i.push(n)-1},e.pop=e=>{const{array:t,_indexes:n}=e;if(0===t.length)return;const r=t.pop();n[r]=void 0}})(),e.SetArray=t,Object.defineProperty(e,"__esModule",{value:!0})}))},2052:function(e,t,n){var r=n(13374)["lW"];n(48675),n(3462),n(37380),n(1118),n(21703),function(e,n){n(t)}(0,(function(e){"use strict";const t=",".charCodeAt(0),n=";".charCodeAt(0),i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=new Uint8Array(64),o=new Uint8Array(128);for(let r=0;r<i.length;r++){const e=i.charCodeAt(r);o[e]=r,s[r]=e}const a="undefined"!==typeof TextDecoder?new TextDecoder:"undefined"!==typeof r?{decode(e){const t=r.from(e.buffer,e.byteOffset,e.byteLength);return t.toString()}}:{decode(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}};function l(e){const r=new Int32Array(5),i=[];let s=[],o=!0,a=0;for(let l=0;l<e.length;){const h=e.charCodeAt(l);if(h===t)l++;else if(h===n)r[0]=a=0,o||p(s),o=!0,i.push(s),s=[],l++;else{l=c(e,l,r,0);const t=r[0];if(t<a&&(o=!1),a=t,!u(e,l)){s.push([t]);continue}if(l=c(e,l,r,1),l=c(e,l,r,2),l=c(e,l,r,3),!u(e,l)){s.push([t,r[1],r[2],r[3]]);continue}l=c(e,l,r,4),s.push([t,r[1],r[2],r[3],r[4]])}}return o||p(s),i.push(s),i}function c(e,t,n,r){let i=0,s=0,a=0;do{const n=e.charCodeAt(t++);a=o[n],i|=(31&a)<<s,s+=5}while(32&a);const l=1&i;return i>>>=1,l&&(i=-2147483648|-i),n[r]+=i,t}function u(e,r){if(r>=e.length)return!1;const i=e.charCodeAt(r);return i!==t&&i!==n}function p(e){e.sort(h)}function h(e,t){return e[0]-t[0]}function d(e){const r=new Int32Array(5);let i=new Uint8Array(1024),s=0;for(let o=0;o<e.length;o++){const a=e[o];if(o>0&&(i=f(i,s,1),i[s++]=n),0!==a.length){r[0]=0;for(let e=0;e<a.length;e++){const n=a[e];i=f(i,s,36),e>0&&(i[s++]=t),s=m(i,s,r,n,0),1!==n.length&&(s=m(i,s,r,n,1),s=m(i,s,r,n,2),s=m(i,s,r,n,3),4!==n.length&&(s=m(i,s,r,n,4)))}}}return a.decode(i.subarray(0,s))}function f(e,t,n){if(e.length>t+n)return e;const r=new Uint8Array(2*e.length);return r.set(e),r}function m(e,t,n,r,i){const o=r[i];let a=o-n[i];n[i]=o,a=a<0?-a<<1|1:a<<1;do{let n=31&a;a>>>=5,a>0&&(n|=32),e[t++]=s[n]}while(a>0);return t}const y=/^[\w+.-]+:\/\//,g=/^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?/,b=/^file:(?:\/\/((?![a-z]:)[^/]*)?)?(\/?.*)/i;function E(e){return y.test(e)}function v(e){return e.startsWith("//")}function S(e){return e.startsWith("/")}function T(e){return e.startsWith("file:")}function x(e){const t=g.exec(e);return A(t[1],t[2]||"",t[3],t[4]||"",t[5]||"/")}function _(e){const t=b.exec(e),n=t[2];return A("file:","",t[1]||"","",S(n)?n:"/"+n)}function A(e,t,n,r,i){return{scheme:e,user:t,host:n,port:r,path:i,relativePath:!1}}function w(e){if(v(e)){const t=x("http:"+e);return t.scheme="",t}if(S(e)){const t=x("http://foo.com"+e);return t.scheme="",t.host="",t}if(T(e))return _(e);if(E(e))return x(e);const t=x("http://foo.com/"+e);return t.scheme="",t.host="",t.relativePath=!0,t}function P(e){if(e.endsWith("/.."))return e;const t=e.lastIndexOf("/");return e.slice(0,t+1)}function C(e,t){e.relativePath&&(O(t),"/"===e.path?e.path=t.path:e.path=P(t.path)+e.path,e.relativePath=t.relativePath)}function O(e){const{relativePath:t}=e,n=e.path.split("/");let r=1,i=0,s=!1;for(let a=1;a<n.length;a++){const e=n[a];e?(s=!1,"."!==e&&(".."!==e?(n[r++]=e,i++):i?(s=!0,i--,r--):t&&(n[r++]=e))):s=!0}let o="";for(let a=1;a<r;a++)o+="/"+n[a];(!o||s&&!o.endsWith("/.."))&&(o+="/"),e.path=o}function k(e,t){if(!e&&!t)return"";const n=w(e);if(t&&!n.scheme){const e=w(t);n.scheme=e.scheme,n.host||(n.user=e.user,n.host=e.host,n.port=e.port),C(n,e)}if(O(n),n.relativePath){const r=n.path.slice(1);if(!r)return".";const i=(t||e).startsWith(".");return!i||r.startsWith(".")?r:"./"+r}return n.scheme||n.host?`${n.scheme}//${n.user}${n.host}${n.port}${n.path}`:n.path}function D(e,t){return t&&!t.endsWith("/")&&(t+="/"),k(e,t)}function I(e){if(!e)return"";const t=e.lastIndexOf("/");return e.slice(0,t+1)}const N=0,M=1,R=2,L=3,F=4;function B(e,t){const n=j(e,0);if(n===e.length)return e;t||(e=e.slice());for(let r=n;r<e.length;r=j(e,r+1))e[r]=V(e[r],t);return e}function j(e,t){for(let n=t;n<e.length;n++)if(!U(e[n]))return n;return e.length}function U(e){for(let t=1;t<e.length;t++)if(e[t][N]<e[t-1][N])return!1;return!0}function V(e,t){return t||(e=e.slice()),e.sort(K)}function K(e,t){return e[N]-t[N]}let G=!1;function $(e,t,n,r){while(n<=r){const i=n+(r-n>>1),s=e[i][N]-t;if(0===s)return G=!0,i;s<0?n=i+1:r=i-1}return G=!1,n-1}function H(e,t,n){for(let r=n+1;r<e.length;r++,n++)if(e[r][N]!==t)break;return n}function q(e,t,n){for(let r=n-1;r>=0;r--,n--)if(e[r][N]!==t)break;return n}function z(){return{lastKey:-1,lastNeedle:-1,lastIndex:-1}}function W(e,t,n,r){const{lastKey:i,lastNeedle:s,lastIndex:o}=n;let a=0,l=e.length-1;if(r===i){if(t===s)return G=-1!==o&&e[o][N]===t,o;t>=s?a=-1===o?0:o:l=o}return n.lastKey=r,n.lastNeedle=t,n.lastIndex=$(e,t,a,l)}const X=function(e,t){const n="string"===typeof e?JSON.parse(e):e;if(!("sections"in n))return new ce(n,t);const r=[],i=[],s=[],o=[],{sections:a}=n;let l=0;for(;l<a.length-1;l++){const e=a[l+1].offset;Y(a[l],t,r,i,s,o,e.line,e.column)}a.length>0&&Y(a[l],t,r,i,s,o,1/0,1/0);const c={version:3,file:n.file,names:o,sources:i,sourcesContent:s,mappings:r};return oe(c)};function Y(e,t,n,r,i,s,o,a){const l=X(e.map,t),{line:c,column:u}=e.offset,p=r.length,h=s.length,d=ie(l),{resolvedSources:f}=l;J(r,f),J(i,l.sourcesContent||Q(f.length)),J(s,l.names);for(let g=n.length;g<=c;g++)n.push([]);const m=o-c,y=Math.min(d.length,m+1);for(let g=0;g<y;g++){const e=d[g],t=0===g?n[c]:n[c+g]=[],r=0===g?u:0;for(let n=0;n<e.length;n++){const i=e[n],s=r+i[N];if(g===m&&s>=a)break;if(1===i.length){t.push([s]);continue}const o=p+i[M],l=i[R],c=i[L];4!==i.length?t.push([s,o,l,c,h+i[F]]):t.push([s,o,l,c])}}}function J(e,t){for(let n=0;n<t.length;n++)e.push(t[n])}function Q(e){const t=[];for(let n=0;n<e;n++)t[n]=null;return t}const Z=Object.freeze({source:null,line:null,column:null,name:null});Object.freeze({line:null,column:null});const ee="`line` must be greater than 0 (lines start at line 1)",te="`column` must be greater than or equal to 0 (columns start at column 0)",ne=-1,re=1;let ie,se,oe,ae,le;class ce{constructor(e,t){this._decodedMemo=z(),this._bySources=void 0,this._bySourceMemos=void 0;const n="string"===typeof e;if(!n&&e.constructor===ce)return e;const r=n?JSON.parse(e):e,{version:i,file:s,names:o,sourceRoot:a,sources:l,sourcesContent:c}=r;if(this.version=i,this.file=s,this.names=o,this.sourceRoot=a,this.sources=l,this.sourcesContent=c,a||t){const e=D(a||"",I(t));this.resolvedSources=l.map((t=>D(t||"",e)))}else this.resolvedSources=l.map((e=>e||""));const{mappings:u}=r;"string"===typeof u?(this._encoded=u,this._decoded=void 0):(this._encoded=void 0,this._decoded=B(u,n))}}function ue(e,t,n,r,i){let s=W(e,r,t,n);return G?s=(i===ne?H:q)(e,r,s):i===ne&&s++,-1===s||s===e.length?null:e[s]}(()=>{ie=e=>e._decoded||(e._decoded=l(e._encoded)),se=(e,{line:t,column:n,bias:r})=>{if(t--,t<0)throw new Error(ee);if(n<0)throw new Error(te);const i=ie(e);if(t>=i.length)return Z;const s=ue(i[t],e._decodedMemo,t,n,r||re);if(null==s)return Z;if(1==s.length)return Z;const{names:o,resolvedSources:a}=e;return{source:a[s[M]],line:s[R]+1,column:s[L],name:5===s.length?o[s[F]]:null}},oe=(e,t)=>{const n=Object.assign({},e);n.mappings=[];const r=new ce(n,t);return r._decoded=e.mappings,r}})();class pe{constructor(){this._indexes={__proto__:null},this.array=[]}}(()=>{ae=(e,t)=>e._indexes[t],le=(e,t)=>{const n=ae(e,t);if(void 0!==n)return n;const{array:r,_indexes:i}=e;return i[t]=r.push(t)-1}})();const he=0,de=1,fe=2,me=3,ye=4,ge=-1;let be,Ee,ve,Se,Te;class xe{constructor({file:e,sourceRoot:t}={}){this._names=new pe,this._sources=new pe,this._sourcesContent=[],this._mappings=[],this.file=e,this.sourceRoot=t}}function _e(e,t){for(let n=e.length;n<=t;n++)e[n]=[];return e[t]}function Ae(e,t){let n=e.length;for(let r=n-1;r>=0;n=r--){const n=e[r];if(t>=n[he])break}return n}function we(e,t,n){for(let r=e.length;r>t;r--)e[r]=e[r-1];e[t]=n}function Pe(e){const{length:t}=e;let n=t;for(let r=n-1;r>=0;n=r,r--)if(e[r].length>0)break;n<t&&(e.length=n)}function Ce(e,t){if(0===t)return!0;const n=e[t-1];return 1===n.length}function Oe(e,t,n,r,i,s){if(0===t)return!1;const o=e[t-1];return 1!==o.length&&(n===o[de]&&r===o[fe]&&i===o[me]&&s===(5===o.length?o[ye]:ge))}function ke(e,t,n){const{generated:r,source:i,original:s,name:o}=n;if(!i)return Te(e,t,r.line-1,r.column,null,null,null,null);const a=i;return Te(e,t,r.line-1,r.column,a,s.line-1,s.column,o)}(()=>{be=(e,t)=>ke(!0,e,t),Ee=(e,t,n)=>{const{_sources:r,_sourcesContent:i}=e;i[le(r,t)]=n},ve=e=>{const{file:t,sourceRoot:n,_mappings:r,_sources:i,_sourcesContent:s,_names:o}=e;return Pe(r),{version:3,file:t||void 0,names:o.array,sourceRoot:n||void 0,sources:i.array,sourcesContent:s,mappings:r}},Se=e=>{const t=ve(e);return Object.assign(Object.assign({},t),{mappings:d(t.mappings)})},Te=(e,t,n,r,i,s,o,a)=>{const{_mappings:l,_sources:c,_sourcesContent:u,_names:p}=t,h=_e(l,n),d=Ae(h,r);if(!i){if(e&&Ce(h,d))return;return we(h,d,[r])}const f=le(c,i),m=a?le(p,a):ge;if(f===u.length&&(u[f]=null),!e||!Oe(h,d,f,s,o,m))return we(h,d,a?[r,f,s,o,m]:[r,f,s,o])}})();class De{constructor(e,t){const n=this._map=new X(e,t);this.file=n.file,this.names=n.names,this.sourceRoot=n.sourceRoot,this.sources=n.resolvedSources,this.sourcesContent=n.sourcesContent}originalPositionFor(e){return se(this._map,e)}destroy(){}}class Ie{constructor(e){this._map=new xe(e)}addMapping(e){be(this._map,e)}setSourceContent(e,t){Ee(this._map,e,t)}toJSON(){return Se(this._map)}toDecodedMap(){return ve(this._map)}}e.SourceMapConsumer=De,e.SourceMapGenerator=Ie,Object.defineProperty(e,"__esModule",{value:!0})}))},75547:function(e,t,n){var r=n(13374)["lW"];n(48675),n(3462),n(37380),n(1118),function(e,n){n(t)}(0,(function(e){"use strict";const t=",".charCodeAt(0),n=";".charCodeAt(0),i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=new Uint8Array(64),o=new Uint8Array(128);for(let r=0;r<i.length;r++){const e=i.charCodeAt(r);s[r]=e,o[e]=r}const a="undefined"!==typeof TextDecoder?new TextDecoder:"undefined"!==typeof r?{decode(e){const t=r.from(e.buffer,e.byteOffset,e.byteLength);return t.toString()}}:{decode(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}};function l(e){const t=new Int32Array(5),n=[];let r=0;do{const i=c(e,r),s=[];let o=!0,a=0;t[0]=0;for(let n=r;n<i;n++){let r;n=u(e,n,t,0);const l=t[0];l<a&&(o=!1),a=l,p(e,n,i)?(n=u(e,n,t,1),n=u(e,n,t,2),n=u(e,n,t,3),p(e,n,i)?(n=u(e,n,t,4),r=[l,t[1],t[2],t[3],t[4]]):r=[l,t[1],t[2],t[3]]):r=[l],s.push(r)}o||h(s),n.push(s),r=i+1}while(r<=e.length);return n}function c(e,t){const n=e.indexOf(";",t);return-1===n?e.length:n}function u(e,t,n,r){let i=0,s=0,a=0;do{const n=e.charCodeAt(t++);a=o[n],i|=(31&a)<<s,s+=5}while(32&a);const l=1&i;return i>>>=1,l&&(i=-2147483648|-i),n[r]+=i,t}function p(e,n,r){return!(n>=r)&&e.charCodeAt(n)!==t}function h(e){e.sort(d)}function d(e,t){return e[0]-t[0]}function f(e){const r=new Int32Array(5),i=16384,s=i-36,o=new Uint8Array(i),l=o.subarray(0,s);let c=0,u="";for(let p=0;p<e.length;p++){const h=e[p];if(p>0&&(c===i&&(u+=a.decode(o),c=0),o[c++]=n),0!==h.length){r[0]=0;for(let e=0;e<h.length;e++){const n=h[e];c>s&&(u+=a.decode(l),o.copyWithin(0,s,c),c-=s),e>0&&(o[c++]=t),c=m(o,c,r,n,0),1!==n.length&&(c=m(o,c,r,n,1),c=m(o,c,r,n,2),c=m(o,c,r,n,3),4!==n.length&&(c=m(o,c,r,n,4)))}}}return u+a.decode(o.subarray(0,c))}function m(e,t,n,r,i){const o=r[i];let a=o-n[i];n[i]=o,a=a<0?-a<<1|1:a<<1;do{let n=31&a;a>>>=5,a>0&&(n|=32),e[t++]=s[n]}while(a>0);return t}e.decode=l,e.encode=f,Object.defineProperty(e,"__esModule",{value:!0})}))},69864:function(e,t,n){n(21703),function(e,r){r(t,n(75547),n(78922))}(0,(function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=r(n);function s(e,t){return t&&!t.endsWith("/")&&(t+="/"),i["default"](e,t)}function o(e){if(!e)return"";const t=e.lastIndexOf("/");return e.slice(0,t+1)}const a=0,l=1,c=2,u=3,p=4,h=1,d=2;function f(e,t){const n=m(e,0);if(n===e.length)return e;t||(e=e.slice());for(let r=n;r<e.length;r=m(e,r+1))e[r]=g(e[r],t);return e}function m(e,t){for(let n=t;n<e.length;n++)if(!y(e[n]))return n;return e.length}function y(e){for(let t=1;t<e.length;t++)if(e[t][a]<e[t-1][a])return!1;return!0}function g(e,t){return t||(e=e.slice()),e.sort(b)}function b(e,t){return e[a]-t[a]}let E=!1;function v(e,t,n,r){while(n<=r){const i=n+(r-n>>1),s=e[i][a]-t;if(0===s)return E=!0,i;s<0?n=i+1:r=i-1}return E=!1,n-1}function S(e,t,n){for(let r=n+1;r<e.length;n=r++)if(e[r][a]!==t)break;return n}function T(e,t,n){for(let r=n-1;r>=0;n=r--)if(e[r][a]!==t)break;return n}function x(){return{lastKey:-1,lastNeedle:-1,lastIndex:-1}}function _(e,t,n,r){const{lastKey:i,lastNeedle:s,lastIndex:o}=n;let l=0,c=e.length-1;if(r===i){if(t===s)return E=-1!==o&&e[o][a]===t,o;t>=s?l=-1===o?0:o:c=o}return n.lastKey=r,n.lastNeedle=t,n.lastIndex=v(e,t,l,c)}function A(e,t){const n=t.map(P);for(let r=0;r<e.length;r++){const i=e[r];for(let e=0;e<i.length;e++){const s=i[e];if(1===s.length)continue;const o=s[l],p=s[c],h=s[u],d=n[o],f=d[p]||(d[p]=[]),m=t[o],y=S(f,h,_(f,h,m,p));w(f,m.lastIndex=y+1,[h,r,s[a]])}}return n}function w(e,t,n){for(let r=e.length;r>t;r--)e[r]=e[r-1];e[t]=n}function P(){return{__proto__:null}}const C=function(t,n){const r="string"===typeof t?JSON.parse(t):t;if(!("sections"in r))return new F(r,n);const i=[],s=[],o=[],a=[];O(r,n,i,s,o,a,0,0,1/0,1/0);const l={version:3,file:r.file,names:a,sources:s,sourcesContent:o,mappings:i};return e.presortedDecodedMap(l)};function O(e,t,n,r,i,s,o,a,l,c){const{sections:u}=e;for(let p=0;p<u.length;p++){const{map:e,offset:h}=u[p];let d=l,f=c;if(p+1<u.length){const e=u[p+1].offset;d=Math.min(l,o+e.line),d===l?f=Math.min(c,a+e.column):d<l&&(f=a+e.column)}k(e,t,n,r,i,s,o+h.line,a+h.column,d,f)}}function k(t,n,r,i,s,o,h,d,f,m){if("sections"in t)return O(...arguments);const y=new F(t,n),g=i.length,b=o.length,E=e.decodedMappings(y),{resolvedSources:v,sourcesContent:S}=y;if(D(i,v),D(o,y.names),S)D(s,S);else for(let e=0;e<v.length;e++)s.push(null);for(let e=0;e<E.length;e++){const t=h+e;if(t>f)return;const n=I(r,t),i=0===e?d:0,s=E[e];for(let e=0;e<s.length;e++){const r=s[e],o=i+r[a];if(t===f&&o>=m)return;if(1===r.length){n.push([o]);continue}const h=g+r[l],d=r[c],y=r[u];n.push(4===r.length?[o,h,d,y]:[o,h,d,y,b+r[p]])}}}function D(e,t){for(let n=0;n<t.length;n++)e.push(t[n])}function I(e,t){for(let n=e.length;n<=t;n++)e[n]=[];return e[t]}const N="`line` must be greater than 0 (lines start at line 1)",M="`column` must be greater than or equal to 0 (columns start at column 0)",R=-1,L=1;e.encodedMappings=void 0,e.decodedMappings=void 0,e.traceSegment=void 0,e.originalPositionFor=void 0,e.generatedPositionFor=void 0,e.eachMapping=void 0,e.sourceContentFor=void 0,e.presortedDecodedMap=void 0,e.decodedMap=void 0,e.encodedMap=void 0;class F{constructor(e,t){this._decodedMemo=x(),this._bySources=void 0,this._bySourceMemos=void 0;const n="string"===typeof e;if(!n&&e._decodedMemo)return e;const r=n?JSON.parse(e):e,{version:i,file:a,names:l,sourceRoot:c,sources:u,sourcesContent:p}=r;this.version=i,this.file=a,this.names=l,this.sourceRoot=c,this.sources=u,this.sourcesContent=p;const h=s(c||"",o(t));this.resolvedSources=u.map((e=>s(e||"",h)));const{mappings:d}=r;"string"===typeof d?(this._encoded=d,this._decoded=void 0):(this._encoded=void 0,this._decoded=f(d,n))}}function B(e,t,n,r){return{source:e,line:t,column:n,name:r}}function j(e,t){return{line:e,column:t}}function U(e,t,n,r,i){let s=_(e,r,t,n);return E?s=(i===R?S:T)(e,r,s):i===R&&s++,-1===s||s===e.length?null:e[s]}(()=>{e.encodedMappings=e=>{var n;return null!==(n=e._encoded)&&void 0!==n?n:e._encoded=t.encode(e._decoded)},e.decodedMappings=e=>e._decoded||(e._decoded=t.decode(e._encoded)),e.traceSegment=(t,n,r)=>{const i=e.decodedMappings(t);return n>=i.length?null:U(i[n],t._decodedMemo,n,r,L)},e.originalPositionFor=(t,{line:n,column:r,bias:i})=>{if(n--,n<0)throw new Error(N);if(r<0)throw new Error(M);const s=e.decodedMappings(t);if(n>=s.length)return B(null,null,null,null);const o=U(s[n],t._decodedMemo,n,r,i||L);if(null==o)return B(null,null,null,null);if(1==o.length)return B(null,null,null,null);const{names:a,resolvedSources:h}=t;return B(h[o[l]],o[c]+1,o[u],5===o.length?a[o[p]]:null)},e.generatedPositionFor=(t,{source:n,line:r,column:i,bias:s})=>{if(r--,r<0)throw new Error(N);if(i<0)throw new Error(M);const{sources:o,resolvedSources:a}=t;let l=o.indexOf(n);if(-1===l&&(l=a.indexOf(n)),-1===l)return j(null,null);const c=t._bySources||(t._bySources=A(e.decodedMappings(t),t._bySourceMemos=o.map(x))),u=t._bySourceMemos,p=c[l][r];if(null==p)return j(null,null);const f=U(p,u[l],r,i,s||L);return null==f?j(null,null):j(f[h]+1,f[d])},e.eachMapping=(t,n)=>{const r=e.decodedMappings(t),{names:i,resolvedSources:s}=t;for(let e=0;e<r.length;e++){const t=r[e];for(let r=0;r<t.length;r++){const o=t[r],a=e+1,l=o[0];let c=null,u=null,p=null,h=null;1!==o.length&&(c=s[o[1]],u=o[2]+1,p=o[3]),5===o.length&&(h=i[o[4]]),n({generatedLine:a,generatedColumn:l,source:c,originalLine:u,originalColumn:p,name:h})}}},e.sourceContentFor=(e,t)=>{const{sources:n,resolvedSources:r,sourcesContent:i}=e;if(null==i)return null;let s=n.indexOf(t);return-1===s&&(s=r.indexOf(t)),-1===s?null:i[s]},e.presortedDecodedMap=(e,t)=>{const n=Object.assign({},e);n.mappings=[];const r=new F(n,t);return r._decoded=e.mappings,r},e.decodedMap=t=>({version:3,file:t.file,names:t.names,sourceRoot:t.sourceRoot,sources:t.sources,sourcesContent:t.sourcesContent,mappings:e.decodedMappings(t)}),e.encodedMap=t=>({version:3,file:t.file,names:t.names,sourceRoot:t.sourceRoot,sources:t.sources,sourcesContent:t.sourcesContent,mappings:e.encodedMappings(t)})})(),e.AnyMap=C,e.GREATEST_LOWER_BOUND=L,e.LEAST_UPPER_BOUND=R,e.TraceMap=F,Object.defineProperty(e,"__esModule",{value:!0})}))},57287:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(n(51693)),l=o(n(72332)),c=o(n(32143)),u=n(75440),p=o(n(4918)),h=o(n(82677)),d=e=>{let t=!1;return e.traverse({JSXElement(e){t=!0,e.stop()},JSXFragment(e){t=!0,e.stop()}}),t},f=/\*?\s*@jsx\s+([^\s]+)/;t["default"]=({types:e})=>({name:"babel-plugin-jsx",inherits:c.default,visitor:Object.assign(Object.assign(Object.assign({},p.default),h.default),{Program:{enter(t,n){if(d(t)){const r=["createVNode","Fragment","resolveComponent","withDirectives","vShow","vModelSelect","vModelText","vModelCheckbox","vModelRadio","vModelText","vModelDynamic","resolveDirective","mergeProps","createTextVNode","isVNode"];if((0,u.isModule)(t)){const i={};r.forEach((r=>{n.set(r,(()=>{if(i[r])return e.cloneNode(i[r]);const n=(0,u.addNamed)(t,r,"vue",{ensureLiveReference:!0});return i[r]=n,n}))}));const{enableObjectSlots:s=!0}=n.opts;s&&n.set("@vue/babel-plugin-jsx/runtimeIsSlot",(()=>{if(i.runtimeIsSlot)return i.runtimeIsSlot;const{name:e}=n.get("isVNode")(),r=t.scope.generateUidIdentifier("isSlot"),s=l.default.ast`
                  function ${r.name}(s) {
                    return typeof s === 'function' || (Object.prototype.toString.call(s) === '[object Object]' && !${e}(s));
                  }
                `,o=t.get("body").filter((e=>e.isImportDeclaration())).pop();return o&&o.insertAfter(s),i.runtimeIsSlot=r,r}))}else{let e;r.forEach((r=>{n.set(r,(()=>(e||(e=(0,u.addNamespace)(t,"vue",{ensureLiveReference:!0})),a.memberExpression(e,a.identifier(r)))))}));const i={},{enableObjectSlots:s=!0}=n.opts;s&&n.set("@vue/babel-plugin-jsx/runtimeIsSlot",(()=>{if(i.runtimeIsSlot)return i.runtimeIsSlot;const r=t.scope.generateUidIdentifier("isSlot"),{object:s}=n.get("isVNode")(),o=l.default.ast`
                  function ${r.name}(s) {
                    return typeof s === 'function' || (Object.prototype.toString.call(s) === '[object Object]' && !${s.name}.isVNode(s));
                  }
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(e);function C(e){const t=E("babelHelpers"),n=[],r=b(null,[E("global")],p(n)),i=T([g(h(r,[f(u("===",_("typeof",E("global")),x("undefined")),E("self"),E("global"))]))]);return n.push(A("var",[w(t,c("=",v(E("global"),t),S([])))])),I(n,t,e),i}function O(e){const t=[],n=I(t,null,e);return t.unshift(m(null,Object.keys(n).map((e=>y(d(n[e]),E(e)))))),T(t,[],"module")}function k(e){const t=E("babelHelpers"),n=[];return n.push(A("var",[w(t,E("global"))])),I(n,t,e),T([P({FACTORY_PARAMETERS:E("global"),BROWSER_ARGUMENTS:c("=",v(E("root"),t),S([])),COMMON_ARGUMENTS:E("exports"),AMD_ARGUMENTS:l([x("exports")]),FACTORY_BODY:n,UMD_ROOT:E("this")})])}function D(e){const t=E("babelHelpers"),n=[];n.push(A("var",[w(t,S([]))]));const r=T(n);return I(n,t,e),n.push(g(t)),r}function I(e,t,n){const i=e=>t?v(t,E(e)):E(`_${e}`),s={};return r().list.forEach((function(t){if(n&&n.indexOf(t)<0)return;const o=s[t]=i(t);r().ensure(t,a.default);const{nodes:l}=r().get(t,i,o);e.push(...l)})),s}function N(e,t="global"){let n;const r={global:C,module:O,umd:k,var:D}[t];if(!r)throw new Error(`Unsupported output type ${t}`);return n=r(e),(0,i().default)(n).code}},52289:function(e,t,n){"use strict";function r(){const e=n(90860);return r=function(){return e},e}n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.transformFromAstSync=t.transformFromAstAsync=t.transformFromAst=void 0;var i=n(55334),s=n(42317);const o=r()((function*(e,t,n){const r=yield*(0,i.default)(n);if(null===r)return null;if(!e)throw new Error("No AST given");return yield*(0,s.run)(r,t,e)})),a=function(e,t,n,r){let i,s;if("function"===typeof n?(s=n,i=void 0):(i=n,s=r),void 0===s)return o.sync(e,t,i);o.errback(e,t,i,s)};t.transformFromAst=a;const l=o.sync;t.transformFromAstSync=l;const c=o.async;t.transformFromAstAsync=c},96887:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.transformFile=void 0,t.transformFileAsync=s,t.transformFileSync=i;const r=function(e,t,n){"function"===typeof t&&(n=t),n(new Error("Transforming files is not supported in browsers"),null)};function i(){throw new Error("Transforming files is not supported in browsers")}function s(){return Promise.reject(new Error("Transforming files is not supported in browsers"))}t.transformFile=r},81515:function(e,t,n){"use strict";function r(){const e=n(90860);return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformSync=t.transformAsync=t.transform=void 0;var i=n(55334),s=n(42317);const o=r()((function*(e,t){const n=yield*(0,i.default)(t);return null===n?null:yield*(0,s.run)(n,e)})),a=function(e,t,n){let r,i;if("function"===typeof t?(i=t,r=void 0):(r=t,i=n),void 0===i)return o.sync(e,r);o.errback(e,r,i)};t.transform=a;const l=o.sync;t.transformSync=l;const c=o.async;t.transformAsync=c},90842:function(e,t,n){"use strict";function r(){const e=n(18230);return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var i=n(93650);let s;function o(){return s||(s=new i.default(Object.assign({},c,{visitor:r().default.explode(c.visitor)}),{})),s}function a(e){const t=null==e?void 0:e._blockHoist;return null==t?1:!0===t?2:t}function l(e){const t=Object.create(null);for(let i=0;i<e.length;i++){const n=e[i],r=a(n),s=t[r]||(t[r]=[]);s.push(n)}const n=Object.keys(t).map((e=>+e)).sort(((e,t)=>t-e));let r=0;for(const i of n){const n=t[i];for(const t of n)e[r++]=t}return e}const c={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){const{body:t}=e;let n=Math.pow(2,30)-1,r=!1;for(let i=0;i<t.length;i++){const e=t[i],s=a(e);if(s>n){r=!0;break}n=s}r&&(e.body=l(t.slice()))}}}}},72137:function(e,t,n){"use strict";function r(){const e=n(48058);return r=function(){return e},e}function i(){const e=n(18230);return i=function(){return e},e}function s(){const e=n(19402);return s=function(){return e},e}function o(){const e=n(51693);return o=function(){return e},e}function a(){const e=n(64220);return a=function(){return e},e}function l(){const e=n(95218);return l=function(){return e},e}n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;const{cloneNode:c,interpreterDirective:u}=o(),p={enter(e,t){const n=e.node.loc;n&&(t.loc=n,e.stop())}};class h{constructor(e,{code:t,ast:n,inputMap:r}){this._map=new Map,this.opts=void 0,this.declarations={},this.path=void 0,this.ast=void 0,this.scope=void 0,this.metadata={},this.code="",this.inputMap=void 0,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=n,this.inputMap=r,this.path=i().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(u(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,a().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let n;try{n=r().minVersion(e)}catch(i){if("BABEL_HELPER_UNKNOWN"!==i.code)throw i;return!1}return"string"!==typeof t||(l().valid(t)&&(t=`^${t}`),!l().intersects(`<${n}`,t)&&!l().intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return c(t);const n=this.get("helperGenerator");if(n){const t=n(e);if(t)return t}r().ensure(e,h);const i=this.declarations[e]=this.scope.generateUidIdentifier(e),s={};for(const l of r().getDependencies(e))s[l]=this.addHelper(l);const{nodes:o,globals:a}=r().get(e,(e=>s[e]),i,Object.keys(this.scope.getAllBindings()));return a.forEach((e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)})),o.forEach((e=>{e._compact=!0})),this.path.unshiftContainer("body",o),this.path.get("body").forEach((e=>{-1!==o.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)})),i}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,n=SyntaxError){let r=e&&(e.loc||e._loc);if(!r&&e){const n={loc:null};(0,i().default)(e,p,this.scope,n),r=n.loc;let s="This is an error on an internal node. Probably an internal error.";r&&(s+=" Location has been estimated."),t+=` (${s})`}if(r){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,s().codeFrameColumns)(this.code,{start:{line:r.start.line,column:r.start.column+1},end:r.end&&r.start.line===r.end.line?{line:r.end.line,column:r.end.column+1}:void 0},{highlightCode:e})}return new n(t)}}t["default"]=h},65005:function(e,t,n){"use strict";function r(){const e=n(63447);return r=function(){return e},e}function i(){const e=n(20091);return i=function(){return e},e}n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var s=n(17852);function o(e,t){const{opts:n,ast:o,code:a,inputMap:l}=t,{generatorOpts:c}=n,u=[];for(const r of e)for(const e of r){const{generatorOverride:t}=e;if(t){const e=t(o,c,a,i().default);void 0!==e&&u.push(e)}}let p;if(0===u.length)p=(0,i().default)(o,c,a);else{if(1!==u.length)throw new Error("More than one plugin attempted to override codegen.");if(p=u[0],"function"===typeof p.then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:h,decodedMap:d=p.map}=p;return d&&(d=l?(0,s.default)(l.toObject(),d,c.sourceFileName):p.map),"inline"!==n.sourceMaps&&"both"!==n.sourceMaps||(h+="\n"+r().fromObject(d).toComment()),"inline"===n.sourceMaps&&(d=null),{outputCode:h,outputMap:d}}},17852:function(e,t,n){"use strict";function r(){const e=n(68089);return r=function(){return e},e}function i(e,t,n){const i=n.replace(/\\/g,"/");let o=!1;const a=r()(s(t),((t,n)=>t!==i||o?null:(o=!0,n.source="",s(e))));return"string"===typeof e.sourceRoot&&(a.sourceRoot=e.sourceRoot),Object.assign({},a)}function s(e){return Object.assign({},e,{sourceRoot:null})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i},42317:function(e,t,n){"use strict";function r(){const e=n(18230);return r=function(){return e},e}n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.run=u;var i=n(26827),s=n(90842),o=n(25007),a=n(98635),l=n(65005),c=n(72188);function*u(e,t,n){const r=yield*(0,a.default)(e.passes,(0,o.default)(e),t,n),i=r.opts;try{yield*p(r,e.passes)}catch(f){var s;throw f.message=`${null!=(s=i.filename)?s:"unknown"}: ${f.message}`,f.code||(f.code="BABEL_TRANSFORM_ERROR"),f}let u,h;try{!1!==i.code&&({outputCode:u,outputMap:h}=(0,l.default)(e.passes,r))}catch(f){var d;throw f.message=`${null!=(d=i.filename)?d:"unknown"}: ${f.message}`,f.code||(f.code="BABEL_GENERATE_ERROR"),f}return{metadata:r.metadata,options:i,ast:!0===i.ast?r.ast:null,code:void 0===u?null:u,map:void 0===h?null:h,sourceType:r.ast.program.sourceType,externalDependencies:(0,c.flattenToSet)(e.externalDependencies)}}function*p(e,t){for(const n of t){const t=[],o=[],a=[];for(const r of n.concat([(0,s.default)()])){const n=new i.default(e,r.key,r.options);t.push([r,n]),o.push(n),a.push(r.visitor)}for(const[n,r]of t){const t=n.pre;if(t){const n=t.call(r,e);if(yield*[],h(n))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const l=r().default.visitors.merge(a,o,e.opts.wrapPluginVisitorMethod);(0,r().default)(e.ast,l,e.scope);for(const[n,r]of t){const t=n.post;if(t){const n=t.call(r,e);if(yield*[],h(n))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}function h(e){return!!e&&("object"===typeof e||"function"===typeof e)&&!!e.then&&"function"===typeof e.then}},98635:function(e,t,n){"use strict";function r(){const e=n(33770);return r=function(){return e},e}function i(){const e=n(86554);return i=function(){return e},e}function s(){const e=n(15652);return s=function(){return e},e}function o(){const e=n(51693);return o=function(){return e},e}function a(){const e=n(63447);return a=function(){return e},e}n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=m;var l=n(72137),c=n(46210),u=n(43829);const{file:p,traverseFast:h}=o(),d=s()("babel:transform:file"),f=3e6;function*m(e,t,n,s){if(n=`${n||""}`,s){if("Program"===s.type)s=p(s,[],[]);else if("File"!==s.type)throw new Error("AST root must be a Program or File node");t.cloneInputAst&&(s=(0,u.default)(s))}else s=yield*(0,c.default)(e,t,n);let o=null;if(!1!==t.inputSourceMap){if("object"===typeof t.inputSourceMap&&(o=a().fromObject(t.inputSourceMap)),!o){const e=E(y,s);if(e)try{o=a().fromComment(e)}catch(h){d("discarding unknown inline input sourcemap",h)}}if(!o){const e=E(g,s);if("string"===typeof t.filename&&e)try{const n=g.exec(e),s=r().readFileSync(i().resolve(i().dirname(t.filename),n[1]));s.length>f?d("skip merging input map > 1 MB"):o=a().fromJSON(s)}catch(h){d("discarding unknown file input sourcemap",h)}else e&&d("discarding un-loadable file input sourcemap")}}return new l.default(t,{code:n,ast:s,inputMap:o})}const y=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,g=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function b(e,t,n){return t&&(t=t.filter((({value:t})=>!e.test(t)||(n=t,!1)))),[t,n]}function E(e,t){let n=null;return h(t,(t=>{[t.leadingComments,n]=b(e,t.leadingComments,n),[t.innerComments,n]=b(e,t.innerComments,n),[t.trailingComments,n]=b(e,t.trailingComments,n)})),n}},25007:function(e,t,n){"use strict";function r(){const e=n(86554);return r=function(){return e},e}function i(e){const{filename:t,cwd:n,filenameRelative:i=("string"===typeof t?r().relative(n,t):"unknown"),sourceType:s="module",inputSourceMap:o,sourceMaps:a=!!o,sourceRoot:l=e.options.moduleRoot,sourceFileName:c=r().basename(i),comments:u=!0,compact:p="auto"}=e.options,h=e.options,d=Object.assign({},h,{parserOpts:Object.assign({sourceType:".mjs"===r().extname(i)?"module":s,sourceFileName:t,plugins:[]},h.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:h.auxiliaryCommentBefore,auxiliaryCommentAfter:h.auxiliaryCommentAfter,retainLines:h.retainLines,comments:u,shouldPrintComment:h.shouldPrintComment,compact:p,minified:h.minified,sourceMaps:a,sourceRoot:l,sourceFileName:c},h.generatorOpts)});for(const r of e.passes)for(const e of r)e.manipulateOptions&&e.manipulateOptions(d,d.parserOpts);return d}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i},26827:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;class n{constructor(e,t,n){this._map=new Map,this.key=void 0,this.file=void 0,this.opts=void 0,this.cwd=void 0,this.filename=void 0,this.key=t,this.file=e,this.opts=n||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}buildCodeFrameError(e,t,n){return this.file.buildCodeFrameError(e,t,n)}}t["default"]=n,n.prototype.getModuleName=function(){return this.file.getModuleName()}},43829:function(e,t){"use strict";function n(e,t){if(null!==e){if(t.has(e))return t.get(e);let r;if(Array.isArray(e)){r=new Array(e.length);for(let i=0;i<e.length;i++)r[i]="object"!==typeof e[i]?e[i]:n(e[i],t)}else{r={};const i=Object.keys(e);for(let s=0;s<i.length;s++){const o=i[s];r[o]="object"!==typeof e[o]?e[o]:n(e[o],t)}}return t.set(e,r),r}return e}function r(e){return"object"!==typeof e?e:n(e,new Map)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},87396:function(e,t,n){"use strict";function r(){return{identifierName:void 0,line:void 0,column:void 0,filename:void 0}}n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;class i{constructor(e){this._map=null,this._buf="",this._str="",this._appendCount=0,this._last=0,this._queue=[],this._queueCursor=0,this._position={line:1,column:0},this._sourcePosition=r(),this._disallowedPop={identifierName:void 0,line:void 0,column:void 0,filename:void 0,objectReusable:!0},this._map=e,this._allocQueue()}_allocQueue(){const e=this._queue;for(let t=0;t<16;t++)e.push({char:0,repeat:1,line:void 0,column:void 0,identifierName:void 0,filename:""})}_pushQueue(e,t,n,r,i,s){const o=this._queueCursor;o===this._queue.length&&this._allocQueue();const a=this._queue[o];a.char=e,a.repeat=t,a.line=n,a.column=r,a.identifierName=i,a.filename=s,this._queueCursor++}_popQueue(){if(0===this._queueCursor)throw new Error("Cannot pop from empty queue");return this._queue[--this._queueCursor]}get(){this._flush();const e=this._map,t={code:(this._buf+this._str).trimRight(),decodedMap:null==e?void 0:e.getDecoded(),get map(){const n=e?e.get():null;return t.map=n,n},set map(e){Object.defineProperty(t,"map",{value:e,writable:!0})},get rawMappings(){const n=null==e?void 0:e.getRawMappings();return t.rawMappings=n,n},set rawMappings(e){Object.defineProperty(t,"rawMappings",{value:e,writable:!0})}};return t}append(e,t){this._flush(),this._append(e,this._sourcePosition,t)}appendChar(e){this._flush(),this._appendChar(e,1,this._sourcePosition)}queue(e){if(10===e)while(0!==this._queueCursor){const e=this._queue[this._queueCursor-1].char;if(32!==e&&9!==e)break;this._queueCursor--}const t=this._sourcePosition;this._pushQueue(e,1,t.line,t.column,t.identifierName,t.filename)}queueIndentation(e,t){this._pushQueue(e,t,void 0,void 0,void 0,void 0)}_flush(){const e=this._queueCursor,t=this._queue;for(let n=0;n<e;n++){const e=t[n];this._appendChar(e.char,e.repeat,e)}this._queueCursor=0}_appendChar(e,t,n){this._last=e,this._str+=t>1?String.fromCharCode(e).repeat(t):String.fromCharCode(e),10!==e?(this._mark(n.line,n.column,n.identifierName,n.filename),this._position.column+=t):(this._position.line++,this._position.column=0)}_append(e,t,n){const r=e.length;if(this._last=e.charCodeAt(r-1),++this._appendCount>4096?(this._str,this._buf+=this._str,this._str=e,this._appendCount=0):this._str+=e,!n&&!this._map)return void(this._position.column+=r);const{column:i,identifierName:s,filename:o}=t;let a=t.line,l=e.indexOf("\n"),c=0;0!==l&&this._mark(a,i,s,o);while(-1!==l)this._position.line++,this._position.column=0,c=l+1,c<e.length&&this._mark(++a,0,s,o),l=e.indexOf("\n",c);this._position.column+=e.length-c}_mark(e,t,n,r){var i;null==(i=this._map)||i.mark(this._position,e,t,n,r)}removeTrailingNewline(){const e=this._queueCursor;0!==e&&10===this._queue[e-1].char&&this._queueCursor--}removeLastSemicolon(){const e=this._queueCursor;0!==e&&59===this._queue[e-1].char&&this._queueCursor--}getLastChar(){const e=this._queueCursor;return 0!==e?this._queue[e-1].char:this._last}endsWithCharAndNewline(){const e=this._queue,t=this._queueCursor;if(0!==t){const n=e[t-1].char;if(10!==n)return;return t>1?e[t-2].char:this._last}}hasContent(){return 0!==this._queueCursor||!!this._last}exactSource(e,t){if(!this._map)return t();this.source("start",e),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t){t&&this._normalizePosition(e,t,this._sourcePosition)}withSource(e,t,n){if(!this._map)return n();const r=this._sourcePosition.line,i=this._sourcePosition.column,s=this._sourcePosition.filename,o=this._sourcePosition.identifierName;this.source(e,t),n(),(this._disallowedPop.objectReusable||this._disallowedPop.line!==r||this._disallowedPop.column!==i||this._disallowedPop.filename!==s)&&(this._sourcePosition.line=r,this._sourcePosition.column=i,this._sourcePosition.filename=s,this._sourcePosition.identifierName=o,this._disallowedPop.objectReusable=!0)}_disallowPop(e,t){if(!t)return;const n=this._disallowedPop;this._normalizePosition(e,t,n),n.objectReusable=!1}_normalizePosition(e,t,n){const r=t[e];n.identifierName="start"===e&&t.identifierName||void 0,r?(n.line=r.line,n.column=r.column,n.filename=t.filename):(n.line=null,n.column=null,n.filename=null)}getCurrentColumn(){const e=this._queue;let t=-1,n=0;for(let r=0;r<this._queueCursor;r++){const i=e[r];10===i.char&&(t=r,n+=i.repeat)}return-1===t?this._position.column+n:n-1-t}getCurrentLine(){let e=0;const t=this._queue;for(let n=0;n<this._queueCursor;n++)10===t[n].char&&e++;return this._position.line+e}}t["default"]=i},85341:function(e,t,n){"use strict";function r(e){e.program&&this.print(e.program.interpreter,e),this.print(e.program,e)}function i(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline(),this.printSequence(e.body,e)}function s(e){var t;this.tokenChar(123),this.printInnerComments(e);const n=null==(t=e.directives)?void 0:t.length;e.body.length||n?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),n&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith(10)||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.tokenChar(125))}function o(e){this.print(e.value,e),this.semicolon()}n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.BlockStatement=s,t.Directive=o,t.DirectiveLiteral=c,t.File=r,t.InterpreterDirective=u,t.Placeholder=p,t.Program=i;const a=/(?:^|[^\\])(?:\\\\)*'/,l=/(?:^|[^\\])(?:\\\\)*"/;function c(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&void 0!==t)return void this.token(t);const{value:n}=e;if(l.test(n)){if(a.test(n))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${n}'`)}else this.token(`"${n}"`)}function u(e){this.token(`#!${e.value}\n`,!0)}function p(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()}},99170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClassAccessorProperty=c,t.ClassBody=a,t.ClassExpression=t.ClassDeclaration=o,t.ClassMethod=p,t.ClassPrivateMethod=h,t.ClassPrivateProperty=u,t.ClassProperty=l,t.StaticBlock=f,t._classMethodHead=d;var r=n(51693);const{isExportDefaultDeclaration:i,isExportNamedDeclaration:s}=r;function o(e,t){this.format.decoratorsBeforeExport&&(i(t)||s(t))||this.printJoin(e.decorators,e),e.declare&&(this.word("declare"),this.space()),e.abstract&&(this.word("abstract"),this.space()),this.word("class"),this.printInnerComments(e),e.id&&(this.space(),this.print(e.id,e)),this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e)),e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e)),this.space(),this.print(e.body,e)}function a(e){this.tokenChar(123),this.printInnerComments(e),0===e.body.length?this.tokenChar(125):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith(10)||this.newline(),this.rightBrace())}function l(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e),e.computed?(this.tokenChar(91),this.print(e.key,e),this.tokenChar(93)):(this._variance(e),this.print(e.key,e)),e.optional&&this.tokenChar(63),e.definite&&this.tokenChar(33),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.tokenChar(61),this.space(),this.print(e.value,e)),this.semicolon()}function c(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e),this.word("accessor"),this.printInnerComments(e),this.space(),e.computed?(this.tokenChar(91),this.print(e.key,e),this.tokenChar(93)):(this._variance(e),this.print(e.key,e)),e.optional&&this.tokenChar(63),e.definite&&this.tokenChar(33),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.tokenChar(61),this.space(),this.print(e.value,e)),this.semicolon()}function u(e){this.printJoin(e.decorators,e),e.static&&(this.word("static"),this.space()),this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.tokenChar(61),this.space(),this.print(e.value,e)),this.semicolon()}function p(e){this._classMethodHead(e),this.space(),this.print(e.body,e)}function h(e){this._classMethodHead(e),this.space(),this.print(e.body,e)}function d(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e),this._methodHead(e)}function f(e){this.word("static"),this.space(),this.tokenChar(123),0===e.body.length?this.tokenChar(125):(this.newline(),this.printSequence(e.body,e,{indent:!0}),this.rightBrace())}},23402:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.LogicalExpression=t.BinaryExpression=t.AssignmentExpression=k,t.AssignmentPattern=O,t.AwaitExpression=A,t.BindExpression=D,t.CallExpression=x,t.ConditionalExpression=d,t.Decorator=v,t.DoExpression=u,t.EmptyStatement=P,t.ExpressionStatement=C,t.Import=_,t.MemberExpression=I,t.MetaProperty=N,t.ModuleExpression=L,t.NewExpression=f,t.OptionalCallExpression=T,t.OptionalMemberExpression=S,t.ParenthesizedExpression=p,t.PrivateName=M,t.SequenceExpression=m,t.Super=g,t.ThisExpression=y,t.UnaryExpression=c,t.UpdateExpression=h,t.V8IntrinsicIdentifier=R,t.YieldExpression=w;var r=n(51693),i=n(52362);const{isCallExpression:s,isLiteral:o,isMemberExpression:a,isNewExpression:l}=r;function c(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator),this.print(e.argument,e)}function u(e){e.async&&(this.word("async"),this.space()),this.word("do"),this.space(),this.print(e.body,e)}function p(e){this.tokenChar(40),this.print(e.expression,e),this.tokenChar(41)}function h(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.printTerminatorless(e.argument,e,!0),this.token(e.operator))}function d(e){this.print(e.test,e),this.space(),this.tokenChar(63),this.space(),this.print(e.consequent,e),this.space(),this.tokenChar(58),this.space(),this.print(e.alternate,e)}function f(e,t){this.word("new"),this.space(),this.print(e.callee,e),(!this.format.minified||0!==e.arguments.length||e.optional||s(t,{callee:e})||a(t)||l(t))&&(this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?."),this.tokenChar(40),this.printList(e.arguments,e),this.tokenChar(41))}function m(e){this.printList(e.expressions,e)}function y(){this.word("this")}function g(){this.word("super")}function b(e){switch(e.type){case"Identifier":return!0;case"MemberExpression":return!e.computed&&"Identifier"===e.property.type&&b(e.object);default:return!1}}function E(e){return"CallExpression"===e.type&&(e=e.callee),"ParenthesizedExpression"!==e.type&&!b(e)}function v(e){this.tokenChar(64);const{expression:t}=e;E(t)?(this.tokenChar(40),this.print(t,e),this.tokenChar(41)):this.print(t,e),this.newline()}function S(e){if(this.print(e.object,e),!e.computed&&a(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;o(e.property)&&"number"===typeof e.property.value&&(t=!0),e.optional&&this.token("?."),t?(this.tokenChar(91),this.print(e.property,e),this.tokenChar(93)):(e.optional||this.tokenChar(46),this.print(e.property,e))}function T(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?."),this.tokenChar(40),this.printList(e.arguments,e),this.tokenChar(41)}function x(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.tokenChar(40),this.printList(e.arguments,e),this.tokenChar(41)}function _(){this.word("import")}function A(e){this.word("await"),e.argument&&(this.space(),this.printTerminatorless(e.argument,e,!1))}function w(e){this.word("yield"),e.delegate&&this.tokenChar(42),e.argument&&(this.space(),this.printTerminatorless(e.argument,e,!1))}function P(){this.semicolon(!0)}function C(e){this.print(e.expression,e),this.semicolon()}function O(e){this.print(e.left,e),e.left.optional&&this.tokenChar(63),this.print(e.left.typeAnnotation,e),this.space(),this.tokenChar(61),this.space(),this.print(e.right,e)}function k(e,t){const n=this.inForStatementInitCounter&&"in"===e.operator&&!i.needsParens(e,t);n&&this.tokenChar(40),this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator),this.space(),this.print(e.right,e),n&&this.tokenChar(41)}function D(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)}function I(e){if(this.print(e.object,e),!e.computed&&a(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;o(e.property)&&"number"===typeof e.property.value&&(t=!0),t?(this.tokenChar(91),this.print(e.property,e),this.tokenChar(93)):(this.tokenChar(46),this.print(e.property,e))}function N(e){this.print(e.meta,e),this.tokenChar(46),this.print(e.property,e)}function M(e){this.tokenChar(35),this.print(e.id,e)}function R(e){this.tokenChar(37),this.word(e.name)}function L(e){this.word("module"),this.space(),this.tokenChar(123),0===e.body.body.length?this.tokenChar(125):(this.newline(),this.printSequence(e.body.body,e,{indent:!0}),this.rightBrace())}},12859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnyTypeAnnotation=l,t.ArrayTypeAnnotation=c,t.BooleanLiteralTypeAnnotation=p,t.BooleanTypeAnnotation=u,t.DeclareClass=d,t.DeclareExportAllDeclaration=_,t.DeclareExportDeclaration=x,t.DeclareFunction=f,t.DeclareInterface=g,t.DeclareModule=b,t.DeclareModuleExports=E,t.DeclareOpaqueType=S,t.DeclareTypeAlias=v,t.DeclareVariable=T,t.DeclaredPredicate=y,t.EmptyTypeAnnotation=X,t.EnumBooleanBody=C,t.EnumBooleanMember=M,t.EnumDeclaration=A,t.EnumDefaultedMember=I,t.EnumNumberBody=O,t.EnumNumberMember=R,t.EnumStringBody=k,t.EnumStringMember=L,t.EnumSymbolBody=D,t.ExistsTypeAnnotation=B,t.FunctionTypeAnnotation=j,t.FunctionTypeParam=U,t.IndexedAccessType=ve,t.InferredPredicate=m,t.InterfaceDeclaration=$,t.GenericTypeAnnotation=t.ClassImplements=t.InterfaceExtends=V,t.InterfaceTypeAnnotation=q,t.IntersectionTypeAnnotation=z,t.MixedTypeAnnotation=W,t.NullLiteralTypeAnnotation=h,t.NullableTypeAnnotation=Y,Object.defineProperty(t,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.NumericLiteral}}),t.NumberTypeAnnotation=J,t.ObjectTypeAnnotation=ae,t.ObjectTypeCallProperty=ce,t.ObjectTypeIndexer=ue,t.ObjectTypeInternalSlot=le,t.ObjectTypeProperty=pe,t.ObjectTypeSpreadProperty=he,t.OpaqueType=oe,t.OptionalIndexedAccessType=Se,t.QualifiedTypeIdentifier=de,Object.defineProperty(t,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.StringLiteral}}),t.StringTypeAnnotation=Q,t.SymbolTypeAnnotation=fe,t.ThisTypeAnnotation=Z,t.TupleTypeAnnotation=ee,t.TypeAlias=ne,t.TypeAnnotation=re,t.TypeCastExpression=ge,t.TypeParameter=se,t.TypeParameterDeclaration=t.TypeParameterInstantiation=ie,t.TypeofTypeAnnotation=te,t.UnionTypeAnnotation=ye,t.Variance=be,t.VoidTypeAnnotation=Ee,t._interfaceish=K,t._variance=G;var r=n(51693),i=n(96873),s=n(46877);const{isDeclareExportDeclaration:o,isStatement:a}=r;function l(){this.word("any")}function c(e){this.print(e.elementType,e),this.tokenChar(91),this.tokenChar(93)}function u(){this.word("boolean")}function p(e){this.word(e.value?"true":"false")}function h(){this.word("null")}function d(e,t){o(t)||(this.word("declare"),this.space()),this.word("class"),this.space(),this._interfaceish(e)}function f(e,t){o(t)||(this.word("declare"),this.space()),this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e)),this.semicolon()}function m(){this.tokenChar(37),this.word("checks")}function y(e){this.tokenChar(37),this.word("checks"),this.tokenChar(40),this.print(e.value,e),this.tokenChar(41)}function g(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)}function b(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)}function E(e){this.word("declare"),this.space(),this.word("module"),this.tokenChar(46),this.word("exports"),this.print(e.typeAnnotation,e)}function v(e){this.word("declare"),this.space(),this.TypeAlias(e)}function S(e,t){o(t)||(this.word("declare"),this.space()),this.OpaqueType(e)}function T(e,t){o(t)||(this.word("declare"),this.space()),this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()}function x(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space()),F.call(this,e)}function _(e){this.word("declare"),this.space(),i.ExportAllDeclaration.call(this,e)}function A(e){const{id:t,body:n}=e;this.word("enum"),this.space(),this.print(t,e),this.print(n,e)}function w(e,t,n){n&&(e.space(),e.word("of"),e.space(),e.word(t)),e.space()}function P(e,t){const{members:n}=t;e.token("{"),e.indent(),e.newline();for(const r of n)e.print(r,t),e.newline();t.hasUnknownMembers&&(e.token("..."),e.newline()),e.dedent(),e.token("}")}function C(e){const{explicitType:t}=e;w(this,"boolean",t),P(this,e)}function O(e){const{explicitType:t}=e;w(this,"number",t),P(this,e)}function k(e){const{explicitType:t}=e;w(this,"string",t),P(this,e)}function D(e){w(this,"symbol",!0),P(this,e)}function I(e){const{id:t}=e;this.print(t,e),this.tokenChar(44)}function N(e,t){const{id:n,init:r}=t;e.print(n,t),e.space(),e.token("="),e.space(),e.print(r,t),e.token(",")}function M(e){N(this,e)}function R(e){N(this,e)}function L(e){N(this,e)}function F(e){if(e.declaration){const t=e.declaration;this.print(t,e),a(t)||this.semicolon()}else this.tokenChar(123),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.tokenChar(125),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}function B(){this.tokenChar(42)}function j(e,t){this.print(e.typeParameters,e),this.tokenChar(40),e.this&&(this.word("this"),this.tokenChar(58),this.space(),this.print(e.this.typeAnnotation,e),(e.params.length||e.rest)&&(this.tokenChar(44),this.space())),this.printList(e.params,e),e.rest&&(e.params.length&&(this.tokenChar(44),this.space()),this.token("..."),this.print(e.rest,e)),this.tokenChar(41),t&&("ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method)?this.tokenChar(58):(this.space(),this.token("=>")),this.space(),this.print(e.returnType,e)}function U(e){this.print(e.name,e),e.optional&&this.tokenChar(63),e.name&&(this.tokenChar(58),this.space()),this.print(e.typeAnnotation,e)}function V(e){this.print(e.id,e),this.print(e.typeParameters,e)}function K(e){var t;this.print(e.id,e),this.print(e.typeParameters,e),null!=(t=e.extends)&&t.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e)),e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e)),e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e)),this.space(),this.print(e.body,e)}function G(e){e.variance&&("plus"===e.variance.kind?this.tokenChar(43):"minus"===e.variance.kind&&this.tokenChar(45))}function $(e){this.word("interface"),this.space(),this._interfaceish(e)}function H(){this.space(),this.tokenChar(38),this.space()}function q(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e)),this.space(),this.print(e.body,e)}function z(e){this.printJoin(e.types,e,{separator:H})}function W(){this.word("mixed")}function X(){this.word("empty")}function Y(e){this.tokenChar(63),this.print(e.typeAnnotation,e)}function J(){this.word("number")}function Q(){this.word("string")}function Z(){this.word("this")}function ee(e){this.tokenChar(91),this.printList(e.types,e),this.tokenChar(93)}function te(e){this.word("typeof"),this.space(),this.print(e.argument,e)}function ne(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.tokenChar(61),this.space(),this.print(e.right,e),this.semicolon()}function re(e){this.tokenChar(58),this.space(),e.optional&&this.tokenChar(63),this.print(e.typeAnnotation,e)}function ie(e){this.tokenChar(60),this.printList(e.params,e,{}),this.tokenChar(62)}function se(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e),e.default&&(this.space(),this.tokenChar(61),this.space(),this.print(e.default,e))}function oe(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.tokenChar(58),this.space(),this.print(e.supertype,e)),e.impltype&&(this.space(),this.tokenChar(61),this.space(),this.print(e.impltype,e)),this.semicolon()}function ae(e){e.exact?this.token("{|"):this.tokenChar(123);const t=[...e.properties,...e.callProperties||[],...e.indexers||[],...e.internalSlots||[]];t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==t.length||e.inexact)&&(this.tokenChar(44),this.space())}}),this.space()),e.inexact&&(this.indent(),this.token("..."),t.length&&this.newline(),this.dedent()),e.exact?this.token("|}"):this.tokenChar(125)}function le(e){e.static&&(this.word("static"),this.space()),this.tokenChar(91),this.tokenChar(91),this.print(e.id,e),this.tokenChar(93),this.tokenChar(93),e.optional&&this.tokenChar(63),e.method||(this.tokenChar(58),this.space()),this.print(e.value,e)}function ce(e){e.static&&(this.word("static"),this.space()),this.print(e.value,e)}function ue(e){e.static&&(this.word("static"),this.space()),this._variance(e),this.tokenChar(91),e.id&&(this.print(e.id,e),this.tokenChar(58),this.space()),this.print(e.key,e),this.tokenChar(93),this.tokenChar(58),this.space(),this.print(e.value,e)}function pe(e){e.proto&&(this.word("proto"),this.space()),e.static&&(this.word("static"),this.space()),"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space()),this._variance(e),this.print(e.key,e),e.optional&&this.tokenChar(63),e.method||(this.tokenChar(58),this.space()),this.print(e.value,e)}function he(e){this.token("..."),this.print(e.argument,e)}function de(e){this.print(e.qualification,e),this.tokenChar(46),this.print(e.id,e)}function fe(){this.word("symbol")}function me(){this.space(),this.tokenChar(124),this.space()}function ye(e){this.printJoin(e.types,e,{separator:me})}function ge(e){this.tokenChar(40),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.tokenChar(41)}function be(e){"plus"===e.kind?this.tokenChar(43):this.tokenChar(45)}function Ee(){this.word("void")}function ve(e){this.print(e.objectType,e),this.tokenChar(91),this.print(e.indexType,e),this.tokenChar(93)}function Se(e){this.print(e.objectType,e),e.optional&&this.token("?."),this.tokenChar(91),this.print(e.indexType,e),this.tokenChar(93)}},21912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(23741);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}}))}));var i=n(23402);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var s=n(19731);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var o=n(99170);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var a=n(40933);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var l=n(96873);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))}));var c=n(46877);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var u=n(12859);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))}));var p=n(85341);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===p[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}}))}));var h=n(28534);Object.keys(h).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===h[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return h[e]}}))}));var d=n(23631);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===d[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}))},28534:function(e,t){"use strict";function n(e){this.print(e.name,e),e.value&&(this.tokenChar(61),this.print(e.value,e))}function r(e){this.word(e.name)}function i(e){this.print(e.namespace,e),this.tokenChar(58),this.print(e.name,e)}function s(e){this.print(e.object,e),this.tokenChar(46),this.print(e.property,e)}function o(e){this.tokenChar(123),this.token("..."),this.print(e.argument,e),this.tokenChar(125)}function a(e){this.tokenChar(123),this.print(e.expression,e),this.tokenChar(125)}function l(e){this.tokenChar(123),this.token("..."),this.print(e.expression,e),this.tokenChar(125)}function c(e){const t=this.getPossibleRaw(e);void 0!==t?this.token(t):this.token(e.value)}function u(e){const t=e.openingElement;if(this.print(t,e),!t.selfClosing){this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingElement,e)}}function p(){this.space()}function h(e){this.tokenChar(60),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:p})),e.selfClosing?(this.space(),this.token("/>")):this.tokenChar(62)}function d(e){this.token("</"),this.print(e.name,e),this.tokenChar(62)}function f(e){this.printInnerComments(e)}function m(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)}function y(){this.tokenChar(60),this.tokenChar(62)}function g(){this.token("</"),this.tokenChar(62)}Object.defineProperty(t,"__esModule",{value:!0}),t.JSXAttribute=n,t.JSXClosingElement=d,t.JSXClosingFragment=g,t.JSXElement=u,t.JSXEmptyExpression=f,t.JSXExpressionContainer=a,t.JSXFragment=m,t.JSXIdentifier=r,t.JSXMemberExpression=s,t.JSXNamespacedName=i,t.JSXOpeningElement=h,t.JSXOpeningFragment=y,t.JSXSpreadAttribute=o,t.JSXSpreadChild=l,t.JSXText=c},40933:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowFunctionExpression=h,t.FunctionDeclaration=t.FunctionExpression=p,t._functionHead=u,t._methodHead=l,t._param=a,t._parameters=o,t._params=s,t._predicate=c;var r=n(51693);const{isIdentifier:i}=r;function s(e){this.print(e.typeParameters,e),this.tokenChar(40),this._parameters(e.params,e),this.tokenChar(41),e.returnType&&("ArrowFunctionExpression"===e.type?(this._noLineTerminator=!0,this.print(e.returnType,e),this._noLineTerminator=!1):this.print(e.returnType,e))}function o(e,t){for(let n=0;n<e.length;n++)this._param(e[n],t),n<e.length-1&&(this.tokenChar(44),this.space())}function a(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.tokenChar(63),this.print(e.typeAnnotation,e)}function l(e){const t=e.kind,n=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space()),e.async&&(this._catchUp("start",n.loc),this.word("async"),this.space()),"method"!==t&&"init"!==t||e.generator&&this.tokenChar(42),e.computed?(this.tokenChar(91),this.print(n,e),this.tokenChar(93)):this.print(n,e),e.optional&&this.tokenChar(63),this._params(e)}function c(e){e.predicate&&(e.returnType||this.tokenChar(58),this.space(),this.print(e.predicate,e))}function u(e){e.async&&(this.word("async"),this.space()),this.word("function"),e.generator&&this.tokenChar(42),this.printInnerComments(e),this.space(),e.id&&this.print(e.id,e),this._params(e),"TSDeclareFunction"!==e.type&&this._predicate(e)}function p(e){this._functionHead(e),this.space(),this.print(e.body,e)}function h(e){e.async&&(this.word("async"),this.space());const t=e.params[0];this.format.retainLines||this.format.auxiliaryCommentBefore||this.format.auxiliaryCommentAfter||1!==e.params.length||!i(t)||d(e,t)?this._params(e):this.print(t,e),this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)}function d(e,t){var n,r;return!!(e.typeParameters||e.returnType||e.predicate||t.typeAnnotation||t.optional||null!=(n=t.leadingComments)&&n.length||null!=(r=t.trailingComments)&&r.length)}},96873:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExportAllDeclaration=m,t.ExportDefaultDeclaration=g,t.ExportDefaultSpecifier=h,t.ExportNamedDeclaration=y,t.ExportNamespaceSpecifier=f,t.ExportSpecifier=d,t.ImportAttribute=E,t.ImportDeclaration=b,t.ImportDefaultSpecifier=p,t.ImportNamespaceSpecifier=v,t.ImportSpecifier=u;var r=n(51693);const{isClassDeclaration:i,isExportDefaultSpecifier:s,isExportNamespaceSpecifier:o,isImportDefaultSpecifier:a,isImportNamespaceSpecifier:l,isStatement:c}=r;function u(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space()),this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))}function p(e){this.print(e.local,e)}function h(e){this.print(e.exported,e)}function d(e){"type"===e.exportKind&&(this.word("type"),this.space()),this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))}function f(e){this.tokenChar(42),this.space(),this.word("as"),this.space(),this.print(e.exported,e)}function m(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space()),this.tokenChar(42),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e),this.semicolon()}function y(e){if(this.format.decoratorsBeforeExport&&i(e.declaration)&&this.printJoin(e.declaration.decorators,e),this.word("export"),this.space(),e.declaration){const t=e.declaration;this.print(t,e),c(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let n=!1;for(;;){const r=t[0];if(!s(r)&&!o(r))break;n=!0,this.print(t.shift(),e),t.length&&(this.tokenChar(44),this.space())}(t.length||!t.length&&!n)&&(this.tokenChar(123),t.length&&(this.space(),this.printList(t,e),this.space()),this.tokenChar(125)),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e)),this.semicolon()}}function g(e){this.format.decoratorsBeforeExport&&i(e.declaration)&&this.printJoin(e.declaration.decorators,e),this.word("export"),this.space(),this.word("default"),this.space();const t=e.declaration;this.print(t,e),c(t)||this.semicolon()}function b(e){this.word("import"),this.space();const t="type"===e.importKind||"typeof"===e.importKind;t&&(this.word(e.importKind),this.space());const n=e.specifiers.slice(0),r=!!n.length;while(r){const t=n[0];if(!a(t)&&!l(t))break;this.print(n.shift(),e),n.length&&(this.tokenChar(44),this.space())}var i;n.length?(this.tokenChar(123),this.space(),this.printList(n,e),this.space(),this.tokenChar(125)):t&&!r&&(this.tokenChar(123),this.tokenChar(125)),(r||t)&&(this.space(),this.word("from"),this.space()),this.print(e.source,e),this.printAssertions(e),null!=(i=e.attributes)&&i.length&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e)),this.semicolon()}function E(e){this.print(e.key),this.tokenChar(58),this.space(),this.print(e.value)}function v(e){this.tokenChar(42),this.space(),this.word("as"),this.space(),this.print(e.local,e)}},19731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BreakStatement=b,t.CatchClause=_,t.ContinueStatement=E,t.DebuggerStatement=P,t.DoWhileStatement=y,t.ForOfStatement=t.ForInStatement=void 0,t.ForStatement=p,t.IfStatement=c,t.LabeledStatement=T,t.ReturnStatement=v,t.SwitchCase=w,t.SwitchStatement=A,t.ThrowStatement=S,t.TryStatement=x,t.VariableDeclaration=k,t.VariableDeclarator=D,t.WhileStatement=h,t.WithStatement=l;var r=n(51693);const{isFor:i,isForStatement:s,isIfStatement:o,isStatement:a}=r;function l(e){this.word("with"),this.space(),this.tokenChar(40),this.print(e.object,e),this.tokenChar(41),this.printBlock(e)}function c(e){this.word("if"),this.space(),this.tokenChar(40),this.print(e.test,e),this.tokenChar(41),this.space();const t=e.alternate&&o(u(e.consequent));t&&(this.tokenChar(123),this.newline(),this.indent()),this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.tokenChar(125)),e.alternate&&(this.endsWith(125)&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))}function u(e){const{body:t}=e;return!1===a(t)?e:u(t)}function p(e){this.word("for"),this.space(),this.tokenChar(40),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.tokenChar(59),e.test&&(this.space(),this.print(e.test,e)),this.tokenChar(59),e.update&&(this.space(),this.print(e.update,e)),this.tokenChar(41),this.printBlock(e)}function h(e){this.word("while"),this.space(),this.tokenChar(40),this.print(e.test,e),this.tokenChar(41),this.printBlock(e)}function d(e){this.word("for"),this.space();const t="ForOfStatement"===e.type;t&&e.await&&(this.word("await"),this.space()),this.tokenChar(40),this.print(e.left,e),this.space(),this.word(t?"of":"in"),this.space(),this.print(e.right,e),this.tokenChar(41),this.printBlock(e)}const f=d;t.ForInStatement=f;const m=d;function y(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.tokenChar(40),this.print(e.test,e),this.tokenChar(41),this.semicolon()}function g(e,t,n,r){t&&(e.space(),e.printTerminatorless(t,n,r)),e.semicolon()}function b(e){this.word("break"),g(this,e.label,e,!0)}function E(e){this.word("continue"),g(this,e.label,e,!0)}function v(e){this.word("return"),g(this,e.argument,e,!1)}function S(e){this.word("throw"),g(this,e.argument,e,!1)}function T(e){this.print(e.label,e),this.tokenChar(58),this.space(),this.print(e.body,e)}function x(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e),e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))}function _(e){this.word("catch"),this.space(),e.param&&(this.tokenChar(40),this.print(e.param,e),this.print(e.param.typeAnnotation,e),this.tokenChar(41),this.space()),this.print(e.body,e)}function A(e){this.word("switch"),this.space(),this.tokenChar(40),this.print(e.discriminant,e),this.tokenChar(41),this.space(),this.tokenChar(123),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,n){if(!t&&e.cases[e.cases.length-1]===n)return-1}}),this.tokenChar(125)}function w(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.tokenChar(58)):(this.word("default"),this.tokenChar(58)),e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))}function P(){this.word("debugger"),this.semicolon()}function C(){if(this.tokenChar(44),this.newline(),this.endsWith(10))for(let e=0;e<4;e++)this.space(!0)}function O(){if(this.tokenChar(44),this.newline(),this.endsWith(10))for(let e=0;e<6;e++)this.space(!0)}function k(e,t){e.declare&&(this.word("declare"),this.space()),this.word(e.kind),this.space();let n,r=!1;if(!i(t))for(const i of e.declarations)i.init&&(r=!0);if(r&&(n="const"===e.kind?O:C),this.printList(e.declarations,e,{separator:n}),i(t))if(s(t)){if(t.init===e)return}else if(t.left===e)return;this.semicolon()}function D(e){this.print(e.id,e),e.definite&&this.tokenChar(33),this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.tokenChar(61),this.space(),this.print(e.init,e))}t.ForOfStatement=m},23741:function(e,t){"use strict";function n(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)}function r(e,t){const n=t.quasis[0]===e,r=t.quasis[t.quasis.length-1]===e,i=(n?"`":"}")+e.value.raw+(r?"`":"${");this.token(i,!0)}function i(e){const t=e.quasis;for(let n=0;n<t.length;n++)this.print(t[n],e),n+1<t.length&&this.print(e.expressions[n],e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TaggedTemplateExpression=n,t.TemplateElement=r,t.TemplateLiteral=i},46877:function(e,t,n){"use strict";n(21703),n(92087),Object.defineProperty(t,"__esModule",{value:!0}),t.ArgumentPlaceholder=l,t.ArrayPattern=t.ArrayExpression=d,t.BigIntLiteral=S,t.BooleanLiteral=g,t.DecimalLiteral=T,t.Identifier=a,t.NullLiteral=b,t.NumericLiteral=E,t.ObjectPattern=t.ObjectExpression=u,t.ObjectMethod=p,t.ObjectProperty=h,t.PipelineBareFunction=w,t.PipelinePrimaryTopicReference=P,t.PipelineTopicExpression=A,t.RecordExpression=f,t.RegExpLiteral=y,t.SpreadElement=t.RestElement=c,t.StringLiteral=v,t.TopicReference=_,t.TupleExpression=m;var r=n(51693),i=n(19509);const{isAssignmentPattern:s,isIdentifier:o}=r;function a(e){this.exactSource(e.loc,(()=>{this.word(e.name)}))}function l(){this.tokenChar(63)}function c(e){this.token("..."),this.print(e.argument,e)}function u(e){const t=e.properties;this.tokenChar(123),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space()),this.tokenChar(125)}function p(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)}function h(e){if(this.printJoin(e.decorators,e),e.computed)this.tokenChar(91),this.print(e.key,e),this.tokenChar(93);else{if(s(e.value)&&o(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&o(e.key)&&o(e.value)&&e.key.name===e.value.name)return}this.tokenChar(58),this.space(),this.print(e.value,e)}function d(e){const t=e.elements,n=t.length;this.tokenChar(91),this.printInnerComments(e);for(let r=0;r<t.length;r++){const i=t[r];i?(r>0&&this.space(),this.print(i,e),r<n-1&&this.tokenChar(44)):this.tokenChar(44)}this.tokenChar(93)}function f(e){const t=e.properties;let n,r;if("bar"===this.format.recordAndTupleSyntaxType)n="{|",r="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);n="#{",r="}"}this.token(n),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space()),this.token(r)}function m(e){const t=e.elements,n=t.length;let r,i;if("bar"===this.format.recordAndTupleSyntaxType)r="[|",i="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);r="#[",i="]"}this.token(r),this.printInnerComments(e);for(let s=0;s<t.length;s++){const r=t[s];r&&(s>0&&this.space(),this.print(r,e),s<n-1&&this.tokenChar(44))}this.token(i)}function y(e){this.word(`/${e.pattern}/${e.flags}`)}function g(e){this.word(e.value?"true":"false")}function b(){this.word("null")}function E(e){const t=this.getPossibleRaw(e),n=this.format.jsescOption,r=e.value+"";n.numbers?this.number(i(e.value,n)):null==t?this.number(r):this.format.minified?this.number(t.length<r.length?t:r):this.number(t)}function v(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&void 0!==t)return void this.token(t);const n=i(e.value,Object.assign(this.format.jsescOption,this.format.jsonCompatibleStrings&&{json:!0}));return this.token(n)}function S(e){const t=this.getPossibleRaw(e);this.format.minified||void 0===t?this.word(e.value+"n"):this.word(t)}function T(e){const t=this.getPossibleRaw(e);this.format.minified||void 0===t?this.word(e.value+"m"):this.word(t)}const x=new Set(["^^","@@","^","%","#"]);function _(){const{topicToken:e}=this.format;if(!x.has(e)){const t=JSON.stringify(e),n=Array.from(x,(e=>JSON.stringify(e)));throw new Error(`The "topicToken" generator option must be one of ${n.join(", ")} (${t} received instead).`)}this.token(e)}function A(e){this.print(e.expression,e)}function w(e){this.print(e.callee,e)}function P(){this.tokenChar(35)}},23631:function(e,t){"use strict";function n(e){this.tokenChar(58),this.space(),e.optional&&this.tokenChar(63),this.print(e.typeAnnotation,e)}function r(e,t){this.tokenChar(60),this.printList(e.params,e,{}),"ArrowFunctionExpression"===t.type&&1===e.params.length&&this.tokenChar(44),this.tokenChar(62)}function i(e){e.in&&(this.word("in"),this.space()),e.out&&(this.word("out"),this.space()),this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e)),e.default&&(this.space(),this.tokenChar(61),this.space(),this.print(e.default,e))}function s(e){e.accessibility&&(this.word(e.accessibility),this.space()),e.readonly&&(this.word("readonly"),this.space()),this._param(e.parameter)}function o(e){e.declare&&(this.word("declare"),this.space()),this._functionHead(e),this.tokenChar(59)}function a(e){this._classMethodHead(e),this.tokenChar(59)}function l(e){this.print(e.left,e),this.tokenChar(46),this.print(e.right,e)}function c(e){this.tsPrintSignatureDeclarationBase(e),this.tokenChar(59)}function u(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.tokenChar(59)}function p(e){const{readonly:t,initializer:n}=e;t&&(this.word("readonly"),this.space()),this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),n&&(this.space(),this.tokenChar(61),this.space(),this.print(n,e)),this.tokenChar(59)}function h(e){e.computed&&this.tokenChar(91),this.print(e.key,e),e.computed&&this.tokenChar(93),e.optional&&this.tokenChar(63)}function d(e){const{kind:t}=e;"set"!==t&&"get"!==t||(this.word(t),this.space()),this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.tokenChar(59)}function f(e){const{readonly:t,static:n}=e;n&&(this.word("static"),this.space()),t&&(this.word("readonly"),this.space()),this.tokenChar(91),this._parameters(e.parameters,e),this.tokenChar(93),this.print(e.typeAnnotation,e),this.tokenChar(59)}function m(){this.word("any")}function y(){this.word("bigint")}function g(){this.word("unknown")}function b(){this.word("number")}function E(){this.word("object")}function v(){this.word("boolean")}function S(){this.word("string")}function T(){this.word("symbol")}function x(){this.word("void")}function _(){this.word("undefined")}function A(){this.word("null")}function w(){this.word("never")}function P(){this.word("intrinsic")}function C(){this.word("this")}function O(e){this.tsPrintFunctionOrConstructorType(e)}function k(e){e.abstract&&(this.word("abstract"),this.space()),this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)}function D(e){const{typeParameters:t}=e,n=e.parameters;this.print(t,e),this.tokenChar(40),this._parameters(n,e),this.tokenChar(41),this.space(),this.token("=>"),this.space();const r=e.typeAnnotation;this.print(r.typeAnnotation,e)}function I(e){this.print(e.typeName,e),this.print(e.typeParameters,e)}function N(e){e.asserts&&(this.word("asserts"),this.space()),this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))}function M(e){this.word("typeof"),this.space(),this.print(e.exprName),e.typeParameters&&this.print(e.typeParameters,e)}function R(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)}function L(e,t){F(this,e,t)}function F(e,t,n){if(e.token("{"),t.length){e.indent(),e.newline();for(const r of t)e.print(r,n),e.newline();e.dedent(),e.rightBrace()}else e.token("}")}function B(e){this.print(e.elementType,e),this.token("[]")}function j(e){this.tokenChar(91),this.printList(e.elementTypes,e),this.tokenChar(93)}function U(e){this.print(e.typeAnnotation,e),this.tokenChar(63)}function V(e){this.token("..."),this.print(e.typeAnnotation,e)}function K(e){this.print(e.label,e),e.optional&&this.tokenChar(63),this.tokenChar(58),this.space(),this.print(e.elementType,e)}function G(e){H(this,e,"|")}function $(e){H(this,e,"&")}function H(e,t,n){e.printJoin(t.types,t,{separator(){this.space(),this.token(n),this.space()}})}function q(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.tokenChar(63),this.space(),this.print(e.trueType),this.space(),this.tokenChar(58),this.space(),this.print(e.falseType)}function z(e){this.token("infer"),this.space(),this.print(e.typeParameter)}function W(e){this.tokenChar(40),this.print(e.typeAnnotation,e),this.tokenChar(41)}function X(e){this.word(e.operator),this.space(),this.print(e.typeAnnotation,e)}function Y(e){this.print(e.objectType,e),this.tokenChar(91),this.print(e.indexType,e),this.tokenChar(93)}function J(e){const{nameType:t,optional:n,readonly:r,typeParameter:i}=e;this.tokenChar(123),this.space(),r&&(Q(this,r),this.word("readonly"),this.space()),this.tokenChar(91),this.word(i.name),this.space(),this.word("in"),this.space(),this.print(i.constraint,i),t&&(this.space(),this.word("as"),this.space(),this.print(t,e)),this.tokenChar(93),n&&(Q(this,n),this.tokenChar(63)),this.tokenChar(58),this.space(),this.print(e.typeAnnotation,e),this.space(),this.tokenChar(125)}function Q(e,t){!0!==t&&e.token(t)}function Z(e){this.print(e.literal,e)}function ee(e){this.print(e.expression,e),this.print(e.typeParameters,e)}function te(e){const{declare:t,id:n,typeParameters:r,extends:i,body:s}=e;t&&(this.word("declare"),this.space()),this.word("interface"),this.space(),this.print(n,e),this.print(r,e),null!=i&&i.length&&(this.space(),this.word("extends"),this.space(),this.printList(i,e)),this.space(),this.print(s,e)}function ne(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)}function re(e){const{declare:t,id:n,typeParameters:r,typeAnnotation:i}=e;t&&(this.word("declare"),this.space()),this.word("type"),this.space(),this.print(n,e),this.print(r,e),this.space(),this.tokenChar(61),this.space(),this.print(i,e),this.tokenChar(59)}function ie(e){const{expression:t,typeAnnotation:n}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(n,e)}function se(e){const{typeAnnotation:t,expression:n}=e;this.tokenChar(60),this.print(t,e),this.tokenChar(62),this.space(),this.print(n,e)}function oe(e){this.print(e.expression,e),this.print(e.typeParameters,e)}function ae(e){const{declare:t,const:n,id:r,members:i}=e;t&&(this.word("declare"),this.space()),n&&(this.word("const"),this.space()),this.word("enum"),this.space(),this.print(r,e),this.space(),F(this,i,e)}function le(e){const{id:t,initializer:n}=e;this.print(t,e),n&&(this.space(),this.tokenChar(61),this.space(),this.print(n,e)),this.tokenChar(44)}function ce(e){const{declare:t,id:n}=e;if(t&&(this.word("declare"),this.space()),e.global||(this.word("Identifier"===n.type?"namespace":"module"),this.space()),this.print(n,e),!e.body)return void this.tokenChar(59);let r=e.body;while("TSModuleDeclaration"===r.type)this.tokenChar(46),this.print(r.id,r),r=r.body;this.space(),this.print(r,e)}function ue(e){F(this,e.body,e)}function pe(e){const{argument:t,qualifier:n,typeParameters:r}=e;this.word("import"),this.tokenChar(40),this.print(t,e),this.tokenChar(41),n&&(this.tokenChar(46),this.print(n,e)),r&&this.print(r,e)}function he(e){const{isExport:t,id:n,moduleReference:r}=e;t&&(this.word("export"),this.space()),this.word("import"),this.space(),this.print(n,e),this.space(),this.tokenChar(61),this.space(),this.print(r,e),this.tokenChar(59)}function de(e){this.token("require("),this.print(e.expression,e),this.tokenChar(41)}function fe(e){this.print(e.expression,e),this.tokenChar(33)}function me(e){this.word("export"),this.space(),this.tokenChar(61),this.space(),this.print(e.expression,e),this.tokenChar(59)}function ye(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)}function ge(e){const{typeParameters:t}=e,n=e.parameters;this.print(t,e),this.tokenChar(40),this._parameters(n,e),this.tokenChar(41);const r=e.typeAnnotation;this.print(r,e)}function be(e){const t="ClassAccessorProperty"===e.type||"ClassProperty"===e.type;t&&e.declare&&(this.word("declare"),this.space()),e.accessibility&&(this.word(e.accessibility),this.space()),e.static&&(this.word("static"),this.space()),e.override&&(this.word("override"),this.space()),e.abstract&&(this.word("abstract"),this.space()),t&&e.readonly&&(this.word("readonly"),this.space())}Object.defineProperty(t,"__esModule",{value:!0}),t.TSAnyKeyword=m,t.TSArrayType=B,t.TSAsExpression=ie,t.TSBigIntKeyword=y,t.TSBooleanKeyword=v,t.TSCallSignatureDeclaration=c,t.TSConditionalType=q,t.TSConstructSignatureDeclaration=u,t.TSConstructorType=k,t.TSDeclareFunction=o,t.TSDeclareMethod=a,t.TSEnumDeclaration=ae,t.TSEnumMember=le,t.TSExportAssignment=me,t.TSExpressionWithTypeArguments=ee,t.TSExternalModuleReference=de,t.TSFunctionType=O,t.TSImportEqualsDeclaration=he,t.TSImportType=pe,t.TSIndexSignature=f,t.TSIndexedAccessType=Y,t.TSInferType=z,t.TSInstantiationExpression=oe,t.TSInterfaceBody=ne,t.TSInterfaceDeclaration=te,t.TSIntersectionType=$,t.TSIntrinsicKeyword=P,t.TSLiteralType=Z,t.TSMappedType=J,t.TSMethodSignature=d,t.TSModuleBlock=ue,t.TSModuleDeclaration=ce,t.TSNamedTupleMember=K,t.TSNamespaceExportDeclaration=ye,t.TSNeverKeyword=w,t.TSNonNullExpression=fe,t.TSNullKeyword=A,t.TSNumberKeyword=b,t.TSObjectKeyword=E,t.TSOptionalType=U,t.TSParameterProperty=s,t.TSParenthesizedType=W,t.TSPropertySignature=p,t.TSQualifiedName=l,t.TSRestType=V,t.TSStringKeyword=S,t.TSSymbolKeyword=T,t.TSThisType=C,t.TSTupleType=j,t.TSTypeAliasDeclaration=re,t.TSTypeAnnotation=n,t.TSTypeAssertion=se,t.TSTypeLiteral=R,t.TSTypeOperator=X,t.TSTypeParameter=i,t.TSTypeParameterDeclaration=t.TSTypeParameterInstantiation=r,t.TSTypePredicate=N,t.TSTypeQuery=M,t.TSTypeReference=I,t.TSUndefinedKeyword=_,t.TSUnionType=G,t.TSUnknownKeyword=g,t.TSVoidKeyword=x,t.tsPrintClassMemberModifiers=be,t.tsPrintFunctionOrConstructorType=D,t.tsPrintPropertyOrMethodName=h,t.tsPrintSignatureDeclarationBase=ge,t.tsPrintTypeLiteralOrInterfaceBody=L},20091:function(e,t,n){"use strict";var r=n(15941);n(26699),Object.defineProperty(t,"__esModule",{value:!0}),t.CodeGenerator=void 0,t["default"]=c;var i=n(65224),s=n(9425);class o extends s.default{constructor(e,t={},n){const r=a(n,t),s=t.sourceMaps?new i.default(t,n):null;super(r,s),this.ast=void 0,this.ast=e}generate(){return super.generate(this.ast)}}function a(e,t){const n={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,indent:{adjustMultilineComment:!0,style:"  ",base:0},jsescOption:Object.assign({quotes:"double",wrap:!0,minimal:!1},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType,topicToken:t.topicToken};return n.decoratorsBeforeExport=!!t.decoratorsBeforeExport,n.jsonCompatibleStrings=t.jsonCompatibleStrings,n.minified?(n.compact=!0,n.shouldPrintComment=n.shouldPrintComment||(()=>n.comments)):n.shouldPrintComment=n.shouldPrintComment||(e=>n.comments||e.includes("@license")||e.includes("@preserve")),"auto"===n.compact&&(n.compact=e.length>5e5,n.compact&&r.error(`[BABEL] Note: The code generator has deoptimised the styling of ${t.filename} as it exceeds the max of 500KB.`)),n.compact&&(n.indent.adjustMultilineComment=!1),n}class l{constructor(e,t,n){this._generator=void 0,this._generator=new o(e,t,n)}generate(){return this._generator.generate()}}function c(e,t,n){const r=new o(e,t,n);return r.generate()}t.CodeGenerator=l},52362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.needsParens=E,t.needsWhitespace=y,t.needsWhitespaceAfter=b,t.needsWhitespaceBefore=g;var r=n(72949),i=n(866),s=n(51693);const{FLIPPED_ALIAS_KEYS:o,isCallExpression:a,isExpressionStatement:l,isMemberExpression:c,isNewExpression:u}=s;function p(e){const t={};function n(e,n){const r=t[e];t[e]=r?function(e,t,i){const s=r(e,t,i);return null==s?n(e,t,i):s}:n}for(const r of Object.keys(e)){const t=o[r];if(t)for(const i of t)n(i,e[r]);else n(r,e[r])}return t}const h=p(i),d=p(r.nodes);function f(e,t,n,r){const i=e[t.type];return i?i(t,n,r):null}function m(e){return!!a(e)||c(e)&&m(e.object)}function y(e,t,n){if(!e)return!1;l(e)&&(e=e.expression);const r=f(d,e,t);return"number"===typeof r&&0!==(r&n)}function g(e,t){return y(e,t,1)}function b(e,t){return y(e,t,2)}function E(e,t,n){return!!t&&(!(!u(t)||t.callee!==e||!m(e))||f(h,e,t,n))}},866:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowFunctionExpression=Te,t.AssignmentExpression=Ae,t.Binary=le,t.BinaryExpression=ye,t.ClassExpression=Ee,t.ConditionalExpression=xe,t.DoExpression=ae,t.FunctionExpression=Se,t.FunctionTypeAnnotation=ie,t.Identifier=Pe,t.LogicalExpression=we,t.NullableTypeAnnotation=re,t.ObjectExpression=oe,t.OptionalIndexedAccessType=ue,t.OptionalCallExpression=t.OptionalMemberExpression=_e,t.SequenceExpression=ge,t.TSAsExpression=pe,t.TSInferType=fe,t.TSInstantiationExpression=me,t.TSTypeAssertion=he,t.TSIntersectionType=t.TSUnionType=de,t.UnaryLike=ve,t.IntersectionTypeAnnotation=t.UnionTypeAnnotation=ce,t.UpdateExpression=se,t.AwaitExpression=t.YieldExpression=be;var r=n(51693);const{isArrayTypeAnnotation:i,isArrowFunctionExpression:s,isAssignmentExpression:o,isAwaitExpression:a,isBinary:l,isBinaryExpression:c,isUpdateExpression:u,isCallExpression:p,isClass:h,isClassExpression:d,isConditional:f,isConditionalExpression:m,isExportDeclaration:y,isExportDefaultDeclaration:g,isExpressionStatement:b,isFor:E,isForInStatement:v,isForOfStatement:S,isForStatement:T,isFunctionExpression:x,isIfStatement:_,isIndexedAccessType:A,isIntersectionTypeAnnotation:w,isLogicalExpression:P,isMemberExpression:C,isNewExpression:O,isNullableTypeAnnotation:k,isObjectPattern:D,isOptionalCallExpression:I,isOptionalMemberExpression:N,isReturnStatement:M,isSequenceExpression:R,isSwitchStatement:L,isTSArrayType:F,isTSAsExpression:B,isTSInstantiationExpression:j,isTSIntersectionType:U,isTSNonNullExpression:V,isTSOptionalType:K,isTSRestType:G,isTSTypeAssertion:$,isTSUnionType:H,isTaggedTemplateExpression:q,isThrowStatement:z,isTypeAnnotation:W,isUnaryLike:X,isUnionTypeAnnotation:Y,isVariableDeclarator:J,isWhileStatement:Q,isYieldExpression:Z}=r,ee={"||":0,"??":0,"|>":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},te=(e,t)=>h(t,{superClass:e}),ne=(e,t)=>(C(t)||N(t))&&t.object===e||(p(t)||I(t)||O(t))&&t.callee===e||q(t)&&t.tag===e||V(t);function re(e,t){return i(t)}function ie(e,t,n){if(!(n.length<3))return Y(t)||w(t)||i(t)||W(t)&&s(n[n.length-3])}function se(e,t){return ne(e,t)||te(e,t)}function oe(e,t,n){return Ce(n,3)}function ae(e,t,n){return!e.async&&Ce(n,1)}function le(e,t){if("**"===e.operator&&c(t,{operator:"**"}))return t.left===e;if(te(e,t))return!0;if(ne(e,t)||X(t)||a(t))return!0;if(l(t)){const n=t.operator,r=ee[n],i=e.operator,s=ee[i];if(r===s&&t.right===e&&!P(t)||r>s)return!0}}function ce(e,t){return i(t)||k(t)||w(t)||Y(t)}function ue(e,t){return A(t,{objectType:e})}function pe(){return!0}function he(){return!0}function de(e,t){return F(t)||K(t)||U(t)||H(t)||G(t)}function fe(e,t){return F(t)||K(t)}function me(e,t){return(p(t)||I(t)||O(t)||j(t))&&!!t.typeParameters}function ye(e,t){return"in"===e.operator&&(J(t)||E(t))}function ge(e,t){return!(T(t)||z(t)||M(t)||_(t)&&t.test===e||Q(t)&&t.test===e||v(t)&&t.right===e||L(t)&&t.discriminant===e||b(t)&&t.expression===e)}function be(e,t){return l(t)||X(t)||ne(e,t)||a(t)&&Z(e)||m(t)&&e===t.test||te(e,t)}function Ee(e,t,n){return Ce(n,5)}function ve(e,t){return ne(e,t)||c(t,{operator:"**",left:e})||te(e,t)}function Se(e,t,n){return Ce(n,5)}function Te(e,t){return y(t)||xe(e,t)}function xe(e,t){return!!(X(t)||l(t)||m(t,{test:e})||a(t)||$(t)||B(t))||ve(e,t)}function _e(e,t){return p(t,{callee:e})||C(t,{object:e})}function Ae(e,t){return!!D(e.left)||xe(e,t)}function we(e,t){switch(e.operator){case"||":return!!P(t)&&("??"===t.operator||"&&"===t.operator);case"&&":return P(t,{operator:"??"});case"??":return P(t)&&"??"!==t.operator}}function Pe(e,t,n){var r;if(null!=(r=e.extra)&&r.parenthesized&&o(t,{left:e})&&(x(t.right)||d(t.right))&&null==t.right.id)return!0;if("let"===e.name){const r=C(t,{object:e,computed:!0})||N(t,{object:e,computed:!0,optional:!1});return Ce(n,r?57:32)}return"async"===e.name&&S(t)&&e===t.left}function Ce(e,t){const n=1&t,r=2&t,i=4&t,a=8&t,c=16&t,p=32&t;let h=e.length-1;if(h<=0)return;let d=e[h];h--;let m=e[h];while(h>=0){if(n&&b(m,{expression:d})||i&&g(m,{declaration:d})||r&&s(m,{body:d})||a&&T(m,{init:d})||c&&v(m,{left:d})||p&&S(m,{left:d}))return!0;if(!(h>0&&(ne(d,m)&&!O(m)||R(m)&&m.expressions[0]===d||u(m)&&!m.prefix||f(m,{test:d})||l(m,{left:d})||o(m,{left:d}))))return!1;d=m,h--,m=e[h]}return!1}},72949:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nodes=void 0;var r=n(51693);const{FLIPPED_ALIAS_KEYS:i,isArrayExpression:s,isAssignmentExpression:o,isBinary:a,isBlockStatement:l,isCallExpression:c,isFunction:u,isIdentifier:p,isLiteral:h,isMemberExpression:d,isObjectExpression:f,isOptionalCallExpression:m,isOptionalMemberExpression:y,isStringLiteral:g}=r;var b={before:1,after:2};function E(e,t){return e?(d(e)||y(e)?(E(e.object,t),e.computed&&E(e.property,t)):a(e)||o(e)?(E(e.left,t),E(e.right,t)):c(e)||m(e)?(t.hasCall=!0,E(e.callee,t)):u(e)?t.hasFunction=!0:p(e)&&(t.hasHelper=t.hasHelper||e.callee&&S(e.callee)),t):t}function v(e){return E(e,{hasCall:!1,hasFunction:!1,hasHelper:!1})}function S(e){return!!e&&(d(e)?S(e.object)||S(e.property):p(e)?"require"===e.name||95===e.name.charCodeAt(0):c(e)?S(e.callee):!(!a(e)&&!o(e))&&(p(e.left)&&S(e.left)||S(e.right)))}function T(e){return h(e)||f(e)||s(e)||p(e)||d(e)}const x={AssignmentExpression(e){const t=v(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return t.hasFunction?b.before|b.after:b.after},SwitchCase(e,t){return(e.consequent.length||t.cases[0]===e?b.before:0)|(e.consequent.length||t.cases[t.cases.length-1]!==e?0:b.after)},LogicalExpression(e){if(u(e.left)||u(e.right))return b.after},Literal(e){if(g(e)&&"use strict"===e.value)return b.after},CallExpression(e){if(u(e.callee)||S(e))return b.before|b.after},OptionalCallExpression(e){if(u(e.callee))return b.before|b.after},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const n=e.declarations[t];let r=S(n.id)&&!T(n.init);if(!r&&n.init){const e=v(n.init);r=S(n.init)&&e.hasCall||e.hasFunction}if(r)return b.before|b.after}},IfStatement(e){if(l(e.consequent))return b.before|b.after}};t.nodes=x,x.ObjectProperty=x.ObjectTypeProperty=x.ObjectMethod=function(e,t){if(t.properties[0]===e)return b.before},x.ObjectTypeCallProperty=function(e,t){var n;if(t.callProperties[0]===e&&(null==(n=t.properties)||!n.length))return b.before},x.ObjectTypeIndexer=function(e,t){var n,r;if(t.indexers[0]===e&&(null==(n=t.properties)||!n.length)&&(null==(r=t.callProperties)||!r.length))return b.before},x.ObjectTypeInternalSlot=function(e,t){var n,r,i;if(t.internalSlots[0]===e&&(null==(n=t.properties)||!n.length)&&(null==(r=t.callProperties)||!r.length)&&(null==(i=t.indexers)||!i.length))return b.before},[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach((function([e,t]){[e].concat(i[e]||[]).forEach((function(e){const n=t?b.before|b.after:0;x[e]=()=>n}))}))},9425:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(87396),i=n(52362),s=n(51693),o=n(21912);const{isProgram:a,isFile:l,isEmptyStatement:c}=s,u=/e/i,p=/\.0+$/,h=/^0[box]/,d=/^\s*[@#]__PURE__\s*$/,{needsParens:f,needsWhitespaceAfter:m,needsWhitespaceBefore:y}=i;class g{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._indentChar=0,this._indentRepeat=0,this._insideAux=!1,this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new Set,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e,this._buf=new r.default(t),this._indentChar=e.indent.style.charCodeAt(0),this._indentRepeat=e.indent.style.length}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),e?this._appendChar(59):this._queue(59)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.tokenChar(125)}space(e=!1){if(!this.format.compact)if(e)this._space();else if(this._buf.hasContent()){const e=this.getLastChar();32!==e&&10!==e&&this._space()}}word(e){(this._endsWithWord||47===e.charCodeAt(0)&&this.endsWith(47))&&this._space(),this._maybeAddAuxComment(),this._append(e,!1),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=Number.isInteger(+e)&&!h.test(e)&&!u.test(e)&&!p.test(e)&&46!==e.charCodeAt(e.length-1)}token(e,t=!1){const n=this.getLastChar(),r=e.charCodeAt(0);(33===n&&"--"===e||43===r&&43===n||45===r&&45===n||46===r&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e,t)}tokenChar(e){const t=this.getLastChar();(43===e&&43===t||45===e&&45===t||46===e&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._appendChar(e)}newline(e=1){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();const t=this.endsWithCharAndNewline();if(10!==t&&(123!==t&&58!==t||e--,!(e<=0)))for(let n=0;n<e;n++)this._newline()}endsWith(e){return this.getLastChar()===e}getLastChar(){return this._buf.getLastChar()}endsWithCharAndNewline(){return this._buf.endsWithCharAndNewline()}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,n){this._catchUp(e,t),this._buf.withSource(e,t,n)}_space(){this._queue(32)}_newline(){this._queue(10)}_append(e,t){this._maybeAddParen(e),this._maybeIndent(e.charCodeAt(0)),this._buf.append(e,t),this._endsWithWord=!1,this._endsWithInteger=!1}_appendChar(e){this._maybeAddParenChar(e),this._maybeIndent(e),this._buf.appendChar(e),this._endsWithWord=!1,this._endsWithInteger=!1}_queue(e){this._maybeAddParenChar(e),this._maybeIndent(e),this._buf.queue(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&10!==e&&this.endsWith(10)&&this._buf.queueIndentation(this._indentChar,this._getIndent())}_maybeAddParenChar(e){const t=this._parenPushNewlineState;t&&32!==e&&(10===e?(this.tokenChar(40),this.indent(),t.printed=!0):this._parenPushNewlineState=null)}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;const n=e.length;let r;for(r=0;r<n&&32===e.charCodeAt(r);r++)continue;if(r===n)return;const i=e.charCodeAt(r);if(10!==i){if(47!==i||r+1===n)return void(this._parenPushNewlineState=null);const t=e.charCodeAt(r+1);if(42===t){if(d.test(e.slice(r+2,n-2)))return}else if(47!==t)return void(this._parenPushNewlineState=null)}this.tokenChar(40),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const n=t?t[e]:null;if(null!=(null==n?void 0:n.line)){const e=n.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return this._indentRepeat*this._indent}printTerminatorless(e,t,n){if(n)this._noLineTerminator=!0,this.print(e,t),this._noLineTerminator=!1;else{const n={printed:!1};this._parenPushNewlineState=n,this.print(e,t),n.printed&&(this.dedent(),this.newline(),this.tokenChar(41))}}print(e,t){if(!e)return;const n=this.format.concise;e._compact&&(this.format.concise=!0);const r=this[e.type];if(!r)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const i=this._insideAux;let s;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!i),s=!!(this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized)||f(e,t,this._printStack),s&&this.tokenChar(40),this._printLeadingComments(e);const o=a(e)||l(e)?null:e.loc;this.withSource("start",o,r.bind(this,e,t)),this._printTrailingComments(e),s&&this.tokenChar(41),this._printStack.pop(),this.format.concise=n,this._insideAux=i}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,n={}){if(null==e||!e.length)return;n.indent&&this.indent();const r={addNewlines:n.addNewlines},i=e.length;for(let s=0;s<i;s++){const o=e[s];o&&(n.statement&&this._printNewline(!0,o,t,r),this.print(o,t),n.iterator&&n.iterator(o,s),n.separator&&s<i-1&&n.separator.call(this),n.statement&&this._printNewline(!1,o,t,r))}n.indent&&this.dedent()}printAndIndentOnComments(e,t){const n=e.leadingComments&&e.leadingComments.length>0;n&&this.indent(),this.print(e,t),n&&this.dedent()}printBlock(e){const t=e.body;c(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,t=!0){var n;null!=(n=e.innerComments)&&n.length&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,n={}){return n.statement=!0,this.printJoin(e,t,n)}printList(e,t,n={}){return null==n.separator&&(n.separator=E),this.printJoin(e,t,n)}_printNewline(e,t,n,r){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let i=0;if(this._buf.hasContent()){e||i++,r.addNewlines&&(i+=r.addNewlines(e,t)||0);const s=e?y:m;s(t,n)&&i++}this.newline(Math.min(2,i))}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||null}_printComment(e,t){if(e.ignore)return;if(this._printedComments.has(e))return;if(!this.format.shouldPrintComment(e.value))return;this._printedComments.add(e);const n="CommentBlock"===e.type,r=n&&!t&&!this._noLineTerminator;r&&this._buf.hasContent()&&this.newline(1);const i=this.getLastChar();let s;91!==i&&123!==i&&this.space();let o=!1;if(n){if(s=`/*${e.value}*/`,this.format.indent.adjustMultilineComment){var a;const t=null==(a=e.loc)?void 0:a.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");s=s.replace(e,"\n")}const n=Math.max(this._getIndent(),this.format.retainLines?0:this._buf.getCurrentColumn());s=s.replace(/\n(?!$)/g,`\n${" ".repeat(n)}`),o=!0}}else this._noLineTerminator||(s=`//${e.value}\n`,o=!0);this.endsWith(47)&&this._space(),this.withSource("start",e.loc,this._append.bind(this,s,o)),r&&this.newline(1)}_printComments(e,t){if(null!=e&&e.length)if(t&&1===e.length&&d.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith(10));else for(const n of e)this._printComment(n)}printAssertions(e){var t;null!=(t=e.assertions)&&t.length&&(this.space(),this.word("assert"),this.space(),this.tokenChar(123),this.space(),this.printList(e.assertions,e),this.space(),this.tokenChar(125))}}Object.assign(g.prototype,o),g.prototype.Noop=function(){};var b=g;function E(){this.tokenChar(44),this.space()}t["default"]=b},65224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(17689);class i{constructor(e,t){var n;this._map=void 0,this._rawMappings=void 0,this._sourceFileName=void 0,this._lastGenLine=0,this._lastSourceLine=0,this._lastSourceColumn=0;const i=this._map=new r.GenMapping({sourceRoot:e.sourceRoot});this._sourceFileName=null==(n=e.sourceFileName)?void 0:n.replace(/\\/g,"/"),this._rawMappings=void 0,"string"===typeof t?(0,r.setSourceContent)(i,this._sourceFileName,t):"object"===typeof t&&Object.keys(t).forEach((e=>{(0,r.setSourceContent)(i,e.replace(/\\/g,"/"),t[e])}))}get(){return(0,r.toEncodedMap)(this._map)}getDecoded(){return(0,r.toDecodedMap)(this._map)}getRawMappings(){return this._rawMappings||(this._rawMappings=(0,r.allMappings)(this._map))}mark(e,t,n,i,s){this._rawMappings=void 0,(0,r.maybeAddMapping)(this._map,{name:i,generated:e,source:null==t?void 0:(null==s?void 0:s.replace(/\\/g,"/"))||this._sourceFileName,original:null==t?void 0:{line:t,column:n}})}}t["default"]=i},12642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInclusionReasons=o;var r=n(95218),i=n(32461),s=n(94186);function o(e,t,n){const o=n[e]||{};return Object.keys(t).reduce(((e,n)=>{const a=(0,s.getLowestImplementedVersion)(o,n),l=t[n];if(a){const t=(0,s.isUnreleasedVersion)(a,n),o=(0,s.isUnreleasedVersion)(l,n);o||!t&&!r.lt(l.toString(),(0,s.semverify)(a))||(e[n]=(0,i.prettifyVersion)(l))}else e[n]=(0,i.prettifyVersion)(l);return e}),{})}},71433:function(e,t,n){"use strict";n(21703),n(26699),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l,t.isRequired=a,t.targetsSupported=o;var r=n(95218),i=n(18987),s=n(94186);function o(e,t){const n=Object.keys(e);if(0===n.length)return!1;const i=n.filter((n=>{const i=(0,s.getLowestImplementedVersion)(t,n);if(!i)return!0;const o=e[n];if((0,s.isUnreleasedVersion)(o,n))return!1;if((0,s.isUnreleasedVersion)(i,n))return!0;if(!r.valid(o.toString()))throw new Error(`Invalid version passed for target "${n}": "${o}". Versions must be in semver format (major.minor.patch)`);return r.gt((0,s.semverify)(i),o.toString())}));return 0===i.length}function a(e,t,{compatData:n=i,includes:r,excludes:s}={}){return(null==s||!s.has(e))&&(!(null==r||!r.has(e))||!o(t,n[e]))}function l(e,t,n,r,i,s,o){const l=new Set,c={compatData:e,includes:t,excludes:n};for(const u in e)if(a(u,r,c))l.add(u);else if(o){const e=o.get(u);e&&l.add(e)}return i&&i.forEach((e=>!n.has(e)&&l.add(e))),s&&s.forEach((e=>!t.has(e)&&l.delete(e))),l}},38994:function(e,t,n){"use strict";var r=n(15941),i=n(96027);n(21703),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TargetNames",{enumerable:!0,get:function(){return u.TargetNames}}),t["default"]=w,Object.defineProperty(t,"filterItems",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"getInclusionReasons",{enumerable:!0,get:function(){return h.getInclusionReasons}}),t.isBrowsersQueryValid=g,Object.defineProperty(t,"isRequired",{enumerable:!0,get:function(){return d.isRequired}}),Object.defineProperty(t,"prettifyTargets",{enumerable:!0,get:function(){return p.prettifyTargets}}),Object.defineProperty(t,"unreleasedLabels",{enumerable:!0,get:function(){return c.unreleasedLabels}});var s=n(20992),o=n(61794),a=n(70039),l=n(94186),c=n(14475),u=n(9587),p=n(32461),h=n(12642),d=n(71433);const f=a["es6.module"],m=new o.OptionValidator("@babel/helper-compilation-targets");function y(e){const t=Object.keys(u.TargetNames);for(const n of Object.keys(e))if(!(n in u.TargetNames))throw new Error(m.formatMessage(`'${n}' is not a valid target\n- Did you mean '${(0,o.findSuggestion)(n,t)}'?`));return e}function g(e){return"string"===typeof e||Array.isArray(e)&&e.every((e=>"string"===typeof e))}function b(e){return m.invariant(void 0===e||g(e),`'${String(e)}' is not a valid browserslist query`),e}function E(e){return e.reduce(((e,t)=>{const[n,r]=t.split(" "),i=c.browserNameMap[n];if(!i)return e;try{const t=r.split("-")[0].toLowerCase(),n=(0,l.isUnreleasedVersion)(t,i);if(!e[i])return e[i]=n?t:(0,l.semverify)(t),e;const s=e[i],o=(0,l.isUnreleasedVersion)(s,i);if(o&&n)e[i]=(0,l.getLowestUnreleased)(s,t,i);else if(o)e[i]=(0,l.semverify)(t);else if(!o&&!n){const n=(0,l.semverify)(t);e[i]=(0,l.semverMin)(s,n)}}catch(s){}return e}),{})}function v(e){e.length&&(r.warn("Warning, the following targets are using a decimal version:\n"),e.forEach((({target:e,value:t})=>r.warn(`  ${e}: ${t}`))),r.warn("\nWe recommend using a string for minor/patch versions to avoid numbers like 6.10\ngetting parsed as 6.1, which can lead to unexpected behavior.\n"))}function S(e,t){try{return(0,l.semverify)(t)}catch(n){throw new Error(m.formatMessage(`'${t}' is not a valid value for 'targets.${e}'.`))}}function T(e){const t=!0===e||"current"===e?i.versions.node:S("node",e);return["node",t]}function x(e,t){const n=(0,l.isUnreleasedVersion)(t,e)?t.toLowerCase():S(e,t);return[e,n]}function _(e){const t=Object.assign({},e);return delete t.esmodules,delete t.browsers,t}function A(e,t){const n=s(e,{mobileToDesktop:!0,env:t});return E(n)}function w(e={},t={}){var n,r;let{browsers:i,esmodules:o}=e;const{configPath:a="."}=t;b(i);const c=_(e);let u=y(c);const p=!!i,h=p||Object.keys(u).length>0,d=!t.ignoreBrowserslistConfig&&!h;if(!i&&d&&(i=s.loadConfig({config:t.configFile,path:a,env:t.browserslistEnv}),null==i&&(i=[])),!o||"intersect"===o&&null!=(n=i)&&n.length||(i=Object.keys(f).map((e=>`${e} >= ${f[e]}`)).join(", "),o=!1),null!=(r=i)&&r.length){const e=A(i,t.browserslistEnv);if("intersect"===o)for(const t of Object.keys(e)){const n=e[t],r=f[t];r?e[t]=(0,l.getHighestUnreleased)(n,(0,l.semverify)(r),t):delete e[t]}u=Object.assign(e,u)}const m={},g=[];for(const s of Object.keys(u).sort()){const e=u[s];"number"===typeof e&&e%1!==0&&g.push({target:s,value:e});const[t,n]="node"===s?T(e):x(s,e);n&&(m[t]=n)}return v(g),m}},9587:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TargetNames=void 0;const n={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung",rhino:"rhino"};t.TargetNames=n},32461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prettifyTargets=o,t.prettifyVersion=s;var r=n(95218),i=n(14475);function s(e){if("string"!==typeof e)return e;const t=[r.major(e)],n=r.minor(e),i=r.patch(e);return(n||i)&&t.push(n),i&&t.push(i),t.join(".")}function o(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];const o=i.unreleasedLabels[n];return"string"===typeof r&&o!==r&&(r=s(r)),t[n]=r,t}),{})}},14475:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unreleasedLabels=t.browserNameMap=void 0;const n={safari:"tp"};t.unreleasedLabels=n;const r={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"};t.browserNameMap=r},94186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getHighestUnreleased=h,t.getLowestImplementedVersion=d,t.getLowestUnreleased=p,t.isUnreleasedVersion=u,t.semverMin=l,t.semverify=c;var r=n(95218),i=n(61794),s=n(14475);const o=/^(\d+|\d+.\d+)$/,a=new i.OptionValidator("@babel/helper-compilation-targets");function l(e,t){return e&&r.lt(e,t)?e:t}function c(e){if("string"===typeof e&&r.valid(e))return e;a.invariant("number"===typeof e||"string"===typeof e&&o.test(e),`'${e}' is not a valid version`);const t=e.toString().split(".");while(t.length<3)t.push("0");return t.join(".")}function u(e,t){const n=s.unreleasedLabels[t];return!!n&&n===e.toString().toLowerCase()}function p(e,t,n){const r=s.unreleasedLabels[n];return e===r?t:t===r?e:l(e,t)}function h(e,t,n){return p(e,t,n)===e?t:e}function d(e,t){const n=e[t];return n||"android"!==t?n:e.chrome}},82407:function(e,t){"use strict";function n(e){e.skip(),e.node.computed&&e.context.maybeQueue(e.get("key"))}function r(e){const{context:t,node:n}=e;if(n.computed&&t.maybeQueue(e.get("key")),n.decorators)for(const r of e.get("decorators"))t.maybeQueue(r)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0,t.requeueComputedKeyAndDecorators=r,t.skipAllButComputedKey=n;const i={FunctionParent(e){e.isArrowFunctionExpression()||(e.skip(),e.isMethod()&&r(e))},Property(e){e.isObjectProperty()||(e.skip(),r(e))}};var s=i;t["default"]=s},83151:function(e,t,n){"use strict";n(92087),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=C;var r=n(72332),i=n(51693);const{NOT_LOCAL_BINDING:s,cloneNode:o,identifier:a,isAssignmentExpression:l,isAssignmentPattern:c,isFunction:u,isIdentifier:p,isLiteral:h,isNullLiteral:d,isObjectMethod:f,isObjectProperty:m,isRegExpLiteral:y,isRestElement:g,isTemplateLiteral:b,isVariableDeclarator:E,toBindingIdentifierName:v}=i;function S(e){const t=e.params.findIndex((e=>c(e)||g(e)));return-1===t?e.params.length:t}const T=r.default.statement("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),x=r.default.statement("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),_={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;const n=e.scope.getBindingIdentifier(t.name);n===t.outerDeclar&&(t.selfReference=!0,e.stop())}};function A(e){return d(e)?"null":y(e)?`_${e.pattern}_${e.flags}`:b(e)?e.quasis.map((e=>e.value.raw)).join(""):void 0!==e.value?e.value+"":""}function w(e,t,n,r){if(e.selfReference){if(!r.hasBinding(n.name)||r.hasGlobal(n.name)){if(!u(t))return;let e=T;t.generator&&(e=x);const i=e({FUNCTION:t,FUNCTION_ID:n,FUNCTION_KEY:r.generateUidIdentifier(n.name)}).expression,s=i.callee.body.body[0].params;for(let n=0,o=S(t);n<o;n++)s.push(r.generateUidIdentifier("x"));return i}r.rename(n.name)}t.id=n,r.getProgramParent().references[n.name]=!0}function P(e,t,n){const r={selfAssignment:!1,selfReference:!1,outerDeclar:n.getBindingIdentifier(t),name:t},i=n.getOwnBinding(t);return i?"param"===i.kind&&(r.selfReference=!0):(r.outerDeclar||n.hasGlobal(t))&&n.traverse(e,_,r),r}function C({node:e,parent:t,scope:n,id:r},i=!1,c=!1){if(e.id)return;if(!m(t)&&!f(t,{kind:"method"})||t.computed&&!h(t.key)){if(E(t)){if(r=t.id,p(r)&&!i){const t=n.parent.getBinding(r.name);if(t&&t.constant&&n.getBinding(r.name)===t)return e.id=o(r),void(e.id[s]=!0)}}else if(l(t,{operator:"="}))r=t.left;else if(!r)return}else r=t.key;let d;if(r&&h(r)?d=A(r):r&&p(r)&&(d=r.name),void 0===d)return;if(!c&&u(e)&&/[\uD800-\uDFFF]/.test(d))return;d=v(d);const y=a(d);y[s]=!0;const g=P(e,d,n);return w(g,e,y,n)||e}},64532:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l;var r=n(51693);const{assignmentExpression:i,expressionStatement:s,identifier:o}=r,a={Scope(e,t){"let"===t.kind&&e.skip()},FunctionParent(e){e.skip()},VariableDeclaration(e,t){if(t.kind&&e.node.kind!==t.kind)return;const n=[],r=e.get("declarations");let a;for(const l of r){a=l.node.id,l.node.init&&n.push(s(i("=",l.node.id,l.node.init)));for(const e of Object.keys(l.getBindingIdentifiers()))t.emit(o(e),e,null!==l.node.init)}e.parentPath.isFor({left:e.node})?e.replaceWith(a):e.replaceWithMultiple(n)}};function l(e,t,n="var"){e.traverse(a,{kind:n,emit:t})}},50999:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(75130),i=n(51693);const{callExpression:s,cloneNode:o,expressionStatement:a,identifier:l,importDeclaration:c,importDefaultSpecifier:u,importNamespaceSpecifier:p,importSpecifier:h,memberExpression:d,stringLiteral:f,variableDeclaration:m,variableDeclarator:y}=i;class g{constructor(e,t,n){this._statements=[],this._resultName=null,this._importedSource=void 0,this._scope=t,this._hub=n,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(c([],f(this._importedSource))),this}require(){return this._statements.push(a(s(l("require"),[f(this._importedSource)]))),this}namespace(e="namespace"){const t=this._scope.generateUidIdentifier(e),n=this._statements[this._statements.length-1];return r("ImportDeclaration"===n.type),r(0===n.specifiers.length),n.specifiers=[p(t)],this._resultName=o(t),this}default(e){const t=this._scope.generateUidIdentifier(e),n=this._statements[this._statements.length-1];return r("ImportDeclaration"===n.type),r(0===n.specifiers.length),n.specifiers=[u(t)],this._resultName=o(t),this}named(e,t){if("default"===t)return this.default(e);const n=this._scope.generateUidIdentifier(e),i=this._statements[this._statements.length-1];return r("ImportDeclaration"===i.type),r(0===i.specifiers.length),i.specifiers=[h(n,l(t))],this._resultName=o(n),this}var(e){const t=this._scope.generateUidIdentifier(e);let n=this._statements[this._statements.length-1];return"ExpressionStatement"!==n.type&&(r(this._resultName),n=a(this._resultName),this._statements.push(n)),this._statements[this._statements.length-1]=m("var",[y(t,n.expression)]),this._resultName=o(t),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=s(e,[t.expression]):"VariableDeclaration"===t.type?(r(1===t.declarations.length),t.declarations[0].init=s(e,[t.declarations[0].init])):r.fail("Unexpected type."),this}prop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=d(t.expression,l(e)):"VariableDeclaration"===t.type?(r(1===t.declarations.length),t.declarations[0].init=d(t.declarations[0].init,l(e))):r.fail("Unexpected type:"+t.type),this}read(e){this._resultName=d(this._resultName,l(e))}}t["default"]=g},19009:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(75130),i=n(51693),s=n(50999),o=n(57729);const{numericLiteral:a,sequenceExpression:l}=i;class c{constructor(e,t,n){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1,importPosition:"before"};const r=e.find((e=>e.isProgram()));this._programPath=r,this._programScope=r.scope,this._hub=r.hub,this._defaultOpts=this._applyDefaults(t,n,!0)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,n){return r("string"===typeof e),this._generateImport(this._applyDefaults(t,n),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),void 0)}_applyDefaults(e,t,n=!1){let i;return"string"===typeof e?i=Object.assign({},this._defaultOpts,{importedSource:e},t):(r(!t,"Unexpected secondary arguments."),i=Object.assign({},this._defaultOpts,e)),!n&&t&&(void 0!==t.nameHint&&(i.nameHint=t.nameHint),void 0!==t.blockHoist&&(i.blockHoist=t.blockHoist)),i}_generateImport(e,t){const n="default"===t,r=!!t&&!n,i=null===t,{importedSource:c,importedType:u,importedInterop:p,importingInterop:h,ensureLiveReference:d,ensureNoContext:f,nameHint:m,importPosition:y,blockHoist:g}=e;let b=m||t;const E=(0,o.default)(this._programPath),v=E&&"node"===h,S=E&&"babel"===h;if("after"===y&&!E)throw new Error('"importPosition": "after" is only supported in modules');const T=new s.default(c,this._programScope,this._hub);if("es6"===u){if(!v&&!S)throw new Error("Cannot import an ES6 module from CommonJS");T.import(),i?T.namespace(m||c):(n||r)&&T.named(b,t)}else{if("commonjs"!==u)throw new Error(`Unexpected interopType "${u}"`);if("babel"===p)if(v){b="default"!==b?b:c;const e=`${c}$es6Default`;T.import(),i?T.default(e).var(b||c).wildcardInterop():n?d?T.default(e).var(b||c).defaultInterop().read("default"):T.default(e).var(b).defaultInterop().prop(t):r&&T.default(e).read(t)}else S?(T.import(),i?T.namespace(b||c):(n||r)&&T.named(b,t)):(T.require(),i?T.var(b||c).wildcardInterop():(n||r)&&d?n?(b="default"!==b?b:c,T.var(b).read(t),T.defaultInterop()):T.var(c).read(t):n?T.var(b).defaultInterop().prop(t):r&&T.var(b).prop(t));else if("compiled"===p)v?(T.import(),i?T.default(b||c):(n||r)&&T.default(c).read(b)):S?(T.import(),i?T.namespace(b||c):(n||r)&&T.named(b,t)):(T.require(),i?T.var(b||c):(n||r)&&(d?T.var(c).read(b):T.prop(t).var(b)));else{if("uncompiled"!==p)throw new Error(`Unknown importedInterop "${p}".`);if(n&&d)throw new Error("No live reference for commonjs default");v?(T.import(),i?T.default(b||c):n?T.default(b):r&&T.default(c).read(b)):S?(T.import(),i?T.default(b||c):n?T.default(b):r&&T.named(b,t)):(T.require(),i?T.var(b||c):n?T.var(b):r&&(d?T.var(c).read(b):T.var(b).prop(t)))}}const{statements:x,resultName:_}=T.done();return this._insertStatements(x,y,g),(n||r)&&f&&"Identifier"!==_.type?l([a(0),_]):_}_insertStatements(e,t="before",n=3){const r=this._programPath.get("body");if("after"===t){for(let i=r.length-1;i>=0;i--)if(r[i].isImportDeclaration())return void r[i].insertAfter(e)}else{e.forEach((e=>{e._blockHoist=n}));const t=r.find((e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4}));if(t)return void t.insertBefore(e)}this._programPath.unshiftContainer("body",e)}}t["default"]=c},75440:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImportInjector",{enumerable:!0,get:function(){return r.default}}),t.addDefault=s,t.addNamed=o,t.addNamespace=a,t.addSideEffect=l,Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return i.default}});var r=n(19009),i=n(57729);function s(e,t,n){return new r.default(e).addDefault(t,n)}function o(e,t,n,i){return new r.default(e).addNamed(t,n,i)}function a(e,t,n){return new r.default(e).addNamespace(t,n)}function l(e,t,n){return new r.default(e).addSideEffect(t,n)}},57729:function(e,t){"use strict";function n(e){const{sourceType:t}=e.node;if("module"!==t&&"script"!==t)throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);return"module"===e.node.sourceType}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},23576:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;{const e=n;t["default"]=n=function(t,n){var r,i,s,o;return e(t,{moduleId:null!=(r=n.moduleId)?r:t.moduleId,moduleIds:null!=(i=n.moduleIds)?i:t.moduleIds,getModuleId:null!=(s=n.getModuleId)?s:t.getModuleId,moduleRoot:null!=(o=n.moduleRoot)?o:t.moduleRoot})}}function n(e,t){const{filename:n,filenameRelative:r=n,sourceRoot:i=t.moduleRoot}=e,{moduleId:s,moduleIds:o=!!s,getModuleId:a,moduleRoot:l=i}=t;if(!o)return null;if(null!=s&&!a)return s;let c=null!=l?l+"/":"";if(r){const e=null!=i?new RegExp("^"+i+"/?"):"";c+=r.replace(e,"").replace(/\.(\w*?)$/,"")}return c=c.replace(/\\/g,"/"),a&&a(c)||c}},64220:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.buildNamespaceInitStatements=P,t.ensureStatementsHoisted=A,Object.defineProperty(t,"getModuleName",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"hasExports",{enumerable:!0,get:function(){return c.hasExports}}),Object.defineProperty(t,"isModule",{enumerable:!0,get:function(){return o.isModule}}),Object.defineProperty(t,"isSideEffectImport",{enumerable:!0,get:function(){return c.isSideEffectImport}}),t.rewriteModuleStatementsAndPrepareHeader=_,Object.defineProperty(t,"rewriteThis",{enumerable:!0,get:function(){return a.default}}),t.wrapInterop=w;var r=n(75130),i=n(51693),s=n(72332),o=n(75440),a=n(18349),l=n(46865),c=n(48110),u=n(23576);const{booleanLiteral:p,callExpression:h,cloneNode:d,directive:f,directiveLiteral:m,expressionStatement:y,identifier:g,isIdentifier:b,memberExpression:E,stringLiteral:v,valueToNode:S,variableDeclaration:T,variableDeclarator:x}=i;function _(e,{loose:t,exportName:n,strict:i,allowTopLevelThis:s,strictMode:u,noInterop:p,importInterop:h=(p?"none":"babel"),lazy:d,esNamespaceOnly:y,filename:g,constantReexports:b=t,enumerableModuleMeta:E=t,noIncompleteNsImportDetection:v}){(0,c.validateImportInteropOption)(h),r((0,o.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const S=(0,c.default)(e,n,{importInterop:h,initializeReexports:b,lazy:d,esNamespaceOnly:y,filename:g});if(s||(0,a.default)(e),(0,l.default)(e,S),!1!==u){const t=e.node.directives.some((e=>"use strict"===e.value.value));t||e.unshiftContainer("directives",f(m("use strict")))}const T=[];(0,c.hasExports)(S)&&!i&&T.push(k(S,E));const x=I(e,S);return x&&(S.exportNameListName=x.name,T.push(x.statement)),T.push(...N(e,S,b,v)),{meta:S,headers:T}}function A(e){e.forEach((e=>{e._blockHoist=3}))}function w(e,t,n){if("none"===n)return null;if("node-namespace"===n)return h(e.hub.addHelper("interopRequireWildcard"),[t,p(!0)]);if("node-default"===n)return null;let r;if("default"===n)r="interopRequireDefault";else{if("namespace"!==n)throw new Error(`Unknown interop: ${n}`);r="interopRequireWildcard"}return h(e.hub.addHelper(r),[t])}function P(e,t,n=!1){const r=[];let i=g(t.name);t.lazy&&(i=h(i,[]));for(const o of t.importsNamespace)o!==t.name&&r.push(s.default.statement`var NAME = SOURCE;`({NAME:o,SOURCE:d(i)}));n&&r.push(...O(e,t,!0));for(const o of t.reexportNamespace)r.push((t.lazy?s.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:s.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:o,NAMESPACE:d(i)}));if(t.reexportAll){const s=D(e,d(i),n);s.loc=t.reexportAll.loc,r.push(s)}return r}const C={constant:s.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,constantComputed:s.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:s.default.statement`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `},O=(e,t,n)=>{const r=t.lazy?h(g(t.name),[]):g(t.name),{stringSpecifiers:i}=e;return Array.from(t.reexports,(([s,o])=>{let a=d(r);"default"===o&&"node-default"===t.interop||(a=i.has(o)?E(a,v(o),!0):E(a,g(o)));const l={EXPORTS:e.exportName,EXPORT_NAME:s,NAMESPACE_IMPORT:a};return n||b(a)?i.has(s)?C.constantComputed(l):C.constant(l):C.spec(l)}))};function k(e,t=!1){return(t?s.default.statement`
        EXPORTS.__esModule = true;
      `:s.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}function D(e,t,n){return(n?s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?s.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}function I(e,t){const n=Object.create(null);for(const s of t.local.values())for(const e of s.names)n[e]=!0;let r=!1;for(const s of t.source.values()){for(const e of s.reexports.keys())n[e]=!0;for(const e of s.reexportNamespace)n[e]=!0;r=r||!!s.reexportAll}if(!r||0===Object.keys(n).length)return null;const i=e.scope.generateUidIdentifier("exportNames");return delete n.default,{name:i.name,statement:T("var",[x(i,S(n))])}}function N(e,t,n=!1,r=!1){const i=[];for(const[o,a]of t.local)if("import"===a.kind);else if("hoisted"===a.kind)i.push([a.names[0],R(t,a.names,g(o))]);else if(!r)for(const e of a.names)i.push([e,null]);for(const o of t.source.values()){if(!n){const e=O(t,o,!1),n=[...o.reexports.keys()];for(let t=0;t<e.length;t++)i.push([n[t],e[t]])}if(!r)for(const e of o.reexportNamespace)i.push([e,null])}i.sort((([e],[t])=>e<t?-1:t<e?1:0));const s=[];if(r)for(const[,o]of i)s.push(o);else{const n=100;for(let r=0;r<i.length;r+=n){let o=[];for(let a=0;a<n&&r+a<i.length;a++){const[n,l]=i[r+a];null!==l?(o.length>0&&(s.push(R(t,o,e.scope.buildUndefinedNode())),o=[]),s.push(l)):o.push(n)}o.length>0&&s.push(R(t,o,e.scope.buildUndefinedNode()))}}return s}const M={computed:s.default.expression`EXPORTS["NAME"] = VALUE`,default:s.default.expression`EXPORTS.NAME = VALUE`};function R(e,t,n){const{stringSpecifiers:r,exportName:i}=e;return y(t.reduce(((e,t)=>{const n={EXPORTS:i,NAME:t,VALUE:e};return r.has(t)?M.computed(n):M.default(n)}),n))}},48110:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u,t.hasExports=o,t.isSideEffectImport=a,t.validateImportInteropOption=l;var r=n(86554),i=n(84605),s=n(38167);function o(e){return e.hasExports}function a(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}function l(e){if("function"!==typeof e&&"none"!==e&&"babel"!==e&&"node"!==e)throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`);return e}function c(e,t,n){return"function"===typeof e?l(e(t,n)):e}function u(e,t,{importInterop:n,initializeReexports:r=!1,lazy:i=!1,esNamespaceOnly:s=!1,filename:o}){t||(t=e.scope.generateUidIdentifier("exports").name);const a=new Set;m(e);const{local:l,source:u,hasExports:p}=d(e,{initializeReexports:r,lazy:i},a);y(e);for(const[,h]of u){h.importsNamespace.size>0&&(h.name=h.importsNamespace.values().next().value);const e=c(n,h.source,o);"none"===e?h.interop="none":"node"===e&&"namespace"===h.interop?h.interop="node-namespace":"node"===e&&"default"===h.interop?h.interop="node-default":s&&"namespace"===h.interop&&(h.interop="default")}return{exportName:t,exportNameListName:null,hasExports:p,local:l,source:u,stringSpecifiers:a}}function p(e,t){if(e.isIdentifier())return e.node.name;if(e.isStringLiteral()){const n=e.node.value;return(0,i.isIdentifierName)(n)||t.add(n),n}throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`)}function h(e){if(!e.isExportSpecifier())throw e.isExportNamespaceSpecifier()?e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`."):e.buildCodeFrameError("Unexpected export specifier type")}function d(e,{lazy:t,initializeReexports:n},i){const s=f(e,n,i),o=new Map,l=t=>{const n=t.value;let i=o.get(n);return i||(i={name:e.scope.generateUidIdentifier((0,r.basename)(n,(0,r.extname)(n))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1,source:n},o.set(n,i)),i};let c=!1;e.get("body").forEach((e=>{if(e.isImportDeclaration()){const t=l(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{if(e.isImportDefaultSpecifier()){const n=e.get("local").node.name;t.imports.set(n,"default");const r=s.get(n);r&&(s.delete(n),r.names.forEach((e=>{t.reexports.set(e,"default")})))}else if(e.isImportNamespaceSpecifier()){const n=e.get("local").node.name;t.importsNamespace.add(n);const r=s.get(n);r&&(s.delete(n),r.names.forEach((e=>{t.reexportNamespace.add(e)})))}else if(e.isImportSpecifier()){const n=p(e.get("imported"),i),r=e.get("local").node.name;t.imports.set(r,n);const o=s.get(r);o&&(s.delete(r),o.names.forEach((e=>{t.reexports.set(e,n)})))}}))}else if(e.isExportAllDeclaration()){c=!0;const t=l(e.node.source);t.loc||(t.loc=e.node.loc),t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){c=!0;const t=l(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach((e=>{h(e);const n=p(e.get("local"),i),r=p(e.get("exported"),i);if(t.reexports.set(r,n),"__esModule"===r)throw e.get("exported").buildCodeFrameError('Illegal export "__esModule".')}))}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(c=!0)}));for(const r of o.values()){let e=!1,t=!1;r.importsNamespace.size>0&&(e=!0,t=!0),r.reexportAll&&(t=!0);for(const n of r.imports.values())"default"===n?e=!0:t=!0;for(const n of r.reexports.values())"default"===n?e=!0:t=!0;e&&t?r.interop="namespace":e&&(r.interop="default")}for(const[r,u]of o)if(!1!==t&&!a(u)&&!u.reexportAll)if(!0===t)u.lazy=!/\./.test(r);else if(Array.isArray(t))u.lazy=-1!==t.indexOf(r);else{if("function"!==typeof t)throw new Error(".lazy must be a boolean, string array, or function");u.lazy=t(r)}return{hasExports:c,local:s,source:o}}function f(e,t,n){const r=new Map;e.get("body").forEach((e=>{let n;if(e.isImportDeclaration())n="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(t&&e.node.source&&e.get("source").isStringLiteral())return void e.get("specifiers").forEach((e=>{h(e),r.set(e.get("local").node.name,"block")}));if(e.isFunctionDeclaration())n="hoisted";else if(e.isClassDeclaration())n="block";else if(e.isVariableDeclaration({kind:"var"}))n="var";else{if(!e.isVariableDeclaration())return;n="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach((e=>{r.set(e,n)}))}));const i=new Map,s=e=>{const t=e.node.name;let n=i.get(t);if(!n){const s=r.get(t);if(void 0===s)throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`);n={names:[],kind:s},i.set(t,n)}return n};return e.get("body").forEach((e=>{if(!e.isExportNamedDeclaration()||!t&&e.node.source){if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");s(t.get("id")).names.push("default")}}else if(e.node.declaration){const t=e.get("declaration"),n=t.getOuterBindingIdentifierPaths();Object.keys(n).forEach((e=>{if("__esModule"===e)throw t.buildCodeFrameError('Illegal export "__esModule".');s(n[e]).names.push(e)}))}else e.get("specifiers").forEach((e=>{const t=e.get("local"),r=e.get("exported"),i=s(t),o=p(r,n);if("__esModule"===o)throw r.buildCodeFrameError('Illegal export "__esModule".');i.names.push(o)}))})),i}function m(e){e.get("body").forEach((e=>{e.isExportDefaultDeclaration()&&(0,s.default)(e)}))}function y(e){e.get("body").forEach((e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");t._blockHoist=e.node._blockHoist,e.replaceWith(t)}else e.isExportAllDeclaration()&&e.remove()}))}},46865:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=_;var r=n(75130),i=n(51693),s=n(72332),o=n(91590);const{assignmentExpression:a,callExpression:l,cloneNode:c,expressionStatement:u,getOuterBindingIdentifiers:p,identifier:h,isMemberExpression:d,isVariableDeclaration:f,jsxIdentifier:m,jsxMemberExpression:y,memberExpression:g,numericLiteral:b,sequenceExpression:E,stringLiteral:v,variableDeclaration:S,variableDeclarator:T}=i;function x(e){do{switch(e.parent.type){case"TSTypeAnnotation":case"TSTypeAliasDeclaration":case"TSTypeReference":case"TypeAnnotation":case"TypeAlias":return!0;case"ExportSpecifier":return"type"===e.parentPath.parent.exportKind;default:if(e.parentPath.isStatement()||e.parentPath.isExpression())return!1}}while(e=e.parentPath)}function _(e,t){const n=new Map,r=new Map,i=t=>{e.requeue(t)};for(const[o,l]of t.source){for(const[e,t]of l.imports)n.set(e,[o,t,null]);for(const e of l.importsNamespace)n.set(e,[o,null,e])}for(const[o,l]of t.local){let e=r.get(o);e||(e=[],r.set(o,e)),e.push(...l.names)}const s={metadata:t,requeueInParent:i,scope:e.scope,exported:r};e.traverse(A,s),(0,o.default)(e,new Set([...Array.from(n.keys()),...Array.from(r.keys())]),!1);const a={seen:new WeakSet,metadata:t,requeueInParent:i,scope:e.scope,imported:n,exported:r,buildImportReference:([e,n,r],i)=>{const s=t.source.get(e);if(r)return s.lazy&&(i=l(i,[])),i;let o=h(s.name);if(s.lazy&&(o=l(o,[])),"default"===n&&"node-default"===s.interop)return o;const a=t.stringSpecifiers.has(n);return g(o,a?v(n):h(n),a)}};e.traverse(C,a)}const A={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:n,metadata:r}=this,{id:i}=e.node;if(!i)throw new Error("Expected class to have a name");const s=i.name,o=n.get(s)||[];if(o.length>0){const n=u(w(r,o,h(s),e.scope));n._blockHoist=e.node._blockHoist,t(e.insertAfter(n)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:n,metadata:r}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach((i=>{const s=n.get(i)||[];if(s.length>0){const n=u(w(r,s,h(i),e.scope));n._blockHoist=e.node._blockHoist,t(e.insertAfter(n)[0])}}))}},w=(e,t,n,r)=>{const i=e.exportName;for(let s=r;null!=s;s=s.parent)s.hasOwnBinding(i)&&s.rename(i);return(t||[]).reduce(((t,n)=>{const{stringSpecifiers:r}=e,s=r.has(n);return a("=",g(h(i),s?v(n):h(n),s),t)}),n)},P=e=>s.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,C={ReferencedIdentifier(e){const{seen:t,buildImportReference:n,scope:r,imported:i,requeueInParent:s}=this;if(t.has(e.node))return;t.add(e.node);const o=e.node.name,a=i.get(o);if(a){if(x(e))throw e.buildCodeFrameError(`Cannot transform the imported binding "${o}" since it's also used in a type annotation. Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.`);const t=e.scope.getBinding(o),i=r.getBinding(o);if(i!==t)return;const l=n(a,e.node);if(l.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&d(l))e.replaceWith(E([b(0),l]));else if(e.isJSXIdentifier()&&d(l)){const{object:t,property:n}=l;e.replaceWith(y(m(t.name),m(n.name)))}else e.replaceWith(l);s(e),e.skip()}},UpdateExpression(e){const{scope:t,seen:n,imported:r,exported:i,requeueInParent:s,buildImportReference:o}=this;if(n.has(e.node))return;n.add(e.node);const l=e.get("argument");if(l.isMemberExpression())return;const u=e.node;if(l.isIdentifier()){const n=l.node.name;if(t.getBinding(n)!==e.scope.getBinding(n))return;const s=i.get(n),p=r.get(n);if((null==s?void 0:s.length)>0||p)if(p)e.replaceWith(a(u.operator[0]+"=",o(p,l.node),P(n)));else if(u.prefix)e.replaceWith(w(this.metadata,s,c(u),e.scope));else{const r=t.generateDeclaredUidIdentifier(n);e.replaceWith(E([a("=",c(r),c(u)),w(this.metadata,s,h(n),e.scope),c(r)]))}}s(e),e.skip()},AssignmentExpression:{exit(e){const{scope:t,seen:n,imported:i,exported:s,requeueInParent:o,buildImportReference:a}=this;if(n.has(e.node))return;n.add(e.node);const l=e.get("left");if(!l.isMemberExpression())if(l.isIdentifier()){const n=l.node.name;if(t.getBinding(n)!==e.scope.getBinding(n))return;const c=s.get(n),u=i.get(n);if((null==c?void 0:c.length)>0||u){r("="===e.node.operator,"Path was not simplified");const t=e.node;u&&(t.left=a(u,l.node),t.right=E([t.right,P(n)])),e.replaceWith(w(this.metadata,c,t,e.scope)),o(e)}}else{const n=l.getOuterBindingIdentifiers(),r=Object.keys(n).filter((n=>t.getBinding(n)===e.scope.getBinding(n))),a=r.find((e=>i.has(e)));a&&(e.node.right=E([e.node.right,P(a)]));const c=[];if(r.forEach((t=>{const n=s.get(t)||[];n.length>0&&c.push(w(this.metadata,n,h(t),e.scope))})),c.length>0){let t=E(c);e.parentPath.isExpressionStatement()&&(t=u(t),t._blockHoist=e.parentPath.node._blockHoist);const n=e.insertAfter(t)[0];o(n)}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:n}=e,{left:r}=n,{exported:i,imported:s,scope:o}=this;if(!f(r)){let n,l=!1;const h=e.get("body").scope;for(const e of Object.keys(p(r)))o.getBinding(e)===t.getBinding(e)&&(i.has(e)&&(l=!0,h.hasOwnBinding(e)&&h.rename(e)),s.has(e)&&!n&&(n=e));if(!l&&!n)return;e.ensureBlock();const d=e.get("body"),f=t.generateUidIdentifierBasedOnNode(r);e.get("left").replaceWith(S("let",[T(c(f))])),t.registerDeclaration(e.get("left")),l&&d.unshiftContainer("body",u(a("=",r,f))),n&&d.unshiftContainer("body",u(P(n)))}}}},18349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l;var r=n(82407),i=n(18230),s=n(51693);const{numericLiteral:o,unaryExpression:a}=s;function l(e){(0,i.default)(e.node,Object.assign({},c,{noScope:!0}))}const c=i.default.visitors.merge([r.default,{ThisExpression(e){e.replaceWith(a("void",o(0),!0))}}])},3520:function(e,t,n){"use strict";function r(e){return(t,n,r)=>{var i;let a;for(const e of Object.keys(s)){var l;t[e]||(a=null!=(l=a)?l:o(t),a[e]=s[e](a))}return e(null!=(i=a)?i:t,n||{},r)}}n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.declare=r,t.declarePreset=void 0;const i=r;t.declarePreset=i;const s={assertVersion:e=>t=>{l(t,e.version)},targets:()=>()=>({}),assumption:()=>()=>{}};function o(e){let t=null;return"string"===typeof e.version&&/^7\./.test(e.version)&&(t=Object.getPrototypeOf(e),!t||a(t,"version")&&a(t,"transform")&&a(t,"template")&&a(t,"types")||(t=null)),Object.assign({},t,e)}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){if("number"===typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!==typeof e)throw new Error("Expected string or integer value.");const n=Error.stackTraceLimit;let r;throw"number"===typeof n&&n<25&&(Error.stackTraceLimit=25),r="7."===t.slice(0,2)?new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${t}". You'll need to update your @babel/core version.`):new Error(`Requires Babel "${e}", but was loaded with "${t}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`),"number"===typeof n&&(Error.stackTraceLimit=n),Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:t,range:e})}},91590:function(e,t,n){"use strict";n(26699),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=d;var r=n(51693);const{LOGICAL_OPERATORS:i,assignmentExpression:s,binaryExpression:o,cloneNode:a,identifier:l,logicalExpression:c,numericLiteral:u,sequenceExpression:p,unaryExpression:h}=r;function d(e,t,n=!0){e.traverse(f,{scope:e.scope,bindingNames:t,seen:new WeakSet,includeUpdateExpression:n})}const f={UpdateExpression:{exit(e){const{scope:t,bindingNames:n,includeUpdateExpression:r}=this;if(!r)return;const i=e.get("argument");if(!i.isIdentifier())return;const c=i.node.name;if(n.has(c)&&t.getBinding(c)===e.scope.getBinding(c))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t="++"==e.node.operator?"+=":"-=";e.replaceWith(s(t,i.node,u(1)))}else if(e.node.prefix)e.replaceWith(s("=",l(c),o(e.node.operator[0],h("+",i.node),u(1))));else{const t=e.scope.generateUidIdentifierBasedOnNode(i.node,"old"),n=t.name;e.scope.push({id:t});const r=o(e.node.operator[0],l(n),u(1));e.replaceWith(p([s("=",l(n),h("+",i.node)),s("=",a(i.node),r),l(n)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:n,bindingNames:r}=this;if("="===e.node.operator)return;if(n.has(e.node))return;n.add(e.node);const l=e.get("left");if(!l.isIdentifier())return;const u=l.node.name;if(!r.has(u))return;if(t.getBinding(u)!==e.scope.getBinding(u))return;const p=e.node.operator.slice(0,-1);i.includes(p)?e.replaceWith(c(p,e.node.left,s("=",a(e.node.left),e.node.right))):(e.node.right=o(p,a(e.node.left),e.node.right),e.node.operator="=")}}}},38167:function(e,t,n){"use strict";n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var r=n(51693);const{cloneNode:i,exportNamedDeclaration:s,exportSpecifier:o,identifier:a,variableDeclaration:l,variableDeclarator:c}=r;function u(e){if(!e.isExportDeclaration()||e.isExportAllDeclaration())throw new Error("Only default and named export declarations can be split.");if(e.isExportDefaultDeclaration()){const t=e.get("declaration"),n=t.isFunctionDeclaration()||t.isClassDeclaration(),r=t.isScope()?t.scope.parent:t.scope;let u=t.node.id,p=!1;u||(p=!0,u=r.generateUidIdentifier("default"),(n||t.isFunctionExpression()||t.isClassExpression())&&(t.node.id=i(u)));const h=n?t.node:l("var",[c(i(u),t.node)]),d=s(null,[o(i(u),a("default"))]);return e.insertAfter(d),e.replaceWith(h),p&&r.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const t=e.get("declaration"),n=t.getOuterBindingIdentifiers(),r=Object.keys(n).map((e=>o(a(e),a(e)))),u=s(null,r);return e.insertAfter(u),e.replaceWith(t.node),e}},78952:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierChar=u,t.isIdentifierName=p,t.isIdentifierStart=c;let n="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",r="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const i=new RegExp("["+n+"]"),s=new RegExp("["+n+r+"]");n=r=null;const o=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,68,310,10,21,11,7,25,5,2,41,2,8,70,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2637,96,16,1070,4050,582,8634,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8936,3,2,6,2,1,2,290,46,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,30,482,44,11,6,17,0,322,29,19,43,1269,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4152,8,221,3,5761,15,7472,3104,541,1507,4938],a=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,87,9,39,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,4706,45,3,22,543,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,357,0,62,13,1495,6,110,6,6,9,4759,9,787719,239];function l(e,t){let n=65536;for(let r=0,i=t.length;r<i;r+=2){if(n+=t[r],n>e)return!1;if(n+=t[r+1],n>=e)return!0}return!1}function c(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&i.test(String.fromCharCode(e)):l(e,o)))}function u(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&s.test(String.fromCharCode(e)):l(e,o)||l(e,a))))}function p(e){let t=!0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(55296===(64512&r)&&n+1<e.length){const t=e.charCodeAt(++n);56320===(64512&t)&&(r=65536+((1023&r)<<10)+(1023&t))}if(t){if(t=!1,!c(r))return!1}else if(!u(r))return!1}return!t}},84605:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return r.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return r.isIdentifierName}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return r.isIdentifierStart}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return i.isKeyword}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return i.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return i.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return i.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return i.isStrictReservedWord}});var r=n(78952),i=n(93994)},93994:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isKeyword=u,t.isReservedWord=o,t.isStrictBindOnlyReservedWord=l,t.isStrictBindReservedWord=c,t.isStrictReservedWord=a;const n={keyword:["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"],strict:["implements","interface","let","package","private","protected","public","static","yield"],strictBind:["eval","arguments"]},r=new Set(n.keyword),i=new Set(n.strict),s=new Set(n.strictBind);function o(e,t){return t&&"await"===e||"enum"===e}function a(e,t){return o(e,t)||i.has(e)}function l(e){return s.has(e)}function c(e,t){return a(e,t)||l(e)}function u(e){return r.has(e)}},53526:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findSuggestion=i;const{min:n}=Math;function r(e,t){let r,i,s=[],o=[];const a=e.length,l=t.length;if(!a)return l;if(!l)return a;for(i=0;i<=l;i++)s[i]=i;for(r=1;r<=a;r++){for(o=[r],i=1;i<=l;i++)o[i]=e[r-1]===t[i-1]?s[i-1]:n(s[i-1],s[i],o[i-1])+1;s=o}return o[l]}function i(e,t){const i=t.map((t=>r(t,e)));return t[i.indexOf(n(...i))]}},61794:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"OptionValidator",{enumerable:!0,get:function(){return r.OptionValidator}}),Object.defineProperty(t,"findSuggestion",{enumerable:!0,get:function(){return i.findSuggestion}});var r=n(82136),i=n(53526)},82136:function(e,t,n){"use strict";n(26699),n(21703),Object.defineProperty(t,"__esModule",{value:!0}),t.OptionValidator=void 0;var r=n(53526);class i{constructor(e){this.descriptor=e}validateTopLevelOptions(e,t){const n=Object.keys(t);for(const i of Object.keys(e))if(!n.includes(i))throw new Error(this.formatMessage(`'${i}' is not a valid top-level option.\n- Did you mean '${(0,r.findSuggestion)(i,n)}'?`))}validateBooleanOption(e,t,n){return void 0===t?n:(this.invariant("boolean"===typeof t,`'${e}' option must be a boolean.`),t)}validateStringOption(e,t,n){return void 0===t?n:(this.invariant("string"===typeof t,`'${e}' option must be a string.`),t)}invariant(e,t){if(!e)throw new Error(this.formatMessage(t))}formatMessage(e){return`${this.descriptor}: ${e}`}}t.OptionValidator=i},54222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(72332);function i(e,t){return Object.freeze({minVersion:e,ast:()=>r.default.program.ast(t,{preserveComments:!0})})}var s=Object.freeze({applyDecs:i("7.17.8",'function createMetadataMethodsForProperty(metadataMap,kind,property,decoratorFinishedRef){return{getMetadata:function(key){assertNotFinished(decoratorFinishedRef,"getMetadata"),assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0!==metadataForKey)if(1===kind){var pub=metadataForKey.public;if(void 0!==pub)return pub[property]}else if(2===kind){var priv=metadataForKey.private;if(void 0!==priv)return priv.get(property)}else if(Object.hasOwnProperty.call(metadataForKey,"constructor"))return metadataForKey.constructor},setMetadata:function(key,value){assertNotFinished(decoratorFinishedRef,"setMetadata"),assertMetadataKey(key);var metadataForKey=metadataMap[key];if(void 0===metadataForKey&&(metadataForKey=metadataMap[key]={}),1===kind){var pub=metadataForKey.public;void 0===pub&&(pub=metadataForKey.public={}),pub[property]=value}else if(2===kind){var priv=metadataForKey.priv;void 0===priv&&(priv=metadataForKey.private=new Map),priv.set(property,value)}else metadataForKey.constructor=value}}}function convertMetadataMapToFinal(obj,metadataMap){var parentMetadataMap=obj[Symbol.metadata||Symbol.for("Symbol.metadata")],metadataKeys=Object.getOwnPropertySymbols(metadataMap);if(0!==metadataKeys.length){for(var i=0;i<metadataKeys.length;i++){var key=metadataKeys[i],metaForKey=metadataMap[key],parentMetaForKey=parentMetadataMap?parentMetadataMap[key]:null,pub=metaForKey.public,parentPub=parentMetaForKey?parentMetaForKey.public:null;pub&&parentPub&&Object.setPrototypeOf(pub,parentPub);var priv=metaForKey.private;if(priv){var privArr=Array.from(priv.values()),parentPriv=parentMetaForKey?parentMetaForKey.private:null;parentPriv&&(privArr=privArr.concat(parentPriv)),metaForKey.private=privArr}parentMetaForKey&&Object.setPrototypeOf(metaForKey,parentMetaForKey)}parentMetadataMap&&Object.setPrototypeOf(metadataMap,parentMetadataMap),obj[Symbol.metadata||Symbol.for("Symbol.metadata")]=metadataMap}}function createAddInitializerMethod(initializers,decoratorFinishedRef){return function(initializer){assertNotFinished(decoratorFinishedRef,"addInitializer"),assertCallable(initializer,"An initializer"),initializers.push(initializer)}}function memberDec(dec,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value){var kindStr;switch(kind){case 1:kindStr="accessor";break;case 2:kindStr="method";break;case 3:kindStr="getter";break;case 4:kindStr="setter";break;default:kindStr="field"}var metadataKind,metadataName,ctx={kind:kindStr,name:isPrivate?"#"+name:name,isStatic:isStatic,isPrivate:isPrivate},decoratorFinishedRef={v:!1};if(0!==kind&&(ctx.addInitializer=createAddInitializerMethod(initializers,decoratorFinishedRef)),isPrivate){metadataKind=2,metadataName=Symbol(name);var access={};0===kind?(access.get=desc.get,access.set=desc.set):2===kind?access.get=function(){return desc.value}:(1!==kind&&3!==kind||(access.get=function(){return desc.get.call(this)}),1!==kind&&4!==kind||(access.set=function(v){desc.set.call(this,v)})),ctx.access=access}else metadataKind=1,metadataName=name;try{return dec(value,Object.assign(ctx,createMetadataMethodsForProperty(metadataMap,metadataKind,metadataName,decoratorFinishedRef)))}finally{decoratorFinishedRef.v=!0}}function assertNotFinished(decoratorFinishedRef,fnName){if(decoratorFinishedRef.v)throw new Error("attempted to call "+fnName+" after decoration was finished")}function assertMetadataKey(key){if("symbol"!=typeof key)throw new TypeError("Metadata keys must be symbols, received: "+key)}function assertCallable(fn,hint){if("function"!=typeof fn)throw new TypeError(hint+" must be a function")}function assertValidReturnValue(kind,value){var type=typeof value;if(1===kind){if("object"!==type||null===value)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==value.get&&assertCallable(value.get,"accessor.get"),void 0!==value.set&&assertCallable(value.set,"accessor.set"),void 0!==value.init&&assertCallable(value.init,"accessor.init"),void 0!==value.initializer&&assertCallable(value.initializer,"accessor.initializer")}else if("function"!==type){var hint;throw hint=0===kind?"field":10===kind?"class":"method",new TypeError(hint+" decorators must return a function or void 0")}}function getInit(desc){var initializer;return null==(initializer=desc.init)&&(initializer=desc.initializer)&&"undefined"!=typeof console&&console.warn(".initializer has been renamed to .init as of March 2022"),initializer}function applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers){var desc,initializer,value,newValue,get,set,decs=decInfo[0];if(isPrivate?desc=0===kind||1===kind?{get:decInfo[3],set:decInfo[4]}:3===kind?{get:decInfo[3]}:4===kind?{set:decInfo[3]}:{value:decInfo[3]}:0!==kind&&(desc=Object.getOwnPropertyDescriptor(base,name)),1===kind?value={get:desc.get,set:desc.set}:2===kind?value=desc.value:3===kind?value=desc.get:4===kind&&(value=desc.set),"function"==typeof decs)void 0!==(newValue=memberDec(decs,name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value))&&(assertValidReturnValue(kind,newValue),0===kind?initializer=newValue:1===kind?(initializer=getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue);else for(var i=decs.length-1;i>=0;i--){var newInit;if(void 0!==(newValue=memberDec(decs[i],name,desc,metadataMap,initializers,kind,isStatic,isPrivate,value)))assertValidReturnValue(kind,newValue),0===kind?newInit=newValue:1===kind?(newInit=getInit(newValue),get=newValue.get||value.get,set=newValue.set||value.set,value={get:get,set:set}):value=newValue,void 0!==newInit&&(void 0===initializer?initializer=newInit:"function"==typeof initializer?initializer=[initializer,newInit]:initializer.push(newInit))}if(0===kind||1===kind){if(void 0===initializer)initializer=function(instance,init){return init};else if("function"!=typeof initializer){var ownInitializers=initializer;initializer=function(instance,init){for(var value=init,i=0;i<ownInitializers.length;i++)value=ownInitializers[i].call(instance,value);return value}}else{var originalInitializer=initializer;initializer=function(instance,init){return originalInitializer.call(instance,init)}}ret.push(initializer)}0!==kind&&(1===kind?(desc.get=value.get,desc.set=value.set):2===kind?desc.value=value:3===kind?desc.get=value:4===kind&&(desc.set=value),isPrivate?1===kind?(ret.push((function(instance,args){return value.get.call(instance,args)})),ret.push((function(instance,args){return value.set.call(instance,args)}))):2===kind?ret.push(value):ret.push((function(instance,args){return value.call(instance,args)})):Object.defineProperty(base,name,desc))}function applyMemberDecs(ret,Class,protoMetadataMap,staticMetadataMap,decInfos){for(var protoInitializers,staticInitializers,existingProtoNonFields=new Map,existingStaticNonFields=new Map,i=0;i<decInfos.length;i++){var decInfo=decInfos[i];if(Array.isArray(decInfo)){var base,metadataMap,initializers,kind=decInfo[1],name=decInfo[2],isPrivate=decInfo.length>3,isStatic=kind>=5;if(isStatic?(base=Class,metadataMap=staticMetadataMap,0!==(kind-=5)&&(initializers=staticInitializers=staticInitializers||[])):(base=Class.prototype,metadataMap=protoMetadataMap,0!==kind&&(initializers=protoInitializers=protoInitializers||[])),0!==kind&&!isPrivate){var existingNonFields=isStatic?existingStaticNonFields:existingProtoNonFields,existingKind=existingNonFields.get(name)||0;if(!0===existingKind||3===existingKind&&4!==kind||4===existingKind&&3!==kind)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+name);!existingKind&&kind>2?existingNonFields.set(name,kind):existingNonFields.set(name,!0)}applyMemberDec(ret,base,decInfo,name,kind,isStatic,isPrivate,metadataMap,initializers)}}pushInitializers(ret,protoInitializers),pushInitializers(ret,staticInitializers)}function pushInitializers(ret,initializers){initializers&&ret.push((function(instance){for(var i=0;i<initializers.length;i++)initializers[i].call(instance);return instance}))}function applyClassDecs(ret,targetClass,metadataMap,classDecs){if(classDecs.length>0){for(var initializers=[],newClass=targetClass,name=targetClass.name,i=classDecs.length-1;i>=0;i--){var decoratorFinishedRef={v:!1};try{var ctx=Object.assign({kind:"class",name:name,addInitializer:createAddInitializerMethod(initializers,decoratorFinishedRef)},createMetadataMethodsForProperty(metadataMap,0,name,decoratorFinishedRef)),nextNewClass=classDecs[i](newClass,ctx)}finally{decoratorFinishedRef.v=!0}void 0!==nextNewClass&&(assertValidReturnValue(10,nextNewClass),newClass=nextNewClass)}ret.push(newClass,(function(){for(var i=0;i<initializers.length;i++)initializers[i].call(newClass)}))}}export default function applyDecs(targetClass,memberDecs,classDecs){var ret=[],staticMetadataMap={},protoMetadataMap={};return applyMemberDecs(ret,targetClass,protoMetadataMap,staticMetadataMap,memberDecs),convertMetadataMapToFinal(targetClass.prototype,protoMetadataMap),applyClassDecs(ret,targetClass,staticMetadataMap,classDecs),convertMetadataMapToFinal(targetClass,staticMetadataMap),ret}'),asyncIterator:i("7.15.9",'export default function _asyncIterator(iterable){var method,async,sync,retry=2;for("undefined"!=typeof Symbol&&(async=Symbol.asyncIterator,sync=Symbol.iterator);retry--;){if(async&&null!=(method=iterable[async]))return method.call(iterable);if(sync&&null!=(method=iterable[sync]))return new AsyncFromSyncIterator(method.call(iterable));async="@@asyncIterator",sync="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(s){function AsyncFromSyncIteratorContinuation(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var done=r.done;return Promise.resolve(r.value).then((function(value){return{value:value,done:done}}))}return AsyncFromSyncIterator=function(s){this.s=s,this.n=s.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return AsyncFromSyncIteratorContinuation(this.n.apply(this.s,arguments))},return:function(value){var ret=this.s.return;return void 0===ret?Promise.resolve({value:value,done:!0}):AsyncFromSyncIteratorContinuation(ret.apply(this.s,arguments))},throw:function(value){var thr=this.s.return;return void 0===thr?Promise.reject(value):AsyncFromSyncIteratorContinuation(thr.apply(this.s,arguments))}},new AsyncFromSyncIterator(s)}'),jsx:i("7.0.0-beta.0",'var REACT_ELEMENT_TYPE;export default function _createRawReactElement(type,props,key,children){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var defaultProps=type&&type.defaultProps,childrenLength=arguments.length-3;if(props||0===childrenLength||(props={children:void 0}),1===childrenLength)props.children=children;else if(childrenLength>1){for(var childArray=new Array(childrenLength),i=0;i<childrenLength;i++)childArray[i]=arguments[i+3];props.children=childArray}if(props&&defaultProps)for(var propName in defaultProps)void 0===props[propName]&&(props[propName]=defaultProps[propName]);else props||(props=defaultProps||{});return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:void 0===key?null:""+key,ref:null,props:props,_owner:null}}'),objectSpread2:i("7.5.0",'import defineProperty from"defineProperty";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}export default function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}'),regeneratorRuntime:i("7.18.0",'export default function _regeneratorRuntime(){"use strict";\n/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(undefined===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a \'throw\' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel}},exports}'),typeof:i("7.0.0-beta.0",'export default function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}'),wrapRegExp:i("7.2.6",'import setPrototypeOf from"setPrototypeOf";import inherits from"inherits";export default function _wrapRegExp(){_wrapRegExp=function(re,groups){return new BabelRegExp(re,void 0,groups)};var _super=RegExp.prototype,_groups=new WeakMap;function BabelRegExp(re,flags,groups){var _this=new RegExp(re,flags);return _groups.set(_this,groups||_groups.get(re)),setPrototypeOf(_this,BabelRegExp.prototype)}function buildGroups(result,re){var g=_groups.get(re);return Object.keys(g).reduce((function(groups,name){return groups[name]=result[g[name]],groups}),Object.create(null))}return inherits(BabelRegExp,RegExp),BabelRegExp.prototype.exec=function(str){var result=_super.exec.call(this,str);return result&&(result.groups=buildGroups(result,this)),result},BabelRegExp.prototype[Symbol.replace]=function(str,substitution){if("string"==typeof substitution){var groups=_groups.get(this);return _super[Symbol.replace].call(this,str,substitution.replace(/\\$<([^>]+)>/g,(function(_,name){return"$"+groups[name]})))}if("function"==typeof substitution){var _this=this;return _super[Symbol.replace].call(this,str,(function(){var args=arguments;return"object"!=typeof args[args.length-1]&&(args=[].slice.call(args)).push(buildGroups(args,_this)),substitution.apply(this,args)}))}return _super[Symbol.replace].call(this,str,substitution)},_wrapRegExp.apply(this,arguments)}')});t["default"]=s},64579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(72332),i=n(54222);const s=Object.assign({__proto__:null},i.default);var o=s;t["default"]=o;const a=e=>t=>({minVersion:e,ast:()=>r.default.program.ast(t)});s.AwaitValue=a("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,s.AsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,s.wrapAsyncGenerator=a("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,s.awaitAsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,s.asyncGeneratorDelegate=a("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () { return this; };

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,s.asyncToGenerator=a("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,s.classCallCheck=a("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,s.createClass=a("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
`,s.defineEnumerableProperties=a("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,s.defaults=a("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,s.defineProperty=a("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,s.extends=a("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,s.objectSpread=a("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,s.inherits=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    // We can't use defineProperty to set the prototype in a single step because it
    // doesn't work in Chrome <= 36. https://github.com/babel/babel/issues/14056
    // V8 bug: https://bugs.chromium.org/p/v8/issues/detail?id=3334
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,s.inheritsLoose=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`,s.getPrototypeOf=a("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,s.setPrototypeOf=a("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
    return _setPrototypeOf(o, p);
  }
`,s.isNativeReflectConstruct=a("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Boolean object.

      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,s.construct=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,s.isNativeFunction=a("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,s.wrapNativeSuper=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,s.instanceof=a("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,s.interopRequireDefault=a("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,s.interopRequireWildcard=a("7.14.0")`
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  export default function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,s.newArrowCheck=a("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,s.objectDestructuringEmpty=a("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,s.objectWithoutPropertiesLoose=a("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,s.objectWithoutProperties=a("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,s.assertThisInitialized=a("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,s.possibleConstructorReturn=a("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }
`,s.createSuper=a("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,s.superPropBase=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,s.get=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          // STEP 3. If receiver is not present, then set receiver to target.
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
`,s.set=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,s.taggedTemplateLiteral=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,s.taggedTemplateLiteralLoose=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,s.readOnlyError=a("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`,s.writeOnlyError=a("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`,s.classNameTDZError=a("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,s.temporalUndefined=a("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,s.tdz=a("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,s.temporalRef=a("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,s.slicedToArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.slicedToArrayLoose=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.toArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,s.toConsumableArray=a("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,s.arrayWithoutHoles=a("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,s.arrayWithHoles=a("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,s.maybeArrayLike=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`,s.iterableToArray=a("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
`,s.iterableToArrayLimit=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,s.iterableToArrayLimitLoose=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,s.unsupportedIterableToArray=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,s.arrayLikeToArray=a("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,s.nonIterableSpread=a("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.nonIterableRest=a("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.createForOfIteratorHelper=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,s.createForOfIteratorHelperLoose=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);

    // Fallback for engines without symbol support
    if (
      Array.isArray(o) ||
      (it = unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
`,s.skipFirstGeneratorNext=a("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,s.toPrimitive=a("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,s.toPropertyKey=a("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,s.initializerWarningHelper=a("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,s.initializerDefineProperty=a("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,s.applyDecoratedDescriptor=a("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,s.classPrivateFieldLooseKey=a("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,s.classPrivateFieldLooseBase=a("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,s.classPrivateFieldGet=a("7.0.0-beta.0")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,s.classPrivateFieldSet=a("7.0.0-beta.0")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,s.classPrivateFieldDestructureSet=a("7.4.4")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,s.classExtractFieldDescriptor=a("7.13.10")`
  export default function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
`,s.classStaticPrivateFieldSpecGet=a("7.0.2")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,s.classStaticPrivateFieldSpecSet=a("7.0.2")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,s.classStaticPrivateMethodGet=a("7.3.2")`
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
`,s.classStaticPrivateMethodSet=a("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,s.classApplyDescriptorGet=a("7.13.10")`
  export default function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,s.classApplyDescriptorSet=a("7.13.10")`
  export default function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
`,s.classApplyDescriptorDestructureSet=a("7.13.10")`
  export default function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,s.classStaticPrivateFieldDestructureSet=a("7.13.10")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,s.classCheckPrivateStaticAccess=a("7.13.10")`
  export default function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
`,s.classCheckPrivateStaticFieldDescriptor=a("7.13.10")`
  export default function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
`,s.decorate=a("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,s.classPrivateMethodGet=a("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,s.checkPrivateRedeclaration=a("7.14.1")`
  export default function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
`,s.classPrivateFieldInitSpec=a("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateFieldInitSpec(obj, privateMap, value) {
    checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
`,s.classPrivateMethodInitSpec=a("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateMethodInitSpec(obj, privateSet) {
    checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
`,s.classPrivateMethodSet=a("7.1.6")`
    export default function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }
  `,s.identity=a("7.17.0")`
  export default function _identity(x) {
    return x;
  }