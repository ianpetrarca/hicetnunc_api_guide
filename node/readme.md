# Hicetnunc / Better Call Dev API Guide
> A guide for using the Better Call Dev API to query and parse hic et nunc data.

## Node.js Code Examples
This folder has a Node.js example that utilize the [Axios](https://www.npmjs.com/package/axios) library for sending REST API messages to the [Better Call Dev](http://better-call.dev/docs) 

### 1) Get User Metadata from a Tezos Address - [Get Account Info - BCD API Docs ](https://better-call.dev/docs#operation/get-account-info)
> Returns Total Number of OBJKTs collected

API Endpoint: https://api.better-call.dev/v1/account/mainnet/{address}

Example:

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

### 2) Get OBJKT Metadata from a Tezos Address - [Get Token Metadata- BCD API Docs ](https://better-call.dev/docs#operation/list-token-metadata)
> Returns OBJKT metadata

API Endpoint: https://api.better-call.dev/v1/tokens/mainnet/metadata?token_id=

Example:

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

### 3) Get OBJKTs created from a Tezos Address - [Get Token Metadata- BCD API Docs ](https://better-call.dev/docs#operation/list-token-metadata)
> Returns OBJKTs created from passed Creator Tezos Address. Paginated API response. Function includes input to offset results.

API Endpoint: https://api.better-call.dev/v1/tokens/mainnet/metadata?creator=

Example:

```ruby
async function getCreations(id,offset){
  try {
      const res = await axios.get('https://api.better-call.dev/v1/tokens/mainnet/metadata?creator=' + id + '&size=10&offset='+offset)
      return res.data
  } catch (error) {
      return null
  }
}
```






