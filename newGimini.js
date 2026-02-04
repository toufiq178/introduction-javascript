// // Expected Output: ```javascript { Grocery: 250, "Personal Care": 165, totalSpend: 415 }
// const itemsDetail = [
//   { name: "Rice", price: 70, category: "Grocery" },
//   { name: "Soap", price: 45, category: "Personal Care" },
//   { name: "Oil", price: 180, category: "Grocery" },
//   { name: "Shampoo", price: 120, category: "Personal Care" }
// ];

// function categoryWiseBill(itemsDetail) {

//     let groceryTotal = 0 ;
//     let personalCareTotal = 0;

//     for( let items of itemsDetail){
//         // console.log(items);
//         // console.log(items.name);
//         // console.log(items.price);
        
//         if (items.category === 'Grocery') {         
//             groceryTotal = groceryTotal + items.price ;
            
//         }else if (items.category === "Personal Care" ) {
//             personalCareTotal = personalCareTotal + items.price ;
//         }

        
//     }    

//     const totalSpend = groceryTotal + personalCareTotal ;

//     return {
//         Grocery : groceryTotal ,
//         "Personal Care" : personalCareTotal,
//         totalSpend,
//     }
// }

// const output = categoryWiseBill(itemsDetail);
// console.log(output);


// Statement:
// Return total expense, average expense, highest expense category, and lowest expense category.
// { total: 15200, average: 3800, highest: "rent", lowest: "transport" }

// function analyzeExpenses(expensesObj) {

//     let total = 0 ;
//     let highest = - Infinity ;
//     let lowest = Infinity ;
//     let highestName = null ;
//     let lowestName = null ;

//     for ( let expenses in expensesObj){
       
//         total += expensesObj[expenses] ;

//         if(expensesObj[expenses] > highest){

//             highest = expensesObj[expenses];
//             highestName = expenses ;
//         }
//         if (expensesObj[expenses] < lowest ) {
            
//             lowest = expensesObj[expenses];
//             lowestName = expenses ;
//         }
//     }
    
//     const average = total / Object.keys(expensesObj).length ;
    
//     return{
//         total,
//         average,
//         highest : highestName ,
//         lowest : lowestName ,

//     }
// }

// const expensesObj ={ rent: 8000, food: 4500, transport: 1200, internet: 1500 };
// const result = analyzeExpenses(expensesObj);                                    
// console.log(result);

// Statement: একটি ফাংশন লিখো যা আইটেম লিস্ট চেক করবে। যদি স্টক থাকে তবেই বিল যোগ করবে, আর স্টক না থাকলে একটি মেসেজ দেবে।



function checkStockAndBill(prices, stock, shoppingList){

    let shoppingCount = {};
    let total = 0 ;
    let msg = 'All item available';

    for ( let shopping of shoppingList){
        console.log(shopping);
        
        if (shoppingCount.hasOwnProperty(shopping)) {
            
            shoppingCount[shopping] ++ ;
        } else{
            shoppingCount[shopping] = 1;
        }
    }

    // console.log(shoppingCount);

    for ( let item in shoppingCount){

        const available = shoppingCount[item];
        const notAvailable = stock [item] || 0;

        console.log(notAvailable , available);
        
        if (notAvailable >= available) {
             total = total + prices[item] * available ;
             
        }else{

            total = total + prices[item] * notAvailable ;
            msg = 'item is not available'
        }
        
    }
    return{
        total,
        msg
    }
    
}


const prices = { pen: 10, book: 50, eraser: 5 } ;
const stock = { pen: 6, book: 89, eraser: 80 } ;
const shoppingList = ["pen", "pen", "pen", "book", "eraser"] ;
const totalPrice = checkStockAndBill(prices, stock, shoppingList);
console.log(totalPrice);

