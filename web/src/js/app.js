import '../css/styles.css';

//API Functions
import {getCollection,getCreations,getUserInfo,getTokenInfo} from './api'; //ASYNC HEN API FUNCTIONS

//Text Input Field for HeN URL
let textField = document.getElementById('hen_link_input')

//Get IPFS Button
let ipfsButton = document.getElementById('get_ipfs_btn');
ipfsButton.addEventListener("click", validateLink);

//Get Meta Data using BCD API with an inputted Objkt ID
function getMetaData(id) {
    getTokenInfo(id).then((response) => {  
        document.getElementById('ipfs_output').innerHTML = '<span class="text-blue-800">IPFS Link: </span>' + 'https://cloudflare-ipfs.com/ipfs/' + response.artifact_uri.slice(7,response.artifact_uri.length)
        document.getElementById('id_output').innerHTML = '<span class="text-blue-800">OBJKT ID: </span>' + response.token_id
        document.getElementById('creator_output').innerHTML = '<span class="text-blue-800">Creator: </span>' + response.creators[0]
        document.getElementById('thumb_output').innerHTML = '<span class="text-blue-800">Thumbnail Link: </span>' + 'https://cloudflare-ipfs.com/ipfs/' + response.artifact_uri.slice(7,response.thumbnail_uri.length)
        document.getElementById('description_output').innerHTML = '<span class="text-blue-800">Description: </span>' + response.description
    })
}

//Validate the text input and turn Hen URL into OBJKT ID
function validateLink(){
    let field = textField.value
    if(field.includes('xyz')){
        field = field.substring(32,field.length)  
        getMetaData(field)
    } else if(field.typeof == 'number'){
        getMetaData(field)
    } else {
        document.getElementById('ipfs_output').innerHTML ='OBJKT NOT Found'
    }
}




