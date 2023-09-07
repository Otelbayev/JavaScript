//! 51 - dars | SessionStorage | YouTube Link
// 	— LocaleStorage nima va qay vaziyatlarda ishlatiladi?
// 	— Malumotlarni SessionStorage'dan olish / unga qo'shish
// 	—  Malumotlar o'chirish va clear qilish
// 	—  SessionStorage'ni loop qilish

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => sessionStorage.setItem("data", JSON.stringify(res)));

// const getData = () => {
//   JSON.parse(sessionStorage.getItem("data")).forEach((element) => {
//     let a = document.createElement("h3");
//     a.innerHTML = `${element.id} - ${element.name} <button onclick="del(${element.id})">delete</button>`;
//     div.append(a);
//   });
// };

// getData();
// const del = (e) => {
//   data = JSON.parse(sessionStorage.getItem("data"));
//   let res = data.filter((v) => v.id !== e);
//   // JSON.stringify(sessionStorage.setItem("data", res));
//   getData();
// };

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => sessionStorage.setItem("data", JSON.stringify(res)));

const getData = () => {
  let data = JSON.parse(sessionStorage.getItem("data"));
  data.forEach((e) => {
    let a = document.createElement("div");
    a.innerHTML = `${e.id} - ${e.name} <button onclick="del(${e.id})">delete</button>`;
    div.append(a);
  });
};

getData();

const del = (id) => {
  let res = JSON.parse(sessionStorage.getItem("data")).filter(
    (v) => v.id !== id
  );
  sessionStorage.setItem("data", JSON.stringify(res));
  div.innerHTML = "";
  getData();
};
