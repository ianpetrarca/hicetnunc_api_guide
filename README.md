# Hicetnunc / Better Call Dev API Guide
> A guide for using the Better Call Dev API to query and parse hic et nunc data.

## General Info
This project was created as a guide to query and parse hicetnunc OBJKT data rom the Better Call Dev REST API. Using these methods you can build auxiliary experiences for your hicetnunc creations on a website or Node.js server. This code repo includes two types of examples: Node.js server examples and a full static website example using Webpack.

## Roadmap

1)  ~~Release Better Call Dev Node / Web Examples using Axios library~~
2)  Add more Rate limiting features (look in Bottleneck library)
3)  Add TZKT.IO API and compare against Better Call Dev for performance
4)  Add simple html web demo that populates a table with message respose data

## Table of Contents  
- [What is Hicetnunc?](#what-is-hic-et-nunc)  
- [Project Setup](#project-setup)  
- [Node.js Examples](/node)  
- [Website Example](/web)  

### REST API
A REST API is a staple of web-development and is a way for users to uniformly write and read data from an external server. In order to build experiences on top of Hicetnunc, we need to get data on a user's Tezos address or a from a unique OBJKT ID. We are using the Better Call Dev REST API to query and filter the relevant data that we need.

```ruby
async function getTokenInfo(id){
    try {
        const res = await axios.get('https://api.better-call.dev/v1/tokens/mainnet/metadata?token_id=' + id.toString())
        return res.data[0]
    } catch (error) {
        return null
    }
}
```
[image](https://user-images.githubusercontent.com/1003196/118697952-db4f6100-b7dd-11eb-8dd1-d8494295d749.png)

# What is Hic Et Nunc?

Hic et nunc is a decentralized NFT marketplace built on the Tezos blockchain. That sounds complicated let's unpack:

### Decentralized System

A decentralized system is one where one entity does not have full control over the decision making, additions and maitenance of the system. A decentralized system is inherently communal, serving groups of interconnected relevant parties that want to transact with trust. In many cases decentralization is impossible to reach, a best attempt at a utopian life. 

### Blockchain 

A blockchain is a database that is built specifically to run on decentralized p2p networks and requires a set of 'checks and balances' to read, write and interact with. There are many different types of blockchains, some of them store financial data like Bitcoin. Others like Ethereum, Tezos and IPFS store files, application data, etc. 

Depending on the implementation, a blockchain can be both decentralized or centralized. Decentralization lends itself to certain ideas and for now the most common implementation of a decentralized blockchain is a cryptocurrency.

### Cryptocurrency 

A cryptocurrency is a digital medium to transact value on network not owned by a single entity or nation-state. If you are curious as to why that might be needed, you might be in the wrong place. Please refer to the [Bitcoin White Paper](https://bitcoin.org/bitcoin.pdf) and Dr. Daniel Kim's [video](https://www.youtube.com/watch?v=aC9Uu5BUxII) on monetary policy, inflation, central banking, Bitcoin and Monero.

### NFT

An NFT stands for 'non-fungible-token' and was originally created as one of many smart contract types to use on the Ethereum network. Unlike a currency, an NFT is a receipt that uses a private key to verify your assocation to certain files, items and events that happen on the blockchain. It is your digital backpack that lets you store and collect moments and digital blockchain goods. 

### Hicetnunc

Hicetnunc is a open source movement that created the Tezos NFT specification called an 'OBJKT.' Unlike other NFT platformns, hicetnunc uses Tezos, which is a proof-of-stake blockchain with significantly less fees and environmental impact caused by mining. Hicetnunc.xyz allows you to create, collect and interact with the Tezos blockchain.

___

# Project Setup
This project uses the latest versions of Node.js and NPM. You can install those on your computer here: https://nodejs.org/

Enter project directory, choose which example you want to run and install dependencies
```ruby
cd hicetnunc_api_guide
cd node
npm install
```

Running Node.js Example:

```ruby
cd node
node index.js
```

Running Web Example on Localhost:

```ruby
cd web
npm run dev
```

Building Web Example for Deploy:

```ruby
cd web
npm run production
```

# Tutorials and Code Examples
View more in depth documentation inside of each example's folder:
 
- [Node.js Examples](/node)  
- [Website Example](/web)  

## Contact
Created by [@ianpetrarca](https://www.twitter.com/ianpetrarca) - tz1LobSdhfUqYpMojXWHQLJPhFLEzUEd9JAn
