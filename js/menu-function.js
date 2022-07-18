// function definition
//function calling
// function
  // pre-defined and user defined function
  //user defined function:=====
  function gir(){
    var name = "varsha";
    alert(name);
  }
  // calling
  gir();//// varsha


  function myFirstfun(name, quali, phone){
    alert('Name:'+name);
    alert('Quali:'+quali);
    alert('Phone:'+phone);
 }
 myFirstfun("Varsha","Mcom","89719018728");
 //or

 function tank(name){
  return name;
 }
 var cup= tank("G Varsha");
 alert(cup);
 // function calling // call // apply
 //gir();
 //gir.call(obj, x,y,z...);
 //gir.apply(obj,[x,y,z...]);using array
 function sum(){
    var add = 0;
    for(i=0; i<arguments.length; i++){
        add=add+arguments[i];    
    }
        return add;
 }
  var add=sum.call(1,10,20,30,40);
 console.log(add);


 // calling by apply
 function mul(){
    var add= 1;
    for(j=0; j<arguments.length; j++){
        add=add*arguments[j];
            }
            return add;
 }
 var obj;
 var into = mul.apply(obj, [2,4,6,8,9,2]);
 console.log(into);
 // overwritting
 function xyx(){
  console.log("Welcome");
 }
 function xyz(){
  console.log("welcome to Hyd")
 }
 xyz();
 // over loading
 function sum(x= Number, y= Number){
  return x+y;
 }
 var a=sum(12,23);
 console.log(a);

// adding 3 numbers

 function sum(x=Number, y=Number, z=Number){
return x + y + z;
 }
  var a = sum(21,23,44);
 console.log(a);

 // overrloading string
 function sum(x= String, y= String){
  return x+y;
 }
 a=sum('girija','varsha');
 console.log(a);