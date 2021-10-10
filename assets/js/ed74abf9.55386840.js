"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8277],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),f=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=f(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=f(t),u=o,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var f=2;f<i;f++)a[f]=t[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8664:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return d},Highlight:function(){return s},default:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={tags:["\u5251\u6307offer","\u5206\u6cbb\u6cd5"],id:"leetcode_offer04",title:"\ud83d\udfe1 \u5251\u6307 Offer 04. \u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e"},l=void 0,f={unversionedId:"\u5251\u6307offer/leetcode_offer04",id:"\u5251\u6307offer/leetcode_offer04",isDocsHomePage:!1,title:"\ud83d\udfe1 \u5251\u6307 Offer 04. \u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer04.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer04",permalink:"/docs/\u5251\u6307offer/leetcode_offer04",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u5206\u6cbb\u6cd5",permalink:"/docs/tags/\u5206\u6cbb\u6cd5"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u5206\u6cbb\u6cd5"],id:"leetcode_offer04",title:"\ud83d\udfe1 \u5251\u6307 Offer 04. \u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e"},sidebar:"codezone",previous:{title:"\ud83d\udfe2 \u5251\u6307 Offer 57 - II. \u548c\u4e3as\u7684\u8fde\u7eed\u6b63\u6570\u5e8f\u5217",permalink:"/docs/\u5251\u6307offer/leetcode_offer57"},next:{title:"\ud83d\udfe2 \u5251\u6307 Offer 42. \u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",permalink:"/docs/\u5251\u6307offer/leetcode_offer42"}},d=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]},{value:"\u9898\u89e3 x\u53cc\u91cd\u4e8c\u5206\u67e5\u627e\u4f46\u4e0d\u9002\u7528.py",id:"\u9898\u89e3-x\u53cc\u91cd\u4e8c\u5206\u67e5\u627e\u4f46\u4e0d\u9002\u7528py",children:[]}],s=function(e){var n=e.children,t=e.color;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},p={toc:d,Highlight:s};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,i.kt)(s,{color:"#ffc01e",mdxType:"Highlight"},"\u4e2d\u7b49")),(0,i.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/"},"\ud83d\udd17 leetcode")))),(0,i.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# @lc app=leetcode.cn id=240 lang=python3\n#\n# [240] \u641c\u7d22\u4e8c\u7ef4\u77e9\u9635 II\n#\n\n# @lc code=start\nclass Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        y, x = 0, len(matrix[0])-1\n        while x >= 0 and y < len(matrix):\n            cur = matrix[y][x]\n            if target == cur:\n                return True\n            if target > cur:\n                y += 1\n            else:\n                x -= 1\n        return False\n\n\n# @lc code=end\n")),(0,i.kt)("h2",{id:"\u9898\u89e3-x\u53cc\u91cd\u4e8c\u5206\u67e5\u627e\u4f46\u4e0d\u9002\u7528py"},"\u9898\u89e3 x\u53cc\u91cd\u4e8c\u5206\u67e5\u627e\u4f46\u4e0d\u9002\u7528.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# ##tag#\u5251\u6307offer#\u5206\u6cbb\u6cd5##tagend##\n# @lc app=leetcode.cn id=240 lang=python3\n#\n# [240] \u641c\u7d22\u4e8c\u7ef4\u77e9\u9635 II\n#\n\n# \u6ce8\u610f\uff1a\u53cc\u4e8c\u5206\u67e5\u627e\u5728\u8fd9\u9053\u9898\u4e0d\u9002\u7528\n# \u56e0\u4e3a\u6bcf\u884c\u5934\u90e8\u5e76\u4e0d\u4fdd\u8bc1\u6bd4\u4e0a\u4e00\u884c\u5c3e\u90e8\u5927\n# FIXME: \u6709\u6ca1\u6709\u8fd9\u4e2a\u89e3\u6cd5\u9002\u7528\u7684\u9898\u76ee\uff1f\n\n# @lc code=start\nclass Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n      def findInRow(idx: int):\n        row = matrix[idx]\n        left, right, mid = 0, len(row)-1, 0\n        while left <= right:\n          mid = (left+right)//2\n          if row[mid] == target:\n            return True\n          if row[mid] > target:\n            right = mid-1\n          else:\n            left = mid+1\n        return False\n      \n      def findHeader():\n        headers = [row[0] for row in matrix]\n        left, right, mid = 0, len(headers), 0\n        if headers[0] > target:\n          return -1\n        while left < right:\n          mid = (left+right)//2\n          if headers[mid] == target:\n            return mid\n          if headers[mid] > target:\n            right = mid\n          else:\n            left = mid+1\n        return left\n      \n      headerIdx = findHeader()\n      if headerIdx < 0:\n        return False\n      return findInRow(headerIdx)\n\n# @lc code=end\n")))}u.isMDXComponent=!0}}]);