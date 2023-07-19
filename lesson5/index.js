//!Hosting haqida

// elon qilingan kodni yuqoruga olip chiqish

//! —  Function decloration

func1() // hello world
function func1(){
    console.log("hello world");
}
func1();

//! —  Function Expression

// func2(); Can not accesss befor initializiation
let func2 = function(){
    console.log("Hi!");
}
func2();

//! —  Arrow Function

// arrowFunc();Can not accesss befor initializiation
let arrowFunc = () => {
    console.log('This is arrow function!');
}
arrowFunc();

//! —  Shadowed variable

    let a = 15;
    function func(){
        let a = 50;
        console.log(a); //50
    }
    func()
    console.log(a);//15

    let b = 0;
    let x = () => {
        b = 5;
        console.log(b);
    }
    x() // 5
    console.log(b);//5

//! —  Parameter

    function par1(name , surname , age){
        console.log(`Hello my name is ${name} and family ${surname}. I'm ${age} years old!`);
    }
    par1('Jasurbek','O\'telbayev',18);

    let par2 = function(a , b){
        console.log(b , a);
    }
    par2('first','second') // second first

    let  par3 = (a) =>{
        console.log(a);
    }
    par3("none")

//! —  Default parameter

function dpar(a = 5 , b = 8 , c = 9){
    console.log(a , b , c);
}
dpar(0); // 0 , 5 , 8
dpar(0 , 0);// 0 , 0 , 9
dpar(0 , 0 , 0); // 0 , 0 , 0

//! —  Functions with return

function ret1(a) {
    let res = a * 16 + 100;
    return res;   
}

console.log(ret1(5) + ret1(0));//280

function ret2(a){
    console.log(a * 16 + 100);
}

console.log(ret2(5) + ret1(0));//NaN