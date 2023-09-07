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
let request = window.indexedDB.open("jasurbek", 2);

var db = null;

request.onsuccess = (e) => {
  //   db = e.target.result;
  db = request.result;
  console.log("success");
};

request.onerror = () => {
  console.log("error");
};

request.onupgradeneeded = () => {
  console.log("onupgradeneeded");
  db = request.result;
  if (!db.objectStoreNames.contains("frontend")) {
    let store = db.createObjectStore("frontend", { keyPath: "id" });
    store.onsuccess = (e) => {
      console.log("succesfully store created");
    };
    store.onerror = (e) => {
      console.log("store error");
    };
  }
};
