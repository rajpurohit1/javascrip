console.log('welcome in dom selecting');
/*
element selector:
1 single element selector 
2 multi element selector
*/


/*1 single element selector*/
//let selectid = document.getElementById('head');
//selectid = selectid.className;
//selectid =selectid.childNodes;
//selectid =selectid.parentNode;
//selectid.style.color = 'red';
//selectid.innerText = 'Rajpurohit code room ';
//selectid.innerHTML = '<b>Rajpurohit<b>';
//console.log(selectid);

let sal = document.querySelector('#head');
sal = document.querySelector('.out');
sal = document.querySelector('div');
sal.style.color = 'green';
//console.log(sal);

//2.multi element selector
let mul = document.getElementsByClassName('class');
//console.log(mul);
//console.log(mul[0]);
 mul = document.getElementsByClassName('container');
 //console.log(mul[0].getElementsByClassName('blue'));
mul = document.getElementsByTagName('div');
console.log(mul);

/*Array.from(mul).forEach(element => {
    console.log(element);
    element.style.color = "blue";
});*/
 for (let index = 2; index < mul.length; index++) {
     const element = mul[index];
     console.log(element);
     element.style.color = 'blue';

     
 }