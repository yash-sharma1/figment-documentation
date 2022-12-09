"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var n=a(7462),r=(a(7294),a(3905));const o=a.p+"assets/images/cors_allowed_origins-6f6ce8dc4c16f5feb594ef2df6a713de.png",i=a.p+"assets/images/team_settings-92305ade9b0c69847134a1bc1cd786ef.png",s=a.p+"assets/images/team_settings_collaborator_added-0222ce885226d78aa9bca73e1d11f733.png",l=a.p+"assets/images/settings-4c47c39a69423c9625c09b9638a8fe5a.png",p=a.p+"assets/images/team_settings_collaborator_delete-43cdcdc469377fa1456fb3414c306436.png",c={title:"Settings and Security",sidebar_position:12},d=void 0,m={unversionedId:"quickstart/settings-and-security",id:"quickstart/settings-and-security",title:"Settings and Security",description:"App General Settings",source:"@site/docs/quickstart/settings-and-security.mdx",sourceDirName:"quickstart",slug:"/quickstart/settings-and-security",permalink:"/quickstart/settings-and-security",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Settings and Security",sidebar_position:12},sidebar:"docsSidebar",previous:{title:"App Analytics & Request Logs",permalink:"/quickstart/app-analytics-and-request-logs"},next:{title:"API Reference",permalink:"/api-reference"}},u={},g=[{value:"App General Settings",id:"app-general-settings",level:2},{value:"App Security Settings",id:"app-security-settings",level:2},{value:"Allowed Origins",id:"allowed-origins",level:3},{value:"CORS",id:"cors",level:3},{value:"CORS Request Example",id:"cors-request-example",level:3},{value:"CORS Error Example",id:"cors-error-example",level:2},{value:"Add Allowed Origin",id:"add-allowed-origin",level:2},{value:"Delete Allowed Origin",id:"delete-allowed-origin",level:2},{value:"Team Settings",id:"team-settings",level:2},{value:"Adding Collaborators",id:"adding-collaborators",level:3},{value:"Deleting Collaborators",id:"deleting-collaborators",level:3}],h={toc:g};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"app-general-settings"},"App General Settings"),(0,r.kt)("p",null,"From the Dashboard, click on an app then select the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," tab."),(0,r.kt)("p",null,"Here you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit your app name and environment"),(0,r.kt)("li",{parentName:"ul"},"View your subscription breakdown"),(0,r.kt)("li",{parentName:"ul"},"Add or change your payment method"),(0,r.kt)("li",{parentName:"ul"},"View details about your past invoices"),(0,r.kt)("li",{parentName:"ul"},"Delete your app (",(0,r.kt)("em",{parentName:"li"},"clicking this button still requires additional confirmation to delete the app"),")")),(0,r.kt)("img",{src:l,alt:"App Settings",width:"500",className:"shadow--tl inline-image"}),(0,r.kt)("h2",{id:"app-security-settings"},"App Security Settings"),(0,r.kt)("p",null,"From the Dashboard, select the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," tab, then click on ",(0,r.kt)("strong",{parentName:"p"},"Security")," on the left of the page."),(0,r.kt)("img",{src:o,alt:"App Security Settings - Edit Allowed Origins",width:"500",className:"shadow--tl inline-image"}),(0,r.kt)("h3",{id:"allowed-origins"},"Allowed Origins"),(0,r.kt)("p",null,"To comply with our default CORS policy, you need to explicitly allow any domains that could be a part of a cross-origin request.\nWe use ",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," headers, populated by the Allowed Origins set here. You can add multiple domains, according to the needs of your app."),(0,r.kt)("h3",{id:"cors"},"CORS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"C"),"ross-",(0,r.kt)("strong",{parentName:"p"},"O"),"rigin ",(0,r.kt)("strong",{parentName:"p"},"R"),"esource ",(0,r.kt)("strong",{parentName:"p"},"S"),"haring (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")),") is an HTTP header-based mechanism that allows a server to indicate any origin (domain, scheme, or port) other than its own from which a browser should permit the loading of resources."),(0,r.kt)("h3",{id:"cors-request-example"},"CORS Request Example"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.")),(0,r.kt)("p",null,"An example of a cross-origin request:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The front-end JavaScript code served from ",(0,r.kt)("a",{parentName:"li",href:"https://domain-a.com"},"https://domain-a.com")," uses ",(0,r.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," to make a request for ",(0,r.kt)("a",{parentName:"li",href:"https://domain-b.com/data.json"},"https://domain-b.com/data.json"),".")),(0,r.kt)("h2",{id:"cors-error-example"},"CORS Error Example"),(0,r.kt)("p",null,"CORS errors may occur when you're working with APIs. It's important to handle them effectively due to security reasons."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="CORS Error Example"',title:'"CORS',Error:!0,'Example"':!0},"Access to fetch at 'https://solana--mainnet--rpc.datahub.figment.io/'\nfrom origin 'http://localhost:3000' has been blocked by CORS policy:\nResponse to preflight request doesn't pass access control check:\nNo 'Access-Control-Allow-Origin' header is present on the requested\nresource. If an opaque response serves your needs, set the request's\nmode to 'no-cors' to fetch the resource with CORS disabled.\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Although the error message says:"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.")),(0,r.kt)("p",{parentName:"admonition"},"We recommend that you ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"do not"))," attempt to disable CORS when making requests via Figment endpoints.")),(0,r.kt)("h2",{id:"add-allowed-origin"},"Add Allowed Origin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to your app's ",(0,r.kt)("strong",{parentName:"li"},"Security")," settings."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Allowed Origins")," section, add a domain address that includes protocol (http, https, wss), hostname, and an optional port number. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"https://appdomain.xyz")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"wss://uniswap.org"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save")," and save your changes to the Allowed Origins list. ",(0,r.kt)("em",{parentName:"li"},"If you see errors upon saving")," you need to fix them first and click ",(0,r.kt)("strong",{parentName:"li"},"Save")," to revalidate and save your changes.")),(0,r.kt)("h2",{id:"delete-allowed-origin"},"Delete Allowed Origin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to your app's ",(0,r.kt)("strong",{parentName:"li"},"Security")," settings."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Allowed Origins")," section, delete a domain address by clicking on the trashcan icon to the right of the URL."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save")," to save your changes to the Allowed Origins list.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"team-settings"},"Team Settings"),(0,r.kt)("img",{src:i,alt:"Team Settings",width:"500",className:"shadow--tl inline-image"}),(0,r.kt)("h3",{id:"adding-collaborators"},"Adding Collaborators"),(0,r.kt)("p",null,"Clicking on ",(0,r.kt)("strong",{parentName:"p"},"Add Collaborator")," opens a modal view. Add the email address you are inviting to your team. There is a dropdown to select the role you want to assign them once they accept the invitation. Their status will show as ",(0,r.kt)("strong",{parentName:"p"},"Pending"),". Once the invite is accepted, the collaborator and their role will be visible in the list."),(0,r.kt)("img",{src:s,alt:"Team Settings - Add Collaborator",width:"500",className:"shadow--tl inline-image"}),(0,r.kt)("h3",{id:"deleting-collaborators"},"Deleting Collaborators"),(0,r.kt)("p",null,"On the list of collaborators, select the one you want to delete. Click the three dots on the right side of their card to reveal the ",(0,r.kt)("strong",{parentName:"p"},"Delete")," action. Clicking it will immediately remove that collaborator from your app."),(0,r.kt)("img",{src:p,alt:"Team Settings - Remove Collaborator",width:"500",className:"shadow--tl inline-image"}))}k.isMDXComponent=!0}}]);