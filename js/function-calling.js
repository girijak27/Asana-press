// four ways we can call a function

function xyz(){
    console.log('hello');
}

// Function calling
// xyz();
// xyz.call(obj, x, y, z, ...);
// xyz.apply(obj, [x, y, z, ...]);

// Write a program to sum numbers?

function sum(x, y){
    return x + y;
}

function sum(){
    var add = 0;
    for(i =0; i< arguments.length; i++){
        add = add + arguments[i];
    }
    return add;
}

function mul(){
    var add = 1;
    for(i =0; i< arguments.length; i++){
        add = add * arguments[i];
    }
    return add;
}
var obj;

<<<<<<< HEAD
var add = sum.call(10, 2, 5, 8, 9, 2);
=======
var add = sum.call(obj, 1, 2, 5, 8, 8, 9, 21);
>>>>>>> bd68f90442b7ee298bbb8c58f1b5ab5f3a40b7cd
console.log(add);


var into = mul.apply(obj, [1, 2, 5, 8, 8, 9, 21]);
console.log(into);


