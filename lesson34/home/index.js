let elements = document.getElementsByTagName("*");
Array.from(elements).forEach((element) => {
  element.style.cssText = `
     margin:0;
     padding:0;
     box-sizing:border-box;
    `;
});

let root = document.getElementById("root");

root.style.cssText = `
   display:flex;
   align-items:center;
   justify-content:center;
`;

let container = document.createElement("div");

container.style.cssText = `
   border:1px solid black;
   width:500px;
   height:500px;
`;

root.append(container);

let colors = [
  "red",
  "blue",
  "coral",
  "orange",
  "cyan",
  "purple",
  "brown",
  "gray",
  "green",
  "pink",
];

let arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

let checked = 101;

const recursion = (array) => {
  array.map((e) => {
    let btn = document.createElement("button");
    btn.style.cssText = `
      width:50px;
      height:50px;
      background:black;
      color:#fff;
      font-size:20px;
    `;
    if (!(e % checked)) {
      btn.innerText = "*";
    } else {
      btn.innerText = e;
    }
    container.append(btn);
    btn.addEventListener("click", () => {
      container.innerText = "";
      checked = e;
      recursion(arr);
    });
  });
};

recursion(arr);
