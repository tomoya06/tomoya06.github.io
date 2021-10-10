"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8263],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=f(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var f={};for(var l in n)hasOwnProperty.call(n,l)&&(f[l]=n[l]);f.originalType=e,f.mdxType="string"==typeof e?e:o,i[1]=f;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2232:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return f},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},Highlight:function(){return s},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],f={tags:["\u5251\u6307offer","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"],id:"leetcode_offer34",title:"\ud83d\udfe1 \u5251\u6307 Offer 34. \u4e8c\u53c9\u6811\u4e2d\u548c\u4e3a\u67d0\u4e00\u503c\u7684\u8def\u5f84"},l=void 0,c={unversionedId:"\u5251\u6307offer/leetcode_offer34",id:"\u5251\u6307offer/leetcode_offer34",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer 34. \u4e8c\u53c9\u6811\u4e2d\u548c\u4e3a\u67d0\u4e00\u503c\u7684\u8def\u5f84",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer34.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer34",permalink:"/docs/\u5251\u6307offer/leetcode_offer34",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/docs/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/docs/tags/\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"],id:"leetcode_offer34",title:"\ud83d\udfe1 \u5251\u6307 Offer 34. \u4e8c\u53c9\u6811\u4e2d\u548c\u4e3a\u67d0\u4e00\u503c\u7684\u8def\u5f84"},sidebar:"codezone",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer 38. \u5b57\u7b26\u4e32\u7684\u6392\u5217",permalink:"/docs/\u5251\u6307offer/leetcode_offer38"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer 16. \u6570\u503c\u7684\u6574\u6570\u6b21\u65b9",permalink:"/docs/\u5251\u6307offer/leetcode_offer16"}},d=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]},{value:"\u9898\u89e3 2_\u8282\u7701\u7a7a\u95f4.py",id:"\u9898\u89e3-2_\u8282\u7701\u7a7a\u95f4py",children:[]}],s=function(e){var n=e.children,t=e.color;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:d,Highlight:s};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(s,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def pathSum(self, root: TreeNode, target: int) -> List[List[int]]:\n        res = []\n        def dfs(node, cur, newTarget):\n            if not node:\n                return\n            if not node.left and not node.right and node.val == newTarget:\n                res.append(cur+[node.val])\n                return\n            if node.left:\n                dfs(node.left, cur+[node.val], newTarget-node.val)\n            if node.right:\n                dfs(node.right, cur+[node.val], newTarget-node.val)\n        \n        dfs(root, [], target)\n        return res\n")),(0,a.kt)("h2",{id:"\u9898\u89e3-2_\u8282\u7701\u7a7a\u95f4py"},"\u9898\u89e3 2_\u8282\u7701\u7a7a\u95f4.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def pathSum(self, root: TreeNode, target: int) -> List[List[int]]:\n        res = []\n        stacks = []\n        def dfs(node, newTarget):\n            if not node:\n                return\n            if not node.left and not node.right and node.val == newTarget:\n                res.append(stacks+[node.val])\n                return\n            if node.left:\n                stacks.append(node.val)\n                dfs(node.left, newTarget-node.val)\n                stacks.pop(-1)\n            if node.right:\n                stacks.append(node.val)\n                dfs(node.right, newTarget-node.val)\n                stacks.pop(-1)\n        \n        dfs(root, target)\n        return res\n")))}u.isMDXComponent=!0}}]);