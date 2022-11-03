"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8897],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>b});var n=t(7294);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=l(t),b=c,u=p["".concat(s,".").concat(b)]||p[b]||f[b]||i;return t?n.createElement(u,o(o({ref:a},d),{},{components:t})):n.createElement(u,o({ref:a},d))}));function b(e,a){var t=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var i=t.length,o=new Array(i);o[0]=p;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:c,o[1]=r;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4498:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=t(7462),c=(t(7294),t(3905));const i={title:"Submit Split Stake Account Data",slug:"/guides/staking-api/solana/split-stake-account/submit-split-stake-account-data"},o=void 0,r={unversionedId:"guides/staking-api/Solana/split-stake/submit-split-stake-account-data",id:"guides/staking-api/Solana/split-stake/submit-split-stake-account-data",title:"Submit Split Stake Account Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to proceed to the next step.",source:"@site/docs/guides/staking-api/Solana/split-stake/2_submit-split-stake-account-data.mdx",sourceDirName:"guides/staking-api/Solana/split-stake",slug:"/guides/staking-api/solana/split-stake-account/submit-split-stake-account-data",permalink:"/guides/staking-api/solana/split-stake-account/submit-split-stake-account-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Split Stake Account Data",slug:"/guides/staking-api/solana/split-stake-account/submit-split-stake-account-data"},sidebar:"docsSidebar",previous:{title:"Create New Split Stake Account Flow",permalink:"/guides/staking-api/solana/split-stake-account/create-new-flow"},next:{title:"Sign Split Stake Account Transaction",permalink:"/guides/staking-api/solana/split-stake-account/sign-split-stake-account-transaction"}},s={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:3},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],d={toc:l};function f(e){let{components:a,...t}=e;return(0,c.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"After collecting the required inputs, send a ",(0,c.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,c.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step."),(0,c.kt)("h3",{id:"parameters"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"object"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"funding_account_pubkey")," ","\u2014"," The public key of the wallet which will pay the transaction fee (required)."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"source_stake_account_pubkey")," ","\u2014"," The existing stake account from which partial SOL balance will be split (required)."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," The amount of SOL to be transferred to the new stake account. This field should be in full SOL, not in lamports (i.e., if you want to fund the new stake account with 5 SOL, return ",(0,c.kt)("inlineCode",{parentName:"li"},'"amount": 5.0'),"). The Staking API will translate the amount to lamports so you do not have to worry about the conversion factor. Lamports are fractional SOLs (required).")))),(0,c.kt)("h3",{id:"sample-curl-request"},"Sample cURL Request"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X PUT \'https://solana-slate.datahub.figment.io/api/v1/flows/730fbe4e-c4b4-480f-b3c5-4a25bfbd5cf3/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "create_split_tx",\n    "inputs": {\n        "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n        "source_stake_account_pubkey": "5YofNaQJ24cgp5hzJgMKSwi16188WiBgfdbWkxbG4FWP",\n        "amount": 2.0\n    }\n}\'\n')),(0,c.kt)("h3",{id:"response"},"Response"),(0,c.kt)("p",null,"The response indicates two possible ",(0,c.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"refresh_split_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., the recent blockhash has expired)."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"sign_split_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,c.kt)("p",null,"We will choose ",(0,c.kt)("inlineCode",{parentName:"p"},"sign_split_tx"),", which indicates one input to collect:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,c.kt)("h4",{id:"sample-response"},"Sample Response"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json",metastring:"{21}","{21}":!0},'{\n  "id": "730fbe4e-c4b4-480f-b3c5-4a25bfbd5cf3",\n  "state": "split_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_split_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_split_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy"],\n          "transaction_payload": "02000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009ddddac8a30dc9fc1acf5f382053baa0361b6a17893870990d5bf737ba4b3928022f023fa9321cf5e5733f46dac33f38895033ed9b971f6dac45b888c2f0820b02000205f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5346470f21e6c4adecb9fea26af26204f59922f67ff546f4fc2a5bd3629489084b343948361c22b11cd116005a3958e080c5bfdbe055e8747af254c0756dbf8ac88000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc0000000002c53da186ffceba53ca9a5c2797a902c5a8f9b35b1493efeaebb1189583be2ac020302000134000000000000000000000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000004030201000c030000000094357700000000"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy"],\n          "transaction_payload": "02000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009ddddac8a30dc9fc1acf5f382053baa0361b6a17893870990d5bf737ba4b3928022f023fa9321cf5e5733f46dac33f38895033ed9b971f6dac45b888c2f0820b02000205f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5346470f21e6c4adecb9fea26af26204f59922f67ff546f4fc2a5bd3629489084b343948361c22b11cd116005a3958e080c5bfdbe055e8747af254c0756dbf8ac88000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc0000000002c53da186ffceba53ca9a5c2797a902c5a8f9b35b1493efeaebb1189583be2ac020302000134000000000000000000000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000004030201000c030000000094357700000000",\n          "signing_payload": "02000205f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5346470f21e6c4adecb9fea26af26204f59922f67ff546f4fc2a5bd3629489084b343948361c22b11cd116005a3958e080c5bfdbe055e8747af254c0756dbf8ac88000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc0000000002c53da186ffceba53ca9a5c2797a902c5a8f9b35b1493efeaebb1189583be2ac020302000134000000000000000000000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000004030201000c030000000094357700000000"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "source_stake_account_pubkey": "5YofNaQJ24cgp5hzJgMKSwi16188WiBgfdbWkxbG4FWP",\n    "amount": "2.0",\n    "split_transaction": {\n      "raw": "02000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009ddddac8a30dc9fc1acf5f382053baa0361b6a17893870990d5bf737ba4b3928022f023fa9321cf5e5733f46dac33f38895033ed9b971f6dac45b888c2f0820b02000205f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5346470f21e6c4adecb9fea26af26204f59922f67ff546f4fc2a5bd3629489084b343948361c22b11cd116005a3958e080c5bfdbe055e8747af254c0756dbf8ac88000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc0000000002c53da186ffceba53ca9a5c2797a902c5a8f9b35b1493efeaebb1189583be2ac020302000134000000000000000000000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000004030201000c030000000094357700000000",\n      "signing_payload": "02000205f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a5346470f21e6c4adecb9fea26af26204f59922f67ff546f4fc2a5bd3629489084b343948361c22b11cd116005a3958e080c5bfdbe055e8747af254c0756dbf8ac88000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc0000000002c53da186ffceba53ca9a5c2797a902c5a8f9b35b1493efeaebb1189583be2ac020302000134000000000000000000000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000004030201000c030000000094357700000000",\n      "signed": null,\n      "hash": null,\n      "status": null,\n      "error": null,\n      "signatures": null\n    },\n    "source_stake_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "destination_stake_account_pubkey": "7m5fFsdZNdoifnmToR23rK14V2Yoxw3omD1V8vy21kXC"\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-11-02T04:25:28.997Z",\n  "updated_at": "2022-11-02T04:26:12.019Z"\n}\n')),(0,c.kt)("admonition",{title:"note",type:"info"},(0,c.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,c.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}f.isMDXComponent=!0}}]);