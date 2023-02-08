let a = {name:"hngbfvd"};

function A(){
    return a
}
function B() {
    return a
}

let x = new A();
let y = new B();

console.log(x == y);