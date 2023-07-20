//!__proto__

let user = {
    name:'jasurbek',
}

let user2 = {
    lastName:'otelbayev'
}

// Object.assign(user , user2)

user.__proto__ = user2

// console.log(user.lastName);

//!prototype

user = {name:'jasur' ,age:18}
let user1 = {name:'none' ,age:15}
user2 = {name:'qwere' ,age:19}

Object.prototype.fullName = function() {
    // console.log(this.name , this.age);
}


// user.fullName()
// user1.fullName()
// user2.fullName()

let ar = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]

Array.prototype.remove = function(n) {
    let res = this.filter((value) => value != n)
    console.log(res);
}

// ar.remove(1)

//! homework

//obj.remove('name')

Object.prototype.remove = function(n) {
    delete this[n];
    console.log(this);
}

const person = {
  name: "John",
  surName: "Doe",
  age: 34,
  developer: true,
};
Object.prototype.set = function (descriptor, value, boolean) {
  return Object.defineProperty(this, value, {
    [descriptor]: boolean,
  });
};
person.set("enumerable", "age", false);
console.log(Object.getOwnPropertyDescriptor(person, "age"));