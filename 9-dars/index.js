//! Arrays

//! Declaration

// let ar = [1 , 2 , 3 , 4 , 5 , "jasurbek" ,true, function test(){console.log('test');} , null , undefined]

//index 0 dan array.length - 1 gacha

// console.log(ar[5]);
// console.log(ar.length); //! array uzunligi
// console.log(ar[ar.length - 1]); //! oxirgi elementi

//! at();

// console.log(ar.at(-2)); // manfiy qiymat qabul qiladi


//! new Array()

// let ar = new Array(5); //! uzinligi 5 ga teng bosh array qaytaradi
let arr = [];

// console.log(ar , arr);
// console.log(ar == arr); //!false

// ar = new Array('5') //! qiymati 5 ga teng uzunligi 1 ga teng array  

// console.log(arr);

// arr[0] = 5
// console.log(arr); // [5]
// console.log(arr.length);//1

// arr[100] = 0;
// console.log(arr);//! 100chi indexga 0 qiymatini beradi qolganlari empty items boladi

//! Array to String

// let ar1 = [1 , 2 , 3 , 4 , 5]
// let ar2 = [6 , 4 , 9 , -9]

// console.log(ar1.toString()); //stringga ogiradi
// console.log(ar1.join("-")); //stringga ogiradi orasiga belgi qoyadi

//!concat arraylarni qoshish

// console.log(ar1.concat(ar2 , 'jasurbek' , []));

//! Array.isArray([])

// console.log(typeof []); //! object

// console.log(Array.isArray([])); //!true

//!Comparation

ar = []

// console.log(ar == 0); //true
// console.log(ar == "0"); //false

//! Loops

let user = ['jasurbek' , 'inamjon' , 'dauranbek' , 'none']

//!For
for(let i = 0; i < user.length; i++){
    // console.log(i , user[i]);
}

//! For of 
// array ichida =gi valuelarni chiqaradi
for (const i of user) {
    // console.log(i);
}

//! For in
// arrayning indexini chiqaradi

for (const i in user) {
    // console.log(i);
}

//! Array methods

let array = [1 , 2 , 3 , 4];

//!push()
// oxiridan malumot qoshadi

array.push(5 , 6 , [1 , 0]);
// console.log(array);

//!pop()
array.pop();

//oxiridan malumot ochiradi
// console.log(array);

array = [1 , 2 , 3 , 4];

//!unshift()
// array oldidan ma'lumot qoshadi

array.unshift(0);
// console.log(array);

//! Shift()
//array oldidan ma'lumotni ochiradi
array.shift()
// console.log(array);

//! splice()
//arrayga malumot qoshadi ochiradi yangilaydi

array = [1 , 2 , 3 , 4];

// array.splice(0 , 2)  //! [0 - 2] indexlar orasidagi elementlarni ochiradi

// array.splice(1) //! 1-indexdan boshlab oxirigacha ochiradi

// array.splice(0 , 2 , "jasurbek" , 0) //! [0 - 2] indexlar orasidagi elementlarni ochiradi oeniga 'jasurbek' va 0 ni qoyadi

array.splice(2 , 0 , "hello") //! 2-indexga 'hello' ni qoshadi hech narsa ochirmaydi

// console.log(array);

//! Slice()

let ar1 = [1 , 2 , 3 , 4 , 5]
let ar2 = [1 , 2 , 3 , 4 , 5]

// ar1.splice(0 , 2)//! arraydan kesib tashlaydi

// console.log(ar1);
// console.log(ar2.slice(0 , 2));//! arraydan qirqib oladi

//! indexOf()

// console.log(ar1.indexOf(5)); //! 5 ning indexini chiqaradi element  yoq bolsa -1 chiqaradi

// console.log(ar1.indexOf(1 , 2)); //! 2 indexdan ketingi 1 ning indexini chiqaradi

//! lastIndexOf()

// console.log(ar1.lastIndexOf(1)); //! oxiridan boshlab qidiradi

//! Split();

ar1 = [1 , 2 , 3 , 4 , 5];

// console.log(ar1.join("")); // Array to String
// ar2 = 'jasurbek';
// console.log(ar2.split("")); // Sting to Array 

//! reverse();
// arrayni teskari chiqaradi
// ar1.reverse();

// console.log(ar1);

