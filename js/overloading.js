// function overloading

function sum(x=Number, y=Number){
    return x + y;
}

function sum(x=Number, y=Number, z=Number){
    return x + y + z;
}

function sum(x=String, y=String, z=String){
    return x + y + z;
}

var a = sum(15, 15);
console.log(a);

a = sum(5, 5, 5);
console.log(a);

a = sum("Gov", "Koy", "Gir");
console.log(a);
