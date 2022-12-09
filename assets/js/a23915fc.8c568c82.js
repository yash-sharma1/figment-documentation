"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9568],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},g=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),l=d(a),f=i,u=l["".concat(c,".").concat(f)]||l[f]||p[f]||o;return a?n.createElement(u,r(r({ref:t},g),{},{components:a})):n.createElement(u,r({ref:t},g))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6426:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={title:"Sign the Delegate Transaction",slug:"/guides/staking-api/cosmos/staking/sign-delegate-transaction"},r=void 0,s={unversionedId:"guides/staking-api/Cosmos/staking/sign-delegate-transaction",id:"guides/staking-api/Cosmos/staking/sign-delegate-transaction",title:"Sign the Delegate Transaction",description:"Sign the delegate transaction using the transaction_payload you received in response to submitting the delegation data.",source:"@site/docs/guides/staking-api/Cosmos/staking/3_sign-delegate-transaction.mdx",sourceDirName:"guides/staking-api/Cosmos/staking",slug:"/guides/staking-api/cosmos/staking/sign-delegate-transaction",permalink:"/guides/staking-api/cosmos/staking/sign-delegate-transaction",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Sign the Delegate Transaction",slug:"/guides/staking-api/cosmos/staking/sign-delegate-transaction"},sidebar:"docsSidebar",previous:{title:"Submit Delegation Data",permalink:"/guides/staking-api/cosmos/staking/submit-delegation-data"},next:{title:"Submit Signed Delegate Transaction for Broadcast",permalink:"/guides/staking-api/cosmos/staking/submit-signed-transaction"}},c={},d=[],g={toc:d};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sign the delegate transaction using the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," you received in response to submitting the delegation data."),(0,i.kt)("p",null,"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," in the response from the previous step. It will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"transaction_payload": "7b226d65737361676573223a5b7b227479706555726c223a222f636f736d6f732e7374616b696e672e763162657461312e4d736744656c6567617465222c2276616c7565223a7b2264656c656761746f7241646472657373223a22636f736d6f733175383575706b3276377072363567307776323937367a6c6575367638716a6c39717072767a6c222c2276616c696461746f7241646472657373223a22636f736d6f7376616c6f7065723174666c6b33306d71357667716a646c7939326b6b686871337261657632686e7a366565746533222c22616d6f756e74223a7b2264656e6f6d223a227561746f6d222c22616d6f756e74223a2232303030303030227d7d7d5d2c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a2233383937222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22313535383634227d2c226d656d6f223a22227d"\n')),(0,i.kt)("admonition",{title:"important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Always confirm the details of the transaction before signing the payload."),(0,i.kt)("p",{parentName:"admonition"},"Figment has a tool for signing and decoding Staking API payloads, see the guide ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/figment-signing-transactions"},"Signing Transactions with Figment's npm Package")," to continue.")),(0,i.kt)("p",null,"Transactions can also be signed using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/txs.html"},"Cosmos CLI")," or ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/fireblocks-signing-transactions"},"Fireblocks"),"."),(0,i.kt)("p",null,"Sign the transaction and move on to the next step. A signed transaction payload for Cosmos will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"0aa1010a9e010a232f636f736d6f732e7374616b696e672e763162657461312e4d736744656c656761746512770a2d636f736d6f733175383575706b3276377072363567307776323937367a6c6575367638716a6c39717072767a6c1234636f736d6f7376616c6f7065723174666c6b33306d71357667716a646c7939326b6b686871337261657632686e7a3665657465331a100a057561746f6d12073230303030303012670a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102db33d72ee215f1a61e5f4ffa098b9325cc1da6f5c3557974ad0f21a5ec9fe23512040a020801180212130a0d0a057561746f6d12043338393710d8c1091a40970af80c824579cc1fe7dbf33b2118bb72e92e4c61f80e6e3dbb3a943abfb49825baa026830536b1c7e826cf1da23fae829cb7ef91db0c8ea856bf7bd60488b9\n")))}l.isMDXComponent=!0}}]);