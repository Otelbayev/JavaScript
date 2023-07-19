//1.
if("0"){
    console.log("Hello");
}
// "0" == true return Hello 

//2.
// What is the offical name of JavaScript

let offnameJS = "ECMAScript";
offnameJS = "LiveScript";

if (offnameJS === "ECMAScript") console.log("Right!");
else console.log("You don't know? \n\"ECMAScript\"!"); 

//3.

let value = 10;

if(value > 0) console.log(1);
else if(value < 0) console.log(-1);
else console.log(0); // 1

value > 0 ? console.log(1) : value < 0 ? console.log(-1):console.log(0); // 1

//4.

let result;
let a = 5 , b = 0;

a + b < 4 ?  result = 'Below' :result = 'Over';

console.log(result); // Over

//5.

let message;
let login = "Director";

login == "Employee" ? message = 'Hello' 
: login == "Director" ? message = 'Greetings' 
: login == '' ? message = "No Login" 
: message = ''; 

console.log(message); // Greetings
 
