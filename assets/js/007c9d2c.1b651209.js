"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1872],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),f=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=f(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=f(t),u=o,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||l;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var f=2;f<l;f++)a[f]=t[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2765:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return s},Highlight:function(){return d},default:function(){return u}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),a=["components"],i={tags:["\u54c8\u5e0c\u8868","\u94fe\u8868","\u53cc\u6307\u9488","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII022",title:"\ud83d\udfe1 \u5251\u6307 Offer II 022. \u94fe\u8868\u4e2d\u73af\u7684\u5165\u53e3\u8282\u70b9",ques_id:"OfferII022",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/c32eOV/",online_name:"\u94fe\u8868\u4e2d\u73af\u7684\u5165\u53e3\u8282\u70b9",level:"m"},c=void 0,f={unversionedId:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII022",id:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII022",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer II 022. \u94fe\u8868\u4e2d\u73af\u7684\u5165\u53e3\u8282\u70b9",description:"<span",source:"@site/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII022.mdx",sourceDirName:"\u5251\u6307offer\u4e13\u9879\u7248",slug:"/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII022",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII022",tags:[{label:"\u54c8\u5e0c\u8868",permalink:"/docs/tags/\u54c8\u5e0c\u8868"},{label:"\u94fe\u8868",permalink:"/docs/tags/\u94fe\u8868"},{label:"\u53cc\u6307\u9488",permalink:"/docs/tags/\u53cc\u6307\u9488"},{label:"\u5251\u6307offer\u4e13\u9879\u7248",permalink:"/docs/tags/\u5251\u6307offer\u4e13\u9879\u7248"}],version:"current",frontMatter:{tags:["\u54c8\u5e0c\u8868","\u94fe\u8868","\u53cc\u6307\u9488","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII022",title:"\ud83d\udfe1 \u5251\u6307 Offer II 022. \u94fe\u8868\u4e2d\u73af\u7684\u5165\u53e3\u8282\u70b9",ques_id:"OfferII022",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/c32eOV/",online_name:"\u94fe\u8868\u4e2d\u73af\u7684\u5165\u53e3\u8282\u70b9",level:"m"},sidebar:"bffer",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 008. \u548c\u5927\u4e8e\u7b49\u4e8e target \u7684\u6700\u77ed\u5b50\u6570\u7ec4",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII008"},next:{title:"\ud83d\udfe2 \u5251\u6307 Offer II 034. \u5916\u661f\u8bed\u8a00\u662f\u5426\u6392\u5e8f",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII034"}},s=[{value:"\u9898\u89e31",id:"\u9898\u89e31",children:[]}],d=function(e){var n=e.children,t=e.color;return(0,l.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:s,Highlight:d};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,l.kt)(d,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,l.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/c32eOV/"},"\ud83d\udd17 leetcode")))),(0,l.kt)("h2",{id:"\u9898\u89e31"},"\u9898\u89e31"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public ListNode detectCycle(ListNode head) {\n        ListNode l = head;\n        ListNode r = head;\n\n        while (r != null) {\n            r = r.next;\n            l = l.next;\n            if (r != null) {\n                r = r.next;\n            }\n\n            if (l == r) {\n                break;\n            }\n        }\n        if (r == null) {\n            return null;\n        }\n        l = head;\n        while (l != r) {\n            l = l.next;\n            r = r.next;\n        }\n        return l;\n    }\n}\n")))}u.isMDXComponent=!0}}]);