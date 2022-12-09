(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7218],{2750:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>d});var a=n(7462),o=(n(7294),n(3905)),s=n(5488),r=n(5162),i=n(7643);const l={toc:[{value:"Authentication",id:"authentication",level:3}]};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("div",null,"API calls require authentication with API key via ",(0,o.kt)("code",null,"Authorization")," ","request header or ",(0,o.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,o.kt)("strong",null,n.network," ",n.service)," ","endpoint, hosted at ",(0,o.kt)("code",null,n.url),(0,o.kt)("br",null),(0,o.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${n.url}${n.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,o.kt)(r.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${n.url}/apikey/{{apikey}}${n.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,o.kt)(r.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${n.url}${n.route}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'`)),(0,o.kt)(r.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${n.url}/apikey/{{apikey}}${n.route}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'`))))}d.isMDXComponent=!0},3976:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(7294),o=n(6550);function s(e){let{network:t,networks:n,methods:s,service:r}=e;const i=(0,o.TH)(),l=(0,o.k6)();return a.createElement("div",null,a.createElement("label",null,"Change Network: "),a.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{l.push(i.pathname.replace(/\/[^\/]+$/,`/${e.target.value}`))}},n.map((e=>a.createElement("option",{key:`${e.value}--n-option`,value:e.value},e.label)))),a.createElement("label",null," Jump to: "),a.createElement("select",{className:"custom-select",defaultValue:i.hash.replace("#","")||"",onChange:e=>{l.push(`#${e.target.value}`)}},s.map((e=>a.createElement("option",{key:`${e.name}--m-hash`,value:e.name.toLowerCase()},e.name)))))}},7297:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294);function o(e){let{network:t,service:n}=e;return(0,a.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=t;let a=e.previousElementSibling;a=a.cloneNode(!0),a.querySelector(".breadcrumbs__link span").innerHTML=n.label,a.querySelector(".breadcrumbs__link").href=n.link,e.insertAdjacentElement("beforebegin",a)}),[t]),a.createElement(a.Fragment,null)}},9638:(e,t,n)=>{"use strict";n.d(t,{S:()=>I});var a=n(7462),o=n(7294),s=n(8538),r=n(7748),i=n(381),l=n.n(i);const d={days:()=>({start:new Date(Date.now()-864e5).toISOString().split("T")[0],end:(new Date).toISOString().split("T")[0]}),polkadot(){const e=l()("2022-10-26","YYYY-MM-DD"),t=l()().diff(e,"days")+1,n=876+Math.ceil(1*t);return{start:n-30,end:n}},solana(){const e=Math.ceil(10.5),t=l()("2022-10-25","YYYY-MM-DD"),n=l()().diff(t,"days")+1,a=363+Math.ceil(.35*n);return{start:a-e,end:a}},near(){const e=114300,t=Math.ceil(800100),n=l()("2022-10-25","YYYY-MM-DD"),a=l()().diff(n,"days")+1,o=76953090+Math.ceil(a*e);return{start:o-t,end:o}}};var c=n(460),h=n.n(c),u=n(3746),p=n(6412);const m={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function b(e){let{children:t="",header:n,actions:s,disabled:r=!1,status:i,onValueChange:l}=e;const d=(0,p.p)(),c=(0,o.useRef)(null);(0,o.useEffect)((()=>{const e=c.current?.querySelector("textarea"),t=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return e.addEventListener("input",t),()=>e.removeEventListener("input",t)}),[]);return o.createElement("div",{ref:c},o.createElement(k,{actions:s,status:i},n),o.createElement("div",{className:m.Container},o.createElement(h(),{value:t,onValueChange:l,highlight:function(e){return void 0===e&&(e=""),o.createElement(u.ZP,(0,a.Z)({},u.lG,{theme:d,code:e,language:"json"}),(e=>{let{className:t,style:n,tokens:s,getLineProps:r,getTokenProps:i}=e;return o.createElement("div",{className:m.Code},s.map(((e,t)=>o.createElement("div",(0,a.Z)({key:t},r({line:e,key:t}),{className:m.Line}),o.createElement("span",{className:m.LineContent},e.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},i({token:e,key:t}))))))))))}))},disabled:r,ignoreTabKey:!0,padding:10,style:{...d.plain,overflow:"auto"},className:m.Editor})))}function k(e){let{children:t,actions:n=[],status:a}=e;return o.createElement("div",{className:m.Header,"data-status":a},o.createElement("span",null,t),o.createElement("span",{className:m.Actions},n.map(((e,t)=>{let{title:n,onClick:a,Component:s=n}=e;return o.createElement("button",{className:m.HeaderButton,key:`${t}:${n}`,title:n,onClick:a},s)}))))}var y=n(195);const g="overlayHeaderButton_IGf5";const j=function(e,t){const n=(0,o.useRef)(!1),a={error:void 0,data:void 0,loading:!1},[s,r]=(0,o.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...a,loading:!0};case"fetched":return{...a,data:t.payload,loading:!1};case"error":return{...a,error:t.payload,loading:!1};default:return e}}),a);return{...s,fetchData:async function(a,o){void 0===o&&(o={}),r({type:"loading"});try{const s=await fetch(e+(a?`/${a}`:""),{...t,...o});if(!s.ok){let e,t,n;try{n=JSON.parse(await s.text()),e=await s.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(n,null,2)||s.statusText)}const i=await s.json();if(n.current)return;return r({type:"fetched",payload:i}),i}catch(s){if(n.current)return;return r({type:"error",payload:s.message}),null}}}};var v,w=n(7643),f=n(4672);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}const _=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,v||(v=o.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var T;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},C.apply(this,arguments)}const S=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",C({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,T||(T=o.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function x(e){let{req:t,res:n,interactive:a,endpoint:s}=e;const[r,i]=(0,o.useState)(N(t.body)),[l,d]=(0,o.useState)(t.query),[c,h]=(0,o.useState)(A(n.body)),u="string"==typeof t.body&&0==t.body.indexOf("query"),{data:p,error:m,loading:k,fetchData:v}=j(s,{method:t.method,headers:{...t.headers,"Content-Type":u?"application/graphql":"application/json"},body:N(t.body)}),[E,T]=(0,o.useState)(null);(0,o.useEffect)((()=>{k?T("LOADING"):m||p?.error?T("ERROR"):p&&T("SUCCESS")}),[p,m,k]);const C=[a?{title:"Run request",onClick:async()=>{const e=await v(l,{body:r});e&&h(A(e))},Component:o.createElement(o.Fragment,null,o.createElement(_,null)," Run")}:null,{title:"Copy",onClick:()=>(0,y.Z)(r),Component:o.createElement(f.Z,{code:"",className:g})},a?{title:"Reset",onClick:()=>{T(null),d(t.query),i(N(t.body)),h(A(n.body))},Component:o.createElement(S,null)}:null].filter((e=>!!e));return o.createElement(o.Fragment,null,o.createElement(b,{header:"GET"===t.method?"Request Query "+(a?"(try it)":""):"Request Body "+(a?"(try it)":""),actions:C,disabled:!a,onValueChange:e=>{a&&("GET"===t.method?d(e):"POST"===t.method&&i(e))}},"GET"===t.method?l:r),o.createElement(w.Z,{title:E?"Response":"Example Response",language:"json"},m?`${m}`:c))}function A(e){return JSON.stringify(e,null,2)}function N(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const O="heading_REER";var P=n(9960),R=n(3905);const Z={toc:[]};function q(e){let{components:t,...n}=e;return(0,R.kt)("wrapper",(0,a.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,R.kt)("details",{open:n.accordionOpen?"open":void 0},(0,R.kt)("summary",null,(0,R.kt)("span",{className:"open"},"Specification"),(0,R.kt)("span",{className:"closed"},"View Specification")),(0,R.kt)(s.D,{mdxType:"ReactMarkdown"},n.details)))}function L(e){let{name:t,content:n="",interactive:a,network:r,request:i,accordionOpen:l=!1,response:c,endpoint:h}=e;const u=h.includes("rewards-api"),p=["by day","account","address"].find((e=>t.includes(e))),m=["by epoch","by era"].find((e=>t.includes(e)))||t.startsWith("SOL");if(u&&m){const{start:e,end:t}=d[r]();i.body={...i.body,start:e,end:t}}else if(u&&p){const{start:e,end:t}=d.days();i.body={...i.body,start:e,end:t}}const[b,...k]=n.trim().split(/\n+/),y=k.join("\n");return o.createElement(o.Fragment,null,o.createElement("h2",{id:t.toLowerCase(),className:O,"data-method":i.method},o.createElement(P.Z,{to:`#${t.toLowerCase()}`},t)),o.createElement(s.D,null,b),o.createElement(x,{req:i,res:c,interactive:a,endpoint:h}),o.createElement(q,{details:y,accordionOpen:l}),o.createElement("hr",null))}function I(e){let{network:t,methods:n,service:s,proxy:i}=e;return o.createElement(o.Fragment,null,o.createElement("h3",null,"Available Methods"),n.map(((e,n)=>o.createElement(L,(0,a.Z)({key:t+n},e,{network:t,endpoint:`${i}/${s}/${t}`,accordionOpen:"node-api"!==s})))),o.createElement(r.Z,null))}q.isMDXComponent=!0},465:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),s=n(9638),r=n(3976),i=n(7297),l=n(2750);const d={title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API Webhooks - Avalanche",image:"img/logo.svg",keywords:["Staking API Webhooks","Avalanche"]},c="Staking API Webhooks - Avalanche",h={unversionedId:"api-reference/staking-api-webhooks/avalanche",id:"api-reference/staking-api-webhooks/avalanche",title:"Avalanche",description:"Staking API Webhooks - Avalanche",source:"@site/docs/api-reference/staking-api-webhooks/avalanche.mdx",sourceDirName:"api-reference/staking-api-webhooks",slug:"/api-reference/staking-api-webhooks/avalanche",permalink:"/api-reference/staking-api-webhooks/avalanche",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API Webhooks - Avalanche",image:"img/logo.svg",keywords:["Staking API Webhooks","Avalanche"]},sidebar:"docsSidebar"},u={},p=[],m={toc:p};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking-api-webhooks---avalanche"},"Staking API Webhooks - Avalanche"),(0,o.kt)(i.Z,{network:"Avalanche",service:{link:"/api-reference/staking-api-webhooks",label:"Staking API Webhooks"},mdxType:"FixBreadCrumbs"}),(0,o.kt)(r.Z,{service:"staking-api-webhooks",methods:[{name:"Create New Webhook Endpoint"},{name:"Retrieve Endpoint"},{name:"List Endpoints"},{name:"Update Webhook Endpoint"},{name:"Delete an Existing Endpoint"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"avalanche",mdxType:"ApiReferenceNav"}),(0,o.kt)(l.ZP,{url:"https://avalanche-slate.datahub.figment.io",network:"Avalanche",service:"Staking API Webhooks",route:"/api/v1/webhook_endpoints",mdxType:"MakingCalls"}),(0,o.kt)(s.S,{methods:[{name:"Create New Webhook Endpoint",content:"Create a new webhook endpoint with the specified parameters.\n\n### Parameters\n\n*   `webhook_endpoint` - `object`\n    *   `target_url` - `string` The target URL to send the webhook to.\n    *   `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n    *   `enabled` - `boolean` true / false\n\n### Response\n\n*   `id` - `number` Id of the newly created webhook endpoint.\n*   `event_types` - `string` Event type you have passed in the request parameter.\n*   `target_url` - `string` The target URL to send the webhook to.\n*   `enabled` - `boolean` true / false\n*   `object` - `string` webhook_endpoint\n*   `created` - `string` Timestamp when webhook endpoint was created.\n*   `secret` - `string` Unique authentication string for your webhook endpoint.\n    \n\n#### Note\n\n*   Each webhook is identified by a sequential number.\n*   Currently when a webhook ID has been deleted it cannot be reused.\n*   You will only be provided with the secret when you first create a webhook. Remember to capture this data!",request:{method:"POST",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/endpoint",event_types:["*"],enabled:"false"}},url:"https://avalanche-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints"},interactive:!1,response:{name:"200 - Create New Webhook Endpoint",status:"Created",code:201,body:{id:13,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z",secret:"whsec_eC2MsygUnHLLDuYXCGcpHjuKzTcJsvAdQmQnx3t3gaLVcdwpv8hFA4WhjHhQz4resJZD7d4GfGx5zZr65ko7xtz5CtfY7K9dDMAq"}}},{name:"Retrieve Endpoint",content:"Retrieve the details of a webhook endpoint.\n\n### Parameters\n\n- For **Individual Webhook Endpoint**\n - Include the webhook ID number in the request URL, to retreive details for an individual webhook endpoint.\n\n- For **All Webhook Endpoints**\n - None\n\n### Response\n\n- `object` - `string` list\n- `url` - `string` Endpoint url\n- `has_more` - `boolean` true / false\n- `data` - `object`\n - `id` - `number` Id of the newly created webhook endpoint.\n - `event_types` - `string` Event type you have passed in the request parameter.\n - `target_url` - `string` The target URL to send the webhook to.\n - `enabled` - `boolean` true / false\n - `object` - `string` webhook_endpoint\n - `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"GET",header:[],url:"https://avalanche-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"200 - Retrieve Endpoint",status:"OK",code:200,body:{id:13,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z"}}},{name:"List Endpoints",content:"Get the list of all your webhook endpoints.\n\n### Parameters\n\n None\n\n### Response\n\n- `object` - `string` - The action, i.e., `list`.\n- `url` - `string` The endpoint URL.\n- `has_more` - `boolean`\n- `data` - `array` - An array of `object`s containing the details for each webhook:\n  - `id` - `number` Id of the newly created webhook endpoint.\n  - `event_types` - `string` Event type you have passed in the request parameter.\n  - `target_url` - `string` The target URL to send the webhook to.\n  - `enabled` - `boolean` true / false\n  - `object` - `string` - Describing the data object: `webhook_endpoint`.\n  - `created` - `string` Timestamp when the webhook endpoint was created.",request:{method:"GET",header:[],url:"https://avalanche-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints"},interactive:!1,response:{name:"200 - Get List of Existing Endpoints",status:"OK",code:200,body:{object:"list",url:"/api/v1/webhook_endpoints",has_more:!1,data:[{id:14,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T18:11:54.469Z"},{id:13,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z"}]}}},{name:"Update Webhook Endpoint",content:"Update details for an existing webhook endpoint.\n\n### Parameters\n\n- `webhook_endpoint` - `object`\n - `target_url` - `string` The target URL to send the webhook to.\n - `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n - `enabled` - `boolean` true / false\n\n### Response\n\n- `id` - `number` Id of the newly created webhook endpoint.\n- `event_types` - `string` Event type you have passed in the request parameter.\n- `target_url` - `string` The target URL to send the webhook to.\n- `enabled` - `boolean` true / false\n- `object` - `string` webhook_endpoint\n- `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"PUT",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/new/endpoint",event_types:["*"],enabled:"true"}},url:"https://avalanche-slate.datahub.figment.io",headers:{},query:"api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"Update Webhook Endpoint",status:"OK",code:200,body:{id:13,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T18:11:15.829Z"}}},{name:"Delete an Existing Endpoint",content:"Delete a webhook endpoint\n\n### Parameters\n\nInclude the webhook ID number in the request URL, to delete webhook endpoint.\n\n### Response\n\nNone - `204 - No Content`",request:{method:"DELETE",header:[],url:"https://avalanche-slate.datahub.figment.io",body:"",headers:{},query:"api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"204 - No Content (Webhook successfully removed)",status:"No Content",code:204,body:""}}],service:"staking-api-webhooks",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"avalanche",proxy:"https://api-service-proxy.figment-secops.workers.dev",mdxType:"APIMethods"}))}b.isMDXComponent=!0},6700:(e,t,n)=>{var a={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id=6700}}]);