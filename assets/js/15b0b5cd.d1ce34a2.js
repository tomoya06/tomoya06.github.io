"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4695],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8814:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={date:new Date("2018-12-27T14:11:36.000Z"),id:"ts-basic",tags:["TypeScript","\u524d\u7aef"],title:"TypeScript\u5b66\u4e60\u7b14\u8bb0"},u=void 0,p={unversionedId:"note/ts-basic",id:"note/ts-basic",isDocsHomePage:!1,title:"TypeScript\u5b66\u4e60\u7b14\u8bb0",description:"\u8fd8\u662f\u9762\u5411\u5bf9\u8c61\u8212\u670d\u3002",source:"@site/docs/note/2018-12-27-ts-basic.mdx",sourceDirName:"note",slug:"/note/ts-basic",permalink:"/docs/note/ts-basic",tags:[{label:"TypeScript",permalink:"/docs/tags/type-script"},{label:"\u524d\u7aef",permalink:"/docs/tags/\u524d\u7aef"}],version:"current",frontMatter:{date:"2018-12-27T14:11:36.000Z",id:"ts-basic",tags:["TypeScript","\u524d\u7aef"],title:"TypeScript\u5b66\u4e60\u7b14\u8bb0"},sidebar:"note",previous:{title:"\u56e0\u7279\u7f51\u4e94\u5c42\u534f\u8bae\u7b14\u8bb0",permalink:"/docs/note/web-notes"},next:{title:"os-cluster",permalink:"/docs/note/os-cluster"}},c=[{value:"\u57fa\u7840\u7c7b\u578b",id:"\u57fa\u7840\u7c7b\u578b",children:[]},{value:"\u53d8\u91cf\u58f0\u660e",id:"\u53d8\u91cf\u58f0\u660e",children:[]},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[]},{value:"\u7c7b",id:"\u7c7b",children:[]},{value:"\u51fd\u6570",id:"\u51fd\u6570",children:[]},{value:"\u6cdb\u578b",id:"\u6cdb\u578b",children:[]},{value:"\u9ad8\u7ea7\u7c7b\u578b",id:"\u9ad8\u7ea7\u7c7b\u578b",children:[]},{value:"\u8fed\u4ee3\u5668\u548c\u751f\u6210\u5668",id:"\u8fed\u4ee3\u5668\u548c\u751f\u6210\u5668",children:[]},{value:"\u6a21\u5757\u548c\u547d\u540d\u7a7a\u95f4",id:"\u6a21\u5757\u548c\u547d\u540d\u7a7a\u95f4",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd8\u662f\u9762\u5411\u5bf9\u8c61\u8212\u670d\u3002"),(0,a.kt)("p",null,"\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"https://www.tslang.cn/docs/handbook/basic-types.html"},"TypeScript\u4e2d\u6587\u7f51"),"\u7684\u624b\u518c\u6307\u5357\u6765\u770b\u7684\u3002\u4e0b\u9762\u7684\u7b14\u8bb0\u4e5f\u6309\u7167\u6307\u5357\u76ee\u5f55\u7684\u987a\u5e8f\u3002"),(0,a.kt)("h2",{id:"\u57fa\u7840\u7c7b\u578b"},"\u57fa\u7840\u7c7b\u578b"),(0,a.kt)("p",null,"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548cjs\u5dee\u4e0d\u591a\u3002\u8865\u5145\u51e0\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e03\u5c14\u503cboolean"),(0,a.kt)("li",{parentName:"ul"},"\u6d6e\u70b9\u6570number\u3002TS\u91cc\u9762\u6240\u6709\u6570\u5b57\u90fd\u662f\u6d6e\u70b9\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32string"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u7ec4type[]\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"Array<type>")),(0,a.kt)("li",{parentName:"ul"},"\u5143\u7ec4tuple\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"let x: [string, number]; x = ['good', 120]; "),"\uff0c\u7c7b\u4f3c\u4e8ePython\u7684dict"),(0,a.kt)("li",{parentName:"ul"},"\u679a\u4e3eenum\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"enum Color {Red, Green, Blue}; let c: Color = Color.Green; "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4ece0\u7f16\u53f7\u3002\u624b\u52a8\u7f16\u53f7\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"enum Color {Red=1, Green, Blue}")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"enum Color {Red=1, Green=3, Blue=4}")))),(0,a.kt)("li",{parentName:"ul"},"\u4efb\u610f\u7c7b\u578bAny\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"let notSure: any = 4; notSure = false; // can change 'notSure' to any other types")),(0,a.kt)("li",{parentName:"ul"},"Void Never"),(0,a.kt)("li",{parentName:"ul"},"Null Undefined"),(0,a.kt)("li",{parentName:"ul"},"Object"),(0,a.kt)("li",{parentName:"ul"},"Symbol"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u65ad\u8a00\uff1a\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"let strLength: number = (<string>someValue).length;")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"let strLength: number = (someValue as string).length;"))),(0,a.kt)("h2",{id:"\u53d8\u91cf\u58f0\u660e"},"\u53d8\u91cf\u58f0\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"var let const"),"\u7684\u533a\u522b\u3002\u9f13\u52b1\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"let const")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"let const"),"\u7684\u4f5c\u7528\u57df\uff1a\u8bcd\u6cd5\u4f5c\u7528\u57df\u6216\u5757\u4f5c\u7528\u57df\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u6784")),(0,a.kt)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TypeScript\u7684\u6838\u5fc3\u539f\u5219\u4e4b\u4e00\u662f\u5bf9\u503c\u6240\u5177\u6709\u7684\u7ed3\u6784\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5<-\u4f60\u4e5f\u662f\u9e2d\u5b50\u8fa8\u578b\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"interface Animal() {\n    name: string;  // \u5e38\u89c4\u5b9a\u4e49\n    color?: string;  // \u53ef\u9009\u5c5e\u6027\n    readonly feet: number;  // \u53ea\u8bfb\u5c5e\u6027\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"readonly vs const: \u6700\u7b80\u5355\u5224\u65ad\u8be5\u7528readonly\u8fd8\u662fconst\u7684\u65b9\u6cd5\u662f\u770b\u8981\u628a\u5b83\u505a\u4e3a\u53d8\u91cf\u4f7f\u7528\u8fd8\u662f\u505a\u4e3a\u4e00\u4e2a\u5c5e\u6027\u3002 \u505a\u4e3a\u53d8\u91cf\u4f7f\u7528\u7684\u8bdd\u7528const\uff0c\u82e5\u505a\u4e3a\u5c5e\u6027\u5219\u4f7f\u7528readonly\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8bfb\u5c5e\u6027\u8d4b\u503c\u7ed9\u5176\u4ed6\u53d8\u91cf\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"a = ro as number[];")),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u7ee7\u627f\u63a5\u53e3\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"interface Square extends Shape, OtherInterface")),(0,a.kt)("li",{parentName:"ul"},"\u6df7\u5408\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u7ee7\u627f\u7c7b")),(0,a.kt)("h2",{id:"\u7c7b"},"\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'class Greeter {\n    greeting: string;\n    constructor(message: string) {\n        this.greeting = message;\n    }\n    greet() {\n        return "Hello, " + this.greeting;\n    }\n}\n\nlet greeter = new Greeter("world");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u7ee7\u627f\u7c7b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"class Dog extends Animal")),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u9970\u7b26\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"public private protected")," ",(0,a.kt)("inlineCode",{parentName:"li"},"readonly")," "),(0,a.kt)("li",{parentName:"ul"},"getter/setter"),(0,a.kt)("li",{parentName:"ul"},"\u9759\u6001\u5c5e\u6027\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"static"),"\uff0c\u5728\u7c7b\u672c\u8eab\u7684\u5c5e\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"abstract"),"\uff0c\u6709\u62bd\u8c61\u7c7b\u548c\u62bd\u8c61\u65b9\u6cd5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'class Employee {\n    private _fullName: string;\n\n    get fullName(): string {\n        return this._fullName;\n    }\n\n    set fullName(newName: string) {\n        if (passcode && passcode == "secret passcode") {\n            this._fullName = newName;\n        }\n        else {\n            console.log("Error: Unauthorized update of employee!");\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7c7b\u578b/\u53c2\u6570\u7c7b\u578b/(\u7701\u7565)\u63a8\u65ad\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u9009\u53c2\u6570/\u9ed8\u8ba4\u53c2\u6570/\u5269\u4f59\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u8f7d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function pickCard(x: {suit: string; card: number; }[]): number;\nfunction pickCard(x: number): {suit: string; card: number; };\nfunction pickCard(x): any {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"\u6cdb\u578b"},"\u6cdb\u578b"),(0,a.kt)("h2",{id:"\u9ad8\u7ea7\u7c7b\u578b"},"\u9ad8\u7ea7\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ea4\u53c9\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"let a: T & U")),(0,a.kt)("li",{parentName:"ul"},"\u94fe\u548c\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"let a: T | U"))),(0,a.kt)("h2",{id:"\u8fed\u4ee3\u5668\u548c\u751f\u6210\u5668"},"\u8fed\u4ee3\u5668\u548c\u751f\u6210\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'let list = [4, 5, 6];\n\nfor (let i in list) {\n    console.log(i); // "0", "1", "2",\n}\n\nfor (let i of list) {\n    console.log(i); // "4", "5", "6"\n}\n')),(0,a.kt)("h2",{id:"\u6a21\u5757\u548c\u547d\u540d\u7a7a\u95f4"},"\u6a21\u5757\u548c\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("p",null,"\u76f4\u63a5\u770b\u539f\u6587\u5427"))}m.isMDXComponent=!0}}]);