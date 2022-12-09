"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[6938],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?i.createElement(k,o(o({ref:n},d),{},{components:t})):i.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(7462),a=(t(7294),t(3905));const r={title:"Create New Staking Flow",slug:"/guides/staking-api/ethereum/staking/create-new-flow"},o=void 0,l={unversionedId:"guides/staking-api/Ethereum/staking/create-new-flow",id:"guides/staking-api/Ethereum/staking/create-new-flow",title:"Create New Staking Flow",description:"To initiate the staking process, create a new flow with a POST request to /api/v1/flows.",source:"@site/docs/guides/staking-api/Ethereum/staking/1_create-new-flow.mdx",sourceDirName:"guides/staking-api/Ethereum/staking",slug:"/guides/staking-api/ethereum/staking/create-new-flow",permalink:"/guides/staking-api/ethereum/staking/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Staking Flow",slug:"/guides/staking-api/ethereum/staking/create-new-flow"},sidebar:"docsSidebar",previous:{title:"Staking",permalink:"/guides/staking-api/ethereum/staking"},next:{title:"Submit Deposit Data",permalink:"/guides/staking-api/ethereum/staking/submit-deposit-data"}},s={},p=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To initiate the staking process, create a new flow with a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/flows"),"."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flow")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network_code")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," Network on which this flow operates (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"ethereum"),") (required)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chain_code")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," Chain on which this flow operates (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"goerli"),") (required)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operation")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," The operation to perform (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"staking"),") (required)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," API version to use (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"v1"),") (optional).")))),(0,a.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X POST \'https://eth-slate.datahub.figment.io/api/v1/flows\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "flow": {\n    "network_code": "ethereum",\n    "chain_code": "goerli",\n    "operation": "staking",\n    "version": "v1"\n  }\n}\'\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," ID of the newly created flow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,a.kt)("p",null,"The response indicates one possible action:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create_deposit_transaction")," ","\u2014"," use this action to generate a deposit transaction to stake your ETH.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create_deposit_transaction")," action indicates seven fields for data collection:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"funding_account_address")," ","\u2014"," The wallet from which the ETH will originate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validator_pub_key")," ","\u2014"," The public key of the validator to which the ETH will be deposited."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withdraw_credentials")," ","\u2014"," The withdrawal address for the given validator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signature")," ","\u2014"," A BLS proof of possession, i.e. a proof that the private key corresponding to the ",(0,a.kt)("inlineCode",{parentName:"li"},"validator_pub_key")," is known by the signer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deposit_data_root")," ","\u2014"," Uniquely identifies the set of deposits made so far."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gas_limit")," ","\u2014"," Adjust the gas limit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gas_price")," ","\u2014"," Adjust the gas price.")),(0,a.kt)("h4",{id:"sample-response"},"Sample Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-3,6,9,25,41,57,73,89,105}","{2-3,6,9,25,41,57,73,89,105}":!0},'{\n  "id": "a84f725a-bd16-4515-96a0-5b6ff2824c55",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_deposit_tx",\n      "inputs": [\n        {\n          "name": "funding_account_address",\n          "display": "Funding Account Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "hex",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "validator_pub_key",\n          "display": "Validator Pub Key",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "hex",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "withdrawal_credentials",\n          "display": "Withdrawal Credentials",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "hex",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "signature",\n          "display": "Signature",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "hex",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "deposit_data_root",\n          "display": "Deposit Data Root",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "hex",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "gas_limit",\n          "display": "Gas Limit",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "numericality",\n              "options": {\n                "allow_nil": true,\n                "only_integer": true,\n                "greater_than": 0\n              }\n            }\n          ]\n        },\n        {\n          "name": "gas_price",\n          "display": "Gas Price",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "numericality",\n              "options": {\n                "allow_nil": true,\n                "greater_than": 0\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "data": {\n    "funding_account_address": null,\n    "validator_pub_key": null,\n    "withdrawal_credentials": null,\n    "signature": null,\n    "deposit_data_root": null,\n    "amount": "32.0",\n    "gas_price": null,\n    "gas_limit": null,\n    "deposit_transaction": null\n  },\n  "network_code": "ethereum",\n  "chain_code": "goerli",\n  "created_at": "2022-10-05T23:06:17.913Z",\n  "updated_at": "2022-10-05T23:06:17.913Z"\n}\n')))}u.isMDXComponent=!0}}]);