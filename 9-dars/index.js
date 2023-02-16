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

//! includes
// boolean qiymat qaytaradi array ichida bor yoki yoqligiga tekshiradi
// console.log(ar1.includes(0)); // flase
``