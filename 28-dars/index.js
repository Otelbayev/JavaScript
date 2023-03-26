
//! Sibling -> ozi bilan bir levelda turuvchi content
// let ul = document.getElementsByTagName('ul')[0]

// console.log(ul.children); //!-> ul ning ichidagi child elementlarini olib beradi
 
// console.log(ul.childNodes);//!-> ul ichidagi hama elementlrni probellarninyam text sidfatida oladi

// console.log(ul.parentElement); //! -> Parent elemenetni korsatadi

// console.log(ul.parentNode);//! -> Parent elemenetni korsatadi

// console.log(ul.firstElementChild);//! -> birinchi elenentni korsatadi

// console.log(ul.firstChild);//! -> birinchi kelgan narsani korsatadi probellerni text deb qabul qiladi

// console.log(ul.lastChild);//! -> oxirgi kelgan narsani korsatadi probellerni text deb qabul qiladi

// console.log(ul.lastElementChild);//! -> oxirgi elenentni korsatadi

// console.log(ul.lastElementChild.previousElementSibling); //!-> ozi bilan bir levelda turgan elementni bitta oldingisini olb beradi

// console.log(ul.firstElementChild.nextElementSibling); //!zi bilan bir levelda turgan elementni bitta keyingisini olb beradi

//todo Selectors

// let body = document.getElementsByTagName('body')//! -> tag name orqali chaqirish

// let parent = document.getElementsByClassName('parent') //! -> class name orqali chaqirish barchasini html collection da chaqiradi

// let id = document.getElementById('id') //! -> id orqali chaqirish faqat brinchi korgan bitta malumotni oladi

//! unversal chaqirish
// let qw1 = document.querySelector('.class')
// let qw2 = document.querySelector('#id')
// let qw3 = document.querySelector('tag')

// let qa = document.querySelectorAll('.parent') //!-> barcha parentlarni qaytaradi array korinishida


//! DOM node classes

// let li = document.querySelector('li')
// li.innerHTML = '<h1>5</h1>' 
// console.log(li.innerHTML); //! -> html code yozsa oqiydi
// console.log(li.innerText); //! faqat qiymatini chiqaradi html oqimaydi
// console.log(li.textContent); //! -> innerText bilan bir xil

//!hidden

// li.hidden = false //! malumot korinadi
// li.hidden = true //! malumot korinmaydi

//! document === window.document

let h1 = document.querySelector('h1')

// h1.setAttribute('class' , "jasur")
// h1.setAttribute('id' , "none")
// console.log(h1.getAttribute('class'));

// h1.removeAttribute('class')
// h1.removeAttribute('id')


function toggle() {
    button.classList.toggle('red')
}

h1.style.cssText = `
    color:blue;
    background:red;
`