// Write a program to find the greatest of two number.

var x = prompt('Enter first number: ');
var y = prompt('Enter second number: ');

if(x > y){
    alert("the greatest number is " + x);
} else {
    alert("the greatest number is " + y);
}

// Write a program to find the greatest of three number.

var z = prompt('Enter third number: ');

if(x > y){
    if(x > z) {
        alert("the greatest number is x: " + x);
    } else {
        alert("the greatest number is z: " + z);
    }
} else {
    if(y > z){
        alert("the greatest number is y: " + x);
    } else{
        alert("the greatest number is z: " + z);
    }    
}
