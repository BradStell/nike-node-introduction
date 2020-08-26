//////////////////////////////
// Higher Order Functions
//  * A function that takes a function as an argument or returns a function

// const multiply = (a, b) => a * b

// const waitTime = 5
// setTimeout(() => {
//   console.log(`Waited ${waitTime} seconds`)
// }, multiply(waitTime, 1000))




// // Higher Order Function that takes the first number and returns a
// // function that takes the second number
// const multiply = a => b => a * b

// // specialized function (or partially applied function) that
// // multiplies it's parameter by 1000
// const secToMilli = multiply(1000)

// const waitTime = 5
// setTimeout(() => {
//   console.log(`Waited ${waitTime} seconds`)
// }, secToMilli(waitTime))




// // HOC that takes a number and returns a function that takes a number
// // and returns wether or not the second number is greater than or equal to the first number
// const highpass = cutoff => n => n >= cutoff

// const gt3 = highpass(3)

// const array = [1, 2, 3, 4]

// const gt3vals = array.filter(gt3) // [ 3, 4 ]

// console.log(gt3vals)

// // // Point free syntax
// array.filter(val => gt3(val))
// array.filter(gt3)



// // HOC that takes string and returns function that takes count
// // if count is more than (or less than) 1 it adds an 's'
// const pluralize = str => count => count === 1 ? str : str + 's'

// console.log( pluralize('dog')(2) )

// // Specialized or partially applied version of pluralize that will pluralize the string 'dog'
// const pluralizeDog = pluralize('dog')

// const dogs = [ 'ranger', 'scout' ]
// console.log( `You have ${dogs.length} ${pluralizeDog(dogs.length)}` )



// build example for executing fn at later date
const printLoggedInTime = (loggedInTime) => (dog) => () => {
  console.log(`Dog ${dog} logged in at ${loggedInTime}`)
}

const dogs = [ 'Ranger', 'Scout' ]

const currentTime = new Date().toISOString()
const dogFns = dogs.map(printLoggedInTime(currentTime))
console.log(dogFns)

setTimeout(() => {
  console.log(new Date().toISOString())
  dogFns.forEach(dogFn => dogFn())
}, 3000)
