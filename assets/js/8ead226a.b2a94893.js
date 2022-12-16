"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),u=i,m=g["".concat(c,".").concat(u)]||g[u]||d[u]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Sign Claim Transaction",slug:"/guides/staking-api/polygon/delegate/sign-claim-transaction"},o=void 0,s={unversionedId:"guides/staking-api/Polygon/undelegate/sign-claim-transaction",id:"guides/staking-api/Polygon/undelegate/sign-claim-transaction",title:"Sign Claim Transaction",description:"Sign the claim transaction using the transaction_payload you received in response to submitting the claim data.",source:"@site/docs/guides/staking-api/Polygon/undelegate/7_sign-claim-transaction.mdx",sourceDirName:"guides/staking-api/Polygon/undelegate",slug:"/guides/staking-api/polygon/delegate/sign-claim-transaction",permalink:"/guides/staking-api/polygon/delegate/sign-claim-transaction",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Sign Claim Transaction",slug:"/guides/staking-api/polygon/delegate/sign-claim-transaction"},sidebar:"docsSidebar",previous:{title:"Submit Claim Transaction Data",permalink:"/guides/staking-api/polygon/delegate/submit-claim-transaction-data"},next:{title:"Submit Signed Claim Transaction for Broadcast",permalink:"/guides/staking-api/polygon/delegate/submit-a-signed-claim-transaction"}},c={},l=[],p={toc:l};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sign the claim transaction using the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," you received in response to submitting the claim data."),(0,i.kt)("p",null,"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," in the response from the previous step. It will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"transaction_payload": "0x02f86d05028459682f0084597a1b168304cf969415ed57ca28cbebb58d9c6c62f570046bc089bc6680b844c83ec04d0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000c0"\n')),(0,i.kt)("admonition",{title:"important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Always confirm the details of the transaction before signing the payload."),(0,i.kt)("p",{parentName:"admonition"},"Figment has a tool for signing and decoding Staking API payloads, see the guide ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/figment-signing-transactions"},"Signing Transactions with Figment's NPM Package")," to continue.")),(0,i.kt)("p",null,"Transactions can also be signed using ",(0,i.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.2.11/web3-eth-accounts.html#signtransaction"},"web3.js")," or ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/fireblocks-signing-transactions"},"Fireblocks"),"."),(0,i.kt)("p",null,"Sign the transaction and move on to the next step. A signed transaction payload for Polygon will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"0x02f8b005028459682f0084597a1b168304cf969415ed57ca28cbebb58d9c6c62f570046bc089bc6680b844c83ec04d0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000c001a0f8462149f25c9942852611ea06820bf0b3f588f63aead9702225010b2e80a096a0765feade968806e16f36cadf533d779ceb071f54ca6cf4935f6464302c0873da\n")))}g.isMDXComponent=!0}}]);