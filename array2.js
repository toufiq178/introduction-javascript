// const friends = ['elon', 'bill','mark','waren' ];

// for ( const friend of friends ){
//     // console.log(friend);  
// }

// for (let i = 0;  i<friends.length ; i++) {   
//     frnd = friends[i];
//     // console.log(frnd);   
// }

// const numbers = [212,21,33,13,31,424,53,312,133,2321];
// let i = 0 ;
// while (i <numbers.length) {    
//     num = numbers[i];
//     console.log(num);
//     i ++ ;   
// }




// ____________________REVERSE ARRAY ______________

// const numbers = [1, 3 ,4 ,5, 5, 5, 6, 6 ,7,8,9, 9];
// const reversed = numbers.reverse();
// console.log(reversed);



// const friends = ['saif', 'ovi', 'tasdid', 'jibon'];
// let friend = 0 ;
// let frnd = '';
// while (friend <friends.length) {    
//     // console.log(friend);
//     frnd = frnd  + friends[friend]+ ' ' ;
//     friend++;
// }
// console.log(frnd);



// for ( const friend of friends){
//     console.log(friend);    
// }

// let friend = ''
// for (let i = 0; i < friends.length; i++) {   
//     friend = friend + friends[i] + ' '   
// }
// console.log(friend);

// const numbers = [112,33,331,311,42,42];
// let number = '';
// for (let i = 0; i < numbers.length; i++) {   
//     number = number+ numbers[i] + ' ';   
// }
// console.log(number);


// let numbers = [9 ,7, 0, 4, 2, 1, 9];
// console.log(numbers.sort());


// let num = numbers.reverse();
// console.log(num);
// let reversed= '';
// // let rev = '';
// for (let i = 0; i < numbers.length; i++) {    
//     reversed = numbers[i] + reversed;
//     // rev = reversed + rev   
// }
// console.log(reversed);

// let rev_num = []
// for(let num of numbers){
//     // console.log(num);
//     rev_num.unshift(num);   
// }
// console.log(rev_num);


// let rev = [];
// for (let i = numbers.length -1; i >= 0; i--) {
//     console.log(numbers[i]);   
// }


// task 1
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let color = []
// for (let i = 0; i < colors.length; i++) {    
//     const clr = colors[i];
//     color.unshift(clr)    
// }
// console.log(color);
// console.log(color;



// // task2
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let num = []
// for (let i = 0; i < numbers.length; i++) {   
//     if(numbers[i] % 2 === 0){       
//         const n = numbers[i];
//         num.push(n);
//     }
// }
// console.log(num);


// Task 3
// const numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let n = ''
// for( let num of numbers){
//    n = numbers.join('') + num
// }
// console.log(n);




// task 4
// const statement = 'I am a hard working person'
// let stt =statement.split(' ');
// // console.log(stt);
// let reverse = ''
// for (let i = 0; i < stt.length; i++) {    
//     reverse =  stt[i]+ ' ' +reverse
// }
// console.log(reverse);


// Task 5
// let numbers = [1,2,3];
// console.log(numbers);
// let num = [...numbers];
// num[0]= 99;
// console.log(num);


// Task 6
// let friends = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ];

// let frnd = ''
// for (let friend of friends ){
    
    
//     // let name =Object.values[friend];
//     // name['name']='';

//     // console.log(Object.values[friend]);
    
//     for( let i in friend){
        
//         let key = friend[i];
//         // let value = friend[key];


//         // console.log(i ,'', key);
        
//         // let value = f.valueOf(friends);
//         // console.log(keys , value);
//     }
    
// }


// for (let friend of friends){
    
//     // console.log(friend);
//     const key = Object.keys ( friend );
//     const value = Object.values ( friend );
//     // console.log(key , value);
//     const  poperty = friend['scored'] ;
//     console.log(key , value);



// }

let student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

for (let i = 0; i < student.length; i++) {
    
    let n = student[i];
    console.log(n);
    
    
}


// Task 7

// let numbers =[
    //   [1, 2],
//   [3, 4],
//   [5, 6]
// ]

// numbers[1] =[99 , 4];
// console.log(numbers);
