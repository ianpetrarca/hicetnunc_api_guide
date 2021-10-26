let axios = require('axios') //JS LIBRARY FOR REST API FUNCTIONS

async function getCreations(id,offset){
  try {
      const res = await axios.get('https://api.better-call.dev/v1/tokens/mainnet/metadata?creator=' + id + '&size=10&offset='+offset)
      return res.data
  } catch (error) {
      return null
  }
}

let allCreations = new Array();
let user = 'tz1PmBx9EHvsN6fWJhS3zuUzPp8j7jWw4Fd8'
let set = 0
let last_objkt_minted = ''

setInterval(() => {

    getCreations(user,set).then((response) => {
  
        for (const key in response) {
        if (Object.hasOwnProperty.call(response, key)) {
                const element = response[key];
                allCreations.push(element)
            }
        }
        
        if(last_objkt_minted==allCreations[0].token_id){
            console.log("NO NEW MINTS")
        }else{
            console.log(user + " LAST MINT IS OBJKT ID:" + allCreations[0].token_id)
            last_objkt_minted = allCreations[0].token_id
        }
        
    })

}, 10000);