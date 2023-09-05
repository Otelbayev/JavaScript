//! 48- dars | URL | YouTube Link
// 	—  new URL
// 	—  protocol / pathname / host / href / search / hash
// 	—  SearchParams
// 	—  URL bo'yicha filter qilish.
// 	—  URL bo'yicha share qilish

console.log(window.location);

//!127.0.0.1:5500/lesson48/index.html

//!host -> 127.0.0.1:5500
//!hostname -> 127.0.0.1
//!href -> https://127.0.0.1:5500/lesson48/index.html
//!origin -> https://127.0.0.1:5500
//!pathname -> /lesson48/index.html
//!port -> :5500
//!protocol -> http

let url = new URL(window.location);

let search = url.searchParams;
console.log(search.get("country"));
search.delete("country");
console.log(search.getAll("country"));
search.set("country", "none");

console.log(url.search);

const replacer = (value, placeholder) => {
  if (!value) {
    search.delete(placeholder);
  } else {
    search.set(placeholder, value);
  }
  path.innerHTML = url.href;
  return url.href;
};

let div = document.createElement("a");
const onChange = ({ target: { value, placeholder } }) => {
  //   const {
  //     target: { value, placeholder },
  //   } = e;
  //   div.href = replacer(value, placeholder);
  //   div.click();
  replacer(value, placeholder);
};
