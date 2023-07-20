//!Error handling

// try {
//     throw new Error('smth went error')
// } catch(err) {
//     console.log( err.message , err.name);
// }

// console.log('hello world');


//!callback

let database = {
    jasur:{
        login:'jasur',
        password:12345,
        fullName:'Jasurbek Otelbayev'
    },
    inam:{
        login:'inam',
        password:12345,
        fullName:'Inamjon Otelbayeev'
    }
}

// console.log('started...');
// const login = (log , pas , callback) => {
//    setTimeout(() => {
//      if(database.jasur.login === log && database.jasur.password === pas){
//         return callback(`${database.jasur.fullName} Welcome to Facebook`)
//     } else {
//         return callback('brat xato!')
//     }
//    } , 1000 )
// }

// login('jasur' , 12345 , (usr) => {
//     console.log(usr);
//     console.log(getName());
//     console.log('fiished');
// })

//! Promise

let user = new Promise((resolve , reject) => {
    if(database.jasur.login === 'jasur' && database.jasur.password === 12345){
        resolve(`${database.jasur.fullName} Welcome to Facebook`)
    } else {
        reject('brat xato!')
    }
})

user.then((res) => console.log(res))
// // .then(() => console.log('finished'))
.catch((err) => console.log(err))
// // console.log('finished');

// let all = Promise.all([
//     new Promise((resolve , reject) => {
//         if(database.jasur.login === 'jasur' && database.jasur.password === 12345){
//         resolve(`${database.jasur.fullName} Welcome to Facebook`)
//         } else {
//             reject('brat xato!')
//         }
//     }),
//     new Promise((resolve , reject) => {
//         if(database.jasur.login === 'jasur' && database.jasur.password === 12345){
//         resolve(`${database.jasur.fullName} Welcome to Facebook`)
//         } else {
//             reject('brat xato!')
//         }
//     })
// ])

// all.then((res)=> console.log(res))
// .catch((err) => console.log(err))
// .finally(() => console.log('finished'))

//! async await

// async function get() {}
// let get = async function() {}
// let get = async () => {}

async function get() {
    console.log('started...');
    let res = await user
    console.log('finished'); 
}

get()