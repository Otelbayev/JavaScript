//! multiple returnga qatyuvchi funksiya

function* getData() {
    //!yield
    yield 1;
    yield 2;
    yield 3;
}

const generatior = getData();

// console.log(generatior.next());
// console.log(generatior.next());
// console.log(generatior.next());
// console.log(generatior.next());

//! loop -> valuelar boyicha yurib chiqadi
// for (let vl of generatior) {
//     // console.log(vl);    
// }

//! valuelarni massiv qilib beradi serad operator
// console.log([...generatior]);

const users = [
    {id:1, name:'eshmat1'},
    {id:2, name:'eshmat2'},
    {id:3, name:'eshmat3'},
    {id:4, name:'eshmat4'},
    {id:5, name:'eshmat5'},
    {id:6, name:'eshmat6'},
]

const onDelate = (id) => {
    let res = users.filter((v) => v.id !== id)
}