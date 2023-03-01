//! new Map();

let obj = {};

let map = new Map();

obj.name = "jasurbek"
// map.name = 'jasurbek'
// console.log(obj ,map);

// map array bilan bir xil xususiyatga ega lekin size nol boladi. set orqali ma'lumot kiritsak boladi


//!map.set()
map.set('name' , 'jasurbek')//! map ga malumot joylash
map.set(123, "aksnaoroaern")

// console.log(map);

//! map.get
// let a = map.get('name') //! mapdan ma'lumotmi olish 
// console.log(map.set(123));

//! map.has()
// console.log(map.has(123));//! map ning ichida kiritilgan key bor yoki yoqligiga tekshiradi boolean
 
//!map.delate()
//!map dan ma;lumotni ochiradi
map.delete(123)
// console.log(map);

//! map.clear()
// map.clear() //! hamma malumotlarnni ochiradi bosh map qaytaradi
// console.log(map);

//! default parametr

let map1 = new Map([['name' , 'webbrain'] , ['title' , 'IT center']])

console.log(map1.keys());
console.log(map1.values());
console.log(map1.entries());