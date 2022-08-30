"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4726],{6571:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(8169),o=n(5893);const i=(0,a.Z)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),i=n(6010),l=n(2389),r=n(7392),s=n(7094),p=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n;const{lazy:l,block:c,defaultValue:m,values:h,groupId:k,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,r.l)(b,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:x}=(0,s.U)(),[y,_]=(0,o.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=k){const e=N[k];null!=e&&e!==y&&b.some((t=>t.value===e))&&_(e)}const A=e=>{const t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==y&&(T(t),_(a),null!=k&&x(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var o;const t=E.indexOf(e.currentTarget)-1;n=null!=(o=E[t])?o:E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},g)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>E.push(e),onKeyDown:I,onFocus:A,onClick:A},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,l.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},2842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a=n(7462),o=(n(7294),n(3905)),i=n(9420),l=n(3330),r=n(6571),s=n(5488),p=n(5162);const d={title:"Using the Staking API",sidebar_position:6},u=void 0,c={unversionedId:"quickstart/staking-api",id:"quickstart/staking-api",title:"Using the Staking API",description:"Authentication",source:"@site/docs/quickstart/staking-api.mdx",sourceDirName:"quickstart",slug:"/quickstart/staking-api",permalink:"/quickstart/staking-api",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Using the Staking API",sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Using the Rewards API",permalink:"/quickstart/rewards-api"},next:{title:"Adding / Removing Protocols",permalink:"/quickstart/adding-and-removing-protocols"}},m={},h=[{value:"Authentication",id:"authentication",level:2},{value:"Initialize a Flow",id:"initialize-a-flow",level:2},{value:"Example Requests",id:"example-requests",level:4},{value:"Continue a Flow",id:"continue-a-flow",level:2},{value:"Staking API Webhooks",id:"staking-api-webhooks",level:2},{value:"Create a new Webhook endpoint",id:"create-a-new-webhook-endpoint",level:2},{value:"Example Requests",id:"example-requests-1",level:4},{value:"Retrieve Webhook endpoint(s)",id:"retrieve-webhook-endpoints",level:2},{value:"All Webhook Endpoints",id:"all-webhook-endpoints",level:3},{value:"Example Requests",id:"example-requests-2",level:4},{value:"Individual Webhook Endpoint",id:"individual-webhook-endpoint",level:3},{value:"Example Requests",id:"example-requests-3",level:4},{value:"Update Webhook endpoint",id:"update-webhook-endpoint",level:2},{value:"Example Requests",id:"example-requests-4",level:4},{value:"Delete an existing Webhook endpoint",id:"delete-an-existing-webhook-endpoint",level:2},{value:"Example Requests",id:"example-requests-5",level:4},{value:"API Reference",id:"api-reference",level:2}],k={toc:h};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"To authenticate your requests, you can pass your API key as an ",(0,o.kt)("inlineCode",{parentName:"p"},"[Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)")," header."),(0,o.kt)("p",null,"You must also have an ",(0,o.kt)("a",{parentName:"p",href:"settings-and-security#allowed-origins"},"Allowed Origin")," set in your DataHub App, if your App is making any Cross-Origin requests."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"To maintain the security of your API keys, we recommend always using ",(0,o.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/en-ca/learning/ssl/what-is-https/"},(0,o.kt)("strong",{parentName:"a"},"HTTPS")),"."),(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that API keys sent over ",(0,o.kt)("strong",{parentName:"p"},"HTTP")," are insecure, regardless of the method used.")),(0,o.kt)(i.Z,{className:"shadow--tl",mdxType:"Accordion"},(0,o.kt)(l.Z,{expandIcon:(0,o.kt)(r.Z,{mdxType:"ExpandMore"}),mdxType:"AccordionSummary"},"Click to view the list of endpoints for the Staking API"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The endpoints for the Staking API are located at the following URLs:"),(0,o.kt)("h4",{parentName:"admonition",id:"avalanche"},"Avalanche"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://avalanche-slate.datahub.figment.io/api/v1/flows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://avalanche-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next"))),(0,o.kt)("h4",{parentName:"admonition",id:"ethereum"},"Ethereum"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://eth-slate.datahub.figment.io/api/v1/flows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://eth-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next"))),(0,o.kt)("h4",{parentName:"admonition",id:"near"},"NEAR"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://near-slate.datahub.figment.io/api/v1/flows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://near-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next"))),(0,o.kt)("h4",{parentName:"admonition",id:"polkadot"},"Polkadot"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://polkadot-slate.datahub.figment.io/api/v1/flows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://polkadot-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next"))),(0,o.kt)("h4",{parentName:"admonition",id:"solana"},"Solana"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://solana-slate.datahub.figment.io/api/v1/flows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://solana-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next"))))),(0,o.kt)("h2",{id:"initialize-a-flow"},"Initialize a Flow"),(0,o.kt)("p",null,"Send an HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/flows")," endpoint to start a new flow.\nThe JSON needed to start a new flow must contain the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flow"),": An object containing the following fields:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"network_code"),": The network used to create the flow (ex. ",(0,o.kt)("inlineCode",{parentName:"li"},"ethereum"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chain_code"),": The chain used to create the flow (ex. ",(0,o.kt)("inlineCode",{parentName:"li"},"mainnet"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"testnet"),", etc...)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operation"),": A valid flow operation (ex. ",(0,o.kt)("inlineCode",{parentName:"li"},"staking"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"transfer"),", etc...)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version"),": The API version to use. Currently ",(0,o.kt)("inlineCode",{parentName:"li"},"v1"),".")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON payload for the Staking API to initialize a new flow"',title:'"Example',JSON:!0,payload:!0,for:!0,the:!0,Staking:!0,API:!0,to:!0,initialize:!0,a:!0,new:!0,'flow"':!0},'{\n  "flow": {\n    "network_code": "near",\n    "chain_code": "testnet",\n    "operation": "staking",\n    "version": "v1"\n  }\n}\n')),(0,o.kt)("h4",{id:"example-requests"},"Example Requests"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In example requests, the text ",(0,o.kt)("inlineCode",{parentName:"p"},"API-KEY")," must be replaced with your actual credentials for it to function. Similarly, you would need to replace the ",(0,o.kt)("em",{parentName:"p"},"value")," of the constant ",(0,o.kt)("inlineCode",{parentName:"p"},"API_KEY")," in any code examples.")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request"',title:'"Example',curl:!0,'request"':!0},'curl -X POST https://near-slate.datahub.figment.io/api/v1/flows \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: API-KEY\' \\\n-d \'{\n  // highlight-start\n  "flow": {\n    "network_code": "near",\n    "chain_code": "testnet",\n    "operation": "staking",\n    "version": "v1"\n  }\n  // highlight-end\n}\'\n'))),(0,o.kt)(p.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example JavaScript Fetch request"',title:'"Example',JavaScript:!0,Fetch:!0,'request"':!0},'const API_KEY = "YOUR API KEY";\n\nvar myHeaders = new Headers();\nmyHeaders.append("Content-Type", "application/json");\nmyHeaders.append("Authorization", API_KEY);\n\nvar raw = JSON.stringify({\n  // highlight-start\n  flow: {\n    network_code: "near",\n    chain_code: "testnet",\n    operation: "staking",\n    version: "v1",\n  },\n  // highlight-end\n});\n\nvar requestOptions = {\n  method: "POST",\n  headers: myHeaders,\n  body: raw,\n  redirect: "follow",\n};\n\nfetch(`https://eth-slate.datahub.figment.io/api/v1/flows`, requestOptions)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.log("error", error));\n')))),(0,o.kt)(i.Z,{className:"shadow--tl",mdxType:"Accordion"},(0,o.kt)(l.Z,{expandIcon:(0,o.kt)(r.Z,{mdxType:"ExpandMore"}),mdxType:"AccordionSummary"},"Click to view example response"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," for next actions are always in the ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," array of the response.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response when creating a new flow for staking on NEAR"',title:'"Example',JSON:!0,response:!0,when:!0,creating:!0,a:!0,new:!0,flow:!0,for:!0,staking:!0,on:!0,'NEAR"':!0},'{\n  "id": "e4c08fa4-6e4e-4f00-934d-6cd23c7f2c26",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_delegate_tx",\n      "inputs": [\n        {\n          "name": "delegator_address",\n          "display": "Delegator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "account_balance",\n              "options": {\n                "on": "with_on_chain_validations",\n                "greater_than_or_equal_to": null\n              }\n            }\n          ]\n        },\n        {\n          "name": "delegator_pubkey",\n          "display": "Delegator Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "validator_address",\n          "display": "Validator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "is_validator",\n              "options": {\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            }\n          ]\n        },\n        {\n          "name": "max_gas",\n          "display": "Max Gas",\n          "description": "",\n          "type": "decimal",\n          "validations": []\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": null,\n    "delegator_pubkey": null,\n    "validator_address": null,\n    "amount": null,\n    "max_gas": null,\n    "delegate_transaction": null\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-08-04T23:17:50.794Z",\n  "updated_at": "2022-08-04T23:17:50.794Z"\n}\n'))),(0,o.kt)("h2",{id:"continue-a-flow"},"Continue a Flow"),(0,o.kt)("p",null,"Once a flow is initialized, you will need to specify the flow ID in front of the ",(0,o.kt)("inlineCode",{parentName:"p"},"/next")," endpoint, also sending the correct action name and inputs in the request body to continue with the flow."),(0,o.kt)("p",null,"Using the flow ID from the above response to illustrate, we would then need to supply the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the action to take, along with the ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs"),": In this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegator_address"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delegator_pubkey"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"validator_address")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," (the ",(0,o.kt)("inlineCode",{parentName:"p"},"max_gas")," is optional):"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request to continue a NEAR staking flow"',title:'"Example',curl:!0,request:!0,to:!0,continue:!0,a:!0,NEAR:!0,staking:!0,'flow"':!0},'// highlight-next-line\ncurl -X POST https://near-slate.figment.io/api/v1/flows/e4c08fa4-6e4e-4f00-934d-6cd23c7f2c26/next \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: API-KEY\' \\\n-d \'{\n    // highlight-next-line\n    "name": "create_delegate_tx",\n    "inputs": {\n        // highlight-start\n        "delegator_address": "slate-demo.testnet",\n        "delegator_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n        "validator_address": "01node.pool.f863973.m0",\n        "amount": "25",\n        "max_gas": null,\n        // highlight-end\n    }\n}\'\n'))),(0,o.kt)(p.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example JavaScript Fetch request"',title:'"Example',JavaScript:!0,Fetch:!0,'request"':!0},'const API_KEY = "YOUR API KEY";\n// highlight-next-line\nconst FLOW_ID = "e4c08fa4-6e4e-4f00-934d-6cd23c7f2c26";\n\nvar myHeaders = new Headers();\nmyHeaders.append("Content-Type", "application/json");\nmyHeaders.append("Authorization", API_KEY);\n\nvar raw = JSON.stringify({\n  // highlight-next-line\n  name: "create_delegate_tx",\n  inputs: {\n    // highlight-start\n    delegator_address: "slate-demo.testnet",\n    delegator_pubkey: "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    validator_address: "01node.pool.f863973.m0",\n    amount: "25",\n    max_gas: null,\n    // highlight-end\n  },\n});\n\nvar requestOptions = {\n  method: "POST",\n  headers: myHeaders,\n  body: raw,\n  redirect: "follow",\n};\n\nfetch(\n  // highlight-next-line\n  `https://near-slate.datahub.figment.io/api/v1/flows/${FLOW_ID}/next`,\n  requestOptions\n)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.log("error", error));\n')))),(0,o.kt)(i.Z,{className:"shadow--tl",mdxType:"Accordion"},(0,o.kt)(l.Z,{expandIcon:(0,o.kt)(r.Z,{mdxType:"ExpandMore"}),mdxType:"AccordionSummary"},"Click to view example response"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," for next actions are always in the ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," array of the response.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response when continuing a flow for staking on NEAR"',title:'"Example',JSON:!0,response:!0,when:!0,continuing:!0,a:!0,flow:!0,for:!0,staking:!0,on:!0,'NEAR"':!0},'{\n  "id": "e4c08fa4-6e4e-4f00-934d-6cd23c7f2c26",\n  "state": "delegate_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_delegate_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_delegate_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY"],\n          "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3901cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d3087c719f49ff474c544c29e6207475f427402b1eac13ae0645dc65408a18791c00100000002110000006465706f7369745f616e645f7374616b65020000007b7d00e057eb481b0000000000b9340332b7f4ad140000000000"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY"],\n          "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3901cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d3087c719f49ff474c544c29e6207475f427402b1eac13ae0645dc65408a18791c00100000002110000006465706f7369745f616e645f7374616b65020000007b7d00e057eb481b0000000000b9340332b7f4ad140000000000",\n          "signing_payload": "64ae444f52f75feca6a1720db0fa58f9687c7855834cf8573b4e4f7c15380a4a"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": "slate-demo.testnet",\n    "delegator_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "validator_address": "01node.pool.f863973.m0",\n    "amount": "25.0",\n    "max_gas": null,\n    "delegate_transaction": {\n      "raw": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3901cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d3087c719f49ff474c544c29e6207475f427402b1eac13ae0645dc65408a18791c00100000002110000006465706f7369745f616e645f7374616b65020000007b7d00e057eb481b0000000000b9340332b7f4ad140000000000",\n      "signing_payload": "64ae444f52f75feca6a1720db0fa58f9687c7855834cf8573b4e4f7c15380a4a",\n      "signed": null,\n      "hash": "7n1tkXScgTRWmSYm2ezf9zMXsEdfKB2XFZ89a3Zt1BHK",\n      "status": null,\n      "error": null,\n      "signatures": null\n    }\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-08-04T23:55:57.932Z",\n  "updated_at": "2022-08-05T00:05:34.957Z"\n}\n'))),(0,o.kt)("h2",{id:"staking-api-webhooks"},"Staking API Webhooks"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can add, remove, update and list webhooks with the ",(0,o.kt)("inlineCode",{parentName:"p"},"/webhook_endpoints")," endpoint. The Staking API Webhooks endpoint works alongside the Staking API to manage your webhooks, so that you can be notified when Staking API events occur.")),(0,o.kt)(i.Z,{className:"shadow--tl",mdxType:"Accordion"},(0,o.kt)(l.Z,{expandIcon:(0,o.kt)(r.Z,{mdxType:"ExpandMore"}),mdxType:"AccordionSummary"},"Click to view the list of URLs for Staking API Webhooks"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The endpoints for this API are located at:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://avalanche-slate.datahub.figment.io/api/v1/webhook_endpoints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://eth-slate.datahub.figment.io/api/v1/webhook_endpoints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://near-slate.datahub.figment.io/api/v1/webhook_endpoints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://polkadot-slate.datahub.figment.io/api/v1/webhook_endpoints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://solana-slate.datahub.figment.io/api/v1/webhook_endpoints"))))),(0,o.kt)("h2",{id:"create-a-new-webhook-endpoint"},"Create a new Webhook endpoint"),(0,o.kt)("p",null,"Send a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to create a new webhook endpoint. Each webhook is identified by a sequential number. Currently when a webhook ID has been deleted it cannot be reused."),(0,o.kt)("p",null,"You will only be provided with the ",(0,o.kt)("inlineCode",{parentName:"p"},"secret")," when you first create a webhook."),(0,o.kt)("p",null,"Remember to capture this data!"),(0,o.kt)("h4",{id:"example-requests-1"},"Example Requests"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request POST /webhook_endpoints"',title:'"Example',curl:!0,request:!0,POST:!0,'/webhook_endpoints"':!0},'curl -X POST \'https://eth-slate.datahub.figment.io/api/v1/webhook_endpoints\' \\\n-H \'Authorization: API-KEY\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n  // highlight-start\n    "webhook_endpoint": {\n        "target_url": "https://example.com/my/endpoint",\n        "event_types": ["*"],\n        "enabled": "false"\n    }\n    // highlight-end\n}\'\n'))),(0,o.kt)(p.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example JavaScript Fetch request"',title:'"Example',JavaScript:!0,Fetch:!0,'request"':!0},'const API_KEY = "YOUR API KEY";\n\nvar myHeaders = new Headers();\nmyHeaders.append("Content-Type", "application/json");\nmyHeaders.append("Authorization", API_KEY);\n\nvar raw = JSON.stringify({\n  // highlight-start\n  webhook_endpoint: {\n    target_url: "https://example.com/my/endpoint",\n    event_types: ["*"],\n    enabled: "false",\n  },\n  // highlight-end\n});\n\nvar requestOptions = {\n  method: "POST",\n  headers: myHeaders,\n  body: raw,\n  redirect: "follow",\n};\n\nfetch(\n  "https://eth-slate.datahub.staging.figment.io/api/v1/webhook_endpoints",\n  requestOptions\n)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.log("error", error));\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "id": 16,\n  "event_types": [],\n  "target_url": "https://example.com/my/endpoint",\n  "enabled": true,\n  "object": "webhook_endpoint",\n  "created": "2022-07-26T19:27:12.647Z",\n  // highlight-next-line\n  "secret": "whsec_B8sidV4Bm8NnstMuP3a9TSGYov... [REDACTED]"\n}\n')),(0,o.kt)("h2",{id:"retrieve-webhook-endpoints"},"Retrieve Webhook endpoint(s)"),(0,o.kt)("h3",{id:"all-webhook-endpoints"},"All Webhook Endpoints"),(0,o.kt)("p",null,"Send a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to retrieve details for all of your webhook endpoints."),(0,o.kt)("h4",{id:"example-requests-2"},"Example Requests"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request GET /webhook_endpoints"',title:'"Example',curl:!0,request:!0,GET:!0,'/webhook_endpoints"':!0},"curl -X GET 'https://eth-slate.datahub.figment.io/api/v1/webhook_endpoints' \\\n-H 'Authorization: API-KEY'\n"))),(0,o.kt)(p.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example JavaScript Fetch request"',title:'"Example',JavaScript:!0,Fetch:!0,'request"':!0},'const API_KEY = "YOUR API KEY";\nconst FLOW_ID = "YOUR FLOW ID";\n\nvar myHeaders = new Headers();\nmyHeaders.append("Authorization", API_KEY);\n\nvar requestOptions = {\n  method: "GET",\n  headers: myHeaders,\n  redirect: "follow",\n};\n\nfetch(\n  `https://eth-slate.datahub.staging.figment.io/api/v1/webhook_endpoints`,\n  requestOptions\n)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.log("error", error));\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "object": "list",\n  "url": "/api/v1/webhook_endpoints",\n  "has_more": false,\n  "data": [\n    {\n      "id": 16,\n      "event_types": ["*"],\n      "target_url": "https://example.com/my/endpoint",\n      "enabled": true,\n      "object": "webhook_endpoint",\n      "created": "2022-07-26T19:27:12.647Z"\n    },\n    {\n      "id": 15,\n      "event_types": ["*"],\n      "target_url": "https://example.com/my/new/endpoint",\n      "enabled": false,\n      "object": "webhook_endpoint",\n      "created": "2022-07-26T18:20:21.849Z"\n    }\n  ]\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"individual-webhook-endpoint"},"Individual Webhook Endpoint"),(0,o.kt)("p",null,"Send a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request, including the webhook ID number in the request URL, to retreive details for an individual webhook endpoint."),(0,o.kt)("h4",{id:"example-requests-3"},"Example Requests"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request GET /webhook_endpoints/[:webhook_endpoint_id]"',title:'"Example',curl:!0,request:!0,GET:!0,'/webhook_endpoints/[:webhook_endpoint_id]"':!0},"curl -X GET 'https://eth-slate.datahub.figment.io/api/v1/webhook_endpoints/15' \\\n-H 'Authorization: API-KEY'\n"))),(0,o.kt)(p.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example JavaScript Fetch request"',title:'"Example',JavaScript:!0,Fetch:!0,'request"':!0},'const API_KEY = "YOUR API KEY";\n// highlight-next-line\nconst WEBHOOK_ID = "YOUR ENDPOINT ID";\n\nvar myHeaders = new Headers();\nmyHeaders.append("Authorization", API_KEY);\n\nvar requestOptions = {\n  method: "GET",\n  headers: myHeaders,\n  redirect: "follow",\n};\n\nfetch(\n  // highlight-next-line\n  `https://eth-slate.datahub.staging.figment.io/api/v1/webhook_endpoints/${WEBHOOK_ID}`,\n  requestOptions\n)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.log("error", error));\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response for /webhook_endpoints/15"',title:'"Example',JSON:!0,response:!0,for:!0,'/webhook_endpoints/15"':!0},'{\n  "object": "list",\n  "url": "/api/v1/webhook_endpoints",\n  "has_more": false,\n  "data": [\n    {\n      "id": 15,\n      "event_types": ["*"],\n      "target_url": "https://example.com/my/endpoint",\n      "enabled": true,\n      "object": "webhook_endpoint",\n      "created": "2022-07-26T18:20:21.849Z"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"update-webhook-endpoint"},"Update Webhook endpoint"),(0,o.kt)("p",null,"You can send a ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")," request to update details for an existing webhook endpoint."),(0,o.kt)("h4",{id:"example-requests-4"},"Example Requests"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request PUT /webhook_endpoints/[:webhook_endpoint_id]"',title:'"Example',curl:!0,request:!0,PUT:!0,'/webhook_endpoints/[:webhook_endpoint_id]"':!0},'curl -X PUT \'https://eth-slate.datahub.figment.io/api/v1/webhook_endpoints/15\' \\\n-H \'Authorization: API-KEY\' \\\n-H \'Content-Type: application/json\' \\\n--data-raw \'{\n    "webhook_endpoint": {\n        // highlight-next-line\n        "target_url": "https://example.com/my/new/endpoint",\n        "event_types": ["*"],\n        // highlight-next-line\n        "enabled": "true"\n    }\n}\'\n'))),(0,o.kt)(p.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example JavaScript Fetch request"',title:'"Example',JavaScript:!0,Fetch:!0,'request"':!0},'const API_KEY = "YOUR API KEY";\n// highlight-next-line\nconst WEBHOOK_ID = "YOUR WEBHOOK ID";\n\nvar myHeaders = new Headers();\nmyHeaders.append("Authorization", API_KEY);\nmyHeaders.append("Content-Type", "application/json");\n\nvar raw = JSON.stringify({\n  webhook_endpoint: {\n    // highlight-next-line\n    target_url: "https://example.com/my/new/endpoint",\n    event_types: ["*"],\n    // highlight-next-line\n    enabled: "true",\n  },\n});\n\nvar requestOptions = {\n  method: "PUT",\n  headers: myHeaders,\n  body: raw,\n  redirect: "follow",\n};\n\nfetch(\n  // highlight-next-line\n  `https://eth-slate.datahub.staging.figment.io/api/v1/webhook_endpoints/${WEBHOOK_ID}`,\n  requestOptions\n)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.log("error", error));\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "id": 15,\n  "event_types": ["*"],\n  // highlight-next-line\n  "target_url": "https://example.com/my/new/endpoint",\n  // highlight-next-line\n  "enabled": true,\n  "object": "webhook_endpoint",\n  "created": "2022-07-26T19:27:12.647Z"\n}\n')),(0,o.kt)("h2",{id:"delete-an-existing-webhook-endpoint"},"Delete an existing Webhook endpoint"),(0,o.kt)("p",null,"You can send a ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," request, including the webhook ID number in the request URL, to delete a webhook endpoint."),(0,o.kt)("h4",{id:"example-requests-5"},"Example Requests"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="DELETE /webhook_endpoints/[:webhook_endpoint_id]"',title:'"DELETE','/webhook_endpoints/[:webhook_endpoint_id]"':!0},"curl -X PUT 'https://eth-slate.datahub.figment.io/api/v1/webhook_endpoints/15' \\\n-H 'Authorization: API-KEY'\n"))),(0,o.kt)(p.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example JavaScript Fetch request"',title:'"Example',JavaScript:!0,Fetch:!0,'request"':!0},'const API_KEY = "YOUR API KEY";\nconst WEBHOOK_ID = "YOUR WEBHOOK ID";\n\nvar myHeaders = new Headers();\nmyHeaders.append("Authorization", API_KEY);\n\nvar requestOptions = {\n  method: "DELETE",\n  headers: myHeaders,\n  redirect: "follow",\n};\n\nfetch(\n  `https://eth-slate.datahub.staging.figment.io/api/v1/webhook_endpoints/${WEBHOOK_ID}`,\n  requestOptions\n)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.log("error", error));\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example response"',title:'"Example','response"':!0},"204 - No Content\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This response does not contain any JSON. Status Code ",(0,o.kt)("strong",{parentName:"p"},"204")," indicates a successful deletion.")),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,"View the full Staking API reference ",(0,o.kt)("a",{parentName:"p",href:"/api-reference/staking-api"},"HERE")),(0,o.kt)("p",null,"View the full Webhooks API reference ",(0,o.kt)("a",{parentName:"p",href:"/api-reference/staking-api-webhooks"},"HERE")),(0,o.kt)("p",null,"See the Guide ",(0,o.kt)("a",{parentName:"p",href:"/guides/slate-flows"},(0,o.kt)("strong",{parentName:"a"},"Working With Slate Flows"))," for more details about using the Staking API."),(0,o.kt)("hr",null))}g.isMDXComponent=!0}}]);