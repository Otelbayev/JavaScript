//! 37 - dars | DOM - 5 | UI Events | YouTube Link
// 	—  UI Events in deep
// 	—  Keyboard Events
// 	—  Scroll Events
// 	—  Navbar scroll mini project
// 	—  Load more data mini project

//!keyboard events

title.oncopy = () => {
  console.log("none");
  return false;
};

// const change = (event) => {
//   //   h2.innerHTML = e.target.value;
//   //   console.log(e.target.value);
// };

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  if (e.ctrlKey) {
    box.style.backgroundColor = `rgb(${e.y} , ${e.y} , ${e.x})`;
  }
});

//!e.key , e.type , e.code

const change = (event) => {
  console.log(event.altKey, event.code, event.key, event.type);
};

//!infinity scroll

box.addEventListener(
  "scroll",
  ({ target: { clientHeight, scrollHeight, scrollTop } }) => {
    if (clientHeight + scrollTop + 500 > scrollHeight) {
      box.innerHTML += box.innerHTML;
    }
  }
);

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (this.scrollY > nav.clientHeight) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});
