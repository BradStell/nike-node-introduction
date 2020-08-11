////////////////////////////
// Object / Array destructuring

const vector = {
  x: 7,
  y: 24,
  z: 1
}

// normal object printing
console.log(`x: ${vector.x}, y: ${vector.y}, z: ${vector.z}`)

// // object destructuring
// const { x, y, z } = vector
// console.log(`x: ${vector.x}, y: ${vector.y}, z: ${vector.z}`)

// // object destructuring in function
// function sayHello(user) {
//   console.log(`Welcome, ${user.username} 🌵`)
// }
// // function sayHello({ username }) {
// //   console.log(`Welcome, ${username} 🌵`)
// // }
// sayHello({ username: 'brad.stell@nike.com' })

//////////////////////////////
// Array destructuring
// const arr = [ 1, 2, 3, 4 ]

// const [ a, b ] = arr
// console.log(`a is ${a} and b is ${b}`)

////////////////////////
// package import destructuring

// traditional named import
// const utils = require('./9_module')
// console.log(utils.add(4, 4))

// destructure package
// const { add, subtract } = require('./9_module')
// console.log(add(4, 4))
// console.log(subtract(4, 4))
