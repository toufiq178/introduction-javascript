// // task 1

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// const value = colors['golden rod']
// console.log(value);


// // task 2
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car['passenger capacity'] = 5;
// console.log(car);



// // task 3
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// const values = student.physics.marks;
// console.log(values);


// // task 4
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// const keys = Object.keys(student);
// console.log(keys.length)


// task 5
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};


// let keys = Object.keys(myObject);
// let values = Object.values(myObject);

// console.log(keys , values);

for ( let prop in myObject){
    // console.log(prop);
    console.log('key :', prop , "|", 'type:', typeof myObject[prop]);
}