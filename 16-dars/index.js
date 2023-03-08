//! SetTimeout
// ozgine vaqt kutip keyin ichidagi code ni yurg'izadi
// console.log(0);

let a = setTimeout(() => {
    console.log(1);
}, 2000);

let b = setTimeout(() => {
    console.log(2);
}, 1000);

// console.log(3);

//! clearTimeout

clearTimeout(a)
clearTimeout(b)

//! setInterval

let id = setInterval(() => {
    let date = new Date();
    console.log(`Today ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
} , 1000)

//! clearInterval

clearInterval(id)

let sum = () => {
    console.log('good');
    return () => {
        console.log('hello');
    }
}

sum()// good
sum()()// good hello