"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9569],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),f=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=f(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=f(t),p=o,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var f=2;f<i;f++)a[f]=t[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1684:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return s},Highlight:function(){return d},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={tags:["\u5251\u6307offer","\u53cc\u6307\u9488"],id:"leetcode_offer52",title:"\ud83d\udfe1 \u5251\u6307 Offer 52. \u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9"},l=void 0,f={unversionedId:"\u5251\u6307offer/leetcode_offer52",id:"\u5251\u6307offer/leetcode_offer52",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer 52. \u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer52.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer52",permalink:"/docs/\u5251\u6307offer/leetcode_offer52",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u53cc\u6307\u9488",permalink:"/docs/tags/\u53cc\u6307\u9488"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u53cc\u6307\u9488"],id:"leetcode_offer52",title:"\ud83d\udfe1 \u5251\u6307 Offer 52. \u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9"},sidebar:"codezone",previous:{title:"\ud83d\udfe2 \u5251\u6307 Offer 55 - II. \u5e73\u8861\u4e8c\u53c9\u6811",permalink:"/docs/\u5251\u6307offer/leetcode_offer55"},next:{title:"\ud83d\udfe2 \u5251\u6307 Offer 22. \u94fe\u8868\u4e2d\u5012\u6570\u7b2ck\u4e2a\u8282\u70b9",permalink:"/docs/\u5251\u6307offer/leetcode_offer22"}},s=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]},{value:"\u9898\u89e3 2_\u66f4\u5e72\u51c0\u7684\u5199\u6cd5.py",id:"\u9898\u89e3-2_\u66f4\u5e72\u51c0\u7684\u5199\u6cd5py",children:[]}],d=function(e){var n=e.children,t=e.color;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:s,Highlight:d};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,i.kt)(d,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,i.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/"},"\ud83d\udd17 leetcode")))),(0,i.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:\n        curA, curB = headA, headB\n        while curA and curB:\n            curA = curA.next\n            curB = curB.next\n        cnt = 0\n        start, mid = None, None\n        cur = None\n\n        if curA:\n            start = headA\n            mid = headB\n            cur = curA\n        else:\n            start = headB\n            mid = headA\n            cur = curB\n        \n        while cur:\n            cur = cur.next\n            start = start.next\n        \n        while start != mid:\n            start = start.next\n            mid = mid.next\n        \n        return start\n")),(0,i.kt)("h2",{id:"\u9898\u89e3-2_\u66f4\u5e72\u51c0\u7684\u5199\u6cd5py"},"\u9898\u89e3 2_\u66f4\u5e72\u51c0\u7684\u5199\u6cd5.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n\nclass Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:\n        curA, curB = headA, headB\n\n        while curA != curB:\n            curA = headB if curA is None else curA.next\n            curB = headA if curB is None else curB.next\n        \n        return curA\n")))}p.isMDXComponent=!0}}]);