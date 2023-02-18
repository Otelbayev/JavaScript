//! 1

let count = (array) => {
    let str = array.join("").toLowerCase() , obj = {};
    for(const i of str){
        if(i in obj) obj[i]++;
        else obj[i] = 1
    }
    console.log(obj);
}
count(['webbrain' , 'academy'])

let arr2 = [0 , 1 , 2]
arr2[3] = 3
console.log(arr2);