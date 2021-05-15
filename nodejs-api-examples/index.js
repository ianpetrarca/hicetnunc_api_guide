
let axios = require('axios')

let models_list = new Array()

async function getCollection(user,amount) {
  try {

 
      let base_url = 'https://api.better-call.dev/v1/account/mainnet/'
      let rate_limit = '/token_balances?size=10&offset='
      let offset = '0';
      for (let index = 0; index < Math.round(amount/10) ; index++) {
        const res = await axios.get(base_url + user + rate_limit+index*10)
        .then((response) => {
   
            response.data.balances.forEach(element => {
      
                  if(element.name){
                    if(element.formats[0].mimeType.includes('gltf')){

                      let item = {
                        name: '',
                        url: '',
                        objkt_id: '',
                      }
                      
                      item.name = element.name
                      item.url = 'https://cloudflare-ipfs.com/ipfs/' + element.artifact_uri.slice(7,element.artifact_uri.length)
                      item.description = element.description
                      item.objkt_id = element.token_id

                      models_list.push(item)
                    }
                  }
           
            })

    
            console.log("Loading OBJKTs " + index)
         

        })
        
      }

      getCreations(models_list)

  } catch (error) {
    getCreations(models_list)
  
  }

}
let transfers = new Array()
async function getCreations(user,lastID) {
  try {
  
      let base_url = 'https://api.better-call.dev/v1/tokens/mainnet/transfers/'
      let id_store = ''
     
      //Get Total Amount of Tokens
      const res = await axios.get(base_url + user + '?last_id=' +lastID )
      .then((response) => {
        
        
        if(response.data.last_id==undefined){
            console.log('FINISHED PARSING TOKENS')    
        } else {
            for (const key in response.data.transfers) {
                if (Object.hasOwnProperty.call(response.data.transfers, key)) {
                    const element = response.data.transfers[key];
                    if(user==element.from){
                        console.log(element.token.token_id)
                    }
                }
            }
            getCreations(user,response.data.last_id)
           
        }
      
      });

  } catch (error) {

    console.log('error')
  }

  
}

async function getUser(user) {
    try {
    
        let base_url = 'https://api.better-call.dev/v1/account/mainnet/'
        let rate_limit = '/token_balances?size=10&offset='
        let offset = '0';
  
        //Get Total Amount of Tokens
        const res = await axios.get(base_url + user + rate_limit+offset)
        .then((response) => {
  
          console.log(user + " HOLDS: " + response.data.total + " TOKENS")
          getCollection(user,response.data.total)
          
        });
  
      
    } catch (error) {
      console.error(error);
    }
  
}
  
async function getTokenInfo(id){
    try {
        let base_url = 'https://api.better-call.dev/v1/tokens/mainnet/metadata?creator='
        const res = await axios.get(base_url + id + '')
        .then((response) => {
         
          return response
        })

      
    } catch (error) {
    
    
    }
  
}
// getUser('tz1LTepZpT3TfWGAyroTfgDSdV4sAYhdnuGY','')


getTokenInfo('tz1SuXRStq7iD9uAsdcJoQYX82gp6WvXmDWo').then((data) => {
  console.log(data)
});