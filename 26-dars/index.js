//! Curry function
//!1 bir nechta parametr qabur qiladigan 
//!2 functionga return qiladugan


let curry = (...param) => {
    switch (param[0]) {
        case 'add':
           return eval(param.slice(1).join("+"))
        break;
        case 'multiplication':
            return eval(param.slice(1).join("*"))
        break;
        default:
            break;
    }
}


console.log(curry('add' , 1 , 2 , 3 , 4 , 5));
// console.log(curry('multiplication' , 1 , 2 , 3 , 4));

const sum = (a) => {
    return (b)=>{
        if(b) {
            return sum(a + b)
        }  
        return a
    }
}

console.log(sum(1)(2)(4)());