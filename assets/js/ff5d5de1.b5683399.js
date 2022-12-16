(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5525],{72750:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(65488),o=a(85162),i=a(57643);const l={toc:[]};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("span",{className:"open"},"API Authentication"),(0,r.kt)("span",{className:"closed"},"Click to view API Authentication details")),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,a.network," ",a.service)," ","endpoint, hosted at ",(0,r.kt)("code",null,a.url),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${a.url}${a.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(o.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${a.url}/apikey/{{apikey}}${a.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(o.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${a.url}${a.route}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'`)),(0,r.kt)(o.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${a.url}/apikey/{{apikey}}${a.route}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'`)))))}c.isMDXComponent=!0},33976:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),r=a(16550);function s(e){let{network:t,networks:a,methods:s,service:o}=e;const i=(0,r.TH)(),l=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{l.push(i.pathname.replace(/\/[^\/]+$/,`/${e.target.value}`))}},a.map((e=>n.createElement("option",{key:`${e.value}--n-option`,value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:i.hash.replace("#","")||"",onChange:e=>{l.push(`#${e.target.value}`)}},s.map((e=>n.createElement("option",{key:`${e.name}--m-hash`,value:e.name.toLowerCase()},e.name)))))}},27297:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{network:t,service:a}=e;return(0,n.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=t;let n=e.previousElementSibling;n=n.cloneNode(!0),n.querySelector(".breadcrumbs__link span").innerHTML=a.label,n.querySelector(".breadcrumbs__link").href=a.link,e.insertAdjacentElement("beforebegin",n)}),[t]),n.createElement(n.Fragment,null)}},89638:(e,t,a)=>{"use strict";a.d(t,{S:()=>M});var n=a(87462),r=a(67294),s=a(58538),o=a(67748),i=a(30381),l=a.n(i);const c={days:()=>({start:new Date(Date.now()-864e5).toISOString().split("T")[0],end:(new Date).toISOString().split("T")[0]}),polkadot(){const e=l()("2022-10-26","YYYY-MM-DD"),t=l()().diff(e,"days")+1,a=876+Math.ceil(1*t);return{start:a-30,end:a}},solana(){const e=Math.ceil(10.5),t=l()("2022-10-25","YYYY-MM-DD"),a=l()().diff(t,"days")+1,n=363+Math.ceil(.35*a);return{start:n-e,end:n}},near(){const e=4593.6*25,t=Math.ceil(7*e),a=l()("2022-10-25","YYYY-MM-DD"),n=l()().diff(a,"days")+1,r=76953090+Math.ceil(n*e);return{start:r-t-Math.ceil(100*e),end:r+Math.ceil(100*e)}}};var d=a(40460),u=a.n(d),m=a(23746),p=a(66412);const h={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function y(e){let{children:t="",header:a,actions:s,disabled:o=!1,status:i,onValueChange:l}=e;const c=(0,p.p)(),d=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=d.current?.querySelector("textarea"),t=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return e.addEventListener("input",t),()=>e.removeEventListener("input",t)}),[]);return r.createElement("div",{ref:d},r.createElement(b,{actions:s,status:i},a),r.createElement("div",{className:h.Container},r.createElement(u(),{value:t,onValueChange:l,highlight:function(e){return void 0===e&&(e=""),r.createElement(m.ZP,(0,n.Z)({},m.lG,{theme:c,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:s,getLineProps:o,getTokenProps:i}=e;return r.createElement("div",{className:h.Code},s.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},o({line:e,key:t}),{className:h.Line}),r.createElement("span",{className:h.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},i({token:e,key:t}))))))))))}))},disabled:o,ignoreTabKey:!0,padding:10,style:{...c.plain,overflow:"auto"},className:h.Editor})))}function b(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:h.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:h.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:s=a}=e;return r.createElement("button",{className:h.HeaderButton,key:`${t}:${a}`,title:a,onClick:n},s)}))))}var f=a(10195);const j="overlayHeaderButton_IGf5";const k=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[s,o]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...s,fetchData:async function(n,r){void 0===r&&(r={}),o({type:"loading"});try{const s=await fetch(e+(n?`/${n}`:""),{...t,...r});if(!s.ok){let e,t,a;try{a=JSON.parse(await s.text()),e=await s.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||s.statusText)}const i=await s.json();if(a.current)return;return o({type:"fetched",payload:i}),i}catch(s){if(a.current)return;return o({type:"error",payload:s.message}),null}}}};var w,g=a(57643),v=a(44672);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},T.apply(this,arguments)}const E=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",T({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,w||(w=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var S;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},x.apply(this,arguments)}const O=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",x({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,S||(S=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function C(e){let{req:t,res:a,interactive:n,endpoint:s}=e;const[o,i]=(0,r.useState)(R(t.body)),[l,c]=(0,r.useState)(t.query),[d,u]=(0,r.useState)(L(a.body)),m="string"==typeof t.body&&0==t.body.indexOf("query"),{data:p,error:h,loading:b,fetchData:w}=k(s,{method:t.method,headers:{...t.headers,"Content-Type":m?"application/graphql":"application/json"},body:R(t.body)}),[T,S]=(0,r.useState)(null);(0,r.useEffect)((()=>{b?S("LOADING"):h||p?.error?S("ERROR"):p&&S("SUCCESS")}),[p,h,b]);const x=[n?{title:"Run request",onClick:async()=>{const e=await w(l,{body:o});e&&u(L(e))},Component:r.createElement(r.Fragment,null,r.createElement(E,null)," Run")}:null,{title:"Copy",onClick:()=>(0,f.Z)(o),Component:r.createElement(v.Z,{code:"",className:j})},n?{title:"Reset",onClick:()=>{S(null),c(t.query),i(R(t.body)),u(L(a.body))},Component:r.createElement(O,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(y,{header:["GET","DELETE"].indexOf(t.method)>-1?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:x,disabled:!n,onValueChange:e=>{n&&(["GET","DELETE"].indexOf(t.method)>-1?c(e):"POST"===t.method&&i(e))}},["GET","DELETE"].indexOf(t.method)>-1?l:o),r.createElement(g.Z,{title:T?"Response":"Example Response",language:"json"},h?`${h}`:d))}function L(e){return JSON.stringify(e,null,2)}function R(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const P="heading_REER";var _=a(39960),A=a(3905);const Z={toc:[]};function N(e){let{components:t,...a}=e;return(0,A.kt)("wrapper",(0,n.Z)({},Z,a,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("details",{open:a.accordionOpen?"open":void 0},(0,A.kt)("summary",null,(0,A.kt)("span",{className:"open"},"Specification"),(0,A.kt)("span",{className:"closed"},"View Specification")),(0,A.kt)(s.D,{mdxType:"ReactMarkdown"},a.details)))}function D(e){let{name:t,content:a="",interactive:n,network:o,request:i,accordionOpen:l=!1,response:d,endpoint:u}=e;const m=u.includes("rewards-api"),p=["by day","account","address"].find((e=>t.includes(e))),h=["by epoch","by era"].find((e=>t.includes(e)))||t.startsWith("SOL");if(m&&h){const{start:e,end:t}=c[o]();i.body={...i.body,start:e,end:t}}else if(m&&p){const{start:e,end:t}=c.days();i.body={...i.body,start:e,end:t}}const[y,...b]=a.trim().split(/\n+/),f=b.join("\n");return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:P,"data-method":i.method},r.createElement(_.Z,{to:`#${t.toLowerCase()}`},t)),r.createElement(s.D,null,y),r.createElement(C,{req:i,res:d,interactive:n,endpoint:u}),r.createElement(N,{details:f,accordionOpen:l}),r.createElement("hr",null))}function M(e){let{network:t,methods:a,service:s,proxy:i}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(D,(0,n.Z)({key:t+a},e,{network:t,endpoint:`${i}/${s}/${t}`,accordionOpen:"node-api"!==s})))),r.createElement(o.Z,null))}N.isMDXComponent=!0},16956:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),s=a(89638),o=a(33976),i=(a(27297),a(72750));const l={title:"Solana",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Solana",image:"img/logo.svg",keywords:["Rewards API","Solana"]},c="Rewards API - Solana",d={unversionedId:"api-reference/rewards-api/solana",id:"api-reference/rewards-api/solana",title:"Solana",description:"Rewards API - Solana",source:"@site/docs/api-reference/rewards-api/solana.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/solana",permalink:"/api-reference/rewards-api/solana",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Solana",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Solana",image:"img/logo.svg",keywords:["Rewards API","Solana"]},sidebar:"docsSidebar"},u={},m=[],p={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---solana"},"Rewards API - Solana"),(0,r.kt)(o.Z,{service:"rewards-api",methods:[{name:"SOL Rewards for stake account"},{name:"SOL Rewards for system account"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"solana",mdxType:"ApiReferenceNav"}),(0,r.kt)(i.ZP,{url:"https://solana-rewards.datahub.figment.io",network:"Solana",service:"Rewards API",route:"/v2/rewards",mdxType:"MakingCalls"}),(0,r.kt)(s.S,{methods:[{name:"SOL Rewards for stake account",content:'Returns rewards (and balances) for all **stake accounts**. The response payload is broken down by epoch and by stake account. The **net rewards** are shown, meaning after the on-chain validator commission has been subtracted.\n\n### Parameters\n\n- `accounts` is an array of **stake account** addresses _(required)_\n- `start` and `end` can be either epochs (numbers) or timestamps (strings formatted like "YYYY-MM-DD") _(required)_\n    \n\n### Response\n\nThe response is broken down between `meta` and `data`\n\n- `meta`\n    - `network` is the name of the network queried\n    - `period_unit` is the unit of the `period` field under `data`: here it will be `epoch`\n- `data` is an array of objects - one for each epoch - containing:\n    - `validator` returns the validator that distributed the rewards\n    - `system_account` returns the system account that stake account was created from\n    - `accounts` returns the stake account that received the rewards\n    - `period` is the epoch number\n    - `timestamp` is the timestamp at the end of the epoch\n    - `rewards` is an array of objects containing `numeric`, `exp`, `currency`, and `text`. The formula to compute the rewards in the `currency` unit is `numeric x 10^(-exp)`(`text` is the string version of this)\n    - `balances` is an array of objects containing `numeric`, `exp`, `currency`, and `text`.\n\n### Limitations\n\n- The API returns rewards for Figment validators only.\n- Data is available approximately an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.\n    \n\n### FAQ\n\n- Read more about [stake accounts](https://docs.solana.com/staking/stake-accounts) on the Solana Docs.',request:{method:"POST",header:[],body:{accounts:["2yoofMr4N78WPxVK8MU8Yy26dfRZbPw5WDzTRCA9uv95"],start:363,end:364},url:"https://solana-rewards.datahub.figment.io",headers:{},query:""},interactive:!0,response:{name:"SOL Rewards for stake account",status:"OK",code:200,body:{data:[{accounts:["2yoofMr4N78WPxVK8MU8Yy26dfRZbPw5WDzTRCA9uv95"],chain_id:"mainnet",rewards:[{text:"0.001334501 SOL",currency:"SOL",numeric:1334501,exp:9}],balances:[{text:"3.029556552 SOL",currency:"SOL",numeric:3029556552,exp:9}],period:"363",validator:"CcaHc2L43ZWjwCHART3oZoJvHLAe9hzT2DJNUpBzoTN1",timestamp:"2022-10-25T02:12:59Z",system_account:"EToJFrGakntRnwL8LLikLgXoAfBjgwYhwwYvfVRcrgLL"},{accounts:["2yoofMr4N78WPxVK8MU8Yy26dfRZbPw5WDzTRCA9uv95"],chain_id:"mainnet",rewards:[{text:"0.001336579 SOL",currency:"SOL",numeric:1336579,exp:9}],balances:[{text:"3.030893131 SOL",currency:"SOL",numeric:3030893131,exp:9}],period:"364",validator:"CcaHc2L43ZWjwCHART3oZoJvHLAe9hzT2DJNUpBzoTN1",timestamp:"2022-10-27T09:04:06Z",system_account:"EToJFrGakntRnwL8LLikLgXoAfBjgwYhwwYvfVRcrgLL"}],meta:{network:"solana",period_unit:"epoch"}}}},{name:"SOL Rewards for system account",content:'Returns rewards (and balances) for all **stake accounts** created from the provided system account. The response payload is broken down by epoch and by staking account. The **net rewards** are shown, meaning after the on-chain validator commission has been subtracted.\n\nParameters\n\n- `addresses` is an array of **system account** addresses _(required)_\n- `start` and `end` can be either epochs (numbers) or timestamps (strings formatted like "YYYY-MM-DD") _(required)_\n    \n\n### Response\n\nThe response is broken down between `meta` and `data`\n\n- `meta`\n    - `network` is the name of the network queried\n    - `period_unit` is the unit of the `period` field under `data`: here it will be `epoch`\n- `data` is an array of objects - one for each epoch and stake account - containing:\n    - `validator` returns the validator that distributed the rewards\n    - `accounts` returns the stake account that received the rewards\n    - `system_account` returns the system account the stake account was created from\n    - `period` is the epoch number\n    - `timestamp` is the timestamp at the end of the epoch\n    - `rewards` is an array of objects containing `numeric`, `exp`, `currency`, and `text`. The formula to compute the rewards in the `currency` unit is `numeric x 10^(-exp)`(`text` is the string version of this)\n\n### Limitations\n\n- The API returns rewards for Figment validators only\n- Data is available approximately an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.\n    \n\n### FAQ\n\n- Read more about [stake accounts](https://docs.solana.com/staking/stake-accounts) on the Solana Docs.',request:{method:"POST",header:[],body:{addresses:["4GCemsBJbwpG7AjczRw1YqG6BBpamAW75UkRtnmapqkF"],start:363,end:364},url:"https://solana-rewards.datahub.figment.io/v2/rewards",headers:{},query:""},interactive:!0,response:{name:"SOL Rewards for system account",status:"OK",code:200,body:{data:[{accounts:["DjJXYY52TnfEqXsb5WnxZR9Qxr3P5vZBMpW2Ju9TgDxX"],chain_id:"mainnet",rewards:[{text:"0.004420096 SOL",currency:"SOL",numeric:4420096,exp:9}],balances:[{text:"10.033234686 SOL",currency:"SOL",numeric:10033234686,exp:9}],period:"363",validator:"26pV97Ce83ZQ6Kz9XT4td8tdoUFPTng8Fb8gPyc53dJx",timestamp:"2022-10-25T02:12:59Z",system_account:"4GCemsBJbwpG7AjczRw1YqG6BBpamAW75UkRtnmapqkF"},{accounts:["DjJXYY52TnfEqXsb5WnxZR9Qxr3P5vZBMpW2Ju9TgDxX"],chain_id:"mainnet",rewards:[{text:"0.004417853 SOL",currency:"SOL",numeric:4417853,exp:9}],balances:[{text:"10.037652539 SOL",currency:"SOL",numeric:10037652539,exp:9}],period:"364",validator:"26pV97Ce83ZQ6Kz9XT4td8tdoUFPTng8Fb8gPyc53dJx",timestamp:"2022-10-27T09:04:06Z",system_account:"4GCemsBJbwpG7AjczRw1YqG6BBpamAW75UkRtnmapqkF"}],meta:{network:"solana",period_unit:"epoch"}}}}],service:"rewards-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"solana",proxy:"https://api-service-proxy.figment-secops.workers.dev",mdxType:"APIMethods"}))}h.isMDXComponent=!0},46700:(e,t,a)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=46700}}]);