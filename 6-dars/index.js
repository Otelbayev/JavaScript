//! Object

// key va valuedan iborat toplam!

// let info = {
//     name: 'Jasurbek',
//     surname: 'O\'telbayev',
//     age:18,
//     wasBorn:2004,
//     'full name': 'JOD'
// }

// console.log(info);

//! Empty objects;

let boshObj = {};
let emptyObj = new Object();

// console.log(emptyObj , boshObj);

//! valuelarni olish

const info = {
    name: 'Jasurbek',
    surname: 'O\'telbayev',
    age:18,
    wasBorn:2004,
    'full name': 'JOD'
}

// console.log(info.name , info.surname , info.age , info.wasBorn);
// console.log(info.none); // undefined!
// console.log(info['name'] , info['surname'] , info['full name']);

// let key = 'name';

// console.log(info.key); //undefind
// console.log(info[key]); // Jasurbek

// let name = 'surname'

// console.log(info.name); // Jasurbek
// console.log(info[name]); // O'telbayev
// console.log(info['name']); // Undefined

//! Create

info.none = 'none';
// console.log(info);

//!Update

info.name = 'none'

// console.log(info);

//!delate

delete info.name;
// console.log(info);

//! seal
//ma'lumot qoshish o'chirish imkoni bolmayd! lekin yanliasa boladi


//! Freez keylarni const qilish
// ma'lumot yangilash qoshish o'chirish imkoni bolmayd!
Object.freeze(info);
// console.log(info);

let ac1 = {
    howMany:400,
    howMuch:100
}

let ac2 = {
    howMany:400,
    howMuch:100
}

// console.log(ac1 == ac2); // false
// console.log(ac1 === ac2); // false

ac3 = ac2 //! ikkalsaini url manzili bir

ac2.howMany = 0; //! ikkalasiga ham tasir qiladi

// console.log(ac3 == ac2); // true
// console.log(ac3 === ac2); // true

// console.log(ac3 , ac2);

let ac01 = {
    howMany:400,
    howMuch:100
}

let ac02 = {
    howMany:400,
    howMuch:100
}

ac03 = structuredClone(ac01); //! har xil url manzilga murojat qiladi

ac03.howMuch = 0 
// bir biriga teng bolmaydi biri ozgarsa boshqasi o'zgarmaydi 
// console.log(ac03 , ac01); 


//! O'zgaruvchi bilan key bir xil bolsa faqat key yozib ketsa boladi
// name = 'Webbrain academy';
// let major = "Frontend";

// const obj = {
//     name, 
//     major
// }

// console.log(obj);

let obj1 = {
    name:'Webbrain Academy',
    major:"Frontend"
}

// console.log('name' in obj1);//true
// console.log('major' in obj1);//true

//! Assign

let obj2 = {}

Object.assign(obj2 , obj1) 
// obj2 ga obj1 ning qiymatlarini o'zlashtiradi

//! For loop

const obj3 = {
    name: 'Webbrain Academy',
    major: 'Frontend',
    founded:'2019',
    students:1000,
    mentors: 5
}

for(i in obj3){
    // console.log(i); // obj3 keylarini qaytaradi
    // console.log(i +" : " + obj3[i]);
}

//exercise
/*
let obj = {
    name:'none',
    age:15,
    child:{
        name:'bvcx', 
        age:52,
        child:{
            name:'gfds',
            age:90,
        }
    }
}

while(1){
    if(obj){
        console.log(obj.age);
    }else{
        break;
    }
    obj = obj.child;
}*/

//! Garbage collection

// qachonki objectning url manzili o'zgaradigan bolsa garbage bolib qoladi auto remove qiladi valuesini!

let object = {
    name:'Webbrain',
    major:'Frontend'
}

object = 'none';
// shu joyide objectning valuelari remove boladi shunga garbage collection!
// console.log(object);

//! function


// let user = {
//     name : 'Webbrain',
//     sayHi(){
//         console.log('hello');
//     }
// }
// user.sayHi();


//! this
// parent scope ni ma'lumotlarii oladi

// let user = {
//     name: 'Webbrain',
//     sayHi(){
//         console.log(`hi ${this.name}`);
//         // console.log(`hi ${user.name}`);
//     },
//     getName(){
//         return() => {
//             console.log(this.name);
//         }
//     }
// }
// user.sayHi();

// let u = user;
// user = null
// u.sayHi(); // user deb charilganda ERROR

// Arrow functionning ichida this ishlamaydi
// Arrow functionning ichida this ni functionni wrapper qilib ishlatish mumkun

// u.getName()()

//! Optional chaining

// let user = {
//     name : 'Webbrain',
//     title:'IT center',
//     // info :{
//     //     // age:50 
//     // }
// }

// console.log(user.name);
// console.log(user.info?.age);

//! Sprad opreator

let use = {
    name : "Jasurbek",
    child:{
        m:"m"
    }
}
let ues1 = {
    none : "none"
}

let users = {...use , ...ues1}

// console.log(users);

//! Distructure

let name = "none"

let user = {
    name:'Jasurbek',
    age: 18,
}

console.log(user.name);

const {name:newName , age} = user;

console.log(newName); // jasurbek
console.log(age); // 18

let disObj = {
    none : 'jasurbek',
    inObj : {
        ages: 18,
    }
}

const {none , inObj:{ages} } = disObj;

console.log(none);
console.log(ages);