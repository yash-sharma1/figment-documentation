"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),o=n(7294),r=n(6010),i=n(2389),s=n(7392),l=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:h,className:m}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,l.U)(),[w,T]=(0,o.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==w&&(C(t),T(a),null!=h&&v(h,String(a)))},A=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:A,onClick:E},i,{className:(0,r.Z)("tabs__item",d,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(9960),i=n(5488),s=n(5162);const l={title:"Staking API Webhooks",sidebar_position:3},u=void 0,c={unversionedId:"guides/staking-api/staking-api-webhooks",id:"guides/staking-api/staking-api-webhooks",title:"Staking API Webhooks",description:"Motivation",source:"@site/docs/guides/staking-api/staking-api-webhooks.mdx",sourceDirName:"guides/staking-api",slug:"/guides/staking-api/staking-api-webhooks",permalink:"/guides/staking-api/staking-api-webhooks",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Staking API Webhooks",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Staking API Endpoints",permalink:"/guides/staking-api/staking-api-endpoints"},next:{title:"Signing Transactions with Figment's npm Package",permalink:"/guides/staking-api/figment-signing-transactions"}},d={},p=[{value:"Motivation",id:"motivation",level:2},{value:"HMAC",id:"hmac",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Cloudflare Worker Setup",id:"cloudflare-worker-setup",level:2},{value:"Usage",id:"usage",level:2},{value:"References",id:"references",level:2}],h={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"A webhook is an HTTP request which triggers by an event in a source system (ex. Figment's Staking API) and sent to a destination system (ex. Cloudflare Worker) with a payload of data. In general, webhooks are a way to send automated messages between systems whenever a new event takes place."),(0,o.kt)("p",null,"The Staking API uses webhooks to send notifications about events related to the various Staking API flows. For example, when an undelegation flow is completed, a webhook can be sent to the server of your choosing."),(0,o.kt)("p",null,"There are some security considerations when dealing with webhooks.\nThis guide provides all the information needed to successfully manage webhooks in the context of Figment's Staking API."),(0,o.kt)("p",null,"We will examine how serverless functions (Cloudflare Workers) can be beneficial to this process, and provide example code which can be used as the basis for your own solution."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If your particular language and server implementation specifies a character encoding, ensure that you handle the payload as UTF-8.\nJSON is encoded as UTF-8 by default.")),(0,o.kt)("h2",{id:"hmac"},"HMAC"),(0,o.kt)("p",null,"HMAC (",(0,o.kt)("strong",{parentName:"p"},"Hash-based Message Authentication Code"),") is a cryptographic authentication technique which uses a shared secret and a hash function such as SHA-256."),(0,o.kt)("p",null,"When you create a webhook endpoint with the Staking API, the response will include a ",(0,o.kt)("inlineCode",{parentName:"p"},"secret")," which begins with ",(0,o.kt)("inlineCode",{parentName:"p"},"whsec_"),".\nThis is the shared secret you will use to verify future payloads sent to that webhook endpoint.\nRefer to the Staking API Endpoints guide, ",(0,o.kt)(r.Z,{to:"/guides/staking-api/staking-api-endpoints#create-a-new-webhook-endpoint",mdxType:"Link"},"Create a New Webhook Endpoint")," section for details."),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about the specifics of HMAC in the ",(0,o.kt)(r.Z,{to:"#references",mdxType:"Link"},"References")," section.")),(0,o.kt)("p",null,"Here are some code examples for verifying the HMAC signatures"),(0,o.kt)("admonition",{title:"important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Code examples provided as samples only and should not be used in production out of the box. Use at your own risk.\n")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const crypto = require("crypto").webcrypto;\nconst TOLERANCE = 300;\nconst WH_SECRET = "<your webhook secret>";\n\nexport default async function verifySignature(header, body) {\n  // get the time from the header\n  const timestamp = header.match(/t=([^,\\s*]+)/)[1];\n\n  // get all signatures in Unit8Array format\n  const signatures = [...header.matchAll(/v\\d+=([^,\\s*]+)/g)].map((match) => {\n    return new Uint8Array(Math.ceil(match[1].length / 2)).map((v, i) =>\n      parseInt(match[1].substr(i * 2, 2), 16)\n    );\n  });\n\n  // init text encoder\n  const encoder = new TextEncoder();\n\n  // construct the cyptographic key\n  const key = await crypto.subtle.importKey(\n    "raw",\n    encoder.encode(WH_SECRET),\n    { name: "HMAC", hash: "SHA-256" },\n    false,\n    ["verify"]\n  );\n\n  // verify that at least one signature is valid\n  const verified = (\n    await Promise.all(\n      signatures.map(async (signature) => {\n        return await crypto.subtle.verify(\n          "HMAC",\n          key,\n          signature,\n          encoder.encode(`${timestamp}.${body}`)\n        );\n      })\n    )\n  ).includes(true);\n\n  // check if elapsed timestamp is within tolerance\n  const elapsed = Math.floor(Date.now() / 1000) - Number(timestamp);\n  const withinTolerance = !(TOLERANCE && elapsed > TOLERANCE);\n\n  // return validity\n  return verified && withinTolerance;\n}\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import re\nimport hmac\nimport binascii\nimport hashlib\nimport math\nimport time\n\nTOLERANCE = 300\nWH_SECRET = "<your webhook secret>"\n\ndef verifySignature(header, body):\n    timestamp = re.findall(r"t=([^,\\s*]+)", header)\n\n    if not timestamp:\n        return False\n\n    timestamp = timestamp[0]\n\n    signatures = re.findall("v\\d+=([^,\\s*]+)", header)\n\n    verified_signatures = []\n\n    for signature in signatures:\n        shared_secret_signature = hmac.new(str.encode(WH_SECRET), str.encode(f"{timestamp}.{body}"), digestmod=hashlib.sha256)\n        verified_signatures.append(hmac.compare_digest(shared_secret_signature.hexdigest(), signature))\n\n    if verified_signatures.count(True) == 0:\n        return False\n\n    elapsed = math.floor(time.time()) - int(timestamp)\n\n    if elapsed > TOLERANCE:\n        return False\n\n    return True\n')))),(0,o.kt)("h2",{id:"signatures"},"Signatures"),(0,o.kt)("p",null,"Webhooks from the Staking API are sent with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Slate-Signature")," header, which you can use to verify the payload.\nThe value of that header will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"t=1666214090,v1=f790a584722ff6c0ebf4e9b59835ba5b93ee824ae0a7164feba30953d6b52cee\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"t")," is a UNIX Epoch timestamp."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"v1")," is the signature. Each additional signature will increment the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"v")," ","\u2014"," ",(0,o.kt)("inlineCode",{parentName:"li"},"v2"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"v3"),", etc.")),(0,o.kt)("h2",{id:"cloudflare-worker-setup"},"Cloudflare Worker Setup"),(0,o.kt)("p",null,"Cloudflare Workers provide flexibility and scalability when handling webhooks.\nWe can use a Cloudflare Worker to capture, inspect, and manage a webhook response payload from the Staking API.\nRefer to the steps outlined in the guide ",(0,o.kt)(r.Z,{to:"/guides/proxy-requests#create-a-cloudflare-service-worker",mdxType:"Link"},"Proxy Requests to Figment APIs")," if you need to create a new Cloudflare Service Worker."),(0,o.kt)("p",null,"You will need to set up two environment variables in the Cloudflare dashboard:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WH_SECRET"),", set the value to the ",(0,o.kt)("inlineCode",{parentName:"li"},"secret")," provided when you created a webhook endpoint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TOLERANCE"),", a number of seconds (a value of 300 is recommended). An inbound signature is considered stale if older than the tolerance.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Use the example code we've provided here to implement your own solution."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"verifySignature")," function uses the ",(0,o.kt)(r.Z,{to:"https://developers.cloudflare.com/workers/runtime-apis/web-crypto/",mdxType:"Link"},"Web Crypto API")," to verify that the incoming webhook payload was signed by the Staking API."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click here to view the complete Worker code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"use strict";\n\naddEventListener("fetch", function (event) {\n  event.respondWith(handleRequest(event));\n});\n\nasync function verifySignature(header, body) {\n  // Get the time from the header\n  const timestamp = header.match(/t=([^,\\s*]+)/)[1];\n\n  // Get all signatures in Uint8Array format\n  const signatures = [...header.matchAll(/v\\d+=([^,\\s*]+)/g)].map((match) => {\n    return new Uint8Array(Math.ceil(match[1].length / 2)).map((v, i) =>\n      parseInt(match[1].substr(i * 2, 2), 16)\n    );\n  });\n\n  // Instantiate a TextEncoder\n  // Takes a string as input, returns a Uint8Array containing UTF-8 encoded text.\n  const encoder = new TextEncoder();\n\n  // Construct the key using the Web Crypto API\n  // WH_SECRET must be set as a Cloudflare environment variable\n  const key = await crypto.subtle.importKey(\n    "raw",\n    encoder.encode(WH_SECRET),\n    { name: "HMAC", hash: "SHA-256" },\n    false,\n    ["verify"]\n  );\n\n  // Verify that at least one signature is valid\n  const verified = (\n    await Promise.all(\n      signatures.map(async (signature) => {\n        return await crypto.subtle.verify(\n          "HMAC",\n          key,\n          signature,\n          encoder.encode(`${timestamp}.${body}`)\n        );\n      })\n    )\n  ).includes(true);\n\n  // Check if elapsed timestamp is within tolerance\n  const elapsed = Math.floor(Date.now() / 1000) - Number(timestamp);\n  const withinTolerance = !(TOLERANCE && elapsed > TOLERANCE);\n\n  // Return validity\n  return verified && withinTolerance;\n}\n\nasync function handleRequest(event) {\n  // Verify the inbound webhook payload\n  const header = event.request.headers.get("Slate-Signature");\n  const body = await event.request.text();\n  const verified = await verifySignature(header, body);\n\n  // If not verified, exit early with a red herring 200 response\n  if (!verified) {\n    console.log("signature failed");\n    return new Response("", { status: 200 });\n  }\n\n  // Do your work, handle side-effects/events here\n  const data = JSON.parse(body);\n  console.log("signature verified");\n  console.log(data);\n\n  // Exit gracefully\n  return new Response("", { status: 200 });\n}\n//# sourceMappingURL=index.js.map\n'))),(0,o.kt)("admonition",{title:"important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When you create a webhook endpoint with the Staking API, provide the URL where you have deployed this Worker as the ",(0,o.kt)("inlineCode",{parentName:"p"},"target_url"),".")),(0,o.kt)("p",null,"The fields which are common to all Staking API webhook payloads are ",(0,o.kt)("inlineCode",{parentName:"p"},"flow_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"event_type"),". All other fields will be relevant to the action and flow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample Staking API Webhook Payload"',title:'"Sample',Staking:!0,API:!0,Webhook:!0,'Payload"':!0},"{\n  amount: '10.0',\n  status: 'success',\n  flow_id: '49a1bab1-e3e6-4f77-8212-ee254e1ab9a3',\n  event_type: 'near.transfer.transfer_tx.confirmed',\n  transaction_hash: '2a9fnT6j5M9Fy6TFNbX2bA1Ncjh6aXK9Ky8oPBUuJwtS',\n  to_account_address: 'pizza.testnet',\n  from_account_pubkey: 'ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY',\n  from_account_address: 'slate-demo.testnet'\n}\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"Learn more about webhook fundamentals in these excellent articles from HookDeck:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.Z,{to:"https://hookdeck.com/webhooks/guides/what-are-webhooks-how-they-work",mdxType:"Link"},"What Are Webhooks And How They Work")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.Z,{to:"https://hookdeck.com/webhooks/guides/complete-guide-to-webhook-security",mdxType:"Link"},"Complete Guide to Webhook Security")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.Z,{to:"https://hookdeck.com/webhooks/guides/webhooks-security-checklist",mdxType:"Link"},"How to Secure Webhooks \u2014 5-step Checklist")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.Z,{to:"https://hookdeck.com/webhooks/guides/how-to-implement-sha256-webhook-signature-verification",mdxType:"Link"},"How to Implement SHA256 Webhook Signature Verification"))),(0,o.kt)("p",null,"Useful articles from other sources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.Z,{to:"https://cjav.dev/posts/webhook-trip-hazards/",mdxType:"Link"},"Webhook Trip Hazards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(r.Z,{to:"https://www.okta.com/identity-101/hmac/",mdxType:"Link"},"How HMAC Works"))))}m.isMDXComponent=!0}}]);