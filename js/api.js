// api('https://jsonplaceholder.typicode.com/posts','GET');

import getApi, {sayHello} from "./concetToApi.js";

function api(url,method = 'GET'){
    var xmlHttp = new XMLHttpRequest;
    // inilization
    xmlHttp.open(method,url);
    // connecting
    xmlHttp.send();
    //listen for readystate change
    xmlHttp.addEventListener('readystatechange',function(){
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var jsonData = JSON.parse(xmlHttp.responseText)
            
        }
    })
}

//other code


fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(text){ return text.json()})
.then(function(posts){
    
})

//other code



// var options = {method:"GET",headers:{'Authorization':'Bearer 18f1d33d7de54a98ac018226a7a4782f'}}


// fetch('https://newsapi.org/v2/everything?q=keyword',options)
// .then(function(text){ return text.json()})
// .then(function(posts){
//     console.log(posts);
    
// })



