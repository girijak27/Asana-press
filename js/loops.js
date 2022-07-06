// There are three types of loops:

// 1. for loop
// 2. while loop
// 3. do-while loop

// iteration - repeat


// for(initialization; condition, increment/decrement){

// }

// Ex: Write a program to print your name 10 times

for(var i=0; i < 100; i=i+1){
    console.log('My name is Girja');
    console.log('My name is Goverdhan');
}

for(var i=100; i > 0; i=i-1){
    console.log('My name is Girja');
    console.log('My name is Goverdhan');
}

// Write a program to print 9 table.

var num = 8;

for(var i=1; i < 100; i=i+1){
    console.log(num, ' * ', i, ' = ', num*i);
}

// var i =0; // initialization
// while(condition){ // condition

//     console.log(num, ' * ', i, ' = ', num*i);

//    i = i+1; // increment/decrement
// }
// =============================================
// var i= 0;
// do{
//    console.log(i)

//  i++;
// }while(condition)

console.log('Girija', 'Goverdhan', 'Sudarshan', 'Soni');

console.log('Girija');
console.log('Girija');
console.log('Girija');
console.log('Girija');
console.log('Girija');
console.log('Girija');
console.log('Girija');
console.log('Girija');
console.log('Girija');

// Write a program to read 10 names

var arr1 = [];

for(var i=0; i<10; i++){
   var value =  prompt('Enter Name:');
   arr1.push(value); 
}

console.log(arr1[3], arr1[1]);

for(var i=0; i<10; i++){
    alert(arr1[i]);
}





