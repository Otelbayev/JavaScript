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


for(let m = 0; m < 100; m++){
    let count = 0 ;
    function primeNumber(number){
        for(let i = 1; i <= number; i++){
            if(number % i == 0) count++;
        }
        if(count === 2) console.log(number);
    }
    primeNumber(m)
}

// function numberToword(a){
//     a += "";
//     let first ,second , thrid;
//     let bir = a.charAt(0);
//     let ikki = a.charAt(1);
//     let uch = a.charAt(2);
    
//     switch (bir) {
//         case "1":
//             first = 'Bir yuz'
//         break;
//         case 2:
//             first = 'Ikki yuz'
//         break;
//         case 3:
//             first = 'Uch yuz'
//         break;
//         case 4:
//             first = 'To\'rt yuz'
//         break;
//         case 5:
//             first = 'Besh yuz'
//         break;
//         case 6:
//             first = 'Olti yuz'
//         break;
//         case 7:
//             first = 'Yetti yuz'
//         break;
//         case 8:
//             first = 'Sakkiz yuz'
//         break;
//         case 9:
//             first = 'Toqqiz yuz'
//         break;
    
//         default:
//             first = "none"
//         break;
//     }
    
//     switch (ikki) {
//         case 1:
//             second = 'o\'n'
//         break;
//         case 2:
//             second = 'yigirma'
//         break;
//         case 3:
//             second = 'o\'ttiz'
//         break;
//         case 4:
//             second = 'qiriq'
//         break;
//         case 5:
//             second = 'ellik'
//         break;
//         case 6:
//             second = 'oltmis'
//         break;
//         case 7:
//             second = 'yetmis'
//         break;
//         case 8:
//             second = 'sakson'
//         break;
//         case 9:
//             second = 'toqson'
//         break;
    
//         default:
//             second = "none"
//         break;
//     }
    
//     switch (uch) {
//         case 1:
//             thrid = 'Bir'
//         break;
//         case 2:
//             thrid = 'Ikki'
//         break;
//         case 3:
//             thrid = 'Uch'
//         break;
//         case 4:
//             thrid = 'To\'rt'
//         break;
//         case 5:
//             thrid = 'Besh'
//         break;
//         case 6:
//             thrid = 'Olti'
//         break;
//         case 7:
//             thrid = 'Yetti'
//         break;
//         case 8:
//             thrid = 'Sakkiz'
//         break;
//         case 9:
//             thrid = 'Toqqiz'
//         break;
    
//         default:
//             first = "none"
//         break;
//     }
   
//     setTimeout(() => {
//          console.log(`${first} ${second} ${thrid}`);
//     }, 5000);
// }
// numberToword(121)



function none(z){
    z += "";
    let a = z.charAt(0);
    let b = z.charAt(1);
    let c = z.charAt(2);
    let first ,second ,thrid;
    a = Number(a);
    b = Number(b);
    c = Number(c);
    switch (a) {
        case 1:
            first = 'Bir yuz'
        break;
        case 2:
            first = 'Ikki yuz'
        break;
        case 3:
            first = 'Uch yuz'
        break;
        case 4:
            first = 'To\'rt yuz'
        break;
        case 5:
            first = 'Besh yuz'
        break;
        case 6:
            first = 'Olti yuz'
        break;
        case 7:
            first = 'Yetti yuz'
        break;
        case 8:
            first = 'Sakkiz yuz'
        break;
        case 9:
            first = 'Toqqiz yuz'
        break;
    
        default:
            first = "none"
        break;
    }

    switch (b) {
        case 1:
            second = 'o\'n'
        break;
        case 2:
            second = 'yigirma'
        break;
        case 3:
            second = 'o\'ttiz'
        break;
        case 4:
            second = 'qiriq'
        break;
        case 5:
            second = 'ellik'
        break;
        case 6:
            second = 'oltmis'
        break;
        case 7:
            second = 'yetmis'
        break;
        case 8:
            second = 'sakson'
        break;
        case 9:
            second = 'toqson'
        break;
    
        default:
            second = "none"
        break;
    }
    
    switch (c) {
        case 1:
            thrid = 'Bir'
        break;
        case 2:
            thrid = 'Ikki'
        break;
        case 3:
            thrid = 'Uch'
        break;
        case 4:
            thrid = 'To\'rt'
        break;
        case 5:
            thrid = 'Besh'
        break;
        case 6:
            thrid = 'Olti'
        break;
        case 7:
            thrid = 'Yetti'
        break;
        case 8:
            thrid = 'Sakkiz'
        break;
        case 9:
            thrid = 'Toqqiz'
        break;
    
        default:
            first = "none"
        break;
    }

    console.log(`${first} ${second} ${thrid}`);
}

none(333);


