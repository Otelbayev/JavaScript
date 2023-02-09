//! Math methods

// round
// console.log(Math.round(2.5));

let round = (a) => {
    if(a >= 0){
        let x = (a * 10) % 10;
        if(x >= 0 && x < 5) console.log(a - x/10);
        else console.log(a + (10 - x)/10);
    } else {
        a*=(-1)
        let x = (a * 10) % 10;
        if(x >= 0 && x <= 5)console.log((x/10 - a));
        else console.log((a + (10 - x)/10)*(-1));
    }
}
// round(-5.1)
// round(-5.2)
// round(-5.3)
// round(-5.4)
// round(-5.5)
// round(-5.6)
// round(-5.7)
// round(-5.8)
// round(-5.9)
// ceil

let ceil = (a) => {
    console.log(a - ((a*10)%10)/10);
}

// ceil(5.1)
// ceil(5.2)
// ceil(5.3)
// ceil(5.4)
// ceil(5.5)
// ceil(5.6)
// ceil(5.7)
// ceil(5.8)
// ceil(5.9)

// floor

let floor = (a) => {
   if(a > 0)console.log(a + (10 - (a*10)%10)/10)
   else{
    a*=(-1);
    console.log(-1*(a + (10 - (a*10)%10)/10))
   }
}
// floor(5.1)
// floor(5.2)
// floor(5.3)
// floor(5.4)
// floor(5.5)
// floor(5.6)
// floor(5.7)
// floor(5.8)
// floor(5.9)
// trunc

let trunc = (a) => {
    if(a >= 0) console.log(a - ((a*10)%10)/10);
    else {
        a*=(-1);
        console.log(-1*(a - ((a*10)%10)/10))
    }
}
// trunc(-5.9);
// console.log(Math.trunc(-5.6));
// min
let min = (a , b) => {
    a < b?console.log(a):console.log(b);
}
// max
let max = (a , b) => {
    a > b?console.log(a):console.log(b);
}
// pow
let pow = (a , b) => {
    console.log(a**b);
}
// sqrt
let sqrt = (a) => {
    a >=0?console.log(a**(1/2)):console.log("None");
}
// sqrt(4)
// cbrt
let cbrt = (a) => {
    a >=0?console.log(a**(1/3)):console.log("None");
}
// cbrt(27)
// sign
let sign = (a) => {
    if(a > 0) console.log(1);
    else if(a == 0) console.log(0);
    else console.log(-1);
}
// sign(50)
// sign(0)
// sign(-50)

let Binary = (a) => {
    let b = a.toString(2) , x=0 , y=0;
    for (let i = 0; i < b.length; i++) {
        if(b[i] ==1) x++
        else y++
    }
    console.log(`${b} da ${y}ta nol ${x}ta bir bor`);
}
// Binary(5)

let randomIntiger = (min , max) => {
    let random = Math.random()*100;
    if(random >= min && random <= max) console.log(random);
    else {
        console.log(random - 50);
    }
}
randomIntiger(1 , 50)