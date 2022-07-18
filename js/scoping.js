// Variable scoping

// Global variables
var name = "Goverdhan"

function abc(){
    // local variables
    var name = 'Girija';
    var fname = 'Gov';
    var lname = 'Kol';
    console.log(fname); 
}

abc();

console.log(name);

console.log(fname); // undefined
