"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6272],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=f(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var f=2;f<a;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2882:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return s},Highlight:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={tags:["\u6570\u7ec4","\u4e8c\u5206\u67e5\u627e","\u524d\u7f00\u548c","\u6ed1\u52a8\u7a97\u53e3","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII008",title:"\ud83d\udfe1 \u5251\u6307 Offer II 008. \u548c\u5927\u4e8e\u7b49\u4e8e target \u7684\u6700\u77ed\u5b50\u6570\u7ec4"},l=void 0,f={unversionedId:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII008",id:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII008",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer II 008. \u548c\u5927\u4e8e\u7b49\u4e8e target \u7684\u6700\u77ed\u5b50\u6570\u7ec4",description:"<span",source:"@site/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII008.mdx",sourceDirName:"\u5251\u6307offer\u4e13\u9879\u7248",slug:"/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII008",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII008",tags:[{label:"\u6570\u7ec4",permalink:"/docs/tags/\u6570\u7ec4"},{label:"\u4e8c\u5206\u67e5\u627e",permalink:"/docs/tags/\u4e8c\u5206\u67e5\u627e"},{label:"\u524d\u7f00\u548c",permalink:"/docs/tags/\u524d\u7f00\u548c"},{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/docs/tags/\u6ed1\u52a8\u7a97\u53e3"},{label:"\u5251\u6307offer\u4e13\u9879\u7248",permalink:"/docs/tags/\u5251\u6307offer\u4e13\u9879\u7248"}],version:"current",frontMatter:{tags:["\u6570\u7ec4","\u4e8c\u5206\u67e5\u627e","\u524d\u7f00\u548c","\u6ed1\u52a8\u7a97\u53e3","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII008",title:"\ud83d\udfe1 \u5251\u6307 Offer II 008. \u548c\u5927\u4e8e\u7b49\u4e8e target \u7684\u6700\u77ed\u5b50\u6570\u7ec4"},sidebar:"codezone",previous:{title:"\ud83d\udfe2 \u5251\u6307 Offer II 001. \u6574\u6570\u9664\u6cd5",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII001"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 005. \u5355\u8bcd\u957f\u5ea6\u7684\u6700\u5927\u4e58\u79ef",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII005"}},s=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]}],p=function(e){var t=e.children,r=e.color;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:s,Highlight:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(p,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/2VG8Kg/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minSubArrayLen(self, target: int, nums: List[int]) -> int:\n        l, r, m = 0, 0, len(nums)+1\n        cur = nums[0]\n        right = len(nums)-1\n\n        while l <= right and r <= right:\n            if cur < target or l > r:\n                r += 1\n                if r <= right:\n                    cur += nums[r]\n                else:\n                    break\n            else:\n                m = min(m, r-l+1)\n                cur -= nums[l]\n                l += 1\n        \n        return m if m <= len(nums) else 0\n")))}d.isMDXComponent=!0}}]);