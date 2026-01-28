// let country = 'bangAladesh is a beAautiful country';
// // console.log(country.length);
// let count = 0 ;

// for (let letter of country){

    
//     if (letter === 'A' || letter ===  'a') {
        
//         count++;
//     }
// }
// console.log(count);


// TASK 3

// let country = 'education';
//  let vowels = true ;
// for (letter of country ){

//     if (country.includes('a') && country.includes('e') && country.includes('i') && country.includes('o') && country.includes('u')  ) {
        
//         vowels = true ;
        
        
//     } else {
        
//         vowels = false ;
        
//     }
// }

// console.log(vowels);

// let country = 'educaton';
// let vowels = country.includes('a') && country.includes('e') && country.includes('i') && country.includes('o') && country.includes('u') ;
// console.log(vowels);


//  TASK 4
// let task = 'sjsXwwx';
// // let i = task.includes('x')
// let replace = task.replace('x', 'y').replace ('X','Y')
// console.log(replace);



// task 5
// let country = 'bangAladesh is a beAautiful country';
// let words = country.split (' ')
// for( let i = 0; i<words.length; i ++){

//     words[i]= words[i][0].toUpperCase()+ words.slice[1] ;

// };
// console.log(words.join(' '));


// let country = 'brazil is a football country';
// let word = country.split(" ");
// // console.log(word);
// let str = '';

// for( let i = 0 ; i <word.length ; i++){

//     let words = word[i];
//     let newWord = words[0].toUpperCase() + words.slice(1)
//     str += newWord + " "
    
    
// }
// console.log(str);





// let cricket = 'cricket is a famous game in a asia.'
// let string = cricket.split(' ');
// // console.log(string);
// let string2 = '' ;

// for (let i = 0; i < string.length; i++) {
    
    
//     let word = string[i] ;
//     // console.log(word);
//     let newWord = word[0].toUpperCase() + word.slice(1);
//     string2 =  string2 + newWord + ' '
        
// }
// console.log(string2);























let football = ' rolando is a greatest football player in the world '
let rolando = football.trim().split(' ');
// console.log(rolando);

let great = '';

for (let i = 0; i < rolando.length; i++) {
    // console.log(i);
    let ball = rolando[i];
    // console.log(ball);
    let newBall = ball[0].toUpperCase() + ball.slice(1)
    great = great+' '+ newBall

    
}
console.log(great);


