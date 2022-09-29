"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2438],{2750:(e,t,a)=>{a.d(t,{ZP:()=>c});var n=a(7462),o=(a(7294),a(3905)),l=a(5488),r=a(5162),s=a(7643);const i={toc:[{value:"Authentication",id:"authentication",level:3}]};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("div",null,"API calls require authentication with API key via ",(0,o.kt)("code",null,"Authorization")," ","request header or ",(0,o.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,o.kt)("strong",null,a.network," ",a.service)," ","endpoint, hosted at"," ",(0,o.kt)("code",null,a.url.replace(/(apikey\/[^\/]+\/*){1}/,"")),(0,o.kt)("br",null),(0,o.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,o.kt)(r.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,o.kt)(r.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,o.kt)(r.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}c.isMDXComponent=!0},3976:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6775);function l(e){let{network:t,networks:a,methods:l,service:r}=e;const s=(0,o.TH)(),i=(0,o.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{i.push(s.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},a.map((e=>n.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:s.hash.replace("#","")||"",onChange:e=>{i.push("#"+e.target.value)}},l.map((e=>n.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},4777:(e,t,a)=>{a.d(t,{S:()=>D});var n=a(7462),o=a(7294),l=a(7748),r=a(460),s=a.n(r),i=a(3746),c=a(6412);const u={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function d(e){let{children:t="",header:a,actions:l,disabled:r=!1,status:d,onValueChange:p}=e;const m=(0,c.p)(),b=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;const t=null==(e=b.current)?void 0:e.querySelector("textarea"),a=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",a),()=>t.removeEventListener("input",a)}),[]);return o.createElement("div",{ref:b},o.createElement(h,{actions:l,status:d},a),o.createElement("div",{className:u.Container},o.createElement(s(),{value:t,onValueChange:p,highlight:function(e){return void 0===e&&(e=""),o.createElement(i.ZP,(0,n.Z)({},i.lG,{theme:m,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:l,getLineProps:r,getTokenProps:s}=e;return o.createElement("div",{className:u.Code},l.map(((e,t)=>o.createElement("div",(0,n.Z)({key:t},r({line:e,key:t}),{className:u.Line}),o.createElement("span",{className:u.LineContent},e.map(((e,t)=>o.createElement("span",(0,n.Z)({key:t},s({token:e,key:t}))))))))))}))},disabled:r,ignoreTabKey:!0,padding:10,style:{...m.plain,overflow:"auto"},className:u.Editor})))}function h(e){let{children:t,actions:a=[],status:n}=e;return o.createElement("div",{className:u.Header,"data-status":n},o.createElement("span",null,t),o.createElement("span",{className:u.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:l=a}=e;return o.createElement("button",{className:u.HeaderButton,key:t+":"+a,title:a,onClick:n},l)}))))}var p=a(195);const m="overlayHeaderButton_IGf5";const b=function(e,t){const a=(0,o.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[l,r]=(0,o.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...l,fetchData:async function(n,o){void 0===o&&(o={}),r({type:"loading"});try{const l=await fetch(e+(n||""),{...t,...o});if(!l.ok){let e,t,a;try{a=JSON.parse(await l.text()),e=await l.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||l.statusText)}const s=await l.json();if(a.current)return;return r({type:"fetched",payload:s}),s}catch(l){if(a.current)return;return r({type:"error",payload:l.message}),null}}}};var y,g=a(7643),k=a(4672);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)}const f=e=>{let{title:t,titleId:a,...n}=e;return o.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?o.createElement("title",{id:a},t):null,y||(y=o.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var C;function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},S.apply(this,arguments)}const w=e=>{let{title:t,titleId:a,...n}=e;return o.createElement("svg",S({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?o.createElement("title",{id:a},t):null,C||(C=o.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function P(e){let{req:t,res:a,interactive:n}=e;const[l,r]=(0,o.useState)(E(t.body)),[s,i]=(0,o.useState)(t.query),[c,u]=(0,o.useState)(q(a.body)),h="string"==typeof t.body&&0==t.body.indexOf("query"),{data:y,error:v,loading:C,fetchData:S}=b(t.url,{method:t.method,headers:{"Content-Type":h?"application/graphql":"application/json"},body:E(t.body)}),[P,N]=(0,o.useState)(null);(0,o.useEffect)((()=>{C?N("LOADING"):v||null!=y&&y.error?N("ERROR"):y&&N("SUCCESS")}),[y,v,C]);const T=[n?{title:"Run request",onClick:async()=>{const e=await S(s,{body:l});e&&u(q(e))},Component:o.createElement(o.Fragment,null,o.createElement(f,null)," Run")}:null,{title:"Copy",onClick:()=>(0,p.Z)(l),Component:o.createElement(k.Z,{code:"",className:m})},n?{title:"Reset",onClick:()=>{N(null),i(t.query),r(E(t.body)),u(q(a.body))},Component:o.createElement(w,null)}:null].filter((e=>!!e));return o.createElement(o.Fragment,null,o.createElement(d,{header:"GET"===t.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:T,disabled:!n,onValueChange:e=>{n&&("GET"===t.method?i(e):"POST"===t.method&&r(e))}},"GET"===t.method?s:l),o.createElement(g.Z,{title:P?"Response":"Example Response",language:"json"},v?""+v:c))}function q(e){return JSON.stringify(e,null,2)}function E(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}var N=a(1099),T=a(3905);const L={toc:[]};function A(e){let{components:t,...a}=e;return(0,T.kt)("wrapper",(0,n.Z)({},L,a,{components:t,mdxType:"MDXLayout"}),(0,T.kt)("details",null,(0,T.kt)("summary",null,a.title),(0,T.kt)(N.D,{mdxType:"ReactMarkdown"},a.details)))}function H(e){let{content:t=""}=e;const[a,...n]=t.trim().split(/\n+/),l=n.join("\n");return o.createElement("div",null,o.createElement(N.D,null,a),o.createElement(A,{title:"View specification",details:l}))}A.isMDXComponent=!0;const Z="heading_REER";var x=a(9960);function R(e){let{name:t,content:a="",interactive:n,request:l,response:r}=e;return["Rewards (by epoch)","Rewards (daily)"].includes(t)&&(l.body={...l.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===t?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]}),o.createElement(o.Fragment,null,o.createElement("h2",{id:t.toLowerCase(),className:Z,"data-method":l.method},o.createElement(x.Z,{to:"#"+t.toLowerCase()},t)),o.createElement(H,{content:a}),o.createElement(P,{req:l,res:r,interactive:n}),o.createElement("hr",null))}function D(e){let{network:t,methods:a}=e;return o.createElement(o.Fragment,null,o.createElement("h3",null,"Available Methods"),a.map(((e,a)=>o.createElement(R,(0,n.Z)({key:t+a},e)))),o.createElement(l.Z,null))}},3106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var n=a(7462),o=(a(7294),a(3905)),l=a(4777),r=a(3976),s=a(2750);const i={title:"Mina GraphQL",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Node API - Mina GraphQL",image:"img/logo.svg",keywords:["Node API","Mina GraphQL"]},c="Node API - Mina GraphQL",u={unversionedId:"api-reference/node-api/mina-graphql",id:"api-reference/node-api/mina-graphql",title:"Mina GraphQL",description:"Node API - Mina GraphQL",source:"@site/docs/api-reference/node-api/mina-graphql.mdx",sourceDirName:"api-reference/node-api",slug:"/api-reference/node-api/mina-graphql",permalink:"/api-reference/node-api/mina-graphql",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Mina GraphQL",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Node API - Mina GraphQL",image:"img/logo.svg",keywords:["Node API","Mina GraphQL"]},sidebar:"docsSidebar"},d={},h=[],p={toc:h};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-api---mina-graphql"},"Node API - Mina GraphQL"),(0,o.kt)(r.Z,{service:"node-api",methods:[{name:"network status"},{name:"latest blocks"},{name:"current block"},{name:"snark pool"},{name:"account details"}],networks:[{label:"Arbitrum",value:"arbitrum"},{label:"Avalanche C-Chain",value:"avalanche-c-chain"},{label:"Avalanche P-Chain",value:"avalanche-p-chain"},{label:"Avalanche X-Chain",value:"avalanche-x-chain"},{label:"BNB",value:"bnb"},{label:"Celo",value:"celo"},{label:"Cosmos LCD",value:"cosmos-lcd"},{label:"Cosmos Tendermint RPC",value:"cosmos-tendermint-rpc"},{label:"Ethereum",value:"ethereum"},{label:"Fantom",value:"fantom"},{label:"Mina GraphQL",value:"mina-graphql"},{label:"NEAR",value:"near"},{label:"Optimism",value:"optimism"},{label:"Osmosis LCD",value:"osmosis-lcd"},{label:"Osmosis Tendermint RPC",value:"osmosis-tendermint-rpc"},{label:"Polygon",value:"polygon"},{label:"Solana",value:"solana"}],network:"mina-graphql",mdxType:"ApiReferenceNav"}),(0,o.kt)(s.ZP,{url:"https://mina-mainnet--graphql.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/graphql",network:"Mina Graphql",service:"Node API",mdxType:"MakingCalls"}),(0,o.kt)(l.S,{methods:[{name:"network status",content:"Check out the node/network status.\n\n### Parameters\n\n- None\n\n### Response\n\n- Return the node/network status `data` including `syncStatus`, `stateHash`, `numAccounts`, `chainId`, `commitId`, `catchupStatus` and `blockchainLength`.",request:{method:"POST",header:[],body:"query status {\n  daemonStatus {\n    syncStatus\n    stateHash\n    numAccounts\n    chainId\n    commitId\n    catchupStatus\n    blockchainLength\n  }\n}",url:"https://mina-mainnet--graphql.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/graphql"},interactive:!0,response:{name:"network status",status:"OK",code:200,body:{data:{daemonStatus:{syncStatus:"SYNCED",stateHash:"3NLEhHJKPTxhkh7dom7hpNeuoqejh9UsJADXFoQW6sX6DQNvqzzA",numAccounts:120343,chainId:"5f704cc0c82e0ed70e873f0893d7e06f148524e3f0bdae2afb02e7819a0c24d1",commitId:"f361ba19d78ba930b5b551f58d1a82942c0f724b",catchupStatus:["to_build_breadcrumb","to_initial_validate","finished","to_download","wait_for_parent","to_verify"],blockchainLength:174063}}}}},{name:"latest blocks",content:"Pull information about the latest 10 blocks.\n\n### Parameters\n\n- None\n\n### Response\n\n- Return `data` about the latest 10 blocks including `bestChain`, `stateHash`, `protocolState`, `consensusState` and `blockHeight`.",request:{method:"POST",header:[{key:"",value:"",type:"text",disabled:!0}],body:"query blocks {\n  bestChain(maxLength: 10) {\n    stateHash\n    protocolState {\n      consensusState {\n        blockHeight\n      }\n    }\n  }\n}",url:"https://mina-mainnet--graphql.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/graphql"},interactive:!0,response:{name:"latest blocks",status:"OK",code:200,body:{data:{bestChain:[{stateHash:"3NKXswQQ5Rp7pkdDkR4rnzj3dtMVBeyYndpxoyZHK1isyvjiaV3C",protocolState:{consensusState:{blockHeight:"174021"}}},{stateHash:"3NKNoWEZ9uLoZcD41sT66yRYb3PyMBAYCLTSTadMZ2CBmW3LeVtV",protocolState:{consensusState:{blockHeight:"174022"}}},{stateHash:"3NLdhi3CUrEXFBNGT2DVQ8t2Gyt4HESietjLwar6U3viNX7HkKSM",protocolState:{consensusState:{blockHeight:"174023"}}},{stateHash:"3NLtQv77sdRMsm3ozrjwDVE7fizt3qki5udrSjRW7eodwmhhiYWr",protocolState:{consensusState:{blockHeight:"174024"}}},{stateHash:"3NKTKWbQCdLwVAshtHgzWSHXJfPgo1SBo11bzDC4DP7NyuWRxA8J",protocolState:{consensusState:{blockHeight:"174025"}}},{stateHash:"3NLu1Tm9Yk8gtfuqj2BzBFLdSeyAz2xGLx1BvhqdxP2HzRwPy82T",protocolState:{consensusState:{blockHeight:"174026"}}},{stateHash:"3NLZqrjHqCGxgwCGnaccmzfgVrc4JXTZAWT2RyVJQDRumDaQfwvK",protocolState:{consensusState:{blockHeight:"174027"}}},{stateHash:"3NLHjoqFfaGfAYhQ7KBrcLGXWJWm2P1xdL51vDArPw5a5gBhAuVL",protocolState:{consensusState:{blockHeight:"174028"}}},{stateHash:"3NLc5J2w9ZRaEWnG1oXnPdAXwvGZ7fFoQTRbkMLHP2VDKQoqvkZX",protocolState:{consensusState:{blockHeight:"174029"}}},{stateHash:"3NLxJYFjFyizop6BGYYDiUmNbcLDiMVJwzRefNnJfWaCAwMThJ7F",protocolState:{consensusState:{blockHeight:"174030"}}}]}}}},{name:"current block",content:"Pull the latest canonical block and its information.\n\n### Parameters\n\n- None\n\n### Response\n\n- Return latest canonical block `data` including `bestChain`, `creator`, `stateHash`, `stateHashField`, `protocolState`, `transactions` and `coinbase`.",request:{method:"POST",header:[],body:"query block {\n  bestChain(maxLength: 1) {\n    creator\n    stateHash\n    stateHashField\n    protocolState {\n      blockchainState {\n        date\n        snarkedLedgerHash\n      }\n      previousStateHash\n      consensusState {\n        blockHeight\n        blockchainLength\n        epoch\n        slot\n        totalCurrency\n      }\n    }\n    transactions {\n      userCommands {\n        amount\n        fee\n        from\n        hash\n      }\n      coinbase\n    }\n  }\n}",url:"https://mina-mainnet--graphql.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/graphql"},interactive:!0,response:{name:"current block",status:"OK",code:200,body:{data:{bestChain:[{creator:"B62qkXU9mZxcbqocqygDYBFeGFekUVGvJckucWGZgHnfB6znAY6z3MJ",stateHash:"3NLAB9Gpgji8wgCAWE6n4Y7dqky4ba6Va4RjPZNt3BpiufRw8v1K",stateHashField:"5971089098078803254696870602397178339214779186567677717926839150377122347924",protocolState:{blockchainState:{date:"1662116580000",snarkedLedgerHash:"jxDaErQCbbQPSGDGNKSwkE5EQiUS3cQsc1Dg7Eki3ZZAZkrzSMz"},previousStateHash:"3NLxJYFjFyizop6BGYYDiUmNbcLDiMVJwzRefNnJfWaCAwMThJ7F",consensusState:{blockHeight:"174031",blockchainLength:"174031",epoch:"35",slot:"6641",totalCurrency:"950748652840039233"}},transactions:{userCommands:[{amount:"1000",fee:"1000000",from:"B62qre3erTHfzQckNuibViWQGyyKwZseztqrjPZBv6SQF384Rg6ESAy",hash:"CkpYia8QTJ92dvbroUqi9zyrPPzuHMfWWBW36iKQnaxL8qMqiUNqm"},{amount:"0",fee:"1100000",from:"B62qkhUBnAv3wm7vbL8WpyhEPdecWTAyU2mFGouE8HaCXtbHueDTQWZ",hash:"CkpZXMYWp15Qqxiez3V4QCeL8AL72KABbDh2rTPyxj4Ky9UPfy6Kk"}],coinbase:"720000000000"}}]}}}},{name:"snark pool",content:"Pull a list of pending snark jobs.\n\n### Parameters\n\n- None\n\n### Response\n\n- Return a list of pending snark jobs `data` including `snarkPool`, `fee`, `forever` and `workIds`.",request:{method:"POST",header:[],body:"query snarkPool {\n  snarkPool {\n    fee\n    prover\n    workIds\n  }\n}",url:"https://mina-mainnet--graphql.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/graphql"},interactive:!0,response:{name:"snark pool",status:"OK",code:200,body:{data:{snarkPool:[{fee:"0",prover:"B62qs2Lw5WZNSjd8eHBUZXFYyRjV8oKtrZMFDn1S1Ye62G71xCQJMYM",workIds:[84927711,949618782]}]}}}},{name:"account details",content:'Pull the account details for the given `account(publicKey: " ")`.\n\n### Parameters\n\nGraphQL query params - \n\n- `account(publicKey: " ")` - Public key of the account for which you want to fetch the details.\n\n### Response\n\n- Return the account details `data` including `delegate`, `balance`, `blockHeight`, `liquid`, `locked`, `stateHash`, `total`, `unknown`, `delegators`, `publicKey`, `stakingActive`, `votingFor` and `isDisabled`.',request:{method:"POST",header:[],body:'query accDetails {\n  account(publicKey: "B62qix9vooX5NqJYo8nT6xWqCeQu5AJoS1ng6FRnUpVAra6PAZZ1CU4") {\n    delegate\n    balance {\n      blockHeight\n      liquid\n      locked\n      stateHash\n      total\n      unknown\n    }\n    delegators {\n      publicKey\n    }\n    publicKey\n    stakingActive\n    votingFor\n    isDisabled\n  }\n}',url:"https://mina-mainnet--graphql.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/graphql"},interactive:!0,response:{name:"account details",status:"OK",code:200,body:{data:{account:{delegate:"B62qix9vooX5NqJYo8nT6xWqCeQu5AJoS1ng6FRnUpVAra6PAZZ1CU4",balance:{blockHeight:"174032",liquid:"1901008579",locked:"0",stateHash:"3NLxt6diQixehDVFeDPrXP27UDaPdjQ9oqgdZ94CfDZ5uQAcUQQX",total:"1901008579",unknown:"1901008579"},delegators:[],publicKey:"B62qix9vooX5NqJYo8nT6xWqCeQu5AJoS1ng6FRnUpVAra6PAZZ1CU4",stakingActive:!1,votingFor:"3NK2tkzqqK5spR2sZ7tujjqPksL45M3UUrcA4WhCkeiPtnugyE2x",isDisabled:!1}}}}}],service:"node-api",networks:[{label:"Arbitrum",value:"arbitrum"},{label:"Avalanche C-Chain",value:"avalanche-c-chain"},{label:"Avalanche P-Chain",value:"avalanche-p-chain"},{label:"Avalanche X-Chain",value:"avalanche-x-chain"},{label:"BNB",value:"bnb"},{label:"Celo",value:"celo"},{label:"Cosmos LCD",value:"cosmos-lcd"},{label:"Cosmos Tendermint RPC",value:"cosmos-tendermint-rpc"},{label:"Ethereum",value:"ethereum"},{label:"Fantom",value:"fantom"},{label:"Mina GraphQL",value:"mina-graphql"},{label:"NEAR",value:"near"},{label:"Optimism",value:"optimism"},{label:"Osmosis LCD",value:"osmosis-lcd"},{label:"Osmosis Tendermint RPC",value:"osmosis-tendermint-rpc"},{label:"Polygon",value:"polygon"},{label:"Solana",value:"solana"}],network:"mina-graphql",mdxType:"APIMethods"}))}m.isMDXComponent=!0}}]);