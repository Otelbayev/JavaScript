//!Switch Case
//switch -> === 
// let data = "yomg'ir";

// switch (data) {
//     case "qor":
//         console.log("qor");
//         break;
//     case "sovuq":
//         console.log("sovuq");
//         break;
//     case "fog":
//         console.log("fog");
//         break;
//     case "yomg'ir" :
//         console.log("yomg'ir");
//         break;
//     default:
//         console.log("Fog");
//         break;
// }

//! For Loop

// for(boshlaishi , manzil , qadam ){ code; }

// for(var i = 0 ; i < 5 ; i++){
//     // console.log(i);
// }
// // console.log(s);

{
    {
        {
            {
                {
                    {
                        {
                            {
                                {
                                    {
                                        {
                                            var a = 50;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// console.log(a); // 50

// for(let i = 1 ; i < 12 ; i++){
//     console.log(i);
//     i += i
//     // console.log(i);
// }

for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        // console.log(i);
    }
}

for(let i = 1; i < 12; i++){
    if(i % 3 == 0) continue;
    // console.log(i); // 3 ga bolinadgan sonlarno o'chirib tashlaydi
}
let n = 0;
outer: for(i = 10; i >= 1; i--){
    inner: for (let j = 1; j <=10; j++) {
      console.log(i+ " + "+j);
      break outer;
    }
}

let webbrain = {
    frontend:[
        {price:1}
    ],
    backend:[
        {price:1}
    ],
    mobile:{
        android:[
            {price:1}
        ],
        ios:[
            {price:1}
        ]
    }
}

let sum1 = 0
function none(a){
    for(let i in a){
        if(Array.isArray(a[i])){
            a[i].forEach((e) => sum1 += e.price)
        } else {
            none(a[i])
        }
    }
}
none(webbrain)
console.log(sum1);

let sum = (a) => {
    return(b) => {
        if(b) {
            return sum(a+b)
        }
        return a
    }
}

console.log(sum(5)(6)(9)());

