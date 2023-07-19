/*
Data typelar 8 ta 7tasi primitive 1 tasi none-primitive
Primitive - bu ozida faqat bitta qiymat saqlovchi va pass by value yani qiymatni xotiraning Stack qismidan oladi
Non-Primitive -> bu O'zida bir nechta toplamlarni saqlovchi data turi. Xotiradan Pass by reference yani Stack da link saqlnadi u linkni Heap da valuesi saqlanadi!  
*/

// 1. Data type larni misollar orqali tushintirish.

//1. Number

let num = 16;
console.log(typeof num); // Number
/*
Number data typesi sonlarda qollaniladi o'z ichiga -2*10^53 dan +2*10^53 oraliqqacha.
Agar undan katta sonlar keladigan bolsa arifmetik hatolar kuzatiladi.
*/
//2. Bigint

let bInt = 95n + 1n;
console.log(typeof bInt, bInt);
/*
BigInt Number data typesiga kirmaydigsn sonlar yani -+2*10^53 dan katta sonlarni qabul qiladi va oxiriga numberdan farqlash uchun n qoshib yoziladi!
*/

//3. String

let name = "Jasurbek O'telbayev";
console.log(name, typeof name);
/*
String - matnlar harflar sonlar yani klaviaturada bor barcha narsani qoshtirnoq ishu=ida qabul qiladi 3-turi bor.
"" - ikkitalik buni ichida bittalik qoshtirnoq ishlatsa boladi
'' - bittalik ichida ikkitalik qoshtirnoq ishlatsa boladi
`` - backtic ichida ${o'zgaruvchi} hohlagan joyida ishlatsa boladi!
*/
//4. Boolean

let info = true;
let info1 = false;

console.log(info == info1);
/*
Boolan mantiqan bor yoki yoq , true va false
masalar number bilan ham ifodalasa bolasi true = 1 , false = 0
*/
//5. Null

let n = null;
console.log(n + 1);
1;
console.log(n - 1);
-1;
console.log(n * 0);
0;
console.log(10 / n); //infinity
/*
Null = data typesi null agat typeof null qiladiga bolsak object qaytaradi ustida arifmetik ammalar bajarish mumkun masalan: null + 10 = 10 , null * 5 = 0
*/
//6. Undefind

let x, y;
console.log(x, y);
console.log(x == y);
/*
Undefind - bu o'zgaruvchi elon qilinib unga qiymat biriktirilmasdan chaqirilsa undefind qaytaradi. typesi undefind log(null == undefind) // true
*/
//7. Symbol

let s = Symbol("text");
console.log(s);
/*
Symbol - data turi Symbol lekin ikkita birxil Symbollarni bir biriga tenglashtirganda false qaytaradi! 
*/
//8. Object

//object

let obj = { name: "Jasurbek", sname: "O'tlebayev", age: 18 };
console.log(obj.name, obj["sname"]);
/*
Object umumiy toplamalar bilan ishlaydi key orqali murijat qilinadi va shu bo'yicha saqlaydi
*/
let arr = [10, "none", 52n];
console.log(arr[1]);
// Array index boyicha 0 da boshlab ketma ketlikda joylashadi xoxlagan elementni indexi ilan chaqirish imkoni mavjud
function func1() {
  console.log("function declaration");
}
let func2 = function () {
  console.log("function expression");
};
let func3 = () => {
  console.log("arrow function");
};
func1();
func2();
func3();
/*
Function - 3 turi bor 1.Declaration 2.Expression 3.Arrow function
Funsiya kodlarni qayta qayta yozilishni oldini oladi!
*/

//2.String console

console.log(`hello ${16}`); // hello 16
console.log(`hello ${"name"}`); // hello name
console.log(`hello ${name}`); // hello Jasurbek
console.log("homework");
