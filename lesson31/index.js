// title.addEventListener('contextmenu' , () => {
//     alert('qwerty')
// })

title.oncopy = () => {
    alert('copy is not allowed!')
    return false
}
//!onchange -> inputdan tadhqariga chiqqanda malumotni oqiydi
//!onkeypress -> yozilgan zahoti oqiydi 1 stap orqada yuradi!
//!onkeyup -> yozilgan zahoti oqiydi
//! ctrlKey , shiftKey -> true or false qaytaradi

let span = document.createElement('span')
const change = (event) => {
    console.log(event.target.value);
    nm.append(span)
    span.innerHTML = event.target.value   
   console.log(event.key);
}

let div = document.querySelector('.div')

div.addEventListener('mousemove' , (e) => {
    if(e.ctrlKey && e.altKey){
        div.style.backgroundColor = `rgb(${e.x} , ${e.y} , ${e.y})`
    }
    console.log(e.type);
})

let box = document.querySelector('.box')

box.addEventListener('scroll' , (e) => {
    if(e.target.scrollTop + e.target.clientHeight + 50 > e.target.scrollHeight){
        box.textContent += box.textContent
    }
})

let navbar = document.querySelector('.navbar')

window.addEventListener('scroll' , (e) => {
    console.log(window.scrollY)
    if(window.scrollY > 15){
        navbar.style.boxShadow = "3px 1px 20px black"
    } else {
        navbar.style.boxShadow = ""
    }
})