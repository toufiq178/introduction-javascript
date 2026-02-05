// 1
// const num1 = 30 ;
// const num2 = 18 ;
// const sum = num1 + num2 ;
// console.log(sum);
// const sum1 = Math.max(num1 + num2);
// console.log(sum1);


// 2
// const num1 = 20 ;
// const num2 = 8 ;
// const subtract = num1 - num2 ;
// const multiply = subtract * num1 ;
// const divide = multiply / num2 ;
// console.log(divide);
// const result = (Math.min(num1 - num2) * num1) / num2 ;
// console.log(result);


// 3
// const num1 = 22 ;
// if (num1 % 2 === 0) {
//     console.log('even number');    
// }else{
//     console.log('odd number');   
// }


// 4
// const num = -4 ;
// if (num > 0) {
//     console.log('positive');    
// }else if (num < 0) {
//     console.log('negative');    
// }else{
//     console.log('zero');
// }


// 5
// const arr = [1 , 35, 12];
// let total = 0;
// for(const a of arr){
//     total = total + a ;
// }
// const avg = total / arr.length ;
// console.log( avg);


// 6
// const celsius = 33.33 ;
// const fahrenheit = (( celsius * 1.8 ) + 32).toFixed(2) ;
// console.log(fahrenheit);


// 7
// const width = 12 ;
// const length = 25 ;
// const area = width * length ;
// console.log(area);


// 8
// const num1 = 20 ;
// if (num1 % 3 === 0 && num1 % 5 === 0) {
//     console.log('yes divisible');
// }else{
//     console.log('no not divisible');
// }

// -----------------------------------------------------------

// 9
// var nm = 122 ;
// var nm = 100 ;
// console.log(nm);
// let num = 99 ;
// num = 22 ;
// console.log(num);
// const n = 55 ;
// console.log(n);


// // 10
// let num = 20 ;
// let nam = 'alif';
// let isMarried = false ;
// console.log(typeof num +' num', typeof nam + 'name' , typeof isMarried + 'married');


// 11
// let number = parseInt('12')
// console.log(number);


// 12 
// let number = 12 ;
// console.log(number.toString());


// 13
// let num1 = 1 ;
// let num2 = 'dsf';
// console.log(num1 * num2);

// -----------------------------------------------------------

// 14
// const age = 19 ;
// if (age >= 18) {
//     console.log('vote dite parbe');
// }else{
//     console.log('parbe na vote dite');  
// }


// 15 
// const number = 100 ;
// if (number > 100) {
//     console.log('number bigger than 100');    
// }else if (number === 100) {
//     console.log('number equal to 100'); 
// }else{
//     console.log('number smaller than 100');    
// }


// 16
// const mark = 44 ;
// if (mark >= 80) {
//     console.log('you got a+');    
// }else if (mark >= 70) {
//     console.log('you got a');   
// }else if (mark >= 60) {
//     console.log('you got b');   
// }else if (mark >= 50) {
//     console.log('you got c');   
// }else if (mark >= 40) {
//     console.log('you got d');   
// }else if (mark < 40) {
//     console.log('you are fail');    
// }


// 17
// let year = 2100;
// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) {
//     console.log('yes this was leap Year');
// }else{
//     console.log('no is not leap year');   
// }


// 18 
// let num1 = [32,55,23];
// let highest = -Infinity ;
// for(let n of num1){    
//     if (highest < n) {      
//         highest = n;
//     }
// }
// console.log(highest);


// 19
// const gmail = 'gmaisl';
// const password = 'password';
// if (gmail === 'gmail'&& password === 'password') {
//     console.log('login');   
// }else{
//     console.log('try again');    
// }


// 20
// const number = 21 ;
// number % 2 === 0 ? console.log('even') : console.log('odd');

// ---------------------------------------------------------------------------------

// // 21 
// for (let i = 1; i <= 10 ; i++) {
//     console.log(i); 
// }


// 22
// let even = [];
// for (let i = 1; i <50 ; i++) {
//     if (i % 2 === 0) {
//         even.push(i);
//     }
// }console.log(even);


// 23
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }


// 24
// let num = 3 ;
// for (let i = 1; i <=10; i++) {  
//     let result = num * i ;
//     console.log(num + ' x ' + i + ' = ' +result);
// }


// 25
// let divideBy3 = [];
// for (let i = 1; i <=100; i++) {
//     if (i % 3 === 0) {
//         divideBy3.push(i);
//     }
// }console.log(divideBy3);


// 26
// let sum = 0;
// for (let i = 1; i <=10; i++) {
//     sum += i ;
// }console.log(sum);


// 27
// for (let i = 0; i < 100; i++) {
//    if (i === 10) {
//         console.log(i);
//         break
//     }
// }

// -------------------------------------------------------------------------------

// 28
// const names= ['rofik', 'sofik', 'jofik', 'ofik'];
// console.log(names);


// 29
// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.length);


// // 30
// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.shift(numbers), numbers.unshift(numbers));


// 31
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = 0 ;
// for(let num of numbers){
//     total = total + num ;
// }console.log(total);


// 32
// const arr = [12,31,56,424,99,81];
// let even = [];
// for(let a of arr){
//     if (a % 2 === 0) {
//         even.push(a);
//     }
// }console.log(even);


// 33
// const arr = [12,31,56,424,99,81];
// let largest = -Infinity ;
// for(let a of arr){
//     if(largest < a){

