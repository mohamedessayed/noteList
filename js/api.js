// api('https://jsonplaceholder.typicode.com/posts','GET');

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

async function api(){
    var respose =  await fetch('https://jsonplaceholder.typicode.com/posts');
    var posts =  await respose.json();
    console.log(posts);
    
}

api()