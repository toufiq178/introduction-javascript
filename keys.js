// const computer = {

//     brand : 'lg',
//     price : 50000,
//     processor : 'amd',
//     ssd: '256gb'
     
// }

// const names = Object.keys(computer);
// console.log(names);

// const fruit ={

//     name : "banana",
//     color :'yellow',
//     isFresh : true

// }

// const value = Object.values(fruit);
// console.log(value);


const collage ={

    name: 'agc',
    class : ['11','12'],
    event :['26 march', '21 feb', '16 dec'],
    unique : {
        color : 'blue'
    }
}

collage.unique.color = 'red'

const key = collage.unique.color
console.log(key);

delete collage.class;
collage.event[1]='20 sep'
console.log(collage.event[1])
console.log(collage);
