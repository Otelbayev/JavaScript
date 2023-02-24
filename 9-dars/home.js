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

let func = (ar1 , ar2) => {
    if(ar1.length > ar2.length) console.log(`${ar1} array ${ar2} dan katta`);
    else if(ar1.length < ar2.length) console.log(`${ar2} array ${ar1} dan katta`);
    else {
        let count = 0;
        for(let i = 0; i < ar1.length; i++){
            if(ar1[i] == ar2[i]) count++;
            else count--;
        }
        if(count === ar1.length) console.log(`${ar1} array ${ar2} ga 100% teng`);
        else console.log('Bu arraylarning faqat uzunliklari teng!');
    }

}
// func([1 , 2 , 0 , 4] , [1 , 2 , 3 , 4])

//! 4

let camelize = (str) => {
  let array = str.split("-") , s = "";
  array.forEach((e)=> {
    if(e !== ""){
        let res = e.replace(e[0] , e[0].toUpperCase())
        s += res
    }
  })
  console.log(s);
}
// camelize('background-color');
// camelize('list-stye-image');
// camelize('-webkit-transition');