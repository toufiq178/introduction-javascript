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


// function checkPassword(password) {

//     let reasons = [];
//     let length = password.length ;
//     // console.log(password);
//     let hasNumber = false ;
//     let hsUpperCase = false ;
//     let hasSpace = password.includes(' ');

//     for (let character of password){
//         // console.log(character);
        
//         if (character >= '0' && character <= '9' ) {
//             hasNumber = true ;
//         }

//         if (character >= 'A' && character <= 'Z') {
//             hsUpperCase = true ;
//         }
//     }
    
//     if (length < 8 ){
//         reasons.push('Length must be at least 8 ');
//     }
//     if (hasNumber == false) {
//         reasons.push(' Must contain at least 1 number');
//     }
//     if (hsUpperCase == false) {
//         reasons.push('Must contain at least 1 uppercase letter');
//     }
//     if (hasSpace == true) {
//         reasons.push('Must not contain spaces');
//     }
  
//     let isValid = false;
//     if (reasons.length == 0) {
//         isValid = true
//     }else{
//         isValid = false ;
//     }
//     return{
//         valid : isValid, 
//         reasons
//     }
// }

// let result = checkPassword('heYUGUYG 2');
// console.log(result);







// Problem 4: Shopping Bill Calculator
// Function name: calcBill(prices, items)
// Statement:  Calculate total bill amount and count how many times each item appears.
// Test case 1
// Input:
//      prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
//      items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

// Output:
// {
//   total: 376,
//   itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
// }

// Test case 2
// Input:
// prices = { pen: 10, book: 50 };
// items = ["pen", "pen", "book", "pen"];

// Output:
// {
//   total: 80,
//   itemCount: { pen: 3, book: 1 }
// }



// function calcBill(prices, items) {

//     let itemCount = {} ;

//     for( let item of items){

//         if (itemCount.hasOwnProperty(item)) {
            
//             itemCount[item] ++ ;
//         }else{

//             itemCount[item] = 1 ;
//         }

//     }

//     // console.log(itemCount);
//     let total = 0 ;

//     for(let item in itemCount){

//         let price = prices[item];
//         let itemQuantity = itemCount[item];
//         total = total + price * itemQuantity;     
//     }
    
//     return {
//         total,
//         itemCount
//     }
    
// }

// let output = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
// console.log(output);


// function removeDuplicate(numbers) {
    
//     let freshArr = [];
//     for(let num of numbers){

//         if (freshArr.includes(num)=== false) {
            
//             freshArr.push(num);
//         }
//     }
//     return freshArr ;
// }

// const arr = [1,1,1,1,1];
// const freshArr = removeDuplicate(arr);
// console.log(freshArr);



// function searchByPrefix(phoneBook, prefix) {
    
//     let names = [];
//     for ( let nm in phoneBook){
//         console.log(nm);
        
//         if(nm.startsWith(prefix)){
//             names.push(nm);
//         }
//     }
//     return names ;
// }

// const phoneBook = {
//     rahim: '0181' , 
//     karim: '0172',
//     rfi : '0193',
// }
// const prefix =  'r';
// const output =searchByPrefix(phoneBook , prefix);
// console.log(output);



function testStates(text) {
    
    let character = text.split('');
    // console.log(character);
    let freshCharacter = [];
    
    for( let freshChtr of character){
        
        if (freshChtr !== ' ') {
            
            freshCharacter.push(freshChtr);
        }
    }
    // console.log(freshCharacter);
    
    
    let vowelsArr = ['a' , 'e', 'i', 'o', 'u'];
    let vowels = 0;
    let consonant = 0 ;
    let characters = freshCharacter.length;
    let word = text.split(' ');
    let words = word.length ;


    for (let chtr of freshCharacter){

        let lowerCaseChtr = chtr.toLowerCase();
        // console.log(lowerCaseChtr);
        
        if (vowelsArr.includes(lowerCaseChtr) === true) {
            
            vowels ++ ;
        } else{
            consonant ++ ;
        }
    }
    console.log(vowels , consonant , characters , words);

    return {
        characters ,
        words ,
        vowels ,
        consonant,
    }
    
}

const input = testStates('JavaScript is fun to learn');
console.log(input);
