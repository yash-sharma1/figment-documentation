"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2307],{2750:(e,a,t)=>{t.d(a,{ZP:()=>s});var n=t(7462),c=(t(7294),t(3905)),d=t(5488),i=t(5162),o=t(7643);const r={toc:[{value:"Authentication",id:"authentication",level:3}]};function s(e){let{components:a,...t}=e;return(0,c.kt)("wrapper",(0,n.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h3",{id:"authentication"},"Authentication"),(0,c.kt)("div",null,"API calls require authentication with API key via ",(0,c.kt)("code",null,"Authorization")," ","request header or ",(0,c.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,c.kt)("strong",null,t.network," ",t.service)," ","endpoint, hosted at ",(0,c.kt)("code",null,t.url),(0,c.kt)("br",null),(0,c.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,c.kt)(d.Z,{mdxType:"Tabs"},(0,c.kt)(i.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,c.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${t.url}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,c.kt)(i.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,c.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${t.url}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,c.kt)(i.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,c.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${t.url}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'`)),(0,c.kt)(i.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,c.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${t.url}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'`))))}s.isMDXComponent=!0},3976:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7294),c=t(6550);function d(e){let{network:a,networks:t,methods:d,service:i}=e;const o=(0,c.TH)(),r=(0,c.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:a,onChange:e=>{r.push(o.pathname.replace(/\/[^\/]+$/,`/${e.target.value}`))}},t.map((e=>n.createElement("option",{key:`${e.value}--n-option`,value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:o.hash.replace("#","")||"",onChange:e=>{r.push(`#${e.target.value}`)}},d.map((e=>n.createElement("option",{key:`${e.name}--m-hash`,value:e.name.toLowerCase()},e.name)))))}},7297:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7294);function c(e){let{network:a,service:t}=e;return(0,n.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=a;let n=e.previousElementSibling;n=n.cloneNode(!0),n.querySelector(".breadcrumbs__link span").innerHTML=t.label,n.querySelector(".breadcrumbs__link").href=t.link,e.insertAdjacentElement("beforebegin",n)}),[a]),n.createElement(n.Fragment,null)}},3213:(e,a,t)=>{t.d(a,{S:()=>O});var n=t(7462),c=t(7294),d=t(8538),i=t(7748),o=t(460),r=t.n(o),s=t(3746),l=t(6412);const f={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function b(e){let{children:a="",header:t,actions:d,disabled:i=!1,status:o,onValueChange:b}=e;const p=(0,l.p)(),m=(0,c.useRef)(null);(0,c.useEffect)((()=>{var e;const a=null==(e=m.current)?void 0:e.querySelector("textarea"),t=e=>{const a=e.target;a.style.width=a.scrollWidth+"px"};return a.addEventListener("input",t),()=>a.removeEventListener("input",t)}),[]);return c.createElement("div",{ref:m},c.createElement(u,{actions:d,status:o},t),c.createElement("div",{className:f.Container},c.createElement(r(),{value:a,onValueChange:b,highlight:function(e){return void 0===e&&(e=""),c.createElement(s.ZP,(0,n.Z)({},s.lG,{theme:p,code:e,language:"json"}),(e=>{let{className:a,style:t,tokens:d,getLineProps:i,getTokenProps:o}=e;return c.createElement("div",{className:f.Code},d.map(((e,a)=>c.createElement("div",(0,n.Z)({key:a},i({line:e,key:a}),{className:f.Line}),c.createElement("span",{className:f.LineContent},e.map(((e,a)=>c.createElement("span",(0,n.Z)({key:a},o({token:e,key:a}))))))))))}))},disabled:i,ignoreTabKey:!0,padding:10,style:{...p.plain,overflow:"auto"},className:f.Editor})))}function u(e){let{children:a,actions:t=[],status:n}=e;return c.createElement("div",{className:f.Header,"data-status":n},c.createElement("span",null,a),c.createElement("span",{className:f.Actions},t.map(((e,a)=>{let{title:t,onClick:n,Component:d=t}=e;return c.createElement("button",{className:f.HeaderButton,key:`${a}:${t}`,title:t,onClick:n},d)}))))}var p=t(195);const m="overlayHeaderButton_IGf5";const h=function(e,a){const t=(0,c.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[d,i]=(0,c.useReducer)(((e,a)=>{switch(a.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:a.payload,loading:!1};case"error":return{...n,error:a.payload,loading:!1};default:return e}}),n);return{...d,fetchData:async function(n,c){void 0===c&&(c={}),i({type:"loading"});try{const d=await fetch(e+(n?`/${n}`:""),{...a,...c});if(!d.ok){let e,a,t;try{t=JSON.parse(await d.text()),e=await d.json(),a=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(a,null,2)||JSON.stringify(t,null,2)||d.statusText)}const o=await d.json();if(t.current)return;return i({type:"fetched",payload:o}),o}catch(d){if(t.current)return;return i({type:"error",payload:d.message}),null}}}};var g,y=t(7643),_=t(4672);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},w.apply(this,arguments)}const v=e=>{let{title:a,titleId:t,...n}=e;return c.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},n),a?c.createElement("title",{id:t},a):null,g||(g=c.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var k;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},x.apply(this,arguments)}const E=e=>{let{title:a,titleId:t,...n}=e;return c.createElement("svg",x({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},n),a?c.createElement("title",{id:t},a):null,k||(k=c.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function T(e){let{req:a,res:t,interactive:n,endpoint:d}=e;const[i,o]=(0,c.useState)(C(a.body)),[r,s]=(0,c.useState)(a.query),[l,f]=(0,c.useState)(S(t.body)),u="string"==typeof a.body&&0==a.body.indexOf("query"),{data:g,error:w,loading:k,fetchData:x}=h(d,{method:a.method,headers:{...a.headers,"Content-Type":u?"application/graphql":"application/json"},body:C(a.body)}),[T,P]=(0,c.useState)(null);(0,c.useEffect)((()=>{k?P("LOADING"):w||null!=g&&g.error?P("ERROR"):g&&P("SUCCESS")}),[g,w,k]);const A=[n?{title:"Run request",onClick:async()=>{const e=await x(r,{body:i});e&&f(S(e))},Component:c.createElement(c.Fragment,null,c.createElement(v,null)," Run")}:null,{title:"Copy",onClick:()=>(0,p.Z)(i),Component:c.createElement(_.Z,{code:"",className:m})},n?{title:"Reset",onClick:()=>{P(null),s(a.query),o(C(a.body)),f(S(t.body))},Component:c.createElement(E,null)}:null].filter((e=>!!e));return c.createElement(c.Fragment,null,c.createElement(b,{header:"GET"===a.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:A,disabled:!n,onValueChange:e=>{n&&("GET"===a.method?s(e):"POST"===a.method&&o(e))}},"GET"===a.method?r:i),c.createElement(y.Z,{title:T?"Response":"Example Response",language:"json"},w?`${w}`:l))}function S(e){return JSON.stringify(e,null,2)}function C(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const P="heading_REER";var A=t(9960),q=t(3905);const N={toc:[]};function Z(e){let{components:a,...t}=e;return(0,q.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,q.kt)("details",{open:t.accordionOpen?"open":void 0},(0,q.kt)("summary",null,(0,q.kt)("span",{className:"open"},"Specification"),(0,q.kt)("span",{className:"closed"},"View Specification")),(0,q.kt)(d.D,{mdxType:"ReactMarkdown"},t.details)))}function I(e){let{name:a,content:t="",interactive:n,request:i,accordionOpen:o=!1,response:r,endpoint:s}=e;["Rewards (by epoch)","Rewards (daily)"].includes(a)&&(i.body={...i.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===a?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]});const[l,...f]=t.trim().split(/\n+/),b=f.join("\n");return c.createElement(c.Fragment,null,c.createElement("h2",{id:a.toLowerCase(),className:P,"data-method":i.method},c.createElement(A.Z,{to:`#${a.toLowerCase()}`},a)),c.createElement(d.D,null,l),c.createElement(T,{req:i,res:r,interactive:n,endpoint:s}),c.createElement(Z,{details:b,accordionOpen:o}),c.createElement("hr",null))}function O(e){let{network:a,methods:t,service:d,proxy:o}=e;return c.createElement(c.Fragment,null,c.createElement("h3",null,"Available Methods"),t.map(((e,t)=>c.createElement(I,(0,n.Z)({key:a+t},e,{endpoint:`${o}/${d}/${a}`,accordionOpen:"node-api"!==d})))),c.createElement(i.Z,null))}Z.isMDXComponent=!0},305:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>b});var n=t(7462),c=(t(7294),t(3905)),d=t(3213),i=t(3976),o=(t(7297),t(2750));const r={title:"Ethereum",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API - Ethereum",image:"img/logo.svg",keywords:["Staking API","Ethereum"]},s="Staking API - Ethereum",l={unversionedId:"api-reference/staking-api/ethereum",id:"api-reference/staking-api/ethereum",title:"Ethereum",description:"Staking API - Ethereum",source:"@site/docs/api-reference/staking-api/ethereum.mdx",sourceDirName:"api-reference/staking-api",slug:"/api-reference/staking-api/ethereum",permalink:"/api-reference/staking-api/ethereum",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Ethereum",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API - Ethereum",image:"img/logo.svg",keywords:["Staking API","Ethereum"]},sidebar:"docsSidebar"},f={},b=[],u={toc:b};function p(e){let{components:a,...t}=e;return(0,c.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"staking-api---ethereum"},"Staking API - Ethereum"),(0,c.kt)(i.Z,{service:"staking-api",methods:[{name:"Create New Staking Flow"},{name:"Submit Deposit Data"},{name:"Submit Signed Transaction for Broadcast"},{name:"Get Flow Status"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Cosmos",value:"cosmos"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Polygon",value:"polygon"},{label:"Solana",value:"solana"}],network:"ethereum",mdxType:"ApiReferenceNav"}),(0,c.kt)(o.ZP,{url:"https://eth-slate.datahub.figment.io/api/v1/flows",network:"Ethereum",service:"Staking API",mdxType:"MakingCalls"}),(0,c.kt)(d.S,{methods:[{name:"Create New Staking Flow",content:"To initiate the staking process, create a new flow with a `POST` request to `/api/v1/flows`.\n\n### Parameters\n\n- `flow` &mdash; `object`\n  - `network_code` &mdash; `string` Network this flow operates on (ex. `ethereum`) (required).\n  - `chain_code` &mdash; `string` Chain this flow operates on (ex. `goerli-prater`) (required).\n  - `operation` &mdash; `string` The operation to perform (ex. `staking`) (required).\n  - `version` &mdash; `string` API version to use (ex. `v1`) (optional).\n\n### Response\n\n- `id` &mdash; `string` ID of the flow.\n- `state` &mdash; `string` The current state of the flow.\n- `actions` &mdash; `array` It includes the `name` & `inputs` of all next possible actions.\n - `create_deposit_transaction` &mdash; Use this action to generate a deposit transaction to stake your ETH.\n   - `funding_account_address` &mdash; The wallet ETH will be originating from.\n   - `validator_pub_key` -The public key of the validator that the ETH is to be deposited to.\n   - `withdraw_credentials` &mdash; The withdrawal address for the given validator.\n   - `signature` &mdash; A BLS proof of possession, i.e. a proof that the private key corresponding to the `validator_pub_key` is known by the signer.\n   - `deposit_data_root` &mdash; Uniquely identifies the set of deposits made so far.\n   - `gas_limit` &mdash; Adjust the gas limit.\n   - `gas_price` &mdash; Adjust the gas price.\n- `data` &mdash; `object` Staking flow & transaction data.",request:{method:"POST",header:[],body:{flow:{network_code:"ethereum",chain_code:"goerli-prater",operation:"staking",version:"v1"}},url:"https://eth-slate.datahub.figment.io/api/v1/flows",headers:{},query:""},interactive:!1,response:{name:"Create New Flow",body:{id:"a84f725a-bd16-4515-96a0-5b6ff2824c55",state:"initialized",actions:[{name:"create_deposit_tx",inputs:[{name:"funding_account_address",display:"Funding Account Address",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"validator_pub_key",display:"Validator Pub Key",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"withdrawal_credentials",display:"Withdrawal Credentials",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"signature",display:"Signature",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"deposit_data_root",display:"Deposit Data Root",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"gas_limit",display:"Gas Limit",description:"",type:"string",validations:[{type:"numericality",options:{allow_nil:!0,only_integer:!0,greater_than:0}}]},{name:"gas_price",display:"Gas Price",description:"",type:"string",validations:[{type:"numericality",options:{allow_nil:!0,greater_than:0}}]}]}],data:{funding_account_address:null,validator_pub_key:null,withdrawal_credentials:null,signature:null,deposit_data_root:null,amount:"32.0",gas_price:null,gas_limit:null,deposit_transaction:null},network_code:"ethereum",chain_code:"goerli-prater",created_at:"2022-10-05T23:06:17.913Z",updated_at:"2022-10-05T23:06:17.913Z"}}},{name:"Submit Deposit Data",content:"After collecting the required inputs, `PUT /api/v1/flows/[:flow_id]/next` to move on to the next step.\n\n### Parameters\n\n- `name` &mdash; `string` Name of the action to execute (required).\n- `inputs` &mdash; `object` (required).\n  - `funding_account_address` &mdash; `string` The wallet from which the ETH will originate. (required).\n  - `validator_pub_key` &mdash; `string` The public key of the validator to which the ETH will be deposited. (required).\n  - `withdrawal_credentials` &mdash; `string` The withdrawal address for the given validator. (required).\n  - `signature` &mdash; `string` A BLS proof of possession i.e., a proof that the private key corresponding to the `validator_pub_key` is known by the signer. (required).\n  - `deposit_data_root` &mdash; `string` Uniquely identifies the set of deposits made so far. (required).\n  - `amount` &mdash; `number` Number of tokens you want to delegate. (required).\n  - `gas_price` &mdash; `string` Adjust the gas price (optional).\n  - `gas_limit` &mdash; `string` Adjust the gas limit (optional).\n\n### Response\n\n- `id` &mdash; `string` ID of the flow.\n- `state` &mdash; `string` The current state of the flow.\n- `actions` &mdash; `array` It includes the `name` & `inputs` of all next possible actions.\n - `refresh_deposit_tx` &mdash; If you need to get a fresh version of the transaction payload (i.e., the nonce has increased).\n - `sign_deposit_tx` &mdash; Submit a signed transaction payload ready to be broadcast to the network.\n- `data` &mdash; `object` Staking flow & transaction data.",request:{method:"PUT",header:[],body:{name:"create_deposit_tx",inputs:{funding_account_address:"0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594",validator_pub_key:"0xa7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549",withdrawal_credentials:"0x010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca",signature:"0x876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65b"}},url:"https://eth-slate.datahub.figment.io",headers:{},query:"api/v1/flows/{{ethStakingFlowId}}/next"},interactive:!1,response:{name:"Submit Deposit Data",body:{id:"8307b0d1-fc17-45b1-b540-2d9c31578d99",state:"deposit_tx_signature",actions:[{name:"refresh_deposit_tx",inputs:[]},{name:"sign_deposit_tx",inputs:[{name:"transaction_payload",display:"Transaction Payload",description:"",type:"signed_transaction",validations:[],signers:["0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594"],transaction_payload:"0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0"},{name:"signatures",display:"Signatures",description:"",type:"array_of_signatures",validations:[],signers:["0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594"],transaction_payload:"0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0",signing_payload:"0xfa2fde357ca51a2f2c2b9aab0b00451d0b7ba8772837b2c6fab7a5371d9a509e"}]}],data:{funding_account_address:"0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594",validator_pub_key:"0xa7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549",withdrawal_credentials:"0x010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca",signature:"0x876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65b",deposit_data_root:"0xd446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f91",amount:"32.0",gas_price:null,gas_limit:null,deposit_transaction:{raw:"0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0",signing_payload:"0xfa2fde357ca51a2f2c2b9aab0b00451d0b7ba8772837b2c6fab7a5371d9a509e",signed:null,hash:null,status:null,error:null,signatures:null}},network_code:"ethereum",chain_code:"goerli-prater",created_at:"2022-08-04T03:56:12.111Z",updated_at:"2022-08-04T04:11:54.830Z"}}},{name:"Submit Signed Transaction for Broadcast",content:"Before broadcasting the transaction, you must [sign the `transaction_payload`](https://docs.figment.io/guides/staking-api/figment-signing-transactions) you received in the previous step. After signing the transaction, send a `PUT` request to `/api/v1/flows/[:flow_id]/next` with the signed payload. The Staking API will broadcast the transaction to the Ethereum network.\n\n### Parameters\n\n- `name` &mdash; `string` Name of the action to execute (required).\n- `inputs` &mdash; `object`\n  - `transaction_payload` &mdash; Signed transaction payload from the previous step's response.\n\n### Response\n\n- `id` &mdash; `string` ID of the flow.\n- `state` &mdash; `string` The current state of the flow.\n - `deposit_tx_broadcasting` &mdash; Transaction has been broadcast and confirmed.\n - `deposited` &mdash; Transaction has been confirmed.\n- `actions` &mdash; `array` It includes the `name` & `inputs` of all next possible actions.\n- `data` &mdash; `object` Staking flow & transaction data.",request:{method:"PUT",header:[],body:{name:"sign_deposit_tx",inputs:{transaction_payload:"0x02f9021905808459682f008459682f1c82dc9e94ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a48308230000000000000000000000000000000000000000000000000000000000000030a0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010000000000000000000000000000000000000000000000000000000000000006088cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413c080a0a0a59a1a2c4e03582ad842293a2dd2ee17f4f9f71f46a06ea59447eee9a71a20a00545743e3159ff27ae44e6fdaa2f434e033438d661cccf9f5ba202ea64e25d64"}},url:"https://eth-slate.datahub.figment.io",headers:{},query:"api/v1/flows/{{ethStakingFlowId}}/next"},interactive:!1,response:{name:"Submit Signed Transaction for Broadcast",body:{id:"8307b0d1-fc17-45b1-b540-2d9c31578d99",state:"deposit_tx_broadcasting",actions:[{name:"wait",estimated_state_change_at:"2022-10-07T17:26:08.237Z",inputs:[]}],data:{funding_account_address:"0x387462761F706AA7c1DA71FBA1c545724928b67b",validator_pub_key:"0xa0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640",withdrawal_credentials:"0x010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010",signature:"0x88cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413",deposit_data_root:"0x021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a4830823",amount:"32.0",gas_price:null,gas_limit:null,deposit_transaction:{raw:"0x02f901d605808459682f008459682f1c82dc9e94ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a48308230000000000000000000000000000000000000000000000000000000000000030a0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010000000000000000000000000000000000000000000000000000000000000006088cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413c0",signing_payload:null,signed:"0x02f9021905808459682f008459682f1c82dc9e94ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a48308230000000000000000000000000000000000000000000000000000000000000030a0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010000000000000000000000000000000000000000000000000000000000000006088cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413c080a0a0a59a1a2c4e03582ad842293a2dd2ee17f4f9f71f46a06ea59447eee9a71a20a00545743e3159ff27ae44e6fdaa2f434e033438d661cccf9f5ba202ea64e25d64",hash:"0x6acc6aa30c09ba30a4cc4ece382b6956cf23e0c80ea518b030c9185588ea40a6",status:"broadcast",error:null,signatures:null}},network_code:"ethereum",chain_code:"goerli-prater",created_at:"2022-10-06T23:40:33.826Z",updated_at:"2022-10-07T17:24:17.339Z"}}},{name:"Get Flow Status",content:"To get the current state of the existing flow, send a `GET` request to `/api/v1/flows/[:flow_id]` using the flow ID from the previous step.\n\n### Parameters\n\n- None\n\n### Response\n\n- `id` &mdash; `string` ID of the flow.\n- `state` &mdash; `string` The current state of the flow.\n - `deposit_tx_broadcasting` &mdash; Transaction is broadcasting and not confirmed yet.\n - `deposited` &mdash; Transaction has been confirmed and stake deposited.\n- `actions` &mdash; `array` It includes the `name` & `inputs` of all next possible actions.\n- `data` &mdash; `object` Staking flow & transaction data.",request:{method:"GET",header:[],url:"https://eth-slate.datahub.figment.io",headers:{},query:"api/v1/flows/{{ethStakingFlowId}}"},interactive:!1,response:{name:"Get Flow Status",body:{id:"ad904171-5051-40dd-bfba-d9c710174881",state:"deposited",actions:[],data:{funding_account_address:"0x387462761F706AA7c1DA71FBA1c545724928b67b",validator_pub_key:"0xa0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640",withdrawal_credentials:"0x010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010",signature:"0x88cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413",deposit_data_root:"0x021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a4830823",amount:"32.0",gas_price:null,gas_limit:null,deposit_transaction:{raw:"0x02f901d605808459682f008459682f1c82dc9e94ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a48308230000000000000000000000000000000000000000000000000000000000000030a0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010000000000000000000000000000000000000000000000000000000000000006088cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413c0",signing_payload:null,signed:"0x02f9021905808459682f008459682f1c82dc9e94ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a48308230000000000000000000000000000000000000000000000000000000000000030a0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010000000000000000000000000000000000000000000000000000000000000006088cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413c080a0a0a59a1a2c4e03582ad842293a2dd2ee17f4f9f71f46a06ea59447eee9a71a20a00545743e3159ff27ae44e6fdaa2f434e033438d661cccf9f5ba202ea64e25d64",hash:"0x6acc6aa30c09ba30a4cc4ece382b6956cf23e0c80ea518b030c9185588ea40a6",status:"broadcast",error:null,signatures:null}},network_code:"ethereum",chain_code:"goerli-prater",created_at:"2022-04-26T18:23:46.702Z",updated_at:"2022-04-27T22:24:47.738Z"}}}],service:"staking-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"Cosmos",value:"cosmos"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Polygon",value:"polygon"},{label:"Solana",value:"solana"}],network:"ethereum",proxy:"https://api-service-proxy.paulpomerleau.workers.dev",mdxType:"APIMethods"}))}p.isMDXComponent=!0}}]);