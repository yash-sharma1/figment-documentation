"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,f=p["".concat(c,".").concat(u)]||p[u]||g[u]||o;return a?n.createElement(f,r(r({ref:t},l),{},{components:a})):n.createElement(f,r({ref:t},l))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={title:"Sign the Deactivate Transaction",slug:"/guides/staking-api/solana/undelegate/sign-deactivate-transaction"},r=void 0,s={unversionedId:"guides/staking-api/Solana/undelegate/sign-deactivate-transaction",id:"guides/staking-api/Solana/undelegate/sign-deactivate-transaction",title:"Sign the Deactivate Transaction",description:"The transaction signing window on Solana is sometimes less than 90 seconds.",source:"@site/docs/guides/staking-api/Solana/undelegate/3_sign-deactivate-transaction.mdx",sourceDirName:"guides/staking-api/Solana/undelegate",slug:"/guides/staking-api/solana/undelegate/sign-deactivate-transaction",permalink:"/guides/staking-api/solana/undelegate/sign-deactivate-transaction",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Sign the Deactivate Transaction",slug:"/guides/staking-api/solana/undelegate/sign-deactivate-transaction"},sidebar:"docsSidebar",previous:{title:"Submit Deactivate Transaction Data",permalink:"/guides/staking-api/solana/undelegate/submit-deactivate-transaction-data"},next:{title:"Submit a Signed Deactivate Transaction for Broadcast",permalink:"/guides/staking-api/solana/undelegate/submit-signed-deactivate-transaction"}},c={},d=[],l={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"important",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The transaction signing window on Solana is sometimes less than 90 seconds."),(0,i.kt)("p",{parentName:"admonition"},"If you encounter an error ",(0,i.kt)("inlineCode",{parentName:"p"},'"Transaction simulation failed: Blockhash not found"'),", refresh the transaction, sign the payload again and submit it in < 90 seconds.")),(0,i.kt)("p",null,"Sign the deactivate transaction using the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," you received in response to submitting the deactivate data."),(0,i.kt)("p",null,"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," in the response from the previous step. It will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"transaction_payload": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f66b44cae6208cbfb97f8d42d17b58813afe4c064a01e1a006e2280f410f491e0102030103000405000000"\n')),(0,i.kt)("admonition",{title:"important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Always confirm the details of the transaction before signing the payload."),(0,i.kt)("p",{parentName:"admonition"},"Figment has a tool for signing and decoding Staking API payloads, see the guide ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/figment-signing-transactions"},"Signing Transactions with Figment's NPM Package")," to continue.")),(0,i.kt)("p",null,"Transactions can also be signed using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/offline-signing#:~:text=Typically%20a%20Solana%20transaction%20must,the%20extra%20time%20you%20need"},"Solana CLI")," or ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/fireblocks-signing-transactions"},"Fireblocks"),"."),(0,i.kt)("p",null,"Sign the transaction and move on to the next step. A signed transaction payload for Solana will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"01bcb2080ae1c2b9fff4ada65acc0ac7b4db4c0bb618e7a6f433b5bef120648ab8033f36012447bb14d78066a7cefee548f0b3420efbfac3956b6300ff7966a80301000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f66b44cae6208cbfb97f8d42d17b58813afe4c064a01e1a006e2280f410f491e0102030103000405000000\n")))}p.isMDXComponent=!0}}]);