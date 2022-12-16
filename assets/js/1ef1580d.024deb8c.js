"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[6628],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const r={title:"Assign Unstaking Data",slug:"/guides/staking-api/polkadot/undelegate/assign-unstaking-data"},o=void 0,l={unversionedId:"guides/staking-api/Polkadot/undelegate/assign-unstaking-data",id:"guides/staking-api/Polkadot/undelegate/assign-unstaking-data",title:"Assign Unstaking Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to move on to the next step.",source:"@site/docs/guides/staking-api/Polkadot/undelegate/2_assign-unstaking-data.mdx",sourceDirName:"guides/staking-api/Polkadot/undelegate",slug:"/guides/staking-api/polkadot/undelegate/assign-unstaking-data",permalink:"/guides/staking-api/polkadot/undelegate/assign-unstaking-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Assign Unstaking Data",slug:"/guides/staking-api/polkadot/undelegate/assign-unstaking-data"},sidebar:"docsSidebar",previous:{title:"Create New Undelegation Flow",permalink:"/guides/staking-api/polkadot/undelegate/create-new-flow"},next:{title:"Create Chill Transaction",permalink:"/guides/staking-api/polkadot/undelegate/create-chill-transaction"}},s={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:3},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After collecting the required inputs, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to move on to the next step."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"controller_account_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Address of the wallet DOT will be bonded to (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"controller_proxy_account_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," A proxy account that will sign on behalf of the controller account (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stash_account_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Primary wallet from which DOT will be bonded (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," ","\u2014",' The amount of DOT to be bonded to the controller. This field should be in full DOT, not in Planck (ie. if you want to stake 5 DOT, return "amount": 5.0). Staking API will translate the amount to Plancks so you do not have to worry about the conversion factor (required). A Planck is the smallest unit of DOT. One DOT contains 10,000,000,000 Plancks.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maximum")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if you want to unbond the maximum number of tokens, else ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")))),(0,i.kt)("h3",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X PUT \'https://polkadot-slate.datahub.figment.io/api/v1/flows/86d4a5d4-1c75-4c6a-926d-ab930e57f504/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "assign_unstaking_data",\n  "inputs": {\n    "stash_account_address": "5GQmooiNwLwjXnsNp3woVDD3xhkHzcifVVAmdWcb6FaRVA4L",\n    "controller_account_address": "5GNhcVwpjND83kk6uqMeCjXNUnTSdz84SFyJmd3NmZe4uvrC",\n    "maximum": true\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If chilling is needed before unbonding, create a chill transaction: ",(0,i.kt)("a",{parentName:"li",href:"/guides/staking-api/polkadot/undelegate/create-chill-transaction"},"Create Chill Transaction")),(0,i.kt)("li",{parentName:"ul"},"If no chilling is required, create an unbond transaction: ",(0,i.kt)("a",{parentName:"li",href:"/guides/staking-api/polkadot/undelegate/create-unbond-transaction"},"Create Unbond Transaction"))),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "86d4a5d4-1c75-4c6a-926d-ab930e57f504",\n  "state": "ready_to_unbond",\n  "actions": [\n    {\n      "name": "create_unbond_tx",\n      "inputs": []\n    },\n    {\n      "name": "complete",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "controller_account_address": "5GNhcVwpjND83kk6uqMeCjXNUnTSdz84SFyJmd3NmZe4uvrC",\n    "controller_proxy_account_address": null,\n    "stash_account_address": "5GQmooiNwLwjXnsNp3woVDD3xhkHzcifVVAmdWcb6FaRVA4L",\n    "amount": "1.0",\n    "maximum": true,\n    "chill_transaction": null,\n    "estimated_chilled_at": null,\n    "unbond_transaction": null,\n    "unbonding_era": null,\n    "estimated_unbonded_at": null,\n    "withdraw_transaction": null\n  },\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "created_at": "2022-10-06T16:15:36.383Z",\n  "updated_at": "2022-10-06T16:16:30.263Z"\n}\n')))}c.isMDXComponent=!0}}]);