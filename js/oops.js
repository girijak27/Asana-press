// Object Oriented Programming 

// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
//     - Method Overridding - Only it there is inheritance
//     - Method Over Loading
// 4. Access Specifier
// 5. Constructor 
// 6. Import/Export

var arr = ['abc', 'xyz'];
var obj = {
    fName: 'Gov',
    lName: 'Koy',
    job: function(){

    }
};

console.log(obj.fName);

// What are the new features in ECMAScript 2015 (ES5) ?

// 1. Encapsulation

class myClass {
    // ** it consists of properties and methods - no logic and no operations
    fname;
    lname;
   abc(){
    this.fname = "Goverdhan";
        console.log(this.fName);
        for(var i=0; i<10; i++){
        
        }    
    }
    xyz(){
       console.log(this.abc());
    }
}

var myCls = new myClass();

console.log(myCls.fName)

// JSON - Javascript Object Notation

// Pre-defined Class and User defined Class

// Array
// Object
// Date

var y = new Array();
var obj = new Object();
var date = new Date();

console.log(date);

console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getFullYear());

var math = Math();

// 2. Inheritance

// Inheritance is possible if there are more then one classes.

- extends
- implements

class Person {
    name;
    age;
    address;
    phone;
    qaulification;
}

class Salary {
    basic;
    hra;
}

class Employee extends Person implements Salary ABC {
    empId;
    job;

    duity(){
        console.log(this.name);
    } 
}


// 3. Polymorphism

    class PolyClass {

        sum(){
            console.log('super class method')
        }

        sum(a, b){

        }

        sum(a,b,c){

        }


    }

    class PolyClass1 extends PolyClass {

        sum(){
            console.log('base class method')
        }

        sum(a, b){

        }

        sum(a,b,c){
            
        }

        // super.sum();

    }

// 4. Access Specifier/Modifier

    // public
    // protected
    // private

    // classes, functions, variables / class properties

    class abc {

       name;
       public fname;
       protected lname;
       private salary;

       protected abc(){

       }

       public xyz(){

       }

       private pqr(){

       }

    }

    public class abc {

    }

    private class xyz {

    }

    protected class pqr {

    }


// 5. Constructor

class abc {

    name;
    public fname;
    protected lname;
    private salary;

    constructor(){
        this.name = "Gov";
        this.lname = 'Kol';
    }

    public xyz(){
        console.log(this.name);
    }

    private pqr(){
        console.log(this.lname);
    }

 }

var instance = new abc();

console.log(instance.xyz()); // Gov
console.log(instance.pqr()); // Gov

6. import / export


