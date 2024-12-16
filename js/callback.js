function seaFood(callback){
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
            return callback()
        }
    })
}

function pastaFood(callback){
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
            return callback()

        }
    })
}

function ChickenFood(callback){
    var xmlHttp = new XMLHttpRequest;
    // inilization
    xmlHttp.open('GET','https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
    // connecting
    xmlHttp.send();
    //listen for readystate change
    xmlHttp.addEventListener('readystatechange',function(){
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var jsonData = JSON.parse(xmlHttp.responseText)
            console.log("ChickenFood",jsonData);
            return callback()

        }
    })
}

function sideFood(callback){
    var xmlHttp = new XMLHttpRequest;
    // inilization
    xmlHttp.open('GET','https://www.themealdb.com/api/json/v1/1/filter.php?c=side');
    // connecting
    xmlHttp.send();
    //listen for readystate change
    xmlHttp.addEventListener('readystatechange',function(){
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var jsonData = JSON.parse(xmlHttp.responseText)
            console.log("sideFood",jsonData);
            return callback()
        }
    })
}

function endMeanu(){
    console.log('endMeanu');
}

seaFood(
    function(){
        ChickenFood(
            function(){
                pastaFood(
                    function(){
                        endMeanu()
                    })
                })
            })

