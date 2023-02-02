//!1

let browser = "Safari";

switch(browser) {
    case 'Edge':
        console.log(`You've got a ${browser}`);
        break;
    case 'Chrome':
        console.log(`You've got a ${browser}`);
        break;
    case 'Safari':
        console.log(`You've got a ${browser}`);
        break;
    case 'FireFox':
        console.log(`You've got a ${browser}`);
        break;
    case 'Opera':
        console.log(`You've got a ${browser}`);
        break;
    default:
        console.log("We hope that this page looks ok!");
}

//!2

let a = 1 // Barcha if larni tekshirib chiqadi consolega 1 ni chiqaradi
a = 0 // consolega nol chiqadi
a = 2 // consoleda 2,3 chiqadi
a = 3 // consoleda 2,3 chiqadi

if(a == 0) console.log(0);
if(a == 1) console.log(1);
if(a == 2 || a == 3) console.log('2,3');

//!3

let  i = 4 ;

while(i) {
    console.log(i--); //3 , 2 , 1 
}  // 0 ga kelganda toxtaydi cadnition false boladi nol bolgan paytta

//!4

i = 0;
while(++i < 5){
    console.log(i); // 1 , 2 , 3 , 4
}

// o dan boshlamaganining sababi ++ inktement bor edi

//!5

i = 0;

while(i++ < 5) {
    console.log(i);
} // 1,2,3,4,5

// nol tekshirilganda consoleda bir chiqadi
// bir tekshirilganda consoleda ikki chiqadi
// va hokaza

//!6
for(let i = 0; i < 3; i++){
    console.log(`number ${i}`);
}

 i = 0;
while(i < 3){
    console.log(`number ${i}`);
    i++
}

//!7

function min(a , b) {
    if(a >= b) console.log(b);
    else console.log(a);
}
min(-3,-1)
min(3,5)
min(8,8)

function pow(a , b){
    console.log(a ** b);
}
pow(3,2)
pow(3,3)
pow(1,100)


//! Prime Number

let count = 0;
for (var m = -5; m <= 100; m++) {
    function primeNumber(number){
        let check = true;
        if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    check = false;
                    break;
                }
            }
            if (check) {
                console.log(`${number}`);
                count++;
            }
        }  
    }
    primeNumber(m);
}
console.log(`[0 - ${m}] orasida ${count} ta tub son mavjud`);


