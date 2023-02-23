//! 1

let sum = (array) => {
    let s = 0
    array.forEach(e => {
        if(Number(e)) s += e
    });
    console.log(s);
}
// sum([1 , 2 , 3 , 4 , 5 , 8 , "jasur" , 6 , 7 , 9]);

//! 2
let countChar = (array) => {
    let count = 0;
    array.forEach(e => {
        if(typeof e === 'string'){
            for(let i = 0; i < e.length; i++){
                if(e[i].toLowerCase() == e[i].toUpperCase() && e[i] !== " ")count++;
            }
        }
    })
    console.log(`Array elementlari ichida umumiy ${count} ta char mavjud`);
}

// countChar(['webbrain' , 'academy' , '#$%^&*' , 'jasur%^&'])

//!3
