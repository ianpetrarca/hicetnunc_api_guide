let axios = require('axios') //JS LIBRARY FOR REST API FUNCTIONS

async function getCollection(user,offset) { //GET A USERS OBJKT COLLECTION IN SETS OF TEN
  try {
      const res = await axios.get('https://api.better-call.dev/v1/account/mainnet/' + user + '/token_balances?size=10&offset=' + offset)
      return res.data
  } catch (error) {
       return null
  }
}

async function getUserInfo(user) {
    try {
        const res = await axios.get('https://api.better-call.dev/v1/account/mainnet/' + user + '/token_balances')
        return res.data.total
    } catch (error) {
        return null
    }
}

async function getCreations(id,offset){
  try {
      const res = await axios.get('https://api.better-call.dev/v1/tokens/mainnet/metadata?creator=' + id + '&size=10&offset='+offset)
      return res.data
  } catch (error) {
      return null
  }
}
  
async function getTokenInfo(id){
    try {
        const res = await axios.get('https://api.better-call.dev/v1/tokens/mainnet/metadata?token_id=' + id.toString())
        return res.data[0]
    } catch (error) {
        return null
    }
}

//Tezos Address
async function getProfile(user){

  //Get Collection
  getUserInfo(user).then((response) => {
      let collection = new Array()
      for (let index = 0; index < response / 10; index++) {
        collection.push(getCollection(user,index*10))
      }
      Promise.all(collection).then((values) => {
        let balances = new Array()
        values.flat().forEach(element => {
          balances = balances.concat(element.balances)
        });  

        console.log("collection"+balances)
        //DO SOMETHING WITH THE USER COLLECTION HERE
      });
  }); 

  //Get Creations
  getCreations(user,0).then((data) => {
    console.log("creations" + data)
    //DO SOMETHING WITH THE FIRST 10 USER CREATIONS HERE
  })

}

//Get Single HeN Object
async function getObjkts(id){
  let queue = new Array()
  //Multiple Objects
  if(typeof id == 'object'){
    id.forEach(element => {
      queue.push(getTokenInfo(element))
    });
    Promise.all(queue).then((values) => {
      console.log(values)
      //DO SOMETHING WITH THE OBJKTS META DATA HERE
    });
  }else{
    queue.push(getTokenInfo(id))
    Promise.all(queue).then((values) => {
      console.log(values)
       //DO SOMETHING WITH THE OBJKT META DATA HERE
    });
  }
}

// Get all GLTF Models in a Users Collection

// let user = 'tz1dy6DgvAjeBZpfRE3NoL84BRm4tupyKfFf'
// getUserInfo(user).then((response) => {
//   let collection = new Array()
//   for (let index = 0; index < response / 10; index++) {
//     collection.push(getCollection(user,index*10))
//   }
//   Promise.all(collection).then((values) => {
//     let balances = new Array()
//     values.flat().forEach(element => {
//       balances = balances.concat(element.balances)
//     });  
//     let models = balances.filter(item => item.formats)
//     models = models.filter(item => item.formats[0].mimeType.includes('gltf'))
//   });
// }); 

//Fetch Objkt Info in an inputted Array
// getObjkts([36899])

//Get all collections and the last ten creations from a Users Tezos Address
getProfile('tz1dy6DgvAjeBZpfRE3NoL84BRm4tupyKfFf')

