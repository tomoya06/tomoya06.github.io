"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9661],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=r.createContext({}),c=function(e){var n=r.useContext(f),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(f.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,f=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,v=d["".concat(f,".").concat(u)]||d[u]||s[u]||l;return t?r.createElement(v,a(a({ref:n},p),{},{components:t})):r.createElement(v,a({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var f in n)hasOwnProperty.call(n,f)&&(i[f]=n[f]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},279:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return f},metadata:function(){return c},toc:function(){return p},Highlight:function(){return s},default:function(){return u}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),a=["components"],i={tags:["\u5251\u6307offer","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"],id:"leetcode_offer32v1",title:"\ud83d\udfe1 \u5251\u6307 Offer 32 - I. \u4ece\u4e0a\u5230\u4e0b\u6253\u5370\u4e8c\u53c9\u6811"},f=void 0,c={unversionedId:"\u5251\u6307offer/leetcode_offer32v1",id:"\u5251\u6307offer/leetcode_offer32v1",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer 32 - I. \u4ece\u4e0a\u5230\u4e0b\u6253\u5370\u4e8c\u53c9\u6811",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer32v1.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer32v1",permalink:"/docs/\u5251\u6307offer/leetcode_offer32v1",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/docs/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"],id:"leetcode_offer32v1",title:"\ud83d\udfe1 \u5251\u6307 Offer 32 - I. \u4ece\u4e0a\u5230\u4e0b\u6253\u5370\u4e8c\u53c9\u6811"},sidebar:"codezone",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer 34. \u4e8c\u53c9\u6811\u4e2d\u548c\u4e3a\u67d0\u4e00\u503c\u7684\u8def\u5f84",permalink:"/docs/\u5251\u6307offer/leetcode_offer34"},next:{title:"\ud83d\udfe2 \u5251\u6307 Offer 67. \u628a\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u6574\u6570",permalink:"/docs/\u5251\u6307offer/leetcode_offer67"}},p=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]},{value:"\u9898\u89e3 2_\u66f4\u5feb.py",id:"\u9898\u89e3-2_\u66f4\u5febpy",children:[]}],s=function(e){var n=e.children,t=e.color;return(0,l.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},d={toc:p,Highlight:s};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,l.kt)(s,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,l.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/"},"\ud83d\udd17 leetcode")))),(0,l.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def levelOrder(self, root: TreeNode) -> List[int]:\n        if root is None:\n            return []\n\n        levl = [root]\n        res = []\n        while levl:\n            len1 = len(levl)\n            for idx in range(len1):\n                n = levl[idx]\n                res.append(n.val)\n                if n.left:\n                    levl.append(n.left)\n                if n.right:\n                    levl.append(n.right)\n            levl = levl[len1:]\n        return res\n")),(0,l.kt)("h2",{id:"\u9898\u89e3-2_\u66f4\u5febpy"},"\u9898\u89e3 2_\u66f4\u5feb.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def levelOrder(self, root: TreeNode) -> List[int]:\n        if root is None:\n            return []\n\n        levl = [root]\n        res = []\n        while levl:\n            n = levl.pop(0)\n            res.append(n.val)\n            if n.left:\n                levl.append(n.left)\n            if n.right:\n                levl.append(n.right)\n        return res\n")))}u.isMDXComponent=!0}}]);