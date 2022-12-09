"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7807],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,b=u["".concat(l,".").concat(f)]||u[f]||p[f]||r;return t?n.createElement(b,d(d({ref:a},c),{},{components:t})):n.createElement(b,d({ref:a},c))}));function b(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,d=new Array(r);d[0]=f;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:i,d[1]=o;for(var s=2;s<r;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2566:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const r={title:"Submit Withdrawal Data",slug:"/guides/staking-api/near/undelegate/submit-withdraw-data"},d=void 0,o={unversionedId:"guides/staking-api/Near/undelegate/submit-withdraw-data",id:"guides/staking-api/Near/undelegate/submit-withdraw-data",title:"Submit Withdrawal Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to proceed to the next step.",source:"@site/docs/guides/staking-api/Near/undelegate/7_submit-withdraw-data.mdx",sourceDirName:"guides/staking-api/Near/undelegate",slug:"/guides/staking-api/near/undelegate/submit-withdraw-data",permalink:"/guides/staking-api/near/undelegate/submit-withdraw-data",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Submit Withdrawal Data",slug:"/guides/staking-api/near/undelegate/submit-withdraw-data"},sidebar:"docsSidebar",previous:{title:"Unbonding Period",permalink:"/guides/staking-api/near/undelegate/unbonding-period"},next:{title:"Sign the Withdrawal Transaction",permalink:"/guides/staking-api/near/undelegate/sign-withdraw-transaction"}},l={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],c={toc:s};function u(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After collecting the required inputs, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The delegator address (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_pubkey")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The pubkey of the signing account (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Validator address from which NEAR will be undelegated (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdraw_amount")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," The amount of NEAR to be withdrawn (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdraw_maximum")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if you wish to withdraw the full available balance without needing to know the exact available balance. (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_gas")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," Adjust if you wish to limit the possible transaction fee (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-11}","{5-11}":!0},'curl -X PUT \'https://near-slate.datahub.figment.io/api/v1/flows/96237daf-973a-456b-ae07-a5e16eeffbd1/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "create_withdraw_tx",\n   "inputs": {\n    "validator_address": "01node.pool.f863973.m0",\n    "delegator_address": "slate-demo.testnet",\n    "delegator_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "withdraw_amount": "25"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"The response indicates two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_withdraw_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., if the nonce needs to be updated)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_withdraw_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("p",null,"We will choose ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_withdraw_tx"),", which indicates one input to collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{5,7,16}","{5,7,16}":!0},'{\n  "id": "96237daf-973a-456b-ae07-a5e16eeffbd1",\n  "state": "withdraw_tx_signature",\n  "actions": [\n    { "name": "refresh_withdraw_tx", "inputs": [] },\n    {\n      "name": "sign_withdraw_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY"],\n          "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3907cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d3084edd29289b3a590be582317bb0061016a8df058b7c29a0278f5b82f86c283010100000002080000007769746864726177270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY"],\n          "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3907cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d3084edd29289b3a590be582317bb0061016a8df058b7c29a0278f5b82f86c283010100000002080000007769746864726177270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000",\n          "signing_payload": "b3988227217a53c7eaf6b904aa30c40fe218f81c6a9c6313baf22a305b5600b2"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": "slate-demo.testnet",\n    "delegator_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "validator_address": "01node.pool.f863973.m0",\n    "max_gas": null,\n    "undelegate_amount": "25.0",\n    "undelegate_maximum": null,\n    "undelegate_transaction": {\n      "raw": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3905cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d308e0f6b6bb5b283186516419e2d4c06a47f7d55b456b83947fb5f8fb815957df6010000000207000000756e7374616b65270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000",\n      "signing_payload": "3ff41ac1a4b1f35e22412c3ebaa29b5e3075427929f111609d1cfc6706a27e2b",\n      "signed": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3905cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d308e0f6b6bb5b283186516419e2d4c06a47f7d55b456b83947fb5f8fb815957df6010000000207000000756e7374616b65270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b00000000000000000000000000000000000000d27fe1cabf4535e130002217b79d743941e22110d0b3b3f446aba92d3416eb5774efb6aa925af5ebc78e459218de9ae0baeee7de0e4fad77d299ace7fcf80107",\n      "hash": "5JeaBzEJguWfF35C8duE1vDRzP8rSQU4DM8T7stXLcEN",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    },\n    "estimated_inactive_at": "2022-09-28T16:24:34.472Z",\n    "withdraw_amount": "25.0",\n    "withdraw_maximum": null,\n    "withdraw_transaction": {\n      "raw": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3907cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d3084edd29289b3a590be582317bb0061016a8df058b7c29a0278f5b82f86c283010100000002080000007769746864726177270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000",\n      "signing_payload": "b3988227217a53c7eaf6b904aa30c40fe218f81c6a9c6313baf22a305b5600b2",\n      "signed": null,\n      "hash": "D64riKQvR9ZjTgKG5rNBpQC8WDsxSNPxMQvLb8Ckyk81",\n      "status": null,\n      "error": null,\n      "signatures": null\n    }\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-09-26T16:15:50.379Z",\n  "updated_at": "2022-09-28T16:40:32.482Z"\n}\n')),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}u.isMDXComponent=!0}}]);