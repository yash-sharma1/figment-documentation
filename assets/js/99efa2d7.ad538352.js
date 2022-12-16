"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},53068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Delegate",slug:"/guides/staking-api/avalanche/delegate",pagination_prev:null},o=void 0,l={unversionedId:"guides/staking-api/Avalanche/delegate/index",id:"guides/staking-api/Avalanche/delegate/index",title:"Delegate",description:"Delegating AVAX is a simple process. We will collect:",source:"@site/docs/guides/staking-api/Avalanche/delegate/index.mdx",sourceDirName:"guides/staking-api/Avalanche/delegate",slug:"/guides/staking-api/avalanche/delegate",permalink:"/guides/staking-api/avalanche/delegate",draft:!1,tags:[],version:"current",frontMatter:{title:"Delegate",slug:"/guides/staking-api/avalanche/delegate",pagination_prev:null},sidebar:"docsSidebar",next:{title:"Create New Delegation Flow",permalink:"/guides/staking-api/avalanche/delegate/create-new-flow"}},c={},p=[],s={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Delegating AVAX is a simple process. We will collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The delegating address"),(0,i.kt)("li",{parentName:"ul"},"The signing public key"),(0,i.kt)("li",{parentName:"ul"},"The validator address"),(0,i.kt)("li",{parentName:"ul"},"The amount of AVAX to be staked"),(0,i.kt)("li",{parentName:"ul"},"Optionally, a max gas amount (upper limit of the transaction fee to be paid)")),(0,i.kt)("p",null,"Once the delegating transaction is confirmed on-chain, the delegation will immediately be active and earning staking rewards."),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note that there is no concept of unstaking or undelegating on Avalanche.",(0,i.kt)("br",{parentName:"p"}),"\n","Delegations are active until the end time specified at delegation creation, and automatically deactivate and become liquid at that specified time.\nIf no end time is specified, it will default to the end time of the validator."),(0,i.kt)("p",{parentName:"admonition"},"This can not be changed once the delegation transaction is confirmed on-chain.")))}d.isMDXComponent=!0}}]);