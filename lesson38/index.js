//! 38 - dars | Form | YouTube Link
// 	—  Form?
// 	—  Elements, Shorten Elements
// 	—  Input, Select
// 	—  Submit

//! document.forms; -> html collection all forms

let form = document.forms.form;

// form.elements -> array

console.log(form.elements.loginName);
console.log(form.elements.loginName.value);

//!select
console.log(form.select.value);
console.log(form.select.options[2]);

//!onblur -> inputdan tashqariga chiqqanda
//!onfocus -> inputni ichita turgan paytda

error.style.color = "red";
