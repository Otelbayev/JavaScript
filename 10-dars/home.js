//! HomeWork
//! String

//!1 
// brilgan stringds nechta katta va kichik harflar botligini toping
let countStr = (str) => {
    let count1 = 0 , count2 = 0 , count3 = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() === str[i].toLowerCase()) count1++;
        else if(str[i] === str[i].toUpperCase()) count2++;
        else count3++;
    }
    console.log(`${count1} ta belgi , ${count2} ta katta harf , ${count3} ta kichkina harf`);
}
// countStr('JasurbekO\'telbayev')
//!2
//stringdagi @ ni a hatfiga o'zgartirish

let replace = (str) => {
    
}
replace('j@subek')

//!3
//krtma ket kelgan harflarni ochitrish va bittasini qoldirish

let doubleDel = (str) => {
    let s = ""
    for(let i = 0; i < str.length; i++) {
        if (str[i] == str[i+1])continue;
        else s += str[i];
    }
    console.log(s);
}
// doubleDel('jasssssurrbeeeeekkk')

//!4
//string ichidagi raqamlarni toping

let searchNum = (str) => {
    for(let i = 0; i < str.length; i++){
        if(Number(str[i])) console.log(str[i]);
    }
}
// searchNum('j1a2s3u4r5b6e7k8')

//!5
//string berilgan har bir harfni ikki marta takrorlab qiymatini vchiqaring

let doubleStr = (str) => {
    let s = "";
    for (let i = 0; i < str.length; i++) {
        s += str[i] + str[i]
    }
    console.log(s);
}
// doubleStr('Jasurbek')

//!6
//Berilgan sozni palindrom yoki palindrom emasligini tekshiring non kiyik

let palindrom = (str) => {
    let a = ""
    for(let i = str.length - 1; i >= 0; i--) {
        a += str[i];
    }
    a === str ? console.log(true) : console.log(false);
}
// palindrom('non')

//!7
// ikki stringni solishtiring length va harflari bir hilliginu ms: web = bwe
//!8
//stringdagi harflarni nechtadan qatnashganligini chiqaring
//!9
//stringni ziplash webbrainn = we2brai2n

//! Objects
//!1
//obj keylaini chiqarign
//!2
// agelar yigindisini toping

let obj = {
    tite:'webbrain',
    age: 2,
    child:{
        age:4,
        child:{
            age:3
        }
    }
}

//!3
//boolean typedagi malumotlarni chiqwaring keylari bilan birga
let obj1 = {
    id:1,
    name:'webbrain',
    offline:true,
    online:true,
    indidual:false
}

//! Arrays

//!1
// dublicatelarni remove qilish
let num = [2 , 3 , 5 , 2 , 3 , 5 , 4 , 8 , 6 , 3];

//!2
//taqqoslang

let num1 = [1 , 2 , 3]
let num2 = [1 , 2 , 3]

//!3 
// arraydagi ikki honali sonlarni chiqaring
let array = [1 , 23 , 56 , -852];

//!homework

// [2 , 3 , 2 , 4 , 5 , 2 , 3]
// [2 , 3 , 2 , 1 , 2 , 3]
// [2 , 2 , 1 , 2]
// [1 , 2]
// [1]