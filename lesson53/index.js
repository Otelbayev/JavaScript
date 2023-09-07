//! 53 - dars | Encoding and Decoding URL's | YouTube  Link
// 	—  decodeURIComponent.
// 	—  decodeURI.
// 	—  encodeURIComponent
// 	—  new URL.
// 	—  searchParams with encode and decoders

let city = "sebzor 3a";
let url = new URL(`http://127.0.0.1:5501/lesson53/?name=jasurbek&age=19&`);

let search = url.searchParams;

search.set("city", city);
search.set("address", encodeURI(city)); //!-> ignore !,#,$,%~<~^
search.set("home", encodeURIComponent(city));

console.log(url);

//!new URL -> avtomatic tarda encode ecode qilib beradi

console.log(decodeURI(search.get("address")));
console.log(decodeURIComponent(search.get("home")));
console.log(search.get("city"));
