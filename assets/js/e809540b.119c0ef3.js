"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={title:"Submit Delegation Data",slug:"/guides/staking-api/cosmos/staking/submit-delegation-data"},o=void 0,l={unversionedId:"guides/staking-api/Cosmos/staking/submit-delegation-data",id:"guides/staking-api/Cosmos/staking/submit-delegation-data",title:"Submit Delegation Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to proceed to the next step.",source:"@site/docs/guides/staking-api/Cosmos/staking/2_submit-delegation-data.mdx",sourceDirName:"guides/staking-api/Cosmos/staking",slug:"/guides/staking-api/cosmos/staking/submit-delegation-data",permalink:"/guides/staking-api/cosmos/staking/submit-delegation-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Delegation Data",slug:"/guides/staking-api/cosmos/staking/submit-delegation-data"},sidebar:"docsSidebar",previous:{title:"Create a New Staking Flow",permalink:"/guides/staking-api/cosmos/staking/create-new-flow"},next:{title:"Sign the Delegate Transaction",permalink:"/guides/staking-api/cosmos/staking/sign-delegate-transaction"}},s={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After collecting the required inputs, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The address from which ATOM will be delegated (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The validator address to which ATOM will be delegated (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," The amount of ATOM to be delegated (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"memo")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," A message to record on-chain with your transfer (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_limit")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," The total amount of gas you're willing to let this transaction consume (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_price")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," How many ATOM you're willing to pay per unit of gas consumed by this transaction (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pubkey")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Required only if you're using a fresh account (that does not have any outgoing activity) else optional.")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X PUT \'https://cosmos-slate.datahub.figment.io/api/v1/flows/cd7fe433-91a2-96eb-b16a-deb93a504cd2/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "create_delegate_tx",\n  "inputs": {\n    "delegator_address": "cosmos1u89ikp2v7pr95g0wv2687zleu6v8qjl9qprvzl",\n    "validator_address": "cosmosvaloper1tflk30mq5vgqjdly92kkhhq3raev2hnz6eete3",\n    "amount": 2\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"Note that in this step, the Staking API will check that your account balance is greater than or equal to the amount you've submitted for delegate.\nExpect an error response if that is not the case."),(0,i.kt)("p",null,"The response indicates two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_delegate_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., the nonce has increased)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_delegate_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("p",null,"We will choose ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_delegate_tx"),", which indicates one input to collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "cd7fe433-91a2-96eb-b16a-deb93a504cd2",\n  "state": "delegate_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_delegate_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_delegate_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [\n            {\n              "type": "sign_payload",\n              "options": {}\n            }\n          ],\n          "signers": ["cosmos1u89ikp2v7pr95g0wv2687zleu6v8qjl9qprvzl"],\n          "transaction_payload": "7b226d65737361676573223a5b7b227479706555726c223a222f636f736d6f732e7374616b696e672e763162657461312e4d736744656c6567617465222c2276616c7565223a7b2264656c656761746f7241646472657373223a22636f736d6f733175383575706b3276377072363567307776323937367a6c6575367638716a6c39717072767a6c222c2276616c696461746f7241646472657373223a22636f736d6f7376616c6f7065723174666c6b33306d71357667716a646c7939326b6b686871337261657632686e7a366565746533222c22616d6f756e74223a7b2264656e6f6d223a227561746f6d222c22616d6f756e74223a2232303030303030227d7d7d5d2c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a2233383937222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22313535383634227d2c226d656d6f223a22227d"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["cosmos1u89ikp2v7pr95g0wv2687zleu6v8qjl9qprvzl"],\n          "transaction_payload": "7b226d65737361676573223a5b7b227479706555726c223a222f636f736d6f732e7374616b696e672e763162657461312e4d736744656c6567617465222c2276616c7565223a7b2264656c656761746f7241646472657373223a22636f736d6f733175383575706b3276377072363567307776323937367a6c6575367638716a6c39717072767a6c222c2276616c696461746f7241646472657373223a22636f736d6f7376616c6f7065723174666c6b33306d71357667716a646c7939326b6b686871337261657632686e7a366565746533222c22616d6f756e74223a7b2264656e6f6d223a227561746f6d222c22616d6f756e74223a2232303030303030227d7d7d5d2c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a2233383937222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22313535383634227d2c226d656d6f223a22227d",\n          "signing_payload": "dbf7cf4ae014c1dc3a17ede2fb00d717e0fca156252542da5c0712713caceb19"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": "cosmos1u89ikp2v7pr95g0wv2687zleu6v8qjl9qprvzl",\n    "validator_address": "cosmosvaloper1tflk30mq5vgqjdly92kkhhq3raev2hnz6eete3",\n    "amount": "2.0",\n    "memo": null,\n    "gas_price": null,\n    "gas_limit": null,\n    "delegate_transaction": {\n      "raw": "7b226d65737361676573223a5b7b227479706555726c223a222f636f736d6f732e7374616b696e672e763162657461312e4d736744656c6567617465222c2276616c7565223a7b2264656c656761746f7241646472657373223a22636f736d6f733175383575706b3276377072363567307776323937367a6c6575367638716a6c39717072767a6c222c2276616c696461746f7241646472657373223a22636f736d6f7376616c6f7065723174666c6b33306d71357667716a646c7939326b6b686871337261657632686e7a366565746533222c22616d6f756e74223a7b2264656e6f6d223a227561746f6d222c22616d6f756e74223a2232303030303030227d7d7d5d2c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a2233383937222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22313535383634227d2c226d656d6f223a22227d",\n      "signing_payload": "dbf7cf4ae014c1dc3a17ede2fb00d717e0fca156252542da5c0712713caceb19",\n      "signed": null,\n      "hash": null,\n      "status": null,\n      "error": null,\n      "signatures": null\n    },\n    "account_number": 721346,\n    "sequence": 2,\n    "pubkey": "0a2102db77d72ee215f1a61e5f4ffa098b9325cc1da6f5c3557974ad5f21a2ec9fe625"\n  },\n  "network_code": "cosmos",\n  "chain_code": "testnet",\n  "created_at": "2022-11-16T10:25:57.852Z",\n  "updated_at": "2022-11-16T10:29:07.290Z"\n}\n')),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}p.isMDXComponent=!0}}]);