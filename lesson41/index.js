//! 41 - dars | Event Loop | Async Defer | MutationObserver | YouTube Link
// 	—  Event loop nima?
// 	—  Microtask?
// 	—  Macrotask?
// 	—  DOMContentLoad
// 	—  Load / onerror / beforeunload / unload
// 	—  async va defer
// 	—  MutationObserver

//!Event loop nima => js engine doim taks kutadi
//!microtaskt => kichik task
//!macrotask => katta tast
//!callstack => ayni vaqtda chaqirilayotgan action

//!DOMContentLoad => html code toliq create bolgan js ni yurg'izadi onloaddan tez ishlaydi => async
// document.addEventListener("DOMContentLoaded", () => {
//   txt.innerHTML = "jasurbek";
// });

//!onload => html css img lar toliq crete bolgandan keyin js ni yurgizadi => defer
// window.onload = () => {
//   txt.innerHTML = "onload";
// };

txt.innerHTML = "jasurbek";

//!boshqa sahifaga otishdan oldingo ogohlantirish
// window.onbeforeunload = () => {
//   return true;
// };

//!Mutation observer => node in ozgarishini kutadi
