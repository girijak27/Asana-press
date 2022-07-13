function myFunction(){
    var name = "Girija"
    alert(name);
    var flag = confirm('Are you sure?')
    alert(flag);
    name = prompt('Please enter your name: ');
    alert(name);
}

function mySecondFun(name){
 alert(name);
 console.log(name);
}

function myThirdFun(name, qualification){
    alert('Name:' + name);
    alert('Qualification:' + qualification)
}

function myFourthFun(name, quali, phone){
    alert('Name:' + name);
    alert('Qualification:' + quali);
    alert('Phone:' + phone);
}


function tank(name){

    return name;
}

// myFunction();

// myFunction();

// myFunction();

// myFunction(); myFunction();

// myFunction();

mySecondFun('Goverdhan');

myThirdFun('Gov', 'MCA');

myFourthFun('Gov', 'MCA', '9885462')

var cup = tank('Goverdhan Koy');

alert(cup);

var fname = "Govedhan";
var lname = "Koyalkar";
