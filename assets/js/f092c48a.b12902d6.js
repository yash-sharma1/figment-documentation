"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905)),i=n(39960);const r={title:"Network Guide",sidebar_position:3},l=void 0,s={unversionedId:"guides/network-guide",id:"guides/network-guide",title:"Network Guide",description:"See what makes a network special and find out which one is a good fit for you",source:"@site/docs/guides/network-guide.mdx",sourceDirName:"guides",slug:"/guides/network-guide",permalink:"/guides/network-guide",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Network Guide",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Response Codes & Error Codes",permalink:"/guides/response-codes-and-error-codes"},next:{title:"Web3 Glossary",permalink:"/guides/glossary"}},c={},u=[{value:"Choosing a Network",id:"choosing-a-network",level:2},{value:"Testnet",id:"testnet",level:3},{value:"Mainnet",id:"mainnet",level:3},{value:"Arbitrum",id:"arbitrum",level:2},{value:"Avalanche",id:"avalanche",level:2},{value:"BNB",id:"bnb",level:2},{value:"Celo",id:"celo",level:2},{value:"Cosmos",id:"cosmos",level:2},{value:"Ethereum",id:"ethereum",level:2},{value:"Fantom",id:"fantom",level:2},{value:"Kusama",id:"kusama",level:2},{value:"Mina",id:"mina",level:2},{value:"NEAR",id:"near",level:2},{value:"Optimism",id:"optimism",level:2},{value:"Osmosis",id:"osmosis",level:2},{value:"Polkadot",id:"polkadot",level:2},{value:"Polygon",id:"polygon",level:2},{value:"Solana",id:"solana",level:2}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"See what makes a network special and find out which one is a good fit for you"),(0,a.kt)("h2",{id:"choosing-a-network"},"Choosing a Network"),(0,a.kt)("p",null,"Each Web3 protocol has its own way of operating and can have a multitude of networks and environments to build on. Be sure to understand what's available before getting started!"),(0,a.kt)("h3",{id:"testnet"},"Testnet"),(0,a.kt)("p",null,"If you're a developer considering building on a network and want to experiment before deploying in a production environment, you should first build on its testnet. You will be able to try tutorials and dive deeper into the network's available methods, without the on-chain costs affiliated with smart contract deployment.\nYou should always be able to obtain testnet tokens via a faucet. You can find the links on the network pages under \"Network Documentation\" on Learn."),(0,a.kt)("h3",{id:"mainnet"},"Mainnet"),(0,a.kt)("p",null,"When you are ready to move to a production environment, you can deploy your application on the network's mainnet. On mainnet, you will be able to process real-world public transactions and events and start attracting real users to get you to the next level.\n\u200b"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"arbitrum"},"Arbitrum"),(0,a.kt)("p",null,"Arbitrum is a suite of Ethereum scaling solutions that enable high-throughput, low-cost smart contracts while remaining trustlessly secure. Arbitrum has three modes: AnyTrust Channels, AnyTrust Sidechains, and Arbitrum Rollup."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Arbitrum \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/arbitrum",mdxType:"Link"},"HERE")),(0,a.kt)("h2",{id:"avalanche"},"Avalanche"),(0,a.kt)("p",null,"Avalanche is a layer one protocol by Ava Labs that offers high-throughput, fast finality, and unprecedented decentralization. Developers are able to launch their own public or private blockchains (called subnets), create and trade digital assets, and build scalable smart contracts and decentralized applications."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Avalanche \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/avalanche-c-chain",mdxType:"Link"},"HERE")),(0,a.kt)("h2",{id:"bnb"},"BNB"),(0,a.kt)("p",null,"BNB Chain is composed of two blockchains - Beacon Chain (BC) and BNB Smart Chain (BSC). The Beacon Chain is the blockchain component that is responsible for the governance of the BNB Chain and manages staking and voting on the BNB Chain. Whereas, the BNB Smart Chain is the blockchain component that is EVM compatible, consensus layers, and with hubs to multi-chains."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for BNB ",(0,a.kt)(i.Z,{to:"/api-reference/node-api/bnb",mdxType:"Link"},"HERE")),(0,a.kt)("h2",{id:"celo"},"Celo"),(0,a.kt)("p",null,"Celo is a smart contract blockchain network. The technology uses a phone-number-based identity system with address-based encryption and eigentrust-based reputation. Their first application is a social payments system that can be used on a smartphone."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Celo \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/celo",mdxType:"Link"},"HERE")),(0,a.kt)("h2",{id:"cosmos"},"Cosmos"),(0,a.kt)("p",null,"Cosmos provides tools that make it easy to build a new, custom-designed blockchain that may interoperate with an arbitrary number of others in the Cosmos network. Its transactions are fast and low-cost, and the network is scalable. Cosmos is intended to break the silos of blockchain economies by enabling assets to be transferred between one another. A custom Cosmos blockchain can be securely connected with other blockchains, increasing the rate of adoption and liquidity."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Cosmos \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/cosmos-lcd",mdxType:"Link"},"HERE"),"\n\u200b"),(0,a.kt)("h2",{id:"ethereum"},"Ethereum"),(0,a.kt)("p",null,"Ethereum is a decentralized, open-source blockchain with smart contract functionality. It's a marketplace of financial services, games and apps that can't steal your data or censor you. Ethereum is one of the largest and most popular blockchain networks among developers."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Ethereum \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/ethereum",mdxType:"Link"},"HERE"),"\n\u200b"),(0,a.kt)("h2",{id:"fantom"},"Fantom"),(0,a.kt)("p",null,"Fantom is a high-performance, scalable, EVM-compatible, and secure smart-contract platform. Fantom\u2019s mainnet deployment ","\u2014"," Fantom Opera ","\u2014"," is built on Fantom\u2019s consensus mechanism. Fantom is a leaderless, asynchronous, and byzantine fault-tolerant Layer 1 blockchain protocol."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Fantom \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/fantom",mdxType:"Link"},"HERE"),"\n\u200b"),(0,a.kt)("h2",{id:"kusama"},"Kusama"),(0,a.kt)("p",null,"Kusama is an early release of Polkadot: a scalable, multichain network for radical innovation. Kusama serves as a proving ground that allows teams and developers to build and deploy a parachain, and experiment with Polkadot\u2019s governance and NPoS functionality in a real environment."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Kusama \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/kusama",mdxType:"Link"},"HERE"),"\n\u200b"),(0,a.kt)("h2",{id:"mina"},"Mina"),(0,a.kt)("p",null,"Mina is the first cryptocurrency protocol with a succinct blockchain. Current cryptocurrencies like Bitcoin and Ethereum store hundreds of gigabytes of data, and as time goes on, their blockchains will only increase in size. With Mina, however, no matter how much the usage grows, the blockchain always stays the same size - about 22kb (the size of a few tweets). This means participants can quickly sync and verify the network."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Mina \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/mina-graphql",mdxType:"Link"},"HERE"),"\n\u200b"),(0,a.kt)("h2",{id:"near"},"NEAR"),(0,a.kt)("p",null,"NEAR is a decentralized application platform that is secure enough to manage high-value assets like money or identity and performant enough to make them useful for everyday people, putting the power of the Open Web in their hands."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for NEAR \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/near",mdxType:"Link"},"HERE")),(0,a.kt)("h2",{id:"optimism"},"Optimism"),(0,a.kt)("p",null,"Optimism is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum while reducing its cost and latency."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Optimism ",(0,a.kt)(i.Z,{to:"/api-reference/node-api/optimism",mdxType:"Link"},"HERE")),(0,a.kt)("h2",{id:"osmosis"},"Osmosis"),(0,a.kt)("p",null,"Osmosis is an advanced AMM protocol built using the Cosmos SDK that will allow developers to design, build, and deploy their own customized AMMs."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Osmosis \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/osmosis-lcd",mdxType:"Link"},"HERE")),(0,a.kt)("h2",{id:"polkadot"},"Polkadot"),(0,a.kt)("p",null,"Polkadot enables scalability by allowing specialized blockchains to communicate with each other in a secure, trust-free environment. It is built to connect and secure unique blockchains, whether they be public, permission-less networks, private consortium chains, or oracles and other Web3 technologies. It enables an internet where independent blockchains can exchange information under common security guarantees."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Polkadot \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/polkadot",mdxType:"Link"},"HERE")),(0,a.kt)("h2",{id:"polygon"},"Polygon"),(0,a.kt)("p",null,"Polygon (Matic) Network is a sidechain-based scaling solution for public blockchains. It is based on an adapted implementation of Plasma framework. Polygon (Matic) provides scalability while ensuring a superior user experience in a secured and decentralized manner."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Polygon \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/polygon",mdxType:"Link"},"HERE")),(0,a.kt)("h2",{id:"solana"},"Solana"),(0,a.kt)("p",null,"Solana is an open-source project implementing a new, high-performance, permissionless blockchain. Solana features a new timestamp system called Proof-of-History (PoH) that enables automatically ordered transactions. It also uses a Proof of Stake (PoS) consensus algorithm to help secure the network."),(0,a.kt)("p",null,"If you're ready to dive right in, check out the full RPC API documentation for Solana \u200b",(0,a.kt)(i.Z,{to:"/api-reference/node-api/solana",mdxType:"Link"},"HERE")))}h.isMDXComponent=!0}}]);