# Hicetnunc / Better Call Dev API Guide
> A guide for using the Better Call Dev API to query and parse hic et nunc data.

## General Info
This project was created as a guide to query and parse hicetnunc OBJKT data rom the Better Call Dev REST API. Using these methods you can build auxilary experiences for your hicetnunc creations on a website or Node.js server. This code repo includes two types of examples: Node.js server examples and a full static website example using Webpack.

## Table of Contents  
[What if Hicetnunc?](#WhatisHicEtNunc?)  
[Project Setup](#ProjectSetup)  

## Headers

### REST API
A REST API is a staple of web-development and is a way for users to uniformly write and read data from external server. In order to build experiences on top of Hicetnunc, we need to get data on a user's Tezos address or a from a unique OBJKT ID. We are using the Better Call Dev REST API to query and filter the relevant data that we need.

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

# What is Hic Et Nunc?

Hic et nunc is a decentralized NFT marketplace built on the Tezos blockchain. That sounds complicated let's unpack:

### Decentralized System

A decentralized system is one where one entity does not have full control over the decision making, additions and maitenance of the system. A decentralized system is inherently communal, serving groups of interconnected relevant parties that want to transact with trust. In many cases decentralization is impossible to reach, a best attempt at a utopian life. 

### Blockchain 

A blockchain is a database that is built specifically to run on decentralized p2p networks and requires a set of 'checks and balances' to read, write and interact with. There are many different types of blockchains, some of them store financial data like Bitcoin. Others like Ethereum, Tezos and IPFS store files, application data, etc. 

Depending on the implementation, a blockchain can be both decentralized or centralized. Decentralization lends itself to certain ideas and for now the most common implementation of a decentralized blockchain is a cryptocurrency.

### Cryptocurrency 

A cryptocurrency is a means to transact value on a digital platform not owned by a single nation state or government entity. If you are curious as to why that might be needed, you might be in the wrong place.

### NFT

An NFT stands for 'non-fungible-token' and was originally created as one of many smart contract types to use on the Ethereum network. Unlike a currency, an NFT is a more of a receipt that uses a private key to verify your assocation to certain files, items and events that happen on the blockchain. It is your digital backpack that lets you store and collect moments and digital blockchain goods. 

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

# Node.js Examples
Node.js is a tool for building server-side code using javascript. We are going to use Node.js as a way to query REST APIs and parse through the returned data. These examples can be mapped and integrated into any web project or framework that uses Node.js. We are using the axios NPM library to facilitate the REST API functions.

Move into node.js directory and install dependencies 

```ruby
cd node
npm install
```

## Contact
Created by [@ianpetrarca](https://www.twitter.com/ianpetrarca) - tz1LobSdhfUqYpMojXWHQLJPhFLEzUEd9JAn
