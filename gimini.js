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

const num = [2, 5, 8, 10, 3];
let results = [];

// Your logic here...
for(let n of num){

    if (n > 5) {
        
        results.push(n*10);
    }
    else{

        results.push(n*2);
    }
}
console.log(results);
// Expected Output: [4, 10, 80, 100, 6]