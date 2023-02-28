// let user = [
//     {id:1 , name:'jasurbek'},
//     {id:2 , name:'none'}
// ]

// let func = (str) => {
//     user = user.filter((value) => {
//         if(value.name.includes(str)) {
//             return value
//         }
//     })
//     console.log(user);
// }

// func('e')

//! Object distructure

let obj = {
    name: 'jasurbek',
    age:18,
    child:{
        name:'none',
        title:'webbrain'
    }
}

const {name , age , child:{name:newName , title}} = obj;

// console.log(name , age , title , newName);

//! Array distructure

let ar = ['apple' , 'orange' , 'kiwi' , 'banan' , 'apelsin'];

let [bir , ikki , ...res] = ar

// console.log(bir); // apple
// console.log(ikki); // apple
// console.log(res); // ['kiwi' , 'banan' , 'apelsin']

//! functiondan distructure qilish
const getData = ({name , age}) => {
    console.log(name , age);
}

// getData({name:'web', age:1})

Object.entries(obj).map(([value]) => {
    // console.log(value);
})

//! new Date()

let date = new Date();
// console.log(Date.now()); //! 1970-yildan boshlab hozirgacha bolgan sekund
// console.log(date.getDay()); //! kunni hisoblatdi Sun = 0 , Mon = 1 Thuse = 2 ..
// console.log(date.getDate()); //! sanani chiqaradi
// console.log(date.getMonth()); //! nechinchi oyligini chiqaradi jan=0 , feb = 1
// console.log(date.getTime()); //! 1970-yildan hozirgacha bolgan seconds
// console.log(date.getFullYear()); //! yilni chiqaradi
// console.log(date.getMinutes()); //! minutn
// console.log(date.getSeconds()); //! sekund
// console.log(date.getMilliseconds()); //! milliSecinds


const todayDate = (symbol) => {
    let date = new Date();
    return `Today: ${date.getDay()}${symbol}${date.getDate()}${symbol}${date.getFullYear()}`
}

// console.log(todayDate(""));

//! JSON

let user = {
    name: 'Jasurbek',
    age: 18,
    sname: 'Otelbayev'
}

//! JSON.stringify(value , replacer , indentacion)
// value => qiymati 
// replacer => ['keys'] backentga jonajadiganlarimizgi kiritamiz
//indentacion => tab qoyib oqishga qulay qilub beradi
console.log(JSON.stringify(user, ['name' , 'age'] , 2)); // stringga ogirib backendga jonatish uchun ishlatiladi

let obj1 = JSON.stringify(user);
console.log(JSON.parse(obj1)); // stringga otkazilgan obj ni orqaga qaytaradi

