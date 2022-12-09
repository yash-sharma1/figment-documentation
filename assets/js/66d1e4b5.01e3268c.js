"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(7294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=s(a),b=c,u=f["".concat(d,".").concat(b)]||f[b]||p[b]||i;return a?n.createElement(u,r(r({ref:t},l),{},{components:a})):n.createElement(u,r({ref:t},l))}));function u(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=a.length,r=new Array(i);r[0]=b;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[f]="string"==typeof e?e:c,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),c=(a(7294),a(3905));const i={title:"Submit Signed Bonding Transaction for Broadcast",slug:"/guides/staking-api/polkadot/delegate/submit-signed-bonding-transaction"},r=void 0,o={unversionedId:"guides/staking-api/Polkadot/delegate/submit-signed-transaction-1",id:"guides/staking-api/Polkadot/delegate/submit-signed-transaction-1",title:"Submit Signed Bonding Transaction for Broadcast",description:"After signing the transaction, send a PUT request to /api/v1/flows/[:flow_id]/next with the signed payload.",source:"@site/docs/guides/staking-api/Polkadot/delegate/4_submit-signed-transaction-1.mdx",sourceDirName:"guides/staking-api/Polkadot/delegate",slug:"/guides/staking-api/polkadot/delegate/submit-signed-bonding-transaction",permalink:"/guides/staking-api/polkadot/delegate/submit-signed-bonding-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit Signed Bonding Transaction for Broadcast",slug:"/guides/staking-api/polkadot/delegate/submit-signed-bonding-transaction"},sidebar:"docsSidebar",previous:{title:"Sign the Bonding Transaction",permalink:"/guides/staking-api/polkadot/delegate/sign-bonding-transaction"},next:{title:"Get Flow Status",permalink:"/guides/staking-api/polkadot/delegate/get-flow-status-bonding_complete"}},d={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],l={toc:s};function f(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"After signing the transaction, send a ",(0,c.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,c.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," with the signed payload.\nThe Staking API will broadcast the transaction to the Polkadot network."),(0,c.kt)("h3",{id:"parameters"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"object"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," Signed transaction payload from the previous step's response.")))),(0,c.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-8}","{5-8}":!0},'curl -X PUT \'https://polkadot-slate.datahub.figment.io/api/v1/flows/90a28f6e-09b4-4fe1-aeb4-c8e3720933ab/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n    "name": "sign_bonding_tx",\n    "inputs": {\n        "transaction_payload": "0xc10284008e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c01feec62b92266c99ce19a4421290b1bfbb56751a783b64ce3d701a5c8ec3e971929000e1849eb07ec7016cc7ff81b67f8a8ae6858b19de6eb313a6871624fbe8d0000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c"\n    }\n}\'\n')),(0,c.kt)("h3",{id:"response"},"Response"),(0,c.kt)("p",null,"With the signed transaction provided, Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be ",(0,c.kt)("inlineCode",{parentName:"p"},"bonding_tx_broadcasting"),"."),(0,c.kt)("p",null,"Upon transaction finalization, the bond will be complete and you can move on to the next step\u2014the nomination transaction."),(0,c.kt)("h4",{id:"sample-response"},"Sample Response"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "90a28f6e-09b4-4fe1-aeb4-c8e3720933ab",\n  "state": "bonding_tx_broadcasting",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-10-06T18:33:35.891Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "controller_account_address": "5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh",\n    "controller_proxy_account_address": null,\n    "stash_account_address": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n    "stash_proxy_account_address": null,\n    "validator_addresses": null,\n    "reward_destination": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n    "amount": "1.0",\n    "bonding_transaction": {\n      "raw": "0x0000000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e000000000000000000000000000000000000000000000000000000000000000000000000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c1c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n      "signing_payload": "0x0600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c0000004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",\n      "signed": "0xc10284008e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c01feec62b92266c99ce19a4421290b1bfbb56751a783b64ce3d701a5c8ec3e971929000e1849eb07ec7016cc7ff81b67f8a8ae6858b19de6eb313a6871624fbe8d0000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c",\n      "hash": "0x0c0a1e5b08e91eaeb628437d850c147496901b252903bff2d6e40dcb9e1bfe3e",\n      "status": null,\n      "error": null,\n      "signatures": [],\n      "block_number": 12775943,\n      "proxy": false\n    },\n    "nomination_transaction": null\n  },\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "created_at": "2022-10-06T18:26:22.984Z",\n  "updated_at": "2022-10-06T18:32:35.877Z"\n}\n')))}f.isMDXComponent=!0}}]);