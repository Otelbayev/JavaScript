//! OOP

class Users {
    //! constructor
    constructor(title) {
        this.title = title
        // console.log(title);
    }
    name = "jasuebek" 
    // age = 0
    // fullName() {
    //     console.log(++this.age);
    // }
    welcomeMsg(){
        // console.log(this);
        // console.log(`hi ${this.title} welcome to webbrain`);
    }
    //! gettr and settr
    get info() {
        console.log(this.title);
    }
    set info(value) {
        this.title = value
    }
    //!Computed name 
    ["web" + "dev"](n) {
        console.log(n);
    }
}

let user = new Users('jasuebek');
let user1 = new Users('Otelbayev');

// user.welcomeMsg() //Users { name: 'jasuebek', title: 'jasuebek' }

// user.fullName()
// user.fullName()
// user.fullName()

// user1.fullName()
// user1.fullName()
// user1.fullName()

//! gettr and settr
// user1.info = 'none'
// user1.info

//!Computed name

// user1.webdev('hello js')

//!inhetins -> meros olish

class Animals {
    parent(){
        console.log('parent');
    }
    speed(speed){
        console.log(`Runs ${speed}km pre hour`);
    }
}

class Rabbit extends Animals {
    child() {
        console.log('child');
    }
    info(name){
        this.child()
        super.parent() //! parentdan funksiya olip uni child gadi funksiya ichida ishlatilishi
        console.log('quyonni 2 ta qulogi bor');
    }
}

class Wolf extends Animals {
    info(name){
        console.log('Borini 2 ta qulogi bor');
    }
}

let rb = new Rabbit()
// rb.info()
// rb.speed(12)
// console.log("========");
// let wl = new Wolf()
// wl.info()
// wl.speed(15)

//! overrinding constructor -> child class parametrlarini parentga jonatish 

class Animal {
    constructor(name) {
        console.log(name);
        this.name = name;
    }
    speed(speed) {
        console.log(`${this.name} tezligi ${speed}km/h`);
    }
}

class mol extends Animal {
    constructor(name){
        super(name)
    }
}

// let m = new mol('mol');
// m.speed(120)

//! Overriding class fields

class First {
    constructor(name) {
        console.log(name);
    }
}

class Secons extends First {}

let a = new Secons('jasur')
let b = new Secons('jasurbek')