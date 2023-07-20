//!Recursion functions


let num = (n) => {
    console.log(n);
    if(n === 1) 1
    else num(n - 1)
}
// num(4)

// let res = 0
// let sum = (n) => {
//     if(n === 1) res += 1;
//     else {
//         res += n;
//         return sum(n - 1)
//     }
// }
// sum(4)
// console.log(res);

let k = 1;

let x = (n) => {
    if(n === 1) k *= 1
    else {
        k *= n
        return x(n - 1)
    }
}

// x(2)
// console.log(k);

// let webbrain = {
//     frontend:[
//         { course:'react' , price : 120 },
//         { course:'vue' , price : 110 },
//         { course:'angular' , price : 120 }
//     ],
//     backend:[
//         { course:'java' , price : 120 },
//         { course:'php' , price : 110 },
//         { course:'nodejs' , price : 120 }
//     ],
//     mobile:{
//         android:[
//             { course:'android' , price:120 },
//             { course:'flutter' , price:110 },
//         ],
//         ios:[
//             { course:'ios' , price:120 },
//             { course:'flutter' , price:110 },
//         ],
//     }
// }




// let sum1 = 0
// for (const i in webbrain) {
//     let a = webbrain[i]
//     if(Array.isArray(a)){
//         a.forEach((e) => sum1 += e.price)
//     } else {
//         for (const i in a) {
//             a[i].forEach((e) => sum1 += e.price)
//         }
//     }
// }
// console.log(sum1);

// let prices = (object) => {
//     for (const key in object) {
//         if(Array.isArray(object[key])){
//             object[key].forEach((w) => sum1 += w.price)
//         }
//         else{
//             prices();
//         }
//     }
// }
// prices(webbrain)
// console.log(sum1);

let webbrain = {
    frontend: [
        { course: 'react', price: 120 },
        { course: 'vue', price: 110 },
        { course: 'angular', price: 120 }
    ],
    backend: [
        { course: 'java', price: 120 },
        { course: 'php', price: 110 },
        { course: 'nodejs', price: 120 }
    ],
    mobile: {
        android: [
            { course: 'android', price: 120 },
            { course: 'flutter', price: 110 },
        ],
        ios: [
            { course: 'ios', price: 120 },
            { course: 'flutter', price: 110 },
        ],
    }
}

// let sum  = 0
// let prices = (webbrain) => {
//     for (const i in webbrain) {
//         if(Array.isArray(webbrain[i])){
//             webbrain[i].forEach((e) => sum += e.price)
//         } else{
//             for (const key in webbrain[i]) {
//                 webbrain[i][key].forEach((e) => sum += e.price)
//             }
//         }
//     }
// }
// prices(webbrain)
// console.log(sum);

let sum = 0
let prices = (obj) => {
    if (Array.isArray(obj)) {
        obj.forEach((e) => sum += e.price)
    } else {
        for (const key in obj) {
            prices(obj[key])
        }
    }
}
prices(webbrain)
console.log(sum);