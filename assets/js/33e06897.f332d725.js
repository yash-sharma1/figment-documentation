"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905)),a=r(9960);const i={title:"Troubleshooting CORS Errors",sidebar_position:5},s=void 0,l={unversionedId:"guides/troubleshoot-cors-errors",id:"guides/troubleshoot-cors-errors",title:"Troubleshooting CORS Errors",description:"CORS Errors are common when you're working with APIs but it's very important to handle them effectively due to several security reasons.",source:"@site/docs/guides/troubleshoot-cors-errors.mdx",sourceDirName:"guides",slug:"/guides/troubleshoot-cors-errors",permalink:"/guides/troubleshoot-cors-errors",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Troubleshooting CORS Errors",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Web3 Glossary",permalink:"/guides/glossary"},next:{title:"Support",permalink:"/support"}},p={},u=[{value:"References",id:"references",level:4}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"CORS Errors are common when you're working with APIs but it's very important to handle them effectively due to several security reasons."),(0,n.kt)("p",null,'DataHub supports "Allowed Origin" functionality which allow users to whitelist their specific domains to be a part of a cross-origin request. You can read more about Allowed Origins functionality ',(0,n.kt)(a.Z,{to:"/quickstart/settings-and-security#add-allowed-origin",mdxType:"Link"},(0,n.kt)("strong",{parentName:"p"},"HERE"))),(0,n.kt)("p",null,'Apart from "Allowed Origins" there are two major ways to not expose your API keys and credentials on the Client-Side.'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Use a proxy")," - One solution for making cross-origin requests is to use a CORS proxy to make it seem as though you're making the request from a location that's allowed."),(0,n.kt)("p",{parentName:"li"},"There are multiple ",(0,n.kt)(a.Z,{to:"https://gist.github.com/jimmywarting/ac1be6ea0297c16c477e17f8fbe51347",mdxType:"Link"},(0,n.kt)("strong",{parentName:"p"},"CORS proxies"))," out there that you can use for free. Some examples are as follows -"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)(a.Z,{to:"https://github.com/Rob--W/cors-anywhere",mdxType:"Link"},"cors-anywhere")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)(a.Z,{to:"https://developers.cloudflare.com/workers/examples/cors-header-proxy",mdxType:"Link"},"Cloudflare Workers - CORS header proxy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)(a.Z,{to:"https://github.com/cloudflare/template-registry/blob/f2a21ff87a4f9c60ce1d426e9e8d2e6807b786fd/templates/javascript/cors_header_proxy.js",mdxType:"Link"},"CORS Header Proxy Template")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)(a.Z,{to:"https://gist.github.com/ajcronk/d97fc7e5f1f1d9754753b28e8dd187b1",mdxType:"Link"},"Cloudflare worker Template by Figment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)(a.Z,{to:"https://gist.github.com/mkornatz/d7daca0203260340ffff7e85399a48db",mdxType:"Link"},"Cloudflare worker Template by Figment (Support Websockets)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)(a.Z,{to:"https://gist.github.com/mkornatz/24e573923d6340b1aca8487225eb65e2",mdxType:"Link"},"nginx proxy Template")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Use a serverless function")," - Using a serverless function is another more effective way to handle the CORS errors and proxy our requests and here in this we build our own functions or micro-infrastructure to call a web service and interact using APIs. Azure, AWS & GCP are most popular for running serverless functions."),(0,n.kt)("p",{parentName:"li"},"Sharing some examples of serverless functions built and shared by our community members."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Azure Function for CORS proxy by ",(0,n.kt)(a.Z,{to:"https://github.com/floAr",mdxType:"Link"},"Florian Uhde")," - Check the gist ",(0,n.kt)(a.Z,{to:"https://gist.github.com/floAr/95db6ed96b1b0cf70a0513698a3979f7",mdxType:"Link"},"HERE")),(0,n.kt)("li",{parentName:"ul"},"AWS Lambda Function for CORS proxy by ",(0,n.kt)(a.Z,{to:"https://github.com/AustinWoetzel",mdxType:"Link"},"Austin Woetze")," - Check the gist ",(0,n.kt)(a.Z,{to:"https://gist.github.com/AustinWoetzel/da808287f35effd2419ef44ed8593054",mdxType:"Link"},"HERE")),(0,n.kt)("li",{parentName:"ul"},"Template if you want to host your own nginx server - ",(0,n.kt)(a.Z,{to:"https://github.com/figment-networks/datahub-cors-dev-proxy",mdxType:"Link"},"DataHub CORS Development Proxy"))))),(0,n.kt)("h4",{id:"references"},"References"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)(a.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",mdxType:"Link"},"Mozilla MDN Web Docs")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)(a.Z,{to:"https://medium.com/bigcommerce-developer-blog/lets-talk-about-cors-84800c726919",mdxType:"Link"},"Big Commoerce Devloper Blog"))))}m.isMDXComponent=!0}}]);