//! CRUD
// create read update delate

//! Read!


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

// sortById(students)

//! Delate

let delateUser = (user) => {
    let res = user.filter((value) => value.id !== 1)
    console.log(res);
}
// delateUser(students)

//!Create

let addUser = (user) => {
    students = [...students , {...user}]
    console.log(students);
}

// addUser({id:students.length + 1, year:2019 , name:'webbrain'})