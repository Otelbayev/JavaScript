//No1
// object keylarini toping
let obj={
    id:1,
    name:"WebBrain"
}
// chiqish
// id,name

for(let i in obj){
    // console.log(i);
}

// no2
// object valuelarining raqamga tenglarini toping
let obj2={
    id:0,
    name:"WebBrain"
}

for(let i in obj2){
    // typeof obj2[i] == 'number'?console.log(i):console.log();
}

// chiqish
// id
// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
let obj3={
    id:1,
    name:"WebBrain",
    offline:true,
    online:true,
    individual:false
}
// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }

for(let i in obj3){
    // if(typeof obj3[i] == 'boolean')  console.log(`${i} : ${obj3[i]}`);
}

// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
let obj4={
    id:1,
    name:"WebBrain",
    offline:true,
    online:true,
    individual:false
}
// function Search(obj,str){}
// Search(obj,'WebBrain')
// chiqish
//     name:"WebBrain"

function Search(obj , str){
    for(let i in obj){
        if(typeof obj[i] == 'string' && str == obj[i]){
            console.log(`${i} : ${obj3[i]}`);
        } 
    }
}

// Search(obj4 , "WebBrain")

// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
let obj5={
  id:1,
  name:"atirgul",
  color:"qizil",
  count:10,
  price:"10$"
}
// searchValue(obj,'i') => atirgul,qizil

function searchString(obj , str){
    for(let i in obj){
        if(typeof obj[i] == 'string' && obj[i].includes(str)){
            console.log(obj[i]);
        }
    }
}
// searchString(obj5,"i");

// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
let person = {
    id: 1,
    name: 'Odil',
    age:78,
    child: {
        id: 1,
        name: 'Ali',
        age:48,
        child: {
            id: 1,
            name: 'Umar',
            age:20
        }
    }
}

let sum = 0;
while(person){
    sum += person.age;
    person = person.child;
}
// console.log(sum);



// chiqish
// 146



//! No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
// let user7 = {
//     id: 1,
//     name: 'Odil',
//     age: 78,
//     children: [
//         {
//             id: 1,
//             name: 'Umar',
//             age: 54,
//             children: [
//                 { id: 1, name: 'Asmo', age: 34 },
//                 { id: 2, name: 'Osim', age: 30 },
//                 { id: 3, name: 'Xattob', age: 25 },
//             ]
//         },
//         { id: 2, name: 'Umar', age: 54 },
//         { id: 3, name: 'Umar', age: 54 },
//     ]
// }


// ! No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ]
// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
let obj9={
    id:1,
    name:'Usmon',
    job:'developer'
}

let objClone = structuredClone(obj9)

// console.log(objClone);

// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
// add(obj,key,value){}
// add(obj,'address','toshkent')

let obj10 = {
    name:"Jasurbek"
}

let Add = (obj = {} , key , value) => {
    obj[key] = value;
    console.log(obj);
}

// Add(obj10 , 'age' , 18)

// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
let obj11 = {
    id: 1,
    name: 'Usmon',
    job: 'developer',
    practice:1
}

let check = (obj) => {
    obj.practice >= 1 ? console.log('Qabul qilindi!') : console.log('Ming bor uzur!');
}
// check(obj11);

// chiqish
// qabul qilindi
// No12
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
let obj12 = {
    id: 1,
    name: 'Usmon',
    job: 'developer',
    practice:1,
    talaba:true
}

let checkAndAdd = (obj) => {
    if(obj.talaba === true) obj.kridit = true;
    else obj.kridit = 'olinmadi'
    console.log(obj);
}
// checkAndAdd(obj12)

// chiqish
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true,
//     kiridit:true
// }
// No13
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
let obj13 = {
    id: 1,
    name: 'Usmon',
    age:34,
    year:1990
}

let checkYear = (obj) => {
    let date = new Date();
    let year = date.getFullYear();
    if(obj.age === (year - obj.year)) console.log("Tog'ri malumot kirittingiz!");
    else  console.log("Notog'ri malumot kirittingiz!");
}
// checkYear(obj13)

// chiqish
// 'xato malumot kiritdingiz'
//! No14
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
// arr=['Andijon','Namangan','Qarshi','toshkent']

//! No15
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'}
//     {id:2,name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'},
// ]
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz

//! No16
// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
let obj16={
  id:1,
  title:'the best',
  address:{street:"Farobiy",number:'34'}
}

let checkType = (obj) => {
    let a;
    for (const key in obj) {
        if(typeof obj[key] == 'object') {
            a = true
        }
        else {
            a = false
        }
    }
    console.log(a);
}
// checkType(obj16)

// chiqish
// true