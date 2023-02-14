//! 1

let check = (str1 , str2) => {
    let a;
    if(str1.length > str2.length){
        a = str1.localeCompare(str2);
        if(a == 1) console.log(`${str1} ni ichida ${str2} qisman mavjud!`);
        else if(a == 0) console.log(`${str1} va ${str2} lar bir biriga teng!`);
        else console.log(`${str1} ning ichida ${str2} mavjud emas!`);
    } else {
        a = str2.localeCompare(str1);
        if(a == 1) console.log(`${str2} ni ichida ${str1} qisman mavjud!`);
        else if(a == 0) console.log(`${str2} va ${str1} lar bir biriga teng!`);
        else console.log(`${str2} ning ichida ${str1} mavjud emas!`);
    }
}
// check('jasurbek' , 'bek')

//! 2

let getCount = (str) => {
    let obj = {} , n = 0 , m = 1;
    for (let i = 0; i < str.length; i++) {
        for(let j = 1 ; j < i; j++){
            if(str[i] === str[j]){
                n++;
            }
            else {
               obj
            }
            
        }
    }
    console.log(n , m);
}

// getCount('Jasurbeka')

//!3

let truncate = (str , n) => {
    console.log(str.slice(0 , n));
}
// truncate("webbrain academy" , 5);

//!4

let getCurrency = (str) => {
    let a = ""
    for (const i of str) {
        if(parseInt(i) + 1){
            a += i;
        }
    }
    console.log(Number(a));
}
// getCurrency("%^&*$4%^&*1200$%^&");

//! 5

let func1 = (str) => {
    let obj = {}, n = 0 , m = 0 , k = 0;
    let char = '!@#$%^&*())_+/*][\'\'-+""|><?~:;'
    for (let i = 0; i < str.length; i++) {
        if(Number(str[i]) || str[i] == 0) n++;
        else if(char.includes(str[i]))m++;
        else k++;
    }
    obj.letter = k;
    obj.char = m;
    obj.numbers = n;
    console.log(obj);
}
func1("webbr@!n_2023")

let func2 = (str) => {
    let obj = {} , n = 0, c = 0 , s = 0;
    for(let i = 0; i < str.length; i++){
        if(Number(str[i]) || str[i] == 0) n++;
        else if(str[i].toUpperCase() == str[i].toLowerCase()) c++;
        else s++;
    }
        obj.letter = s;
        obj.char = c;
        obj.numbers = n;
        console.log(obj);
}

func2("webbr@!n_2023")
