//! String

// let str1 = "lorem ipsul \n'dolor' !"
// let str2 = `"nhgf" 'hngfbdsvc'

// ${str1}`

// console.log(str2);

//! Escape character
//  \n => new line
//  \t => tab

//Constructor vs string

let str1 = "Jasurbek";
// let str2 = new String('Jasurbek'); // object
let str2 = "Jasurbek"

// console.log(str1 == str2);//true
// console.log(str1 === str2);//false

// console.log(typeof str2); //! object

//! a.localeCompare(b)
// a ning ichida b borligiga tekshiradi
// 1 => qisman bor
// 0 => 100% bor
// -1 => yoq 

// console.log(str1.localeCompare(str2));

//!index[]
// console.log(str1[1]); //a
// console.log(str1.charAt(1));//a
// console.log(str1.at(-2));//e

//!String methods

let str = "JasurbekJ"

//!length
// console.log(str.length);// => uzunligini chiqaradi
//! uppercase
// console.log(str.toUpperCase()); // katta harfga otkazadi

let a = 784512;
// console.log(a.toUpperCase()); //ERROR
// console.log(`${a}`.toUpperCase());//784512

//! lowercase
// console.log(str.toLowerCase()); kichkina harfga ogiradi
// console.log(str.toLocaleLowerCase());

//!indexOf()

console.log(str.indexOf('J',1)); //indexini cchiqaradi
console.log(str.lastIndexOf("J")); // oxiridan boshalb qidiradi

//! includes();
// string ichida kiritilgansoz bor yo yoqligini chiqaradi

// console.log(str.includes('bek')); //true

//! endsWidth() , startsWidth()

// console.log(str.startsWith('Jas'));//true
// console.log(str.endsWith('bek'));//true

//!padEnd() padStart()

// console.log(str.padEnd(10 , "*")); 
// console.log(str.padStart(10, "*"));

// uzunligi 10 ga yethuncha korsatilgan belgini qoshadi

//! Slice() substring() substr()
/*
console.log(str.slice(0));
console.log(str.slice(0 , -2));
console.log(str.slice(0 , 5)); // [0-5) oraliqda kesib oladi


console.log(str.substring(2 , 0)); // orqaga ham ishlaydo - qiyman qabul qilmaydi

console.log(str.substr(2 , 2));// 2- indexdan boshlab 2ta element kesib oladi
*/

//!trim() start , end
/*
let trim = "      jasur     ";

console.log(trim.trim()); //-> bosh joylasrini ochirib yuboradi
*/

str = "jasurbek";

//!Split()
/*
console.log(str.split("a")); //-> malumotlarni arrayga aylantirib neradi*/

//! Concat()
/*
str1 = "jasur" 
str2 = "bek"

console.log(str1.concat(str2));//ikki stringni bir biriga qoshadi*/

//! valueOf()

// console.log((new String('Webbrain')).valueOf());

// constructure dan malumot oladi
/*
str = "jasurbek";
console.log(str.replace('bek' ,'bek'.toUpperCase()));
// almashtirish

//! for of

for(char of str){
    console.log(char);
}

// har bir elementini birma bir chiqaradi  */

console.log('Jasurbek'.slice(-5));