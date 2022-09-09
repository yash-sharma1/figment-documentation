"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Create New Flow"},o=void 0,l={unversionedId:"guides/slate-flows/ethereum/staking/create-new-flow",id:"guides/slate-flows/ethereum/staking/create-new-flow",title:"Create New Flow",description:"We will create a new Flow with POST /api/v1/flows.",source:"@site/docs/guides/slate-flows/ethereum/staking/1_create-new-flow.mdx",sourceDirName:"guides/slate-flows/ethereum/staking",slug:"/guides/slate-flows/ethereum/staking/create-new-flow",permalink:"/guides/slate-flows/ethereum/staking/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Flow"},sidebar:"docsSidebar",previous:{title:"Staking",permalink:"/guides/slate-flows/ethereum/staking/"},next:{title:"Submit Deposit Data",permalink:"/guides/slate-flows/ethereum/staking/submit-deposit-data"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will create a new Flow with ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/v1/flows"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"flow")," JSON field for this request will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "network_code": "ethereum",\n  "chain_code": "goerli-prater",\n  "operation": "staking",\n  "version": "v1"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST https://eth-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "ethereum",\n    "chain_code": "goerli-prater",\n    "operation": "staking",\n    "version": "v1"\n  }\n}\'\n')),(0,a.kt)("p",null,"The response indicates one possible action:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create_deposit_transaction")," - use this action to generate a deposit transaction to stake your ETH.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create_deposit_transaction")," action indicates 7 fields for data collection:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"funding_account_address")," (",(0,a.kt)("strong",{parentName:"li"},"required"),") - the wallet ETH will be originating from."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"validator_pub_key")," (",(0,a.kt)("strong",{parentName:"li"},"required"),") - the public key of the validator that the ETH is to be deposited to."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"withdraw_credentials")," (",(0,a.kt)("strong",{parentName:"li"},"required"),") - the withdrawal address for the given validator."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"signature")," (",(0,a.kt)("strong",{parentName:"li"},"required"),") - a BLS proof of possession, i.e. a proof that the private key corresponding to the ",(0,a.kt)("inlineCode",{parentName:"li"},"validator_pub_key")," is known by the signer."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"deposit_data_root")," (",(0,a.kt)("strong",{parentName:"li"},"required"),") - uniquely identifies the set of deposits made so far."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"gas_limit")," (",(0,a.kt)("em",{parentName:"li"},"optional"),") - adjust the gas limit."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"gas_price")," (",(0,a.kt)("em",{parentName:"li"},"optional"),") - adjust the gas price.")))}u.isMDXComponent=!0}}]);