//! 43 - dars | Array buffer | blob | YouTube Link
// 	— ArrayBuffer nima?
// 	—  TypedArray?
// 	—  Unit8Array?
// 	—  DataView
// 	—  TextDecoder
// 	—  TextEncoder
// 	—  Blob

//!Array buffer -> binary data representation

let buffer = new ArrayBuffer(2);
let view = new DataView(buffer);

view.setInt8(0, 105);
view.setInt8(1, 108);

console.log(String.fromCharCode(view.getInt8(0)));
console.log(String.fromCharCode(view.getInt8(1)));

console.log(buffer);

let unit = new Uint8Array([104, 105, 101]);
console.log(unit.buffer);
let decoder = new TextDecoder(); // ascii to character
console.log(decoder.decode(unit));

let encoder = new TextEncoder(); // character to ascii
console.log(encoder.encode("hie"));

//!BLob => binary large object

let blob = new Blob(["jasurbek"], { type: "iamge/png" });
console.log(blob);

btn.onclick = () => {
  let url = URL.createObjectURL(blob);
  anchor.href = url;
  anchor.download = "jasur";
  console.log(url);
  anchor.click();
};

dimg.onclick = () => {
  fetch(
    "https://yt3.googleusercontent.com/0MxhUKXGNo28gyw5Yl5GS4CBKEOlgV-E_yoTRfBHkDaZEcf2f-SM7uEB83dIeSzl-oy9tTO6DQ=s900-c-k-c0x00ffffff-no-rj"
  )
    .then((res) => res.blob())
    .then((res) => {
      let url = URL.createObjectURL(res);
      let a = document.createElement("a");
      a.href = url;
      a.download = "webbrain";
      console.log(url);
      img.src = url;
      console.log(res);
      a.click();
    });
};

const getData = (e) => {
  let url = URL.createObjectURL(e.target.files[0]);
  img2.src = url;
  console.log(img2);
  console.log(e.target.files[0]);
};
