"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7027],{2750:(e,t,a)=>{a.d(t,{ZP:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162),i=a(7643);const s={toc:[{value:"Authentication",id:"authentication",level:3}]};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,a.network," ",a.service)," ","endpoint, hosted at"," ",(0,r.kt)("code",null,a.url.replace(/(apikey\/[^\/]+\/*){1}/,"")),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,r.kt)(l.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,r.kt)(l.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,r.kt)(l.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}d.isMDXComponent=!0},3976:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6775);function o(e){let{network:t,networks:a,methods:o,service:l}=e;const i=(0,r.TH)(),s=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{s.push(i.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},a.map((e=>n.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:i.hash.replace("#","")||"",onChange:e=>{s.push("#"+e.target.value)}},o.map((e=>n.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},4777:(e,t,a)=>{a.d(t,{S:()=>j});var n=a(7462),r=a(7294),o=a(7748),l=a(460),i=a.n(l),s=a(3746),d=a(6412);const c={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function u(e){let{children:t="",header:a,actions:o,disabled:l=!1,status:u,onValueChange:m}=e;const h=(0,d.p)(),y=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;const t=null==(e=y.current)?void 0:e.querySelector("textarea"),a=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",a),()=>t.removeEventListener("input",a)}),[]);return r.createElement("div",{ref:y},r.createElement(p,{actions:o,status:u},a),r.createElement("div",{className:c.Container},r.createElement(i(),{value:t,onValueChange:m,highlight:function(e){return void 0===e&&(e=""),r.createElement(s.ZP,(0,n.Z)({},s.lG,{theme:h,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:o,getLineProps:l,getTokenProps:i}=e;return r.createElement("div",{className:c.Code},o.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},l({line:e,key:t}),{className:c.Line}),r.createElement("span",{className:c.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},i({token:e,key:t}))))))))))}))},disabled:l,ignoreTabKey:!0,padding:10,style:{...h.plain,overflow:"auto"},className:c.Editor})))}function p(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:c.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:c.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:o=a}=e;return r.createElement("button",{className:c.HeaderButton,key:t+":"+a,title:a,onClick:n},o)}))))}var m=a(195);const h="overlayHeaderButton_IGf5";const y=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[o,l]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...o,fetchData:async function(n,r){void 0===r&&(r={}),l({type:"loading"});try{const o=await fetch(e+(n||""),{...t,...r});if(!o.ok){let e,t,a;try{a=JSON.parse(await o.text()),e=await o.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||o.statusText)}const i=await o.json();if(a.current)return;return l({type:"fetched",payload:i}),i}catch(o){if(a.current)return;return l({type:"error",payload:o.message}),null}}}};var k,g=a(7643),f=a(4672);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}const w=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",b({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,k||(k=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var v;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const T=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,v||(v=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function C(e){let{req:t,res:a,interactive:n}=e;const[o,l]=(0,r.useState)(S(t.body)),[i,s]=(0,r.useState)(t.query),[d,c]=(0,r.useState)(P(a.body)),p="string"==typeof t.body&&0==t.body.indexOf("query"),{data:k,error:b,loading:v,fetchData:E}=y(t.url,{method:t.method,headers:{"Content-Type":p?"application/graphql":"application/json"},body:S(t.body)}),[C,x]=(0,r.useState)(null);(0,r.useEffect)((()=>{v?x("LOADING"):b||null!=k&&k.error?x("ERROR"):k&&x("SUCCESS")}),[k,b,v]);const O=[n?{title:"Run request",onClick:async()=>{const e=await E(i,{body:o});e&&c(P(e))},Component:r.createElement(r.Fragment,null,r.createElement(w,null)," Run")}:null,{title:"Copy",onClick:()=>(0,m.Z)(o),Component:r.createElement(f.Z,{code:"",className:h})},n?{title:"Reset",onClick:()=>{x(null),s(t.query),l(S(t.body)),c(P(a.body))},Component:r.createElement(T,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(u,{header:"GET"===t.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:O,disabled:!n,onValueChange:e=>{n&&("GET"===t.method?s(e):"POST"===t.method&&l(e))}},"GET"===t.method?i:o),r.createElement(g.Z,{title:C?"Response":"Example Response",language:"json"},b?""+b:d))}function P(e){return JSON.stringify(e,null,2)}function S(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}var x=a(1099),O=a(3905);const R={toc:[]};function Z(e){let{components:t,...a}=e;return(0,O.kt)("wrapper",(0,n.Z)({},R,a,{components:t,mdxType:"MDXLayout"}),(0,O.kt)("details",null,(0,O.kt)("summary",null,a.title),(0,O.kt)(x.D,{mdxType:"ReactMarkdown"},a.details)))}function N(e){let{content:t=""}=e;const[a,...n]=t.trim().split(/\n+/),o=n.join("\n");return r.createElement("div",null,r.createElement(x.D,null,a),r.createElement(Z,{title:"View specification",details:o}))}Z.isMDXComponent=!0;const _="heading_REER";var A=a(9960);function I(e){let{name:t,content:a="",interactive:n,request:o,response:l}=e;return["Rewards (by epoch)","Rewards (daily)"].includes(t)&&(o.body={...o.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===t?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]}),r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:_,"data-method":o.method},r.createElement(A.Z,{to:"#"+t.toLowerCase()},t)),r.createElement(N,{content:a}),r.createElement(C,{req:o,res:l,interactive:n}),r.createElement("hr",null))}function j(e){let{network:t,methods:a}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(I,(0,n.Z)({key:t+a},e)))),r.createElement(o.Z,null))}},5430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4777),l=a(3976),i=a(2750);const s={title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Polkadot",image:"img/logo.svg",keywords:["Rewards API","Polkadot"]},d="Rewards API - Polkadot",c={unversionedId:"api-reference/rewards-api/polkadot",id:"api-reference/rewards-api/polkadot",title:"Polkadot",description:"Rewards API - Polkadot",source:"@site/docs/api-reference/rewards-api/polkadot.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/polkadot",permalink:"/api-reference/rewards-api/polkadot",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Polkadot",image:"img/logo.svg",keywords:["Rewards API","Polkadot"]},sidebar:"docsSidebar"},u={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---polkadot"},"Rewards API - Polkadot"),(0,r.kt)(l.Z,{service:"rewards-api",methods:[{name:"Rewards (by epoch)"}],networks:[{label:"Ethereum",value:"ethereum"},{label:"Solana",value:"solana"},{label:"Polkadot",value:"polkadot"}],network:"polkadot",mdxType:"ApiReferenceNav"}),(0,r.kt)(i.ZP,{url:"https://polkadot-rewards.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/rewards",network:"Polkadot",service:"Rewards API",mdxType:"MakingCalls"}),(0,r.kt)(o.S,{methods:[{name:"Rewards (by epoch)",content:"Returns net delegator rewards (aka post on-chain validator commission) grouped by epoch\n\n### Parameters\n\n*   `network` => `polkadot`\n*   `chain_id` => `mainnet`\n*   `accounts` takes in an array of Stash Account public addresses\n*   `grouping` => `epoch` will return rewards grouped by **eras**.\n*   `start_time` and `end_time` are ISO 8601 timestamps in UTC. If the start of an epoch falls into the requested date range it will be included (even if it doesn't end inside the date range)\n\n### Response\n\n*   `network` and `chain_id` are the same as the request\n*   `accounts` returns an array of Stash Account public addresses\n*   `validator` returns the validator that tokens were staked to\n*   `time` and `epoch` reference the start of the daily or epoch bucket\n*   `rewards` is an array of objects with four components: `numeric` , `exp` and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric * 10^-exp`(`text` is the string version of this)\n\n### Limitations\n\n*   The API returns rewards for Figment validators only\n*   The API returns rewards for the last 30 days\n*   Data is available approximatively an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.",request:{auth:{type:"noauth"},method:"POST",header:[],body:{network:"polkadot",chain_id:"mainnet",accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],start_time:"2022-08-28",end_time:"2022-08-30",grouping:"epoch"},url:"https://polkadot-rewards.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/rewards"},interactive:!0,response:{name:"DOT",status:"OK",code:200,body:[{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"4.0480473284 DOT",currency:"DOT",numeric:40480473284,exp:10}],epoch:"806",network:"polkadot",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",time:"2022-08-17T15:36:18Z"}]}}],service:"rewards-api",networks:[{label:"Ethereum",value:"ethereum"},{label:"Solana",value:"solana"},{label:"Polkadot",value:"polkadot"}],network:"polkadot",mdxType:"APIMethods"}))}h.isMDXComponent=!0}}]);