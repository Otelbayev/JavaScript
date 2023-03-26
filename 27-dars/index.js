//! Proxy
let user = {
    name:'jasurbek',
    _stir: 123456,
    start :1,
    end:10
}

let proxy = new Proxy(user , {
    //! get 
    get(target , prop){
        // console.log(target);
        if(prop.startsWith("_")) return `acces for ${prop} is dineid`
        else return target[prop]
    },
    //! set
    set(target , prop , value){
        if(prop.startsWith("_")) return false
        else {
            target[prop] = value
            return true
        }
    },
    //!ownKeys
    ownKeys(targert){
        return Object.keys(targert).filter((v) => !v.startsWith('_'))
    },
    //!has
    has(targert , prop) {
        return targert.start <= prop && prop <= targert.end
    }
})

// console.log(2 in proxy);//!has


// console.log(proxy);
// for(let i in proxy) {
//     console.log(i); //! ownKeys
// }

// console.log(Object.keys(proxy))
// console.log(Object.values(proxy))
// console.log(Object.entries(proxy))

// proxy._stir = 78
// console.log(proxy);
//! targert => {name : 'jasurbek' , _stir: 123456}
//! prop => name  or _stir
// console.log(user);
// console.log(proxy._stir);


// proxy.age = 18
// console.log(proxy);

//! Reflect 


Reflect.set(user , "qwert" , "qwerty")
console.log(Reflect.get(user , 'name'));
console.log(user);