/*console.log('this is fun');
var name = 'skillf';
let name2 = 'ishwar';

console.log('happy birt ${name}' );
console.log('happy bithday ${name2}');
console.log("ish");
console.log(name2);

function greet(name, thank='ttyy')
{
    console.log('happy birthday ${name}  ${thank}');
    return 4;
}

greet(name, 'thanks a lot')

//return a value

let val = greet(name, 'thanks a lot');
console.log(val);

//fun as veriable

const myobj = function(a,b){

  console.log( a + b);
    return a * b;
}

//let a =4;
//let b =5;
let v = myobj(4,7);
console.log(v);


//fun in obj

const myobj2 = {
    nam: 'ishwar',
    game: function() {
        return 'GTA';
    }
}
console.log(myobj2);
console.log(myobj2.game());

//fun use in arr

arr = ['fruit','vegetable','furniture'];

arr.forEach(function(element, index, array){
console.log(element,index)
    
});*/


//scope

console.log('rajpurohit ishwar is doing coding');

if(1){
    var i = 500;
    console.log(i);
}
console.log(i);
function ui(name){
    let i = 9;
    console.log(i);
    return 'this is a ${name} ui';

}

console.log(ui('harry'),i);


