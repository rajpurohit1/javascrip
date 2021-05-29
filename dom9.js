console.log('event object');

/**document.getElementById('fs').addEventListener('click', function(){
    let fsadd = document.createElement('li');
    fsadd.className = 'fsclass';
    fsadd.id = 'fsid';
    fsadd.setAttribute('type','myfs');
    fsadd.innerHTML = '<b> he is volunteer of fs</b>';
    let ul = document.querySelector('ul.list');
    
    ul.appendChild(fsadd);
    //console.log(fsadd);
});**/

document.getElementById('head').addEventListener('click', function(e){
   let veriable;
   console.log('acess');
   veriable = e.target;
   veriable =e.target.className;
   veriable = e.offsetX;
   veriable = e.offsetY;
   veriable = Array.from(e.target.classList);

    
    console.log(veriable);
});