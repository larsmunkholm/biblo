"use strict";(self.webpackChunk_biblo_docs=self.webpackChunk_biblo_docs||[]).push([[903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(n),b=o,f=m["".concat(s,".").concat(b)]||m[b]||c[b]||r;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},l="\ud83d\udcdd Biblo file extension",a={unversionedId:"customization/biblo-file-extension",id:"customization/biblo-file-extension",title:"\ud83d\udcdd Biblo file extension",description:"By default, Biblo files end in one of the following extensions:",source:"@site/docs/customization/biblo-file-extension.md",sourceDirName:"customization",slug:"/customization/biblo-file-extension",permalink:"/docs/customization/biblo-file-extension",draft:!1,editUrl:"https://github.com/saxofonsolo/biblo/tree/main/packages/docs/docs/customization/biblo-file-extension.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf31 A basic viewport",permalink:"/docs/the-viewport/a-basic-viewport"},next:{title:"\ud83d\udd24 Simple markup",permalink:"/docs/addons/simple-markup"}},s={},p=[{value:"\ud83d\udce6 Importing files",id:"-importing-files",level:2},{value:"\ud83c\udd71\ufe0f Babel",id:"\ud83c\udd71\ufe0f-babel",level:2},{value:"\u2728 Regular expression",id:"-regular-expression",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-biblo-file-extension"},"\ud83d\udcdd Biblo file extension"),(0,o.kt)("p",null,"By default, Biblo files end in one of the following extensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".biblo.tsx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".biblo.jsx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".biblo.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".biblo.js"))),(0,o.kt)("p",null,"If you wish to change that, here's how you do it:"),(0,o.kt)("h2",{id:"-importing-files"},"\ud83d\udce6 Importing files"),(0,o.kt)("p",null,"This will import all files ending in ",(0,o.kt)("inlineCode",{parentName:"p"},".customExtension.*")," (see ",(0,o.kt)("a",{parentName:"p",href:"#-regular-expression"},"regular expression"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const components = bibloImporter(\n    require.context(\n        "/", // The root path to search in\n        true, // Recursive (keep searching in subfolders of the root path)\n        // highlight-next-line\n        /\\.customExtension\\.[tj]sx?$/, // The files to search for\n    )\n);\n')),(0,o.kt)("h2",{id:"\ud83c\udd71\ufe0f-babel"},"\ud83c\udd71\ufe0f Babel"),(0,o.kt)("p",null,"Biblo uses Babel to list your examples in the same order you export them, but Babel needs to know how your files are named."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3-8} title="babel.config.js"',"{3-8}":!0,title:'"babel.config.js"'},'module.exports = {\n    plugins: [\n        [\n            "@biblo/babel-plugin",\n            {\n                regex: /\\.customExtension\\.[tj]sx?$/,\n            },\n        ],\n    ],\n};\n')),(0,o.kt)("h2",{id:"-regular-expression"},"\u2728 Regular expression"),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The regex ",(0,o.kt)("inlineCode",{parentName:"p"},"/\\.customExtension\\.[tj]sx?$/")," will match all files ending in the following extensions:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".customExtension.tsx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".customExtension.jsx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".customExtension.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".customExtension.js")))))}c.isMDXComponent=!0}}]);