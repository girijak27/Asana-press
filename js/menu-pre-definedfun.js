//pre-defined  function
//isNaN()=Not a Number

var x = '1213';
isNaN(x);
console.log(x);
    // if(isNaN(x)){
    //     console.log("It is a number");
    //         }else{
    //             console.log("It is not a number");
    //         }

    //         if(!isNaN(x)){
    //             console.log("It is a number");
    //                 }else{
    //                     console.log("It is not a number");
    //                 }
//isArray
s = [100];
Array.isArray(s);
console.log(s); 
// if(Array.isArray(s)){
//     console.log("It is an array");
//         }else{
//             console.log("It is not an array");
//         }
//         v = 100; 
//         if(Array.isArray(v)){
//             console.log("It is an array");
//                 }else{
//                     console.log("It is not an array");
//                 }
//toString()
var y = "1000";
y = y.toString();
console.log(y);
//concat() =====joining
a="welcome";
b=" to Hyd";
c=a.concat(b);
console.log(c);

//toUppercase()
 lname = "varsha-uppercase";
ln = lname.toUpperCase();
console.log(ln);

//toLowercase()
fname="VARSHA- LOWERCASE";
fn =fname.toLowerCase();
console.log(fn);
// parseInt()
var p=parseInt('120.00');
console.log(p);

/////=====Arrays == pre defined func 'for loop' is must
//Arrays== length is property
var arr = ['a1','a2','a3','a4'];
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log(arr);
console.log(arr.length);
//1. push()
arr.push('giri');
console.log(arr);//a1, a2, a3, a4, giri
arr.push('giri2-push');
console.log(arr);// 6
//2. pop()
arr.pop(arr); 
console.log(arr);//5
//3. shift()  ===remove first one
arr.shift();
console.log(arr);
//4. unshift()  ===bring back in first place
arr.unshift('varsha');
console.log(arr);
//5. slice ====slice two numbers any
var x=arr.slice(1,4);
console.log(x);
//6. splice =====
var y = arr.splice(0,6);
console.log(y);
//7. join
var z = arr.join('join');
console.log(z);


// 8. split()=== seperate from a word

var name = 'Varsha Gowlikar';
var p = name.split('a');
console.log(p);// [v, rsh, gowlik, r]

// 9.***** indexOf === answer in 1 and -1

var t = ['html','css','js','angular'];
var t1 = t.indexOf('css');
console.log(t1);// 1    means yes
var t2 = t.indexOf('html5');
console.log(t2); // -1 not there
//using if else for indexOf()
var t3 = 'tally';
t2 = t.indexOf(t3);
if(t3!== -1){
    console.log('Yes she knows '+ t3);
    } else{
        console.log('No, she does not know  '+ t3);
    }

//10. includes
//var a='varsha';
var a1 = t.includes('focus');
console.log(a1);// false
