"use strict";(self.webpackChunk_biblo_docs=self.webpackChunk_biblo_docs||[]).push([[617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,b=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?r.createElement(b,o(o({ref:t},m),{},{components:a})):r.createElement(b,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),i=a(7392),p=a(7094),s=a(2466);const m="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:a,block:o,defaultValue:u,values:c,groupId:b,className:f}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,i.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[T,x]=(0,n.useState)(v),S=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=b){const e=y[b];null!=e&&e!==T&&k.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,a=S.indexOf(t),r=k[a].value;r!==T&&(w(t),x(r),null!=b&&N(b,String(r)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>S.push(e),onKeyDown:C,onClick:j},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,o.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},8493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={sidebar_position:3},p="\ud83d\udcc4 Biblo Items",s={unversionedId:"biblo-files/biblo-items",id:"biblo-files/biblo-items",title:"\ud83d\udcc4 Biblo Items",description:"The named exports must be of the type BibloItem.",source:"@site/docs/biblo-files/biblo-items.mdx",sourceDirName:"biblo-files",slug:"/biblo-files/biblo-items",permalink:"/docs/biblo-files/biblo-items",draft:!1,editUrl:"https://github.com/saxofonsolo/biblo/tree/main/packages/docs/docs/biblo-files/biblo-items.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udff7\ufe0f Biblo Bio",permalink:"/docs/biblo-files/biblo-bio"},next:{title:"\ud83c\udf31 A basic viewport",permalink:"/docs/the-viewport/a-basic-viewport"}},m={},d=[{value:"Props",id:"props",level:2},{value:"Examples",id:"examples",level:2},{value:"\ud83c\udf31 Simplest",id:"-simplest",level:3},{value:"\ud83c\udf3f Still simple",id:"-still-simple",level:3},{value:"\ud83c\udf34 Advanced",id:"-advanced",level:3}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-biblo-items"},"\ud83d\udcc4 Biblo Items"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"named exports")," must be of the type ",(0,n.kt)("inlineCode",{parentName:"p"},"BibloItem"),".")),(0,n.kt)("h2",{id:"props"},"Props"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"title")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"The title of the state of your component, that you want to show off.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"description")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"A description.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"props")),(0,n.kt)("td",{parentName:"tr",align:null},"{}"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"An object defining a set of props to apply to your component.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"wrapper")),(0,n.kt)("td",{parentName:"tr",align:null},"React.ElementType"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"Sometimes it's helpful to have your component wrapped in another component.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,n.kt)("td",{parentName:"tr",align:null},"StyleProp<ViewStyle",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"Sometimes it's helpful to just add some styling to the ",(0,n.kt)("inlineCode",{parentName:"td"},"View")," (or another component) that your component is being wrapped inside.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"-simplest"},"\ud83c\udf31 Simplest"),(0,n.kt)("p",null,"This is the simplest way to export an example of your component."),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Separator.biblo.tsx"',title:'"Separator.biblo.tsx"'},"const Template: BibloItem<SeparatorProps> = (props) => <Separator {...props} />;\n\nexport const Default = Template.bind({});\n"))),(0,n.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Separator.biblo.jsx"',title:'"Separator.biblo.jsx"'},"const Template = (props) => <Separator {...props} />;\n\nexport const Default = Template.bind({});\n")))),(0,n.kt)("p",null,"The title of the example will be ",(0,n.kt)("strong",{parentName:"p"},"Default")," and it will have no description, no props, no wrapper, no nothing."),(0,n.kt)("h3",{id:"-still-simple"},"\ud83c\udf3f Still simple"),(0,n.kt)("p",null,"Here we'll give it a bit more something something."),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Separator.biblo.tsx"',title:'"Separator.biblo.tsx"'},'const Template: BibloItem<SeparatorProps> = (props) => <Separator {...props} />;\n\nexport const Vertical = Template.bind({});\nVertical.title = "A vertical separator";\nVertical.description = "This is the Separator component in its vertical state.";\nVertical.props = {\n    vertical: true,\n};\nVertical.wrapperStyle = {\n    padding: 10,\n};\n'))),(0,n.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Separator.biblo.jsx"',title:'"Separator.biblo.jsx"'},'const Template = (props) => <Separator {...props} />;\n\nexport const Vertical = Template.bind({});\nVertical.title = "A vertical separator";\nVertical.description = "This is the Separator component in its vertical state.";\nVertical.props = {\n    vertical: true,\n};\nVertical.wrapperStyle = {\n    padding: 10,\n};\n')))),(0,n.kt)("h3",{id:"-advanced"},"\ud83c\udf34 Advanced"),(0,n.kt)("p",null,"In case you need to use hooks or some other JavaScript logic - here's how you do it:"),(0,n.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Separator.biblo.tsx"',title:'"Separator.biblo.tsx"'},'export const BrandColored: BibloItem<SeparatorProps> = (props) => {\n    const { palette } = useTheme();\n    return <Separator {...props} color={palette.brandColor} />;\n};\nBrandColored.title = "Colored (brand)";\nBrandColored.description = "This is the Separator component in our brand color.";\nBrandColored.props = {\n    margin: true,\n    style: "dashed",\n};\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you can't or don't want to import an interface or type definition for the\nprops of a component, use this instead:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"type SeparatorProps = React.ComponentProps<typeof Separator>\n")))),(0,n.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Separator.biblo.jsx"',title:'"Separator.biblo.jsx"'},'export const BrandColored = (props) => {\n    const { palette } = useTheme();\n    return <Separator {...props} color={palette.brandColor} />;\n};\nBrandColored.title = "Colored (brand)";\nBrandColored.description = "This is the Separator component in our brand color.";\nBrandColored.props = {\n    margin: true,\n    style: "dashed",\n};\n')))))}c.isMDXComponent=!0}}]);