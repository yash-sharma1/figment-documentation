"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,g=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={title:"Contribution Guidelines",sidebar_position:9},a=void 0,s={unversionedId:"terms-and-conditions/contribution-guidelines",id:"terms-and-conditions/contribution-guidelines",title:"Contribution Guidelines",description:"So you've decided to contribute to Figment Docs? We're excited to have you among our contributors! We welcome all kind of contribution to the documentation. Please review the guidelines below to make sure your contribution PR follows the style and quality of the existing content on Figment Docs.",source:"@site/docs/terms-and-conditions/contribution-guidelines.mdx",sourceDirName:"terms-and-conditions",slug:"/terms-and-conditions/contribution-guidelines",permalink:"/terms-and-conditions/contribution-guidelines",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Contribution Guidelines",sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Terms & Conditions DataHub",permalink:"/terms-and-conditions/terms-and-conditions-datahub"},next:{title:"Contributor Terms",permalink:"/terms-and-conditions/contributor-terms"}},u={},l=[{value:"Contribution Process",id:"contribution-process",level:2},{value:"Guideline and Rules for Contributing",id:"guideline-and-rules-for-contributing",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So you've decided to contribute to Figment Docs? We're excited to have you among our contributors! We welcome all kind of contribution to the documentation. Please review the guidelines below to make sure your contribution PR follows the style and quality of the existing content on Figment Docs."),(0,r.kt)("h2",{id:"contribution-process"},"Contribution Process"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Submit an issue")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you want contribute & improve docs by fixing guides, content, typos, reporting deprecated endpoints then please go ahead and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/figment-networks/figment-documentation/issues/new"},"create a new issue first"),"."),(0,r.kt)("li",{parentName:"ul"},"Submit the issue with as much as details you can.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to contribute to JSON-RPC methods by reporting deprecated methods, updating existing methods and adding new methods, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/figment-networks/figment-documentation/issues/new"},"create a new issue")," with complete details and our team will resolve it because JSON-RPC API methods can only be modified by internal team members.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Fork the repository")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now, fork and then clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/figment-networks/figment-documentation"},"Figment Documentation")," repository on GitHub. It's important that you have the most recent version of documentation before you start your contribution. If you have already cloned it, make sure to pull down the latest changes."),(0,r.kt)("li",{parentName:"ul"},"Create a new git branch in your local repository, you can name it however you want, though we prefer if you pick a name relevant to your contribution. (Example: typo-fixes).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Contribute")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make the changes in the content and docs as what you described in your issue, once you're done & ready to submit your changes ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"open a Pull Request")," from your branch. We'll be notified and will start the review process:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Please make every effort to submit only the final draft of your changes"),". If there are significant changes to be made before we can merge your PR, it will take much longer to review and have you make the appropriate changes."),(0,r.kt)("li",{parentName:"ul"},"Once we've reviewed your submission and you've made any necessary changes, we'll merge the Pull Request and the contributed changes will be published on Figment Docs.")),(0,r.kt)("h2",{id:"guideline-and-rules-for-contributing"},"Guideline and Rules for Contributing"),(0,r.kt)("p",null,"There are a few basic ground-rules for contributors:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"No ",(0,r.kt)("inlineCode",{parentName:"strong"},"--force")," pushes")," or modifying the Git history in any way."),(0,r.kt)("li",{parentName:"ol"},"Pull requests are preferred to issues, especially for small changes such as typos. Issues should be used for generic or broad-based changes or missing content. Suggestions and requests are encouraged."),(0,r.kt)("li",{parentName:"ol"},"Only use ",(0,r.kt)("strong",{parentName:"li"},"non-master branches"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Use Markdown properly")," throughout your changes. Refer to ",(0,r.kt)("a",{parentName:"li",href:"https://guides.github.com/features/mastering-markdown/"},"GitHub's markdown guide"),"."),(0,r.kt)("li",{parentName:"ol"},"Do not use any markdown formatting in a section heading."),(0,r.kt)("li",{parentName:"ol"},"Remember to leave a blank line before and after all code blocks."),(0,r.kt)("li",{parentName:"ol"},"Use a linter & prettifier before pasting your code into code blocks. We recommend ",(0,r.kt)("strong",{parentName:"li"},"eslint")," for JavaScript/React. Use ",(0,r.kt)("strong",{parentName:"li"},"prettier")," for code formatting.")))}d.isMDXComponent=!0}}]);