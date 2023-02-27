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
    let res1 = str.split("") , index;
    for(i in res1){
        if(res1[i] === '@') index = i;
    }
    let res = res1.fill('a' , Number(index) , Number(index) + 1);
    console.log(res.join(""));
}
// replace('j@subek')

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
// ikki stringni solishtiring length va harflari bir xilligini ms: web = bwe

let epamExe = (a , b) => {
    let x = 0;
    for(let i = 0; i < a.length; i++){
        if(a.length === b.length && b.includes(a[i]) && a.includes(b[i])) x++
        else x--;
    }
    x === a.length ? console.log(true) : console.log(false);
}
// epamExe('web' , 'ebw')
//!8
//stringdagi harflarni nechtadan qatnashganligini chiqaring

let str = (str) => {
    let obj = {};
    for(let i of str) {
        if(i in obj) obj[i]++;
        else obj[i] = 1
    }
    console.log(obj);
}
// str('jasurbekk')

//!9
//stringni ziplash webbrainn = we2brai2n

let zip = (str) => {
    let count = 1 , s = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i+1]){
            count++;
            continue
        }
        else {
            count === 1 ? s += str[i] : s += str[i] + count
        }
        count = 1
    }
    console.log(s);
}
// zip('jjasssurrrrr')

//! Objects
//!1
//obj keylaini chiqarign
let obj0 = {
    name:'jasurbek',
    sname: 'otelbayev',
    age: 18 
}
for(i in obj0) {
    // console.log(i)
}

//!2
// agelar yigindisini toping

let obj = {
    tite:'webbrain',
    age: 2,
    child:{
        age:4,
        child:{
            age:4,
        }
    }
}

let sum = 0;
for(key in obj) {
    sum += obj.age;
    obj = obj.child
}
// console.log(sum);

//!3
//boolean typedagi malumotlarni chiqwaring keylari bilan birga
let obj1 = {
    id:1,
    name:'webbrain',
    offline:true,
    online:true,
    indidual:false
}

for(i in obj1){
    if(typeof obj1[i] === 'boolean') {
        // console.log(i , obj1[i]);
    }
}

//! Arrays

//!1
// dublicatelarni remove qilish

let num = [2, 3, 5, 2, 3, 5, 4, 8, 6, 3];
function removeDuplicates(arr) {
    let emptyArr = [];
    for(let i = 0; i < arr.length; i++){
        if(emptyArr.indexOf(arr[i]) === -1){
            emptyArr.push(arr[i])
        }
    }
    console.log(emptyArr);
}

// removeDuplicates(num)

//!2
//taqqoslang

let num1 = [1 , 2 , 3]
let num2 = [1 , 2 , 3]

let count = 0
for(i in num1) {
    if(num.length === num.length && num1[i] == num2[i]) count++
    else count--;
}
// count === num1.length ? console.log('bir biriga teng') : console.log('teng emas');

//!3 
// arraydagi ikki honali sonlarni chiqaring
let array = [1 , 23 , 56 , -25 , -852];

for(let i of array) {
    if(i >=10 && i <= 99 || i <= -10 && i >= -99){
        // console.log(i);
    }
}

//!homework

// [2 , 3 , 2 , 4 , 5 , 2 , 3]
// [2 , 3 , 2 , 1 , 2 , 3]
// [2 , 2 , 1 , 2]
// [1 , 2]
// [1]

array = [1,2,3,4,5];

while(array.length > 1){
    array = array.sort((a , b) => b - a)
    if(!(array[0] - array[1])){
        array.splice(0 , 2);
        array.push(res[0] - res[1])
    } else {
        array.splice(0 , 2);
    }
    console.log(array);
}


