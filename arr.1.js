console.log('arrey in javascript');
let num = [23,45,65,76,87,76];
let city = ['vadodara', 'mumbai', 'indore'];
//let together = ['vadodara',34,[5,7]];

//var arr = new Array(21,45,85,);
//console.log(arr); 
//console.log(city);
//console.log(together);
//console.log(Array);
//arr = num;
//console.log(arr);
//console.log(num[1]);
//console.log(arr[2]);
//console.log(arr[2]+arr[1]);
//console.log(arr[2]*3);
//console.log(arr[2]+ "  "+'ishwar');
//let b = prompt('enter the name');
//let b2 = b + arr[2];
//console.log(b2+3);
//console.log(num + city);

//methods
//find out length for array
//console.log(num.length);
// .isarray
//console.log(Array.isArray('num'));
//console.log(Array.isArray('fds'));
//change value in the array 
//num[0]= 'added';
//console.log(num);

//let arrelement = num[0];
//console.log('element :',arrelement);

//index of method.
//console.log(num);
//let value = num.indexof(45);
//console.log(value);

//array mutating modifying
//***add vaalue at th end of the array */
//num.push(234);
/***add value at the starting of the array */
//num.unshift(1);
/***remove value from end of the array */
//num.pop()
/**delete value from the starting */
//num.shift()
/** delete a range of value from the whole array */
//num.splice(0,2)
/** reverse the all values fromt the array*/
//num.reverse()
/**add new  array's values in the other array  */
let add = ['from', 'the','new','array']
num = num.concat(add);
//console.log(num);

//obj in javascript
   //create a obj 
   let myobj= {
       name: 'rajpurohit',
       'father name':'thansingh',
       city:'vadodara',
       cityisopen:false,
       num:[1,2,3,4]

   }
/**how to acess the value of obj */
   console.log(myobj);
   console.log(myobj.name);
   console.log(myobj.city);
   console.log(myobj['father name']);


