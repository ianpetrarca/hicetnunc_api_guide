let axios = require('axios')
const regeneratorRuntime = require("regenerator-runtime")

exports.getCollection = async function getCollection(user,offset) { //GET A USERS OBJKT COLLECTION IN SETS OF TEN
    try {
        const res = await axios.get('https://api.better-call.dev/v1/account/mainnet/' + user + '/token_balances?size=10&offset=' + offset)
        return res.data
    } catch (error) {
         return null
    }
  }
  
exports.getUserInfo = async function getUserInfo(user) {
    try {
        const res = await axios.get('https://api.better-call.dev/v1/account/mainnet/' + user + '/token_balances')
        return res.data.total
    } catch (error) {
        return null
    }
}
  
exports.getCreations = async function getCreations(id,offset){
try {
    const res = await axios.get('https://api.better-call.dev/v1/tokens/mainnet/metadata?creator=' + id + '&size=10&offset='+offset)
    return res.data
} catch (error) {
    return null
}
}
    
exports.getTokenInfo = async function getTokenInfo(id){
      try {
          const res = await axios.get('https://api.better-call.dev/v1/tokens/mainnet/metadata?token_id=' + id.toString())
          return res.data[0]
      } catch (error) {
          return null
      }
  }