//  inch to feet

// function inchToFeet(inch) {
    
//     const feet = inch / 12 ;
//     return feet

// }

// const feet = inchToFeet(75);
// console.log(feet);



// function inchToFeet(inch) {
    
//     const feetFraction = inch / 12 ;
//     const feet = parseInt(feetFraction);
//     const ih = inch % 12;
//     const inchFeet = feet +' foot ' + ih + ' inch ' 
//     return inchFeet

// }

// const feet = inchToFeet(75);
// console.log(feet);

// function mileToKilometers(mile) {
    
//     const kilo =  mile * 1.60934 ;
//     return kilo ;
// }
// const kilo = mileToKilometers(10);
// console.log(kilo);


// function leapYear(year) {
//     if (year % 4 === 0) {
        
//         return true ;
//     }else{
//         return false
//     }
// }
// const year = leapYear(2021);
// console.log(year);

// function leapYear(year) {
    
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) {
        
//         return true ;
//     }else{
//         return false ;
//     }
// }

// const year1 = leapYear(1900);
// const year2 = leapYear(2000);
// const year3 = leapYear(2100);
// const year4 = leapYear(2024);

// console.log(year1 , year2 , year3 , year4);



//  avg off even numbers use function

// function evenAvg(numbers) {
    
//     let eLentgh =[]
//     let even = 0
//     for (const number of numbers){

//         if (number  % 2 === 0) {
            
//             eLentgh.push(number);
//             even = even + number
//         }
//     }

//     const eAvg = even / eLentgh.length 
//     return eAvg;
    

// }
// const numbers = [13, 56, 63, 90, 34, 77];
// const eAvg = evenAvg(numbers);
// console.log(eAvg);


// function removeDuplicate(arr ) {
    
//     let numbr = [];
//     for( const num of arr ){

//         if(numbr.includes(num) === false){

//             numbr.push(num);
//         }
//     }
//     return numbr ;
// }

// const numbers = [ 1, 3 , 4, 4, 2 , 4, 6, 7 ,4, 4,7, 3 ,2,];
// const number = removeDuplicate(numbers , 5);
// console.log(number);


// function removeDuplicate(allName) {
    
//     let correctName = [];
//     for(const nm of allName){
//          if (correctName.includes(nm)=== false) {
            
//             correctName.push(nm);
//          }
//     }

//     return correctName;
// }

// const names = ['bb' , 'nn', 'mm', 'bb', 'mm', 'uu', 'oo'];
// const nm = removeDuplicate(names);
// console.log(nm);

// const max = Math.min (2 ,3 ,3 ,4,7 ,40)
// console.log(max);
// const abs = Math.abs (2 - 40)
// console.log(abs);
// const randm = Math.round(3.7)
// console.log(randm);
// const flr = Math.floor(3.1)
// console.log(flr);
// const celi = Math.ceil(3.1)
// console.log(celi);
// const rn = Math.random(3.1)*10
// console.log(rn);
// const p = Math.pow(2,3)
// console.log(p);
// const p = Math.sqrt(8)
// console.log(p);

// for (var i = 0; i < 5; i++) {
//  	 setTimeout(function () {
//  	console.log(i);
//   }, 100);
// }

// let a = 'stttt';
// let b = 9 ;

// let temp = a ;

// a = b ;
// b = temp ;

// console.log(a , b);


// function name(params , para1) {
    

// }

// const today = new Date('');
// const date = new Date('2050-10-26');
// console.log(date.getMonth());
// console.log(date.getDay());
// const sdate = new Date(2050,1,  26)
// sdate.setMonth(10);
// console.log(sdate.toLocaleString('en-GB'));


// 

let a = 5 ;
let b = 9 ;

let temp = a ;

a = b ;
b = temp ;
console.log(a , b);

let x = 8 ;
let y = 9 ;

[x,y] = [y,x];
console.log(x,y);
