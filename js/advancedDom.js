let bodyElement = document.querySelector('body');

//replace code by code
`<div class="container">
        <span class="text-danger">Hello from JS File</span>
</div>`;


const divElement = document.createElement('div');
//<div></div>

divElement.classList.add('container');
/*

beforebegin
<div>
afterbegin

beforeend
</div>
afterend

*/
let spanElement = document.createElement('span');
spanElement.classList.add('text-success');
spanElement.innerText = 'test'
spanElement.insertAdjacentText('beforeend',' Hello from JS File')

spanElement.addEventListener('click',function(e){
    
    let string = this.innerText;
    navigator.clipboard.writeText(string);
    location.replace('/api.html?user=walid Elsayed')
    
})

divElement.insertAdjacentElement('afterbegin',spanElement);

// bodyElement.insertAdjacentElement('beforeend',divElement)

bodyElement.prepend(divElement)