console.log('welecome in the dom');
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
node = cont.childNodes[1].nodeName;
node = cont.childNodes[1].nodeType;
//console.log(node);
//console.log(cont.childNodes);
//console.log(cont.children);

let container = document.querySelector('div.container');
 //console.log(container.children[1].children[0].nodeName);
 //console.log(container.firstChild);
 //console.log(container.firstElementChild);

 //console.log(container.lastChild);
 //console.log(container.lastElementChild);

 //console.log(container.childNodes);
 //console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);