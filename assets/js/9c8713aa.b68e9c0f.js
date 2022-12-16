"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3612],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>b});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),l=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=l(e.components);return n.createElement(d.Provider,{value:a},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),u=i,b=f["".concat(d,".").concat(u)]||f[u]||p[u]||o;return t?n.createElement(b,r(r({ref:a},s),{},{components:t})):n.createElement(b,r({ref:a},s))}));function b(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var c={};for(var d in a)hasOwnProperty.call(a,d)&&(c[d]=a[d]);c.originalType=e,c[f]="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95829:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const o={title:"Submit Bonding Transaction Data",slug:"/guides/staking-api/polkadot/delegate/submit-bonding-transaction-data"},r=void 0,c={unversionedId:"guides/staking-api/Polkadot/delegate/submit-bonding-transaction-data",id:"guides/staking-api/Polkadot/delegate/submit-bonding-transaction-data",title:"Submit Bonding Transaction Data",description:"After creating a new staking flow, submit the staking account data.",source:"@site/docs/guides/staking-api/Polkadot/delegate/2_submit-bonding-transaction-data.mdx",sourceDirName:"guides/staking-api/Polkadot/delegate",slug:"/guides/staking-api/polkadot/delegate/submit-bonding-transaction-data",permalink:"/guides/staking-api/polkadot/delegate/submit-bonding-transaction-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Bonding Transaction Data",slug:"/guides/staking-api/polkadot/delegate/submit-bonding-transaction-data"},sidebar:"docsSidebar",previous:{title:"Create New Delegation Flow",permalink:"/guides/staking-api/polkadot/delegate/create-new-flow"},next:{title:"Sign the Bonding Transaction",permalink:"/guides/staking-api/polkadot/delegate/sign-bonding-transaction"}},d={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:3},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],s={toc:l};function f(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After creating a new staking flow, submit the staking account data."),(0,i.kt)("p",null,"After collecting the required inputs, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"controller_account_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Address of the wallet to which the DOT will be bonded (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"controller_proxy_account_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," A proxy account that will sign on behalf of the controller account (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stash_account_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Primary wallet from which DOT will be bonded. Cannot have a zero balance (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stash_proxy_account_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," A proxy account that will sign on behalf of the controller account (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reward_destination")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Reward destination (required). Indicates whether rewards are to be:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Staked")," Added to the staked balance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Controller")," Sent to the controller account, liquid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stash")," Sent to the stash account, liquid. Providing the ",(0,i.kt)("inlineCode",{parentName:"li"},"stash_account_address")," is equivalent to using ",(0,i.kt)("inlineCode",{parentName:"li"},"Stash"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," ","\u2014"," The amount of DOT to be bonded to the controller. Minimum of ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"),". This field should be in full DOT, not in Planck (ie. if you want to stake 5 DOT, return ",(0,i.kt)("inlineCode",{parentName:"li"},'"amount": 5.0'),"). Staking API will translate the amount to Plancks so you do not have to worry about the conversion factor (required). A Planck is the smallest unit of DOT. One DOT contains 10,000,000,000 Plancks.")))),(0,i.kt)("h3",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-11}","{5-11}":!0},'curl -X PUT \'https://polkadot-slate.datahub.figment.io/api/v1/flows/90a28f6e-09b4-4fe1-aeb4-c8e3720933ab/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n    "name": "create_bonding_tx",\n    "inputs": {\n        "controller_account_address": "5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh",\n        "stash_account_address": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n        "reward_destination": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n        "amount": 1.0\n    }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"Note that in this response you can find the unsigned, serialized transaction in ",(0,i.kt)("inlineCode",{parentName:"p"},"data[create_bonding_tx][raw]"),"."),(0,i.kt)("p",null,"Again we see two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_bonding_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., the nonce has increased)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_bonding_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("p",null,"We will choose ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_bonding_tx"),", which indicates one input to collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{19}","{19}":!0},'{\n  "id": "90a28f6e-09b4-4fe1-aeb4-c8e3720933ab",\n  "state": "bonding_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_bonding_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_bonding_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz"],\n          "transaction_payload": "0x0000000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e000000000000000000000000000000000000000000000000000000000000000000000000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c1c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz"],\n          "transaction_payload": "0x0000000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e000000000000000000000000000000000000000000000000000000000000000000000000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c1c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n          "signing_payload": "0x0600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c0000004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "controller_account_address": "5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh",\n    "controller_proxy_account_address": null,\n    "stash_account_address": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n    "stash_proxy_account_address": null,\n    "validator_addresses": null,\n    "reward_destination": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n    "amount": "1.0",\n    "bonding_transaction": {\n      "raw": "0x0000000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e000000000000000000000000000000000000000000000000000000000000000000000000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c1c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n      "signing_payload": "0x0600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c0000004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",\n      "signed": null,\n      "hash": null,\n      "status": null,\n      "error": null,\n      "signatures": null,\n      "block_number": null,\n      "proxy": false\n    },\n    "nomination_transaction": null\n  },\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "created_at": "2022-10-06T18:26:22.984Z",\n  "updated_at": "2022-10-06T18:27:50.048Z"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Stash")," account must have the amount to be bonded, plus the existential deposit amount."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Controller")," account must have at least the ",(0,i.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-#:~:text=On%20the%20Polkadot%20network%2C%20an,the%20Existential%20Deposit%20(ED)."},"existential deposit amount"),".")),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}f.isMDXComponent=!0}}]);