"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8150],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),f=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=f(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=f(n),d=o,v=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return n?t.createElement(v,l(l({ref:r},p),{},{components:n})):t.createElement(v,l({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var f=2;f<a;f++)l[f]=n[f];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8977:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return p},Highlight:function(){return s},default:function(){return d}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={tags:["\u5251\u6307offer","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],id:"leetcode_offer68v1",title:"\ud83d\udfe2 \u5251\u6307 Offer 68 - I. \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"},c=void 0,f={unversionedId:"\u5251\u6307offer/leetcode_offer68v1",id:"\u5251\u6307offer/leetcode_offer68v1",isDocsHomePage:!1,title:"\ud83d\udfe2 \u5251\u6307 Offer 68 - I. \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",description:"<span",source:"@site/docs/\u5251\u6307offer/leetcode_offer68v1.mdx",sourceDirName:"\u5251\u6307offer",slug:"/\u5251\u6307offer/leetcode_offer68v1",permalink:"/docs/\u5251\u6307offer/leetcode_offer68v1",tags:[{label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"},{label:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",permalink:"/docs/tags/\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},{label:"\u4e8c\u53c9\u6811",permalink:"/docs/tags/\u4e8c\u53c9\u6811"}],version:"current",frontMatter:{tags:["\u5251\u6307offer","\u6df1\u5ea6\u4f18\u5148\u641c\u7d22","\u4e8c\u53c9\u6811"],id:"leetcode_offer68v1",title:"\ud83d\udfe2 \u5251\u6307 Offer 68 - I. \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"},sidebar:"codezone",previous:{title:"\ud83d\udd34 \u5251\u6307 Offer 59 - I. \u6ed1\u52a8\u7a97\u53e3\u7684\u6700\u5927\u503c",permalink:"/docs/\u5251\u6307offer/leetcode_offer59v1"},next:{title:"\ud83d\udfe2 \u5251\u6307 Offer 68 - II. \u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",permalink:"/docs/\u5251\u6307offer/leetcode_offer68v2"}},p=[{value:"\u9898\u89e3 1.py",id:"\u9898\u89e3-1py",children:[]},{value:"\u9898\u89e3 2_\u4e00\u6b21\u904d\u5386.py",id:"\u9898\u89e3-2_\u4e00\u6b21\u904d\u5386py",children:[]}],s=function(e){var r=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},u={toc:p,Highlight:s};function d(e){var r=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"LeetCode \u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9898\u76ee\u96be\u5ea6 ",(0,a.kt)(s,{color:"#00b8a3",mdxType:"Highlight"},"\u7b80\u5355")),(0,a.kt)("p",{parentName:"div"},"\u539f\u9898\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/"},"\ud83d\udd17 leetcode")))),(0,a.kt)("h2",{id:"\u9898\u89e3-1py"},"\u9898\u89e3 1.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        def traval(target):\n            stack = []\n            def doTraval(cur):\n                stack.append(cur)\n                if cur.val == target.val:\n                    return\n                if cur.val > target.val:\n                    doTraval(cur.left)\n                else:\n                    doTraval(cur.right)\n            doTraval(root)\n            return stack\n        \n        ptravel = traval(p)\n        qtravel = traval(q)\n\n        for i in range(1, min(len(ptravel), len(qtravel))):\n            if ptravel[i] != qtravel[i]:\n                return ptravel[i-1]\n        \n        return ptravel[-1] if len(ptravel) < len(qtravel) else qtravel[-1]\n")),(0,a.kt)("h2",{id:"\u9898\u89e3-2_\u4e00\u6b21\u904d\u5386py"},"\u9898\u89e3 2_\u4e00\u6b21\u904d\u5386.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        def travel(cur):\n            if cur.val == p.val or cur.val == q.val:\n                return cur\n            if cur.val < p.val and cur.val < q.val:\n                return travel(cur.right)\n            elif cur.val > p.val and cur.val > q.val:\n                return travel(cur.left)\n            else:\n                return cur\n        \n        return travel(root)\n")))}d.isMDXComponent=!0}}]);