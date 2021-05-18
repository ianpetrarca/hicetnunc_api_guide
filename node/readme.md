# Hicetnunc / Better Call Dev API Guide
> A guide for using the Better Call Dev API to query and parse hic et nunc data.

## Node Examples
This folder has a Node.js example that utilize the [Axios](https://www.npmjs.com/package/axios) library for sending REST API messages to the [Better Call Dev](http://better-call.dev/docs) 

## Better Call Dev - Relevant Messages
Here are some of the different requests and endpoints that you can interact with on the Better Call Dev API:

### Get User Metadata from a Tezos Address - [API Get Account Info](https://better-call.dev/docs#operation/get-account-info)
> Returns Total Number of OBJKTs collected

API Endpoint: https://api.better-call.dev/v1/account/mainnet/{address}

```ruby
async function getUserInfo(user) {
    try {
        const res = await axios.get('https://api.better-call.dev/v1/account/mainnet/' + user + '/token_balances')
        return res.data.total
    } catch (error) {
        return null
    }
}
```

