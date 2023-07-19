//! CRUD
// create read update delate

//! Read!
//filter() sort() includes() find()

let students = [
    {id:1, year: 2004, name: 'Jasurbek'},
    {id:2, year: 2002, name: 'Sardor'},
    {id:3, year: 1999, name: 'John'},
    {id:4, year: 2001, name: 'Sarah'},
    {id:5, year: 2003, name: 'Elon'},
    {id:6, year: 2009, name: 'Mark'},
    {id:7, year: 2005, name: 'Bill'},
    {id:8, year: 1997, name: 'Jeck'},
    {id:9, year: 2006, name: 'Murad'},
]

let sortByYear = (students) => {
    let res = students.sort((a , b) => a.year - b.year)
    console.log(res);
}
// sortByYear(students);

let sortByAlphabet = (students) => {
    let res = students.sort((a , b) => a.name.localeCompare(b.name));
    console.log(res);
}
// sortByAlphabet(students);

let sortById = (students) => {
    let res = students.sort((a , b) => -a.id + b.id);
    console.log(res);
}

let prompt = (x) => {
    let res = students.filter((value) => value.name.toLocaleLowerCase().includes(x))
    console.log(res);
}
prompt('s')

// sortById(students)

//! Delate
//filter() splice()

let delateUser = (user) => {
    let res = user.filter((value) => value.id !== 1)
    console.log(res);
}
// delateUser(students)

//!Create
//use separate(...) distucture

let addUser = (user) => {
    students = [...students , {...user}]
    // console.log(students);
}

// addUser({id:students.length + 1, year:2019 , name:'webbrain'})

//!Update
//filter() map() find();

let updateUser = (data) => {
    let res = students.map((value) => {
        if(value.id == data.id) {
            return { ...value , [data.type] : data.value}
        }
        else {
            return value;
        }
    })
    console.log(res);
}

// updateUser({id:2 , type:'year' , value:'gulbashakar' })

// let obj = {
//     name:'jasurbek',
//     child: {
//         name:'inamjon',
//         age :17
//     }
// }

// const {age} = obj.child
// console.log(age);