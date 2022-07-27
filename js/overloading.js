// function overloading

<<<<<<< HEAD
function sum(x=Number, y=Number){
=======
function sum(x, y){
>>>>>>> bd68f90442b7ee298bbb8c58f1b5ab5f3a40b7cd
    return x + y;
}

function sum(x=Number, y=Number, z=Number){
    return x + y + z;
}

<<<<<<< HEAD
function sum(x=String, y=String, z=String){
    return x + y + z;
=======
function sum(x, y){
    return x + y;
>>>>>>> bd68f90442b7ee298bbb8c58f1b5ab5f3a40b7cd
}

var a = sum(15, 15);
console.log(a);

a = sum(5, 5, 5);
console.log(a);

a = sum("Gov", "Koy", "Gir");
console.log(a);
