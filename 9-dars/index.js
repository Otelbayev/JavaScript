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


//! filter 
// shart tekshiradi true return true bolsa shu ma'lumotni qildiradi false bolsa shu malumotni remove qilib yuboradi!
let number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 20 , 15]
let string = ['jasur' , 'inam' , 'davron' , 'none']

let res = number.filter((value , index , array) => {
    if(!(value % 2)) return true;
    else return false;
})
res = string.filter((value) => {
    return value.length > 5;
})

let students = [
    {name:'jasurbek' , sname:'Otebayev' , age:18},
    {name:'none' , sname:'sojfbn' , age:15},
    {name:'inam' , sname:'Otebayev' , age:11},
    {name:'davron' , sname:'kamalov' , age:30},
    {name:'orbn' , sname:'ERB' , age:10},
    {name:'uPEFr' , sname:'YRNTBE' , age:8},
    {name:'none' , sname:'sojfbn' , age:15},
]

res = students.filter((e)=>e.age >= 18)

//! sort();
//sortirovka qiladi 
res = number.sort(); // notogri chiqaradi
res = number.sort((a , b) => a - b) // osish tartibida
res = number.sort((a , b) => b - a) // kamayish tartyibida

res = string.sort((a , b) => a.localeCompare(b))// a-z ga
res = string.sort((a , b) => b.localeCompare(a))// z-a ga

//! find();
// return qilgan narsani qitadi topgan paytda toxtaydi filter esa oxirigacha ishlaydi!
number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
res = number.find((value) => {
    // console.log(value);
    return value == 3
})

// console.log(res); 
//! findIndex(); findLastIndex();

res = students.findIndex((e) => e.age == 18)
// console.log(res); //! indexini chiaradi

res = students.findLastIndex((e) => e.name === 'none')

//! every();
//arrayning elementi hamma shartni qanotlantirgandagina true qaytaradi boshqa paytda false
res = number.every((e) => e > 0)

//! some();
//array elementidan birontasi shartna qanotlantiesa true hech bir qanotlantrmagan taqdirda false qaytaradi!
res = number.some((e) => e > 5)

//! Array.from();
//stringni arrayga aylantiradi
res = Array.from('12345678' , (e) => Number(e))
// console.log(res); 

//! forEach();
  //malumot qaytarmaydi faqat arrayni yurib chiqadi
number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

res = number.forEach((value,index) => {
    // console.log(value);
})

// console.log(res);

//! map();
// malumot qaytadi yani return qiladi array qaytaradi , ekranga chiqarishda map ishlatiladi!
res = number.map((value,index) => {
    // console.log(value);
    return value
})

//! fill();

num = [10 , 15 , 10 , 20];

res = num.fill(3 , 1 , 3) // 3 ni 1-3 indexlardagi elementlar o'rniga qoyadi

//! copWithin()

num = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
//! console.log(eval(num.join("+")));
res = num.copyWithin(0 , 5 , 9);

//! flat();

let c = [1 , [2 , [0 , [1 , 5 , [10]]]]];

res = c.flat(Infinity)

//! flatMap();
// flat + map ni umumlashganu
res = c.flatMap((value) => {
    return value;
})


//! .reduce();
let mm = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
let result = mm.reduce((current , value) => {
    // console.log(current , value);
    return current + value
} , 5)

console.log(result);