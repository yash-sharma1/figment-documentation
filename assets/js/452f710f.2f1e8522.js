"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5971],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=r,u=p["".concat(c,".").concat(g)]||p[g]||f[g]||i;return t?a.createElement(u,o(o({ref:n},d),{},{components:t})):a.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},61858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={title:"Sign Transfer Transaction",slug:"/guides/staking-api/solana/transfer/sign-transfer-transaction"},o=void 0,s={unversionedId:"guides/staking-api/Solana/transfer/sign-transfer-transaction",id:"guides/staking-api/Solana/transfer/sign-transfer-transaction",title:"Sign Transfer Transaction",description:"The transaction signing window on Solana is sometimes less than 90 seconds.",source:"@site/docs/guides/staking-api/Solana/transfer/3_sign-transfer-transaction.mdx",sourceDirName:"guides/staking-api/Solana/transfer",slug:"/guides/staking-api/solana/transfer/sign-transfer-transaction",permalink:"/guides/staking-api/solana/transfer/sign-transfer-transaction",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Sign Transfer Transaction",slug:"/guides/staking-api/solana/transfer/sign-transfer-transaction"},sidebar:"docsSidebar",previous:{title:"Submit Transfer Data",permalink:"/guides/staking-api/solana/transfer/submit-transfer-data"},next:{title:"Submit a Signed Transfer Transaction for Broadcast",permalink:"/guides/staking-api/solana/transfer/submit-signed-transfer-transaction"}},c={},l=[],d={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"important",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The transaction signing window on Solana is sometimes less than 90 seconds."),(0,r.kt)("p",{parentName:"admonition"},"If you encounter an error ",(0,r.kt)("inlineCode",{parentName:"p"},'"Transaction simulation failed: Blockhash not found"'),", refresh the transaction, sign the payload again and submit it in < 90 seconds.")),(0,r.kt)("p",null,"Sign the transfer transaction using the ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_payload")," you received in response to submitting the transfer data."),(0,r.kt)("p",null,"Locate the ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_payload")," in the response from the previous step. It will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"transaction_payload": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000103f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5347fdda76b682402ecb38e705b77d7eee793c587b6294a461c14ad89e7e161ade50000000000000000000000000000000000000000000000000000000000000000ecf65dc056903c93ef0555d52d65d355390c99d9e57176f8cdc859a87f0dfaf401020200010c0200000000ca9a3b00000000"\n')),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Always confirm the details of the transaction before signing the payload."),(0,r.kt)("p",{parentName:"admonition"},"Figment has a tool for signing and decoding Staking API payloads, see the guide ",(0,r.kt)("a",{parentName:"p",href:"/guides/staking-api/figment-signing-transactions"},"Signing Transactions with Figment's NPM Package")," to continue.")),(0,r.kt)("p",null,"Transactions can also be signed using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/offline-signing#:~:text=Typically%20a%20Solana%20transaction%20must,the%20extra%20time%20you%20need"},"Solana CLI")," or ",(0,r.kt)("a",{parentName:"p",href:"/guides/staking-api/fireblocks-signing-transactions"},"Fireblocks"),"."),(0,r.kt)("p",null,"Sign the transaction and move on to the next step. A signed transaction payload for Solana will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"0131a75ee59c9946c5c714a2ac67a1dfa7d6954f1f6b785f482a84215270ccc8428b112c6e0532f995d08338d6eb546b785f409a8ba9c289e378db3749e88c440601000103f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5347fdda76b682402ecb38e705b77d7eee793c587b6294a461c14ad89e7e161ade50000000000000000000000000000000000000000000000000000000000000000ecf65dc056903c93ef0555d52d65d355390c99d9e57176f8cdc859a87f0dfaf401020200010c0200000000ca9a3b00000000\n")))}p.isMDXComponent=!0}}]);