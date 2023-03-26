//! Proxy
let user = {
    name:'jasurbek',
    _stir: 123456
}
//! get 
let proxy = new Proxy(user , {
    get(target , prop){
        // console.log(target);
        if(prop.startsWith("_")) return `acces for ${prop} is dineid`
        else return target[prop]
    }
})

//! targert => {name : 'jasurbek' , _stir: 123456}
//! prop => name  or _stir
// console.log(user);
// console.log(proxy._stir);

//! set

proxy.age = 18
// console.log(proxy);

let user1 ={
    username:'jasur',
    password:'Jasurbek2004'
}

let proxy1 = new Proxy(user1 , {
    set(targert , prop , value){
        if(prop = 'password') return false
        targert[prop] = value
        return true
    }
})

proxy1.none = "none"

console.log(proxy1)
