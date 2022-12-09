"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8467],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"Claim Rewards",slug:"/guides/staking-api/polygon/claim-rewards",sidebar_position:3,pagination_prev:null},o=void 0,l={unversionedId:"guides/staking-api/Polygon/claim/index",id:"guides/staking-api/Polygon/claim/index",title:"Claim Rewards",description:"Claiming MATIC rewards is a simple process. We will collect:",source:"@site/docs/guides/staking-api/Polygon/claim/index.mdx",sourceDirName:"guides/staking-api/Polygon/claim",slug:"/guides/staking-api/polygon/claim-rewards",permalink:"/guides/staking-api/polygon/claim-rewards",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Claim Rewards",slug:"/guides/staking-api/polygon/claim-rewards",sidebar_position:3,pagination_prev:null},sidebar:"docsSidebar",next:{title:"Create New Claim Rewards Flow",permalink:"/guides/staking-api/polygon/claim/create-new-flow"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Claiming MATIC rewards is a simple process. We will collect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The address from which MATIC is delegated"),(0,a.kt)("li",{parentName:"ul"},"The Validator contract to which they are delegated"),(0,a.kt)("li",{parentName:"ul"},"Optionally, the gas limit & gas price to be paid for the claim transaction")),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The amount of MATIC rewards must be greater than 1.0 MATIC before a Claim Rewards transaction is possible.")))}u.isMDXComponent=!0}}]);