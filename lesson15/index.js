//! Old var and Global Object

//! IIFE - Immediately invoked function expression
//o'zini ozi chaqirip qoyivchi function vazifasei var ni scopedan tashqariga chiqmasligini taminlaydi

var a = 10

function getNumber() {
    a = 20;
}
getNumber()
// console.log(a); //20

var b = 15;
(function() {
   var b = 50
})();

// console.log(b); // 15

//! Global Objects 

globalThis.b = 20
b = 520
// console.log(b , globalThis.b);

//! Function Object

function test(a , b){
    // console.log('hi js');
}

// console.log(test.name); //! function nomi
// console.log(test.length); //! parametrlar soni


sayHi.counter = 0;
function sayHi() {
    sayHi.counter++;
}
sayHi()
sayHi()
// console.log(sayHi.counter);  //! 2

//! NFE - Named function expression

const getName = function recursion(name){
    console.log(`hi ${name}`);
    return recursion();
}

//! recursion ga tashqarida access qilishni ilojo yoq faqat getname orqali acces qilish mumkin. recursion function sifatida ishlatiladi

getName('jasur')