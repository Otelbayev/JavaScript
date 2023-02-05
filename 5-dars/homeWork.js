//! checkAge
function checkAge(age) {
    if(age > 18) console.log("ok");
    else console.log('Did parents allow you?');
}

checkAge(18);

function checkAge0(age){
    age > 18 ? console.log('Ok') : console.log('Did parents allow yo?');
}
checkAge0(20);  

//!min
function min(a , b) {
    if(a > b) console.log(b);
    else console.log(a);
}
min(-5,-4);

//!max
function max(a , b){
    if(a < b) console.log(b);
    else console.log(a);
}
max(5 , 10)

//!pow
function pow(a,b) {
    console.log(a ** b);
}
pow(5 , 2)

//!Arrow function

function ask(question , yes ,no) {
    if(question) yes();
    else no();
}

ask(
    'Do you Agree?',
    function () {console.log('Yuo agreed.'); },
    function () {console.log('You cancled the execution.');} 
)

let arrowAsk = (question , yes , no) => {
    question ? yes() : no();
}

arrowAsk(
    'Do you Agree?',
    () => {console.log('Yuo agreed.');},
    () => {console.log('You cancled the execution.');}
)