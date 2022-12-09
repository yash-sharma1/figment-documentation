"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5787],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=n.createContext({}),o=function(e){var a=n.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=o(e.components);return n.createElement(b.Provider,{value:a},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,d=e.originalType,b=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=o(t),f=i,u=l["".concat(b,".").concat(f)]||l[f]||p[f]||d;return t?n.createElement(u,r(r({ref:a},s),{},{components:t})):n.createElement(u,r({ref:a},s))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var d=t.length,r=new Array(d);r[0]=f;var c={};for(var b in a)hasOwnProperty.call(a,b)&&(c[b]=a[b]);c.originalType=e,c[l]="string"==typeof e?e:i,r[1]=c;for(var o=2;o<d;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4859:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>r,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var n=t(7462),i=(t(7294),t(3905));const d={title:"Submit Withdrawal Transaction Data",slug:"/guides/staking-api/solana/undelegate/submit-withdrawal-transaction-data"},r=void 0,c={unversionedId:"guides/staking-api/Solana/undelegate/submit-withdrawal-transaction-data",id:"guides/staking-api/Solana/undelegate/submit-withdrawal-transaction-data",title:"Submit Withdrawal Transaction Data",description:"After deactivation, we see there is one action \u2014 createwithdrawtx &mdash; and three required fields for data collection:",source:"@site/docs/guides/staking-api/Solana/undelegate/6_submit-withdrawal-transaction-data.mdx",sourceDirName:"guides/staking-api/Solana/undelegate",slug:"/guides/staking-api/solana/undelegate/submit-withdrawal-transaction-data",permalink:"/guides/staking-api/solana/undelegate/submit-withdrawal-transaction-data",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Submit Withdrawal Transaction Data",slug:"/guides/staking-api/solana/undelegate/submit-withdrawal-transaction-data"},sidebar:"docsSidebar",previous:{title:"Get Flow Status",permalink:"/guides/staking-api/solana/undelegate/get-flow-status-deactivated"},next:{title:"Sign the Withdrawal Transaction",permalink:"/guides/staking-api/solana/undelegate/sign-withdrawal-transaction"}},b={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],s={toc:o};function l(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After deactivation, we see there is one action \u2014 ",(0,i.kt)("inlineCode",{parentName:"p"},"create_withdraw_tx")," ","\u2014"," and three required fields for data collection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," The number of SOL to be withdrawn. Partial withdrawal is possible."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"funding_account_pubkey")," ","\u2014"," The address of the account that will pay the transaction fee."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recipient_pubkey")," ","\u2014"," The address of the wallet to which the withdrawn SOL will be sent.")),(0,i.kt)("admonition",{title:"important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that the recipient of the withdrawal is ",(0,i.kt)("em",{parentName:"p"},"not")," the originating address by default!")),(0,i.kt)("p",null,"Once this data has been collected, submit it to the Staking API with a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next"),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The number of SOL to be withdrawn. Partial withdrawal is possible (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"funding_account_pubkey")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The address of the account that will pay the transaction fee (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recipient_pubkey")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," the number of SOL to be withdrawn. Partial withdrawal is possible (required).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-11}","{5-11}":!0},'curl -X PUT \'https://solana-slate.datahub.figment.io/api/v1/flows/b5fb1f97-bd9d-4207-bfe1-112d33309820/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "create_withdraw_tx",\n  "inputs": {\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "recipient_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "amount": 1.5\n  }\n  }\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"Note that, in this response, you can find the unsigned, serialized transaction in ",(0,i.kt)("inlineCode",{parentName:"p"},"data[create_withdraw_transaction][raw]"),"."),(0,i.kt)("p",null,"There are two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_withdraw_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., the recent blockhash has expired)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_withdraw_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("p",null,"We will choose ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_withdraw_tx"),", which indicates one input to collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3,6,10,19}","{3,6,10,19}":!0},'{\n  "id": "b5fb1f97-bd9d-4207-bfe1-112d33309820",\n  "state": "withdraw_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_withdraw_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_withdraw_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy"],\n          "transaction_payload": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff40000001c9417dc40f25f3e768dee698a7eedcb2b68e40a3833c34588e73d29e6fd2b2f01020501000304000c04000000002f685900000000"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy"],\n          "transaction_payload": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff40000001c9417dc40f25f3e768dee698a7eedcb2b68e40a3833c34588e73d29e6fd2b2f01020501000304000c04000000002f685900000000",\n          "signing_payload": "01000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff40000001c9417dc40f25f3e768dee698a7eedcb2b68e40a3833c34588e73d29e6fd2b2f01020501000304000c04000000002f685900000000"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "stake_account_pubkey": "FNN2VwQy5TMkVegyXyejbwKL5S1SvRkmYHkoK62FReo7",\n    "stake_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "withdraw_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "deactivate_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000",\n      "signing_payload": "01000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000",\n      "signed": "0152c4cb266798cfe2cf1f542d6713ccc365e6052282301aee4292217326c0dff37ca07a39df7930b96570242b5b7405ce2bde1f748f75c1b9e833829cbdc9520b01000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000",\n      "hash": "2eynfQTjXTcJSTmsVSgPKNefVLKG6sJEx1ArhtWqieHXuQ3UnYHvcvaArscjsaCz2WBuSTTALNf6rAaCj9iN8Ddk",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    },\n    "delegation_active_amount": "0.0",\n    "delegation_inactive_amount": "1497717120.0",\n    "delegation_status": "inactive",\n    "delegation_status_error": null,\n    "recipient_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "withdraw_amount": "1.5",\n    "withdraw_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff40000001c9417dc40f25f3e768dee698a7eedcb2b68e40a3833c34588e73d29e6fd2b2f01020501000304000c04000000002f685900000000",\n      "signing_payload": "01000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff40000001c9417dc40f25f3e768dee698a7eedcb2b68e40a3833c34588e73d29e6fd2b2f01020501000304000c04000000002f685900000000",\n      "signed": null,\n      "hash": null,\n      "status": null,\n      "error": null,\n      "signatures": null\n    },\n    "withdraw_transaction_funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "estimated_inactive_at": "2022-10-07T14:30:23.200Z"\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-05T17:37:31.573Z",\n  "updated_at": "2022-10-07T18:13:01.869Z"\n}\n')),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}l.isMDXComponent=!0}}]);