//! .includes()
// boolean qiymat qaytaradi array ichida bor yoki yoqligiga tekshiradi
// console.log(ar1.includes(0)); // flase

//! .filter()

let num = [1,2,3,4,5,6,7,8,9];
let str = [ 'apple' , 'orange' , 'banane' , 'kiwi'];

let res = num.filter((value , index) => {
    // return true;  //!numdagi hamma element chiqadi 1 , 2 ...
    // return flase; //!bosh array 0 , "" , []
    return value > 5 // [6,7,8,9]
})

res = str.filter((value , index) => {
    return value.length <= 5 //['apple' , 'kiwi']
})


let students = [
    {id:1 , year:1999 , name:'jasurbek'},
    {id:2 , year:1998 , name:'none'},
    {id:3 , year:1997 , name:'inam'},
    {id:4 , year:1996 , name:'davron'},
    {id:5 , year:1995 , name:'john'},
    {id:6 , year:1994 , name:'sara'},
    {id:7 , year:1993 , name:'july'},
    {id:8 , year:1992 , name:'natale'},
]

res = students.filter((value)=> value.year === 1998 )
res = students.filter(value => value.id > 5 )

num = [95,986,956,-9,4,-6,74,-54,0]

//! .sort();

res = num.sort((a , b)=>a - b) //! osish tartibida
res = num.sort((a , b)=>b - a) //! kamayish tartibida

res =  str.sort((a , b) => a.localeCompare(b)) //! stringga nisbatan taqqoslash

res = students.sort((a , b) => a.year - b.year) //! osish tartibida yerlar
res = students.sort((a , b) => b.year - a.year) //! kamayish tartibida yerlar

res = students.sort((a , b) => a.name.localeCompare(b.name)) //! alifbo tartibida ciqaradi

// console.log(res);

//! .find();

num = [1,2,3,4,5,6,7,8,9];
str = [ 'apple' , 'orange' , 'banane' , 'kiwi'];
students = [
    {id:1 , year:1999 , name:'jasurbek'},
    {id:2 , year:1998 , name:'none'},
    {id:3 , year:1997 , name:'inam'},
    {id:4 , year:1996 , name:'davron'},
    {id:5 , year:1995 , name:'john'},
    {id:5 , year:1995 , name:'johns'},
    {id:6 , year:1994 , name:'sara'},
    {id:7 , year:1993 , name:'july'},
    {id:8 , year:1992 , name:'natale'},
]

res = num.find(value => value == 8) // 8
res = str.find(value => value.length == 5) // 'apple'
res = students.find(value => value.id == 5) // id=5 bolgan value ni chiqaradi


//! .findIndex();

res = students.findIndex(value => value.id == 5) // id=5 bolgan valuening indexini chiqaradi!

//! .findLasiIndex();

res = students.findLastIndex(value => value.id == 5) // oxiridan boshlab qidiradi

// console.log(res);

//! forEach();
//qandaydir amal bajarish uchun 
// let resfor = num.forEach((value , index) => console.log(value))

//! .map();
// malumot ekranga chiqishi kerak bolsa map ishlatiladi array qaytaradi
let resmap = num.map((value , index) => {
    return value
})

//! .every();
num = [1,2,'3',4,5,6,7,8,9]
// console.log(num.every((value) => !isNaN(value))); //! true

// console.log(num.every((value) => typeof value == 'string')); //! hammasii tekshiradi barcha vasluedan true qaytsa true bittsi flase bolsa false

// boolean qiymat qaytaradi array ichidagi elementlarni tekshiradi

//! .some();

// console.log(num.some((value)=> typeof value == "number"));

//! everyga teskari ishlaydi bitta true chiqsa hammasi true bitta ..

//! .fill();
num = [1,2,'3',4,5,6,7,8,9]
// console.log(num.fill('wba' , 2)); // 2-indexdan boshlab hammasi 'wba' ga ozgaradi

// console.log(num.fill('jasur', 2 , 5)); // 2-indexdan boshlab 5-indexgach 'jasur' ga ozgaradi

//! .copyWidthin();


// console.log(a.copyWithin(0 , 3 , 6)); // 0 indexdan boshlab  [3-6) index orasidagi ma.lumotlarni qoyadi

let a = [1 , 2 , 3 , 4 , 5 , 6 , 7];

//! .reduce();

res = a.reduce((sum , current) => {
//    console.log(sum);
    return 1;
} , 0)

console.log(res);