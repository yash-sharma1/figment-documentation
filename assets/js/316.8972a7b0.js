(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[316],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var i=2;i<c;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4672:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(7294),r=n(6010),c=n(195),a=n(5999);const s={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function l(e){let{code:t,className:n}=e;const[l,i]=(0,o.useState)(!1),u=(0,o.useRef)(void 0),p=(0,o.useCallback)((()=>{(0,c.Z)(t),i(!0),u.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(u.current)),[]),o.createElement("button",{type:"button","aria-label":l?(0,a.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,a.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,a.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,s.copyButton,l&&s.copyButtonCopied),onClick:p},o.createElement("span",{className:s.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:s.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:s.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},7643:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var o=n(7462),r=n(7294),c=n(2389),a=n(6010),s=n(6412),l=n(5281),i=n(7594),u=n.n(i);const p=/title=(?<quote>["'])(?<title>.*?)\1/,d=/\{(?<range>[\d,-]+)\}/,m={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function f(e,t){const n=e.map((e=>{const{start:n,end:o}=m[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function y(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:c}=t;if(c&&d.test(c)){const e=c.match(d).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+c+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=r[0].className,o=u()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"],t);case"jsx":case"tsx":return f(["js","jsBlock","jsx"],t);case"html":return f(["js","jsBlock","html"],t);case"python":case"py":case"bash":return f(["bash"],t);case"markdown":case"md":return f(["html","jsx","bash"],t);default:return f(Object.keys(m),t)}}(o,r),s=n.split("\n"),l=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),p=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),y=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let u=0;u<s.length;){const e=s[u].match(a);if(!e){u+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=u+",":p[t]?l[p[t]].start=u:y[t]&&(l[y[t]].range+=l[y[t]].start+"-"+(u-1)+","),s.splice(u,1)}n=s.join("\n");const g={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;u()(n).forEach((e=>{null!=g[e]||(g[e]=[]),g[e].push(t)}))})),{lineClassNames:g,code:n}}const g="codeBlockContainer_Ckt0";function h(e){let{as:t,...n}=e;const c=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const c=t[o];c&&"string"==typeof r&&(n[c]=r)})),n}((0,s.p)());return r.createElement(t,(0,o.Z)({},n,{style:c,className:(0,a.Z)(n.className,g,l.k.common.codeBlock)}))}const b={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function v(e){let{children:t,className:n}=e;return r.createElement(h,{as:"pre",tabIndex:0,className:(0,a.Z)(b.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:b.codeBlockLines},t))}var k=n(6668),E=n(902);const N={attributes:!0,characterData:!0,childList:!0,subtree:!0};function B(e,t){const[n,o]=(0,r.useState)(),c=(0,r.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=N);const o=(0,E.zX)(t),c=(0,E.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var j=n(3746);const w="codeLine_lJS_",C="codeLineNumber_Tfdd",O="codeLineContent_feaV";function L(e){let{line:t,classNames:n,showLineNumbers:c,getLineProps:s,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,a.Z)(n,c&&w)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return r.createElement("span",i,c?r.createElement(r.Fragment,null,r.createElement("span",{className:C}),r.createElement("span",{className:O},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var P=n(4672),T=n(5999);const x="wordWrapButtonIcon_Bwma",S="wordWrapButtonEnabled_EoeP";function _(e){let{className:t,onClick:n,isEnabled:o}=e;const c=(0,T.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,o&&S),"aria-label":c,title:c},r.createElement("svg",{className:x,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Z(e){var t;let{children:n,className:c="",metastring:l,title:i,showLineNumbers:u,language:d}=e;const{prism:{defaultLanguage:m,magicComments:f}}=(0,k.L)(),g=null!=(t=null!=d?d:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(c))?t:m,v=(0,s.p)(),E=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),c=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),s=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return B(c,s),(0,r.useEffect)((()=>{s()}),[e,s]),(0,r.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:a}}(),N=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(p))?void 0:n.groups.title)?t:""}(l)||i,{lineClassNames:w,code:C}=y(n,{metastring:l,language:g,magicComments:f}),O=null!=u?u:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(l);return r.createElement(h,{as:"div",className:(0,a.Z)(c,g&&!c.includes("language-"+g)&&"language-"+g)},N&&r.createElement("div",{className:b.codeBlockTitle},N),r.createElement("div",{className:b.codeBlockContent},r.createElement(j.ZP,(0,o.Z)({},j.lG,{theme:v,code:C,language:null!=g?g:"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:c}=e;return r.createElement("pre",{tabIndex:0,ref:E.codeBlockRef,className:(0,a.Z)(t,b.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,a.Z)(b.codeBlockLines,O&&b.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(L,{key:t,line:e,getLineProps:o,getTokenProps:c,classNames:w[t],showLineNumbers:O})))))})),r.createElement("div",{className:b.buttonGroup},(E.isEnabled||E.isCodeScrollable)&&r.createElement(_,{className:b.codeButton,onClick:()=>E.toggle(),isEnabled:E.isEnabled}),r.createElement(P.Z,{className:b.codeButton,code:C}))))}function I(e){let{children:t,...n}=e;const a=(0,c.Z)(),s=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof s?Z:v;return r.createElement(l,(0,o.Z)({key:String(a)},n),s)}},6412:(e,t,n)=>{"use strict";n.d(t,{p:()=>c});var o=n(2949),r=n(6668);function c(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,c=e.darkTheme||n;return"dark"===t?c:n}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},3746:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f,lG:()=>a});var o=n(7410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c=n(7294),a={Prism:o.Z,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=l({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=l({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,c=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(c.style=a.plain),void 0!==r&&(c.style=void 0!==c.style?l({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return c[n[0]];var a=o?{display:"inline-block"}:{},s=n.map((function(e){return c[e]}));return Object.assign.apply(Object,[a].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,c=e.token,a=l({},m(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==r&&(a.style=void 0!==a.style?l({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var c=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,c=this.getThemeDict(this.props),a=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],c=0,a=0,s=[],l=[s];a>-1;){for(;(c=o[a]++)<r[a];){var d=void 0,m=t[a],f=n[a][c];if("string"==typeof f?(m=a>0?m:["plain"],d=f):(m=p(m,f.type),f.alias&&(m=p(m,f.alias)),d=f.content),"string"==typeof d){var y=d.split(i),g=y.length;s.push({types:m,content:y[0]});for(var h=1;h<g;h++)u(s),l.push(s=[]),s.push({types:m,content:y[h]})}else a++,t.push(m),n.push(d),o.push(0),r.push(d.length)}a--,t.pop(),n.pop(),o.pop(),r.pop()}return u(s),l}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(c.Component)},195:(e,t,n)=>{"use strict";function o(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection();let a=!1;c.rangeCount>0&&(a=c.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}return o.remove(),a&&(c.removeAllRanges(),c.addRange(a)),r&&r.focus(),s}n.d(t,{Z:()=>o})}}]);