// Statement: Count how many times each word appears in a sentence and return the result as an object.
// Rules:
// Ignore case differences
// Ignore extra spaces

// function wordFrequency(sentence) {

//     let words = sentence.split(' ');
//     let wordCount ={}

//     for (let  word of words ){

//         // console.log(word);
//         let lowerCaseWord = word.toLowerCase();
//         // console.log(lowerCaseWord);

//         if (wordCount.hasOwnProperty(lowerCaseWord)){

//             wordCount[lowerCaseWord] ++;
//         }else{
//             wordCount[lowerCaseWord] = 1 ;
//         }
        
//     }
//     return wordCount ;
// }

// let output = wordFrequency("I love JS and I love coding and JS is fun Fun fUn");
// console.log(output);



// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }
// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" } 

// function analyzeMarks(marksObj) {
    
//     let total = 0 ;
//     let highestMark = -Infinity ;
//     let lowestMark = Infinity ;

//     let heightSubject = null ;
//     let lowestSubject = null
    
//     for(let mark in marksObj ){
//         // console.log(mark);
//         let value = markObj[mark];
//         // console.log(value);
//         total = total + value ;
        
//         if (markObj[mark] > highestMark) {
            
//             highestMark = markObj[mark];
//             heightSubject = mark ;

//         }
//         if (markObj[mark] < lowestMark) {
            
//             lowestMark = markObj[mark];
//             lowestSubject = mark ;
//         }
        
        
//     }
//     console.log(highestMark , lowestMark);
//     console.log(heightSubject , lowestSubject);
    
    

//     let average = total / Object.keys(markObj).length;
//     return {
//         total,
//         average,
//         highest : heightSubject + ' '+ highestMark ,
//         lowest : lowestSubject + lowestMark,

//     }
    
// }

// const markObj = { math: 78, english: 65, physics: 88, bangla: 55 } ;
// const result = analyzeMarks(markObj);
// console.log(result);


// // Problem 3: Password Strength Checker
// Function name: checkPassword(password)
// Rules:
// Length must be at least 8
// Must contain at least 1 number
// Must contain at least 1 uppercase letter
// Must not contain spaces
// Test case 1
// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }
// Test case 2
// Input:  "Hello123"
// Output: { valid: true, reasons: [] }


function checkPassword(password) {

    let reasons = [];
    let length = password.length ;
    // console.log(password);
    let hasNumber = false ;
    let hsUpperCase = false ;
    let hasSpace = password.includes(' ');

    for (let character of password){
        // console.log(character);
        
        if (character >= '0' && character <= '9' ) {
            hasNumber = true ;
        }

        if (character >= 'A' && character <= 'Z') {
            hsUpperCase = true ;
        }
    }
    
    if (length < 8 ){
        reasons.push('Length must be at least 8 ');
    }
    if (hasNumber == false) {
        reasons.push(' Must contain at least 1 number');
    }
    if (hsUpperCase == false) {
        reasons.push('Must contain at least 1 uppercase letter');
    }
    if (hasSpace == true) {
        reasons.push('Must not contain spaces');
    }
  
    let isValid = false;
    if (reasons.length == 0) {
        isValid = true
    }else{
        isValid = false ;
    }
    return{
        valid : isValid, 
        reasons
    }
}

let result = checkPassword('heYUGUYG 2');
console.log(result);
