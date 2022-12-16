"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"Submit Claim Transaction Data",slug:"/guides/staking-api/polygon/delegate/submit-claim-transaction-data"},o=void 0,l={unversionedId:"guides/staking-api/Polygon/undelegate/submit-claim-transaction-data",id:"guides/staking-api/Polygon/undelegate/submit-claim-transaction-data",title:"Submit Claim Transaction Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to proceed to the next step.",source:"@site/docs/guides/staking-api/Polygon/undelegate/6_submit-claim-transaction-data.mdx",sourceDirName:"guides/staking-api/Polygon/undelegate",slug:"/guides/staking-api/polygon/delegate/submit-claim-transaction-data",permalink:"/guides/staking-api/polygon/delegate/submit-claim-transaction-data",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Submit Claim Transaction Data",slug:"/guides/staking-api/polygon/delegate/submit-claim-transaction-data"},sidebar:"docsSidebar",previous:{title:"Unbonding Period",permalink:"/guides/staking-api/polygon/undelegate/unbonding-period"},next:{title:"Sign Claim Transaction",permalink:"/guides/staking-api/polygon/delegate/sign-claim-transaction"}},s={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After collecting the required inputs, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_limit")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," Adjust if you wish to limit the possible transaction fee (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_price")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," Adjust if you wish to limit the possible transaction fee (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X PUT 'https://polygon-slate.datahub.figment.io/api/v1/flows/07d6752c-c412-4cfa-a12c-65feab06acd6/next' \\\n-H 'Content-Type: application/json' \\\n-H 'Authorization: <api_key>' \\\n-d '{\n  \"name\": \"create_claim_tx\"\n}'\n")),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"We see two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_claim_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (for example, if the nonce needs to be updated)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_claim_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("p",null,"We will choose ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_claim_tx"),", which indicates one input to collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," the signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3,6,10,21}","{3,6,10,21}":!0},'{\n  "id": "07d6752c-c412-4cfa-a12c-65feab06acd6",\n  "state": "claim_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_claim_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_claim_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["0x542138451d0953Aa082dE659d2A1ca1e5EF452Bf"],\n          "transaction_payload": "0x02f84c05038459682f00849b6d87fe830278519415ed57ca28cbebb58d9c6c62f570046bc089bc6680a4e97fddc20000000000000000000000000000000000000000000000000000000000000001c0"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["0x542138451d0953Aa082dE659d2A1ca1e5EF452Bf"],\n          "transaction_payload": "0x02f84c05038459682f00849b6d87fe830278519415ed57ca28cbebb58d9c6c62f570046bc089bc6680a4e97fddc20000000000000000000000000000000000000000000000000000000000000001c0",\n          "signing_payload": null\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": "0x542138451d0953Aa082dE659d2A1ca1e5EF452Bf",\n    "validator_address": "0x15ED57Ca28cbebb58d9c6C62F570046BC089bC66",\n    "amount": "1.0",\n    "max_shares_to_burn": 1000000000000000000,\n    "max_slippage_percentage": 0,\n    "exchange_rate": "100000000000000000000000000000.0",\n    "exchange_rate_precision": "100000000000000000000000000000.0",\n    "unbond_transaction": {\n      "raw": "0x02f86d05028459682f0084597a1b168304cf969415ed57ca28cbebb58d9c6c62f570046bc089bc6680b844c83ec04d0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000c0",\n      "signing_payload": null,\n      "signed": "0x02f8b005028459682f0084597a1b168304cf969415ed57ca28cbebb58d9c6c62f570046bc089bc6680b844c83ec04d0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000c001a0f8462149f25c9942852611ea06820bf0b3f588f63aead9702225010b2e80a096a0765feade968806e16f36cadf533d779ceb071f54ca6cf4935f6464302c0873da",\n      "hash": "0x36c57e119ef341fb23f261a7a44d10d7fe4044ccbcd1b39d509730ee0b75797c",\n      "status": "confirmed",\n      "error": null,\n      "signatures": [],\n      "gas_limit": null,\n      "gas_price": null\n    },\n    "claim_transaction": {\n      "raw": "0x02f84c05038459682f00849b6d87fe830278519415ed57ca28cbebb58d9c6c62f570046bc089bc6680a4e97fddc20000000000000000000000000000000000000000000000000000000000000001c0",\n      "signing_payload": null,\n      "signed": null,\n      "hash": null,\n      "status": null,\n      "error": null,\n      "signatures": null,\n      "gas_limit": null,\n      "gas_price": null\n    },\n    "estimated_unbonded_at": "2022-10-09T09:25:17.514Z",\n    "unbond_checkpoint": 78566,\n    "unbond_nonce": 1\n  },\n  "network_code": "polygon",\n  "chain_code": "testnet",\n  "created_at": "2022-10-06T23:40:33.826Z",\n  "updated_at": "2022-10-11T18:11:23.081Z"\n}\n')),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}p.isMDXComponent=!0}}]);