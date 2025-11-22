function filterProduct(products, minPrice) {
    const newProducts = []
    for(const v of products) {
        if(v.price > minPrice) {
            newProducts.push(v)
        }
    }
    return newProducts
}



const products = [
  {name: 'Apple', price: 5},
  {name: 'Orange', price: 10},
  {name: 'Banana', price: 3},
  false
  ,
]

const expensive = filterProduct(products, 4)
// expensive: [
//   {name: 'Apple', price: 5},
//   {name: 'Orange', price: 10}
// ]


console.log(expensive)

