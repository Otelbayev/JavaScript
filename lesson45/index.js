//! 45 - dars | Fetch - 1 | Basic | YouTube  Link
// 	—  Fetch nima va uning terminlari haqida.
// 	—  Status codes
// 	—  Methods
// 	—  Malumotni backenddan o'chirib yuborish.
// 	—  fetch with promise.
// 	—  fetch with async await

// link , url, api, endpoint, silka
// then, promise, async await, try catch

//!fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err);
//   });

//!promise
// let promise = fetch("https://jsonplaceholder.typicode.com/users");

// promise.then((res) => res.json()).then((res) => console.log(res));

//!Async await

// const getData = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
//   console.log(data);
// };

const getData = () => {
  dataList.innerText = "loading...";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.map((e) => {
        dataList.innerText = "";
        let div = document.createElement("div");
        div.innerHTML = e.name;
        dataList.after(div);
        let btn = document.createElement("button");
        div.after(btn);
        btn.innerHTML = "selected";
        btn.onclick = () => {
          fetch(`https://jsonplaceholder.typicode.com/users/${e.id}`)
            .then((res) => res.json())
            .then((res) => (selected.innerHTML += res?.name));
        };
      });
    });
};
