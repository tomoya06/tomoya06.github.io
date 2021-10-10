"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3355],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=r.createContext({}),l=function(e){var n=r.useContext(f),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(f.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,m=u["".concat(f,".").concat(d)]||u[d]||s[d]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var f in n)hasOwnProperty.call(n,f)&&(c[f]=n[f]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4053:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return l},toc:function(){return p},Highlight:function(){return s},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={tags:["\u5251\u6307offer","\u9012\u5f52","\u6570\u5b66\u95ee\u9898"],id:"leetcode_offer62",title:"\ud83d\udfe1 \u5251\u6307 Offer 62. \u5706\u5708\u4e2d\u6700\u540e\u5269\u4e0b\u7684\u6570\u5b57"},f=void 0,l={unversionedId:"\u5251\u6307offer/leetcode_offer62",id:"\u5251\u6307offer/leetcode_offer62",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer 62. \u5706\u5708\u4e2d\u6700\u540e\u5269\u4e0b\u7684\u6570\u5b57",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer62.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer62",permalink:"/docs/\u5251\u6307offer/leetcode_offer62",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u9012\u5f52",permalink:"/docs/tags/\u9012\u5f52"},{label:"\u6570\u5b66\u95ee\u9898",permalink:"/docs/tags/\u6570\u5b66\u95ee\u9898"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u9012\u5f52","\u6570\u5b66\u95ee\u9898"],id:"leetcode_offer62",title:"\ud83d\udfe1 \u5251\u6307 Offer 62. \u5706\u5708\u4e2d\u6700\u540e\u5269\u4e0b\u7684\u6570\u5b57"},sidebar:"codezone",previous:{title:"\ud83d\udd34 \u5251\u6307 Offer 37. \u5e8f\u5217\u5316\u4e8c\u53c9\u6811",permalink:"/docs/\u5251\u6307offer/leetcode_offer37"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer 60. n\u4e2a\u9ab0\u5b50\u7684\u70b9\u6570",permalink:"/docs/\u5251\u6307offer/leetcode_offer60"}},p=[{value:"\u9898\u89e3 1_\u96be\u5728\u6570\u5b66\u63a8\u7406.py",id:"\u9898\u89e3-1_\u96be\u5728\u6570\u5b66\u63a8\u7406py",children:[]},{value:"\u9898\u89e3 2_\u8fed\u4ee3.py",id:"\u9898\u89e3-2_\u8fed\u4ee3py",children:[]}],s=function(e){var n=e.children,t=e.color;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:p,Highlight:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(s,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u9898\u89e3-1_\u96be\u5728\u6570\u5b66\u63a8\u7406py"},"\u9898\u89e3 1_\u96be\u5728\u6570\u5b66\u63a8\u7406.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def lastRemaining(self, n: int, m: int) -> int:\n        def dp(x):\n            if x == 1:\n                return 0\n            return (dp(x-1)+m) % x\n        return dp(n)\n")),(0,a.kt)("h2",{id:"\u9898\u89e3-2_\u8fed\u4ee3py"},"\u9898\u89e3 2_\u8fed\u4ee3.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def lastRemaining(self, n: int, m: int) -> int:\n        ans = 0\n        for n in range(2, n+1):\n            ans = (ans+m) % n\n        return ans\n")))}d.isMDXComponent=!0}}]);