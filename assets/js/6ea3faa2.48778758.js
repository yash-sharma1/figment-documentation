(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8232],{72750:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(65488),o=n(85162),l=n(57643);const i={toc:[]};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("span",{className:"open"},"API Authentication"),(0,r.kt)("span",{className:"closed"},"Click to view API Authentication details")),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,n.network," ",n.service)," ","endpoint, hosted at ",(0,r.kt)("code",null,n.url),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${n.url}${n.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(o.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},`fetch("${n.url}/apikey/{{apikey}}${n.route}", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        "Content-Type": "application/json" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})`)),(0,r.kt)(o.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${n.url}${n.route}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'`)),(0,r.kt)(o.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"bash",mdxType:"CodeBlock"},`curl -X POST '${n.url}/apikey/{{apikey}}${n.route}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'`)))))}c.isMDXComponent=!0},33976:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),r=n(16550);function s(e){let{network:t,networks:n,methods:s,service:o}=e;const l=(0,r.TH)(),i=(0,r.k6)();return a.createElement("div",null,a.createElement("label",null,"Change Network: "),a.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{i.push(l.pathname.replace(/\/[^\/]+$/,`/${e.target.value}`))}},n.map((e=>a.createElement("option",{key:`${e.value}--n-option`,value:e.value},e.label)))),a.createElement("label",null," Jump to: "),a.createElement("select",{className:"custom-select",defaultValue:l.hash.replace("#","")||"",onChange:e=>{i.push(`#${e.target.value}`)}},s.map((e=>a.createElement("option",{key:`${e.name}--m-hash`,value:e.name.toLowerCase()},e.name)))))}},27297:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{network:t,service:n}=e;return(0,a.useEffect)((()=>{const e=document.querySelector(".breadcrumbs__item.breadcrumbs__item--active");if(!e)return;e.querySelector("span.breadcrumbs__link").innerHTML=t;let a=e.previousElementSibling;a=a.cloneNode(!0),a.querySelector(".breadcrumbs__link span").innerHTML=n.label,a.querySelector(".breadcrumbs__link").href=n.link,e.insertAdjacentElement("beforebegin",a)}),[t]),a.createElement(a.Fragment,null)}},89638:(e,t,n)=>{"use strict";n.d(t,{S:()=>D});var a=n(87462),r=n(67294),s=n(58538),o=n(67748),l=n(30381),i=n.n(l);const c={days:()=>({start:new Date(Date.now()-864e5).toISOString().split("T")[0],end:(new Date).toISOString().split("T")[0]}),polkadot(){const e=i()("2022-10-26","YYYY-MM-DD"),t=i()().diff(e,"days")+1,n=876+Math.ceil(1*t);return{start:n-30,end:n}},solana(){const e=Math.ceil(10.5),t=i()("2022-10-25","YYYY-MM-DD"),n=i()().diff(t,"days")+1,a=363+Math.ceil(.35*n);return{start:a-e,end:a}},near(){const e=4593.6*25,t=Math.ceil(7*e),n=i()("2022-10-25","YYYY-MM-DD"),a=i()().diff(n,"days")+1,r=76953090+Math.ceil(a*e);return{start:r-t-Math.ceil(100*e),end:r+Math.ceil(100*e)}}};var d=n(40460),u=n.n(d),m=n(23746),p=n(66412);const h={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function y(e){let{children:t="",header:n,actions:s,disabled:o=!1,status:l,onValueChange:i}=e;const c=(0,p.p)(),d=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=d.current?.querySelector("textarea"),t=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return e.addEventListener("input",t),()=>e.removeEventListener("input",t)}),[]);return r.createElement("div",{ref:d},r.createElement(j,{actions:s,status:l},n),r.createElement("div",{className:h.Container},r.createElement(u(),{value:t,onValueChange:i,highlight:function(e){return void 0===e&&(e=""),r.createElement(m.ZP,(0,a.Z)({},m.lG,{theme:c,code:e,language:"json"}),(e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:l}=e;return r.createElement("div",{className:h.Code},s.map(((e,t)=>r.createElement("div",(0,a.Z)({key:t},o({line:e,key:t}),{className:h.Line}),r.createElement("span",{className:h.LineContent},e.map(((e,t)=>r.createElement("span",(0,a.Z)({key:t},l({token:e,key:t}))))))))))}))},disabled:o,ignoreTabKey:!0,padding:10,style:{...c.plain,overflow:"auto"},className:h.Editor})))}function j(e){let{children:t,actions:n=[],status:a}=e;return r.createElement("div",{className:h.Header,"data-status":a},r.createElement("span",null,t),r.createElement("span",{className:h.Actions},n.map(((e,t)=>{let{title:n,onClick:a,Component:s=n}=e;return r.createElement("button",{className:h.HeaderButton,key:`${t}:${n}`,title:n,onClick:a},s)}))))}var f=n(10195);const b="overlayHeaderButton_IGf5";const k=function(e,t){const n=(0,r.useRef)(!1),a={error:void 0,data:void 0,loading:!1},[s,o]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...a,loading:!0};case"fetched":return{...a,data:t.payload,loading:!1};case"error":return{...a,error:t.payload,loading:!1};default:return e}}),a);return{...s,fetchData:async function(a,r){void 0===r&&(r={}),o({type:"loading"});try{const s=await fetch(e+(a?`/${a}`:""),{...t,...r});if(!s.ok){let e,t,n;try{n=JSON.parse(await s.text()),e=await s.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(n,null,2)||s.statusText)}const l=await s.json();if(n.current)return;return o({type:"fetched",payload:l}),l}catch(s){if(n.current)return;return o({type:"error",payload:s.message}),null}}}};var g,v=n(57643),w=n(44672);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}const T=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,g||(g=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var C;function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}const x=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",N({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,C||(C=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function R(e){let{req:t,res:n,interactive:a,endpoint:s}=e;const[o,l]=(0,r.useState)(A(t.body)),[i,c]=(0,r.useState)(t.query),[d,u]=(0,r.useState)(S(n.body)),m="string"==typeof t.body&&0==t.body.indexOf("query"),{data:p,error:h,loading:j,fetchData:g}=k(s,{method:t.method,headers:{...t.headers,"Content-Type":m?"application/graphql":"application/json"},body:A(t.body)}),[E,C]=(0,r.useState)(null);(0,r.useEffect)((()=>{j?C("LOADING"):h||p?.error?C("ERROR"):p&&C("SUCCESS")}),[p,h,j]);const N=[a?{title:"Run request",onClick:async()=>{const e=await g(i,{body:o});s.includes("rewards")&&e.data&&e.data.length>10&&(e.data=e.data.slice(0,10)),e&&u(S(e))},Component:r.createElement(r.Fragment,null,r.createElement(T,null)," Run")}:null,{title:"Copy",onClick:()=>(0,f.Z)(o),Component:r.createElement(w.Z,{code:"",className:b})},a?{title:"Reset",onClick:()=>{C(null),c(t.query),l(A(t.body)),u(S(n.body))},Component:r.createElement(x,null)}:null].filter((e=>!!e)),R=s.includes("rewards")?"Sample Reponse":"Response";return r.createElement(r.Fragment,null,r.createElement(y,{header:["GET","DELETE"].indexOf(t.method)>-1?"Request Query "+(a?"(try it)":""):"Request Body "+(a?"(try it)":""),actions:N,disabled:!a,onValueChange:e=>{a&&(["GET","DELETE"].indexOf(t.method)>-1?c(e):"POST"===t.method&&l(e))}},["GET","DELETE"].indexOf(t.method)>-1?i:o),r.createElement(v.Z,{title:E?R:"Example Response",language:"json"},h?`${h}`:d))}function S(e){return JSON.stringify(e,null,2)}function A(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const O="heading_REER";var P=n(39960),_=n(3905);const Z={toc:[]};function M(e){let{components:t,...n}=e;return(0,_.kt)("wrapper",(0,a.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,_.kt)("details",{open:n.accordionOpen?"open":void 0},(0,_.kt)("summary",null,(0,_.kt)("span",{className:"open"},"Specification"),(0,_.kt)("span",{className:"closed"},"View Specification")),(0,_.kt)(s.D,{mdxType:"ReactMarkdown"},n.details)))}function z(e){let{name:t,content:n="",interactive:a,network:o,request:l,accordionOpen:i=!1,response:d,endpoint:u}=e;const m=u.includes("rewards-api"),p=["by day","account","address"].find((e=>t.includes(e))),h=["by epoch","by era"].find((e=>t.includes(e)))||t.startsWith("SOL");if(m&&h){const{start:e,end:t}=c[o]();l.body={...l.body,start:e,end:t}}else if(m&&p){const{start:e,end:t}=c.days();l.body={...l.body,start:e,end:t}}const[y,...j]=n.trim().split(/\n+/),f=j.join("\n");return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:O,"data-method":l.method},r.createElement(P.Z,{to:`#${t.toLowerCase()}`},t)),r.createElement(s.D,null,y),r.createElement(R,{req:l,res:d,interactive:a,endpoint:u}),r.createElement(M,{details:f,accordionOpen:i}),r.createElement("hr",null))}function D(e){let{network:t,methods:n,service:s,proxy:l}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),n.map(((e,n)=>r.createElement(z,(0,a.Z)({key:t+n},e,{network:t,endpoint:`${l}/${s}/${t}`,accordionOpen:"node-api"!==s})))),r.createElement(o.Z,null))}M.isMDXComponent=!0},15709:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),s=n(89638),o=n(33976),l=(n(27297),n(72750));const i={title:"NEAR",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - NEAR",image:"img/logo.svg",keywords:["Rewards API","NEAR"]},c="Rewards API - NEAR",d={unversionedId:"api-reference/rewards-api/near",id:"api-reference/rewards-api/near",title:"NEAR",description:"Rewards API - NEAR",source:"@site/docs/api-reference/rewards-api/near.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/near",permalink:"/api-reference/rewards-api/near",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"NEAR",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - NEAR",image:"img/logo.svg",keywords:["Rewards API","NEAR"]},sidebar:"docsSidebar"},u={},m=[],p={toc:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---near"},"Rewards API - NEAR"),(0,r.kt)(o.Z,{service:"rewards-api",methods:[{name:"Rewards by epoch"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"near",mdxType:"ApiReferenceNav"}),(0,r.kt)(l.ZP,{url:"https://near-rewards.datahub.figment.io",network:"Near",service:"Rewards API",route:"/v2/rewards",mdxType:"MakingCalls"}),(0,r.kt)(s.S,{methods:[{name:"Rewards by epoch",content:"Returns net delegator rewards (post-on-chain validator commission) by epoch\n\n### Parameters\n\n*   `accounts` takes in an array of delegator accounts addresses (required)\n*   `start` and `end` are epoch numbers, both inclusive (required)\n    \n\n### Response\n\nThe response is broken down between `meta` and `data`\n\n*   `meta`\n    *   `network` is the name of the network queried\n    *   `period_unit` is the unit of the `period` field under `data`\n*   `data` is an array of objects - one for each epoch - containing:\n    *   `validator` returns the validator that distributed the rewards\n    *   `period` is the epoch number\n    *   `timestamp` is the timestamp of the end of the epoch\n    *   `rewards` is an array of objects with four components: `numeric`, `exp`, and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric x 10^(-exp)`(`text` is the string version of this)\n\n### Limitations\n\n*   The API returns rewards for Figment validators only\n*   Data is available approximately an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.",request:{auth:{type:"noauth"},method:"POST",header:[],body:{accounts:["figment.near"],start:75743490,end:75743491},url:"https://near-rewards.datahub.figment.io",headers:{},query:""},interactive:!0,response:{name:"by epoch",status:"OK",code:200,body:{data:[{accounts:["figment.near"],chain_id:"mainnet",rewards:[{text:"221.415622439422952523250579 NEAR",currency:"NEAR",numeric:22141562243942295e10,exp:24}],period:"75743490",validator:"figment.poolv1.near",timestamp:"2022-10-08T13:33:18.784283459Z"},{accounts:["figment.near"],chain_id:"mainnet",rewards:[{text:"0 NEAR",currency:"NEAR",numeric:0,exp:24}],period:"75743490",validator:"ledgerbyfigment.poolv1.near",timestamp:"2022-10-08T13:33:18.784283459Z"}],meta:{network:"near",period_unit:"epoch"}}}}],service:"rewards-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"near",proxy:"https://api-service-proxy.figment-secops.workers.dev",mdxType:"APIMethods"}))}h.isMDXComponent=!0},46700:(e,t,n)=>{var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=46700}}]);