// const heights2 = [167, 190, 120, 165, 137];


// let small = heights2[0] ;

// for (let i = 1; i < heights2.length; i++) {
//     const h = heights2[i];
//     // console.log(h);
    
//     if (h < small) {
        
//         // h++;
//         small = h
//         // break;
        
//     }
    
// }
// console.log(small);



// Find the friend with the smallest name.
// const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// let nam = names[0]

// for (let i = 1; i < names.length; i++) {
//     let n = names[i];
//     // console.log(n);
    
//     if (n.length < nam.length ) {
        
//         nam = n

//     }
    
// }

// console.log(nam);


// Loop through an object and print the key-value pairs with their types
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for ( let object in myObject){


    let key = object ;
    let value = myObject[object];

    console.log('key :' , key ,'|' , 'type : ', typeof value);
    
}


