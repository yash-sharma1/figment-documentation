(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7027],{72750:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>d});var n=a(87462),r=(a(67294),a(3905)),s=a(65488),o=a(85162),l=a(57643);const i={toc:[]};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("span",{className:"open"},"API Authentication"),(0,r.kt)("span",{className:"closed"},"Click to view API Authentication details")),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,a.network," ",a.service)," ","endpoint, hosted at ",(0,r.kt)("code",null,a.url),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${a.url}${a.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(o.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${a.url}/apikey/{{apikey}}${a.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(o.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${a.url}${a.route}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'`)),(0,r.kt)(o.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${a.url}/apikey/{{apikey}}${a.route}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'`)))))}d.isMDXComponent=!0},33976:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),r=a(16550);function s(e){let{network:t,networks:a,methods:s,service:o}=e;const l=(0,r.TH)(),i=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{i.push(l.pathname.replace(/\/[^\/]+$/,`/${e.target.value}`))}},a.map((e=>n.createElement("option",{key:`${e.value}--n-option`,value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:l.hash.replace("#","")||"",onChange:e=>{i.push(`#${e.target.value}`)}},s.map((e=>n.createElement("option",{key:`${e.name}--m-hash`,value:e.name.toLowerCase()},e.name)))))}},27297:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{network:t,service:a}=e;return(0,n.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=t;let n=e.previousElementSibling;n=n.cloneNode(!0),n.querySelector(".breadcrumbs__link span").innerHTML=a.label,n.querySelector(".breadcrumbs__link").href=a.link,e.insertAdjacentElement("beforebegin",n)}),[t]),n.createElement(n.Fragment,null)}},89638:(e,t,a)=>{"use strict";a.d(t,{S:()=>z});var n=a(87462),r=a(67294),s=a(58538),o=a(67748),l=a(30381),i=a.n(l);const d={days:()=>({start:new Date(Date.now()-864e5).toISOString().split("T")[0],end:(new Date).toISOString().split("T")[0]}),polkadot(){const e=i()("2022-10-26","YYYY-MM-DD"),t=i()().diff(e,"days")+1,a=876+Math.ceil(1*t);return{start:a-30,end:a}},solana(){const e=Math.ceil(10.5),t=i()("2022-10-25","YYYY-MM-DD"),a=i()().diff(t,"days")+1,n=363+Math.ceil(.35*a);return{start:n-e,end:n}},near(){const e=4593.6*25,t=Math.ceil(7*e),a=i()("2022-10-25","YYYY-MM-DD"),n=i()().diff(a,"days")+1,r=76953090+Math.ceil(n*e);return{start:r-t-Math.ceil(100*e),end:r+Math.ceil(100*e)}}};var c=a(40460),u=a.n(c),m=a(23746),p=a(66412);const h={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function y(e){let{children:t="",header:a,actions:s,disabled:o=!1,status:l,onValueChange:i}=e;const d=(0,p.p)(),c=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=c.current?.querySelector("textarea"),t=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return e.addEventListener("input",t),()=>e.removeEventListener("input",t)}),[]);return r.createElement("div",{ref:c},r.createElement(j,{actions:s,status:l},a),r.createElement("div",{className:h.Container},r.createElement(u(),{value:t,onValueChange:i,highlight:function(e){return void 0===e&&(e=""),r.createElement(m.ZP,(0,n.Z)({},m.lG,{theme:d,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:s,getLineProps:o,getTokenProps:l}=e;return r.createElement("div",{className:h.Code},s.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},o({line:e,key:t}),{className:h.Line}),r.createElement("span",{className:h.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},l({token:e,key:t}))))))))))}))},disabled:o,ignoreTabKey:!0,padding:10,style:{...d.plain,overflow:"auto"},className:h.Editor})))}function j(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:h.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:h.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:s=a}=e;return r.createElement("button",{className:h.HeaderButton,key:`${t}:${a}`,title:a,onClick:n},s)}))))}var k=a(10195);const f="overlayHeaderButton_IGf5";const b=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[s,o]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...s,fetchData:async function(n,r){void 0===r&&(r={}),o({type:"loading"});try{const s=await fetch(e+(n?`/${n}`:""),{...t,...r});if(!s.ok){let e,t,a;try{a=JSON.parse(await s.text()),e=await s.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||s.statusText)}const l=await s.json();if(a.current)return;return o({type:"fetched",payload:l}),l}catch(s){if(a.current)return;return o({type:"error",payload:s.message}),null}}}};var v,g=a(57643),w=a(44672);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const T=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,v||(v=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var C;function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},P.apply(this,arguments)}const x=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",P({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,C||(C=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function S(e){let{req:t,res:a,interactive:n,endpoint:s}=e;const[o,l]=(0,r.useState)(N(t.body)),[i,d]=(0,r.useState)(t.query),[c,u]=(0,r.useState)(O(a.body)),m="string"==typeof t.body&&0==t.body.indexOf("query"),{data:p,error:h,loading:j,fetchData:v}=b(s,{method:t.method,headers:{...t.headers,"Content-Type":m?"application/graphql":"application/json"},body:N(t.body)}),[E,C]=(0,r.useState)(null);(0,r.useEffect)((()=>{j?C("LOADING"):h||p?.error?C("ERROR"):p&&C("SUCCESS")}),[p,h,j]);const P=[n?{title:"Run request",onClick:async()=>{const e=await v(i,{body:o});e&&u(O(e))},Component:r.createElement(r.Fragment,null,r.createElement(T,null)," Run")}:null,{title:"Copy",onClick:()=>(0,k.Z)(o),Component:r.createElement(w.Z,{code:"",className:f})},n?{title:"Reset",onClick:()=>{C(null),d(t.query),l(N(t.body)),u(O(a.body))},Component:r.createElement(x,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(y,{header:["GET","DELETE"].indexOf(t.method)>-1?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:P,disabled:!n,onValueChange:e=>{n&&(["GET","DELETE"].indexOf(t.method)>-1?d(e):"POST"===t.method&&l(e))}},["GET","DELETE"].indexOf(t.method)>-1?i:o),r.createElement(g.Z,{title:E?"Response":"Example Response",language:"json"},h?`${h}`:c))}function O(e){return JSON.stringify(e,null,2)}function N(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const M="heading_REER";var Z=a(39960),A=a(3905);const R={toc:[]};function _(e){let{components:t,...a}=e;return(0,A.kt)("wrapper",(0,n.Z)({},R,a,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("details",{open:a.accordionOpen?"open":void 0},(0,A.kt)("summary",null,(0,A.kt)("span",{className:"open"},"Specification"),(0,A.kt)("span",{className:"closed"},"View Specification")),(0,A.kt)(s.D,{mdxType:"ReactMarkdown"},a.details)))}function D(e){let{name:t,content:a="",interactive:n,network:o,request:l,accordionOpen:i=!1,response:c,endpoint:u}=e;const m=u.includes("rewards-api"),p=["by day","account","address"].find((e=>t.includes(e))),h=["by epoch","by era"].find((e=>t.includes(e)))||t.startsWith("SOL");if(m&&h){const{start:e,end:t}=d[o]();l.body={...l.body,start:e,end:t}}else if(m&&p){const{start:e,end:t}=d.days();l.body={...l.body,start:e,end:t}}const[y,...j]=a.trim().split(/\n+/),k=j.join("\n");return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:M,"data-method":l.method},r.createElement(Z.Z,{to:`#${t.toLowerCase()}`},t)),r.createElement(s.D,null,y),r.createElement(S,{req:l,res:c,interactive:n,endpoint:u}),r.createElement(_,{details:k,accordionOpen:i}),r.createElement("hr",null))}function z(e){let{network:t,methods:a,service:s,proxy:l}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(D,(0,n.Z)({key:t+a},e,{network:t,endpoint:`${l}/${s}/${t}`,accordionOpen:"node-api"!==s})))),r.createElement(o.Z,null))}_.isMDXComponent=!0},15430:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),s=a(89638),o=a(33976),l=(a(27297),a(72750));const i={title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Polkadot",image:"img/logo.svg",keywords:["Rewards API","Polkadot"]},d="Rewards API - Polkadot",c={unversionedId:"api-reference/rewards-api/polkadot",id:"api-reference/rewards-api/polkadot",title:"Polkadot",description:"Rewards API - Polkadot",source:"@site/docs/api-reference/rewards-api/polkadot.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/polkadot",permalink:"/api-reference/rewards-api/polkadot",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Polkadot",image:"img/logo.svg",keywords:["Rewards API","Polkadot"]},sidebar:"docsSidebar"},u={},m=[],p={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---polkadot"},"Rewards API - Polkadot"),(0,r.kt)(o.Z,{service:"rewards-api",methods:[{name:"Rewards by era"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"polkadot",mdxType:"ApiReferenceNav"}),(0,r.kt)(l.ZP,{url:"https://polkadot-rewards.datahub.figment.io",network:"Polkadot",service:"Rewards API",route:"/v2/rewards",mdxType:"MakingCalls"}),(0,r.kt)(s.S,{methods:[{name:"Rewards by era",content:"Returns net delegator rewards (post-on-chain validator commission) by epoch\n\n### Parameters\n\n*   `accounts` takes in an array of stash accounts addresses (required)\n*   `start` and `end` are era numbers, both inclusive (required)\n    \n\n### Response\n\nThe response is broken down between `meta` and `data`\n\n*   `meta`\n    *   `network` is the name of the network queried\n    *   `period_unit` is the unit of the `period` field under `data`\n*   `data` is an array of objects - one for each era - containing:\n    *   `validator` returns the validator that distributed the rewards\n    *   `period` is the era number\n    *   `timestamp` is the timestamp of the end of the era\n    *   `rewards` is an array of objects with four components: `numeric`, `exp`, and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric x 10^-exp`(`text` is the string version of this)\n\n### Limitations\n\n*   The API returns rewards for Figment validators only\n*   Data is available approximately an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.",request:{auth:{type:"noauth"},method:"POST",header:[],body:{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],start:845,end:847},url:"https://polkadot-rewards.datahub.figment.io",headers:{},query:""},interactive:!0,response:{name:"by era",status:"OK",code:200,body:{data:[{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"4.4045175383 DOT",currency:"DOT",numeric:44045175383,exp:10}],period:"845",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",timestamp:"2022-09-25T15:36:18Z"},{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"3.6694634053 DOT",currency:"DOT",numeric:36694634053,exp:10}],period:"846",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",timestamp:"2022-09-26T15:36:18Z"}],meta:{network:"polkadot",period_unit:"era"}}}}],service:"rewards-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"polkadot",proxy:"https://api-service-proxy.figment-secops.workers.dev",mdxType:"APIMethods"}))}h.isMDXComponent=!0},46700:(e,t,a)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=46700}}]);