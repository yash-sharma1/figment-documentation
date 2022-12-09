"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2162],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=d(t),u=r,b=f["".concat(o,".").concat(u)]||f[u]||p[u]||i;return t?n.createElement(b,s(s({ref:a},l),{},{components:t})):n.createElement(b,s({ref:a},l))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c[f]="string"==typeof e?e:r,s[1]=c;for(var d=2;d<i;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2260:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const i={title:"Submit a Signed Transfer Transaction for Broadcast",slug:"/guides/staking-api/solana/transfer/submit-signed-transfer-transaction"},s=void 0,c={unversionedId:"guides/staking-api/Solana/transfer/submit-signed-transaction",id:"guides/staking-api/Solana/transfer/submit-signed-transaction",title:"Submit a Signed Transfer Transaction for Broadcast",description:"After signing the transaction, send a PUT request to /api/v1/flows/[:flow_id]/next with the signed payload.",source:"@site/docs/guides/staking-api/Solana/transfer/4_submit-signed-transaction.mdx",sourceDirName:"guides/staking-api/Solana/transfer",slug:"/guides/staking-api/solana/transfer/submit-signed-transfer-transaction",permalink:"/guides/staking-api/solana/transfer/submit-signed-transfer-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit a Signed Transfer Transaction for Broadcast",slug:"/guides/staking-api/solana/transfer/submit-signed-transfer-transaction"},sidebar:"docsSidebar",previous:{title:"Sign Transfer Transaction",permalink:"/guides/staking-api/solana/transfer/sign-transfer-transaction"},next:{title:"Get Flow Status",permalink:"/guides/staking-api/solana/transfer/get-flow-status-transferred"}},o={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],l={toc:d};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After signing the transaction, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," with the signed payload.\nThe Staking API will broadcast the transaction to the Solana network."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," Signed transaction payload from the previous step's response.")))),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-8}","{5-8}":!0},'curl -X PUT \'https://solana-slate.datahub.figment.io/api/v1/flows/b45f40d1-051a-41fe-907f-a9b73a55b54e/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n    "name": "sign_transfer_tx",\n    "inputs": {\n      "transaction_payload": "0131a75ee59c9946c5c714a2ac67a1dfa7d6954f1f6b785f482a84215270ccc8428b112c6e0532f995d08338d6eb546b785f409a8ba9c289e378db3749e88c440601000103f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5347fdda76b682402ecb38e705b77d7eee793c587b6294a461c14ad89e7e161ade50000000000000000000000000000000000000000000000000000000000000000ecf65dc056903c93ef0555d52d65d355390c99d9e57176f8cdc859a87f0dfaf401020200010c0200000000ca9a3b00000000"\n    }\n}\'\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"With the signed transaction provided, Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer_tx_broadcasting")," ","\u2014"," Transaction has been broadcast and is awaiting confirmation.")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "b45f40d1-051a-41fe-907f-a9b73a55b54e",\n  "state": "transfer_tx_broadcasting",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-10-04T17:35:58.721Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "from_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "to_account_pubkey": "9c8oxENj8XrEM2EMadxUoifZgB1Vbc8GEYqKTxTfPo3i",\n    "amount": "1.0",\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "transfer_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000103f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5347fdda76b682402ecb38e705b77d7eee793c587b6294a461c14ad89e7e161ade50000000000000000000000000000000000000000000000000000000000000000ecf65dc056903c93ef0555d52d65d355390c99d9e57176f8cdc859a87f0dfaf401020200010c0200000000ca9a3b00000000",\n      "signing_payload": "01000103f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5347fdda76b682402ecb38e705b77d7eee793c587b6294a461c14ad89e7e161ade50000000000000000000000000000000000000000000000000000000000000000ecf65dc056903c93ef0555d52d65d355390c99d9e57176f8cdc859a87f0dfaf401020200010c0200000000ca9a3b00000000",\n      "signed": "0131a75ee59c9946c5c714a2ac67a1dfa7d6954f1f6b785f482a84215270ccc8428b112c6e0532f995d08338d6eb546b785f409a8ba9c289e378db3749e88c440601000103f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5347fdda76b682402ecb38e705b77d7eee793c587b6294a461c14ad89e7e161ade50000000000000000000000000000000000000000000000000000000000000000ecf65dc056903c93ef0555d52d65d355390c99d9e57176f8cdc859a87f0dfaf401020200010c0200000000ca9a3b00000000",\n      "hash": "zaaAQtDB4oQuX8MSW9wExZxgm8QAk64fxgsyYV6ZPskWtdHtdQYT8vmuwKdqRyoVfecm8EsAC4XQ3eczjXbzX17",\n      "status": null,\n      "error": null,\n      "signatures": []\n    }\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-04T17:27:16.158Z",\n  "updated_at": "2022-10-04T17:34:58.584Z"\n}\n')))}f.isMDXComponent=!0}}]);