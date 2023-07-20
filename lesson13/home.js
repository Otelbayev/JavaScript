//! Summa

let Sum = (n) => {
    let sum = 0
    function s(n){
        if(n === 1) return sum += 1
        else {
            sum += n
            return s(n-1)
        }
    }
    s(n)
    console.log(sum);
}
// Sum(10)

//! Factorial

let Fac = (n) => {
    let sum = 1
    function s(n){
        if(n === 1) return sum *= 1
        else {
            sum *= n
            return s(n-1)
        }
    }
    s(n)
    console.log(sum);
}
// Fac(5)

//! Fibonacci

// function fibonacci(num){
//   let a = 1, b = 0, c;

//   while (num >= 0){
//     c = a;
//     a = a + b;
//     b = c;
//     num--;
//   }
//   return b;
// }

// console.log(fibonacci(10));

// function fibonacci(num) {
//   if(num <= 1) return 1
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(10));

// let arr = [0 , 1];

// let fibonacci = (n) => {
//    if(!n){
//     return arr
//    } else{
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2])
//     return fibonacci(n - 1)
//    }
// }
// let input = 10
// console.log(fibonacci(input - 2));

// let moment = () => {
//   return {
//     format(){
//       console.log('hello world');
//     }
//   }
// }

// moment().format();

setTimeout(() => {
    console.log('none');
}, 5000);

console.log('hello')

console.log('qwer');