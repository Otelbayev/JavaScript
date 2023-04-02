//!form
console.log(document.forms.form1);
console.log(document.forms.form1.elements);
console.log(document.forms.form1.elements.login);

//!select
// console.log(select);
// console.log(select.options[2]);
// console.log(select.value = 'RU');
// console.log(select.selectedIndex = 2);

//!input

//!onblur -> inputga yozib bolib tashqariga chiqqan paytda ishlaydi 
login.onblur = (e) => {
    if(!e.target.value.includes('@')){
        error.innerHTML = "error"
        error.style.color = "red"
    }
}

//!onfocus qayta input ichiga kirganda validationni ochiradi
login.onfocus = (e) => {
    error.innerHTML = null
}

//!submit

form1.onsubmit = (e) => {
    // e.preventDefault()
    form1.action = `https://jsonplaceholder.typicode.com/comments/${select.value}`
    console.log(select.value);
}