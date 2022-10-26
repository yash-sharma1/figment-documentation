"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8103],{2750:(e,t,a)=>{a.d(t,{ZP:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162),i=a(7643);const s={toc:[{value:"Authentication",id:"authentication",level:3}]};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,a.network," ",a.service)," ","endpoint, hosted at ",(0,r.kt)("code",null,a.url),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,r.kt)(o.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,r.kt)(o.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,r.kt)(o.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}c.isMDXComponent=!0},3976:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6775);function l(e){let{network:t,networks:a,methods:l,service:o}=e;const i=(0,r.TH)(),s=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{s.push(i.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},a.map((e=>n.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:i.hash.replace("#","")||"",onChange:e=>{s.push("#"+e.target.value)}},l.map((e=>n.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},7297:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{network:t,service:a}=e;return(0,n.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=t;let n=e.previousElementSibling;n=n.cloneNode(!0),n.querySelector(".breadcrumbs__link span").innerHTML=a.label,n.querySelector(".breadcrumbs__link").href=a.link,e.insertAdjacentElement("beforebegin",n)}),[t]),n.createElement(n.Fragment,null)}},3213:(e,t,a)=>{a.d(t,{S:()=>j});var n=a(7462),r=a(7294),l=a(1099),o=a(7748),i=a(460),s=a.n(i),c=a(3746),d=a(6412);const u={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function p(e){let{children:t="",header:a,actions:l,disabled:o=!1,status:i,onValueChange:p}=e;const h=(0,d.p)(),y=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;const t=null==(e=y.current)?void 0:e.querySelector("textarea"),a=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",a),()=>t.removeEventListener("input",a)}),[]);return r.createElement("div",{ref:y},r.createElement(m,{actions:l,status:i},a),r.createElement("div",{className:u.Container},r.createElement(s(),{value:t,onValueChange:p,highlight:function(e){return void 0===e&&(e=""),r.createElement(c.ZP,(0,n.Z)({},c.lG,{theme:h,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:l,getLineProps:o,getTokenProps:i}=e;return r.createElement("div",{className:u.Code},l.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},o({line:e,key:t}),{className:u.Line}),r.createElement("span",{className:u.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},i({token:e,key:t}))))))))))}))},disabled:o,ignoreTabKey:!0,padding:10,style:{...h.plain,overflow:"auto"},className:u.Editor})))}function m(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:u.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:u.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:l=a}=e;return r.createElement("button",{className:u.HeaderButton,key:t+":"+a,title:a,onClick:n},l)}))))}var h=a(195);const y="overlayHeaderButton_IGf5";const v=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[l,o]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...l,fetchData:async function(n,r){void 0===r&&(r={}),o({type:"loading"});try{const l=await fetch(e+(n?"/"+n:""),{...t,...r});if(!l.ok){let e,t,a;try{a=JSON.parse(await l.text()),e=await l.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||l.statusText)}const i=await l.json();if(a.current)return;return o({type:"fetched",payload:i}),i}catch(l){if(a.current)return;return o({type:"error",payload:l.message}),null}}}};var b,f=a(7643),g=a(4672);function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},k.apply(this,arguments)}const w=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,b||(b=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var E;function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},T.apply(this,arguments)}const C=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",T({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,E||(E=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function A(e){let{req:t,res:a,interactive:n,endpoint:l}=e;const[o,i]=(0,r.useState)(x(t.body)),[s,c]=(0,r.useState)(t.query),[d,u]=(0,r.useState)(S(a.body)),m="string"==typeof t.body&&0==t.body.indexOf("query"),{data:b,error:k,loading:E,fetchData:T}=v(l,{method:t.method,headers:{...t.headers,"Content-Type":m?"application/graphql":"application/json"},body:x(t.body)}),[A,R]=(0,r.useState)(null);(0,r.useEffect)((()=>{E?R("LOADING"):k||null!=b&&b.error?R("ERROR"):b&&R("SUCCESS")}),[b,k,E]);const P=[n?{title:"Run request",onClick:async()=>{const e=await T(s,{body:o});e&&u(S(e))},Component:r.createElement(r.Fragment,null,r.createElement(w,null)," Run")}:null,{title:"Copy",onClick:()=>(0,h.Z)(o),Component:r.createElement(g.Z,{code:"",className:y})},n?{title:"Reset",onClick:()=>{R(null),c(t.query),i(x(t.body)),u(S(a.body))},Component:r.createElement(C,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(p,{header:"GET"===t.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:P,disabled:!n,onValueChange:e=>{n&&("GET"===t.method?c(e):"POST"===t.method&&i(e))}},"GET"===t.method?s:o),r.createElement(f.Z,{title:A?"Response":"Example Response",language:"json"},k?""+k:d))}function S(e){return JSON.stringify(e,null,2)}function x(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const R="heading_REER";var P=a(9960),_=a(3905);const O={toc:[]};function N(e){let{components:t,...a}=e;return(0,_.kt)("wrapper",(0,n.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,_.kt)("details",{open:a.accordionOpen?"open":void 0},(0,_.kt)("summary",null,(0,_.kt)("span",{className:"open"},"Specification"),(0,_.kt)("span",{className:"closed"},"View Specification")),(0,_.kt)(l.D,{mdxType:"ReactMarkdown"},a.details)))}function Z(e){let{name:t,content:a="",interactive:n,request:o,accordionOpen:i=!1,response:s,endpoint:c}=e;["Rewards (by epoch)","Rewards (daily)"].includes(t)&&(o.body={...o.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===t?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]});const[d,...u]=a.trim().split(/\n+/),p=u.join("\n");return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:R,"data-method":o.method},r.createElement(P.Z,{to:"#"+t.toLowerCase()},t)),r.createElement(l.D,null,d),r.createElement(A,{req:o,res:s,interactive:n,endpoint:c}),r.createElement(N,{details:p,accordionOpen:i}),r.createElement("hr",null))}function j(e){let{network:t,methods:a,service:l,proxy:i}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(Z,(0,n.Z)({key:t+a},e,{endpoint:i+"/"+l+"/"+t,accordionOpen:"node-api"!==l})))),r.createElement(o.Z,null))}N.isMDXComponent=!0},2019:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(3213),o=a(3976),i=a(7297),s=a(2750);const c={title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Avalanche",image:"img/logo.svg",keywords:["Rewards API","Avalanche"]},d="Rewards API - Avalanche",u={unversionedId:"api-reference/rewards-api/avalanche",id:"api-reference/rewards-api/avalanche",title:"Avalanche",description:"Rewards API - Avalanche",source:"@site/docs/api-reference/rewards-api/avalanche.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/avalanche",permalink:"/api-reference/rewards-api/avalanche",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Avalanche",image:"img/logo.svg",keywords:["Rewards API","Avalanche"]},sidebar:"docsSidebar"},p={},m=[],h={toc:m};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---avalanche"},"Rewards API - Avalanche"),(0,r.kt)(i.Z,{network:"Avalanche",service:{link:"/api-reference/rewards-api",label:"Rewards API"},mdxType:"FixBreadCrumbs"}),(0,r.kt)(o.Z,{service:"rewards-api",methods:[{name:"Rewards by day"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"avalanche",mdxType:"ApiReferenceNav"}),(0,r.kt)(s.ZP,{url:"https://avalanche-rewards.datahub.figment.io/v2",network:"Avalanche",service:"Rewards API",mdxType:"MakingCalls"}),(0,r.kt)(l.S,{methods:[{name:"Rewards by day",content:"Returns net rewards grouped by day\n\n## Request\n\n\\* `network`: `avalanche` _(Required)_  \n\\* `accounts` takes an array of addresses. _(Required)_  \n\\* `start` and `end` are timestamps (in the format YYYY-MM-DD). _(Required)_\n\n## Response\n\nThe response is broken down between `meta` and `data`\n\n##### `meta`\n\n\\* `network` is the same as in the request  \n\\* `period_unit` is the unit of the `period` field under `data` : `daily` here\n\n##### `data`\n\nis an array of objects - one for each period - containing:\n\n\\* `validator` returns the validator that distributed the rewards  \n\\* `timestamp` is the timestamp of the day's start (midnight UTC)  \n\\* `rewards` is an array of objects. The formula to compute the final rewards in the `currency` unit is `numeric x 10^(-exp)` (`text` being the string version of this).\n\n## Limitations\n\n\\* This API returns rewards for Figment validators only  \n\\* Data is available approximatively an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.",request:{auth:{type:"noauth"},method:"POST",header:[],body:{network:"avalanche",accounts:["avax1na8x8j4yk5cwad3kgy6c9t2h2tpj2p2jljk92u"],start:"2022-10-01",end:"2022-10-08"},url:"https://avalanche-rewards.datahub.figment.io/v2",headers:{},query:"rewards"},interactive:!0,response:{name:"Rewards by day",status:"OK",code:200,body:{data:[{accounts:["avax1na8x8j4yk5cwad3kgy6c9t2h2tpj2p2jljk92u"],chain_id:"P",rewards:[{text:"0.278488965 AVAX",currency:"AVAX",numeric:278488965,exp:9}],validator:"NodeID-KcCxyypJ5m55f17fbuzkKqeotY64DScum",timestamp:"2022-10-07T00:00:00Z"}],meta:{network:"avalanche",period_unit:"daily"}}}}],service:"rewards-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"avalanche",proxy:"https://api-service-proxy.paulpomerleau.workers.dev",mdxType:"APIMethods"}))}y.isMDXComponent=!0}}]);