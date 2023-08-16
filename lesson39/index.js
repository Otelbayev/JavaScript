let data = document.getElementById("data");

let range = new Range();

range.setStart(data.firstChild, 1);
range.setStart(data.firstChild, 2);

window.getSelection().addRange(range);
