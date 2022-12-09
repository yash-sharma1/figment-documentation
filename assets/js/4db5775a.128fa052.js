"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,g=p["".concat(s,".").concat(u)]||p[u]||f[u]||o;return a?n.createElement(g,d(d({ref:t},l),{},{components:a})):n.createElement(g,d({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,d[1]=i;for(var c=2;c<o;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Get Flow Status",slug:"/guides/staking-api/polkadot/add-staking-proxy/get-flow-status-registered"},d=void 0,i={unversionedId:"guides/staking-api/Polkadot/add-staking-proxy/get-flow-status",id:"guides/staking-api/Polkadot/add-staking-proxy/get-flow-status",title:"Get Flow Status",description:"To get the current state of the existing flow, send a GET request to /api/v1/flows/[:flow_id] using the flow ID from the previous step.",source:"@site/docs/guides/staking-api/Polkadot/add-staking-proxy/5_get-flow-status.mdx",sourceDirName:"guides/staking-api/Polkadot/add-staking-proxy",slug:"/guides/staking-api/polkadot/add-staking-proxy/get-flow-status-registered",permalink:"/guides/staking-api/polkadot/add-staking-proxy/get-flow-status-registered",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get Flow Status",slug:"/guides/staking-api/polkadot/add-staking-proxy/get-flow-status-registered"},sidebar:"docsSidebar",previous:{title:"Submit Signed Add Proxy Transaction for Broadcast",permalink:"/guides/staking-api/polkadot/add-staking-proxy/submit-signed-transaction"},next:{title:"Remove a Staking Proxy",permalink:"/guides/staking-api/polkadot/remove-staking-proxy"}},s={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"Staking Proxy Flow Complete",id:"staking-proxy-flow-complete",level:3}],l={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To get the current state of the existing flow, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]")," using the flow ID from the previous step."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://polkadot-slate.datahub.figment.io/api/v1/flows/0bfcc570-57d1-4cb6-a78b-55e16710d76e' \\\n-H 'Authorization: <api_key>'\n")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," field will update from ",(0,r.kt)("inlineCode",{parentName:"p"},"add_proxy_tx_broadcasting")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"registered"),".")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0bfcc570-57d1-4cb6-a78b-55e16710d76e",\n  "state": "registered",\n  "actions": [],\n  "data": {\n    "proxy_account_address": "5CDAhYcPZEx6sN4oGbQMRFZzo5Eur6NTN4nd85SADgMdnxAS",\n    "proxied_account_address": "5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh",\n    "add_proxy_transaction": {\n      "raw": "0x0004000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e00000000000000000000000000000000000000000000000000000000000000000000000000160100067452e7828dafb80be77c82b33a3781e71de7d04096aad144cfac000a7fd24002000000001c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n      "signing_payload": "0x160100067452e7828dafb80be77c82b33a3781e71de7d04096aad144cfac000a7fd24002000000000004004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",\n      "signed": "0x390284009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a3166601665fc2eaae2fa8bdd6b7be7f0aaec5081ed2f45d54910cf6695a5795f329c262331af7f0803768c510a59fd45b7f81f0a01c4c393504a50a790545ec3f99538a000400160100067452e7828dafb80be77c82b33a3781e71de7d04096aad144cfac000a7fd2400200000000",\n      "hash": "0x727ae4e1820aa4d5b7941a551db96da0db2db573d3e866b580d222cf7d5d3b9f",\n      "status": "confirmed",\n      "error": null,\n      "signatures": [],\n      "block_number": 12776194,\n      "proxy": null\n    }\n  },\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "created_at": "2022-10-06T18:52:18.856Z",\n  "updated_at": "2022-10-06T18:58:07.588Z"\n}\n')),(0,r.kt)("h3",{id:"staking-proxy-flow-complete"},"Staking Proxy Flow Complete"),(0,r.kt)("p",null,"Congratulations, you've successfully added a staking proxy and are ready to move to the next step of delegation!"))}p.isMDXComponent=!0}}]);