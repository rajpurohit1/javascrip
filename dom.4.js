console.log('how to use domm inn javascript');

let w = document;
// how to know all collection of htnl page 
w = document.all;
//w = document.body;
//w = document.forms;
// how to print all  element from the page
//Array.from(w).forEach(function(element){
  //  console.log(element);
///})
//w = document.scripts;
//w = document.images;
Array.from(document.images).forEach(function(element){
    console.log(element);
})
//console.log(w);