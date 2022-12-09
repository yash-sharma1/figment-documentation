"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9006],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={title:"Create New Undelegation Flow",slug:"/guides/staking-api/polygon/undelegate/create-new-flow"},l=void 0,o={unversionedId:"guides/staking-api/Polygon/undelegate/create-new-flow",id:"guides/staking-api/Polygon/undelegate/create-new-flow",title:"Create New Undelegation Flow",description:"To initiate the undelegation process, create a new flow with a POST request to /api/v1/flows.",source:"@site/docs/guides/staking-api/Polygon/undelegate/1_create-new-flow.mdx",sourceDirName:"guides/staking-api/Polygon/undelegate",slug:"/guides/staking-api/polygon/undelegate/create-new-flow",permalink:"/guides/staking-api/polygon/undelegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Undelegation Flow",slug:"/guides/staking-api/polygon/undelegate/create-new-flow"},sidebar:"docsSidebar",previous:{title:"Undelegate",permalink:"/guides/staking-api/polygon/undelegate"},next:{title:"Submit Unbonding Data",permalink:"/guides/staking-api/polygon/undelegate/submit-unbonding-data"}},s={},p=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To initiate the undelegation process, create a new flow with a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows"),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flow")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"network_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Network on which this flow operates (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"polygon"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Chain on which this flow operates (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"testnet"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operation")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The operation to perform (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"unstaking"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," API version to use (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"v1"),") (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X POST \'https://polygon-slate.datahub.figment.io/api/v1/flows\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "flow": {\n    "network_code": "polygon",\n    "chain_code": "testnet",\n    "operation": "unstaking",\n    "version": "v1"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," ID of the newly created flow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,i.kt)("p",null,"The response indicates one possible ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create_unbond_tx"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"create_unbond_tx")," action indicates seven fields for data collection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_address")," ","\u2014"," The delegator address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_address")," ","\u2014"," The validator contract address from which MATIC will be undelegated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," The amount of MATIC to be undelegated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_shares_to_burn")," ","\u2014"," The maximum number of shares of the delegation to be burned. If the exchange rate results in more shares being burned, the transaction will fail."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_slippage_percentage")," ","\u2014"," The maximum slippage you are willing to accept."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_limit")," ","\u2014"," Adjust gas limit for the transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_price")," ","\u2014"," Adjust gas price for the transaction.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-3,6}","{2-3,6}":!0},'{\n  "id": "07d6752c-c412-4cfa-a12c-65feab06acd6",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_unbond_tx",\n      "inputs": [\n        {\n          "name": "delegator_address",\n          "display": "Delegator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "validator_address",\n          "display": "Validator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "is_validator",\n              "options": {\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            }\n          ]\n        },\n        {\n          "name": "max_shares_to_burn",\n          "display": "Max Shares To Burn",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "numericality",\n              "options": {\n                "allow_nil": true,\n                "only_integer": true,\n                "greater_than_or_equal_to": 0\n              }\n            }\n          ]\n        },\n        {\n          "name": "max_slippage_percentage",\n          "display": "Max Slippage Percentage",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "numericality",\n              "options": {\n                "allow_nil": true,\n                "only_integer": true,\n                "greater_than_or_equal_to": 0,\n                "less_than_or_equal_to": 100\n              }\n            }\n          ]\n        },\n        {\n          "name": "gas_limit",\n          "display": "Gas Limit",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "numericality",\n              "options": {\n                "allow_nil": true,\n                "only_integer": true,\n                "greater_than": 0\n              }\n            }\n          ]\n        },\n        {\n          "name": "gas_price",\n          "display": "Gas Price",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "numericality",\n              "options": {\n                "allow_nil": true,\n                "greater_than": 0\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": null,\n    "validator_address": null,\n    "amount": null,\n    "max_shares_to_burn": null,\n    "max_slippage_percentage": null,\n    "exchange_rate": null,\n    "exchange_rate_precision": null,\n    "unbond_transaction": null,\n    "claim_transaction": null,\n    "estimated_unbonded_at": null,\n    "unbond_checkpoint": null,\n    "unbond_nonce": null\n  },\n  "network_code": "polygon",\n  "chain_code": "testnet",\n  "created_at": "2022-10-06T23:40:33.826Z",\n  "updated_at": "2022-10-06T23:40:33.826Z"\n}\n')))}u.isMDXComponent=!0}}]);