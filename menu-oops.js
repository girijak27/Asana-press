// Object oriented programming
// var Arr=[];
//var obj={
//    fname=''
// }
// new features ===ECMAScript 2015 (ES5)=====class
//1. Encapsultion:
// it consist of properties and methods----no logic and no operations
//Ex:
class myclass{
    fname = "gov";
    lname  = 'kol';
    abc(){
        console.log(this.fname);
    }
}
var xyz = new myclass();
console.log(xyz.fname);
//JSON===javascript object notation
// pre-defined class and user defined class
//Array
//Object
//Date
//Math
var y = new Array();
console.log(y);//[]
var x = new Object();
console.log(x);//{}
var d = new Date();
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getFullYear());
//2. Inheritence:====if there is more than one class
// Extends and Implements

class person{
    name = 'girija';
    address = ' H no 201888' ;
    phone = '12334231';
    qualification = 'm com';
}
class salary{
    Basic = '12000';
    Hra = '10%';
    pf = '8%';
}
class Employee extends person {
    empId = '12345';
    job = 'accountant';
    duty(){
        console.log(this.name);
    }
}
console.log(person.phone);
console.log(salary);
console.log(Employee);
