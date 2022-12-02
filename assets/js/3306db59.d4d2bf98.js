"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8573],{2750:(e,t,a)=>{a.d(t,{ZP:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),i=a(5162),s=a(7643);const l={toc:[{value:"Authentication",id:"authentication",level:3}]};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,a.network," ",a.service)," ","endpoint, hosted at ",(0,r.kt)("code",null,a.url),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${a.url}${a.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(i.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${a.url}/apikey/{{apikey}}${a.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(i.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${a.url}${a.route}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'`)),(0,r.kt)(i.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${a.url}/apikey/{{apikey}}${a.route}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'`))))}c.isMDXComponent=!0},3976:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6550);function o(e){let{network:t,networks:a,methods:o,service:i}=e;const s=(0,r.TH)(),l=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{l.push(s.pathname.replace(/\/[^\/]+$/,`/${e.target.value}`))}},a.map((e=>n.createElement("option",{key:`${e.value}--n-option`,value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:s.hash.replace("#","")||"",onChange:e=>{l.push(`#${e.target.value}`)}},o.map((e=>n.createElement("option",{key:`${e.name}--m-hash`,value:e.name.toLowerCase()},e.name)))))}},7297:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{network:t,service:a}=e;return(0,n.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=t;let n=e.previousElementSibling;n=n.cloneNode(!0),n.querySelector(".breadcrumbs__link span").innerHTML=a.label,n.querySelector(".breadcrumbs__link").href=a.link,e.insertAdjacentElement("beforebegin",n)}),[t]),n.createElement(n.Fragment,null)}},3213:(e,t,a)=>{a.d(t,{S:()=>G});var n=a(7462),r=a(7294),o=a(8538),i=a(7748),s=a(460),l=a.n(s),c=a(3746),d=a(6412);const u={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function p(e){let{children:t="",header:a,actions:o,disabled:i=!1,status:s,onValueChange:p}=e;const m=(0,d.p)(),v=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;const t=null==(e=v.current)?void 0:e.querySelector("textarea"),a=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",a),()=>t.removeEventListener("input",a)}),[]);return r.createElement("div",{ref:v},r.createElement(h,{actions:o,status:s},a),r.createElement("div",{className:u.Container},r.createElement(l(),{value:t,onValueChange:p,highlight:function(e){return void 0===e&&(e=""),r.createElement(c.ZP,(0,n.Z)({},c.lG,{theme:m,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:o,getLineProps:i,getTokenProps:s}=e;return r.createElement("div",{className:u.Code},o.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},i({line:e,key:t}),{className:u.Line}),r.createElement("span",{className:u.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},s({token:e,key:t}))))))))))}))},disabled:i,ignoreTabKey:!0,padding:10,style:{...m.plain,overflow:"auto"},className:u.Editor})))}function h(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:u.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:u.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:o=a}=e;return r.createElement("button",{className:u.HeaderButton,key:`${t}:${a}`,title:a,onClick:n},o)}))))}var m=a(195);const v="overlayHeaderButton_IGf5";const y=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[o,i]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...o,fetchData:async function(n,r){void 0===r&&(r={}),i({type:"loading"});try{const o=await fetch(e+(n?`/${n}`:""),{...t,...r});if(!o.ok){let e,t,a;try{a=JSON.parse(await o.text()),e=await o.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||o.statusText)}const s=await o.json();if(a.current)return;return i({type:"fetched",payload:s}),s}catch(o){if(a.current)return;return i({type:"error",payload:o.message}),null}}}};var g,f=a(7643),b=a(4672);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const k=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,g||(g=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var w;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},x.apply(this,arguments)}const S=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",x({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,w||(w=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function T(e){let{req:t,res:a,interactive:n,endpoint:o}=e;const[i,s]=(0,r.useState)(Z(t.body)),[l,c]=(0,r.useState)(t.query),[d,u]=(0,r.useState)(C(a.body)),h="string"==typeof t.body&&0==t.body.indexOf("query"),{data:g,error:E,loading:w,fetchData:x}=y(o,{method:t.method,headers:{...t.headers,"Content-Type":h?"application/graphql":"application/json"},body:Z(t.body)}),[T,_]=(0,r.useState)(null);(0,r.useEffect)((()=>{w?_("LOADING"):E||null!=g&&g.error?_("ERROR"):g&&_("SUCCESS")}),[g,E,w]);const A=[n?{title:"Run request",onClick:async()=>{const e=await x(l,{body:i});e&&u(C(e))},Component:r.createElement(r.Fragment,null,r.createElement(k,null)," Run")}:null,{title:"Copy",onClick:()=>(0,m.Z)(i),Component:r.createElement(b.Z,{code:"",className:v})},n?{title:"Reset",onClick:()=>{_(null),c(t.query),s(Z(t.body)),u(C(a.body))},Component:r.createElement(S,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(p,{header:"GET"===t.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:A,disabled:!n,onValueChange:e=>{n&&("GET"===t.method?c(e):"POST"===t.method&&s(e))}},"GET"===t.method?l:i),r.createElement(f.Z,{title:T?"Response":"Example Response",language:"json"},E?`${E}`:d))}function C(e){return JSON.stringify(e,null,2)}function Z(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const _="heading_REER";var A=a(9960),R=a(3905);const q={toc:[]};function N(e){let{components:t,...a}=e;return(0,R.kt)("wrapper",(0,n.Z)({},q,a,{components:t,mdxType:"MDXLayout"}),(0,R.kt)("details",{open:a.accordionOpen?"open":void 0},(0,R.kt)("summary",null,(0,R.kt)("span",{className:"open"},"Specification"),(0,R.kt)("span",{className:"closed"},"View Specification")),(0,R.kt)(o.D,{mdxType:"ReactMarkdown"},a.details)))}function P(e){let{name:t,content:a="",interactive:n,request:i,accordionOpen:s=!1,response:l,endpoint:c}=e;["Rewards (by epoch)","Rewards (daily)"].includes(t)&&(i.body={...i.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===t?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]});const[d,...u]=a.trim().split(/\n+/),p=u.join("\n");return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:_,"data-method":i.method},r.createElement(A.Z,{to:`#${t.toLowerCase()}`},t)),r.createElement(o.D,null,d),r.createElement(T,{req:i,res:l,interactive:n,endpoint:c}),r.createElement(N,{details:p,accordionOpen:s}),r.createElement("hr",null))}function G(e){let{network:t,methods:a,service:o,proxy:s}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(P,(0,n.Z)({key:t+a},e,{endpoint:`${s}/${o}/${t}`,accordionOpen:"node-api"!==o})))),r.createElement(i.Z,null))}N.isMDXComponent=!0},4363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),o=a(3213),i=a(3976),s=a(7297),l=a(2750);const c={title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Transaction Search API - Avalanche",image:"img/logo.svg",keywords:["Transaction Search API","Avalanche"]},d="Transaction Search API - Avalanche",u={unversionedId:"api-reference/transaction-search-api/avalanche",id:"api-reference/transaction-search-api/avalanche",title:"Avalanche",description:"Transaction Search API - Avalanche",source:"@site/docs/api-reference/transaction-search-api/avalanche.mdx",sourceDirName:"api-reference/transaction-search-api",slug:"/api-reference/transaction-search-api/avalanche",permalink:"/api-reference/transaction-search-api/avalanche",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Transaction Search API - Avalanche",image:"img/logo.svg",keywords:["Transaction Search API","Avalanche"]},sidebar:"docsSidebar"},p={},h=[],m={toc:h};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-search-api---avalanche"},"Transaction Search API - Avalanche"),(0,r.kt)(s.Z,{network:"Avalanche",service:{link:"/api-reference/transaction-search-api",label:"Transaction Search API"},mdxType:"FixBreadCrumbs"}),(0,r.kt)(i.Z,{service:"transaction-search-api",methods:[{name:"/transactions"},{name:"/transactions/{hash}"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"NEAR Protocol",value:"near-protocol"}],network:"avalanche",mdxType:"ApiReferenceNav"}),(0,r.kt)(l.ZP,{url:"https://avalanche--mainnet--indexer.datahub.figment.io",network:"Avalanche",service:"Transaction Search API",route:"/transactions",mdxType:"MakingCalls"}),(0,r.kt)(o.S,{methods:[{name:"/transactions",content:"Returns transactions matching the search parameters.\n  \n\n### Parameters\n\nQuery string parameters -\n\n*   `chain` -`string` Filter by chain ID.\n*   `type` - `string` Filter by transaction type. Separate multiple values by comma.\n*   `start_time` - `string` Search range start time.\n*   `end_time` - `string` Search range end time.\n*   `start_height` - `string` Search range start block height (if applicable).\n*   `block_hash` - `string` Filter by block hash (if applicable).\n*   `memo` - `string` Filter by memo text field.\n*   `address` - `string` Filter by account address. Separate multiple values by comma.\n*   `asset` - `string` Filter by asset ID.\n*   `page` - `integer` Results page.\n    \n\n### Response\n\nReturns transaction details based on the given parameters.\n\n* * *",request:{method:"GET",header:[],url:"https://avalanche--mainnet--indexer.datahub.figment.io",headers:{},query:"transactions?network=avalanche&chain_ids=mainnet&start_height=1921984&address=avax1pvkhyf0y9674p2ps40vmp0a8w427384lpr8zan,avax1rlu93pnalclt7h0dte3evua97lv4fp4qzax5wq"},interactive:!0,response:{name:"/transactions",status:"OK",code:200,body:[{id:"2a9qJQvitJd1Y5RiqLoMonxVEj76PzvusXgHD1GztYjJUXtJmL",chain:"11111111111111111111111111111111LpoYY",type:"p_add_delegator",block:"dcb81QQ2jx5SAr5BsWmgepEiWSy8RfSwupredqzZZke5w76Mu",block_height:1932215,timestamp:"2022-07-28T13:25:56.159481Z",status:"accepted",memo:"",memo_text:"",fee:0,metadata:{duration:1209710,end_time:"2022-08-11T13:32:00Z",node_id:"NodeID-GW7CvXwkPFDsfFHrix1SA148NHF5ZnSXs",start_time:"2022-07-28T13:30:10Z",weight:25e9},inputs:[{id:"25cYWZAvGhepiJUMVVu97q3fx16MQx27Z8rbdgX97tfTdhmMxh",tx_id:"E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE",chain:"",asset:"FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",type:"transfer",index:0,locktime:0,threshold:1,amount:381e6,group:0,addresses:["avax1pvkhyf0y9674p2ps40vmp0a8w427384lpr8zan"],stake:!1,reward:!1,spent:!0,spent_in_tx:"2a9qJQvitJd1Y5RiqLoMonxVEj76PzvusXgHD1GztYjJUXtJmL"}],output_amounts:{FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z:25381e6}}]}},{name:"/transactions/{hash}",content:"Returns transaction details for a given transaction hash.\n    \n\n### Parameters\n\nQuery string parameters -\n\n- `/transactions/{hash}` - Pass the transaction hash in the request URL.   \n \n### Response\n\nReturns transaction details for the given transaction hash.\n\n* * *",request:{method:"GET",header:[],url:"https://avalanche--mainnet--indexer.datahub.figment.io",headers:{},query:"transactions/E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE"},interactive:!0,response:{name:"/transactions/{hash}",status:"OK",code:200,body:{id:"E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE",chain:"11111111111111111111111111111111LpoYY",type:"p_add_delegator",block:"hXnSceGbJajBQeKsFypokezZroD87LRF75yCsGEBoX2p4CQ5Y",block_height:1924119,timestamp:"2022-07-26T20:46:55.696341Z",status:"accepted",memo:"",memo_text:"",fee:0,metadata:{duration:1209643,end_time:"2022-08-09T20:52:00Z",node_id:"GW7CvXwkPFDsfFHrix1SA148NHF5ZnSXs",start_time:"2022-07-26T20:51:17Z",weight:25e9},inputs:[{id:"hQsWoanzMAmGrw41nJaN1bSRcGmLEBdptxtQ87ympoiJHpBtr",tx_id:"BSVFaYseLC9QUuUTtYGxCh8tf7DE7zqHpwZPBBH6CSwiutUv6",chain:"",asset:"FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",type:"transfer",index:0,locktime:0,threshold:1,amount:88e6,group:0,addresses:["avax1rlu93pnalclt7h0dte3evua97lv4fp4qzax5wq"],stake:!1,reward:!1,spent:!0,spent_in_tx:"E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE"}],input_amounts:{FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z:25381e6},outputs:[{id:"25cYWZAvGhepiJUMVVu97q3fx16MQx27Z8rbdgX97tfTdhmMxh",tx_id:"E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE",chain:"",asset:"FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",type:"transfer",index:0,locktime:0,threshold:1,amount:381e6,group:0,addresses:["avax1pvkhyf0y9674p2ps40vmp0a8w427384lpr8zan"],stake:!1,reward:!1,spent:!0,spent_in_tx:"2a9qJQvitJd1Y5RiqLoMonxVEj76PzvusXgHD1GztYjJUXtJmL"}],output_amounts:{FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z:25381e6}}}}],service:"transaction-search-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"NEAR Protocol",value:"near-protocol"}],network:"avalanche",proxy:"https://api-service-proxy.paulpomerleau.workers.dev",mdxType:"APIMethods"}))}v.isMDXComponent=!0}}]);