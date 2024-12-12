api('https://jsonplaceholder.typicode.com/posts','GET');

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
            var htmlPostsView = document.getElementById('postData');
            var htmlCollection = ``;

            for (var post of jsonData) {
                htmlCollection += `<div class="col-md-3">
                                    <div>
                                        <h3>${post.title}</h3>
                                        <p>${post.body}</p>
                                    </div>
                                </div>`
            }

            htmlPostsView.innerHTML = htmlCollection;
        }
    })
}

