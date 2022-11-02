"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7438],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Get Flow Status",slug:"/guides/staking-api/polygon/get-flow-status"},i=void 0,l={unversionedId:"guides/staking-api/Polygon/claim/get-flow-status",id:"guides/staking-api/Polygon/claim/get-flow-status",title:"Get Flow Status",description:"To get the current state of the existing flow, send a GET request to /api/v1/flows/[:flow_id] using the flow ID from the previous step.",source:"@site/docs/guides/staking-api/Polygon/claim/5_get-flow-status.mdx",sourceDirName:"guides/staking-api/Polygon/claim",slug:"/guides/staking-api/polygon/get-flow-status",permalink:"/guides/staking-api/polygon/get-flow-status",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get Flow Status",slug:"/guides/staking-api/polygon/get-flow-status"},sidebar:"docsSidebar",previous:{title:"Submit Signed Claim Rewards Transaction for Broadcast",permalink:"/guides/staking-api/polygon/claim/submit-signed-claim-rewards-transaction"},next:{title:"Delegate",permalink:"/guides/staking-api/solana/delegate"}},s={},p=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"Claim Rewards Flow Complete",id:"claim-rewards-flow-complete",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To get the current state of the existing flow, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]")," using the flow ID from the previous step."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://polkadot-slate.datahub.figment.io/api/v1/flows/86d9a004-12b6-4142-90cb-9ade53864e29' \\\n-H 'Authorization: <api_key>'\n")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," field will update from ",(0,r.kt)("inlineCode",{parentName:"p"},"claim_rewards_tx_broadcasting")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"done"),".")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "72a981d4-419b-43c2-92eb-56497f9a23f6",\n  "state": "done",\n  "actions": [],\n  "data": {\n    "delegator_address": "0xD0D77667f64CAd06a4789497065F2aaF1636Ee31",\n    "validator_address": "0x0b764b080a67f9019677Ae2c9279F52485Fd4525",\n    "claim_rewards_transaction": {\n      "raw": "0x02ec05328459682f008459693e3283024d18940b764b080a67f9019677ae2c9279f52485fd45258084c7b8981cc0",\n      "signing_payload": null,\n      "signed": "0x02f86f05328459682f008459693e3283024d18940b764b080a67f9019677ae2c9279f52485fd45258084c7b8981cc080a033ac92a662cfb3c80721dd0d1481511d492da9a608821bee6ef7c0bfa58582ffa06f4015f4f36a7f5874273ea19f6fd81f1c0d8ab952cae2720f5bce1b6f6ac05c",\n      "hash": "0x0599175dd9e839111c46aaf766fbb8f1821273e53e269a451282e2a12e3b5689",\n      "status": null,\n      "error": null,\n      "signatures": [\n        {\n          "account_address": "0xD0D77667f64CAd06a4789497065F2aaF1636Ee31",\n          "signature": ""\n        }\n      ],\n      "gas_limit": null,\n      "gas_price": null\n    }\n  },\n  "network_code": "polygon",\n  "chain_code": "testnet",\n  "created_at": "2022-09-15T13:00:32.982Z",\n  "updated_at": "2022-09-15T13:10:45.368Z"\n}\n')),(0,r.kt)("h3",{id:"claim-rewards-flow-complete"},"Claim Rewards Flow Complete"),(0,r.kt)("p",null,"Congratulations, you have claimed your MATIC rewards!"))}u.isMDXComponent=!0}}]);