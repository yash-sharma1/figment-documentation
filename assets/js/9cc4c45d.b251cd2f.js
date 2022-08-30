"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,w=u["".concat(p,".").concat(f)]||u[f]||c[f]||a;return n?r.createElement(w,i(i({ref:t},d),{},{components:n})):r.createElement(w,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Create a New Flow"},i=void 0,l={unversionedId:"guides/slate-flows/polkadot/add-staking-proxy/create-new-flow",id:"guides/slate-flows/polkadot/add-staking-proxy/create-new-flow",title:"Create a New Flow",description:"We will create a new Flow with POST /api/v1/flows.",source:"@site/docs/guides/slate-flows/polkadot/add-staking-proxy/1_create-new-flow.mdx",sourceDirName:"guides/slate-flows/polkadot/add-staking-proxy",slug:"/guides/slate-flows/polkadot/add-staking-proxy/create-new-flow",permalink:"/guides/slate-flows/polkadot/add-staking-proxy/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a New Flow"},sidebar:"docsSidebar",previous:{title:"Add a Staking Proxy",permalink:"/guides/slate-flows/polkadot/add-staking-proxy/"},next:{title:"Submit the Add Proxy Data",permalink:"/guides/slate-flows/polkadot/add-staking-proxy/submit-add-proxy-data"}},p={},s=[],d={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We will create a new Flow with ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/v1/flows"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"flow")," JSON field for this request will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "operation": "add_proxy",\n  "version": "v1"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST https://polkadot-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "polkadot",\n    "chain_code": "westend",\n    "operation": "add_proxy",\n    "version": "v1"\n  }\n}\'\n')),(0,o.kt)("p",null,"The response indicates one possible action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create_add_proxy_tx")," - use this action to generate an add proxy transaction.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"create_add_proxy_tx")," action indicates two fields for data collection:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"proxy_account_address")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") \u2014 The address to which you want to grant proxy rights."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"proxied_account_address")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") \u2014 The account whose rights will be proxied.")))}c.isMDXComponent=!0}}]);