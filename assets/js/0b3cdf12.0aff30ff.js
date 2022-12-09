"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4258],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>o});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),m=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=m(t.components);return a.createElement(c.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=m(r),N=n,o=k["".concat(c,".").concat(N)]||k[N]||g[N]||l;return r?a.createElement(o,i(i({ref:e},d),{},{components:r})):a.createElement(o,i({ref:e},d))}));function o(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=N;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[k]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}N.displayName="MDXCreateElement"},2804:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const l={title:"API Reference",sidebar_position:3,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,hide_table_of_contents:!0,description:"API Reference supported protocols table",image:"/img/logo.svg",keywords:["API Reference","Documentation"],slug:"/api-reference"},i=void 0,p={unversionedId:"api-reference/index",id:"api-reference/index",title:"API Reference",description:"API Reference supported protocols table",source:"@site/docs/api-reference/index.mdx",sourceDirName:"api-reference",slug:"/api-reference",permalink:"/api-reference",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"API Reference",sidebar_position:3,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,hide_table_of_contents:!0,description:"API Reference supported protocols table",image:"/img/logo.svg",keywords:["API Reference","Documentation"],slug:"/api-reference"},sidebar:"docsSidebar"},c={},m=[],d={toc:m};function k(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Check this table to see which APIs are supported for each Protocol.\nClick the name of the API in the table header to go directly to that API Reference (or use the sidebar links!)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Protocol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Network"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Node type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"WebSockets"),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"/api-reference/node-api"},"Node API")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"/api-reference/staking-api"},"Staking API")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"/api-reference/staking-api-webhooks"},"Staking API Webhooks")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"/api-reference/rewards-api"},"Rewards API")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"/api-reference/rewards-rates-api"},"Rewards Rates API")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"/api-reference/validator-api"},"Validator API")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Arbitrum"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Avalanche"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet, Testnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BNB"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Celo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet, Testnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cosmos"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ethereum"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet, Testnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Fantom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Kusama"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Mina"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet, Testnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NEAR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet, Testnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Optimism"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Osmosis"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Polkadot"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet, Testnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Polygon"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet, Testnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Solana"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mainnet, Devnet"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full & Archive"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")))))}k.isMDXComponent=!0}}]);