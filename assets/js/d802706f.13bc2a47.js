"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6678],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),f=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=f(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=f(t),u=o,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var f=2;f<a;f++)i[f]=t[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9320:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return p},Highlight:function(){return s},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={tags:["\u5251\u6307offer","\u6570\u5b66\u95ee\u9898"],id:"leetcode_offer17",title:"\ud83d\udfe1 \u5251\u6307 Offer 17. \u6253\u5370\u4ece1\u5230\u6700\u5927\u7684n\u4f4d\u6570",ques_id:"offer17",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/",online_name:"\u5251\u6307 Offer 17. \u6253\u5370\u4ece1\u5230\u6700\u5927\u7684n\u4f4d\u6570",level:"m"},c=void 0,f={unversionedId:"\u5251\u6307offer/leetcode_offer17",id:"\u5251\u6307offer/leetcode_offer17",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer 17. \u6253\u5370\u4ece1\u5230\u6700\u5927\u7684n\u4f4d\u6570",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer17.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer17",permalink:"/docs/\u5251\u6307offer/leetcode_offer17",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u6570\u5b66\u95ee\u9898",permalink:"/docs/tags/\u6570\u5b66\u95ee\u9898"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u6570\u5b66\u95ee\u9898"],id:"leetcode_offer17",title:"\ud83d\udfe1 \u5251\u6307 Offer 17. \u6253\u5370\u4ece1\u5230\u6700\u5927\u7684n\u4f4d\u6570",ques_id:"offer17",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/",online_name:"\u5251\u6307 Offer 17. \u6253\u5370\u4ece1\u5230\u6700\u5927\u7684n\u4f4d\u6570",level:"m"},sidebar:"offer",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer 16. \u6570\u503c\u7684\u6574\u6570\u6b21\u65b9",permalink:"/docs/\u5251\u6307offer/leetcode_offer16"},next:{title:"\ud83d\udfe2 \u5251\u6307 Offer 18. \u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",permalink:"/docs/\u5251\u6307offer/leetcode_offer18"}},p=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]},{value:"\u9898\u89e3 2_\u5077\u61d2\u89e3\u6cd5.py",id:"\u9898\u89e3-2_\u5077\u61d2\u89e3\u6cd5py",children:[]}],s=function(e){var n=e.children,t=e.color;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},d={toc:p,Highlight:s};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(s,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# \u5de5\u7a0b\u89e3\u6cd5 \u8003\u8651\u5927\u6570\u95ee\u9898\nclass Solution:\n    def printNumbers(self, n: int) -> List[int]:\n        realRes = [str(i) for i in range(10)]\n        for level in range(2, n+1):\n            # \u5904\u7406level\u4f4d\u6570\n            levelRes = []\n            for top in range(1, 10):\n                # \u9996\u4f4d1~9 \u62fc\u63a5\u7ed3\u679c\n                for suffix in realRes:\n                    cur = '{}{}{}'.format(top, '0'*(level-len(suffix)-1), suffix)\n                    levelRes.append(cur)\n            realRes += levelRes\n        return [int(r) for r in realRes[1:]]\n")),(0,a.kt)("h2",{id:"\u9898\u89e3-2_\u5077\u61d2\u89e3\u6cd5py"},"\u9898\u89e3 2_\u5077\u61d2\u89e3\u6cd5.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def printNumbers(self, n: int) -> List[int]:\n        return list(range(1, pow(10, n)))\n")))}u.isMDXComponent=!0}}]);