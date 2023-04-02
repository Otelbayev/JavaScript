let data = document.querySelectorAll('h1')

let range = new Range()

range.setStart(data[0].firstChild , 0);
range.setEnd(data[0].firstChild , 6);

window.getSelection().addRange(range)

function action(){
    //!delate selected word
    // range.deleteContents();
    //!select bolgan qismni ochirib boshqa joyga olsh
    // let selected = range.extractContents()
    // id.innerHTML += selected.textContent
    //! isert qiladi
    let span = document.createElement("em")
    // span.innerHTML = 'new Value'
    // range.insertNode(span) 
    //!tagga orabberasdi
    range.surroundContents(span)
}

// let input = document.getElementById('input')
// let p = document.getElementById("p")

// let span = document.createElement("span");
// let span1 = document.createElement("span");
// let text = p.innerText;

// input.onkeypress = (e) => {
//     p.innerText = text; 
//     range.setStart(p.firstChild , 0)
//     range.setEnd(p.firstChild , e.target.value.length)
//     if(text[e.target.value.length] === e.key){
//         span.style.color = "green"
//         range.surroundContents(span)
//     } else {
//         span1.style.color = "red"
//         range.surroundContents(span1)
//     }
// }

let selection = getSelection()

console.log(selection);

document.onselectionchange = () => {
    console.log(selection.getRangeAt(0).cloneContents());
}