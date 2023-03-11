//! DDOS Attack

// function getData() {
//     return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
// }

// function getName() {
//     return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
// }

// function getCached(func) {
//     let cache = new Map()
//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x)
//         } else {
//             let res = func();
//             return cache.set(x , res)
//         }
//     }
// }

// getData = getCached(getData)

let obj = {
    user:'users',
    getData(){
        fetch(`https://jsonplaceholder.typicode.com/${this.user}`)
        .then((res)=>res.json())
        .then(res => console.log(res))
    }
}

let getCached = (func) => {
    let map = new Map();
    return function (x) {
        if(map.has(x)){
            console.log(map.get(x));
        } else {
            let res = func.call(this)
           return map.set(x , res);
        }
    }
}

obj.getData = getCached(obj.getData)
