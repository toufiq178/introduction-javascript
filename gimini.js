// Write a JavaScript code to find the largest number in an array using a loop.
// Input: 
// Expected Output: 89

// const numbers = [23, 56, 12, 89, 45, 7]

// let n = numbers[0]
// for (number of numbers){

//     if (number > n) {
        
//         n = number
//     }
// }
// console.log(n);


// const numbers = [2, 4, 6];

// let n = numbers[0];
// // console.log(n);


// for (let i = 0 ;i <numbers.length ; i++) {
   
//     // console.log(i * 2);
//     numbers[i] = numbers[i] * 2
//     // n =numbers[i]
    
    
// }
// console.log(numbers);
// const fruits = ['Apple', 'Banana', 'Mango'];

// // console.log(fruits);

// let n = ''
// for ( let i = 0 ; i <fruits.length ; i++ ){

//     let f = fruits[i];
//     console.log(f);
    
    
// }
// // console.log(n);

// let a = 10 ;
// let b = 20 ;

// console.log(a + b);


// let num = 5 ;

// if (num < 0) {
    
//     console.log('positive');
    
// }else{
//     console.log('nagtive')
    
// }

// const colors = ['Red', 'Green', 'Blue'];

// console.log(colors[0]);

// for (let i = 1; i <=10 ; i++) {
    
//     // console.log(i);
    
//     if (i % 2 === 0) {
        
//         console.log(i);
        
//     }
    
// }

// const colors = ['Red', 'Blue', 'Yellow', 'Green'];

// for (let i = 0; i < colors.length; i++) {
//     const element = colors[i];
//     // console.log(element);
    
//     if (element === 'Yellow') {
        
//         console.log('found it');
        
//     }
// }



// let total = 0
// for (let i = 0; i < marks.length; i++) {
    //     let element = marks[i];
    
    //     total = total+element
    
    // }
    // console.log(total);
    
    // const marks = [10, 20, 30, 40 , 50];

    // let t = []

    // for (let i = 0; i < marks.length; i++) {
    //     const element = marks[i];
    //     t.unshift(element)
        
    // }
    // console.log(t);

    // const numbers = [1,2,3]

    // let num = []

    // for (let i = 0; i < numbers.length; i++) {
    //     const element = numbers[i];
    //     console.log(element);

    //     num.push(element*10)

    // }
    // console.log(num);
    

    // const numbers = [10, -5, 22, -1, 30, -8];

    // let number = []

    // for (let i = 0; i < numbers.length; i++) {
    //     const element = numbers[i];
        

    //     if (element < 0) {
        
    //         // element = element (0) ; 
    //         number.push( 0 )
    //     } else{

    //         number.push (element)
    //     }
    // }

    // console.log(number);
    

// const items = [3, 8, 5, 12, 7, 10];
// let sum = 0;

// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
    
//     if (element % 2 === 0) {
        
//         sum = sum +element
//     }
// }
// console.log(sum);

// const scores = [45, 72, 10, 89, 55, 63];
// let max = scores[0]; // Start with the first number

// for ( let number of scores){


//     if (max < number) {
        
//         max = number;
        
       
//     }
// }
// console.log(max);

// const ages = [15, 22, 12, 30, 18, 9, 45];
// let allowed = [];

// for ( let age of ages){

//     if (age >= 18) {
        
//         allowed.push(age);
//     }
// }
// console.log(allowed);


// const fruits = ["Apple", "Banana", "Apple", "Orange", "Apple", "Grapes"];
// let count = 0

// for (let fruit of fruits){

//     if (fruit === "Apple") {
        
//         count ++;
//     }
// }
// console.log(count);

// // Expected Output: [15, 42, 7, 10]
// const mixedData = ["Apple", 15, "Banana", 42, "Orange", 7, 10, "Grapes"];
// let onlyNumbers = [];

// // Your loop and 'typeof' logic go here...
// for ( let data of mixedData){

//     if (typeof data === 'number') {
        
//         onlyNumbers.push(data);
//     }
// }

// console.log(onlyNumbers); 

// const num = [2, 5, 8, 10, 3];
// let results = [];

// // Your logic here...
// for(let n of num){

//     if (n > 5) {
        
//         results.push(n*10);
//     }
//     else{

//         results.push(n*2);
//     }
// }
// console.log(results);
// // Expected Output: [4, 10, 80, 100, 6]

