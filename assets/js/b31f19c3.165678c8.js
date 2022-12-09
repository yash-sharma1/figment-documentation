"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3587],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>u});var n=t(7294);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var f=n.createContext({}),s=function(e){var a=n.useContext(f),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=s(e.components);return n.createElement(f.Provider,{value:a},e.children)},o="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,c=e.mdxType,d=e.originalType,f=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),o=s(t),p=c,u=o["".concat(f,".").concat(p)]||o[p]||b[p]||d;return t?n.createElement(u,r(r({ref:a},l),{},{components:t})):n.createElement(u,r({ref:a},l))}));function u(e,a){var t=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var d=t.length,r=new Array(d);r[0]=p;var i={};for(var f in a)hasOwnProperty.call(a,f)&&(i[f]=a[f]);i.originalType=e,i[o]="string"==typeof e?e:c,r[1]=i;for(var s=2;s<d;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4008:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var n=t(7462),c=(t(7294),t(3905));const d={title:"Submit Signed Delegate Transaction for Broadcast",slug:"/guides/staking-api/avalanche/delegate/submit-signed-delegate-transaction"},r=void 0,i={unversionedId:"guides/staking-api/Avalanche/delegate/submit-signed-transaction",id:"guides/staking-api/Avalanche/delegate/submit-signed-transaction",title:"Submit Signed Delegate Transaction for Broadcast",description:"After signing the transaction, send a PUT request to /api/v1/flows/[:flow_id]/next with the signed payload.",source:"@site/docs/guides/staking-api/Avalanche/delegate/4_submit-signed-transaction.mdx",sourceDirName:"guides/staking-api/Avalanche/delegate",slug:"/guides/staking-api/avalanche/delegate/submit-signed-delegate-transaction",permalink:"/guides/staking-api/avalanche/delegate/submit-signed-delegate-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit Signed Delegate Transaction for Broadcast",slug:"/guides/staking-api/avalanche/delegate/submit-signed-delegate-transaction"},sidebar:"docsSidebar",previous:{title:"Sign the Delegate Transaction",permalink:"/guides/staking-api/avalanche/delegate/sign-delegate-transaction"},next:{title:"Get Flow Status",permalink:"/guides/staking-api/avalanche/delegate/get-flow-status-completed"}},f={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],l={toc:s};function o(e){let{components:a,...t}=e;return(0,c.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"After signing the transaction, send a ",(0,c.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,c.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," with the signed payload.\nThe Staking API will broadcast the transaction to the Avalanche network."),(0,c.kt)("h3",{id:"parameters"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"object"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," Signed transaction payload from the previous step's response.")))),(0,c.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-8}","{5-8}":!0},'curl -X PUT \'https://avalanche-slate.datahub.figment.io/api/v1/flows/a59caf5b-67a4-47bf-af4a-3aa443c28f05/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "sign_delegate_tx",\n  "inputs": {\n    "transaction_payload": "00000000000e000000050000000000000000000000000000000000000000000000000000000000000000000000013d9bdac0ed1d761330cf680efdeb1a42159eb387d6d2950c96f7d28f61bbe2aa0000000700000000b2bbc0e7000000000000000000000001000000017b2c5cce553223c8f559acd75f07f8d692202aee00000001cfc3e77b66a86e568cd61ddcbb1c29052872f3c73924aa50d8ce95010ce05a72000000003d9bdac0ed1d761330cf680efdeb1a42159eb387d6d2950c96f7d28f61bbe2aa0000000500000000ee568ae70000000100000000000000008b9efb9702b7e2b2deaaa5677ef1076825af207a00000000633ee7270000000063bdfab3000000003b9aca00000000013d9bdac0ed1d761330cf680efdeb1a42159eb387d6d2950c96f7d28f61bbe2aa00000007000000003b9aca00000000000000000000000001000000017b2c5cce553223c8f559acd75f07f8d692202aee0000000b000000000000000000000001000000017b2c5cce553223c8f559acd75f07f8d692202aee00000001000000090000000106affa1e3aa29ba136f79dca1f8ab87449462c730a7e65e9127dd485628bf388076fedb7bb75260abb18d8eddd030cb06eb750e09716e8ff2c0d7d9c95930c2e01"\n  }\n}\'\n')),(0,c.kt)("h3",{id:"response"},"Response"),(0,c.kt)("p",null,"With the signed transaction provided, the Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be either:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"delegate_tx_broadcasting")," ","\u2014"," Transaction has been broadcast and is confirming."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"completed")," ","\u2014"," Transaction has been confirmed and stake is delegated.")),(0,c.kt)("h4",{id:"sample-response"},"Sample Response"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "a59caf5b-67a4-47bf-af4a-3aa443c28f05",\n  "state": "delegate_tx_broadcasting",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-10-06T14:30:46.375Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "delegator_address": "P-fuji10vk9enj4xg3u3a2e4nt47plc66fzq2hwgwgma3",\n    "validator_address": "NodeID-4FD94p7B8o4MzFHpazLN6jbTgXPpf8mHP",\n    "amount": "1.0",\n    "start_time": null,\n    "end_time": null,\n    "memo": null,\n    "delegate_transaction": {\n      "raw": "7b225f747970654e616d65223a22556e7369676e65645478222c225f747970654944223a6e756c6c2c225f636f6465634944223a6e756c6c2c22636f6465634944223a2230303030222c227472616e73616374696f6e223a7b225f747970654e616d65223a2241646444656c656761746f725478222c225f747970654944223a31342c225f636f6465634944223a6e756c6c2c226e6574776f726b4944223a223030303030303035222c22626c6f636b636861696e4944223a2230303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030222c226f757473223a5b7b225f747970654e616d65223a225472616e7366657261626c654f7574707574222c225f747970654944223a6e756c6c2c225f636f6465634944223a6e756c6c2c226f7574707574223a7b225f747970654e616d65223a22534543505472616e736665724f7574707574222c225f747970654944223a372c225f636f6465634944223a6e756c6c2c226c6f636b74696d65223a2230303030303030303030303030303030222c227468726573686f6c64223a223030303030303031222c22616464726573736573223a5b7b225f747970654e616d65223a2241646472657373222c225f747970654944223a6e756c6c2c225f636f6465634944223a6e756c6c2c226273697a65223a223030303030303134222c226279746573223a2237623263356363653535333232336338663535396163643735663037663864363932323032616565227d5d2c22616d6f756e74223a2230303030303030303362383632636537227d2c2261737365744944223a2233643962646163306564316437363133333063663638306566646562316134323135396562333837643664323935306339366637643238663631626265326161227d5d2c22696e73223a5b7b225f747970654e616d65223a225472616e7366657261626c65496e707574222c225f747970654944223a6e756c6c2c225f636f6465634944223a6e756c6c2c22696e707574223a7b225f747970654e616d65223a22534543505472616e73666572496e707574222c225f747970654944223a352c225f636f6465634944223a6e756c6c2c2273696749647873223a5b7b225f747970654e616d65223a22536967496478222c225f747970654944223a6e756c6c2c225f636f6465634944223a6e756c6c2c226273697a65223a223030303030303034222c226279746573223a223030303030303030222c22736f75726365223a2237623263356363653535333232336338663535396163643735663037663864363932323032616565227d5d2c22616d6f756e74223a2230303030303030303737323066366537227d2c2274786964223a2233656565313234383737323136333136383637376130396137383737323635346366613938393563616566646661346436303432333833313230303662363033222c226f7574707574696478223a223030303030303030222c2261737365744944223a2233643962646163306564316437363133333063663638306566646562316134323135396562333837643664323935306339366637643238663631626265326161227d5d2c226d656d6f223a22222c226e6f64654944223a2232333938353538306432393161656330613635633735646662346238323436343335353866616635222c22737461727454696d65223a2230303030303030303633336237663165222c22656e6454696d65223a2230303030303030303633336364333531222c22776569676874223a2230303030303030303362396163613030222c227374616b654f757473223a5b7b225f747970654e616d65223a225472616e7366657261626c654f7574707574222c225f747970654944223a6e756c6c2c225f636f6465634944223a6e756c6c2c226f7574707574223a7b225f747970654e616d65223a22534543505472616e736665724f7574707574222c225f747970654944223a372c225f636f6465634944223a6e756c6c2c226c6f636b74696d65223a2230303030303030303030303030303030222c227468726573686f6c64223a223030303030303031222c22616464726573736573223a5b7b225f747970654e616d65223a2241646472657373222c225f747970654944223a6e756c6c2c225f636f6465634944223a6e756c6c2c226273697a65223a223030303030303134222c226279746573223a2237623263356363653535333232336338663535396163643735663037663864363932323032616565227d5d2c22616d6f756e74223a2230303030303030303362396163613030227d2c2261737365744944223a2233643962646163306564316437363133333063663638306566646562316134323135396562333837643664323935306339366637643238663631626265326161227d5d2c227265776172644f776e657273223a7b225f747970654e616d65223a22506172736561626c654f7574707574222c225f747970654944223a6e756c6c2c225f636f6465634944223a6e756c6c2c226f7574707574223a7b225f747970654e616d65223a22534543504f776e65724f7574707574222c225f747970654944223a31312c225f636f6465634944223a6e756c6c2c226c6f636b74696d65223a2230303030303030303030303030303030222c227468726573686f6c64223a223030303030303031222c22616464726573736573223a5b7b225f747970654e616d65223a2241646472657373222c225f747970654944223a6e756c6c2c225f636f6465634944223a6e756c6c2c226273697a65223a223030303030303134222c226279746573223a2237623263356363653535333232336338663535396163643735663037663864363932323032616565227d5d7d7d7d7d",\n      "signing_payload": null,\n      "signed": "00000000000e000000050000000000000000000000000000000000000000000000000000000000000000000000013d9bdac0ed1d761330cf680efdeb1a42159eb387d6d2950c96f7d28f61bbe2aa0000000700000000b2bbc0e7000000000000000000000001000000017b2c5cce553223c8f559acd75f07f8d692202aee00000001cfc3e77b66a86e568cd61ddcbb1c29052872f3c73924aa50d8ce95010ce05a72000000003d9bdac0ed1d761330cf680efdeb1a42159eb387d6d2950c96f7d28f61bbe2aa0000000500000000ee568ae70000000100000000000000008b9efb9702b7e2b2deaaa5677ef1076825af207a00000000633ee7270000000063bdfab3000000003b9aca00000000013d9bdac0ed1d761330cf680efdeb1a42159eb387d6d2950c96f7d28f61bbe2aa00000007000000003b9aca00000000000000000000000001000000017b2c5cce553223c8f559acd75f07f8d692202aee0000000b000000000000000000000001000000017b2c5cce553223c8f559acd75f07f8d692202aee00000001000000090000000106affa1e3aa29ba136f79dca1f8ab87449462c730a7e65e9127dd485628bf388076fedb7bb75260abb18d8eddd030cb06eb750e09716e8ff2c0d7d9c95930c2e01",\n      "hash": "2vYPtrQEbxBnZg3By2YSBUvVH3moBkEZkuT6YdBNwL5jr6AWod",\n      "status": null,\n      "error": null,\n      "signatures": []\n    }\n  },\n  "network_code": "avalanche",\n  "chain_code": "testnet",\n  "created_at": "2022-10-03T16:27:46.560Z",\n  "updated_at": "2022-10-06T14:29:46.169Z"\n}\n')))}o.isMDXComponent=!0}}]);