//If else
// if(condition){code;}
// else if(condition){code;}
// esle {code;}

// 0 , null , undefind , "" 
if(true){
    // console.log("Hello Js!");
}
else{
    console.log("Hi!");
}

let age = 18;

if(age >= 18){
    // console.log("Malades Krasavchik");
}
else{
    console.log("Eyy godak!");
}
// if == false bolganda else ning codesini o'qiydi!

// let temp = "issiq";

// if(temp === "issiq"){
//     console.log("Havor issiq");
// }
// else if(temp === "sovuq"){
//     console.log("Havo Soviq");
// }
// else if(temp === "yomg'ir"){
//     console.log("Havo Yomg'ir");
// }
//  {
//     console.log("Malumot mavjud emas!");
// }


//1.

// if(true){
//     console.log('True'); // true
// }
// else if (true){
//     console.log("false"); // o'qilmaydi
// }

// //2.
// if(true){
//     console.log('True'); //true
// }
// if (true){
//     console.log("false"); // false
// }

// let temp = 0;

// if(temp < 0) console.log("Havo juda sovuq");
// else if (temp < 10) console.log("Havo sovuq");
// else if (temp < 15) console.log("Havo issiq");
// else if (temp < 25) console.log("Havo juda issiq");

// if(1){
//     return {temp}
// }


// Trenary Operation

// ? - if , : - else

let a = 20;

// temp < 50 ? == if(temp < 50)

// a < 50 ? console.log("50 ddan kichik") : console.log("Good bye");

// a < 10 ? console.log("a < 10"): a > 5 ? console.log("a > 5") : a = 0 ? console.log("hello") : console.log("Good bye");

// Nullish ?? -> or bilan bir xil ishlaydi faqat null bilan undefindni false deb qabul qiladi qolgan hamma narsano true deb qabul qiladi

console.log(1 || 2); //1
console.log(false ?? 1); // false
console.log(false || 1); //1
console.log(NaN ?? 1); // NaN
console.log(NaN || 1); //1 
console.log(null ?? 1); // 1
console.log(null || 1); // 1
console.log(undefined ?? 1); // 1
console.log(undefined || 1); // 1