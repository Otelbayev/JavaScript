//! 52 - dars | Cookies | YouTube  Link
// 	—  what is cookies?
// 	—  expires or max-age?
// 	—  session cookies?
// 	—  delete Cookie
// 	—  XSRF attack nima?
// 	—  Pul o'tkazmalarini qanday hack qilsa bo'ladi, agar...?
// 	—  Cookies flaglari haqida.
// 	—  Secure
// 	—  samesite -> lax va strict

let date = new Date(2023, 7, 9);
date = date.toUTCString();
console.log(date);
document.cookie = `name=jasurbek; expire=${date};`;

document.cookie = "title = none;max-age=1;secure";
//! secure -> qabul qininaytgan maumot boshqa saytdan qabul qilinmaydi
//! sameside=lax; -> faqat cookiesdagi malumotni korish munkin uni GET,PUT, DELETE, qilish ni imkoni yoq
//! sameside=strict; -> boshqa side dan malumot olib kelishiini oldini oladi
// console.log(document.cookie);
