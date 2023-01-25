// 1. Data type larni misollar orqali tushintirish.

//1. Number     

let num = 16;
console.log(typeof num); // Number

//2. Bigint

let bInt = 95n + 1n
console.log(typeof bInt , bInt);

//3. String


let name = "Jasurbek O'telbayev";
console.log(name , typeof name);

//4. Boolean

let info = true;
let info1 = false;

console.log(info == info1);

//5. Null

let n = null
console.log(n + 1); 1
console.log(n - 1); -1
console.log(n * 0); 0 
console.log(10/n); //infinity

//6. Undefind

let x , y;
console.log(x ,y);
console.log(x==y);

//7. Symbol

let s = Symbol("text")
console.log(s);

//8. Object

//object

let obj = {name:"Jasurbek",sname:"O'tlebayev",age:18}
console.log(obj.name , obj["sname"]);

let arr = [10 , "none" , 52n]
console.log(arr[1]);

function func1(){
    console.log('function declaration');
}
let func2 = function(){
    console.log('function expression');
} 
let func3 = () => {
    console.log('arrow function');
}
func1();
func2();
func3();

//2.String console


console.log(`hello ${16}`); // hello 16
console.log(`hello ${'name'}`); // hello name
console.log(`hello ${name}`); // hello Jasurbek