// const users = [
//     { name: "Rakib", age: 25 },
//     { name: "Sumi", age: 18 },
//     { name: "Arif", age: 30 }
// ];

// let namesOnly = [];

// // Your loop here...
// for (let user of users){

//    let nm  = user.name
//     namesOnly.push(nm);

// }
// console.log(namesOnly); 
// // Expected Output: ["Rakib", "Sumi", "Arif"]



// const users = [
//     { name: "Rakib", age: 25 },
//     { name: "Sumi", age: 18 },
//     { name: "Arif", age: 30 },
//     { name: "Anika", age: 15 }
// ];

// let vips = [];

// for (let user of users){

//     if (user.age > 20) {
        
//         vips.push(user);
//     }
// }

// console.log(vips);
// /* Expected Output: [
//     { name: "Rakib", age: 25 },
//     { name: "Arif", age: 30 }
// ] 
// */


// const guestList = ["Abir", "Sumi", "Rakib", "Anika"];
// const showedUp = ["Sumi", "Anika"];
// let present = [];

// for ( let guest of guestList){

//     if (showedUp.includes(guest)) {
        
//         present.push(guest);
//     }
// }

// console.log("People present:", present);
// // Expected Output: ["Sumi", "Anika"]

// const fruits = ["Apple", "Banana", "Kiwi", "Strawberry", "Pear", "Watermelon"];
// let longWords = [];

// // Your loop here...
// for ( let fruit of fruits ){

//     if (fruit.length > 5) {
        
//         longWords.push(fruit)
//     }
// }

// console.log(longWords);
// Expected Output: ["Banana", "Strawberry", "Watermelon"]

// const students = ["Arif", "Sumi", "Anika", "Rakib", "Abir", "John"];
// let aCount = 0;

// // Your loop here...
// for ( let student of students){

//     if (student[0]=== 'A') {
        
//         aCount++;
//     }
// }


// console.log("Students starting with A:", aCount);
// // Expected Output: 3

// const groceries = ["Milk", "Egg", "Sugar", "Bread", "Sugar", "Butter"];
// let healthyList = [];

// // Your loop goes here...
// for( let gro of groceries){

//     if (gro !== 'Sugar') {
        
//         healthyList.push(gro);
//     }
// }


// console.log(healthyList);
// Expected Output: ["Milk", "Egg", "Bread", "Butter"]

// const dirtyData = ["Apple", null, "Banana", null, "Orange", "Mango"];
// let cleanedData = [];

// // Your logic here...
// for ( let dirty of dirtyData){

//     if (dirty !== null) {
        
//         cleanedData.push(dirty)
//     }
// }

// console.log(cleanedData);
// Expected Output: ["Apple", "Banana", "Orange", "Mango"]

const results = [
    { name: "Abir", passed: true },
    { name: "Sumi", passed: false },
    { name: "Rakib", passed: true }
];
let passList = [];

// Your loop here...
for ( let result of results){

    if (result.passed === true) {
        
        passList.push(result.name)
    }
}


// console.log(passList);
// // Expected Output: ["Abir", "Rakib"]

// const products = [
//     { name: "Shirt", price: 100 },
//     { name: "Shoes", price: 200 },
//     { name: "Pants", price: 150 }
// ];

// for(let product of products){

//     product.price = product.price - 10 ;}
// console.log(products);
// const items = [
//     { name: "Laptop", stock: 10 },
//     { name: "Mouse", stock: 3 },
//     { name: "Keyboard", stock: 12 },
//     { name: "Monitor", stock: 2 }
// ];

// let lowStockNames = [];

// // Start your code here...
// for( let item of items){

//     if (item.stock < 5) {
        
//         lowStockNames.push(item.name)
//     }
// }

// console.log(lowStockNames); 
// Expected: ["Mouse", "Monitor"]

// const products = [
//     { name: "Pen", price: 10, stock: 50 },
//     { name: "Book", price: 200, stock: 5 },
//     { name: "Bag", price: 500, stock: 2 }
// ];

// let totalValue = 0;

// // Code start here...
// for(let product of products){

//    let p =  product.price * product.stock
//     totalValue = totalValue + p
// }
// console.log(totalValue); 
// Expected: (10*50) + (200*5) + (500*2) = 2500

// const people = ["Abir", "Sumi", "Rakib", "Anika", "John"];

// // Start your loop here...

// for ( let p of people){

//     if (p === 'Rakib') {
        
//         console.log('found it');
//         break;
//     }
// }