let user = {
    name: 'jasurbek',
    lastname:'otelbayev',
    age:18,
    getFull(){
        console.log(`${this.name} ${this.lastname} ${this.age}`);       
    }
}

// user.getFull()
//! call() 
// contexga malumot yuklaydi yani thisga malumot olip kelib beradi
let users = [
    {
        name: 'jasurbek',
        lastname:'otelbayev',
        age:18,
    },
    {
        name: 'jasurbek',
        lastname:'otelbayev',
        age:18,
    },
    {
        name: 'jasurbek',
        lastname:'otelbayev',
        age:18,
    },
    {
        name: 'jasurbek',
        lastname:'otelbayev',
        age:18,
    },
]

function getFullName( a , b) {
    console.log(this.name , this.lastname , a , b);
}

getFullName.call(users[0] , 'eshmat' , 'tashmat')
// getFullName.call({name:'jasur' , lastname : 'none'})

//! apply

//! call bilan bir xil ishlaydi parametr qabulqilishida farq bor array korinishida qabul qiladi

getFullName.apply(users[0] , ['eshmat' , 'tashmat'])

//! bind
//call bilan bir xil ishalydi faqat funksiya qaytaradi yurgizmasa ishlamaydi
getFullName.bind(users[1] , 'eshmat' , 'tashmat')();