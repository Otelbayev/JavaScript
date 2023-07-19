//!1

// Empty object
let user = {};

//Add name
user.name = 'Jhon';
//Add surname
user.surname = 'Smith';
//Change name
user.name = 'Pete';
//Delate name
delete user.name;
// console.log(user);

//!2

let salaries = {
    Jhon: 100,
    Ann:160,
    Pete: 130 
}
let sum = 0;
for (const key in salaries) {
     sum += salaries[key];
}
// console.log(sum);

//!3

let menu = {
    width:200,
    height:300,
    title:'My menu',
}
let menuClone = new Object();

for (const key in menu) {
    if(!isNaN(menu[key])){
        menuClone[key] = menu[key] * 2 ;
    } else {
        menuClone[key] = menu[key];
    }

}
// console.log(menuClone);

//!4

function makeUser() {
    return {
        name: 'Jhon',
        ref:this
    };
}

let userss = makeUser();

// console.log(userss.ref.name); //undefined

//!5

let calculator = {
    read(a , b){
        this.a = a;
        this.b = b;
    },
    sum(){
        console.log(this.a + this.b);
    },
    mul(){
        console.log(this.a * this.b);
    }
}

// calculator.read(10 , 0);
// calculator.sum();
// calculator.mul();


//!6

let ladder = {
    step:0,
    up(){
        this.step++;
    },
    down(){
        this.step--;
    },
    showStep: function (){
        console.log(this.step);
    }
}

// ladder.up().up().down().showStep().down().showStep(); 

//!7
let obj = {
    name:'Jasurbek'
}
function A() {
    return obj
}
function B() {
    return obj    
}

let a = new A();
let b = new B();

console.log(a == b);

