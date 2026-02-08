// function sum(num1 , num2) {
    
//     console.log(arguments [1]);
//     console.log(num1 , num2);
    
// }

// sum(1 ,3 ,4,3);




const products = [
    {id : 1 , name: "xioami phone" , price : 30000 },
    {id : 2 , name: "oppo phone" , price : 23000 },
    {id : 3 , name: 'i phone' , price : 220000 },
    {id : 4 , name: 'samsung phone' , price : 110000 },
    {id : 5 , name: 'levona Phone', price : 16000 },
    {id : 6 , name: 'infinix Phone' , price : 19000 },
    {id : 7 , name: 'tab', price : 55000 },
    {id : 8 , name: 'pc' , price : 300000 },
    {id : 9 , name: 'laptop', price : 130000 },
];


function matchedProducts(products , search) {

    let matched = [];

    for( const product of products){

        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            
            matched.push(product);
        }
    }
    return matched ;
}

const matched = matchedProducts(products , 'phone');
console.log(matched);
