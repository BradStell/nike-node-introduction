////////////////////////////////////////////////////////
////////             PURE FUNCTIONS             ////////
////////////////////////////////////////////////////////

// 1. Given same input produce the same output
// 2. produce no side effects

// If you call a function without using it's return value it's non pure
const sayHi = name => console.log(`Hello ${name}`)
sayHi('Brad') // not pure


// // //////////////////////////////
// const highpass = (cutoff, value) => value >= cutoff

// // always the same result with the same input
// highpass(5, 5) // true
// highpass(5, 5) // true
// highpass(5, 5) // true

// // many input values map to same output values
// highpass(5, 123) // true
// highpass(5, 6)   // true
// highpass(5, 18)  // true

// highpass(5, 1)  // false
// highpass(5, 3)  // false
// highpass(5, 4)  // false

// no side effects
// can't modify external state

// //////////////////////////////
// Impure
// const cart = {
//   items: []
// }

// // uses external state
// // doesn't return values
// // changes external state
// const addToCartImpure = (item, quantity) => {
//   cart.items.push({
//     item,
//     quantity
//   })
// }

// addToCartImpure('macbook pro', 1)
// console.log(cart)


// //////////////////////////////////////////////////////
// const otherCart = {
//   items: []
// }

// // doesn't use external state
// // does return a value
// // does not change external state
// const addToCartBetter = (cart, item, quantity) => {
//   const clonedCart = JSON.parse(JSON.stringify(cart))
//   clonedCart.items.push({
//     item,
//     quantity
//   })
//   return clonedCart
// }

// const updatedCart = addToCartBetter(otherCart, 'macbook air', 2)
// console.log('updatedCart', updatedCart)
// console.log('original cart', otherCart)
