"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9036],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>b});var n=a(7294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(a),b=c,p=u["".concat(d,".").concat(b)]||u[b]||f[b]||r;return a?n.createElement(p,i(i({ref:t},l),{},{components:a})):n.createElement(p,i({ref:t},l))}));function b(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),c=(a(7294),a(3905));const r={title:"Get Flow Status",slug:"/guides/staking-api/ethereum/staking/get-flow-status-deposited",pagination_next:null},i=void 0,o={unversionedId:"guides/staking-api/Ethereum/staking/get-flow-status",id:"guides/staking-api/Ethereum/staking/get-flow-status",title:"Get Flow Status",description:"To get the current state of the existing flow, send a GET request to /api/v1/flows/[:flow_id] using the flow ID from the previous step.",source:"@site/docs/guides/staking-api/Ethereum/staking/5_get-flow-status.mdx",sourceDirName:"guides/staking-api/Ethereum/staking",slug:"/guides/staking-api/ethereum/staking/get-flow-status-deposited",permalink:"/guides/staking-api/ethereum/staking/get-flow-status-deposited",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get Flow Status",slug:"/guides/staking-api/ethereum/staking/get-flow-status-deposited",pagination_next:null},sidebar:"docsSidebar",previous:{title:"Submit Signed Transaction for Broadcast",permalink:"/guides/staking-api/ethereum/staking/submit-signed-transaction"}},d={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"Delegation Flow Complete",id:"delegation-flow-complete",level:3}],l={toc:s};function f(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"To get the current state of the existing flow, send a ",(0,c.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,c.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]")," using the flow ID from the previous step."),(0,c.kt)("h3",{id:"parameters"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"None")),(0,c.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://eth-slate.datahub.figment.io/api/v1/flows/ad904171-5051-40dd-bfba-d9c710174881' \\\n-H 'Authorization: <api_key>'\n")),(0,c.kt)("h3",{id:"response"},"Response"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,c.kt)("admonition",{title:"note",type:"info"},(0,c.kt)("p",{parentName:"admonition"},"The ",(0,c.kt)("inlineCode",{parentName:"p"},"state")," field will update from ",(0,c.kt)("inlineCode",{parentName:"p"},"deposit_tx_broadcasting")," to ",(0,c.kt)("inlineCode",{parentName:"p"},"deposited"),".")),(0,c.kt)("h4",{id:"sample-response"},"Sample Response"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "ad904171-5051-40dd-bfba-d9c710174881",\n  "state": "deposited",\n  "actions": [],\n  "data": {\n    "funding_account_address": "0x387462761F706AA7c1DA71FBA1c545724928b67b",\n    "validator_pub_key": "0xa0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640",\n    "withdrawal_credentials": "0x010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010",\n    "signature": "0x88cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413",\n    "deposit_data_root": "0x021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a4830823",\n    "amount": "32.0",\n    "gas_price": null,\n    "gas_limit": null,\n    "deposit_transaction": {\n      "raw": "0x02f901d605808459682f008459682f1c82dc9e94ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a48308230000000000000000000000000000000000000000000000000000000000000030a0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010000000000000000000000000000000000000000000000000000000000000006088cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413c0",\n      "signing_payload": null,\n      "signed": "0x02f9021905808459682f008459682f1c82dc9e94ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a48308230000000000000000000000000000000000000000000000000000000000000030a0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010000000000000000000000000000000000000000000000000000000000000006088cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413c080a0a0a59a1a2c4e03582ad842293a2dd2ee17f4f9f71f46a06ea59447eee9a71a20a00545743e3159ff27ae44e6fdaa2f434e033438d661cccf9f5ba202ea64e25d64",\n      "hash": "0x6acc6aa30c09ba30a4cc4ece382b6956cf23e0c80ea518b030c9185588ea40a6",\n      "status": "broadcast",\n      "error": null,\n      "signatures": null\n    }\n  },\n  "network_code": "ethereum",\n  "chain_code": "goerli-prater",\n  "created_at": "2022-04-26T18:23:46.702Z",\n  "updated_at": "2022-04-27T22:24:47.738Z"\n}\n')),(0,c.kt)("h3",{id:"delegation-flow-complete"},"Delegation Flow Complete"),(0,c.kt)("p",null,"Congratulations, your stake is now active and earning rewards!"))}f.isMDXComponent=!0}}]);