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
//     .then((res) => {
//       console.log(res);
//     });
// };

// fetch("./txt.txt")
//   .then((res) => res.text())
//   .then((res) => console.log(res));

//!Form Data

formEvent.onsubmit = (e) => {
  e.preventDefault();
  let body = new FormData(formEvent);
  //   let imgUrl = URL.createObjectURL(file.files[0]);
  //   console.log(imgUrl);
  body.append("userImg", file.files[0]);
  body.append("roleIdSet", "1");
  body.delete("password");
  fetch("http://httpbin.org/post", {
    method: "POST",
    body,
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
