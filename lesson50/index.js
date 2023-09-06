//! 50 - dars | LocalStorage | YouTube Link
// 	— LocaleStorage nima va qay vaziyatlarda ishlatiladi?
// 	— Malumotlarni LocalStorage'dan olish / unga qo'shish
// 	—  Malumotlar o'chirish va clear qilish
// 	—  LocalStorageni loop qilish

if (localStorage.getItem("count")) {
  count.innerText = localStorage.getItem("count");
} else {
  count.innerText = 0;
}

const plus = () => {
  count.innerText = eval(`${count.innerText} + 1`);
  localStorage.setItem("count", count.innerText);
};

const minus = () => {
  count.innerText = eval(`${count.innerText} - 1`);
  localStorage.setItem("count", count.innerText);
};

const deleteL = () => {
  localStorage.removeItem("count");
  count.innerText = 0;
};

const clearing = () => {
  localStorage.clear();
  count.innerText = 0;
  title.innerText = "";
};

const onChange = ({ target: { value } }) => {
  localStorage.setItem("title", value);
  title.innerText = value;
};
