// Boxes:

// alert();
// confirm();
// prompt();

// Pre-defined function - direct calling
// ====================

var x = '100';

// x.isNaN() // Not a number

if(isNaN(x)){
    console.log('It is not a number');
} else {
    console.log('It is a number');
}

x = [100];

// Array.isArray()
if(Array.isArray(x)){
    console.log('It is an array');
} else {
    console.log('It is not an array');
}

var y = 1000;

y = y.toString(); // '1000'

console.log(y);
// concat()

a = "Hello"
b = "India"

c = a.concat(b);

console.log(c);

var name = "Gov"

// toUpperCase()

name = name.toUpperCase();

console.log(name)

// toLowerCase()
fname = "Grijia";
fname=fname.toLowerCase();

console.log(fname);

var p = parseInt('1000.00');

console.log(p) // 1000

// Arrays

var arr = ['a','y', 10, 20];

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// length

var obj = {
    fName: 'Gpv',
    lName: 'Kyo',
    duties: 'xyx'
}

// Array = {
//     length: 0,
//     push: function(){

//     },
//     pop: function(){

//     },
//     shift: function(){

//     }
//     ...
// }

console.log(arr)
console.log(arr.length); // 4

arr.push('Goverdhan');

console.log(arr); // 4

arr.push('girija');

console.log(arr); // 4

// LIFO - stack

// Ex: 

// FIFO - queue

arr.pop();

console.log(arr); // 4

arr.shift();

console.log(arr); // 4

arr.unshift('Varsha');

console.log(arr); // 4

// var x = arr.slice(1,4);

// console.log(x);

// var y = arr.splice(1, 4)

// console.log(y);

var z = arr.join(',');

console.log(z);
var name = 'Goverdhan Koyalkar';

var p = name.split('a');
console.log(p);

var skills = ['HTML', 'CSS', 'JS', 'Angular']

var index = skills.indexOf('JAVA');
console.log(index);

var skill = 'Angular13';
index = skills.indexOf(skill);

if(index !== -1){
    console.log('Yes she knows ' + skill);
} else {
    console.log('Yes she does not know ' + skill);
}

var fullName = "Goverdhan Koyalkar"

var check = skills.includes('JavaScript');

console.log(check);

// push()
// pop()
// shift()
// unshift()
// slice()
// splice()
// join()
// split()
// indexOf()
// includes()

// arr.push('abc');
// arr['abc'];

// arr.push('abc');
// arr.push('abc');
// arr.push('abc');
// arr.push('abc');
// arr.push('abc');

// arr['abc', 'abc','abc', 'abc', 'abc'];

