//! 34 - dars | DOM - 2 | Manipulation of DOM Elements | YouTube Link
// 	—  Browser Load
// 	—  Attribute manipulation - hasAttribute / getAttribute / setAttribute / removeAttribute
// 	—  Creating element
// 	—  Node insertion
// 	—  InsertAdjasment
// 	—  cloneNode
// 	—  classList - add / remove / toggle / containes
// 	—  styling the node va cssText
// 	—  Geometry - offsetParent / offsetLeft
// 	—  Scroll - scroll / scrollBy / scrollTo
// 	—  Coordinate - getBoundingClientRect()

let title = document.getElementById("title");

//!Attribute manipulation

//get
console.log(title.getAttribute("id")); //title
//set
title.setAttribute("class", "border");
//remove
title.removeAttribute("class");
//has
title.hasAttribute("name"); //false

//!Creating element

let div = document.createElement("div");
let txt = document.createTextNode("Jasurbek");

div.setAttribute("class", "border");

div.prepend(txt);

title.after(div);

// !append -> element ichida , boshida
// !preappend -> element ichida , oxirida
// !befor -> elementdan oldin
// !after -> elementdan keyin

// title.remove();

//!colne node

let a = title.cloneNode(true); // titledagi brcha malumotni a ga kochirib beradi

//!Style element

title.style.backgroundColor = "red";
title.style.fontSize = "20px";

title.style.cssText = `
   color:#fff;
   display:inline-block;
   background:red;
   padding:50px;
`;

//!Geometry

let box = document.querySelector(".box");

console.log(box.offsetLeft); //-> chapdan bordergacha masofa
console.log(box.offsetTop); //-> borderdan yuqorigacha masofa
console.log(box.offsetWidth); //-> border bilan birgalikda uzunligi
console.log(box.clientWidth); //-> content uzunligi padding bilan birga
console.log(box.offsetHeight); //-> border bilan birgalikda balandligi
console.log(box.clientHeight); //-> content balandligi padding bilan birga

//!Scroll
console.log(box.scrollHeight); // -> scroll qilinadigan content umumiy uzunligi

const more = () => {
  box.style.height = `${box.scrollHeight}px`;
};

const less = () => {
  box.style.height = `200px`;
};

const toggle = () => {
  if (box.offsetHeight === box.scrollHeight) {
    box.style.height = "200px";
    btn.innerHTML = "show more";
  } else {
    btn.innerHTML = "show less";
    box.style.height = `${box.scrollHeight}px`;
  }
};

//!classList

title.classList.add("jasur"); //-> class qoshadi
title.classList.remove("jasur"); // -> class ochiradi
title.classList.toggle("jasur"); // -> bor bosa ocjiradi , yoq bolsa qoshadi
console.log(title.classList.contains("jasur")); // tekshiradi bor yoki yoqligiga

//! window scroll

const scrolTo = () => {
  //!scroll(x,y) -> kordianta boyicha
  //box.scroll(0, box.scrollHeight);
  //!scrollBy(x , y) => har bosilganda ortadi
  //box.scrollBy(0, 5);
  //! scrolTo -> fixed qiymatga oborib qoyadi
  //box.scrollTo(0, 50);
};

// console.log(window.innerWidth);
// console.log(window.innerHeight);

//!getBoundingClientRect()

console.log(title.getBoundingClientRect()); //!titlening
