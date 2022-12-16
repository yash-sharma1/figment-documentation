"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=s(n),f=i,u=g["".concat(d,".").concat(f)]||g[f]||p[f]||o;return n?a.createElement(u,r(r({ref:t},l),{},{components:n})):a.createElement(u,r({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[g]="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Sign the Bonding Transaction",slug:"/guides/staking-api/polkadot/delegate/sign-bonding-transaction"},r=void 0,c={unversionedId:"guides/staking-api/Polkadot/delegate/sign-bonding-transaction",id:"guides/staking-api/Polkadot/delegate/sign-bonding-transaction",title:"Sign the Bonding Transaction",description:"Sign the bonding transaction using the transaction_payload you received in response to submitting the bonding data.",source:"@site/docs/guides/staking-api/Polkadot/delegate/3_sign-bonding-transaction.mdx",sourceDirName:"guides/staking-api/Polkadot/delegate",slug:"/guides/staking-api/polkadot/delegate/sign-bonding-transaction",permalink:"/guides/staking-api/polkadot/delegate/sign-bonding-transaction",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Sign the Bonding Transaction",slug:"/guides/staking-api/polkadot/delegate/sign-bonding-transaction"},sidebar:"docsSidebar",previous:{title:"Submit Bonding Transaction Data",permalink:"/guides/staking-api/polkadot/delegate/submit-bonding-transaction-data"},next:{title:"Submit Signed Bonding Transaction for Broadcast",permalink:"/guides/staking-api/polkadot/delegate/submit-signed-bonding-transaction"}},d={},s=[],l={toc:s};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sign the bonding transaction using the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," you received in response to submitting the bonding data."),(0,i.kt)("p",null,"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," in the response from the previous step. It will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"transaction_payload": "0x0000000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e000000000000000000000000000000000000000000000000000000000000000000000000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c1c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004"\n')),(0,i.kt)("admonition",{title:"important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Always confirm the details of the transaction before signing the payload."),(0,i.kt)("p",{parentName:"admonition"},"Figment has a tool for signing and decoding Staking API payloads, see the guide ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/figment-signing-transactions"},"Signing Transactions with Figment's npm Package")," to continue.")),(0,i.kt)("p",null,"Transactions can also be signed using the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-transaction-construction"},"PolkadotJS Tools")," or ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/fireblocks-signing-transactions"},"Fireblocks"),"."),(0,i.kt)("p",null,"Sign the transaction and move on to the next step. A signed transaction payload for Polkadot will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"0xc10284008e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c01feec62b92266c99ce19a4421290b1bfbb56751a783b64ce3d701a5c8ec3e971929000e1849eb07ec7016cc7ff81b67f8a8ae6858b19de6eb313a6871624fbe8d0000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c\n")))}g.isMDXComponent=!0}}]);