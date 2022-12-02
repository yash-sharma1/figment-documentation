"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[70],{2750:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),i=n(5162),l=n(7643);const s={toc:[{value:"Authentication",id:"authentication",level:3}]};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("div",null,"API calls require authentication with API key via ",(0,o.kt)("code",null,"Authorization")," ","request header or ",(0,o.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,o.kt)("strong",null,n.network," ",n.service)," ","endpoint, hosted at ",(0,o.kt)("code",null,n.url),(0,o.kt)("br",null),(0,o.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,o.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${n.url}${n.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,o.kt)(i.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,o.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${n.url}/apikey/{{apikey}}${n.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,o.kt)(i.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,o.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${n.url}${n.route}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'`)),(0,o.kt)(i.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,o.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${n.url}/apikey/{{apikey}}${n.route}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'`))))}d.isMDXComponent=!0},3976:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6550);function r(e){let{network:t,networks:n,methods:r,service:i}=e;const l=(0,o.TH)(),s=(0,o.k6)();return a.createElement("div",null,a.createElement("label",null,"Change Network: "),a.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{s.push(l.pathname.replace(/\/[^\/]+$/,`/${e.target.value}`))}},n.map((e=>a.createElement("option",{key:`${e.value}--n-option`,value:e.value},e.label)))),a.createElement("label",null," Jump to: "),a.createElement("select",{className:"custom-select",defaultValue:l.hash.replace("#","")||"",onChange:e=>{s.push(`#${e.target.value}`)}},r.map((e=>a.createElement("option",{key:`${e.name}--m-hash`,value:e.name.toLowerCase()},e.name)))))}},7297:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function o(e){let{network:t,service:n}=e;return(0,a.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=t;let a=e.previousElementSibling;a=a.cloneNode(!0),a.querySelector(".breadcrumbs__link span").innerHTML=n.label,a.querySelector(".breadcrumbs__link").href=n.link,e.insertAdjacentElement("beforebegin",a)}),[t]),a.createElement(a.Fragment,null)}},3213:(e,t,n)=>{n.d(t,{S:()=>Z});var a=n(7462),o=n(7294),r=n(8538),i=n(7748),l=n(460),s=n.n(l),d=n(3746),c=n(6412);const p={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function u(e){let{children:t="",header:n,actions:r,disabled:i=!1,status:l,onValueChange:u}=e;const m=(0,c.p)(),b=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;const t=null==(e=b.current)?void 0:e.querySelector("textarea"),n=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",n),()=>t.removeEventListener("input",n)}),[]);return o.createElement("div",{ref:b},o.createElement(h,{actions:r,status:l},n),o.createElement("div",{className:p.Container},o.createElement(s(),{value:t,onValueChange:u,highlight:function(e){return void 0===e&&(e=""),o.createElement(d.ZP,(0,a.Z)({},d.lG,{theme:m,code:e,language:"json"}),(e=>{let{className:t,style:n,tokens:r,getLineProps:i,getTokenProps:l}=e;return o.createElement("div",{className:p.Code},r.map(((e,t)=>o.createElement("div",(0,a.Z)({key:t},i({line:e,key:t}),{className:p.Line}),o.createElement("span",{className:p.LineContent},e.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},l({token:e,key:t}))))))))))}))},disabled:i,ignoreTabKey:!0,padding:10,style:{...m.plain,overflow:"auto"},className:p.Editor})))}function h(e){let{children:t,actions:n=[],status:a}=e;return o.createElement("div",{className:p.Header,"data-status":a},o.createElement("span",null,t),o.createElement("span",{className:p.Actions},n.map(((e,t)=>{let{title:n,onClick:a,Component:r=n}=e;return o.createElement("button",{className:p.HeaderButton,key:`${t}:${n}`,title:n,onClick:a},r)}))))}var m=n(195);const b="overlayHeaderButton_IGf5";const k=function(e,t){const n=(0,o.useRef)(!1),a={error:void 0,data:void 0,loading:!1},[r,i]=(0,o.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...a,loading:!0};case"fetched":return{...a,data:t.payload,loading:!1};case"error":return{...a,error:t.payload,loading:!1};default:return e}}),a);return{...r,fetchData:async function(a,o){void 0===o&&(o={}),i({type:"loading"});try{const r=await fetch(e+(a?`/${a}`:""),{...t,...o});if(!r.ok){let e,t,n;try{n=JSON.parse(await r.text()),e=await r.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(n,null,2)||r.statusText)}const l=await r.json();if(n.current)return;return i({type:"fetched",payload:l}),l}catch(r){if(n.current)return;return i({type:"error",payload:r.message}),null}}}};var y,g=n(7643),w=n(4672);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}const f=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,y||(y=o.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var E;function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}const T=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",_({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,E||(E=o.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function C(e){let{req:t,res:n,interactive:a,endpoint:r}=e;const[i,l]=(0,o.useState)(S(t.body)),[s,d]=(0,o.useState)(t.query),[c,p]=(0,o.useState)(N(n.body)),h="string"==typeof t.body&&0==t.body.indexOf("query"),{data:y,error:v,loading:E,fetchData:_}=k(r,{method:t.method,headers:{...t.headers,"Content-Type":h?"application/graphql":"application/json"},body:S(t.body)}),[C,R]=(0,o.useState)(null);(0,o.useEffect)((()=>{E?R("LOADING"):v||null!=y&&y.error?R("ERROR"):y&&R("SUCCESS")}),[y,v,E]);const x=[a?{title:"Run request",onClick:async()=>{const e=await _(s,{body:i});e&&p(N(e))},Component:o.createElement(o.Fragment,null,o.createElement(f,null)," Run")}:null,{title:"Copy",onClick:()=>(0,m.Z)(i),Component:o.createElement(w.Z,{code:"",className:b})},a?{title:"Reset",onClick:()=>{R(null),d(t.query),l(S(t.body)),p(N(n.body))},Component:o.createElement(T,null)}:null].filter((e=>!!e));return o.createElement(o.Fragment,null,o.createElement(u,{header:"GET"===t.method?"Request Query "+(a?"(try it)":""):"Request Body "+(a?"(try it)":""),actions:x,disabled:!a,onValueChange:e=>{a&&("GET"===t.method?d(e):"POST"===t.method&&l(e))}},"GET"===t.method?s:i),o.createElement(g.Z,{title:C?"Response":"Example Response",language:"json"},v?`${v}`:c))}function N(e){return JSON.stringify(e,null,2)}function S(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const R="heading_REER";var x=n(9960),P=n(3905);const j={toc:[]};function A(e){let{components:t,...n}=e;return(0,P.kt)("wrapper",(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,P.kt)("details",{open:n.accordionOpen?"open":void 0},(0,P.kt)("summary",null,(0,P.kt)("span",{className:"open"},"Specification"),(0,P.kt)("span",{className:"closed"},"View Specification")),(0,P.kt)(r.D,{mdxType:"ReactMarkdown"},n.details)))}function O(e){let{name:t,content:n="",interactive:a,request:i,accordionOpen:l=!1,response:s,endpoint:d}=e;["Rewards (by epoch)","Rewards (daily)"].includes(t)&&(i.body={...i.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===t?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]});const[c,...p]=n.trim().split(/\n+/),u=p.join("\n");return o.createElement(o.Fragment,null,o.createElement("h2",{id:t.toLowerCase(),className:R,"data-method":i.method},o.createElement(x.Z,{to:`#${t.toLowerCase()}`},t)),o.createElement(r.D,null,c),o.createElement(C,{req:i,res:s,interactive:a,endpoint:d}),o.createElement(A,{details:u,accordionOpen:l}),o.createElement("hr",null))}function Z(e){let{network:t,methods:n,service:r,proxy:l}=e;return o.createElement(o.Fragment,null,o.createElement("h3",null,"Available Methods"),n.map(((e,n)=>o.createElement(O,(0,a.Z)({key:t+n},e,{endpoint:`${l}/${r}/${t}`,accordionOpen:"node-api"!==r})))),o.createElement(i.Z,null))}A.isMDXComponent=!0},1085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(3213),i=n(3976),l=(n(7297),n(2750));const s={title:"NEAR",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API Webhooks - NEAR",image:"img/logo.svg",keywords:["Staking API Webhooks","NEAR"]},d="Staking API Webhooks - NEAR",c={unversionedId:"api-reference/staking-api-webhooks/near",id:"api-reference/staking-api-webhooks/near",title:"NEAR",description:"Staking API Webhooks - NEAR",source:"@site/docs/api-reference/staking-api-webhooks/near.mdx",sourceDirName:"api-reference/staking-api-webhooks",slug:"/api-reference/staking-api-webhooks/near",permalink:"/api-reference/staking-api-webhooks/near",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"NEAR",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API Webhooks - NEAR",image:"img/logo.svg",keywords:["Staking API Webhooks","NEAR"]},sidebar:"docsSidebar"},p={},u=[],h={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking-api-webhooks---near"},"Staking API Webhooks - NEAR"),(0,o.kt)(i.Z,{service:"staking-api-webhooks",methods:[{name:"Create New Webhook Endpoint"},{name:"Retrieve Endpoint"},{name:"List Endpoints"},{name:"Update Webhook Endpoint"},{name:"Delete an Existing Endpoint"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"near",mdxType:"ApiReferenceNav"}),(0,o.kt)(l.ZP,{url:"https://near-slate.datahub.figment.io",network:"Near",service:"Staking API Webhooks",route:"/api/v1/webhook_endpoints",mdxType:"MakingCalls"}),(0,o.kt)(r.S,{methods:[{name:"Create New Webhook Endpoint",content:"Create a new webhook endpoint with the specified parameters\n\n### Parameters\n\n- `webhook_endpoint` - `object`\n - `target_url` - `string` The target URL to send the webhook to.\n - `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n - `enabled` - `boolean` true / false\n\n### Response\n\n- `id` - `number` Id of the newly created webhook endpoint.\n- `event_types` - `string` Event type you have passed in the request parameter.\n- `target_url` - `string` The target URL to send the webhook to.\n- `enabled` - `boolean` true / false\n- `object` - `string` webhook_endpoint\n- `created` - `string` Timestamp when webhook endpoint was created.\n- `secret` - `string` Unique string for your webhook endpoint.\n\n#### Note\n\n- Each webhook is identified by a sequential number. \n- Currently when a webhook ID has been deleted it cannot be reused.\n- You will only be provided with the secret when you first create a webhook. Remember to capture this data!",request:{method:"POST",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/endpoint",event_types:["*"],enabled:"false"}},url:"https://near-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints"},interactive:!1,response:{name:"200 - Create New Webhook Endpoint",status:"Created",code:201,body:{id:17,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T19:09:37.964Z",secret:"whsec_xjCyVJZFjPBfmPh3joth3q4xsa9YJnL7vpSDdijfxYdMmHFtMxcXueudsGYgYYkb4wEnFMq18M5yZnUsNMQJkXkS9fXa1tZbc2Xk"}}},{name:"Retrieve Endpoint",content:"Retrieve the details of a webhook endpoint.\n\n### Parameters\n\n- For **Individual Webhook Endpoint**\n - Include the webhook ID number in the request URL, to retreive details for an individual webhook endpoint.\n\n- For **All Webhook Endpoints**\n - None\n\n### Response\n\n- `object` - `string` list\n- `url` - `string` Endpoint url\n- `has_more` - `boolean` true / false\n- `data` - `object`\n - `id` - `number` Id of the newly created webhook endpoint.\n - `event_types` - `string` Event type you have passed in the request parameter.\n - `target_url` - `string` The target URL to send the webhook to.\n - `enabled` - `boolean` true / false\n - `object` - `string` webhook_endpoint\n - `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"GET",header:[],url:"https://near-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"200 - Retrieve Endpoint",status:"OK",code:200,body:{id:17,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T19:09:37.964Z"}}},{name:"List Endpoints",content:"Get the list of all your webhook endpoints.\n\n### Parameters\n\n None\n\n### Response\n\n- `object` - `string` - The action, i.e., `list`.\n- `url` - `string` The endpoint URL.\n- `has_more` - `boolean`\n- `data` - `array` - An array of `object`s containing the details for each webhook:\n  - `id` - `number` Id of the newly created webhook endpoint.\n  - `event_types` - `string` Event type you have passed in the request parameter.\n  - `target_url` - `string` The target URL to send the webhook to.\n  - `enabled` - `boolean` true / false\n  - `object` - `string` - Describing the data object: `webhook_endpoint`.\n  - `created` - `string` Timestamp when the webhook endpoint was created.",request:{method:"GET",header:[],url:"https://near-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints"},interactive:!1,response:{name:"200 - Get List of Existing Endpoints",status:"OK",code:200,body:{object:"list",url:"/api/v1/webhook_endpoints",has_more:!1,data:[{id:18,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T19:10:01.408Z"},{id:17,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T19:09:37.964Z"}]}}},{name:"Update Webhook Endpoint",content:"Update details for an existing webhook endpoint.\n\n### Parameters\n\n- `webhook_endpoint` - `object`\n - `target_url` - `string` The target URL to send the webhook to.\n - `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n - `enabled` - `boolean` true / false\n\n### Response\n\n- `id` - `number` Id of the newly created webhook endpoint.\n- `event_types` - `string` Event type you have passed in the request parameter.\n- `target_url` - `string` The target URL to send the webhook to.\n- `enabled` - `boolean` true / false\n- `object` - `string` webhook_endpoint\n- `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"PUT",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/new/endpoint",event_types:["*"],enabled:"true"}},url:"https://near-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"200 - Update Webhook Endpoint",status:"OK",code:200,body:{id:17,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T19:09:37.964Z"}}},{name:"Delete an Existing Endpoint",content:"Delete a webhook endpoint\n\n### Parameters\n\nInclude the webhook ID number in the request URL, to delete webhook endpoint.\n\n### Response\n\nNone - `204 - No Content`",request:{method:"DELETE",header:[],url:"https://near-slate.datahub.figment.io",body:"",headers:{},query:"api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"204 - No Content",status:"No Content",code:204,body:""}}],service:"staking-api-webhooks",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"near",proxy:"https://api-service-proxy.paulpomerleau.workers.dev",mdxType:"APIMethods"}))}m.isMDXComponent=!0}}]);