

// function sum() {
    
//     console.log(' sum + sum');
//     console.log(' aefsum');
//     console.log(' suewqf');
//     console.log(' weww');
    
// }

// sum();

// function square ( num) {
    
//     // console.log(num);
//     const borgo = num* num ;
//     console.log(borgo);
    
// }

// square(8);
// square(85);
// square(48);
// square(84);
// square(44);

// function sum (paramiter1 , paramiter2 , paramiter3){

//     const jog = paramiter1 + paramiter2 + paramiter3;
//     console.log(jog);
// }
// sum(4, 5 , 77);

// function fruit ( f1 , f2 , f3) {
    
//     const fruits = f1 + f2 + f3 ;
//     console.log(fruits);
    
// }

// // const fruit1 = ['orange' , 'pinapple', 'starfruit']
// // const fruit2 = 'apple';
// // const fruit3 = 'mango';
// // fruit(fruit1 , fruit2 ,fruit3)

// // function numbers( num1 , num2 ) {
    
// //     const n = num1 + ' | '+num2 ;
// //     console.log(n);
    
// // }

// // const number1 = [1, 3, 5, 6, 9];
// // const number2 = [23, 53,  73, 13, 93];
// // numbers(number1 , number2)


// // function numbers(params1 , params2) {
    
// //     return params1 * params2 ;
// // }

// // const multiply = numbers (55 ,44 )
// // console.log(multiply);

// function jjk (j1 , j2 , j3) {
    
//     const total = j1 % j2 % j3 ;
//     // console.log(total);
//     return total ;
    
// }

// let j1 = 22 ;
// let j2 = 83 ;
// let j3 = 13 ;

// const total = jjk( j1 , j2 ,j3);

// // console.log(total);

// console.log(total);


// function doMath(price1 , price2) {
    
//     const sum = price1 + price2 ;
//     const divide = price1 / price2 ;
//     const diff = sum - divide ;
//     const multiply = diff * divide ;
//     const modulo = multiply % sum ;
//     const result = modulo * divide;

//     return result ;
// }

// const result = doMath( 40 , 50);
// console.log(result);


// function isOdd(n1 ) {
    
//     if (n1 % 2 === 1) {
        
//         return true ;
//     }else{
//         return false ;
//     }

    
// }

// const Odd1 = isOdd(5)
// console.log(Odd1);
// const Odd2 = isOdd(44)

// console.log(Odd2);

// function  isEvenOdd( str) {
    
//     if (str.length % 2 === 0) {
        
//         console.log('even');
        
//         return true
//     }else{

//         console.log('odd');
//         return false ;
//     }
// }
// const str = 'dhaqka'
// const strOddEven = isEvenOdd(str)
// console.log(strOddEven);


// function double(number , double) {
    
//     if (double === true) {
        
//         return number * 2; 
//     }
//     else{

//         return number * 3
//     }
// }

// const dd = double(40 , true);
// console.log(dd);
// const tt = double(40 ,false);
// console.log(tt);


// // array length
// function arr( arr) {
//     const length = arr.length;
//     return length ;
// }

// const array = [1, 3,4,5,6,9,2,2,2];
// const len = arr(array);
// console.log(len);



// function sum (params) {

//     let s = 0 ;
//     for( let number of params){

//         s = s + number;
        
//     }
//     return s ;
    
// }

// const arr = [2, 4, 2, 1, 5];
// const number = sum(arr);
// console.log(number);

function square(params) {
    
    let n = []

    for(let number of params){

        let square = number * number
        n.push(square);

    }
    return n;
}
const arr = [4, 7, 3, 8];
const sq = square(arr);
console.log(sq);