//         largest = a;
//     }
// }console.log(largest);


// 34
// const arr = [12,31,56,424,99,81];
// let reverse = [];
// for(let a of arr){
//    reverse.unshift(a); 
// }console.log(reverse);


// 35
// let numbers = [10, 5, 100, 20, 1];
// numbers.sort((a,b) => a - b);
// console.log(numbers);



// 36
// const arr = [12,22,56,22,99,22];
// let newArr = [];
// for( let a of arr){
//     if (newArr.includes(a)===false) {
//         newArr.push(a)
//     }
// }console.log(newArr);

// -------------------------------------------------

//37
// let str = 'bangladesh is a beautiful country';
// console.log(str.length);


// 38
// let str = 'bangladesh is a beautiful country';
// console.log(str.toUpperCase());


// 39
// let str = 'bangladesh is a beautiful country';
// let split = str.split(' ');
// console.log(split);
// for(let s of split){
//     // console.log(s);
//     if (s == 'bangladesh') {
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }


// 40
// let str = 'bangladesh is a beautiful country';
// let split = str.split(' ');
// console.log(split);
// for(let i of split){
//     console.log(i);
// }


//41
// let str = 'bangladesh is a beautiful country';
// let reverse = ''
// for(let i of str){
//     reverse = i + reverse ;
// }console.log(reverse);


// 42
// const str = 'maiipoudam'
// let reverse = str.split('').reverse().join('');
// console.log(reverse);
// if (str === reverse) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// -----------------------------------------------------------------

// 43
// const studentInfo = {
//     name: 'rofik',
//     roll : 20 ,
//     class: 10,
// }


// 44
// const studentInfo = {
//     name: 'rofik',
//     roll : 20 ,
//     class: 10,
// }
// console.log(Object.keys(studentInfo));


// 45
// const studentInfo = {
//     name: 'rofik',
//     roll : 20 ,
//     class: 10,
// }
// console.log(Object.values(studentInfo));


// 46, 47 
// const studentInfo = {
//    class : 'rofik',
//     roll : 20 ,
//     name : 10,
// }
// console.log(studentInfo.hasOwnProperty('class'));
// let got = false ;
// for(let obj in studentInfo){
    
//     if (obj === 'name') {
//         got = true;
//     }
// }console.log(got);

// ----------------------------------------------------------------------------------------

// 48
// function sumTotal(n1 ,n2) {
//     let sum = n1 + n2;
//     return sum;
// }
// let sum = sumTotal(7,9);
// console.log(sum);


// 49
// function even(n1) {
//     if (n1 % 2 === 0) {
//         console.log("even");
//     }else{
//         console.log('odd'); 
//     }
// }
// even(8);


// 50
// function sumArr(arr){
//     let total = 0 ;
//     for(let sum of arr){
//         total += sum
//     }
//     return total;
// }
// const arr = [1,4,2,3,5];
// const sum = sumArr(arr);
// console.log(sum);


// 51 
// function reverseStr ( str){
//     let reverse = str.split('').reverse().join('');
//     return reverse ;
// }
// const str = 'bangladesh';
// const rev = reverseStr(str);
// console.log(rev);


// 52
// function isLeapYear(Year) {
//     let leap = false ;
//     if (Year % 4 === 0 && Year % 100 !== 0 || Year % 400 === 0 ) {
//         leap = true;
//     }
//     return leap ;
// }
// let leap = isLeapYear(2024);
// console.log(leap);


// 53
// function largest(arr) {
//     let largest = 0;
//     for(let l of arr){
//         if (largest < l) {
//             largest = l;
//         }
//     }
//     return largest ;
// }
// const arr = [1,4,2,6,7,4];
// const lar = largest(arr)
// console.log(lar);


// 54
// function inchToFeet(params) {
//     let feet = (params / 12).toFixed(2);
//     return feet ;
// }
// const feet = inchToFeet(68);
// console.log(feet);


// 55
// function calculator(num1 , num2 , condition) {
//     if (condition === 'add') {
//         let sum = num1 + num2 ;
//         return ("sum : " + sum )
//     }else
//     if (condition === 'subtract') {
//         let sum = num1 - num2 ;
//         return ("sum : " + sum )
//     }else
//     if (condition === 'multiply') {
//         let sum = num1 * num2 ;
//         return ("sum : " + sum )
//     }else
//     if (condition === 'divide') {
//         let sum = num1 / num2 ;
//         return ("sum : " + sum )
//     }else{
//         return 'please add condition'
//     }
// }
// const calculation = calculator(12 , 10 , 'divide');
// console.log(calculation);


// --------------------------------------------------------------------------


// 56
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// let total = 0 ;
// for (let num of numbers){
//     total+= num;
// }
// console.log(total / numbers.length);


// 57
// const arr = [1,1,1,1,1];
// let unique = [];
// for(let a of arr){
//     if (unique.includes(a)=== false) {
//         unique.push(a);
//     }
// }
// console.log(unique);


// 58 
// const student = {
//     name : 'rafi',
//     roll : 22 ,
//     result : {
//         math : 100,
//         english: 300,
//         science : {
//             biology : 60 ,
//             chemistry : 80,
//             physis : 99 ,
//         }
//     }
// }
// const physis = student.result.science.physis ;
// console.log(physis);
