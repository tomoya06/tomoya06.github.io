"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2677],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={date:new Date("2019-09-24T10:09:01.000Z"),id:"redis-basic",tags:["Java","\u540e\u7aef","Redis"],title:"Redis \u57fa\u7840"},s=void 0,c={unversionedId:"note/redis-basic",id:"note/redis-basic",isDocsHomePage:!1,title:"Redis \u57fa\u7840",description:"Redis\u5165\u95e8",source:"@site/docs/note/2019-09-24-redis-basic.mdx",sourceDirName:"note",slug:"/note/redis-basic",permalink:"/docs/note/redis-basic",tags:[{label:"Java",permalink:"/docs/tags/java"},{label:"\u540e\u7aef",permalink:"/docs/tags/\u540e\u7aef"},{label:"Redis",permalink:"/docs/tags/redis"}],version:"current",frontMatter:{date:"2019-09-24T10:09:01.000Z",id:"redis-basic",tags:["Java","\u540e\u7aef","Redis"],title:"Redis \u57fa\u7840"},sidebar:"note",previous:{title:"ElasticSearch \u8fdb\u9636",permalink:"/docs/note/es-advanced"},next:{title:"Hello World",permalink:"/docs/note/hello-world"}},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u57fa\u672c\u6307\u4ee4",id:"\u57fa\u672c\u6307\u4ee4",children:[{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",children:[]},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[]},{value:"\u89c4\u8303",id:"\u89c4\u8303",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Redis\u5165\u95e8")),(0,i.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"key-value\u5b58\u50a8\u7cfb\u7edf\uff0c\u975e\u5173\u7cfb\u6570\u636e\u5e93"),(0,i.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\uff0c\u5355\u7ebf\u7a0b\u673a\u5236\uff08\u6ca1\u6709\u5e76\u53d1\u95ee\u9898\uff0c\u8fd9\u4e00\u70b9\u53ef\u4ee5\u88ab\u5145\u5206\u5229\u7528\uff09")),(0,i.kt)("h2",{id:"\u57fa\u672c\u6307\u4ee4"},"\u57fa\u672c\u6307\u4ee4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'SET <PARAM> "STRING"\nGET <PARAM>\nINCR <PARAM>\nINCRBY <PARAM> 10\nDECR <PARAM>\nDECRBY <PARAM> 10\n\n// for list\nLPUSH <ARR> XX\nRPUSH <ARR> XX\nLEN <ARR>\nLPOP <ARR>\nRPOP <ARR>\nLRANGE <ARR> 0 -1\n\n// for set\nSADD <SET> XX\nSREM <SET> XX\nSISMEMBER <SET> XX\nSMEMBERS <SET>\nSUNION <SET1> <SET2>\n\n// for sorted set / zset\nZADD <ZET> \nZRANGE <ZET> 0 -1\n\n// for hashes (Object in JS)\nHSET <HASH> <KEY> <VALUE>\nHGETALL <HASH>\nHMSET <HASH> <KEY> <VALUE> <KEY> <VALUE> <KEY> <VALUE> ...\nHGET <HASH> <KEY>\nHINCRBY\nHDEL\n')),(0,i.kt)("h3",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,i.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6307\u4ee4\u4e0d\u5206\u5927\u5c0f\u5199\uff0c\u53c2\u6570\u540d/HASH KEY\u5206")),(0,i.kt)("h3",{id:"\u89c4\u8303"},"\u89c4\u8303"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6765\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/6971415/8356786"},"StackOverflow"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"What are the normal naming convention for keys in redis? I've seen values separated by : but I'm not sure what the normal convention is, or why.")),(0,i.kt)("p",null,'Yes, colon sign : is a convention when naming keys. In this tutorial on redis website is stated: Try to stick with a schema. For instance "object-type\ud83c\udd94field" can be a nice idea, like in "user:1000:password". I like to use dots for multi-words fields, like in "comment\ud83d\udd22reply.to".'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Are you able to query for just the beginning of the key to return all users?")),(0,i.kt)("p",null,"If you mean someting like directly querying for all keys which starts with user: there is a keys command for that. This command should be however used only for debugging purpose since it's O(N) because it's searching through all keys strored in database."),(0,i.kt)("p",null,"More appropriate solution for this problem is to create dedicated key, let's name is users, which will store all the users keys, for example, in list or set data structure."))}p.isMDXComponent=!0}}]);