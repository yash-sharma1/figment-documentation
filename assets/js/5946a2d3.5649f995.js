"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={title:"Submit Undelegate Data",slug:"/guides/staking-api/near/undelegate/submit-undelegate-data"},l=void 0,o={unversionedId:"guides/staking-api/Near/undelegate/submit-undelegate-data",id:"guides/staking-api/Near/undelegate/submit-undelegate-data",title:"Submit Undelegate Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to proceed to the next step.",source:"@site/docs/guides/staking-api/Near/undelegate/2_submit-undelegate-data.mdx",sourceDirName:"guides/staking-api/Near/undelegate",slug:"/guides/staking-api/near/undelegate/submit-undelegate-data",permalink:"/guides/staking-api/near/undelegate/submit-undelegate-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Undelegate Data",slug:"/guides/staking-api/near/undelegate/submit-undelegate-data"},sidebar:"docsSidebar",previous:{title:"Create New Undelegation Flow",permalink:"/guides/staking-api/near/undelegate/create-new-flow"},next:{title:"Sign the Undelegate Transaction",permalink:"/guides/staking-api/near/undelegate/sign-undelegate-transaction"}},d={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After collecting the required inputs, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The delegator address (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_pubkey")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The pubkey of the signing account (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Validator address from which NEAR will be undelegated (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undelegate_amount")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," The amount of NEAR to be undelegated (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undelegate_maximum")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if you wish to unbond the full delegated balance without needing to know the exact delegated balance (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_gas")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," Adjust if you wish to limit the possible transaction fee (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-11}","{5-11}":!0},'curl -X PUT \'https://near-slate.datahub.figment.io/api/v1/flows/96237daf-973a-456b-ae07-a5e16eeffbd1/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "create_undelegate_tx",\n  "inputs": {\n    "validator_address": "01node.pool.f863973.m0",\n    "delegator_address": "slate-demo.testnet",\n    "delegator_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "undelegate_amount": "25"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"The response indicates two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_undelegate_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., the nonce has increased)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_undelegate_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("p",null,"We will choose ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_undelegate_tx"),", which indicates one input to collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "96237daf-973a-456b-ae07-a5e16eeffbd1",\n  "state": "undelegate_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_undelegate_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_undelegate_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY"],\n          "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3905cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d308e0f6b6bb5b283186516419e2d4c06a47f7d55b456b83947fb5f8fb815957df6010000000207000000756e7374616b65270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY"],\n          "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3905cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d308e0f6b6bb5b283186516419e2d4c06a47f7d55b456b83947fb5f8fb815957df6010000000207000000756e7374616b65270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000",\n          "signing_payload": "3ff41ac1a4b1f35e22412c3ebaa29b5e3075427929f111609d1cfc6706a27e2b"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": "slate-demo.testnet",\n    "delegator_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "validator_address": "01node.pool.f863973.m0",\n    "max_gas": null,\n    "undelegate_amount": "25.0",\n    "undelegate_maximum": null,\n    "undelegate_transaction": {\n      "raw": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3905cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d308e0f6b6bb5b283186516419e2d4c06a47f7d55b456b83947fb5f8fb815957df6010000000207000000756e7374616b65270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000",\n      "signing_payload": "3ff41ac1a4b1f35e22412c3ebaa29b5e3075427929f111609d1cfc6706a27e2b",\n      "signed": null,\n      "hash": "5JeaBzEJguWfF35C8duE1vDRzP8rSQU4DM8T7stXLcEN",\n      "status": null,\n      "error": null,\n      "signatures": null\n    },\n    "estimated_inactive_at": null,\n    "withdraw_amount": null,\n    "withdraw_maximum": null,\n    "withdraw_transaction": null\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-09-26T16:15:50.379Z",\n  "updated_at": "2022-09-26T16:19:09.645Z"\n}\n')),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}p.isMDXComponent=!0}}]);