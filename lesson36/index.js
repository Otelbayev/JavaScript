//! 36 - dars | DOM - 4 | Events | YouTube Link
// 	—  Classes with addeEventListener
function onclick() {
  console.log("click");
}

function onmouseenter() {
  console.log("onmouseenter");
}

function onmouseout() {
  console.log("onmousout");
}

let button = document.getElementById("button");

// button.addEventListener("click", onclick);
// button.addEventListener("mouseenter", onmouseenter);
// button.addEventListener("mouseout", onmousout);

class Events {
  handleEvent(event) {
    switch (event.type) {
      case "click":
        onclick();
        break;
      case "mouseenter":
        onmouseenter();
      case "mouseout":
        onmouseout();
      default:
        console.log("none");
        break;
    }
  }
}

let ev = new Events();

button.addEventListener("click", ev);
button.addEventListener("mouseenter", ev);
button.addEventListener("mouseout", ev);

// 	—  Event Bubbling

// function grand(e) {
//   console.log("gran");
//   //   e.stopPropagation();
// }

// function grand(e) {
//   console.log("gr");
// }

// function parent(e) {
//   console.log("parent");
//   //   e.stopPropagation();
// }

// function parent(e) {
//   console.log("pr");
//   //   e.stopPropagation();
// }

// function child(e) {
//   e.stopPropagation();
//   //   e.stopImmediatePropagation();
//   console.log("child");
// }

// 	—  Events Delegation
// 	—  Table selection mini project(cha) and task
let table = document.querySelector("table");

let target,
  a = false;
table.addEventListener("click", (e) => {
  //   if (target) target.classList.toggle("red");
  target = e.target;
  //   target.classList.toggle("red");
  target.classList.toggle("red");
});

//!preventDefault() => default actionnini toxtatib qoyadi , returnga ochshab, masalan: form submit bolganda refresh bolish ini oldini oladi.

let grand = document.querySelector(".grand");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

grand.addEventListener("click", (e) => {
  console.log("grand");
});

parent.addEventListener("click", (e) => {
  console.log("parent");
});

child.addEventListener("click", (e) => {
  console.log("child");
  e.stopImmediatePropagation();
});

child.addEventListener("click", (e) => {
  console.log("child");
});

child.addEventListener("click", (e) => {
  console.log("child");
});
