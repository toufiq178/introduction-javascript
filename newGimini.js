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



// function checkStockAndBill(prices, stock, shoppingList){

//     let shoppingCount = {};
//     let total = 0 ;
//     let msg = 'All item available';

//     for ( let shopping of shoppingList){
//         console.log(shopping);
        
//         if (shoppingCount.hasOwnProperty(shopping)) {
            
//             shoppingCount[shopping] ++ ;
//         } else{
//             shoppingCount[shopping] = 1;
//         }
//     }

//     // console.log(shoppingCount);

//     for ( let item in shoppingCount){

//         const available = shoppingCount[item];
//         const notAvailable = stock [item] || 0;

//         console.log(notAvailable , available);
        
//         if (notAvailable >= available) {
//              total = total + prices[item] * available ;
             
//         }else{

//             total = total + prices[item] * notAvailable ;
//             msg = 'item is not available'
//         }
        
//     }
//     return{
//         total,
//         msg
//     }
    
// }


// const prices = { pen: 10, book: 50, eraser: 5 } ;
// const stock = { pen: 6, book: 89, eraser: 80 } ;
// const shoppingList = ["pen", "pen", "pen", "book", "eraser"] ;
// const totalPrice = checkStockAndBill(prices, stock, shoppingList);
// console.log(totalPrice);



// Calculate total bill and count how many times each item appears.

// function groceryBill(prices, items) {
    
//     let itemCount = {};

//     for(let item of items){
        
//         if (itemCount.hasOwnProperty(item)) {
            
//             itemCount[item]++ ;
//         }else {
//             itemCount[item] = 1 ;

//         }
//     }
//     console.log(itemCount);
    
//     let total = 0 ;
//     for ( let item in itemCount) {
        
//         let price = prices[item];
//         console.log(price);
//         let itemQuantity = itemCount[item];
//         console.log(itemQuantity);
//         total = total + price * itemQuantity ;
//     }
//     console.log(total);
    
//     return {
//         total,
//         itemCount
//     }

// }


// const prices = { apple: 50, banana: 10, milk: 60 };
// const items = ["apple", "banana", "apple", "milk", "banana", "banana"];
// const total = groceryBill(prices, items);
// console.log(total);


// Calculate total price and quantity of each food item.

function orderSummary(menu, orders) {

    let orderCount = {};
    for ( let order of orders){

        if (orderCount.hasOwnProperty(order)) {
            
            orderCount[order] ++;
        }else{

            orderCount[order] = 1 ;
        }
    }

    let total = 0 ;

    for ( let order in orderCount){

        const price = menu[order];
        const orderQuantity = orderCount [order];
        total = total + price * orderQuantity ;
    }

    let discountApplied = false ;

    if (total > 500) {
        
        let dis = 10 ;
        let discount = total - (dis * total / 100) ;
        total = discount;
        discountApplied = true ;
    } 

    return {
        total ,
        orderCount,
        discountApplied, 
    }
}

const menu = { burger: 120, pizza: 300, coke: 40 };
const orders = ["burger", "pizza",  "coke", "coke"];
const result = orderSummary(menu, orders);
console.log(result);

