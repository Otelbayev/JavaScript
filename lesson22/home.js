//! 1
class Animals {
    constructor(name){
        this.name = name
        console.log(name); // white rabbit
    }
}
//! Error qayrarishining sababi Child class constructorichida super() metodi ishlatilmagen
class Rabbit extends Animals {
    constructor(name){
        super(name)
        this.name = name;
        this.create = Date.now()
    }
}

let rabbit = new Rabbit('White Rabbit');
console.log(rabbit.name); //white rabbit

//!2

class Rabbit1 extends Object {
    constructor(name) {
        super(name) //! super() metodini ishlatishimiz kerar bolmasa error Objectga name degan ozgruvchini jonatish uchun
        this.name = name
        console.log(name); //rab
    }
}

let r = new Rabbit1('rab')
console.log(r.hasOwnProperty('name'));