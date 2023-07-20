function func() {
  console.log("buton");
}

//! onmousedown -> mishka bosilganda
//! onmouseenter , mouseover -> tashqaridan kirgan paytda (hver)
//! onmouseleave , onmouseout -> content da tashqariga chiqqan paytda
//! onmousemove -> content ustida harakatlanganda
//! onmouseup -> mishka bosib qoyib yuborilganda
//!contextmenu -> ong tomoni bosilganda
//!dblclick -> double click

const move = (e) => {
  console.log(e);
};

//!event.target === this in html

let button = document.getElementById("button");

button.onclick = () => {
  console.log("hello");
};

button.addEventListener("click", () => {
  console.log("none");
});
