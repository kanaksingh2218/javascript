const myNums = [1,2,3]

// const newNum= myNums.reduce( function (acc , currval) {
//     console.log(`acc: ${acc} currval: ${currval}`);
    
//     return acc + currval
// }, 1)

// const newNum = myNums.reduce( (acc , curr) => acc+curr,1)

// console.log(newNum);


const shoppingCart = [
    {
        itemName : " js course",
        price : " 999"
    },
    {
        itemName : " py course",
        price : " 1999"
    },
    {
        itemName : " mobile course",
        price : " 1399"
    },
    {
        itemName : " data science course",
        price : " 2999"
    }
]

   const pricePay = shoppingCart.reduce((acc, item) => acc+item.price,0)
console.log(pricePay );
