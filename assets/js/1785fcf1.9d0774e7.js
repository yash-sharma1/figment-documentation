"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:h,groupId:f,className:g}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:P}=(0,s.U)(),[w,x]=(0,r.useState)(k),A=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==w&&v.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,n=A.indexOf(t),a=v[n].value;a!==w&&(E(t),x(a),null!=f&&P(f,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=A.indexOf(e.currentTarget)+1;n=null!=(a=A[t])?a:A[0];break}case"ArrowLeft":{var r;const t=A.indexOf(e.currentTarget)-1;n=null!=(r=A[t])?r:A[A.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>A.push(e),onKeyDown:T,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i=n.p+"assets/images/endpoint_example-9ae8949e37923b110ea0961e1d886dbb.png",s={title:"Using the Node API",sidebar_position:3},u=void 0,p={unversionedId:"quickstart/node-api",id:"quickstart/node-api",title:"Using the Node API",description:"After creating your App, you can immediately start using the Figment APIs.",source:"@site/docs/quickstart/node-api.mdx",sourceDirName:"quickstart",slug:"/quickstart/node-api",permalink:"/quickstart/node-api",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Using the Node API",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Create an App",permalink:"/quickstart/create-an-app"},next:{title:"Using the Transaction Search API",permalink:"/quickstart/transaction-search-api"}},c={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Using the Request URL",id:"using-the-request-url",level:3},{value:"Example Requests",id:"example-requests",level:4},{value:"Using the Authorization Header",id:"using-the-authorization-header",level:3},{value:"Example Requests",id:"example-requests-1",level:4},{value:"API Reference",id:"api-reference",level:2}],m={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After creating your App, you can immediately start using the Figment APIs."),(0,r.kt)("p",{parentName:"admonition"},"The following sections explain where, how and what you need to access these APIs.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Node APIs are used to communicate with nodes running on a given blockchain protocol. For example if you wanted to get information about a specific block on Polygon, you could send a request to the Polygon endpoint to run the method ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getBlockByNumber")," - which will return a JSON object containing the data you have requested.")),(0,r.kt)("p",null,"You can see the endpoint URLs on the Protocols detail page:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Dashboard, select your App, then click on the ",(0,r.kt)("strong",{parentName:"li"},"Overview")," tab. Click on the Protocol you want to access."),(0,r.kt)("li",{parentName:"ol"},"On the Protocols detail page, you can see a list of all available Services and Networks for that Protocol on the right side of the page. Next to each endpoint URL is a link to an ",(0,r.kt)("strong",{parentName:"li"},"Example"),"."),(0,r.kt)("li",{parentName:"ol"},"From the Example, you can see the full URL for this service as well as some sample requests to get you started.")),(0,r.kt)("img",{src:i,alt:"Endpoint Example",width:"700",className:"shadow--tl inline-image"}),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"There are two ways to authenticate your requests using your API key."),(0,r.kt)("p",null,"You can pass the API key in the request URL, or you can specify your API key with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In example requests, the text ",(0,r.kt)("inlineCode",{parentName:"p"},"API-KEY")," must be replaced with your actual credentials for it to function. Similarly, you would need to replace the ",(0,r.kt)("em",{parentName:"p"},"value")," of the constant ",(0,r.kt)("inlineCode",{parentName:"p"},"API_KEY")," in any code examples.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"To maintain the security of your API keys, we recommend always using ",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/en-ca/learning/ssl/what-is-https/"},(0,r.kt)("strong",{parentName:"a"},"HTTPS")),"."),(0,r.kt)("p",{parentName:"admonition"},"In some cases it may be necessary to use the request URL, however keep in mind that API keys sent over ",(0,r.kt)("strong",{parentName:"p"},"HTTP")," are insecure, regardless of the method used.")),(0,r.kt)("h3",{id:"using-the-request-url"},"Using the Request URL"),(0,r.kt)("p",null,"You can specify your API key as a prefix to the path, like ",(0,r.kt)("inlineCode",{parentName:"p"},"/apikey/API-KEY/the_path"),"."),(0,r.kt)("h4",{id:"example-requests"},"Example Requests"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request to the Node API for Solana Devnet"',title:'"Example',curl:!0,request:!0,to:!0,the:!0,Node:!0,API:!0,for:!0,Solana:!0,'Devnet"':!0},'// highlight-next-line\ncurl -X POST https://solana--devnet.datahub.figment.io/apikey/API-KEY \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "getAccountInfo",\n  "params": [\n    "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",\n    {\n      "encoding": "base58"\n    }\n  ]\n}\'\n'))),(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example JavaScript Fetch request to the Node API for Solana Devnet"',title:'"Example',JavaScript:!0,Fetch:!0,request:!0,to:!0,the:!0,Node:!0,API:!0,for:!0,Solana:!0,'Devnet"':!0},'// highlight-next-line\nconst API_KEY = "YOUR API KEY";\n\nvar myHeaders = new Headers();\nmyHeaders.append("Content-Type", "application/json");\n\nvar raw = JSON.stringify({\n  jsonrpc: "2.0",\n  id: 1,\n  method: "getAccountInfo",\n  params: [\n    "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",\n    {\n      encoding: "base58",\n    },\n  ],\n});\n\nvar requestOptions = {\n  method: "POST",\n  headers: myHeaders,\n  body: raw,\n  redirect: "follow",\n};\n\nfetch(\n  // highlight-next-line\n  `https://solana--devnet.datahub.figment.io/apikey/${API_KEY}`,\n  requestOptions\n)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.log("error", error));\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response from Solana node"',title:'"Example',JSON:!0,response:!0,from:!0,Solana:!0,'node"':!0},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "context": {\n      "apiVersion": "1.10.34",\n      "slot": 153655724\n    },\n    "value": {\n      "data": ["", "base58"],\n      "executable": false,\n      "lamports": 88796516947090,\n      "owner": "11111111111111111111111111111111",\n      "rentEpoch": 355\n    }\n  },\n  "id": 1\n}\n')),(0,r.kt)("h3",{id:"using-the-authorization-header"},"Using the Authorization Header"),(0,r.kt)("p",null,"You can specify your API key as an ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header."),(0,r.kt)("h4",{id:"example-requests-1"},"Example Requests"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request with API key sent via Authorization header"',title:'"Example',curl:!0,request:!0,with:!0,API:!0,key:!0,sent:!0,via:!0,Authorization:!0,'header"':!0},'curl -X POST \'https://ethereum-mainnet--rpc.datahub.figment.io\' \\\n// highlight-next-line\n-H \'Authorization: API-KEY\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n  "jsonrpc": "2.0",\n  "method": "eth_blockNumber",\n  "params": [],\n  "id": 1\n}\'\n'))),(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example JavaScript Fetch request to the Node API for Solana Devnet"',title:'"Example',JavaScript:!0,Fetch:!0,request:!0,to:!0,the:!0,Node:!0,API:!0,for:!0,Solana:!0,'Devnet"':!0},'const API_KEY = "YOUR API KEY";\n\nvar myHeaders = new Headers();\n// highlight-next-line\nmyHeaders.append("Authorization", API_KEY);\nmyHeaders.append("Content-Type", "application/json");\n\nvar raw = JSON.stringify({\n  jsonrpc: "2.0",\n  method: "eth_blockNumber",\n  params: [],\n  id: 1,\n});\n\nvar requestOptions = {\n  method: "POST",\n  // highlight-next-line\n  headers: myHeaders,\n  body: raw,\n  redirect: "follow",\n};\n\nfetch("https://ethereum-mainnet--rpc.datahub.figment.io", requestOptions)\n  .then((response) => response.text())\n  .then((result) => console.log(result))\n  .catch((error) => console.log("error", error));\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response from Ethereum node"',title:'"Example',JSON:!0,response:!0,from:!0,Ethereum:!0,'node"':!0},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x1d43bd1"\n}\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("p",null,"View the full Node API reference ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/node-api/arbitrum"},"HERE")),(0,r.kt)("hr",null))}h.isMDXComponent=!0}}]);