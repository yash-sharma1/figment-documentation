"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[456],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),p=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(r.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),k=i,m=d["".concat(r,".").concat(k)]||d[k]||c[k]||o;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),i=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(7462),i=t(7294),o=t(6010),l=t(2389),s=t(7392),r=t(7094),p=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var n;const{lazy:t,block:l,defaultValue:d,values:k,groupId:m,className:g}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=k??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,s.l)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:d??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,r.U)(),[N,_]=(0,i.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&y.some((n=>n.value===e))&&_(e)}const S=e=>{const n=e.currentTarget,t=T.indexOf(n),a=y[t].value;a!==N&&(P(n),_(a),null!=m&&v(m,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},y.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>T.push(e),onKeyDown:C,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function k(e){const n=(0,l.Z)();return i.createElement(d,(0,a.Z)({key:String(n)},e))}},2579:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var a=t(7462),i=(t(7294),t(3905)),o=t(5488),l=t(5162),s=t(9960);const r={title:"Working With Staking API Flows",sidebar_position:1},p=void 0,u={unversionedId:"guides/staking-api/working-with-staking-api-flows",id:"guides/staking-api/working-with-staking-api-flows",title:"Working With Staking API Flows",description:"Authentication",source:"@site/docs/guides/staking-api/working-with-staking-api-flows.mdx",sourceDirName:"guides/staking-api",slug:"/guides/staking-api/working-with-staking-api-flows",permalink:"/guides/staking-api/working-with-staking-api-flows",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Working With Staking API Flows",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Staking API Overview",permalink:"/guides/staking-api/"},next:{title:"Staking API Endpoints",permalink:"/guides/staking-api/staking-api-endpoints"}},c={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Flows: Create a New Flow",id:"flows-create-a-new-flow",level:2},{value:"Requests",id:"requests",level:3},{value:"Response",id:"response",level:3},{value:"Actions: Response Structures and Flow Paths",id:"actions-response-structures-and-flow-paths",level:2},{value:"Inputs: Building Forms and Data Collection",id:"inputs-building-forms-and-data-collection",level:2},{value:"Payloads: Transactions and Signatures",id:"payloads-transactions-and-signatures",level:2},{value:"Transaction Payloads and Signing Payloads",id:"transaction-payloads-and-signing-payloads",level:3},{value:"Confirming the Transaction Payload",id:"confirming-the-transaction-payload",level:3},{value:"Signing the Transaction",id:"signing-the-transaction",level:3}],k={toc:d};function m(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The Staking API requires you to pass your API key as an ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header when making requests.\nRead more about it in the quick start for ",(0,i.kt)(s.Z,{to:"/quickstart/api-authentication",mdxType:"Link"},"API Authentication"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{2} title="Sample cURL Request"',"{2}":!0,title:'"Sample',cURL:!0,'Request"':!0},'curl -X POST https://near-slate.datahub.figment.io/api/v1/flows \\\n-H Authorization: API-KEY\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "near",\n    "chain_code": "testnet",\n    "operation": "transfer",\n    "version": "v1"\n  }\n}\'\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"flows-create-a-new-flow"},"Flows: Create a New Flow"),(0,i.kt)("p",null,"The Staking API has two endpoints for starting and working through a flow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/v1/flows")," to create a new flow, or"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUT /api/v1/flows/[:flow_id]/next")," to proceed to the next step in the flow.")),(0,i.kt)("p",null,"For each individual operation you want to complete, hit the first endpoint once to create the flow and the second endpoint multiple times until the flow is completed."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"avax",label:"Avalanche",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Network codes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mainnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testnet"))),(0,i.kt)("p",null,"Operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking"))),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There is no undelegate option on Avalanche."),(0,i.kt)("p",{parentName:"admonition"},"Tokens unlock automatically at the end time specified during the delegation process."))),(0,i.kt)(l.Z,{value:"eth",label:"Ethereum",mdxType:"TabItem"},(0,i.kt)("p",null,"Network codes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mainnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"goerli-prater"))),(0,i.kt)("p",null,"Operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking")))),(0,i.kt)(l.Z,{value:"near",label:"NEAR",mdxType:"TabItem"},(0,i.kt)("p",null,"Network codes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mainnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testnet"))),(0,i.kt)("p",null,"Operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unstaking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transfer")))),(0,i.kt)(l.Z,{value:"dot",label:"Polkadot",mdxType:"TabItem"},(0,i.kt)("p",null,"Network codes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mainnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"westend"))),(0,i.kt)("p",null,"Operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unstaking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_proxy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove_proxy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transfer")))),(0,i.kt)(l.Z,{value:"sol",label:"Solana",mdxType:"TabItem"},(0,i.kt)("p",null,"Network codes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mainnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"devnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testnet"))),(0,i.kt)("p",null,"Operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unstaking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transfer"))))),(0,i.kt)("h3",{id:"requests"},"Requests"),(0,i.kt)("p",null,"This example request would begin a new flow for the ",(0,i.kt)("inlineCode",{parentName:"p"},"unstaking")," operation on Solana devnet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example cURL Request"',title:'"Example',cURL:!0,'Request"':!0},'curl -X POST https://solana-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "solana",\n    "chain_code": "devnet",\n    "operation": "unstaking"\n  }\n}\'\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To continue an existing flow, you must supply the Flow ID in the request URL before the ",(0,i.kt)("inlineCode",{parentName:"p"},"/next")," route.\nThe request body must contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," object, populated with the correct parameters depending on the protocol and flow you are using."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example cURL Request"',title:'"Example',cURL:!0,'Request"':!0},'curl -X PUT https://eth-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "name_of_action",\n  "inputs": {\n    "field_1": "data_1",\n    "field_2": "data_2"\n  }\n}\'\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON Response Format"',title:'"Example',JSON:!0,Response:!0,'Format"':!0},'{\n  "id": [:id],\n  "state": [:state],\n  "actions": [...],\n  "data": {\n  },\n  "network_code": [:network_code],\n  "chain_code": [:chain_code],\n  "created_at": [:date_time],\n  "updated_at": [:date_time]\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"actions-response-structures-and-flow-paths"},"Actions: Response Structures and Flow Paths"),(0,i.kt)("p",null,"Let's look at the response returned when we submit a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows"),", to create a new staking flow on Solana's Devnet."),(0,i.kt)("p",null,"Specifically, notice there are two actions listed: ",(0,i.kt)("inlineCode",{parentName:"p"},"assign_stake_account")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"create_new_stake_account"),", each with a few ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," defined."),(0,i.kt)("p",null,"These two ",(0,i.kt)("inlineCode",{parentName:"p"},"actions")," can be presented to the end user as a possible step in the flow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user has an inactive stake account they wish to activate, in which case the ",(0,i.kt)("inlineCode",{parentName:"li"},"assign_stake_account")," action would be followed."),(0,i.kt)("li",{parentName:"ul"},"The user does not have an account and needs to create a new one. In this case the ",(0,i.kt)("inlineCode",{parentName:"li"},"create_new_stake_account")," action would be utilized.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON Response"',title:'"Example',JSON:!0,'Response"':!0},'{\n  "id": "268c2885-7bfa-42b9-8e4d-756d2852f62e",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "assign_stake_account",\n      "inputs": [\n        {\n          "name": "stake_account_pubkey",\n          "display": "Stake Account Public Key",\n          "description": "The public address of an existing stake account to be activated.",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "funding_account_pubkey",\n          "display": "Funding Account Public Key",\n          "description": "The public address of the account responsible for paying the transaction fee.",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "create_new_stake_account",\n      "inputs": [\n        {\n          "name": "funding_account_pubkey",\n          "display": "Funding Account Public Key",\n          "description": "The public address of the account responsible for paying the transaction fee.",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "stake_authority_pubkey",\n          "display": "Stake Authority Public Key",\n          "description": "This account will have the authority to submit certain staking transaction for the generated Stake Account.",\n          "type": "string",\n          "validations": []\n        },\n        {\n          "name": "withdraw_authority_pubkey",\n          "display": "Withdraw Authority Public Key",\n          "description": "This account will have the authority to submit a withdrawal transaction to withdraw SOL from the generated Stake Account.",\n          "type": "string",\n          "validations": []\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "Amount to be staked (in SOL).",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            },\n            {\n              "type": "precision",\n              "options": {\n                "max": 9\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "data": {},\n  "network_code": "solana",\n  "chain_code": "devnet",\n  "created_at": "2022-03-02T16:48:12.426Z",\n  "updated_at": "2022-03-02T16:48:12.426Z"\n}\n')),(0,i.kt)("h2",{id:"inputs-building-forms-and-data-collection"},"Inputs: Building Forms and Data Collection"),(0,i.kt)("p",null,"Building a dynamic form is possible regardless of the action."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The title of the form will be the humanized version of the action name."),(0,i.kt)("li",{parentName:"ul"},"The input fields would correspond to the inputs defined for that action."),(0,i.kt)("li",{parentName:"ul"},"Each field can be validated based on the input's defined validations."),(0,i.kt)("li",{parentName:"ul"},"Each field can be labelled with the input's provided display value or a human readable version of the input's name."),(0,i.kt)("li",{parentName:"ul"},"Each field can have a tooltip or other descriptive aid populated with the input's provided description value.")),(0,i.kt)("p",null,"Let's see what that looks like in practice for the ",(0,i.kt)("inlineCode",{parentName:"p"},"assign_stake_account")," action type from the previous response."),(0,i.kt)("p",null,"This action contains the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON Response"',title:'"Example',JSON:!0,'Response"':!0},'{\n  "name": "assign_stake_account",\n  "inputs": [\n    {\n      "name": "stake_account_pubkey",\n      "display": "Stake Account Public Key",\n      "description": "The public address of an existing stake account to be activated.",\n      "type": "string",\n      "validations": [\n        {\n          "type": "presence",\n          "options": {}\n        }\n      ]\n    },\n    {\n      "name": "funding_account_pubkey",\n      "display": "Funding Account Public Key",\n      "description": "The public adress of an account with stake authority over the given Stake Account.",\n      "type": "string",\n      "validations": [\n        {\n          "type": "presence",\n          "options": {}\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Applying the approach for form building presented above, we would achieve the following:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking API Assign Staking Account",src:t(596).Z,width:"449",height:"329"})),(0,i.kt)("h2",{id:"payloads-transactions-and-signatures"},"Payloads: Transactions and Signatures"),(0,i.kt)("p",null,"All flows will contain one or more transactions that need to be signed in order to complete the Flow."),(0,i.kt)("p",null,"These transaction steps will always have two possible actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_[transaction_type]_tx"),": returns to the same point in the flow, but with an updated transaction payload. Use this action if you need an updated nonce (or recent block hash in the case of Solana flows)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_[transaction_type]_tx"),": you will return a signed transaction payload or signing payload to the Staking API in order for the Staking API to broadcast it to the network")),(0,i.kt)("p",null,"The refresh transaction action does not require any inputs\u2014it simply regenerates the transaction payload and signing payload so the nonce is current."),(0,i.kt)("p",null,"But what happens when you are ready to sign the transaction?"),(0,i.kt)("h3",{id:"transaction-payloads-and-signing-payloads"},"Transaction Payloads and Signing Payloads"),(0,i.kt)("p",null,"After you submit data during a data collection step, the response returned by the Staking API will look similar to this (NEAR token transfer flow used for this example):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON Response"',title:'"Example',JSON:!0,'Response"':!0},'{\n  "id": "[:flow_id]",\n  "state": "transfer_tx_signature",\n  "actions": [\n  {\n    "name": "refresh_transfer_tx",\n    "inputs": []\n   },\n   {\n    "name": "sign_transfer_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": [\n            "[:signer_pubkey]"\n          ],\n          "transaction_payload": "[:transaction_payload]"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": [\n            "[:signer_pubkey]"\n          ],\n          "transaction_payload": "[:transaction_payload"],\n          "signing_payload": "[:signing_payload]"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "from_account_pubkey": "[:from_account_pubkey]",\n    "from_account_address": "[:from_account_address]",\n    "to_account_address": "[:to_account_address]",\n    "amount": "[:amount]",\n    "transfer_transaction": {\n      "raw": "[:raw_transaction_payload]",\n      "signing_payload": "[:signing_payload]",\n      "signed": null,\n      "hash": "",\n      "status": null,\n      "error": null,\n      "signatures": null\n    }\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-07-07T15:06:45.240Z",\n  "updated_at": "2022-07-07T21:10:25.413Z"\n}\n')),(0,i.kt)("p",null,"The Staking API will expect to receive EITHER a signed transaction payload OR an array of signatures obtained from signing the ",(0,i.kt)("inlineCode",{parentName:"p"},"signing_payload"),"."),(0,i.kt)("p",null,"Read more about signing in the guides ",(0,i.kt)(s.Z,{to:"/guides/staking-api/figment-signing-transactions",mdxType:"Link"},"Signing Transactions with Figment's npm Package")," and ",(0,i.kt)(s.Z,{to:"/guides/staking-api/fireblocks-signing-transactions",mdxType:"Link"},"Signing Transactions With the Fireblocks API")),(0,i.kt)("p",null,"If you provide signatures, then the Staking API will construct the signed transaction payload for you."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Generally speaking, the signing payload is derived from the transaction payload. Signatures are the result of cryptographically signing the signing payload. And a signed transaction payload can be constructed from signatures.")),(0,i.kt)("h3",{id:"confirming-the-transaction-payload"},"Confirming the Transaction Payload"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The transaction payload and the signing payload are clearly not human readable, and it is never advisable to blind sign a transaction"),"."),(0,i.kt)("p",null,"We have published an ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@figmentio/slate"},"NPM package")," used to decode transactions and confirm the details of a given transaction. Details are available in the guide ",(0,i.kt)(s.Z,{to:"/guides/staking-api/figment-signing-transactions",mdxType:"Link"},"Signing Transactions with Figment's NPM Package"),"."),(0,i.kt)("p",null,"We encourage you to explore the code in order to understand how it works. You can run the code locally on your own system. It does not connect to the Staking API endpoints in any way, also you do not provide any identifying information for the transaction."),(0,i.kt)("p",null,"Simply provide the network ID, the operation type, and the transaction payload, and it will confirm the details of the transaction."),(0,i.kt)("p",null,"Similarly, the NPM package will return a signing payload - this should exactly match the one you received in the response from the Staking API. In this way you can be assured that the payload you sign belongs to the same transaction."),(0,i.kt)("h3",{id:"signing-the-transaction"},"Signing the Transaction"),(0,i.kt)("p",null,"If you are using Fireblocks as a custodial solution, check the following page for instructions on using the raw signing capabilities of Fireblocks: ",(0,i.kt)(s.Z,{to:"/guides/staking-api/fireblocks-signing-transactions",mdxType:"Link"},"Signing Transactions with the Fireblocks API")),(0,i.kt)("p",null,"Otherwise, it will be up to you to understand signing with your unique custody arrangement."),(0,i.kt)("p",null,"As a frame of reference you can follow our guide to using the slate NPM package: ",(0,i.kt)(s.Z,{to:"/guides/staking-api/figment-signing-transactions",mdxType:"Link"},"Signing Transactions with Figment's NPM Package"),". It contains signing capabilities for every network supported by the Staking API - if you have access to the private key of the delegating address, then you can sign with the NPM package."),(0,i.kt)("p",null,"You may review the code to understand how signing is performed for a given network."))}m.isMDXComponent=!0},596:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/staking_api_assign_stake_account-0f010465459c7b9c68fc10b855715d88.png"}}]);