"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8286],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=a,m=p["".concat(d,".").concat(g)]||p[g]||c[g]||r;return t?i.createElement(m,o(o({ref:n},s),{},{components:t})):i.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},94903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const r={title:"Unbonding Period",slug:"/guides/staking-api/polygon/undelegate/unbonding-period"},o=void 0,l={unversionedId:"guides/staking-api/Polygon/undelegate/unbonding-period",id:"guides/staking-api/Polygon/undelegate/unbonding-period",title:"Unbonding Period",description:"Polygon has an unbonding period of approximately 48 hours. During this time, the undelegated MATIC will be illiquid and will not earn rewards.",source:"@site/docs/guides/staking-api/Polygon/undelegate/5_unbonding-period.mdx",sourceDirName:"guides/staking-api/Polygon/undelegate",slug:"/guides/staking-api/polygon/undelegate/unbonding-period",permalink:"/guides/staking-api/polygon/undelegate/unbonding-period",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Unbonding Period",slug:"/guides/staking-api/polygon/undelegate/unbonding-period"},sidebar:"docsSidebar",previous:{title:"Submit a Signed Unbonding Transaction for Broadcast",permalink:"/guides/staking-api/polygon/undelegate/submit-signed-unbonding-transaction"},next:{title:"Submit Claim Transaction Data",permalink:"/guides/staking-api/polygon/delegate/submit-claim-transaction-data"}},d={},u=[],s={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Polygon has an unbonding period of approximately 48 hours. During this time, the undelegated MATIC will be illiquid and will not earn rewards."),(0,a.kt)("p",null,"You can find the expected unbonding completion time in the response you received after submitting the signed undelegate transaction.\nOnce the unbonding period ends, the undelegated MATIC will be added to the available for withdrawal balance of the delegating address."),(0,a.kt)("p",null,"You will then need to submit a claim transaction to bring those MATIC into the delegating address' liquid balance."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create_claim_tx")," action indicates two fields for data collection:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gas_limit")," ","\u2014"," Adjust the gas limit for the transaction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gas_price")," ","\u2014"," Adjust the gas price for the transaction.")),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The state ",(0,a.kt)("inlineCode",{parentName:"p"},"claim_tx_signature")," allows you to use ",(0,a.kt)("inlineCode",{parentName:"p"},"create_claim_tx")," without generating a Claim Rewards flow."),(0,a.kt)("p",{parentName:"admonition"},"In comparison, the ",(0,a.kt)("inlineCode",{parentName:"p"},"create_claim_rewards_tx")," action is only used during a Claim Rewards flow."),(0,a.kt)("p",{parentName:"admonition"},"The available rewards to be claimed but be greater than 1.0 MATIC to enable a Claim Rewards flow.")))}p.isMDXComponent=!0}}]);