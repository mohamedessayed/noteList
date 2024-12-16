function endMeanu(name){
    console.log('endMeanu of '+name);
}

function seaFood(){

    return new Promise((resolve) => {
        var xmlHttp = new XMLHttpRequest;
        // inilization
        xmlHttp.open('GET','https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        // connecting
        xmlHttp.send();
        //listen for readystate change
        xmlHttp.addEventListener('readystatechange',function(){
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var jsonData = JSON.parse(xmlHttp.responseText)
                console.log("SeaFood",jsonData);
                return resolve();
            }
        })
    })
}

function pastaFood(){
    return new Promise((resolve)=>{
        var xmlHttp = new XMLHttpRequest;
        // inilization
        xmlHttp.open('GET','https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta');
        // connecting
        xmlHttp.send();
        //listen for readystate change
        xmlHttp.addEventListener('readystatechange',function(){
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var jsonData = JSON.parse(xmlHttp.responseText)
                console.log("pastaFood",jsonData);
                return resolve()

            }
        })
    })
    
}


seaFood()
.then(pastaFood)
.then(function(){endMeanu('WAVE')})


async/await
