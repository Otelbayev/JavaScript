//Compilation 
//1. in html with <script></script>
//2. online js compailer
//3. node console <script src="./index.js"></script>

//Single thread -> bir vaqtda bitta amal bajaradi!

//Variables -> malumotni o'zida saqlashgigan box;
//1. let -> kam xotira , scope
//2. var -> eski versiya , global
//3. const -> o'zgarmas

let name = "Jasurbek";
// console.log(name);

let text;
// let text1;
// console.log(text); //undefind!
// console.log(text1); //error text1 is not defind! 
 
// b = 3; //var!! 

//Data Types -> js da 8 ta dataType lar mavjud!
//1. Number [-900719925740992 +900719925740992] => orasidagi sonlar
//2. BigInt => number ga kirmaydigan sonlar son oxiriga n qoyiladi
//3. String => sozlar matnlar ...
//4. Boolean => true false
//5. Undefind => qiymatga ega bolmagan ozgaruvchi
//6. Null => bosh pustouy
//7. Symbol => unicode uchun 
//8. Object => Non - Primitiva data type

let a , b = null;
// console.log(a , b);

// console.log(typeof a); //undefind
// console.log(typeof b); // object

// console.log(a == b); // true
// console.log(a === b); // false

let t = Symbol("no");
// console.log(typeof t); // symbol

//Oblect -> referenska qarab malumoy chaqiradi!
//1. Array -> key
//2. Object -> index
//3. Function 

let arr = [10, "string" , {} , 80];
let obj = {
    name:"Jasurbek",
    sname: "Otelbayev",
    age: 18
}
function test(){}
let myFunc = () => {}
test();
myFunc();

// Primitive -> valuedan malumot chaqiradi
// Non-primitive -> reference dan ma'lumot oladi  

// alert("HI!") -> Ogohlantirish
// prompt("Name:") -> userdan ma'lumot olish!
// comfirm("18+") -> true false