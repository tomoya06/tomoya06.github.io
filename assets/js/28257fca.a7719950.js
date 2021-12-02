"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7480],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),f=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=f(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=f(t),d=i,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var f=2;f<o;f++)a[f]=t[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return s},Highlight:function(){return p},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={tags:["\u54c8\u5e0c\u8868","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32","\u6ed1\u52a8\u7a97\u53e3","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII014",title:"\ud83d\udfe1 \u5251\u6307 Offer II 014. \u5b57\u7b26\u4e32\u4e2d\u7684\u53d8\u4f4d\u8bcd",ques_id:"OfferII014",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/MPnaiL/",online_name:"\u5b57\u7b26\u4e32\u4e2d\u7684\u53d8\u4f4d\u8bcd",level:"m"},l=void 0,f={unversionedId:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII014",id:"\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII014",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer II 014. \u5b57\u7b26\u4e32\u4e2d\u7684\u53d8\u4f4d\u8bcd",description:"<span",source:"@site/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII014.mdx",sourceDirName:"\u5251\u6307offer\u4e13\u9879\u7248",slug:"/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII014",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII014",tags:[{label:"\u54c8\u5e0c\u8868",permalink:"/docs/tags/\u54c8\u5e0c\u8868"},{label:"\u53cc\u6307\u9488",permalink:"/docs/tags/\u53cc\u6307\u9488"},{label:"\u5b57\u7b26\u4e32",permalink:"/docs/tags/\u5b57\u7b26\u4e32"},{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/docs/tags/\u6ed1\u52a8\u7a97\u53e3"},{label:"\u5251\u6307offer\u4e13\u9879\u7248",permalink:"/docs/tags/\u5251\u6307offer\u4e13\u9879\u7248"}],version:"current",frontMatter:{tags:["\u54c8\u5e0c\u8868","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32","\u6ed1\u52a8\u7a97\u53e3","\u5251\u6307offer\u4e13\u9879\u7248"],id:"leetcode_OfferII014",title:"\ud83d\udfe1 \u5251\u6307 Offer II 014. \u5b57\u7b26\u4e32\u4e2d\u7684\u53d8\u4f4d\u8bcd",ques_id:"OfferII014",platform:"leetcode",online_link:"https://leetcode-cn.com/problems/MPnaiL/",online_name:"\u5b57\u7b26\u4e32\u4e2d\u7684\u53d8\u4f4d\u8bcd",level:"m"},sidebar:"bffer",previous:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 011. 0 \u548c 1 \u4e2a\u6570\u76f8\u540c\u7684\u5b50\u6570\u7ec4",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII011"},next:{title:"\ud83d\udfe1 \u5251\u6307 Offer II 020. \u56de\u6587\u5b50\u5b57\u7b26\u4e32\u7684\u4e2a\u6570",permalink:"/docs/\u5251\u6307offer\u4e13\u9879\u7248/leetcode_OfferII020"}},s=[{value:"\u9898\u89e31",id:"\u9898\u89e31",children:[]},{value:"\u9898\u89e32 \u5bf9\u6bd4",id:"\u9898\u89e32-\u5bf9\u6bd4",children:[]}],p=function(e){var n=e.children,t=e.color;return(0,o.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:s,Highlight:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,o.kt)(p,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,o.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/MPnaiL/"},"\ud83d\udd17 leetcode")))),(0,o.kt)("h2",{id:"\u9898\u89e31"},"\u9898\u89e31"),(0,o.kt)("p",null,"\u4e24\u4e2a\u8bcd\u82e5\u4e92\u76f8\u4e3a\u53d8\u4f4d\u8bcd\uff0c\u90a3\u4e4826\u4e2a\u5b57\u6bcd\u5728\u4e24\u4e2a\u5355\u8bcd\u4e2d\u51fa\u73b0\u7684\u6b21\u6570\u80af\u5b9a\u90fd\u76f8\u540c\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u7528\u6ed1\u52a8\u7a97\u53e3\u7684\u601d\u8def\uff0c\u7528\u4e24\u4e2a26\u4f4d\u6570\u7ec4",(0,o.kt)("inlineCode",{parentName:"p"},"cnt1"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"cnt2"),"\u5206\u522b\u8bb0\u5f55\u6bcf\u4e2a\u5b57\u6bcd\u5728\u4e24\u4e2a\u5355\u8bcd\u4e2d\u7684\u6570\u91cf\uff0c\u79fb\u52a8\u7a97\u53e3\uff0c\u6539\u53d8",(0,o.kt)("inlineCode",{parentName:"p"},"cnt2"),"\u7684\u503c\uff0c\u7136\u540e\u6bd4\u8f83\u4e24\u4e2a\u6570\u7ec4\u662f\u5426\u76f8\u540c\u3002"),(0,o.kt)("p",null,"\u4f46\u6bcf\u6b21\u79fb\u52a8\u7a97\u53e3\u90fd\u6bd4\u8f83\u4e24\u4e2a\u6570\u7ec4\uff0c\u6709\u70b9\u7d2f\u8d58\uff0c\u53ef\u4ee5\u7528\u4e00\u4e2a\u5e38\u91cfdiff\u8868\u793a\u76f8\u5dee\u7684\u5b57\u6bcd\u6570\u91cf\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\u53ef\u4ee5\u7b80\u5316\u53ea\u8981\u4e00\u4e2a26\u4f4d\u6570\u7ec4\u8bb0\u5f55\u5373\u53ef\uff0c\u6570\u7ec4\u6bcf\u4e00\u4f4d\u5747\u4e3a0\u65f6diff=0\u3002"),(0,o.kt)("p",null,"\u7531\u6b64\u53ef\u5f97\uff0c\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0cS2\u6bcf\u4e2a\u5b57\u6bcd\u8d21\u732e\u4e3a1\uff0cS1\u7684\u4e3a-1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        int l1 = s1.length(), l2 = s2.length();\n        if (l1 > l2) {\n            return false;\n        }\n\n        int[] cnt = new int[26];\n        int diff = 0;\n\n        for (int i=0; i<l1; i++) {\n            cnt[s1.charAt(i)-'a'] -= 1;\n            cnt[s2.charAt(i)-'a'] += 1;\n        }\n        for (int i=0; i<26; i++) {\n            if (cnt[i] != 0) {\n                diff += 1;\n            }\n        }\n\n        if (diff == 0) {\n            return true;\n        }\n\n        // \u7a97\u53e3\u8fdb\u5165\u4e00\u4e2ay\uff0c\u51fa\u4e00\u4e2ax\n        char x, y;\n        for (int i=l1; i<l2; i+=1) {\n            x = s2.charAt(i-l1);\n            y = s2.charAt(i);\n\n            if (x == y) {\n                continue;\n            }\n\n            cnt[y-'a'] += 1;\n            cnt[x-'a'] -= 1;\n\n            if (cnt[y-'a'] == 0) {\n                diff -= 1;a\n            }\n            if (cnt[y-'a'] == 1) {\n                diff += 1;\n            }\n            if (cnt[x-'a'] == 0) {\n                diff -= 1;\n            }\n            if (cnt[x-'a'] == -1) {\n                diff += 1;\n            }\n\n            if (diff == 0) {\n                return true;\n            }\n        }\n\n        return diff == 0;\n    }\n}\n")),(0,o.kt)("h2",{id:"\u9898\u89e32-\u5bf9\u6bd4"},"\u9898\u89e32 \u5bf9\u6bd4"),(0,o.kt)("p",null,"\u987a\u4fbf\u653e\u4e00\u4e2a\u7b80\u5316\u524d\u7684\u7248\u672c\uff0c\u65b9\u4fbf\u6bd4\u8f83\u601d\u8003\u3002\uff08\u867d\u7136\u9898\u89e31\u4e5f\u662f\u6284\u7684\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        int n = s1.length(), m = s2.length();\n        if (n > m) {\n            return false;\n        }\n        int[] cnt1 = new int[26];\n        int[] cnt2 = new int[26];\n        for (int i = 0; i < n; ++i) {\n            ++cnt1[s1.charAt(i) - 'a'];\n            ++cnt2[s2.charAt(i) - 'a'];\n        }\n        if (Arrays.equals(cnt1, cnt2)) {\n            return true;\n        }\n        for (int i = n; i < m; ++i) {\n            ++cnt2[s2.charAt(i) - 'a'];\n            --cnt2[s2.charAt(i - n) - 'a'];\n            if (Arrays.equals(cnt1, cnt2)) {\n                return true;\n            }\n        }\n        return false;\n    }\n}\n")),(0,o.kt)("p",null,"\u4f5c\u8005\uff1aLeetCode-Solution\n\u94fe\u63a5\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/MPnaiL/solution/zi-fu-chuan-zhong-de-bian-wei-ci-by-leet-wbma/"},"https://leetcode-cn.com/problems/MPnaiL/solution/zi-fu-chuan-zhong-de-bian-wei-ci-by-leet-wbma/")))}d.isMDXComponent=!0}}]);