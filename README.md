<p style="margin-top:50px" align="center">
<img src="https://www.hicetnunc.xyz/og-image.jpg" alt="alt text" width="400">
</p>

# hic et nunc API Guide
### Build websites and Node.js scripts with [hic et nunc](hicetnunc.xyz/) data
#### hic et nunc is a decentralized NFT marketplace built on the Tezos blockchain. This Github repo is a guide for using Tezos APIs to build rich web experiences with [Hic et nunc](hicetnunc.xyz/) data.

#### Code Examples

- Metadata Generator (Web Example): [https://hen-metadata.web.app/](https://hen-metadata.web.app/)
    - Fetch OBJKT meta data using a hicetnunc.xyz URL or OBJKT ID
    - Uses Webpack, Axios and Tailwind CSS

- Get Collection from tZ address (Node.js Script): [Better Call Dev Example](/node-bcd)  
    - Node.js example showing how to download metadata on all balances held by a tZ address

#### Big Picture

Every single OBJKT in hic et nunc has it's metadata and IPFS link publicly available for download via a Tezos blockchain exlplorer API. The goal of this guide is to help developers integrate hic et nunc content into their applications and websites. Use these tools to build the future of distributed creative content.
#### Table of Contents  
- [Introduction](#build-websites-and-nodejs-scripts-with-hic-et-nunc-data)  
    - [Code Examples](#code-examples)  
    - [Big Picture](#big-picture)  
    - [Roadmap](#roadmap)  
    - [HeN Resources](#hic-et-nunc-resources) 
    - [Tezos-resources](#tezos-resources) 
- [General Information](#general-information)  
- [Tezos APIs](#tezos-api)  
- [Code Examples](#code-examples)  
- [Contact](#contact)  

#### Roadmap

1) ~~Release initial Better Call Dev Nodejs examples, Web Metadata Generator and Github Readme~~
3) Implement rate-limiting to outgoing messages using Bottleneck library
4) Add TZKT.IO API and compare against Better Call Dev for performance
5) Create a Node.js CLI for developers to quickly get OBJKT/tZ data
6) Convert example code snippets into full NPM library i.e: npm install hen-tools

#### Hic et nunc Resources
- [Hic et nunc Tools](hicetnunc.tools/)
- [Hic et nunc Discord](https://discord.gg/g7VQt5pJ)
- [Hic et nunc Github](https://github.com/hicetnunc2000/)

#### Tezos Resources
- [Tezos Block Explorer](http://tzkt.io/)
- [Better Call Dev API](https://better-call.dev/)
- [TZKT API Docs](https://api.tzkt.io/)

# hic et nunc
*here and now* 

### What is Hic Et Nunc?


[Hic et nunc](hicetnunc.xyz/) is a decentralized NFT marketplace built on the Tezos blockchain. It enables users to create, sell and interact with Tezos NFT's called OBJKTS. Each OBJKT holds a single artwork containing a 3d model, image, video, html snippet, glsl shader, etc. Hic et nunc lets creators limit how many digital versions of their work are in existence.

When a user uploads their content to hic et nunc, the actual file asset is uploaded to [IPFS](https://ipfs.io/), a decentralized storage network. The other metadata inputed via the minting process is stored in the Tezos blockchain. 

In order to fully appreciate hic et nunc, a basic knowledge of decentralized systems, cryptocurrency and blockchains is useful:

# Tezos API

In order to get metadata on a Tezos Wallet Address or hic et nunc OBJKT ID, you must interact with a Tezos blockchain explorer API. This guide focuses on the two most popular Tezos Blockchain Explorer APIS:

- [Better Call Dev API](https://better-call.dev/)
- ~~[Tezos Block Explorer](http://tzkt.io/)~~ (coming soon)

To get data from the above APIs we must send a REST GET message to their public API endpoint URLs. This can be done using Node.js and the [Axios](https://www.npmjs.com/package/axios) library. 

Here is an example of using Node.js to request an OBJKT's data using Node.js:

Check out more Node.js examples [here](/node-bcd)  


```ruby
async function getTokenInfo(id){
    try {
        const res = await axios.get('https://api.better-call.dev/v1/tokens/mainnet/metadata?token_id=' + id.toString())
        return res.data[0]
    } catch (error) {
        return null
    }
}

getTokenInfo(36899)

```

Response:

 ![image](https://user-images.githubusercontent.com/1003196/118856635-2b452b00-b8a5-11eb-8b27-ecc433f65e45.png)





# Code Examples
View more in depth documentation inside of each example's folder:
 
- [Better Call Dev Node.js Examples](/node-bcd)  
- [Metadata Generator Example](/web)  
- ~~[TZKT Node.js Examples]~~ (coming soon)


# General Information


#### Decentralized System

A decentralized system is one where a single entity does not have full control over the decision making, additions and upgrades of the system. A decentralized system is inherently communal, serving groups of interconnected relevant parties that want to transact with trust. In many cases decentralization is impossible to reach, a best attempt.

[Explainer Video on Decentralization](https://youtu.be/SrA7XTDCtok)

#### Blockchain 

A blockchain is a database that is built specifically to run on a decentralized p2p network and requires a set of 'checks and balances' to read, write and interact with it. Depending on the implementation, a blockchain can be either decentralized or centralized. Decentralization lends itself to certain ideas and for now the most common implementation of a decentralized blockchain is a cryptocurrency. 

#### Cryptocurrency 

A cryptocurrency is a digital medium to transact value on network not owned by a single entity or nation-state. Please refer to the [Bitcoin White Paper](https://bitcoin.org/bitcoin.pdf) and Dr. Daniel Kim's [video](https://www.youtube.com/watch?v=aC9Uu5BUxII) on monetary policy, inflation, central banking, encryption, Bitcoin and Monero.

#### NFT

An NFT stands for 'non-fungible-token' and was originally created as one of many smart contract types to use on the Ethereum network. Unlike a currency, an NFT is a receipt that uses a private key to verify your assocation to certain files, items and events that happen on the blockchain. NFTs are collected in wallets, which act as your digital backpack to collect moments and digital blockchain goods. 

# Contact
Created by [@ianpetrarca](https://www.twitter.com/ianpetrarca) - tz1LobSdhfUqYpMojXWHQLJPhFLEzUEd9JAn
