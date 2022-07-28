

 
// using string data types to print fname
var fname ="girija";
console.log(fname);
// using number data types to print add two numbers
var marks1 = 50;
var marks2 =60;
var add = marks1+marks2;
console.log(add);
//using boolen data types to print true or false
var flag =true;
console.log(flag);
 //using array data types to print all primitive data types
 var arr = [];
 var arr1 = ["gov","giri", 75,"pass", true];
 console.log(arr1);
 //using object data types to print all value pairs
 var obj = {};
  var obj1 = {
    fname: "girija",
    lname: "varsha",
    marks: 87,
    results: "pass",
    status: true
  }
  console.log(obj1.lname);

// if condition using operators(=, ==,)
if( name == "gov"){
    console.log(name); 
}else {
  console.log(false);
}
var x =10;
var y=15;
x=y;
console.log(x);
var z=(x == y);
console.log(z);
 //write a program to fing the greatest of two number (by using operator ">" ) 
var x= prompt("Enter First number ");
var y= prompt("Enter Second number");
if (x>y){
  alert("the greatest number is "+x);
} else{
  alert("the greatest number is "+y);
}
// write a program to find the greatest of three number(logical and '&&')
var z=prompt('enter third number')
if (x>y && x>z){
  console.log('x is the Greatest')
} else if (y>z){
  console.log('y is the Greatest')
} else {
  console.log('z is the Greatest')
}
// write a program to fing whether both number are equal (!= not equal)
var a=15;
var b=25;
if(a == b){
  console.log('they are equal')
}else{
  console.log('they are not equal')
}
if(a != b){
  console.log('they are not equal')
} else{
  console.log('they are equal')
}


// switch condition
var condition=10;
switch(condition){
  case 1 :
  console.log("soni1");
  break;
  case 2 :
  console.log("soni2");
  break;
  case 3 :
  console.log("soni3");
  break;
  default:
  console.log("default");
  break;

}
  // program to run using alert confirm and prompt(boxes)
  
//var name = "rice"
//alert(name);
//var flag = confirm('Are you sure?')
//alert(flag);
//name = prompt('Please order your plate ');
//alert(name);
// or using array
var arr = [ "poori","rice","dal","biryani","curry"];
  console.log(arr);

//write a 8 table using for loop
var mul = 8
for( var i=1; i<10; i =i+1){
    console.log(mul, '*',i, "=", mul*i);
}

// while loop
  var i=0;
while(i<10){
  console.log('My name is girija');
  i=i+1;
  } 


  // do loop
  var i =0;
  do{
    console.log(i)
    i++;
  }while(i<5)
  console.log('gir','gov','soni', 'gir1','gir1','gir1','gir1',);
//write a program to read 10 names( relation with forloops and array)
var arr1=[];
  for(var i=0; i<10; i++){
    var value = prompt('Enter name')
    arr1.push(value);
  }
  console.log(arr1[3],arr1[2]);
  for(var i=0; i<10; i++){
    alert(arr1[i]);
  }
  