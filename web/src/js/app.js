import '../css/styles.css';

/* Your JS Code goes here */

/* Demo JS */
import './demo.js';

let axios = require('axios')
const regeneratorRuntime = require("regenerator-runtime");
async function getInfo(input) {
    try {
   
        const objkt_id = input
        const url = 'https://51rknuvw76.execute-api.us-east-1.amazonaws.com/dev/objkt/'
        const res = await axios.post(url, { objkt_id })
        const mediaAddress = res.data.result.token_info.artifactUri

        console.log(res.data.result.token_info.name)
        
        const mediaHash = mediaAddress.replace('ipfs://', '')
        const mediaUrl = `https://cloudflare-ipfs.com/ipfs/${mediaHash}`
        console.log(mediaUrl)
        
        return mediaUrl
      
    } catch (error) {
      console.error(error);
    }
}

getInfo(13441).then(data => {    
 
  console.log('Model Changed to: ' + data );
})



document.getElementById("get_single_objkt_btn").addEventListener("click", function() {
  let hen_url = document.getElementById('url-field').value
  
  if(hen_url.includes="hic"){
    getInfo(hen_url.slice(hen_url.length-5, hen_url.length)).then(data => {
      
      document.getElementById('objkt').src = data
      console.log('Model Changed to: ' + data );
    })

  } else {
     getInfo(hen_url).then(data => {
      document.getElementById('objkt').src = data
      console.log('Model Changed to: ' + data );
    })
  }
  
});

// getInfo(13441).then(data => {    
//   document.getElementById('objkt').src = data
//   console.log('Model Changed to: ' + data );
// })
