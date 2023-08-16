// let data = document.getElementById("data");

// let range = new Range();

// range.setStart(data.firstChild, 0);
// range.setEnd(data.firstChild, 5);

// window.getSelection().addRange(range);

// let h2 = document.querySelectorAll("#id");

// let r = new Range();

// r.setStart(h2[0].firstChild, 0);
// r.setEnd(h2[0].firstChild, 6);

// window.getSelection().addRange(r);

//!delete
// button.onclick = () => {
//   r.deleteContents();
// };

//!delete and paste selected
// button.onclick = () => {
//   let selected = r.extractContents();
//   txt.innerHTML += selected.textContent;
// };

//!insert Node
// button.onclick = () => {
//   let div = document.createElement("div");
//   div.innerText = "jasurbek 2004 ";
//   r.insertNode(div);
// };

//!selected valueni orab beradi

// button.onclick = () => {
//   let em = document.createElement("em");
//   r.surroundContents(em);
// };

let p = document.getElementById("p");
let range = new Range();
let txt = p.innerText;

inp.oninput = ({ target: { value } }) => {
  let em = document.createElement("em");
  em.style.color = "red";
  p.innerHTML = txt;
  range.setStart(p.firstChild, 0);
  range.setEnd(p.firstChild, value.length);
  range.surroundContents(em);
};

let selected = getSelection();

document.onselectionchange = (e) => {
  console.log(selected.getRangeAt(0).cloneContents());
};
