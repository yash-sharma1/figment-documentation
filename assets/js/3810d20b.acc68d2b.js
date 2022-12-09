(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7027],{2750:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>d});var n=a(7462),r=(a(7294),a(3905)),s=a(5488),o=a(5162),l=a(7643);const i={toc:[{value:"Authentication",id:"authentication",level:3}]};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,a.network," ",a.service)," ","endpoint, hosted at ",(0,r.kt)("code",null,a.url),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${a.url}${a.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(o.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${a.url}/apikey/{{apikey}}${a.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(o.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${a.url}${a.route}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'`)),(0,r.kt)(o.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${a.url}/apikey/{{apikey}}${a.route}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'`))))}d.isMDXComponent=!0},3976:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(7294),r=a(6550);function s(e){let{network:t,networks:a,methods:s,service:o}=e;const l=(0,r.TH)(),i=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{i.push(l.pathname.replace(/\/[^\/]+$/,`/${e.target.value}`))}},a.map((e=>n.createElement("option",{key:`${e.value}--n-option`,value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:l.hash.replace("#","")||"",onChange:e=>{i.push(`#${e.target.value}`)}},s.map((e=>n.createElement("option",{key:`${e.name}--m-hash`,value:e.name.toLowerCase()},e.name)))))}},7297:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{network:t,service:a}=e;return(0,n.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=t;let n=e.previousElementSibling;n=n.cloneNode(!0),n.querySelector(".breadcrumbs__link span").innerHTML=a.label,n.querySelector(".breadcrumbs__link").href=a.link,e.insertAdjacentElement("beforebegin",n)}),[t]),n.createElement(n.Fragment,null)}},9638:(e,t,a)=>{"use strict";a.d(t,{S:()=>q});var n=a(7462),r=a(7294),s=a(8538),o=a(7748),l=a(381),i=a.n(l);const d={days:()=>({start:new Date(Date.now()-864e5).toISOString().split("T")[0],end:(new Date).toISOString().split("T")[0]}),polkadot(){const e=i()("2022-10-26","YYYY-MM-DD"),t=i()().diff(e,"days")+1,a=876+Math.ceil(1*t);return{start:a-30,end:a}},solana(){const e=Math.ceil(10.5),t=i()("2022-10-25","YYYY-MM-DD"),a=i()().diff(t,"days")+1,n=363+Math.ceil(.35*a);return{start:n-e,end:n}},near(){const e=114300,t=Math.ceil(800100),a=i()("2022-10-25","YYYY-MM-DD"),n=i()().diff(a,"days")+1,r=76953090+Math.ceil(n*e);return{start:r-t,end:r}}};var c=a(460),u=a.n(c),m=a(3746),p=a(6412);const h={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function y(e){let{children:t="",header:a,actions:s,disabled:o=!1,status:l,onValueChange:i}=e;const d=(0,p.p)(),c=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=c.current?.querySelector("textarea"),t=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return e.addEventListener("input",t),()=>e.removeEventListener("input",t)}),[]);return r.createElement("div",{ref:c},r.createElement(j,{actions:s,status:l},a),r.createElement("div",{className:h.Container},r.createElement(u(),{value:t,onValueChange:i,highlight:function(e){return void 0===e&&(e=""),r.createElement(m.ZP,(0,n.Z)({},m.lG,{theme:d,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:s,getLineProps:o,getTokenProps:l}=e;return r.createElement("div",{className:h.Code},s.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},o({line:e,key:t}),{className:h.Line}),r.createElement("span",{className:h.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},l({token:e,key:t}))))))))))}))},disabled:o,ignoreTabKey:!0,padding:10,style:{...d.plain,overflow:"auto"},className:h.Editor})))}function j(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:h.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:h.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:s=a}=e;return r.createElement("button",{className:h.HeaderButton,key:`${t}:${a}`,title:a,onClick:n},s)}))))}var k=a(195);const b="overlayHeaderButton_IGf5";const f=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[s,o]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...s,fetchData:async function(n,r){void 0===r&&(r={}),o({type:"loading"});try{const s=await fetch(e+(n?`/${n}`:""),{...t,...r});if(!s.ok){let e,t,a;try{a=JSON.parse(await s.text()),e=await s.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||s.statusText)}const l=await s.json();if(a.current)return;return o({type:"fetched",payload:l}),l}catch(s){if(a.current)return;return o({type:"error",payload:s.message}),null}}}};var v,g=a(7643),w=a(4672);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const T=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,v||(v=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var C;function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},P.apply(this,arguments)}const S=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",P({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,C||(C=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function x(e){let{req:t,res:a,interactive:n,endpoint:s}=e;const[o,l]=(0,r.useState)(N(t.body)),[i,d]=(0,r.useState)(t.query),[c,u]=(0,r.useState)(O(a.body)),m="string"==typeof t.body&&0==t.body.indexOf("query"),{data:p,error:h,loading:j,fetchData:v}=f(s,{method:t.method,headers:{...t.headers,"Content-Type":m?"application/graphql":"application/json"},body:N(t.body)}),[E,C]=(0,r.useState)(null);(0,r.useEffect)((()=>{j?C("LOADING"):h||p?.error?C("ERROR"):p&&C("SUCCESS")}),[p,h,j]);const P=[n?{title:"Run request",onClick:async()=>{const e=await v(i,{body:o});e&&u(O(e))},Component:r.createElement(r.Fragment,null,r.createElement(T,null)," Run")}:null,{title:"Copy",onClick:()=>(0,k.Z)(o),Component:r.createElement(w.Z,{code:"",className:b})},n?{title:"Reset",onClick:()=>{C(null),d(t.query),l(N(t.body)),u(O(a.body))},Component:r.createElement(S,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(y,{header:"GET"===t.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:P,disabled:!n,onValueChange:e=>{n&&("GET"===t.method?d(e):"POST"===t.method&&l(e))}},"GET"===t.method?i:o),r.createElement(g.Z,{title:E?"Response":"Example Response",language:"json"},h?`${h}`:c))}function O(e){return JSON.stringify(e,null,2)}function N(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const M="heading_REER";var Z=a(9960),R=a(3905);const _={toc:[]};function A(e){let{components:t,...a}=e;return(0,R.kt)("wrapper",(0,n.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,R.kt)("details",{open:a.accordionOpen?"open":void 0},(0,R.kt)("summary",null,(0,R.kt)("span",{className:"open"},"Specification"),(0,R.kt)("span",{className:"closed"},"View Specification")),(0,R.kt)(s.D,{mdxType:"ReactMarkdown"},a.details)))}function z(e){let{name:t,content:a="",interactive:n,network:o,request:l,accordionOpen:i=!1,response:c,endpoint:u}=e;const m=u.includes("rewards-api"),p=["by day","account","address"].find((e=>t.includes(e))),h=["by epoch","by era"].find((e=>t.includes(e)))||t.startsWith("SOL");if(m&&h){const{start:e,end:t}=d[o]();l.body={...l.body,start:e,end:t}}else if(m&&p){const{start:e,end:t}=d.days();l.body={...l.body,start:e,end:t}}const[y,...j]=a.trim().split(/\n+/),k=j.join("\n");return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:M,"data-method":l.method},r.createElement(Z.Z,{to:`#${t.toLowerCase()}`},t)),r.createElement(s.D,null,y),r.createElement(x,{req:l,res:c,interactive:n,endpoint:u}),r.createElement(A,{details:k,accordionOpen:i}),r.createElement("hr",null))}function q(e){let{network:t,methods:a,service:s,proxy:l}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(z,(0,n.Z)({key:t+a},e,{network:t,endpoint:`${l}/${s}/${t}`,accordionOpen:"node-api"!==s})))),r.createElement(o.Z,null))}A.isMDXComponent=!0},5430:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),s=a(9638),o=a(3976),l=(a(7297),a(2750));const i={title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Polkadot",image:"img/logo.svg",keywords:["Rewards API","Polkadot"]},d="Rewards API - Polkadot",c={unversionedId:"api-reference/rewards-api/polkadot",id:"api-reference/rewards-api/polkadot",title:"Polkadot",description:"Rewards API - Polkadot",source:"@site/docs/api-reference/rewards-api/polkadot.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/polkadot",permalink:"/api-reference/rewards-api/polkadot",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Polkadot",image:"img/logo.svg",keywords:["Rewards API","Polkadot"]},sidebar:"docsSidebar"},u={},m=[],p={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---polkadot"},"Rewards API - Polkadot"),(0,r.kt)(o.Z,{service:"rewards-api",methods:[{name:"Rewards by era"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"polkadot",mdxType:"ApiReferenceNav"}),(0,r.kt)(l.ZP,{url:"https://polkadot-rewards.datahub.figment.io",network:"Polkadot",service:"Rewards API",route:"/v2/rewards",mdxType:"MakingCalls"}),(0,r.kt)(s.S,{methods:[{name:"Rewards by era",content:"Returns net delegator rewards (post-on-chain validator commission) by epoch\n\n### Parameters\n\n*   `accounts` takes in an array of stash accounts addresses (required)\n*   `start` and `end` are era numbers, both inclusive (required)\n    \n\n### Response\n\nThe response is broken down between `meta` and `data`\n\n*   `meta`\n    *   `network` is the name of the network queried\n    *   `period_unit` is the unit of the `period` field under `data`\n*   `data` is an array of objects - one for each era - containing:\n    *   `validator` returns the validator that distributed the rewards\n    *   `period` is the era number\n    *   `timestamp` is the timestamp of the end of the era\n    *   `rewards` is an array of objects with four components: `numeric`, `exp`, and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric x 10^-exp`(`text` is the string version of this)\n\n### Limitations\n\n*   The API returns rewards for Figment validators only\n*   Data is available approximately an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.",request:{auth:{type:"noauth"},method:"POST",header:[],body:{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],start:845,end:847},url:"https://polkadot-rewards.datahub.figment.io",headers:{},query:""},interactive:!0,response:{name:"by era",status:"OK",code:200,body:{data:[{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"4.4045175383 DOT",currency:"DOT",numeric:44045175383,exp:10}],period:"845",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",timestamp:"2022-09-25T15:36:18Z"},{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"3.6694634053 DOT",currency:"DOT",numeric:36694634053,exp:10}],period:"846",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",timestamp:"2022-09-26T15:36:18Z"}],meta:{network:"polkadot",period_unit:"era"}}}}],service:"rewards-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"polkadot",proxy:"https://api-service-proxy.figment-secops.workers.dev",mdxType:"APIMethods"}))}h.isMDXComponent=!0},6700:(e,t,a)=>{var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=6700}}]);