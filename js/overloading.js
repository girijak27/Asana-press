// function overloading

function sum(x: number, y: number){
    return x + y;
}

function sum(x, y, z){
    return x + y + z;
}

function sum(x: string, y: string){
    return x + y;
}

var z = sum(5, 15);

z = sum('Gov', 'Koy');


console.log(z);


z = sum(5, 15, 29);
console.log(z);
