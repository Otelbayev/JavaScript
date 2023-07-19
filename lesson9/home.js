//! 1

let sum = (array) => {
    let s = 0
    array.forEach(e => {
        if(Number(e)) s += e
    });
    console.log(s);
}
// sum([1 , 2 , 3 , 4 , 5 , 8 , "jasur" , 6 , 7 , 9]);

//! 2
let countChar = (array) => {
    let count = 0;
    array.forEach(e => {
        if(typeof e === 'string'){
            for(let i = 0; i < e.length; i++){
                if(e[i].toLowerCase() == e[i].toUpperCase() && e[i] !== " ")count++;
            }
        }
    })
    console.log(`Array elementlari ichida umumiy ${count} ta char mavjud`);
}

// countChar(['webbrain' , 'academy' , '#$%^&*' , 'jasur%^&'])

//!3

let func = (ar1 , ar2) => {
    if(ar1.length > ar2.length) console.log(`${ar1} array ${ar2} dan katta`);
    else if(ar1.length < ar2.length) console.log(`${ar2} array ${ar1} dan katta`);
    else {
        let count = 0;
        for(let i = 0; i < ar1.length; i++){
            if(ar1[i] == ar2[i]) count++;
            else count--;
        }
        if(count === ar1.length) console.log(`${ar1} array ${ar2} ga 100% teng`);
        else console.log('Bu arraylarning faqat uzunliklari teng!');
    }

}
// func([1 , 2 , 0 , 4] , [1 , 2 , 3 , 4])

//! 4

let camelize = (str) => {
  let array = str.split("-") , s = "";
  array.forEach((e)=> {
    if(e !== ""){
        let res = e.replace(e[0] , e[0].toUpperCase())
        s += res
    }
  })
  console.log(s);
}
// camelize('background-color');
// camelize('list-stye-image');
// camelize('-webkit-transition');

//!5
let user = [
    { id:1, year: 1998, engine: 1, name: 'Tiko' },
    { id:2, year: 2005, engine: 1.2, name: 'Matiz' },
    { id:3, year: 2010, engine: 1.6, name: 'Gentra' },
    { id:4, year: 2010, engine: 1.5, name: 'Cobalt' },
    { id:5, year: 2012, engine: 2, name: 'Malibu' },
    { id:6, year: 2000, engine: 1.2, name: 'Damas' },
    { id:7, year: 2018, engine: 2.4, name: 'Tracker' }
];
//!2000 yildan oldingi
let res = user.filter((e) => e.year < 2000)
// console.log(res);
//!2010 yildan keyingi
res = user.filter((e) =>  e.year > 2010)
// console.log(res);
//!engine kuchiga qarab sort
res = user.sort((a , b) => a.engine - b.engine)
// console.log(res);
//!yiliga qarab sort
res = user.sort((a , b) => a.year - b.year)
// console.log(res);
//!Alphabet tartibida sort
res = user.sort((a , b) => a.name.localeCompare(b.name))
// console.log(res);
//! 2010-2020 oraligidagi
res = user.filter(e => {
    return e.year > 2010 && e.year < 2020
}) 
// console.log(res);

let webbrain = {
    frontend: [
        { course: 'react', price: 120 },
        { course: 'vue', price: 110 },
        { course: 'angular', price: 100 },
    ],
    backend: [
        { course: 'java', price: 120 },
        { course: 'php', price: 110 },
        { course: 'node,js', price: 100 },
    ],
    mobile: {
        android: [
            { course: 'android', price: 120 },
            { course: 'flutter', price: 110 }
        ],
        ios: [
            { course: 'ios', price: 120 },
            { course: 'flutter', price: 110 }
        ]
    },
}

let sum1 = 0;
for (const key in webbrain) {
    let a = webbrain[key];
    if(Array.isArray(a)){
        a.forEach((e) => {
          sum1 += e.price;
        })
    }
    else{
        for (const i in a) {
            a[i].forEach((e) => {
            sum1 += e.price;
            })
        }
    }
}
console.log(sum1);

let company = {
    sales: [
        {name: 'John', salary: 1000}, 
        {name: 'Alice', salary: 1600 }
        ],
    development: {
        sites: [
            {name: 'Peter', salary: 2000},
            {name: 'Alex', salary: 1800 }
        ],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(department) {
  if (Array.isArray(department)) { 
    return department.reduce((prev, current) => prev + current.salary, 0); 
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
sumSalaries(webbrain)
