// // function finalScore(obj) {
    
// //     const questions = obj.correct + obj.incorrect + obj.blank;

// //     if (questions !== 80 || typeof questions !== 'number') {
// //         return 'invalid';
// //     }

// //     const correctMark = obj.correct * 1.25 ;
// //     const incorrectMark = obj.incorrect * 0.75 ;
// //     const skipMark = obj.blank * 0 ;

// //     const finalScore = (correctMark - incorrectMark ) ;
// //     return Math.round(finalScore) ;

    
// // }

// // const obj= { correct: 50, incorrect: 20, blank: 10 }

// // const score = finalScore(obj);
// // console.log(score);

// // problem 1
// function electricBill(unit, rate) {
//    // your code here

//    if (typeof unit !== 'number' || typeof rate !== 'number' || unit <= 0 || rate <=0) {
//         return 'Invalid';
//    }

//    const totalBill = (unit * rate ).toFixed(2);
//    return totalBill ;
// }

// const result = electricBill(50 , 2);
// console.log(result);


// // problem 2
// function validUsername(username) {
//    // your code here

   
   
//    if (typeof username !== 'string') {
//        return 'Invalid'
//     }
    
//     const firstCharacter = username[0];
    
//     if (username.length < 5 || username.length > 15) {
//         return false ;

//     } else if (username.includes(' ') || username === '') {
//         return false ;

//     }else if (!((firstCharacter >= 'a' && firstCharacter <= 'z') ||(firstCharacter >= 'A' && firstCharacter <= 'Z') ) ) {
//         return false;
//     }else{
//         return true ;
//     }

// }

// const username = validUsername("ArSa1j");
// console.log(username);


// // PROBLEM 3
// function loanEligible(info) {
//    // your code here

//    if (typeof info !== 'object') {
//     return 'Invalid';

//    }

//    if ( !( info.hasOwnProperty('age') &&  info.hasOwnProperty('income')  && info.hasOwnProperty('hasJob')  )) {
//         return 'invalid';
//    }

//     if (info.age < 21 || info.income <20000 || info.hasJob === false ) {
        
//         return false ;
//     } else {
//         return true ;
//     }

// }


// const obj =loanEligible({ age: 25, income: 30000 }) ;
// console.log(obj);



// problem 1

function groceryDiscount(price, discount) {
   // your code here

   if ( !(typeof price ==='number' && typeof discount ==='number')) {
        return 'Invalid';

    }else if (price < 0  ||  discount < 0 || discount > 100) {
        
        return 'Invalid';
    }

    const newPrice = price - (price * discount / 100 );
    return newPrice.toFixed(2) ;

}

const finalPrice = groceryDiscount(1000, 100);
console.log(finalPrice);



// problem 2
function validMobile(mobile) {
   // your code here

   if (typeof mobile !== 'string') {
        return 'Invalid';
   }

   if ( mobile.length !== 11) {
        return false;

   }else if (mobile.startsWith('01') !== true) {
        return false ;
   }

   const num = mobile.split('');

   for(let n of num){
    if (n < 0 || n > 9) {
        
        return false'
    
    }
   

}

const number = validMobile(["01712345678"]);
console.log(number);




//problem 3
function studentGrade(student) {
   // your code here
   
    if (!(student.hasOwnProperty('name') === true && student.hasOwnProperty('marks') === true )) {
       return 'Invalid';

    }
    
    if (student.marks < 0 || student.marks > 100) {
        return 'Invalid';
 
    }else if (student.marks >= 90 && student.marks <= 100 ) {
        return 'A';

    } else if (student.marks >= 80 && student.marks <= 89 ) {
        return 'B';
        
    } else if (student.marks >= 70 && student.marks <= 79 ) {
        return 'C';
        
    } else if (student.marks >= 60 && student.marks <= 69 ) {
        return 'D';
        
    } else if (student.marks < 60 ) {
        return 'F';
        
    } 


}


const grade = studentGrade("Raj");
console.log(grade);




