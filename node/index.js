
let axios = require('axios') //JS LIBRARY FOR REST API FUNCTIONS

async function getCollection(user,amount) { //GET A USERS OBJKT COLLECTION IN SETS OF TEN
  try {
      let models_list = new Array()
      let base_url = 'https://api.better-call.dev/v1/account/mainnet/'
      let rate_limit = '/token_balances?size=10&offset='
      for (let index = 0; index < Math.round(amount/10) ; index++) {
        const res = await axios.get(base_url + user + rate_limit+index*10)
        .then((response) => {
            response.data.balances.forEach(element => {
              if(element.name){
                if(element.formats[0].mimeType.includes('gltf')){
                  let item = {} // Create object for each GLTF in collection
                  item.name = element.name //OBJKT Name
                  item.url = 'https://cloudflare-ipfs.com/ipfs/' + element.artifact_uri.slice(7,element.artifact_uri.length) // OBJKT IPFS LINK
                  item.description = element.description //OBJKT DESCRIPTION
                  item.objkt_id = element.token_id //OBJKT # ID
                  models_list.push(item) // ADD EACH OBJKT TO AN ARRAY OF ALL 3D MODELS
                }
              }
            })
            console.log("Loading OBJKTs " + index)//LOG OUT STATUS OF API REQUESTS 
        })
      }
      return models_list // OUTPUT THE 3D MODEL LIST ARRAY
  } catch (error) {
   console.error() //ERROR LOG
  }

}

async function getUserCollection(user) {
    try {
        //REST API MESSAGE FORMATTING
        let base_url = 'https://api.better-call.dev/v1/account/mainnet/'
        let rate_limit = '/token_balances?size=10&offset='
        let offset = '0';
  
        //GET # OF COLLECTED ITEMS FOR PAGINATION WITH REST API
        const res = await axios.get(base_url + user + rate_limit+offset)
        .then((response) => {
          console.log(user + " HOLDS: " + response.data.total + " TOKENS")
          getCollection(user,response.data.total).then((collection) => {
            console.log(collection)
            //DO STUFF WITH THE USERS COLLECTION DATA HERE
          })
        });
    } catch (error) {
      console.error(error);//LOG ERROR
    }
}
  
async function getTokenInfo(id){
    try {
        let base_url = 'https://api.better-call.dev/v1/tokens/mainnet/metadata?token_id'
        const res = await axios.get(base_url + id + '')
        .then((response) => {
          console.log(response)
          return response
        })
    } catch (error) {
    
    }
  
}

// getUserCollection('tz1LobSdhfUqYpMojXWHQLJPhFLEzUEd9JAn')

// getTokenInfo(36899)