// let data = new Promise((resolve , reject) => {
//     setTimeout(() =>{
//         resolve('code.')
//     })
// })

// async function get() {
//     console.log('start');
//     let res = await data;
//     console.log(res);
//     console.log('finish!');
// }

// get()

//! Generator function

//yield , return
function* getData() {
    let a = 0
    while(1){
        yield ++a
        if(a === 3) {
            return a
        }
    }
}
//! yeild genfuntionni pauza qiladi
//! return genfunctionni toxtatadi
let generator = getData()


// console.log(generator.next());//!{value:2 , done:false}
// console.log(generator.next());//!{value:3 , done:false}
// console.log(generator.next());//!{value:undefind , done:true}

//!loop

// for(vl of generator){
    // console.log(vl); //! valuselarnini olip beradi
// }

//!spread -> array korinishida valuelar
// console.log([...generator]);

function* get() {
    let id = users.length
    while(1){
        yield ++id
    }
}
let get1 = get()


let users = [
    {id:1 , name:"eshmat"},
    {id:2 , name:"eshmat"},
    {id:3 , name:"eshmat"},
    {id:4 , name:"eshmat"},
    {id:5 , name:"eshmat"},
    {id:6 , name:"eshmat"},
]

let onDel = (id) => {
    let res = users.filter((v) => v.id !== id)
    users = res
}

let add = (name) => {
    users = [...users , {id:get1.next().value , name:name}]
}

add('none')
onDel(3)
add('qwert')
add('poiuytr')
// console.log(users);

//! parametr

function* getParam(n) {
    for(vl of n){
        yield vl;
        let newValue = yield vl; // .next ichidagi parametr
    }
}

const gen = getParam([1 , 2 , 6])

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


function* getNext() {
    let  i = 0;
    while(1){
        let n = yield ++i
        if(n) i += n
    }
}
const r = getNext()
console.log(r.next());
console.log(r.next(3));
console.log(r.next(4));
