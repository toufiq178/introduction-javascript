// function finalScore(obj) {
    
//     const questions = obj.correct + obj.incorrect + obj.blank;

//     if (questions !== 80 || typeof questions !== 'number') {
//         return 'invalid';
//     }

//     const correctMark = obj.correct * 1.25 ;
//     const incorrectMark = obj.incorrect * 0.75 ;
//     const skipMark = obj.blank * 0 ;

//     const finalScore = (correctMark - incorrectMark ) ;
//     return Math.round(finalScore) ;

    
// }

// const obj= { correct: 50, incorrect: 20, blank: 10 }

// const score = finalScore(obj);
// console.log(score);

// problem 1
function electricBill(unit, rate) {
   // your code here

   if (typeof unit !== 'number' || typeof rate !== 'number' || unit <= 0 || rate <=0) {
        return 'Invalid';
   }

   const totalBill = (unit * rate ).toFixed(2);
   return totalBill ;
}

const result = electricBill(50 , 2);
console.log(result);


// problem 2
function validUsername(username) {
   // your code here

   
   
   if (typeof username !== 'string') {
       return 'Invalid'
    }
    
    const firstCharacter = username[0];
    
    if (username.length < 5 || username.length > 15) {
        return false ;

    } else if (username.includes(' ') || username === '') {
        return false ;

    }else if (!((firstCharacter >= 'a' && firstCharacter <= 'z') ||(firstCharacter >= 'A' && firstCharacter <= 'Z') ) ) {
        return false;
    }else{
        return true ;
    }

}

const username = validUsername("ArSa1j");
console.log(username);


// PROBLEM 3
function loanEligible(info) {
   // your code here

   if (typeof info !== 'object') {
    return 'Invalid';

   }

   if ( !( info.hasOwnProperty('age') &&  info.hasOwnProperty('income')  && info.hasOwnProperty('hasJob')  )) {
        return 'invalid';
   }

    if (info.age < 21 || info.income <20000 || info.hasJob === false ) {
        
        return false ;
    } else {
        return true ;
    }

}


const obj =loanEligible({ age: 25, income: 30000 }) ;
console.log(obj);

