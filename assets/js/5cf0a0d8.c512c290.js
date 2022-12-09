"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=c(a),p=r,m=f["".concat(l,".").concat(p)]||f[p]||u[p]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2866:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Get Flow Status",slug:"/guides/staking-api/solana/transfer/get-flow-status-transferred",pagination_next:null},s=void 0,i={unversionedId:"guides/staking-api/Solana/transfer/get-flow-status",id:"guides/staking-api/Solana/transfer/get-flow-status",title:"Get Flow Status",description:"To get the current state of the existing flow, send a GET request to /api/v1/flows/[:flow_id] using the flow ID from the previous step.",source:"@site/docs/guides/staking-api/Solana/transfer/5_get-flow-status.mdx",sourceDirName:"guides/staking-api/Solana/transfer",slug:"/guides/staking-api/solana/transfer/get-flow-status-transferred",permalink:"/guides/staking-api/solana/transfer/get-flow-status-transferred",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get Flow Status",slug:"/guides/staking-api/solana/transfer/get-flow-status-transferred",pagination_next:null},sidebar:"docsSidebar",previous:{title:"Submit a Signed Transfer Transaction for Broadcast",permalink:"/guides/staking-api/solana/transfer/submit-signed-transfer-transaction"}},l={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"Token Transfer Flow Complete",id:"token-transfer-flow-complete",level:3}],d={toc:c};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To get the current state of the existing flow, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]")," using the flow ID from the previous step."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://solana-slate.datahub.figment.io/api/v1/flows/b45f40d1-051a-41fe-907f-a9b73a55b54e' \\\n-H 'Authorization: <api_key>'\n")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," field will update from ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_tx_broadcasting")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"transferred"),".")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "b45f40d1-051a-41fe-907f-a9b73a55b54e",\n  "state": "transferred",\n  "actions": [],\n  "data": {\n    "from_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "to_account_pubkey": "9c8oxENj8XrEM2EMadxUoifZgB1Vbc8GEYqKTxTfPo3i",\n    "amount": "1.0",\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "transfer_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000103f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5347fdda76b682402ecb38e705b77d7eee793c587b6294a461c14ad89e7e161ade50000000000000000000000000000000000000000000000000000000000000000ecf65dc056903c93ef0555d52d65d355390c99d9e57176f8cdc859a87f0dfaf401020200010c0200000000ca9a3b00000000",\n      "signing_payload": "01000103f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5347fdda76b682402ecb38e705b77d7eee793c587b6294a461c14ad89e7e161ade50000000000000000000000000000000000000000000000000000000000000000ecf65dc056903c93ef0555d52d65d355390c99d9e57176f8cdc859a87f0dfaf401020200010c0200000000ca9a3b00000000",\n      "signed": "0131a75ee59c9946c5c714a2ac67a1dfa7d6954f1f6b785f482a84215270ccc8428b112c6e0532f995d08338d6eb546b785f409a8ba9c289e378db3749e88c440601000103f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5347fdda76b682402ecb38e705b77d7eee793c587b6294a461c14ad89e7e161ade50000000000000000000000000000000000000000000000000000000000000000ecf65dc056903c93ef0555d52d65d355390c99d9e57176f8cdc859a87f0dfaf401020200010c0200000000ca9a3b00000000",\n      "hash": "zaaAQtDB4oQuX8MSW9wExZxgm8QAk64fxgsyYV6ZPskWtdHtdQYT8vmuwKdqRyoVfecm8EsAC4XQ3eczjXbzX17",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    }\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-04T17:27:16.158Z",\n  "updated_at": "2022-10-04T17:35:21.643Z"\n}\n')),(0,r.kt)("h3",{id:"token-transfer-flow-complete"},"Token Transfer Flow Complete"),(0,r.kt)("p",null,"Congratulations, you have successfully transferred your tokens!"))}f.isMDXComponent=!0}}]);