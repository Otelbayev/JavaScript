//! scope and closuer

// console.log(a); //! can not acces befor initialization
// console.log(b); //! undefind

// let a = 1
// var b = 2

// {
//     let c = 'none'
//     var d = "none"
// }

// console.log(c);//! can not acces befor initialization
// console.log(d); //! none

//! Lexical Envoirment
// locla dan malummotni qidiradi topilmasa global memorylarga murojat qiladi 
// let name = "jasurbek"

// function getName() {
//     let b = 'none'
//     console.log(name);
//     return function(){
//         console.log(name , b);
//     }
// }

// getName()

//! Clousure

let name = "jasurbejk"

function getname() {
    console.log(name); 
}

//! function scope tashqarisidan yoki inner function outor functionni varablesini ishlatishiga closuer deyiladi

//! functionni ichida ochilgan varablening yaxshi tarafi funtion oz ishini toxtatgandan keyin garbagr colloection ga tushadi memorydan ochib ketadi