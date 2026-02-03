
// const jim = 149 ;
// const kim = 787 ;
// const rim = 324 ;


// if (jim > kim && jim > rim) {
    
//     console.log('jim win');
    
// }else if (kim > jim && kim > rim) {
//     console.log('kim win');
    
// }else if (rim > jim && rim > kim) {
//    console.log('rim win');
   
// }

// function maxOffThree(p1 , p2 , p3) {
    
//     if (p1 > p2 && p1 > p3) {
        
//         return  console.log('win1');
        
//     } else if (p2 > p1 && p2 >p3) {
//          return console.log('win2');
        
//     }else if (p3 > p1 && p3 > p2) {
//          return console.log('win3');
        
//     }
   
// }

// const n1 = 344;
// const n2 = 673;
// const n3 = 423;

// const result = maxOffThree(n1 , n2 ,n3);
// // console.log(result);
// const max = Math.max(45, 354,63,63,343,622,5353,633343,5333333);
// console.log(max);
// function maxHeights(height) {
    
//     let mHeight = height[0] ;
//     for( let mh of height){

//         if (mh > mHeight) {
            
//             mHeight = mh;
            
//         }
//     }
//     return mHeight;
    
// }

// const heights = [65, 68, 70, 69,75,73, 71];
// const result = maxHeights(heights);
// console.log(result);

// function minNumber( numbers) {
    
//     let minNumber =numbers[0];

//     for(let num of numbers) {

//         if (num < minNumber) {
            
//             minNumber = num;
//         }
//     }
//     return minNumber ;
// }

// const height = [ 56, 63, 57, 62, 70, 66, 69, 55, 50, 61];
// const minHeight = minNumber(height);
// console.log(minHeight);


// function totalPrice(shirt , pant , shoe) {
    
//     const shirtPrice = 500 ;
//     const pantPrice = 300 ;
//     const shoePrice = 900 ;

//     const shirtPriceTotal = shirtPrice * shirt ;
//     const pantPriceTotal = pantPrice * pant ;
//     const shoePriceTotal = shoePrice * shoe ;
    
//     const totalPrice = shirtPriceTotal + pantPriceTotal + shoePriceTotal ;

//     return totalPrice ;
// }

// const price = totalPrice ( 1 , 1, 0);
// console.log(price);


// const phones = [

//     {name : 'samsung' , price : 40000 , } ,
//     {name : 'oppo' , price : 2000 , } ,
//     {name : 'redmi' , price : 1113000 , } ,
//     {name : 'iphone' , price : 140000 , } ,
// ];

// function highPricePhone(ph) {
    
//     let premiumPhone = ph[0];
//     for(let p of ph){

//         if (p.price > premiumPhone.price) {
            
//             premiumPhone = p;
//         }
//     }
//     return premiumPhone ;

// }
// const result = highPricePhone(phones);
// console.log(result);


// function cheapest(items) {
    
//     let phone = items[0];

//     for(let it of items){

//         if (it.price < phone.price) {
            
//             phone = it
//         }
//     }
//     return phone;
// }
//  const result = cheapest(phones);
//  console.log(result);
 
// const dress = [

//     {name : 'shirt',price : 300 , quantity : 2} ,
//     {name : 'pant', price : 500 , quantity : 3 } ,
//     {name : 'shoe', price : 800 , quantity : 2 } ,
//     {name : 'sunglass', price : 100 , quantity : 1 } ,
// ];

// function totalAmount(dress) {
    
//     let amount = 0 ;
//     for(const d of dress){
//         amount = amount + d.price * d.quantity ;
//     }
//     return amount;
// }
// const totalPrice = totalAmount(dress);
// console.log(totalPrice);

// function discount(quantity) {
    
//     if (quantity <= 100) {
//         const total = quantity * 100 ;
//         return total;

//     }else if (quantity <= 200) {
//         const total = quantity * 90 ;
//         return total ;
//     }else{
//         const total = quantity * 70;
//         return total ;
//     }
// }

// const total = discount(110);
// console.log(total);

// function discountLayered(quantity) {
//     const first100Price = 100 ;
//     const second200Price = 90 ;
//     const above200Price = 70 ;

