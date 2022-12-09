"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9031],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>b});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),d=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=d(e.components);return n.createElement(c.Provider,{value:a},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=d(t),u=i,b=f["".concat(c,".").concat(u)]||f[u]||p[u]||r;return t?n.createElement(b,s(s({ref:a},l),{},{components:t})):n.createElement(b,s({ref:a},l))}));function b(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[f]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},730:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const r={title:"Submit Signed Delegate Transaction for Broadcast",slug:"/guides/staking-api/cosmos/staking/submit-signed-transaction"},s=void 0,o={unversionedId:"guides/staking-api/Cosmos/staking/submit-signed-transaction",id:"guides/staking-api/Cosmos/staking/submit-signed-transaction",title:"Submit Signed Delegate Transaction for Broadcast",description:"After signing the transaction, send a PUT request to /api/v1/flows/[:flow_id]/next with the signed payload.",source:"@site/docs/guides/staking-api/Cosmos/staking/4_submit-signed-transaction.mdx",sourceDirName:"guides/staking-api/Cosmos/staking",slug:"/guides/staking-api/cosmos/staking/submit-signed-transaction",permalink:"/guides/staking-api/cosmos/staking/submit-signed-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit Signed Delegate Transaction for Broadcast",slug:"/guides/staking-api/cosmos/staking/submit-signed-transaction"},sidebar:"docsSidebar",previous:{title:"Sign the Delegate Transaction",permalink:"/guides/staking-api/cosmos/staking/sign-delegate-transaction"},next:{title:"Get Flow Status",permalink:"/guides/staking-api/cosmos/staking/get-flow-status-completed"}},c={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],l={toc:d};function f(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After signing the transaction, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," with the signed payload.\nThe Staking API will broadcast the transaction to the Cosmos network."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required). ",(0,i.kt)("inlineCode",{parentName:"li"},"sign_delegate_tx")," in this case."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," Signed transaction payload from the previous step's response.")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-8}","{5-8}":!0},'curl -X PUT \'https://cosmos-slate.datahub.figment.io/api/v1/flows/cd7fe433-91a2-96eb-b16a-deb93a504cd2/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "sign_delegate_tx",\n  "inputs": {\n    "transaction_payload": "0aa1010a9e010a232f636f736d6f732e7374616b696e672e763162657461312e4d736744656c656761746512770a2d636f736d6f733175383575706b3276377072363567307776323937367a6c6575367638716a6c39717072767a6c1234636f736d6f7376616c6f7065723174666c6b33306d71357667716a646c7939326b6b686871337261657632686e7a3665657465331a100a057561746f6d12073230303030303012670a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102db33d72ee215f1a61e5f4ffa098b9325cc1da6f5c3557974ad0f21a5ec9fe23512040a020801180212130a0d0a057561746f6d12043338393710d8c1091a40970af80c824579cc1fe7dbf33b2118bb72e92e4c61f80e6e3dbb3a943abfb49825baa026830536b1c7e826cf1da23fae829cb7ef91db0c8ea856bf7bd60488b9"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"With the signed transaction provided, the Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegate_tx_broadcasting")," ","\u2014"," Transaction has been broadcast and is waiting for confirmation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"completed")," ","\u2014"," Transaction has been confirmed and the transfer is complete.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "cd7fe433-91a2-96eb-b16a-deb93a504cd2",\n  "state": "delegate_tx_broadcasting",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-11-16T10:35:09.384Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "delegator_address": "cosmos1u89ikp2v7pr95g0wv2687zleu6v8qjl9qprvzl",\n    "validator_address": "cosmosvaloper1tflk30mq5vgqjdly92kkhhq3raev2hnz6eete3",\n    "amount": "2.0",\n    "memo": null,\n    "gas_price": null,\n    "gas_limit": null,\n    "delegate_transaction": {\n      "raw": "7b226d65737361676573223a5b7b227479706555726c223a222f636f736d6f732e7374616b696e672e763162657461312e4d736744656c6567617465222c2276616c7565223a7b2264656c656761746f7241646472657373223a22636f736d6f733175383575706b3276377072363567307776323937367a6c6575367638716a6c39717072767a6c222c2276616c696461746f7241646472657373223a22636f736d6f7376616c6f7065723174666c6b33306d71357667716a646c7939326b6b686871337261657632686e7a366565746533222c22616d6f756e74223a7b2264656e6f6d223a227561746f6d222c22616d6f756e74223a2232303030303030227d7d7d5d2c22666565223a7b22616d6f756e74223a5b7b22616d6f756e74223a2233383937222c2264656e6f6d223a227561746f6d227d5d2c22676173223a22313535383634227d2c226d656d6f223a22227d",\n      "signing_payload": "dbf7cf4ae014c1dc3a17ede2fb00d717e0fca156252542da5c0712713caceb19",\n      "signed": "0aa1010a9e010a232f636f736d6f732e7374616b696e672e763162657461312e4d736744656c656761746512770a2d636f736d6f733175383575706b3276377072363567307776323937367a6c6575367638716a6c39717072767a6c1234636f736d6f7376616c6f7065723174666c6b33306d71357667716a646c7939326b6b686871337261657632686e7a3665657465331a100a057561746f6d12073230303030303012670a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102db33d72ee215f1a61e5f4ffa098b9325cc1da6f5c3557974ad0f21a5ec9fe23512040a020801180212130a0d0a057561746f6d12043338393710d8c1091a40970af80c824579cc1fe7dbf33b2118bb72e92e4c61f80e6e3dbb3a943abfb49825baa026830536b1c7e826cf1da23fae829cb7ef91db0c8ea856bf7bd60488b9",\n      "hash": "EAC7E2CF7FB035599F25CFDFDC53B146BF0E72BDAD24649197A07F467709B079",\n      "status": null,\n      "error": null,\n      "signatures": []\n    },\n    "account_number": 721346,\n    "sequence": 2,\n    "pubkey": "0a2102db77d72ee215f1a61e5f4ffa098b9325cc1da6f5c3557974ad5f21a2ec9fe625"\n  },\n  "network_code": "cosmos",\n  "chain_code": "testnet",\n  "created_at": "2022-11-16T10:25:57.852Z",\n  "updated_at": "2022-11-16T10:34:09.068Z"\n}\n')))}f.isMDXComponent=!0}}]);