let parent = document.querySelector('.parent')

//!hasAttribute(name)
// console.log(parent.hasAttribute('class'));//true

//!setAttribute(name , value)
parent.setAttribute('id' , 'none')

//!getAttribute(name)
// console.log(parent.getAttribute('id'));//none

//!removeAttribute(name)
parent.removeAttribute('id')

//!Create element

let div = document.createElement('div')
let text = document.createTextNode('Hey DOM')

div.prepend(text)

parent.append(div)

//! before va after tag ga sibling qilib qoshadi boshidan va oziridan
//! append va preappend tag ichidan qoshadi

//!clone

let d = parent.cloneNode(true)

// console.log(d);


//!style


parent.style.cssText = `
    background:red;
    color:white;
`

//! Geometry

// console.log(parent.offsetTop) //! ekran topidan contentgacha masofa
// console.log(parent.offsetLeft);//!chap ekrandan contentgacha masofa
// console.log(parent.offsetWidth);//!border bilan qoshib width chiqaradi
// console.log(parent.clientWidth);//!borderni hisoblamay width chiqaradi

//! Scroll

// console.log(parent.clientHeight); //!parent uzunligi
// console.log(parent.scrollHeight); //!umumiy scroll uzunlik

function get() {
    if(parent.clientHeight === parent.scrollHeight){
        parent.style.height = `150px`
    } else {
        parent.style.height = `${parent.scrollHeight}px`
    }
}
//! eng oxiriga tushiradi
function s(){
    parent.scrollTo({top:50 , behavior:"smooth"})
}

//! 10px dan tusirib boradi
// function s(){
//     parent.scrollBy(0 , 10)
// }

//! 50px ga obkeb qoyadi
// function s(){
//     parent.scrollTo(0 , 50)
// }

//! barcha parametrlarini olib keladi
console.log(parent.getBoundingClientRect());

console.log(parent.clientWidth);
console.log(parent.offsetWidth);