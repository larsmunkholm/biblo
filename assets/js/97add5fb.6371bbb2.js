"use strict";(self.webpackChunk_biblo_docs=self.webpackChunk_biblo_docs||[]).push([[584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,d=b["".concat(p,".").concat(m)]||b[m]||u[m]||o;return a?r.createElement(d,l(l({ref:t},c),{},{components:a})):r.createElement(d,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),o=a(6010),l=a(2389),i=a(7392),p=a(7094),s=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function b(e){var t;const{lazy:a,block:l,defaultValue:b,values:m,groupId:d,className:f}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??y.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===b?b:b??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,p.U)(),[x,S]=(0,n.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=d){const e=k[d];null!=e&&e!==x&&v.some((t=>t.value===e))&&S(e)}const O=e=>{const t=e.currentTarget,a=N.indexOf(t),r=v[a].value;r!==x&&(w(t),S(r),null!=d&&T(d,String(r)))},j=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:j,onClick:O},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,n.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return n.createElement(b,(0,r.Z)({key:String(t)},e))}},5025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={sidebar_position:1},p="\ud83d\udcc2 The Biblo file",s={unversionedId:"biblo-files/the-biblo-file",id:"biblo-files/the-biblo-file",title:"\ud83d\udcc2 The Biblo file",description:"Let's say you have a component named Separator. Let's create a **Biblo file** for it!",source:"@site/docs/biblo-files/the-biblo-file.md",sourceDirName:"biblo-files",slug:"/biblo-files/the-biblo-file",permalink:"/biblo/docs/biblo-files/the-biblo-file",draft:!1,editUrl:"https://github.com/larsmunkholm/biblo/tree/main/packages/docs/docs/biblo-files/the-biblo-file.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/biblo/docs/getting-started"},next:{title:"\ud83c\udff7\ufe0f Biblo Bio",permalink:"/biblo/docs/biblo-files/biblo-bio"}},c={},u=[],b={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-the-biblo-file"},"\ud83d\udcc2 The Biblo file"),(0,n.kt)("p",null,"Let's say you have a component named ",(0,n.kt)("strong",{parentName:"p"},"Separator"),". ",(0,n.kt)("em",{parentName:"p"},"Let's create a ",(0,n.kt)("strong",{parentName:"em"},"Biblo file")," for it!")),(0,n.kt)(o.Z,{groupId:"language",className:"hidden",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Add a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"Separator.biblo.tsx")," with the following content:")),(0,n.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("p",null,"Add a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"Separator.biblo.jsx")," with the following content:"))),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Separator.biblo.tsx"',title:'"Separator.biblo.tsx"'},'import { BibloBio, BibloItem } from "@biblo/react-native";\nimport { Separator, SeparatorProps } from "./Separator.component";\n\nexport default {\n    component: Separator,\n    title: "Separator",\n} as BibloBio<SeparatorProps>;\n\nconst Template: BibloItem<SeparatorProps> = (props) => <Separator {...props} />;\n\nexport const Horizontal = Template.bind({});\n\nexport const Vertical = Template.bind({});\nVertical.props = {\n    vertical: true,\n};\n')),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Unless you enable ",(0,n.kt)("inlineCode",{parentName:"p"},"strictBindCallApply")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file, you'll\nhave to define types on every named export."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/#component-types"},"Read more here"),".")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you can't or don't want to import an interface or type definition for the\nprops of a component, use this instead:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"type SeparatorProps = React.ComponentProps<typeof Separator>\n")))),(0,n.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Separator.biblo.jsx"',title:'"Separator.biblo.jsx"'},'import { Separator, SeparatorProps } from "./Separator.component";\n\nexport default {\n    component: Separator,\n    title: "Separator",\n};\n\nconst Template = (props) => <Separator {...props} />;\n\nexport const Horizontal = Template.bind({});\n\nexport const Vertical = Template.bind({});\nVertical.props = {\n    vertical: true,\n};\n')))),(0,n.kt)("p",null,"That's basically all you need in a Biblo file."))}m.isMDXComponent=!0}}]);