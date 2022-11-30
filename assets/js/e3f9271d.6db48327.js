"use strict";(self.webpackChunk_biblo_docs=self.webpackChunk_biblo_docs||[]).push([[268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4923:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294);const o="device_r1Ar",a="container_a16k",i="iframeContainer_wgpq",c="iframe_JXcj",l="overlay_XJ7N",s="text_YfRi",u=e=>{let{url:t,text:r}=e;return n.createElement("div",{className:a},n.createElement("div",{className:o},n.createElement("div",{className:i},n.createElement("iframe",{className:c,src:t})),n.createElement("div",{className:l},n.createElement("img",{src:"/img/iphone13.png",alt:"iPhone 13"}))),n.createElement("div",{className:s},n.createElement("p",null,n.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},r))))}},144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),a=r(4923);const i={sidebar_position:2},c="Try it out",l={unversionedId:"try-it-out",id:"try-it-out",title:"Try it out",description:"On your own machine",source:"@site/docs/try-it-out.mdx",sourceDirName:".",slug:"/try-it-out",permalink:"/docs/try-it-out",draft:!1,editUrl:"https://github.com/saxofonsolo/biblo/tree/main/packages/docs/docs/try-it-out.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Getting started",permalink:"/docs/getting-started"}},s={},u=[{value:"On your own machine",id:"on-your-own-machine",level:2},{value:"In the browser",id:"in-the-browser",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"try-it-out"},"Try it out"),(0,o.kt)("h2",{id:"on-your-own-machine"},"On your own machine"),(0,o.kt)("p",null,"You can run an example by performing these steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:saxofonsolo/biblo.git\ncd biblo\ncd example\nnpm install\nnpm run android\n")),(0,o.kt)("h2",{id:"in-the-browser"},"In the browser"),(0,o.kt)("p",null,"Can't wait? You can see a demo of the ",(0,o.kt)("strong",{parentName:"p"},"web version")," here."),(0,o.kt)(a.Z,{text:"Open demo",url:"https://biblo.saxofonsolo.dk/demo",mdxType:"DeviceFrame"}))}m.isMDXComponent=!0}}]);