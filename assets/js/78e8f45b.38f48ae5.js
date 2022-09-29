"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7218],{2750:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),i=n(5162),l=n(7643);const s={toc:[{value:"Authentication",id:"authentication",level:3}]};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("div",null,"API calls require authentication with API key via ",(0,o.kt)("code",null,"Authorization")," ","request header or ",(0,o.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,o.kt)("strong",null,n.network," ",n.service)," ","endpoint, hosted at"," ",(0,o.kt)("code",null,n.url.replace(/(\/apikey\/[^\/]+\/){1}/,"")),(0,o.kt)("br",null),(0,o.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,o.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+n.url.replace(/(apikey\/[^\/]+\/){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,o.kt)(i.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,o.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+n.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,o.kt)(i.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,o.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+n.url.replace(/(apikey\/[^\/]+\/){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,o.kt)(i.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,o.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+n.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}d.isMDXComponent=!0},3976:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6775);function r(e){let{network:t,networks:n,methods:r,service:i}=e;const l=(0,o.TH)(),s=(0,o.k6)();return a.createElement("div",null,a.createElement("label",null,"Change Network: "),a.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{s.push(l.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},n.map((e=>a.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),a.createElement("label",null," Jump to: "),a.createElement("select",{className:"custom-select",defaultValue:l.hash.replace("#","")||"",onChange:e=>{s.push("#"+e.target.value)}},r.map((e=>a.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},4777:(e,t,n)=>{n.d(t,{S:()=>Z});var a=n(7462),o=n(7294),r=n(7748),i=n(460),l=n.n(i),s=n(3746),d=n(6412);const c={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function p(e){let{children:t="",header:n,actions:r,disabled:i=!1,status:p,onValueChange:u}=e;const b=(0,d.p)(),m=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;const t=null==(e=m.current)?void 0:e.querySelector("textarea"),n=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",n),()=>t.removeEventListener("input",n)}),[]);return o.createElement("div",{ref:m},o.createElement(h,{actions:r,status:p},n),o.createElement("div",{className:c.Container},o.createElement(l(),{value:t,onValueChange:u,highlight:function(e){return void 0===e&&(e=""),o.createElement(s.ZP,(0,a.Z)({},s.lG,{theme:b,code:e,language:"json"}),(e=>{let{className:t,style:n,tokens:r,getLineProps:i,getTokenProps:l}=e;return o.createElement("div",{className:c.Code},r.map(((e,t)=>o.createElement("div",(0,a.Z)({key:t},i({line:e,key:t}),{className:c.Line}),o.createElement("span",{className:c.LineContent},e.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},l({token:e,key:t}))))))))))}))},disabled:i,ignoreTabKey:!0,padding:10,style:{...b.plain,overflow:"auto"},className:c.Editor})))}function h(e){let{children:t,actions:n=[],status:a}=e;return o.createElement("div",{className:c.Header,"data-status":a},o.createElement("span",null,t),o.createElement("span",{className:c.Actions},n.map(((e,t)=>{let{title:n,onClick:a,Component:r=n}=e;return o.createElement("button",{className:c.HeaderButton,key:t+":"+n,title:n,onClick:a},r)}))))}var u=n(195);const b="overlayHeaderButton_IGf5";const m=function(e,t){const n=(0,o.useRef)(!1),a={error:void 0,data:void 0,loading:!1},[r,i]=(0,o.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...a,loading:!0};case"fetched":return{...a,data:t.payload,loading:!1};case"error":return{...a,error:t.payload,loading:!1};default:return e}}),a);return{...r,fetchData:async function(a,o){void 0===o&&(o={}),i({type:"loading"});try{const r=await fetch(e+(a||""),{...t,...o});if(!r.ok){let e,t,n;try{n=JSON.parse(await r.text()),e=await r.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(n,null,2)||r.statusText)}const l=await r.json();if(n.current)return;return i({type:"fetched",payload:l}),l}catch(r){if(n.current)return;return i({type:"error",payload:r.message}),null}}}};var k,y=n(7643),g=n(4672);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}const w=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,k||(k=o.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var f;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}const _=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,f||(f=o.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function T(e){let{req:t,res:n,interactive:a}=e;const[r,i]=(0,o.useState)(S(t.body)),[l,s]=(0,o.useState)(t.query),[d,c]=(0,o.useState)(C(n.body)),h="string"==typeof t.body&&0==t.body.indexOf("query"),{data:k,error:v,loading:f,fetchData:E}=m(t.url,{method:t.method,headers:{"Content-Type":h?"application/graphql":"application/json"},body:S(t.body)}),[T,A]=(0,o.useState)(null);(0,o.useEffect)((()=>{f?A("LOADING"):v||null!=k&&k.error?A("ERROR"):k&&A("SUCCESS")}),[k,v,f]);const x=[a?{title:"Run request",onClick:async()=>{const e=await E(l,{body:r});e&&c(C(e))},Component:o.createElement(o.Fragment,null,o.createElement(w,null)," Run")}:null,{title:"Copy",onClick:()=>(0,u.Z)(r),Component:o.createElement(g.Z,{code:"",className:b})},a?{title:"Reset",onClick:()=>{A(null),s(t.query),i(S(t.body)),c(C(n.body))},Component:o.createElement(_,null)}:null].filter((e=>!!e));return o.createElement(o.Fragment,null,o.createElement(p,{header:"GET"===t.method?"Request Query "+(a?"(try it)":""):"Request Body "+(a?"(try it)":""),actions:x,disabled:!a,onValueChange:e=>{a&&("GET"===t.method?s(e):"POST"===t.method&&i(e))}},"GET"===t.method?l:r),o.createElement(y.Z,{title:T?"Response":"Example Response",language:"json"},v?""+v:d))}function C(e){return JSON.stringify(e,null,2)}function S(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}var A=n(1099),x=n(3905);const R={toc:[]};function N(e){let{components:t,...n}=e;return(0,x.kt)("wrapper",(0,a.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,x.kt)("details",null,(0,x.kt)("summary",null,n.title),(0,x.kt)(A.D,{mdxType:"ReactMarkdown"},n.details)))}function P(e){let{content:t=""}=e;const[n,...a]=t.trim().split(/\n+/),r=a.join("\n");return o.createElement("div",null,o.createElement(A.D,null,n),o.createElement(N,{title:"View specification",details:r}))}N.isMDXComponent=!0;const j="heading_REER";var I=n(9960);function O(e){let{name:t,content:n="",interactive:a,request:r,response:i}=e;return["Rewards (by epoch)","Rewards (daily)"].includes(t)&&(r.body={...r.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===t?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]}),o.createElement(o.Fragment,null,o.createElement("h2",{id:t.toLowerCase(),className:j,"data-method":r.method},o.createElement(I.Z,{to:"#"+t.toLowerCase()},t)),o.createElement(P,{content:n}),o.createElement(T,{req:r,res:i,interactive:a}),o.createElement("hr",null))}function Z(e){let{network:t,methods:n}=e;return o.createElement(o.Fragment,null,o.createElement("h3",null,"Available Methods"),n.map(((e,n)=>o.createElement(O,(0,a.Z)({key:t+n},e)))),o.createElement(r.Z,null))}},465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=n(7462),o=(n(7294),n(3905)),r=n(4777),i=n(3976),l=n(2750);const s={title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API Webhooks - Avalanche",image:"img/logo.svg",keywords:["Staking API Webhooks","Avalanche"]},d="Staking API Webhooks - Avalanche",c={unversionedId:"api-reference/staking-api-webhooks/avalanche",id:"api-reference/staking-api-webhooks/avalanche",title:"Avalanche",description:"Staking API Webhooks - Avalanche",source:"@site/docs/api-reference/staking-api-webhooks/avalanche.mdx",sourceDirName:"api-reference/staking-api-webhooks",slug:"/api-reference/staking-api-webhooks/avalanche",permalink:"/api-reference/staking-api-webhooks/avalanche",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API Webhooks - Avalanche",image:"img/logo.svg",keywords:["Staking API Webhooks","Avalanche"]},sidebar:"docsSidebar"},p={},h=[],u={toc:h};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking-api-webhooks---avalanche"},"Staking API Webhooks - Avalanche"),(0,o.kt)(i.Z,{service:"staking-api-webhooks",methods:[{name:"Create New Webhook Endpoint"},{name:"Retrieve Endpoint"},{name:"List Endpoints"},{name:"Update Webhook Endpoint"},{name:"Delete an Existing Endpoint"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Solana",value:"solana"},{label:"Polkadot",value:"polkadot"}],network:"avalanche",mdxType:"ApiReferenceNav"}),(0,o.kt)(l.ZP,{url:"https://avalanche-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/webhook_endpoints",network:"Avalanche",service:"Staking API Webhooks",mdxType:"MakingCalls"}),(0,o.kt)(r.S,{methods:[{name:"Create New Webhook Endpoint",content:"Create a new webhook endpoint with the specified parameters.\n\n### Parameters\n\n*   `webhook_endpoint` - `object`\n    *   `target_url` - `string` The target URL to send the webhook to.\n    *   `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n    *   `enabled` - `boolean` true / false\n\n### Response\n\n*   `id` - `number` Id of the newly created webhook endpoint.\n*   `event_types` - `string` Event type you have passed in the request parameter.\n*   `target_url` - `string` The target URL to send the webhook to.\n*   `enabled` - `boolean` true / false\n*   `object` - `string` webhook_endpoint\n*   `created` - `string` Timestamp when webhook endpoint was created.\n*   `secret` - `string` Unique authentication string for your webhook endpoint.\n    \n\n#### Note\n\n*   Each webhook is identified by a sequential number.\n*   Currently when a webhook ID has been deleted it cannot be reused.\n*   You will only be provided with the secret when you first create a webhook. Remember to capture this data!",request:{method:"POST",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/endpoint",event_types:["*"],enabled:"false"}},url:"https://avalanche-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/webhook_endpoints"},interactive:!1,response:{name:"200 - Create New Webhook Endpoint",status:"Created",code:201,body:{id:13,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z",secret:"whsec_eC2MsygUnHLLDuYXCGcpHjuKzTcJsvAdQmQnx3t3gaLVcdwpv8hFA4WhjHhQz4resJZD7d4GfGx5zZr65ko7xtz5CtfY7K9dDMAq"}}},{name:"Retrieve Endpoint",content:"Retrieve the details of a webhook endpoint.\n\n### Parameters\n\n- For **Individual Webhook Endpoint**\n - Include the webhook ID number in the request URL, to retreive details for an individual webhook endpoint.\n\n- For **All Webhook Endpoints**\n - None\n\n### Response\n\n- `object` - `string` list\n- `url` - `string` Endpoint url\n- `has_more` - `boolean` true / false\n- `data` - `object`\n - `id` - `number` Id of the newly created webhook endpoint.\n - `event_types` - `string` Event type you have passed in the request parameter.\n - `target_url` - `string` The target URL to send the webhook to.\n - `enabled` - `boolean` true / false\n - `object` - `string` webhook_endpoint\n - `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"GET",header:[],url:"https://avalanche-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"200 - Retrieve Endpoint",status:"OK",code:200,body:{id:13,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z"}}},{name:"List Endpoints",content:"Get the list of all your webhook endpoints.\n\n### Parameters\n\n None\n\n### Response\n\n- `object` - `string` - The action, i.e., `list`.\n- `url` - `string` The endpoint URL.\n- `has_more` - `boolean`\n- `data` - `array` - An array of `object`s containing the details for each webhook:\n  - `id` - `number` Id of the newly created webhook endpoint.\n  - `event_types` - `string` Event type you have passed in the request parameter.\n  - `target_url` - `string` The target URL to send the webhook to.\n  - `enabled` - `boolean` true / false\n  - `object` - `string` - Describing the data object: `webhook_endpoint`.\n  - `created` - `string` Timestamp when the webhook endpoint was created.",request:{method:"GET",header:[],url:"https://avalanche-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/api/v1/webhook_endpoints"},interactive:!1,response:{name:"200 - Get List of Existing Endpoints",status:"OK",code:200,body:{object:"list",url:"/api/v1/webhook_endpoints",has_more:!1,data:[{id:14,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T18:11:54.469Z"},{id:13,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z"}]}}},{name:"Update Webhook Endpoint",content:"Update details for an existing webhook endpoint.\n\n### Parameters\n\n- `webhook_endpoint` - `object`\n - `target_url` - `string` The target URL to send the webhook to.\n - `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n - `enabled` - `boolean` true / false\n\n### Response\n\n- `id` - `number` Id of the newly created webhook endpoint.\n- `event_types` - `string` Event type you have passed in the request parameter.\n- `target_url` - `string` The target URL to send the webhook to.\n- `enabled` - `boolean` true / false\n- `object` - `string` webhook_endpoint\n- `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"PUT",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/new/endpoint",event_types:["*"],enabled:"true"}},url:"https://{{AVAX_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"Update Webhook Endpoint",status:"OK",code:200,body:{id:13,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z"}}},{name:"Delete an Existing Endpoint",content:"Delete a webhook endpoint\n\n### Parameters\n\nInclude the webhook ID number in the request URL, to delete webhook endpoint.\n\n### Response\n\nNone - `204 - No Content`",request:{method:"DELETE",header:[],url:"https://{{AVAX_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"204 - No Content (Webhook successfully removed)",status:"No Content",code:204,body:""}}],service:"staking-api-webhooks",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Solana",value:"solana"},{label:"Polkadot",value:"polkadot"}],network:"avalanche",mdxType:"APIMethods"}))}b.isMDXComponent=!0}}]);