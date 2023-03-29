

//!mouse events

// function move(e){
//     //! e = htmldagi event
//     console.log('x' , e.x , "y" , e.y);
// }

// function m(n){
//     console.log(n); //!event.target
// }

// let user = [
//     {id:1 , name:'jasurbek'},
//     {id:2 , name:'jasurbek'},
//     {id:3 , name:'jasurbek'},
//     {id:4 , name:'jasurbek'},
//     {id:5 , name:'jasurbek'},
//     {id:6 , name:'jasurbek'},
// ]

// function ondelate(event) {
//     user = user.filter((e) => e.id !== event)
//     conainer.innerHTML = null
//     readData()
// }

// function readData() {
//     user.map((e) => {
//     let div = document.createElement('div')
//     let btn = document.createElement('button')
//     btn.innerHTML = "delate"
//     div.innerHTML = `<h1>${e.id} - ${e.name}</h1>`
//     div.append(btn)
//     btn.addEventListener('click' , () => ondelate(e.id))
//     conainer.append(div)

// })
// }

// readData()

//!contextmenu
// mishkani ong tomoni bosilganda
// button.addEventListener('contextmenu' , () => {
//     alert('contex menu')
// })

//!dblclick -> ikki marta bosilganda
//!mosedown -> mishka bosilganda
//!mouseup -> mishka bosib qoyib yuborilganda
//!moseenter moseover -> mishka ustiga kirib tashqariga chiqarganda
//!mousemove -> ustida yurgizilganda
//!moseout mouseleave -> usuidan tashqariga chiqqanda 

//! bosilganda mousedown qoyib yuborilganda moudeup keyin click

// let g = document.getElementById('tort')

// g.addEventListener('mouseenter' ,() => {
//     console.log('mousedown');
// })

let button = document.getElementById('button')

function mousedown(){
    console.log('mousedown...');
}

function mouseup(){
    console.log('mouseup...');
}

function onclick(){
    console.log('click...');
}

class Event {
    handleEvent(event){
        switch (event.type) {
            case 'click':
                onclick()
                break;
            case 'mousedown' :
                mousedown()
                break;
            case 'mouseup' :
                mouseup()
                break;
            default:
                break;
        }
    }
}

const ev = new Event()

button.addEventListener('click' , ev)
button.addEventListener('mousedown' , ev)
button.addEventListener('mouseup' , ev)

//!Bubling

function grand(){
    alert('grand...')
}
function conainer(){
    alert('conainer...')
}
function child(event){
    // event.stopPropogation() //!child yurmaydi
    event.stopImmediatePropagation()
 //!childdan boshqa parentlarni yurmaydi
    alert('child...')
}

//!event delegation

let table = document.querySelector('#table')

let target;

table.onclick = function(event) {
    if(target){
        target.classList.toggle('red')
    } 
    target = event.target;
    target.classList.toggle('red')
}