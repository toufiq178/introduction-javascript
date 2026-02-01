// Take four parameters. Multiply the four numbers and then return the result

// function multiply (p1 ,p2 ,p3 ,p4) {
    
//     let Multiply = p1 * p2 * p3 * p4 ;
//     return Multiply ;
// }
// const m = multiply(5,6,8,4);
// console.log(m);




// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function oddEven( params) {
    
//     if (params % 2 === 1 ) {
        
//         // params * 2 ;
//         return params * 2
//     }else{

//         return params / 2 ;
//     }
// }

// const number = oddEven(8)
// console.log(number);




// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(arr) {
    
//     let sum = 0
//     let avg = 0
//     for (let i = 0; i < arr.length; i++) {
    
//         sum += arr[i]
              
        
//     }
//     return sum / arr.length
// }

// const arr = [4, 6, 8, 9, 5];
// const avg = make_avg(arr);
// console.log(avg);




// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


// function countZero(params) {
    
//     let count = 0
//     for( let c of params){

//         if (c === '0') {
            
//             count++;
//         }
//     }
//     return count ;

// }

// const binaryString = '10101010'
// const count = countZero(binaryString);
// console.log(count);

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function oddEven(params) {

    if (params % 2 === 0) {
        
        return 'even';
    }
    else{
        return 'odd';
    }
}

const odd_even = oddEven(8);
console.log(odd_even);

