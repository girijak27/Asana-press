// alert("external js")

// What is JavaScript?

// It is client side scripting language. 

// variables
// =========

var box1 = "rings"; // declare and initialize
var box2 = "bangles";
var box3 = "neckless";

var name = "Goverd";
var address ="Hyd";

var name = "Girij";
box1 = "chain"; // assign a value
address = "bglr";

console.log(box1); // print the variable
console.log(address);


// Data Types:
// ===========

// bits - 0 or 1
// byte - 8 bits = 1 byte;
// kb - 1024 byte = 1 kb
// mb - 1024KB = 1 mb
// gb - 1024MG - 1 gb

// Different types of data:
// ========================

"Girija !@#$" - string 
100 / 50.2 - number 
true / false - boolean 

Premitive data types:

string 
number 
boolean

Derived Data types:

Array - []
Object - {}

var name = Hello;

console.log(name); // 65476

var fName ="Goverdhan";

console.log(fName);

var marks = 75;

console.log(marks) // 75

var marks1 = "75";

console.log(marks1) // 75

var marks2 = 50;

var marks3 = 35;

var add = marks1 + marks2 + marks3;

console.log(add); // 7585

var flag = true;

console.log(flag) //  true

var flag1 = "true";

var flag2 = 0; // false

var flag3 = 1; // true


// What is an Array?

// Array is a collection of premitivie data types;

var arr = [];

var arr1 = ["Goverdhan", "koyalkar", 75, "pass", true];

console.log(arr1); // Goverdhan, koyalkar, 75, pass, true

console.log(arr1[2]) // 75

console.log(arr1[1]) // Koyalkar

console.log(arr1.length); // 5

// What is an Object?

// An object is a collection of key, value pairs

var obj = {};

var obj1 = {
    fName: 'Goverdhan',
    lName: "Koyalkar",
    marks: 75,
    result: "pass",
    status: true
}

console.log(obj1.lName) // Koyalkar
console.log(obj1.result) // pass

var arr2 = ["Goverdhan", "koyalkar", 75, "pass", true, [45, 45, 84, 65, 65], {nickName: "gov"}];
console.log(arr2[4]) // 45, 45, 84, 65, 65
console.log(arr2[6].nickName) // gov

JavaScripts
===========

1. Data types - Operators
2. Conditions
3. Loops
4. Functions
5. DOM Manupulation
6. OOPs - Object Oriented Programming

Conditions:

var name = "Girija";

if(name == "Girija"){
    console.log(true)
}

if(name == "Goverdhan"){
    console.log(name);
} else {
    console.log(false)
}

if(name == "Goverdhan"){
    console.log(name);
} else if(name == "Girija") {
    console.log(name)
} else {
    console.log(false)
}

var condition = 10;

switch(condition){
    case 1:
        console.log('goverdhan');
        break;
    case 2:
        console.log('girija');
        break;
    case 3: 
        console.log('sudarshan');
        break;
    default:
        console.log('default');
        break;        
}

= assign
== compare
=== compare with data types

var x = 10;
var y = 15;

x = y;

console.log(x);

var z = (x == y);

console.log(z) // false 

x = "10";
y = "15";

z = x === y;

console.log(z) // false

alert('Hello');
confirm('Are you sure?');
prompt('Please enter your Name');







