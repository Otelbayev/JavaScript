//! flag

let user  = {
    name:'jasurbek', 
    age: 18,
    getData(){

    }
}

//write
//delate
//loop
//value

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

//! Writable -> keyni ozgartitib bolmaydi
// Object.defineProperty(user, "name" , {writable:false})

//!configurable -> keyni ochirib bolmaydi
Object.defineProperty(user , 'name' , {configurable:false})
delete user.name

//! -> objecni keylarini for loopga qoshmay qoldirip ketadi

Object.defineProperty(user, 'getData' , {enumerable : false})

for (let i in user) {
    // console.log(i);
}

//! Object.seal() -> objectni qiymatini o'zgartirsa boladi , ochirish , yangi qiymat qoshib bolmaydi

user = {
    name:'jasur',
    age:18,
    surname:'otelbayev'
}

Object.seal(user)

user.name = "none"

// console.log(user);

//! Object.freeze() -> objectni muzlatip qoyadi add , update , delate qilishni iloji yoq

user = {
    name:'jasur',
    age:18,
    surname:'otelbayev'
}

Object.freeze(user)

//! Gettr Settr

const users = {
    name:'jasurbek',
    lastName: 'otelbayev',
    age:18,
    get fullName(){
        console.log(this.name , this.lastName);
    },
    set fullName(value){
        this.name = value.name
        this.lastName = value.lastName
    }
}

users.fullName = {name:'eshmat' , lastName:'toshmat'}

users.fullName 