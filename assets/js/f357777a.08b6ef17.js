"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Get Flow Status",slug:"/guides/staking-api/polygon/undelegate/get-flow-status",pagination_next:null},l=void 0,i={unversionedId:"guides/staking-api/Polygon/undelegate/get-flow-status",id:"guides/staking-api/Polygon/undelegate/get-flow-status",title:"Get Flow Status",description:"To get the current state of the existing flow, send a GET request to /api/v1/flows/[:flow_id] using the flow ID from the previous step.",source:"@site/docs/guides/staking-api/Polygon/undelegate/9_get-flow-status.mdx",sourceDirName:"guides/staking-api/Polygon/undelegate",slug:"/guides/staking-api/polygon/undelegate/get-flow-status",permalink:"/guides/staking-api/polygon/undelegate/get-flow-status",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Get Flow Status",slug:"/guides/staking-api/polygon/undelegate/get-flow-status",pagination_next:null},sidebar:"docsSidebar",previous:{title:"Submit Signed Claim Transaction for Broadcast",permalink:"/guides/staking-api/polygon/delegate/submit-a-signed-claim-transaction"}},s={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"Undelegate Flow Complete",id:"undelegate-flow-complete",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To get the current state of the existing flow, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]")," using the flow ID from the previous step."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://polkadot-slate.datahub.figment.io/api/v1/flows/07d6752c-c412-4cfa-a12c-65feab06acd6' \\\n-H 'Authorization: <api_key>'\n")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," field will update from ",(0,r.kt)("inlineCode",{parentName:"p"},"claim_tx_broadcasting")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"done"),".")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "07d6752c-c412-4cfa-a12c-65feab06acd6",\n  "state": "done",\n  "actions": [],\n  "data": {\n    "delegator_address": "0x542138451d0953Aa082dE659d2A1ca1e5EF452Bf",\n    "validator_address": "0x15ED57Ca28cbebb58d9c6C62F570046BC089bC66",\n    "amount": "1.0",\n    "max_shares_to_burn": 1e18,\n    "max_slippage_percentage": 0,\n    "exchange_rate": "100000000000000000000000000000.0",\n    "exchange_rate_precision": "100000000000000000000000000000.0",\n    "unbond_transaction": {\n      "raw": "0x02f86d05028459682f0084597a1b168304cf969415ed57ca28cbebb58d9c6c62f570046bc089bc6680b844c83ec04d0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000c0",\n      "signing_payload": null,\n      "signed": "0x02f8b005028459682f0084597a1b168304cf969415ed57ca28cbebb58d9c6c62f570046bc089bc6680b844c83ec04d0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000c001a0f8462149f25c9942852611ea06820bf0b3f588f63aead9702225010b2e80a096a0765feade968806e16f36cadf533d779ceb071f54ca6cf4935f6464302c0873da",\n      "hash": "0x36c57e119ef341fb23f261a7a44d10d7fe4044ccbcd1b39d509730ee0b75797c",\n      "status": "confirmed",\n      "error": null,\n      "signatures": [],\n      "gas_limit": null,\n      "gas_price": null\n    },\n    "claim_transaction": {\n      "raw": "0x02f84c05038459682f00849b6d87fe830278519415ed57ca28cbebb58d9c6c62f570046bc089bc6680a4e97fddc20000000000000000000000000000000000000000000000000000000000000001c0",\n      "signing_payload": null,\n      "signed": "0x02f88f05038459682f00849b6d87fe830278519415ed57ca28cbebb58d9c6c62f570046bc089bc6680a4e97fddc20000000000000000000000000000000000000000000000000000000000000001c001a0818e02361da6e36a7d0093d385d1f13b0c5e539126023f8a4175ab1a375d0723a0571fabd4f32c978e1b17585f4df52d667ca9bd824204f43db0805a291c635c46",\n      "hash": "0x5a565cc0002c73655cbf976fa3a04d9b9d20bc196e88f414cbdbdaed70ab7af6",\n      "status": null,\n      "error": null,\n      "signatures": [],\n      "gas_limit": null,\n      "gas_price": null\n    },\n    "estimated_unbonded_at": "2022-10-09T09:25:17.514Z",\n    "unbond_checkpoint": 78566,\n    "unbond_nonce": 1\n  },\n  "network_code": "polygon",\n  "chain_code": "testnet",\n  "created_at": "2022-10-06T23:40:33.826Z",\n  "updated_at": "2022-10-11T18:13:51.472Z"\n}\n')),(0,r.kt)("h3",{id:"undelegate-flow-complete"},"Undelegate Flow Complete"),(0,r.kt)("p",null,"Congratulations, your stake is now undelegated and MATIC rewards have been claimed!"))}u.isMDXComponent=!0}}]);