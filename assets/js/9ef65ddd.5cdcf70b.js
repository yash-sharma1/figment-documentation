"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1980],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=s(t),u=r,m=l["".concat(c,".").concat(u)]||l[u]||f[u]||o;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d[l]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6248:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const o={title:"Submit Remove Proxy Data",slug:"/guides/staking-api/polkadot/remove-staking-proxy/submit-proxy-data"},i=void 0,d={unversionedId:"guides/staking-api/Polkadot/remove-staking-proxy/submit-remove-proxy-data",id:"guides/staking-api/Polkadot/remove-staking-proxy/submit-remove-proxy-data",title:"Submit Remove Proxy Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to proceed to the next step.",source:"@site/docs/guides/staking-api/Polkadot/remove-staking-proxy/2_submit-remove-proxy-data.mdx",sourceDirName:"guides/staking-api/Polkadot/remove-staking-proxy",slug:"/guides/staking-api/polkadot/remove-staking-proxy/submit-proxy-data",permalink:"/guides/staking-api/polkadot/remove-staking-proxy/submit-proxy-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Remove Proxy Data",slug:"/guides/staking-api/polkadot/remove-staking-proxy/submit-proxy-data"},sidebar:"docsSidebar",previous:{title:"Create New Flow To Remove Staking Proxy",permalink:"/guides/staking-api/polkadot/remove-staking-proxy/create-new-flow"},next:{title:"Sign Remove Proxy Transaction",permalink:"/guides/staking-api/polkadot/remove-staking-proxy/sign-remove-proxy-transaction"}},c={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:3},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],p={toc:s};function l(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required inputs, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proxy_account_address")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The address from which you want to remove proxy rights (required)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proxied_account_address")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The account whose rights will be proxied (required).")))),(0,r.kt)("h3",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-9}","{5-9}":!0},'curl -X PUT \'https://polkadot-slate.datahub.figment.io/api/v1/flows/060252ff-19a0-4144-828f-3a55d9c179fc/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "create_remove_proxy_tx",\n  "inputs": {\n    "proxy_account_address": "5CDAhYcPZEx6sN4oGbQMRFZzo5Eur6NTN4nd85SADgMdnxAS",\n    "proxied_account_address": "5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh"\n  }\n}\'\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"The response indicates two possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh_remove_proxy_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., the nonce has increased)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign_remove_proxy_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,r.kt)("p",null,"We will choose ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_remove_proxy_tx"),", which indicates one input to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3,6,10,19}","{3,6,10,19}":!0},'{\n  "id": "060252ff-19a0-4144-828f-3a55d9c179fc",\n  "state": "remove_proxy_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_remove_proxy_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_remove_proxy_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh"],\n          "transaction_payload": "0x0008000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e00000000000000000000000000000000000000000000000000000000000000000000000000160200067452e7828dafb80be77c82b33a3781e71de7d04096aad144cfac000a7fd24002000000001c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh"],\n          "transaction_payload": "0x0008000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e00000000000000000000000000000000000000000000000000000000000000000000000000160200067452e7828dafb80be77c82b33a3781e71de7d04096aad144cfac000a7fd24002000000001c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n          "signing_payload": "0x160200067452e7828dafb80be77c82b33a3781e71de7d04096aad144cfac000a7fd24002000000000008004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "proxy_account_address": "5CDAhYcPZEx6sN4oGbQMRFZzo5Eur6NTN4nd85SADgMdnxAS",\n    "proxied_account_address": "5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh",\n    "remove_proxy_transaction": {\n      "raw": "0x0008000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e00000000000000000000000000000000000000000000000000000000000000000000000000160200067452e7828dafb80be77c82b33a3781e71de7d04096aad144cfac000a7fd24002000000001c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n      "signing_payload": "0x160200067452e7828dafb80be77c82b33a3781e71de7d04096aad144cfac000a7fd24002000000000008004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",\n      "signed": null,\n      "hash": null,\n      "status": null,\n      "error": null,\n      "signatures": null,\n      "block_number": null,\n      "proxy": null\n    }\n  },\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "created_at": "2022-10-06T19:01:10.498Z",\n  "updated_at": "2022-10-06T19:04:07.999Z"\n}\n')),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}l.isMDXComponent=!0}}]);