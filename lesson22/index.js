//! Advence Classes

//! Static variabel and static function 
// variable ham function ham static bolgandagina function ichida vaiabkega nisbatan this ishlatish mumkin boshqa paytda class nomi orqali chqiriladi

class webbrian {
    age = 0
    getAge() {
        console.log(++this.age);
    }
    //!static
    static year = 0
    static getYear(){
        console.log(++this.year);
    }
}

let w = new webbrian()
let w1 = new webbrian()

// w.getAge() //1
// w.getAge() //2
// w1.getAge() //3
// w1.getAge()//4

// console.log('============');

// w.getYear()//1
// w.getYear()//2
// w1.getYear()//3
// w1.getYear()//4

//!static functionga murojat qilish

// webbrian.getYear()
// webbrian.getYear()
// webbrian.getYear()


class Protected {
    //! public variable with underscore _name
    _name = 'webbrain'
    //! privarte variabel with #protected
    #protected = "none"
    get getPrivate() {
        console.log(this.#protected);
    }
    set getPrivate(v) {
        this.#protected = v
    }
}

let pr = new Protected();
pr.getPrivate = "jasurbek otelbayev"
// pr.getPrivate
// console.log(pr);

//! prived yani #protected variableni qoymatini gettr and settr bilan o'zgartirishimiz mumkin


//! Array dan meros oladi
class ar extends Array {}
// ar.length

//! Object dan meros oladi
class ob extends Object {}
// ob.assign()

//!instanceof

console.log([] instanceof Array); // true
console.log([] instanceof Object);// true
console.log({} instanceof Array); // false
console.log({} instanceof Object);// true 
console.log(function none(){} instanceof Array); // false
console.log(function none(){} instanceof Object);// true
console.log('qwer' instanceof Array); // false
console.log('qwer' instanceof Object); // false

//!mixins

class users {
    getName(){
        console.log('no name');
    }
}

let obj = {
    info(){
        console.log('no info');
    }
}

Object.assign(users.prototype , obj)

users = new users()

users.info()