//////////////////////////////
// hoisting

// original function syntax
// a()

// function a() {
//   console.log('in a')
//   b()
// }

// function b() {
//   console.log('in b')
// }


// es6 fat arrow syntax

// const b = () => {
//   console.log('in b')
// }

// const a = () => {
//   console.log('in a')
//   b()
// }

// a()



// const a = 10
// const b = 20
// const c = 30
// console.log(a, b, c)



const calcCircumference = radius => 2 * pi * radius
const pi = 3.14
console.log(calcCircumference(10))
