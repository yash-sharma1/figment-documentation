(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5313],{72750:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>d});var o=n(87462),a=(n(67294),n(3905)),s=n(65488),r=n(85162),i=n(57643);const l={toc:[]};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("span",{className:"open"},"API Authentication"),(0,a.kt)("span",{className:"closed"},"Click to view API Authentication details")),(0,a.kt)("div",null,"API calls require authentication with API key via ",(0,a.kt)("code",null,"Authorization")," ","request header or ",(0,a.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,a.kt)("strong",null,n.network," ",n.service)," ","endpoint, hosted at ",(0,a.kt)("code",null,n.url),(0,a.kt)("br",null),(0,a.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,a.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${n.url}${n.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,a.kt)(r.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,a.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${n.url}/apikey/{{apikey}}${n.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,a.kt)(r.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,a.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${n.url}${n.route}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'`)),(0,a.kt)(r.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,a.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${n.url}/apikey/{{apikey}}${n.route}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'`)))))}d.isMDXComponent=!0},33976:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(67294),a=n(16550);function s(e){let{network:t,networks:n,methods:s,service:r}=e;const i=(0,a.TH)(),l=(0,a.k6)();return o.createElement("div",null,o.createElement("label",null,"Change Network: "),o.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{l.push(i.pathname.replace(/\/[^\/]+$/,`/${e.target.value}`))}},n.map((e=>o.createElement("option",{key:`${e.value}--n-option`,value:e.value},e.label)))),o.createElement("label",null," Jump to: "),o.createElement("select",{className:"custom-select",defaultValue:i.hash.replace("#","")||"",onChange:e=>{l.push(`#${e.target.value}`)}},s.map((e=>o.createElement("option",{key:`${e.name}--m-hash`,value:e.name.toLowerCase()},e.name)))))}},27297:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(67294);function a(e){let{network:t,service:n}=e;return(0,o.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=t;let o=e.previousElementSibling;o=o.cloneNode(!0),o.querySelector(".breadcrumbs__link span").innerHTML=n.label,o.querySelector(".breadcrumbs__link").href=n.link,e.insertAdjacentElement("beforebegin",o)}),[t]),o.createElement(o.Fragment,null)}},89638:(e,t,n)=>{"use strict";n.d(t,{S:()=>D});var o=n(87462),a=n(67294),s=n(58538),r=n(67748),i=n(30381),l=n.n(i);const d={days:()=>({start:new Date(Date.now()-864e5).toISOString().split("T")[0],end:(new Date).toISOString().split("T")[0]}),polkadot(){const e=l()("2022-10-26","YYYY-MM-DD"),t=l()().diff(e,"days")+1,n=876+Math.ceil(1*t);return{start:n-30,end:n}},solana(){const e=Math.ceil(10.5),t=l()("2022-10-25","YYYY-MM-DD"),n=l()().diff(t,"days")+1,o=363+Math.ceil(.35*n);return{start:o-e,end:o}},near(){const e=4593.6*25,t=Math.ceil(7*e),n=l()("2022-10-25","YYYY-MM-DD"),o=l()().diff(n,"days")+1,a=76953090+Math.ceil(o*e);return{start:a-t-Math.ceil(100*e),end:a+Math.ceil(100*e)}}};var c=n(40460),u=n.n(c),p=n(23746),h=n(66412);const m={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function b(e){let{children:t="",header:n,actions:s,disabled:r=!1,status:i,onValueChange:l}=e;const d=(0,h.p)(),c=(0,a.useRef)(null);(0,a.useEffect)((()=>{const e=c.current?.querySelector("textarea"),t=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return e.addEventListener("input",t),()=>e.removeEventListener("input",t)}),[]);return a.createElement("div",{ref:c},a.createElement(k,{actions:s,status:i},n),a.createElement("div",{className:m.Container},a.createElement(u(),{value:t,onValueChange:l,highlight:function(e){return void 0===e&&(e=""),a.createElement(p.ZP,(0,o.Z)({},p.lG,{theme:d,code:e,language:"json"}),(e=>{let{className:t,style:n,tokens:s,getLineProps:r,getTokenProps:i}=e;return a.createElement("div",{className:m.Code},s.map(((e,t)=>a.createElement("div",(0,o.Z)({key:t},r({line:e,key:t}),{className:m.Line}),a.createElement("span",{className:m.LineContent},e.map(((e,t)=>a.createElement("span",(0,o.Z)({key:t},i({token:e,key:t}))))))))))}))},disabled:r,ignoreTabKey:!0,padding:10,style:{...d.plain,overflow:"auto"},className:m.Editor})))}function k(e){let{children:t,actions:n=[],status:o}=e;return a.createElement("div",{className:m.Header,"data-status":o},a.createElement("span",null,t),a.createElement("span",{className:m.Actions},n.map(((e,t)=>{let{title:n,onClick:o,Component:s=n}=e;return a.createElement("button",{className:m.HeaderButton,key:`${t}:${n}`,title:n,onClick:o},s)}))))}var y=n(10195);const g="overlayHeaderButton_IGf5";const j=function(e,t){const n=(0,a.useRef)(!1),o={error:void 0,data:void 0,loading:!1},[s,r]=(0,a.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...o,loading:!0};case"fetched":return{...o,data:t.payload,loading:!1};case"error":return{...o,error:t.payload,loading:!1};default:return e}}),o);return{...s,fetchData:async function(o,a){void 0===a&&(a={}),r({type:"loading"});try{const s=await fetch(e+(o?`/${o}`:""),{...t,...a});if(!s.ok){let e,t,n;try{n=JSON.parse(await s.text()),e=await s.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(n,null,2)||s.statusText)}const i=await s.json();if(n.current)return;return r({type:"fetched",payload:i}),i}catch(s){if(n.current)return;return r({type:"error",payload:s.message}),null}}}};var f,v=n(57643),w=n(44672);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}const C=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,f||(f=a.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var _;function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},T.apply(this,arguments)}const x=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",T({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,_||(_=a.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function S(e){let{req:t,res:n,interactive:o,endpoint:s}=e;const[r,i]=(0,a.useState)(O(t.body)),[l,d]=(0,a.useState)(t.query),[c,u]=(0,a.useState)(N(n.body)),p="string"==typeof t.body&&0==t.body.indexOf("query"),{data:h,error:m,loading:k,fetchData:f}=j(s,{method:t.method,headers:{...t.headers,"Content-Type":p?"application/graphql":"application/json"},body:O(t.body)}),[E,_]=(0,a.useState)(null);(0,a.useEffect)((()=>{k?_("LOADING"):m||h?.error?_("ERROR"):h&&_("SUCCESS")}),[h,m,k]);const T=[o?{title:"Run request",onClick:async()=>{const e=await f(l,{body:r});e&&u(N(e))},Component:a.createElement(a.Fragment,null,a.createElement(C,null)," Run")}:null,{title:"Copy",onClick:()=>(0,y.Z)(r),Component:a.createElement(w.Z,{code:"",className:g})},o?{title:"Reset",onClick:()=>{_(null),d(t.query),i(O(t.body)),u(N(n.body))},Component:a.createElement(x,null)}:null].filter((e=>!!e));return a.createElement(a.Fragment,null,a.createElement(b,{header:["GET","DELETE"].indexOf(t.method)>-1?"Request Query "+(o?"(try it)":""):"Request Body "+(o?"(try it)":""),actions:T,disabled:!o,onValueChange:e=>{o&&(["GET","DELETE"].indexOf(t.method)>-1?d(e):"POST"===t.method&&i(e))}},["GET","DELETE"].indexOf(t.method)>-1?l:r),a.createElement(v.Z,{title:E?"Response":"Example Response",language:"json"},m?`${m}`:c))}function N(e){return JSON.stringify(e,null,2)}function O(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const P="heading_REER";var L=n(39960),R=n(3905);const Z={toc:[]};function q(e){let{components:t,...n}=e;return(0,R.kt)("wrapper",(0,o.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,R.kt)("details",{open:n.accordionOpen?"open":void 0},(0,R.kt)("summary",null,(0,R.kt)("span",{className:"open"},"Specification"),(0,R.kt)("span",{className:"closed"},"View Specification")),(0,R.kt)(s.D,{mdxType:"ReactMarkdown"},n.details)))}function I(e){let{name:t,content:n="",interactive:o,network:r,request:i,accordionOpen:l=!1,response:c,endpoint:u}=e;const p=u.includes("rewards-api"),h=["by day","account","address"].find((e=>t.includes(e))),m=["by epoch","by era"].find((e=>t.includes(e)))||t.startsWith("SOL");if(p&&m){const{start:e,end:t}=d[r]();i.body={...i.body,start:e,end:t}}else if(p&&h){const{start:e,end:t}=d.days();i.body={...i.body,start:e,end:t}}const[b,...k]=n.trim().split(/\n+/),y=k.join("\n");return a.createElement(a.Fragment,null,a.createElement("h2",{id:t.toLowerCase(),className:P,"data-method":i.method},a.createElement(L.Z,{to:`#${t.toLowerCase()}`},t)),a.createElement(s.D,null,b),a.createElement(S,{req:i,res:c,interactive:o,endpoint:u}),a.createElement(q,{details:y,accordionOpen:l}),a.createElement("hr",null))}function D(e){let{network:t,methods:n,service:s,proxy:i}=e;return a.createElement(a.Fragment,null,a.createElement("h3",null,"Available Methods"),n.map(((e,n)=>a.createElement(I,(0,o.Z)({key:t+n},e,{network:t,endpoint:`${i}/${s}/${t}`,accordionOpen:"node-api"!==s})))),a.createElement(r.Z,null))}q.isMDXComponent=!0},5976:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),s=n(89638),r=n(33976),i=(n(27297),n(72750));const l={title:"Cosmos",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API Webhooks - Cosmos",image:"img/logo.svg",keywords:["Staking API Webhooks","Cosmos"]},d="Staking API Webhooks - Cosmos",c={unversionedId:"api-reference/staking-api-webhooks/cosmos",id:"api-reference/staking-api-webhooks/cosmos",title:"Cosmos",description:"Staking API Webhooks - Cosmos",source:"@site/docs/api-reference/staking-api-webhooks/cosmos.mdx",sourceDirName:"api-reference/staking-api-webhooks",slug:"/api-reference/staking-api-webhooks/cosmos",permalink:"/api-reference/staking-api-webhooks/cosmos",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Cosmos",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API Webhooks - Cosmos",image:"img/logo.svg",keywords:["Staking API Webhooks","Cosmos"]},sidebar:"docsSidebar"},u={},p=[],h={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"staking-api-webhooks---cosmos"},"Staking API Webhooks - Cosmos"),(0,a.kt)(r.Z,{service:"staking-api-webhooks",methods:[{name:"Create New Webhook Endpoint"},{name:"Retrieve Endpoint"},{name:"List Endpoints"},{name:"Update Webhook Endpoint"},{name:"Delete an Existing Endpoint"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Cosmos",value:"cosmos"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Polygon",value:"polygon"},{label:"Solana",value:"solana"}],network:"cosmos",mdxType:"ApiReferenceNav"}),(0,a.kt)(i.ZP,{url:"https://cosmos-slate.datahub.figment.io",network:"Cosmos",service:"Staking API Webhooks",route:"/api/v1/webhook_endpoints",mdxType:"MakingCalls"}),(0,a.kt)(s.S,{methods:[{name:"Create New Webhook Endpoint",content:"Create a new webhook endpoint with the specified parameters.\n\n### Parameters\n\n*   `webhook_endpoint` - `object`\n    *   `target_url` - `string` The target URL to send the webhook to.\n    *   `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n    *   `enabled` - `boolean` true / false\n\n### Response\n\n*   `id` - `number` Id of the newly created webhook endpoint.\n*   `event_types` - `string` Event type you have passed in the request parameter.\n*   `target_url` - `string` The target URL to send the webhook to.\n*   `enabled` - `boolean` true / false\n*   `object` - `string` webhook_endpoint\n*   `created` - `string` Timestamp when webhook endpoint was created.\n*   `secret` - `string` Unique authentication string for your webhook endpoint.\n    \n\n#### Note\n\n*   Each webhook is identified by a sequential number.\n*   Currently when a webhook ID has been deleted it cannot be reused.\n*   You will only be provided with the secret when you first create a webhook. Remember to capture this data!",request:{method:"POST",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/endpoint",event_types:["*"],enabled:"false"}},url:"https://cosmos-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints"},interactive:!1,response:{name:"200 - Create New Webhook Endpoint",status:"Created",code:201,body:{id:13,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z",secret:"whsec_eC2MsygUnHLLDuYXCGcpHjuKzTcJsvAdQmQnx3t3gaLVcdwpv8hFA4WhjHhQz4resJZD7d4GfGx5zZr65ko7xtz5CtfY7K9dDMAq"}}},{name:"Retrieve Endpoint",content:"Retrieve the details of a webhook endpoint.\n\n### Parameters\n\n- For **Individual Webhook Endpoint**\n - Include the webhook ID number in the request URL, to retreive details for an individual webhook endpoint.\n\n- For **All Webhook Endpoints**\n - None\n\n### Response\n\n- `object` - `string` list\n- `url` - `string` Endpoint url\n- `has_more` - `boolean` true / false\n- `data` - `object`\n - `id` - `number` Id of the newly created webhook endpoint.\n - `event_types` - `string` Event type you have passed in the request parameter.\n - `target_url` - `string` The target URL to send the webhook to.\n - `enabled` - `boolean` true / false\n - `object` - `string` webhook_endpoint\n - `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"GET",header:[],url:"https://cosmos-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"200 - Retrieve Endpoint",status:"OK",code:200,body:{id:13,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z"}}},{name:"List Endpoints",content:"Get the list of all your webhook endpoints.\n\n### Parameters\n\n None\n\n### Response\n\n- `object` - `string` - The action, i.e., `list`.\n- `url` - `string` The endpoint URL.\n- `has_more` - `boolean`\n- `data` - `array` - An array of `object`s containing the details for each webhook:\n  - `id` - `number` Id of the newly created webhook endpoint.\n  - `event_types` - `string` Event type you have passed in the request parameter.\n  - `target_url` - `string` The target URL to send the webhook to.\n  - `enabled` - `boolean` true / false\n  - `object` - `string` - Describing the data object: `webhook_endpoint`.\n  - `created` - `string` Timestamp when the webhook endpoint was created.",request:{method:"GET",header:[],url:"https://cosmos-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints"},interactive:!1,response:{name:"200 - Get List of Existing Endpoints",status:"OK",code:200,body:{object:"list",url:"/api/v1/webhook_endpoints",has_more:!1,data:[{id:14,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T18:11:54.469Z"},{id:13,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z"}]}}},{name:"Update Webhook Endpoint",content:"Update details for an existing webhook endpoint.\n\n### Parameters\n\n- `webhook_endpoint` - `object`\n - `target_url` - `string` The target URL to send the webhook to.\n - `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n - `enabled` - `boolean` true / false\n\n### Response\n\n- `id` - `number` Id of the newly created webhook endpoint.\n- `event_types` - `string` Event type you have passed in the request parameter.\n- `target_url` - `string` The target URL to send the webhook to.\n- `enabled` - `boolean` true / false\n- `object` - `string` webhook_endpoint\n- `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"PUT",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/new/endpoint",event_types:["*"],enabled:"true"}},url:"https://cosmos-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"Update Webhook Endpoint",status:"OK",code:200,body:{id:13,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z"}}},{name:"Delete an Existing Endpoint",content:"Delete a webhook endpoint\n\n### Parameters\n\nInclude the webhook ID number in the request URL, to delete webhook endpoint.\n\n### Response\n\nNone - `204 - No Content`",request:{method:"DELETE",header:[],url:"https://cosmos-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"204 - No Content (Webhook successfully removed)",status:"No Content",code:204,body:null}}],service:"staking-api-webhooks",networks:[{label:"Avalanche",value:"avalanche"},{label:"Cosmos",value:"cosmos"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Polygon",value:"polygon"},{label:"Solana",value:"solana"}],network:"cosmos",proxy:"https://api-service-proxy.figment-secops.workers.dev",mdxType:"APIMethods"}))}m.isMDXComponent=!0},46700:(e,t,n)=>{var o={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id=46700}}]);