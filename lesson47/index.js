//! 47 - dars | Fetch - 3 | Advanced | YouTube Link
// 	—  Sending Image
// 	—  Swagger in detail.
// 	—  Multipart file
// 	—  Form Data
// 	—  ReadbleStream
// 	—  Fetch API's

// const login = () => {
//   fetch("http://localhost:8080/api/public/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: email.value,
//       password: password.value,
//     }),
//   })
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

// fetch("./txt.txt")
//   .then((res) => res.text())
//   .then((res) => console.log(res));

// formEvent.onsubmit = (e) => {
//   e.preventDefault();
//   let form = new FormData(formEvent);

//   form.append("userImg", file.files[0]);
//   form.append("roleIdSet", "1");

//   fetch("https://httpbin.org/post", {
//     method: "POST",
//     body: form,
//   })
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

let token = null;

formEvent.onsubmit = (e) => {
  e.preventDefault();
  fetch("http://localhost:8080/api/public/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      token = res?.authenticationToken;
      localStorage.setItem("token", token);
    });
};

const getCategory = () => {
  fetch("http://localhost:8080/api/v1/categories/list")
    .then((res) => res.json())
    .then((res) => {
      res.data.map((e) => {
        console.log(e.name, e.id);
        let div = document.createElement("div");
        div.innerHTML = `<h1>${e.name} - ${e.id} <button onclick="getSingle()">selected</button> </h1>`;
        btn.after(div);
      });
    });
};

const getSingle = () => {
  fetch("http://localhost:8080/api/v1/categories/1", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
