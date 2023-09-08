//! 54 - dars | indexedDB - 1 | Offline applications | YouTube Link
// 	—  indexedDB nima va qachon ishlatiladi?
// 	—  offline database ochish.
// 	—  Request events haqida.
// 	—  DB versiyasini yangilash.
// 	—  ObjectStore yasash haqida.
// 	—  Transactions'lar nima?
// 	—  Bankdan pul o'tkazmalarni indexedDB orqali amalaga oshirish tartiblari.
// 	—  C reate DBStore.
// 	—  R ead DBStore.
// 	—  U pdate DBStore.
// 	—  D elete DBStore.

// let request = window.indexedDB.open(databaseName , version);
// let request = window.indexedDB.open("jasurbek", 2);

// var db = null;

// request.onsuccess = (e) => {
//   //   db = e.target.result;
//   db = request.result;
//   console.log("success");
// };

// request.onerror = () => {
//   console.log("error");
// };

// request.onupgradeneeded = () => {
//   console.log("onupgradeneeded");
//   db = request.result;
//   if (!db.objectStoreNames.contains("frontend")) {
//     let store = db.createObjectStore("frontend", { keyPath: "id" });
//     store.onsuccess = (e) => {
//       console.log("succesfully store created");
//     };
//     store.onerror = (e) => {
//       console.log("store error");
//     };
//   }
// };

// let id = 1;
// created.onclick = () => {
//   let user = {
//     id: id++,
//     name: n.value,
//     surname: surname.value,
//     grade: age.value,
//   };
//   let transaction = db.transaction("frontend", "readwrite");
//   let users = transaction.objectStore("frontend");

//   let event = users.add(user);
//   event.onsuccess = () => {
//     console.log("succes");
//     n.value = "";
//     surname.value = "";
//     age.value = "";
//   };
//   //   users.delete();
//   //   users.put();
//   //   users.get();
//   let res = users.getAll();

//   res.onsuccess = () => {
//     console.log(res);
//     res.result.forEach((e) => {
//       let div = document.createElement("div");
//       div.innerHTML = `<h1>${e.id} - ${e.name} - ${e.surname} <button onclick="del(${e.id})">del</button></h1> `;
//       qq.append(div);
//     });
//   };
// };

// function del(id) {}

let request = window.indexedDB.open("jasurbek", 6);

var db = null;

request.onsuccess = (e) => {
  console.log("succesfully created!");
  db = e.target.result;
  db = request.result;
};

request.onerror = () => {
  console.log("error on created!");
};

request.onupgradeneeded = (e) => {
  console.log("onupgradeneeded");
  db = request.result;
  if (!db.objectStoreNames.contains("frontend")) {
    let store = db.createObjectStore("frontend", { keyPath: "id" });
    store.onsuccess = () => {
      console.log("success on store!");
    };
    store.onerror = () => {
      console.log("store error!");
    };
  }
};
