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


// function removeDuplicate(arr) {
    
//     let numbr = [];
//     for( const num of arr ){

//         if(numbr.includes(num) === false){

//             numbr.push(num);
//         }
//     }
//     return numbr ;
// }

// const numbers = [ 1, 3 , 4, 4, 2 , 4, 6, 7 ,4, 4,7, 3 ,2,];
// const number = removeDuplicate(numbers);
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

