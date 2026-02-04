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
