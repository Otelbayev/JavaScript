// let data = document.querySelectorAll('h1')

// let range = new Range()

// range.setStart(data[0].firstChild , 0);
// range.setEnd(data[0].firstChild , 6);

// window.getSelection().addRange(range)

function action() {
  //!delate selected word
  // range.deleteContents();
  //!select bolgan qismni ochirib boshqa joyga olsh
  // let selected = range.extractContents()
  // id.innerHTML += selected.textContent
  //! isert qiladi
  let span = document.createElement("em");
  // span.innerHTML = 'new Value'
  // range.insertNode(span)
  //!tagga orabberasdi
  // range.surroundContents(span)
}

// let input = document.getElementById('input')
// let p = document.getElementById("p")

// let span = document.createElement("span");
// let span1 = document.createElement("span");
// let text = p.innerText;

// input.onkeypress = (e) => {
//     p.innerText = text;
//     range.setStart(p.firstChild , 0)
//     range.setEnd(p.firstChild , e.target.value.length)
//     if(text[e.target.value.length] === e.key){
//         span.style.color = "green"
//         range.surroundContents(span)
//     } else {
//         span1.style.color = "red"
//         range.surroundContents(span1)
//     }
// }

// let selection = getSelection()

// console.log(selection);

// document.onselectionchange = () => {
// console.log(selection.getRangeAt(0).cloneContents());
// }

// let user = {
//     name:'webbr',
//     surname:'IT center',
//     getName(){
//         console.log(this.name , this.surname);
//     }
// }

// user.getName()

// let m = user

// user = null

// m.getName()

// let title = 'name';

// let obj = {
//     [title]:'Webbrain academy',
//     name:'webbr',
//     title:'IT',
//     title,
// }

// // console.log(obj[title]);//!Webbrain academy
// // console.log(obj.title);//! name
// // console.log(obj.name);//!Webbrain academy

// // console.log(null || 'q1');
// // console.log(null && 'q1');
// // console.log(null ?? 'q1');

// console.log('started...');

// setTimeout(() => {
//     console.log('set-1');
// },1000)

// for (let i = 0; i < 10000; i++) {
//     console.log(i);
// }

// setTimeout(() => {
//     console.log('set-2');
// } , 0)

// Promise.resolve(() => {
//     console.log('promise');
// }).then((res) => res())

// console.log('finished');

//stared
//for loop
//finished
//promise
//set-1
//set-2

let promise = new Promise((resolve, reject) => {
  resolve("promise");
});

// promise.then((res) => console.log(res))

async function get() {
  let res = await promise;
  console.log(res);
  console.log("finish");
}

// get()

function getDate() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((res) => console.log(res));
}

function getCached(func) {
  let map = new Map();
  return function (x) {
    if (map.has(x)) {
      console.log(map.get(x));
    } else {
      let res = func(x);
      map.set(x, res);
    }
  };
}

// getDate = getCached(getDate)

function* generator() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

let gen = generator();

// console.log(gen.next().value);
// console.log(gen.next().value);

let ar = Array.from("webbrain", (e) => {
  return e + e;
});

// console.log(ar);

let obj = Object.fromEntries([
  ["name", "none"],
  ["age", 15],
]);

// console.log(obj);

let list = [
  { id: 1, title: "CEO" },
  { id: 2, title: "CTO" },
  { id: 3, title: "CEO" },
  { id: 4, title: "CTO" },
];

let result = {};
// let titleArrya = []

let set = new Set();
list.forEach((e) => {
  // if(!titleArrya.includes(e.title)){
  //     titleArrya.push(e.title)
  // }
  set.add(e.title);
});

set.forEach((e) => {
  let a = e.toLowerCase();
  result[a] = [];
  list.forEach((v) => {
    if (e === v.title) result[a].push(v);
  });
});

// titleArrya.forEach((e) => {
//     let a = e.toLowerCase();
//     result[a] = []
//     list.forEach((v) => {
//         if(e == v.title){
//             result[a].push(v)
//         }
//     })
// })

// console.log(result);

// result = {
//     cto:[
//         {id:2 , title:'CTO'},
//         {id:4 , title:'CTO'}
//     ],
//     ceo:[
//         {id:1 , title:"CEO"},
//         {id:3 , title:"CEO"},
//     ]
// }

console.log(list);

const update = (res) => {
  let res1 = list.map((e) => {
    if (e.id === res.id) {
      e.title = res.title;
    }
  });
  return res1;
};

update({ id: 1, title: "jasurbek" });

console.log(list);
