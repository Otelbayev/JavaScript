//HomeWork

//Prefix and Postfix
let a = 1 , b = 1;

let c = ++a; // 2
let d = b++; // 1

//Assigment Result
let n = 2;
let m = 1 + (n *= 2); // 5

//Type Convertion

let s = "" + 1 + 0 // 10 type String
// Bosh string ga number qoshilib birinchi 1 stringga aylanadi "1" + 0 "10" boladi!

s = "" - 1 + 0// -1 type Number 
// "" bosh string falsey qiymat false = 0 va 0 - 1 + 0 = -1

s = true + false //0 + 1 = 1 tyope Number
// true = 1 false = 0  yig'indisi 1 chiqadi

s = 6 / "3" // 2 tyope Number
// string ni oldida arifmetik amal  bajarilsa type numberga aylanadi va 6 / 3 number 2

s = 5 + 4 + "px" // 9px type string
// 4 + 5 = numberda 9 + "px" stringga aylanadi 9px chiqadi 

s = "$" + 4 + 5; // string $45
// "$" number 4 ga qoshilishi natijasida $4 stringda paydo boladi  keyin "$4" + 5 stringda "$45"

s = " -9 " + 5;// string -9 5
// " " != "" umumiy stringga aylanadi "asd" + 5 kabi vaziyat shuning uchun " -9 5 "

s = " -9 " - 5 // numberda -14
// -9 numberga aylanib -9-5 = -14 

s = null + 1;//1
// sababi null arifmetik ammalt bajarilgan paytta mantiqan 0 ni o'rnini egallaydi

s = undefined + 1 ; // Nan
// Not a number undefind qiymatga ega bolmagan ozgaruvchi unga son qoshilganda NaN qaytaradi

s = " \t \n " - 2; // NUmber -2

s = 4 > 5; //false
// 4 > 5 xato bolgani uchun false

s = "append" > "pinapple" // false
// sababi a va p larni asky kodlati solishtiriladi bunda a p dan kichik

s = undefined == null; //true
// ikkaasi ham bosh malumotlar bolgani uchun

s = undefined === null; //false
//data typelari xar hil boladi typeof null = object typeof undefind = undefind

s =  null == "\n0\n" ;//false
//sababi  null != 0 "\n0\n" bu uch qatorni egallaydi ikkinchi qatorda nol joylashadi

s = null === +"\n0\n" //false
// bunda null === 0 -> number kabi holat null 0 ga teng emas  
console.log(s);