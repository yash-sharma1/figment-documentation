"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[6404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,f=c["".concat(p,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Delegate",slug:"/guides/staking-api/polkadot/delegate",sidebar_position:1,pagination_prev:null},i=void 0,l={unversionedId:"guides/staking-api/Polkadot/delegate/index",id:"guides/staking-api/Polkadot/delegate/index",title:"Delegate",description:"The Staking API's DOT staking flow will walk your application through the process of both bonding DOT, and making validator nominations. You are able to skip either step so effectively you can:",source:"@site/docs/guides/staking-api/Polkadot/delegate/index.mdx",sourceDirName:"guides/staking-api/Polkadot/delegate",slug:"/guides/staking-api/polkadot/delegate",permalink:"/guides/staking-api/polkadot/delegate",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Delegate",slug:"/guides/staking-api/polkadot/delegate",sidebar_position:1,pagination_prev:null},sidebar:"docsSidebar",next:{title:"Create New Delegation Flow",permalink:"/guides/staking-api/polkadot/delegate/create-new-flow"}},p={},s=[],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Staking API's DOT staking flow will walk your application through the process of both bonding DOT, and making validator nominations. You are able to skip either step so effectively you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bond and nominate"),(0,o.kt)("li",{parentName:"ul"},"Bond (or bond extra) with or without updating nominations"),(0,o.kt)("li",{parentName:"ul"},"Just nominate")),(0,o.kt)("p",null,"In the following steps we will illustrate how to bond and nominate in one flow."))}c.isMDXComponent=!0}}]);