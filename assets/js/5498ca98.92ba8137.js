"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[108],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(b,i(i({ref:t},c),{},{components:a})):r.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>b});var r=a(7462),n=(a(7294),a(3905));const o=a.p+"assets/images/create_new_app-b2a604604b8e9c7ed713ebfeba34c1d5.png";var i=a(8068);const p=a.p+"assets/images/dashboard_apps-baef0b47f653b9ddddf52d892c1386f9.png";var l=a(9161);const s=a.p+"assets/images/protocol_api_key-f87431c415191c6fede5d1a5d150250d.png",c={title:"Create an App",sidebar_position:2},u=void 0,d={unversionedId:"quickstart/create-an-app",id:"quickstart/create-an-app",title:"Create an App",description:"From the Dashboard",source:"@site/docs/quickstart/create-an-app.mdx",sourceDirName:"quickstart",slug:"/quickstart/create-an-app",permalink:"/quickstart/create-an-app",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create an App",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/quickstart/overview"},next:{title:"DataHub Architecture",permalink:"/quickstart/architecture"}},m={},b=[{value:"From the Dashboard",id:"from-the-dashboard",level:2},{value:"API Key",id:"api-key",level:2}],f={toc:b};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"from-the-dashboard"},"From the Dashboard"),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Create New App")," to create a new app and add it to the Dashboard."),(0,n.kt)("img",{src:i.Z,alt:"Create New App",width:"700",className:"shadow--tl inline-image"}),(0,n.kt)("p",null,"Here you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Give your app a name, so that you can identify it."),(0,n.kt)("li",{parentName:"ul"},"Select which environment your app is in: ",(0,n.kt)("strong",{parentName:"li"},"Staging")," or ",(0,n.kt)("strong",{parentName:"li"},"Production"),". This is a visual tag for you to label whether an app is your staging or production environment."),(0,n.kt)("li",{parentName:"ul"},"Pick a protocol to use","\u2014","apps must have at least one protocol.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You will be able to add more protocols later, up to the limit of your app plan.")))),(0,n.kt)("img",{src:o,alt:"Create New App",width:"500",className:"shadow--tl inline-image"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Dashboard will display any apps you have created. Apps can be deleted from the ",(0,n.kt)("strong",{parentName:"li"},"Settings")," tab.")),(0,n.kt)("img",{src:p,alt:"Dashboard Apps",width:"500",className:"shadow--tl inline-image"}),(0,n.kt)("h2",{id:"api-key"},"API Key"),(0,n.kt)("p",null,"Your API key is available on the ",(0,n.kt)("strong",{parentName:"p"},"Overview")," tab of your Dashboard when viewing an app. It is also available from the ",(0,n.kt)("strong",{parentName:"p"},"Example")," link when viewing Protocol details from the ",(0,n.kt)("strong",{parentName:"p"},"Protocols")," tab."),(0,n.kt)("img",{src:l.Z,alt:"Dashboard API Key",width:"500",className:"shadow--tl inline-image"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("img",{src:s,alt:"Protocol API Key",width:"500",className:"shadow--tl inline-image"}))}h.isMDXComponent=!0},9161:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard_api_key-6e68a9721c12fb13659baf1cda21c0c8.png"},8068:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/datahub_guide_1-834cdadfef197d755bb6eb26611815da.png"}}]);