console.log('creating,removing,replacing');
// how to create a new node 
let creat = document.createElement('li');
creat.className = 'no';
creat.id = 'created';
creat.setAttribute('type','mytitle');
creat.innerHTML = '<b>hello this created</b>';

let ul = document.querySelector('ul.list');
//console.log(ul);
ul.appendChild(creat);

////console.log(creat);

// how to replace


let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode =document.createTextNode('this is replaced by creat');
elem2.appendChild(tnode);
creat.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(creat,document.getElementById('fui'));

let q = document.createElement('a');
q.setAttribute('href','https://www.google.com/');
q.innerText = 'click here to go harry website';
ul.appendChild(q);
console.log(q);