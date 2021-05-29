//Excercise 1 fatch all the links which is contain a text string set as a veriable.
console.log('fatch the link');
let all = document.links;
Array.from(all).forEach(function(element){
    if(element.href.includes("string")){
        console.log(element.href);
    }

});
//onsole.log(all);