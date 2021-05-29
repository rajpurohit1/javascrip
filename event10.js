console.log('more event');

/**let btn = document.getElementById('btn');
btn.addEventListener('click', funs1);
btn.addEventListener('mouseover', funs2);

function funs2(e){
    console.log('it is mosueover');
}
 
function funs1(e){
    console.log('ishwar',e);
}**/

document.querySelector('.btnno').addEventListener('mouseenter' , function(){
    console.log('mouse entered');
});

document.querySelector('.btnno').addEventListener('mouseleave' , function(e){
    console.log(e.offsetX,e.offsetY);
    console.log('mouse leaved');
    document.body.style.backgroundColor = 'rgb(${e.offsetX},${e.offsetY}, ${e.offsetX})';

});

