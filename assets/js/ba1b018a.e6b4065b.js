"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,b=u["".concat(s,".").concat(p)]||u[p]||f[p]||i;return n?a.createElement(b,d(d({ref:t},c),{},{components:n})):a.createElement(b,d({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,d[1]=o;for(var l=2;l<i;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Submit Signed Undelegate Transaction for Broadcast",slug:"/guides/staking-api/near/undelegate/submit-signed-undelegate-transaction"},d=void 0,o={unversionedId:"guides/staking-api/Near/undelegate/submit-signed-transaction",id:"guides/staking-api/Near/undelegate/submit-signed-transaction",title:"Submit Signed Undelegate Transaction for Broadcast",description:"After signing the transaction, send a PUT request to /api/v1/flows/[:flow_id]/next with the signed payload.",source:"@site/docs/guides/staking-api/Near/undelegate/4_submit-signed-transaction.mdx",sourceDirName:"guides/staking-api/Near/undelegate",slug:"/guides/staking-api/near/undelegate/submit-signed-undelegate-transaction",permalink:"/guides/staking-api/near/undelegate/submit-signed-undelegate-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit Signed Undelegate Transaction for Broadcast",slug:"/guides/staking-api/near/undelegate/submit-signed-undelegate-transaction"},sidebar:"docsSidebar",previous:{title:"Sign the Undelegate Transaction",permalink:"/guides/staking-api/near/undelegate/sign-undelegate-transaction"},next:{title:"Get Flow Status",permalink:"/guides/staking-api/near/undelegate/get-flow-status-cool_down"}},s={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After signing the transaction, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," with the signed payload.\nThe Staking API will broadcast the transaction to the NEAR network."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," Signed transaction payload from the previous step's response.")))),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-8}","{5-8}":!0},'curl -X PUT \'https://near-slate.datahub.figment.io/api/v1/flows/96237daf-973a-456b-ae07-a5e16eeffbd1/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "sign_undelegate_tx",\n  "inputs": {\n    "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3905cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d308e0f6b6bb5b283186516419e2d4c06a47f7d55b456b83947fb5f8fb815957df6010000000207000000756e7374616b65270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b00000000000000000000000000000000000000d27fe1cabf4535e130002217b79d743941e22110d0b3b3f446aba92d3416eb5774efb6aa925af5ebc78e459218de9ae0baeee7de0e4fad77d299ace7fcf80107"\n  }\n}\'\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"With the signed transaction provided, the Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undelegate_tx_broadcasting")," ","\u2014"," Transaction has been broadcast and is waiting confirmation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cool_down")," ","\u2014"," Transaction has been confirmed and the delegation is unbonding.")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "96237daf-973a-456b-ae07-a5e16eeffbd1",\n  "state": "undelegate_tx_broadcasting",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-09-26T16:25:23.094Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "delegator_address": "slate-demo.testnet",\n    "delegator_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "validator_address": "01node.pool.f863973.m0",\n    "max_gas": null,\n    "undelegate_amount": "25.0",\n    "undelegate_maximum": null,\n    "undelegate_transaction": {\n      "raw": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3905cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d308e0f6b6bb5b283186516419e2d4c06a47f7d55b456b83947fb5f8fb815957df6010000000207000000756e7374616b65270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000",\n      "signing_payload": "3ff41ac1a4b1f35e22412c3ebaa29b5e3075427929f111609d1cfc6706a27e2b",\n      "signed": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3905cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d308e0f6b6bb5b283186516419e2d4c06a47f7d55b456b83947fb5f8fb815957df6010000000207000000756e7374616b65270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b00000000000000000000000000000000000000d27fe1cabf4535e130002217b79d743941e22110d0b3b3f446aba92d3416eb5774efb6aa925af5ebc78e459218de9ae0baeee7de0e4fad77d299ace7fcf80107",\n      "hash": "5JeaBzEJguWfF35C8duE1vDRzP8rSQU4DM8T7stXLcEN",\n      "status": null,\n      "error": null,\n      "signatures": []\n    },\n    "estimated_inactive_at": null,\n    "withdraw_amount": null,\n    "withdraw_maximum": null,\n    "withdraw_transaction": null\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-09-26T16:15:50.379Z",\n  "updated_at": "2022-09-26T16:24:22.552Z"\n}\n')))}u.isMDXComponent=!0}}]);