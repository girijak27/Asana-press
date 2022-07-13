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

var add = sum.call(1, 2, 5, 8, 8, 9, 21);
console.log(add);

var obj;

var into = sum.apply(obj, [1, 2, 5, 8, 8, 9, 21]);
console.log(into);


