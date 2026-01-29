// let maxNumber = 0;
// for (let i = 0; i < number.length; i++) {
    
//     let num = number[i];
//     // console.log(num);

//     if (num > maxNumber) {
    
//         maxNumber = num;


//     }
// }
// console.log(maxNumber);



// let maxNumber= 0;
// for( let number of numbers){
    
//     if (number > maxNumber) {
    
//         maxNumber = number;

//     }
// }
// console.log(maxNumber);




// const numbers = [10, 15, 20, 25, 30, 35];

// let count = 0 ;

// for (let i = 0; i < numbers.length; i++) {
    
//     let num = numbers[i];
//     if (num % 2 === 1) {
        
//         count ++;
        
//     }
    
// }
// console.log(count);

// const number = [5, -2, 9, -7, 3, -1];

// let num = [];

// for (let i = 0; i < number.length; i++) {
//     let n = number[i];

//     if (n >= 0) {
        
//         num.push(n);
//     }
    
// }
// console.log(num);

const webDeveloper = ['html', 'css', 'js'];

let web = []

for (let i = 0; i < webDeveloper.length; i++) {
    
    let w = webDeveloper[i];
    console.log(w.toUpperCase());
    let y = w.push(web)
    
    
    console.log(y);
}