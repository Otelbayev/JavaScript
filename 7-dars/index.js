//! Numbers

// console.log(1000000000);
// console.log(1000_000_000);

//! intager -> butun sonlar
//! float - > kasir sonlar

// console.log(1e2); //100 
// console.log(1e3); //1000 
// console.log(1e-2); //0.01
// console.log(1e500); //Infinity

//! toFixed()
// kasir qismida nechta so0n qolishi Numberni Stringga convert qladi
// console.log(0.2 + 0.1); // != 0.3

// console.log(Number(0.2 + 0.1).toFixed(1));

//! String to Number
// let a = "10.3 + 0.2";

// console.log(Number(a)); // NaN
// console.log(Number.parseFloat(a)); //10.5
// console.log(Number.parseInt(a)); //10.5
// console.log(eval(a)); // 10.5

// console.log(+'1_000' + 1); // NaN

//! decimal and Binary

// let num = 5
// console.log(num.toString(2)); //101
// console.log(parseInt("101" , 2));

//!  isNaN()

// console.log(isNaN(+"1_000")); //true
// console.log(isNaN(5)); //false

//! Object.is

// let res = Object.is('web' , 'webb')
// console.log(res);//false
// res = Object.is('no' , 'no')
// console.log(res);//true

//! toPrecision(n)

// let num = 5.123456
// let n = 2
// console.log(num.toPrecision(n)); //->n ta raqam chiqaradi  5.1

// let none = 0.003568566;
// console.log(none.toPrecision(2));//nollarni son deb qabul qilmaydi 0.0035

// console.log(9_999_999_999_999_999);//1000000000000000000

//! Math.

console.log(Math.PI); // pi soni
console.log(Math.abs(-500)); // module

//round
console.log(Math.round(2.5)); // yaxlitlaydi 3
console.log(Math.round(-2.5)); // -2

//ceil
console.log(Math.ceil(2.5));//tepage yaxlitlaydi
console.log(Math.ceil(-5.6)); //-5

//floor
console.log(Math.floor(2.5));//pastga yaxlitlaydi
console.log(Math.floor(-5.6)); //-6

//trunc
console.log(Math.trunc(1.87456123)); // kasir qismini ochirish butun qismini qaytaradi
console.log(Math.trunc(-10.999)); // -11

//random
console.log(Math.round(Math.random()*100));
console.log(parseInt(Math.random()*100));

//min
console.log(Math.min( 1,2,3,4,5,6,0,9));//0

//max
console.log(Math.max( 1,2,3,4,5,6,0,9)); //9

//pow
console.log(Math.pow(10 , 5)); // 100000
console.log(Math.pow(5, 2)); // 25

// sqrt  kvarat ildiz
console.log(Math.sqrt(4));//2

//cbrt kub ildiz
console.log(Math.cbrt(27));//3

//sign

console.log(Math.sign(-574)); //-1
console.log(Math.sign(0));//0
console.log(Math.sign(984512));//1
console.log(Math.sign('984512'));//-1
console.log(Math.sign('jmhngbfvdc'));// NaN