//     if( quantity <= 100){
//         const total = quantity * first100Price ;
//         return total ; 

//     }else if (quantity <=200) {
//         const first100 = 100 * first100Price ;
//         const remainingQuantity = quantity - 100 ;
//         const remainingTotal = remainingQuantity * second200Price ;
//         const total = first100 + remainingTotal ;
//         return total ;

//     }else{
//         const first100 = 100 * first100Price ;
//         const second100 = 100 * second200Price;
//         const remainingQuantity= quantity - 200 ;
//         const remainingTotal = remainingQuantity * above200Price ;
//         const total = first100 + second100 + remainingTotal ;
//         return total ;

//     }
// }
// const q = discountLayered(300);
// console.log(q);


// function add( n1 , n2) {
    
//     return n1 + n2 ;
// }
// function subtract(n1 , n2) {
//     return n1 - n2 ;
// }
// function multiply (n1, n2){
//     return n1 * n2 ;
// }
// function divide(n1, n2) {
//     return n1 / n2 ;
// }

// function calculator( a , b , operation) {
//     if (operation === 'add') {
//         return add(a , b);

//     } else if (operation === 'subtract') {
//         return subtract(a,b);

//     }else if (operation === 'multiply') {
//         return multiply(a , b);

//     }else if (operation === 'divide') {
//         return divide(a ,b);
        
//     }else{
//         return " please use 'add', 'subtract', 'multiply', 'divide'"
//     }
// }

// const operation =calculator(4 , 5 , 'subtract');
// console.log(operation);



// function add( number1 , number2) {

//     if (typeof number1 !== 'number' || typeof number2 !== 'number') {
//         return 'Please provide a number'
//     }
//     const result = number1 + number2 ;
//     return result ;
// }

// const r = add(9 , 4);
// console.log(r);

// function fullName(first , second) {
//     if (typeof first !== 'string') {
//         return 'The first name should be a string'

//     }else if (typeof second !== 'string') {
//         return 'The last name should be a string '
//     }
//     const fname = first + ' ' + second ;
//     return fname ;

// }

// const nm = fullName ('akkas','ali');
// console.log(nm);

// function object (value){

//     if(typeof value !== 'object'){

//         return "The value should be an object"
//     }
    
//     const price = value.price ;
//     return price

// }

// const obb = object({product: 'shirt' , price: 300, isNew: true  });
// // const obb = object (2)
// console.log(obb);


// function array(numbers) {
    
//     if(Array.isArray(numbers) !== true){
//        return 'Please provide an array'
//     }
    
//     const n2 = numbers[4];
//     // console.log(n2);
//     return n2;
// }

// // const n = array([1,3,4,5,6,3]);
// const n = array(0 ,3)
// console.log(n);

// // smallest number find 
// const heights2 = [167, 190, 120, 165, 137];

// function findSmallest(nbr) {
    
//     let n = nbr[0];
//     for( const num of nbr){

//         if (num < n ) {
            
//             n = num;
//         }
//     }
//     return n ;
// }

// const numbers = findSmallest(heights2);
// console.log(numbers);



// const heights2 = ['rahim', 'robin', 'ri', 'ron', 'rashed'];

// function smallName(names) {
    
//     let smName = names[0];
//     for ( const nm of names){

//         if (nm.length < smName.length) {
            
//             smName = nm ;
//         }
//     }
//     return smName ;
// }

// const names = smallName(heights2);
// console.log(names);


// function calculateElectronicsBudget(lap , tab , mbl ) {
    
//     const laptop = 35000 ;
//     const tablet = 15000 ;
//     const mobile = 20000 ;

//     if (typeof lap !== 'number' || typeof tab !== 'number' ||typeof mbl !== 'number') {
//         return "please provide a number";
//     }
//     const laptopPrice = laptop * lap ;
//     const tabletPrice = tablet * tab ;
//     const mobilePrice = mobile * mbl ;

//     const totalMoneyRequired = laptopPrice + tabletPrice + mobilePrice ;
//     return totalMoneyRequired ;


// }

// const totalElectronics = calculateElectronicsBudget(1 , "4" , 0);
// console.log(totalElectronics);
