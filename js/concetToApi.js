async function getApi(url){
    var respose =  await fetch(url);
    var posts =  await respose.json();
    return posts;
}

export function sayHello(){
    console.log('hello');
    
}


export default getApi;