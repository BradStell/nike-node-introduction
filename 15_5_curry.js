//////////////////////////////////////////////////
//////////        CURRYING           /////////////
//////////////////////////////////////////////////

/*
  Named after Haskell Curry - not dish from India

  A curried function is a function that takes multiple arguments one at a time.
  useful in function composition
*/

// ignore for now
const pipe = (...fns) => x => fns.reduce((y,f) => f(y), x)

const curry = (
  f, arr = []
) => (...args) => (
  a => a.length === f.length ?
    f(...a) :
    curry(f, a)
)([...arr, ...args])

// const { curry, pipe } = require('ramda')

////////////////////////////
// // // gte is curried
// const gte = cutoff => n => n >= cutoff
// const gte4 = gte(4); // gte() returns a new function

// //////////////
// const add3 = curry((a, b, c) => a + b + c)
// console.log( add3(1, 2, 3) ) // 6
// console.log( add3(1, 2)(3) ) // 6
// console.log( add3(1)(2, 3) ) // 6
// console.log( add3(1)(2)(3) ) // 6


// ////////////////////////

// const add = curry((a, b) => a + b)
// const multiply = curry((a, b) => a * b)
// const divide = curry((a, b) => b / a)

// // call with both params
// console.log( add(10, 5) ) // 15

// // partially apply
// const increment = add(1)
// const secondsToMilliseconds = multiply(1000)
// const millisecondsToSeconds = divide(1000)

// console.log( increment(7) ) // 8
// console.log( secondsToMilliseconds(1) ) // 1000
// console.log( millisecondsToSeconds(3000) ) // 3


// // compose
// const convertToSecondsAddOneSecond = pipe(millisecondsToSeconds, increment)

// console.log( 'pipe →', convertToSecondsAddOneSecond(3000) ) // 4
