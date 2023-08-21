//! 44 - dars | File | FileReader | YouTube Link
// 	—  File
// 	—  FileReader
// 	—  readAsArrayBuffer
// 	—  readAsText
// 	—  readAsDataURL

//!Read a file

let reader = new FileReader();

const getData = (e) => {
  let file = e.target.files[0];
  reader.readAsText(file);
  reader.onload = () => {
    console.log(reader.result);
  };
};

let buffer = new ArrayBuffer(2);
let view = new DataView(buffer);
view.setInt8(0, 104);
view.setInt8(0, 105);

dow.onclick = () => {
  let file = new File([buffer], "file.txt", { type: "text/plain" });
  let url = URL.createObjectURL(file);
  let a = document.createElement("a");
  document.body.append(a);
  a.href = url;
  a.download = file.name;
  a.click();
};
