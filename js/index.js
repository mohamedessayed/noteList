/*

coding style
----------
1- sequentional
2- condtioning (if, switch)
3- iteration "Loop"

Basics
------------
html code ==> document
web browser ==> window


variables متغير


x  y   op
----------
2  3   +
3  2   *


Data types
-----------
1-number (integer ex: 1 , 100 , 200 , -50 / float: 1.20 , -50.6)
2-string
3-boolean
4-undefined
5-object (array [], null, object {})

user inputs
-----------
1- web browser ==> prompt
2- HTML code ==> form

Operators
---------

1- Math operator

+ addition
- subtract
* multiplication
/ division
% moodulation


2- string operator

+ concat

3- comparison operator (True / Fasle)

> grater than
< less than
>= grater than or equal
<= less than or equal
== is equal
!= is not equal

=== identical equal
!== Not identical equal


4- Logical operators

&& AND

C1 && C2  R
T     F   F
F     T   F
T     T   T
F     F   F

-------------

|| OR

C1 || C2  R
T     F   T
F     T   T
T     T   T
F     F   F

---------------

!  NOT

C1  R
!T  F
!F  T
------------

condtioning 

1- if(condtion){}
2- if(condtion){}else{}
3- if(condtion){}else if(condtion){}else if(condtion){}else{}
4- switch

Loop
1- for(counter; condtion; counter_update){}
2- while(condtion){  counter_update}
3- do{ counter_update}while(condtion);
4- for(element of array){}
5- array.forEach(function(element){})

loop controllers

1- break;
2- continue;

-- Divided my code --
1-ease of mantine
2-resue

Declrtion function
-------
syntax:

function __name__ (){ 

//logic

}
__name__()  // function call / invoke

Scope
-------

Global
Local (Function only)

expression function
-------
var __functionName__ = function(__Inputs__){
//logic
}

self invoke
----------
(function(){})();

anyonymous function
----------------
function(){}

Array (List) built in functions & properties

1-Properties
-length

2-functions
-- add functions
** push()
** unshift()
-- Remove functions
** pop()
** shift()
** splice(startIndex, deleteCount)
-- cut slice
**slice(start, end)
--search
**indexOf(searchItem)
**includes(searchItem)
--reverse array
**reverse()
--replace
** splice(startIndex, deleteCount,newValue)
------------------

object

var table = {
    height : '90cm',
    price: 30,
    width:'120cm',
    depth:'30cm',
    material : 'Wood',
    images:['table.png','table2.png','table3.png'],
    sellers:[{
        name:'ahmed',
        country:'KSA',
        store:'Dalel'
    },
    {
        name:'mohamed',
        country:'UEA',
        store:'Dalel'
    },{
        name:'Ali',
        country:'EGP',
        store:'Dalel'
    }]
}

console.log(typeof(table));
console.log(table.height);

table.height = '80cm';
table['height'] = '70cm';

console.log(table);

console.log(table.images[1]);
console.log(table.sellers[1].country);

--------------------------------------

Local Storage

- size limited by 5 MB
- save data in web browser

**local storage function

    localStorage.setItem('gender','female')
    localStorage.removeItem('gender')
    localStorage.clear()

** convert object/array to string
JSON.stringify(object)

** convert object/array as string to orginal 
JSON.parse(object/array as string)

**
DOM (Document object Module)

how catch tags in html using js?

--ByID => single element => document.getElementById('demo')
--ByTag => htmlcollection (array) => document.getElementsByTagName('p')
--ByClass => htmlcollection => document.getElementsByClassName('demo')
--ByName => NodeList => document.getElementsByName('demo')

--QuerySelector "Css Notion"
 **document.querySelector('.demo')
 **document.querySelectorAll('.demo')
*/


// var btn = document.querySelector('#btn-submit');

// var toast = document.querySelector('.myToast');

// btn.addEventListener('click',function(){

//     toast.classList.add('adjecnet-right')

//     setTimeout(function(){
//         toast.classList.remove('adjecnet-right');
//     },4000)
    
// })

//^[a-z]{1,}[A-Za-z\d]{1,}@(gmail||outlook||yahoo)\.com$

var settingFrom = document.getElementById('settingFrom');
var username = document.getElementById('username');

settingFrom.addEventListener('submit', function(e) {
    var regex = /^[a-zA-Z]{3,20}$/g;
    
    if (username.value === '' || !regex.test(username.value)) {
        e.preventDefault();
        username.classList.add('border-danger');
        return;
    }

    if (username.classList.contains('border-danger')) {
        username.classList.remove('border-danger')
    }
    username.classList.add('border-success')

    
})













