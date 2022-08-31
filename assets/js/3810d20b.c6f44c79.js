"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7027],{2750:(e,t,n)=>{n.d(t,{ZP:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162),i=n(5413);const s={toc:[{value:"Authentication &amp; Making Calls",id:"authentication--making-calls",level:3}]};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication--making-calls"},"Authentication & Making Calls"),(0,r.kt)("p",null,"Making API calls with DataHub requires authentication, which can be performed by passing your API key via the request header ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," or as a parameter in the query URL."),(0,r.kt)("p",null,"Here's some boilerplate to get you started."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+n.url.replace(/(apikey\/[^\/]+\/){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,r.kt)(l.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+n.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,r.kt)(l.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+n.url.replace(/(apikey\/[^\/]+\/){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,r.kt)(l.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+n.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}c.isMDXComponent=!0},3976:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6775);function o(e){let{network:t,networks:n,methods:o,service:l}=e;const i=(0,r.TH)(),s=(0,r.k6)();return a.createElement("div",null,a.createElement("label",null,"Change Network: "),a.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{s.push("/api-reference/"+l+"/"+e.target.value)}},n.map((e=>a.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),a.createElement("label",null," Jump to: "),a.createElement("select",{className:"custom-select",defaultValue:i.hash.replace("#","")||"",onChange:e=>{s.push("#"+e.target.value)}},o.map((e=>a.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},5258:(e,t,n)=>{n.d(t,{S:()=>q});var a=n(7462),r=n(7294),o=n(7748),l=n(460),i=n.n(l),s=n(3746),c=n(6412);const d={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function u(e){let{children:t="",header:n,actions:o,disabled:l=!1,status:u,onValueChange:m}=e;const h=(0,c.p)(),k=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;const t=null==(e=k.current)?void 0:e.querySelector("textarea"),n=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",n),()=>t.removeEventListener("input",n)}),[]);return r.createElement("div",{ref:k},r.createElement(p,{actions:o,status:u},n),r.createElement("div",{className:d.Container},r.createElement(i(),{value:t,onValueChange:m,highlight:function(e){return void 0===e&&(e=""),r.createElement(s.ZP,(0,a.Z)({},s.lG,{theme:h,code:e,language:"json"}),(e=>{let{className:t,style:n,tokens:o,getLineProps:l,getTokenProps:i}=e;return r.createElement("div",{className:d.Code},o.map(((e,t)=>r.createElement("div",(0,a.Z)({key:t},l({line:e,key:t}),{className:d.Line}),r.createElement("span",{className:d.LineContent},e.map(((e,t)=>r.createElement("span",(0,a.Z)({key:t},i({token:e,key:t}))))))))))}))},disabled:l,ignoreTabKey:!0,padding:10,style:{...h.plain,overflow:"auto"},className:d.Editor})))}function p(e){let{children:t,actions:n=[],status:a}=e;return r.createElement("div",{className:d.Header,"data-status":a},r.createElement("span",null,t),r.createElement("span",{className:d.Actions},n.map(((e,t)=>{let{title:n,onClick:a,Component:o=n}=e;return r.createElement("button",{className:d.HeaderButton,key:t+":"+n,title:n,onClick:a},o)}))))}var m=n(195);const h=function(e,t){const n=(0,r.useRef)(!1),a={error:void 0,data:void 0,loading:!1},[o,l]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...a,loading:!0};case"fetched":return{...a,data:t.payload,loading:!1};case"error":return{...a,error:t.payload,loading:!1};default:return e}}),a);return{...o,fetchData:async function(a,r){void 0===r&&(r={}),l({type:"loading"});try{const o=await fetch(e+(a||""),{...t,...r});if(!o.ok)throw new Error(o.statusText);const i=await o.json();if(n.current)return;return l({type:"fetched",payload:i}),i}catch(o){if(n.current)return;return l({type:"error",payload:o}),null}}}};var k=n(5413);const y="Banner_i5OS",f="Title_HweB";function w(e){let{title:t,content:n}=e;return r.createElement("div",{className:y},r.createElement("h4",{className:f},t),n)}var v;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}const b=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,v||(v=r.createElement("path",{d:"M15.526 2H4.79C3.805 2 3 2.818 3 3.818v12.728h1.79V3.818h10.736V2Zm2.684 3.636H8.368c-.984 0-1.79.819-1.79 1.819v12.727c0 1 .806 1.818 1.79 1.818h9.842c.985 0 1.79-.818 1.79-1.818V7.455c0-1-.805-1.819-1.79-1.819Zm0 14.546H8.368V7.455h9.842v12.727Z",fill:"#0C3F5C"})))};var T;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}const C=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,T||(T=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var x;function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}const P=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",S({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,x||(x=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function O(e){let{req:t,res:n,interactive:a}=e;const[o,l]=(0,r.useState)(M(t.body)),[i,s]=(0,r.useState)(t.query),[c,d]=(0,r.useState)(M(n.body)),{data:p,error:y,loading:f,fetchData:v}=h(t.url,{method:t.method,headers:{"Content-Type":"application/json"},body:M(t.body)}),[g,T]=(0,r.useState)(null);(0,r.useEffect)((()=>{f?T("LOADING"):y||null!=p&&p.error?T("ERROR"):p&&T("SUCCESS")}),[p,y,f]);const E=[a?{title:"Run request",onClick:async()=>{const e=await v(i,{body:o});e&&d(M(e))},Component:r.createElement(r.Fragment,null,r.createElement(C,null)," Run")}:null,{title:"Copy",onClick:()=>(0,m.Z)(o),Component:r.createElement(b,null)},a?{title:"Reset",onClick:()=>{T(null),s(t.query),l(M(t.body)),d(M(n.body))},Component:r.createElement(P,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(u,{header:"GET"===t.method?"Request Query "+(a?"(try it)":""):"Request Body "+(a?"(try it)":""),actions:E,disabled:!a,onValueChange:e=>{a&&("GET"===t.method?s(e):"POST"===t.method&&l(e))}},"GET"===t.method?i:o),y&&r.createElement(w,{title:"Network error",content:"It could be a CORS issue, or a dropped internet connection. Please check the browser console for details."}),r.createElement(k.Z,{title:g?"Response":"Example Response",language:"json"},y?"":c))}function M(e){return JSON.stringify(e,null,2)}var Z=n(1099),N=n(3905);const A={toc:[]};function _(e){let{components:t,...n}=e;return(0,N.kt)("wrapper",(0,a.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,N.kt)("details",null,(0,N.kt)("summary",null,n.title),(0,N.kt)(Z.D,{mdxType:"ReactMarkdown"},n.details)))}function j(e){let{content:t=""}=e;const[n,...a]=t.trim().split(/\n+/),o=a.join("\n");return r.createElement("div",null,r.createElement(Z.D,null,n),r.createElement(_,{title:"View specification",details:o}))}_.isMDXComponent=!0;const R="heading_REER",B="anchor_oyxB";function Q(e){let{name:t,content:n="",interactive:a,request:o,response:l}=e;return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:R,"data-method":o.method},r.createElement("code",null,t),r.createElement("a",{className:B,href:"#"+t.toLowerCase()},"#")),r.createElement(j,{content:n}),r.createElement(O,{req:o,res:l,interactive:a}),r.createElement("hr",null))}function q(e){let{network:t,methods:n}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),n.map(((e,n)=>r.createElement(Q,(0,a.Z)({key:t+n},e)))),r.createElement(o.Z,null))}},5430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5258),l=n(3976),i=n(2750);const s={title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null},c="Rewards API - Polkadot",d={unversionedId:"api-reference/rewards-api/polkadot",id:"api-reference/rewards-api/polkadot",title:"Polkadot",description:'polkadot\\n   chain_id => mainnet\\n   accounts takes in an array of Stash Account public addresses\\n   grouping => epoch will return rewards grouped by eras.\\n   starttime and endtime are ISO 8601 timestamps in UTC. If the start of an epoch falls into the requested date range it will be included (even if it doesn\'t end inside the date range)\\n    \\n\\nExample//polkadot-rewards.datahub.figment.io/rewards\' \\\\\\n-H \'apikey application/json\\" \\\\\\n--data-raw \'{\\n    \\"network\\" \\"mainnet\\",\\n    \\"accounts\\" \\"2022-07-10\\",\\n    \\"endtime\\" \\"epoch\\"\\n}\'\\n\\n`\\n\\n### Response\\n\\n*   network and chainid are the same as the request\\n   accounts returns an array of Stash Account public addresses\\n   validator returns the validator that tokens were staked to\\n   time and epoch reference the start of the daily or epoch bucket\\n   rewards is an array of objects with four components\\n\\n` json\\n[\\n    {\\n        \\"accounts\\" \\"mainnet\\",\\n        \\"rewards\\" \\"4.43255269 DOT\\",\\n                \\"currency\\" 44325526900,\\n                \\"exp\\" \\"805\\",\\n        \\"network\\" \\"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB\\",\\n        \\"time\\"36{"auth""apikey","apikey""{}","key""POST","header"{"network""mainnet","accounts""2022-08-28","endtime""epoch"},"url"//polkadot-rewards.datahub.figment.io/rewards"},"interactive"{"name""OK","code"[{"accounts""mainnet","rewards""4.0480473284 DOT","currency"40480473284,"exp""806","network""138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB","time"36["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],"chainid"[{"text""DOT","numeric"10}],"epoch""polkadot","validator""2022-08-18T1518Z"},{"accounts""mainnet","rewards""5.0270357928 DOT","currency"50270357928,"exp""808","network""138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB","time"36"Ethereum","value""Solana","value""Polkadot","value":"polkadot"}]} network="polkadot" />',source:"@site/docs/api-reference/rewards-api/polkadot.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/polkadot",permalink:"/api-reference/rewards-api/polkadot",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},p=[],m={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---polkadot"},"Rewards API - Polkadot"),(0,r.kt)(l.Z,{service:"rewards-api",methods:[{name:"Rewards (by epoch)"}],networks:[{label:"Ethereum",value:"ethereum"},{label:"Solana",value:"solana"},{label:"Polkadot",value:"polkadot"}],network:"polkadot",mdxType:"ApiReferenceNav"}),(0,r.kt)(i.ZP,{url:"https://polkadot-rewards.datahub.figment.io/rewards",mdxType:"MakingCalls"}),(0,r.kt)(o.S,{methods:[{name:"Rewards (by epoch)",content:'Returns net delegator rewards (aka post on-chain validator commission) grouped by epoch\n\n### Request\n\n*   `network` => `polkadot`\n*   `chain_id` => `mainnet`\n*   `accounts` takes in an array of Stash Account public addresses\n*   `grouping` => `epoch` will return rewards grouped by **eras**.\n*   `start_time` and `end_time` are ISO 8601 timestamps in UTC. If the start of an epoch falls into the requested date range it will be included (even if it doesn\'t end inside the date range)\n    \n\nExample:\n\n``` json\ncurl --location --request GET \'https://polkadot-rewards.datahub.figment.io/rewards\' \\\n-H \'apikey: $APIKEY\' \\\n-H "Content-Type: application/json" \\\n--data-raw \'{\n    "network": "polkadot",\n    "chain_id": "mainnet",\n    "accounts": [\n        "12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"\n    ],\n    "start_time": "2022-07-10",\n    "end_time": "2022-07-17",\n    "grouping": "epoch"\n}\'\n\n```\n\n### Response\n\n*   `network` and `chain_id` are the same as the request\n*   `accounts` returns an array of Stash Account public addresses\n*   `validator` returns the validator that tokens were staked to\n*   `time` and `epoch` reference the start of the daily or epoch bucket\n*   `rewards` is an array of objects with four components: `numeric` , `exp` and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric * 10^-exp`(`text` is the string version of this)\n    \n\nExample:\n\n``` json\n[\n    {\n        "accounts": [\n            "12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"\n        ],\n        "chain_id": "mainnet",\n        "rewards": [\n            {\n                "text": "4.43255269 DOT",\n                "currency": "DOT",\n                "numeric": 44325526900,\n                "exp": 10\n            }\n        ],\n        "epoch": "805",\n        "network": "polkadot",\n        "validator": "138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",\n        "time": "2022-08-16T15:36:18Z"\n    },\n    ...\n]\n\n```\n\n### Limitations\n\n*   The API returns rewards for Figment validators only\n*   The API returns rewards for the last 30 days\n*   Data is available approximatively an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.',request:{auth:{type:"apikey",apikey:{value:"{{API_KEY}}",key:"apikey"}},method:"POST",header:[],body:{network:"polkadot",chain_id:"mainnet",accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],start_time:"2022-08-28",end_time:"2022-08-30",grouping:"epoch"},url:"https://polkadot-rewards.datahub.figment.io/rewards"},interactive:!0,response:{name:"DOT",status:"OK",code:200,body:[{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"4.0480473284 DOT",currency:"DOT",numeric:40480473284,exp:10}],epoch:"806",network:"polkadot",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",time:"2022-08-17T15:36:18Z"},{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"3.98158356 DOT",currency:"DOT",numeric:39815835600,exp:10}],epoch:"807",network:"polkadot",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",time:"2022-08-18T15:36:18Z"},{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"5.0270357928 DOT",currency:"DOT",numeric:50270357928,exp:10}],epoch:"808",network:"polkadot",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",time:"2022-08-19T15:36:18Z"}]}}],service:"rewards-api",networks:[{label:"Ethereum",value:"ethereum"},{label:"Solana",value:"solana"},{label:"Polkadot",value:"polkadot"}],network:"polkadot",mdxType:"APIMethods"}))}h.isMDXComponent=!0}}]);