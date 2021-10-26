"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7405],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return u}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=f(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var f={};for(var c in r)hasOwnProperty.call(r,c)&&(f[c]=r[c]);f.originalType=e,f.mdxType="string"==typeof e?e:o,a[1]=f;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6803:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return f},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},Highlight:function(){return p},default:function(){return u}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],f={tags:["\u5251\u6307offer","\u4e8c\u53c9\u6811"],id:"leetcode_offer27",title:"\ud83d\udfe2 \u5251\u6307 Offer 27. \u4e8c\u53c9\u6811\u7684\u955c\u50cf",ques_id:"offer27",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/",online_name:"\u5251\u6307 Offer 27. \u4e8c\u53c9\u6811\u7684\u955c\u50cf",level:"e"},c=void 0,l={unversionedId:"\u5251\u6307offer/leetcode_offer27",id:"\u5251\u6307offer/leetcode_offer27",isDocsHomePage:!1,title:"\ud83d\udfe2 \u5251\u6307 Offer 27. \u4e8c\u53c9\u6811\u7684\u955c\u50cf",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer27.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer27",permalink:"/docs/\u5251\u6307offer/leetcode_offer27",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u4e8c\u53c9\u6811",permalink:"/docs/tags/\u4e8c\u53c9\u6811"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u4e8c\u53c9\u6811"],id:"leetcode_offer27",title:"\ud83d\udfe2 \u5251\u6307 Offer 27. \u4e8c\u53c9\u6811\u7684\u955c\u50cf",ques_id:"offer27",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/",online_name:"\u5251\u6307 Offer 27. \u4e8c\u53c9\u6811\u7684\u955c\u50cf",level:"e"},sidebar:"offer",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer 26. \u6811\u7684\u5b50\u7ed3\u6784",permalink:"/docs/\u5251\u6307offer/leetcode_offer26"},next:{title:"\ud83d\udfe2 \u5251\u6307 Offer 28. \u5bf9\u79f0\u7684\u4e8c\u53c9\u6811",permalink:"/docs/\u5251\u6307offer/leetcode_offer28"}},s=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]}],p=function(e){var r=e.children,t=e.color;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},d={toc:s,Highlight:p};function u(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,i.kt)(p,{color:"#00b8a3",mdxType:"Highlight"},"\u7b80\u5355")),(0,i.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/"},"\ud83d\udd17 leetcode")))),(0,i.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def mirrorTree(self, root: TreeNode) -> TreeNode:\n        if root is None:\n            return root\n        root.left, root.right = self.mirrorTree(root.right), self.mirrorTree(root.left)\n        return root\n")))}u.isMDXComponent=!0}}]);