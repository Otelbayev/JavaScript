//! 47 - dars | Fetch - 3 | Advanced | YouTube Link
// 	—  Sending Image
// 	—  Swagger in detail.
// 	—  Multipart file
// 	—  Form Data
// 	—  ReadbleStream
// 	—  Fetch API's

const login = () => {
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
    .then((res) => console.log(res));
};
