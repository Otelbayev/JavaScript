//! 46 - dars | Fetch - 2 | Basic | YouTube  Link
// 	—  Fetch Body.
// 	—  Fetch headers
// 	—  Methods
// 	—  Authentication.

const getData = () => {
  btn.innerHTML = "loading...";
  let response = fetch("https://jsonplaceholder.typicode.com/users");
  response
    .then((res) => res.json())
    .then((res) => {
      btn.hidden = true;
      res.map((e) => {
        let div = document.createElement("div");
        document.body.append(div);
        div.innerHTML = `${e.id} - ${e.name} <button onclick="onSelect(${e.id})">selected</button>`;
      });
    });
};

async function onSelect(id) {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer`,
    },
    body: JSON.stringify({
      login: "jasubrek",
      password: 1604,
    }),
  });
  let data = await res.json();
  selected.innerHTML += data?.name + ", ";
}
