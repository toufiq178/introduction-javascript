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
let country = 'bangAladesh is a beAautiful country';
let words = country.split (' ')
for( let i = 0; i<words.length; i ++){

    words[i]= words[i][0].toUpperCase()+ words[i].substring(1) ;

};
console.log(words.join(' '));


