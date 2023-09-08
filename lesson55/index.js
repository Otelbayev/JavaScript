//! 55 - dars | indexedDB - 2 | Offline applications | YouTube  Link
// 	—  Index.
// 	—  Malumot qo'shishdagi options.`
// 	—  Filter by data value / name / grade
// 	—  IDBKeyRange
// 	—  LowerBound / UperBound orqali filter qilish
// 	—  bound orqali filter qilish.
// 	—  "A", "Z" va "a", "z" bo'yicha filterlash.

let request = window.indexedDB.open("base", 2);

var db = null;

function drawData() {
  none.innerHTML = null;
  let transaction = db.transaction("frontend", "readonly");
  let users = transaction.objectStore("frontend");

  let range = IDBKeyRange.lowerBound(10, false);

  let strRange = IDBKeyRange.bound("A", "B");

  let data = users.getAll();

  let ix = users.index("indexName").getAll(strRange);

  let g = users.index("indexGrade").getAll(range);

  ix.onsuccess = () => {
    console.log(ix.result);
  };

  g.onsuccess = () => {
    console.log(g.result);
  };

  data.onsuccess = () => {
    console.log(data.result);
    data.result.forEach((e) => {
      let a = document.createElement("div");
      a.innerHTML = `<h1>${e.id} - ${e.name} <button onclick="del(${e.id})">del</button></h1>`;
      none.append(a);
    });
  };
}

request.onsuccess = () => {
  console.log("success");
  db = request.result;
  drawData();
};

request.onerror = () => {
  console.log("error");
};

request.onupgradeneeded = () => {
  db = request.result;
  //   db.deleteObjectStore("frontend");
  if (!db.objectStoreNames.contains("frontend")) {
    let store = db.createObjectStore("frontend", { keyPath: "id" });
    let indexName = store.createIndex("indexName", "name", { unique: false });
    let indexGrade = store.createIndex("indexGrade", "grade", {
      unique: false,
    });
    indexName.onsuccess = () => {
      console.log("succrs indexedName");
    };
    indexGrade.onsuccess = () => {
      console.log("indexGrade");
    };
  }
};

let id = 0;

create.onclick = (e) => {
  let user = {
    id: ++id,
    name: n.value,
    surname: surname.value,
    grade: Number(age.value),
  };

  let tr = db.transaction("frontend", "readwrite");
  let users = tr.objectStore("frontend");

  let event = users.add(user);

  event.onsuccess = () => {
    n.value = "";
    surname.value = "";
    age.value = "";
  };

  drawData();
};

function del(id) {
  let tr = db.transaction("frontend", "readwrite");
  let users = tr.objectStore("frontend");
  users.delete(id);
  drawData();
}

update.onclick = () => {
  let tr = db.transaction("frontend", "readwrite");
  let user = {
    id: 1,
    name: n.value,
    surname: surname.value,
    grade: Number(age.value),
  };
  let users = tr.objectStore("frontend");
  let up = users.put(user);
  up.onsuccess = () => {
    drawData();
    n.value = "";
    surname.value = "";
    age.value = "";
  };
};
