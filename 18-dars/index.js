//! DDOS Attack

function getData() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
}

function getName() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
}

function getCached(func) {
    let cache = new Map()
    return function(){
        
    }
}

getData = getCached(getData)