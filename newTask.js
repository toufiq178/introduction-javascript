// const heights2 = [167, 190, 120, 165, 137];


// let small = heights2[0] ;

// for (let i = 1; i < heights2.length; i++) {
//     const h = heights2[i];
//     // console.log(h);
    
//     if (h < small) {
        
//         // h++;
//         small = h
//         // break;
        
//     }
    
// }
// console.log(small);



// Find the friend with the smallest name.
// const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// let nam = names[0]

// for (let i = 1; i < names.length; i++) {
//     let n = names[i];
//     // console.log(n);
    
//     if (n.length < nam.length ) {
        
//         nam = n

//     }
    
// }

// console.log(nam);


// Loop through an object and print the key-value pairs with their types
// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// for ( let object in myObject){


//     let key = object ;
//     let value = myObject[object];

//     console.log('key :' , key ,'|' , 'type : ', typeof value);
    
// }


// Write a JavaScript code to get only the odd numbers from an array and store them in a new array.
// Expected Output: [15, 25, 35]

// const numbers = [10, 15, 20, 25, 30, 35];

// // let num = ''
// let n = []
// for (let i = 0; i < numbers.length; i++) {

//     const element = numbers[i];

//     if (element % 2 === 1) {
        
//         n.push(element)
        
//     }
    
// }
// console.log(n);

// Use a loop to calculate the total sum of all numbers in an array.
// Input:
// Expected Output: 1000

//  const prices = [100, 200, 300, 400];

//  let p = 0
//  for (let i = 0; i < prices.length; i++) {

//     const element = prices[i];    
//     p = element + p
// }
// console.log(p);
// //  console.log(p);
 
// Find the Longest Word
// Given an array of strings, find the word with the most characters and print it.
// Expected Output: 'Programming' (or 'Development')
// Input: 
// const names = ['Programming', 'Hero', 'Web', 'Demvelopment'];

// let l = names[0]

// for ( let i of names){

//     if (i.length > l.length) {
        
//         l = i
//     }
// }console.log(l);



// let n = names[0]

// for (let i = 0; i < names.length; i++) {

//     const element = names[i];
//     // console.log(element);
    
//    if (element.length > n.length) {
    
//         n = element
    
//    }

    
// }console.log(n);



// Square the Numbers
// Create a new array that contains the square of each number from the original array.
// Expected Output: [4, 9, 16, 25]
// Input:


// let n = []

// for( let i  of numbers){
//     n.push(i * i)
// }
// console.log(n);

// const numbers =  [2, 3, 4, 5] ;

// let num = [];
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
    
//     num.push(element * element);
// }
// console.log(num);


// Given an array of products, print only the names of products that cost more than 500.
// Input:
// javascript

// Given an array of products, print only the names of products that cost more than 500.
// Expected Output:
// Laptop
// Monitor
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Mouse", price: 30 },
//   { name: "Monitor", price: 600 }
// ];


// for ( let product of products) {

//     if (product.price > 500) {
        
//         console.log(product.name );
//         // console.log(product.name ); 
//     }   
    
// }


