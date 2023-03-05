let obj = {}
// let map = new Map();

obj.name = "jasurbek"
// map.name = "jasurbek"

// console.log(obj.name);//!jasurbek
// console.log(map.name);//!jasurbek

// console.log(map.size);//!0

//! set() mapga malumot biriktirish

// map.set('name' , 'otelbayev')

// console.log(map);

//! get() mapdan malumot olish

// console.log(map.get('name'));

//! map da istalgan data typeni key sifatida idshlatish mumkin

// map.set(123 , 'none');
// map.set(true , false)
// console.log(map);

//! .has()  ichida bor yoki yoqligiga tekshiradi

// console.log(map.has(123)); //! true

//! delate() key boyish ochiradi

// map.delete(123);

// console.log(map);

//! clear();  bosh map qaytaradi

// map.clear();

// console.log(map);

//! default parametr

let map = new Map([['name' , 'jasurbek'] , ['age' , 18]])

// console.log(map);

//! keys() , values() , entries()

// console.log(map.keys()); //! keylarini chiqaradi 
// console.log(map.values());//! valuelarini chiqaradi
// console.log(map.entries());//! map ichida key va valuelari bitta array korinishida chiqaradi

// for(let value of map) {
//     console.log(value);
// }

//! next();

let gen = map.entries()
//! map ga nisbatan birinchi qollanishida birinchi qiymatini , ikkinchi qollanishida ikkinchi qiymatini va oxirgi qiymatini chiqargach done:true ga aylanadi
// console.log(gen.next());//! value:['name' , 'jasurbek'] done:true
// console.log(gen.next());//! value:['age' , 18] done:true
// console.log(gen.next());//!value:undefind done:true

//! forEach() da yurip chiqsa biladi lekin map() bilan error

//! map ni object ga ozgartiradi
// obj = Object.fromEntries(map);
// console.log(obj.name);//jasurbek

//! Set();
// map key and value collection objectga oxshaydi
// set value collection arrayga oxshaydi

let set = new Set();
// bir xil malumotlarini bita qilib qabul qiladi
//! add() malumot qoshish

set.add('jasurbek')
set.add('none')

// console.log(set);

//! has()
// console.log(set.has('none'));

// delate() ochiradi
// clear() toxalaydi

//! key ga ham valuega ham value yozib qaytaradi
// console.log(set.entries());

// let g = set.entries()


//!new Map vs weakMap()
// let WakeMap = WeakMap([
//     ['name' , 'jasurbek'],
//     ['age' , 18]
// ]) 
// obj = {data:map}
// WakeMap = null
// console.log(map);
// console.log(obj);
//! Garbage collection avtomatik tarzada map va set dagi malumtlarni ochirib yubormaydi

// Map obyekti
let myMap = new Map();

let obj1 = { name: "Ali" };
let obj2 = { name: "Vali" };
let obj3 = { name: "Hasan" };

myMap.set(obj1, 25);
myMap.set(obj2, 30);
myMap.set(obj3, 20);

console.log(myMap.get(obj1)); // 25

// WeakMap obyekti
let myWeakMap = new WeakMap();

let obj4 = { name: "John" };
let obj5 = { name: "Doe" };
let obj6 = { name: "Jane" };

myWeakMap.set('obj4', 25);
myWeakMap.set(obj5, 30);
myWeakMap.set(obj6, 20);

console.log(myWeakMap.get('obj4')); // 25

// Bu yerda obj3 va obj6 o'chirilgan, lekin
// Map dan faqatgina obj3 o'chirilgan, WeakMap dan obj6 vaqiqtadan oldin o'chirilgan.
obj3 = null;
obj6 = null;
