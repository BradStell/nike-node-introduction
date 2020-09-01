////////////////////////////////////////////////////////////////////
//////////          FUNCTION COMPOSITION        ////////////////////
////////////////////////////////////////////////////////////////////

// ignore for now
const pipe = (...fns) => x => fns.reduce((y,f) => f(y), x)
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y) ,x)
const filter = fn => x => x.filter(fn)
const map = fn => x => x.map(fn)



const double = x => x * 2
const increment = x => x + 1
const addFive = x => x + 5

const doStuff = x => {
  const afterDouble = double(x)
  const afterIncrement = increment(afterDouble)
  return afterIncrement
}

console.log(
  doStuff(20) // 41
)

// same as
const doStuffBetter = x => increment(addFive(double(x))) // add new fn

console.log(
  doStuffBetter(20) // 41
)

// compose
const doStuffBest = compose(increment, addFive, double)

console.log(
  doStuffBest(20) // 41
)



// // compose with debugging
// const trace = label => value => {
//   console.log(`${label}: ${value}`)
//   return value
// }
// const doStuffBest = compose(trace('after increment'), increment, trace('after five'), addFive, trace('after double'), double)


// consider the following
const isEven = x => x % 2 === 0

const values = [1, 2, 3, 4, 5]
  .filter(isEven)
  .map(double)
console.log(values) // [ 4, 8 ]

// make testable
const doubleTheEvens = arr => arr
  .filter(isEven)
  .map(double)
console.log(doubleTheEvens([1, 2, 3, 4, 5]))

// better because it can be traced in between and scale better
// also just a composition of functions, no other logic that needs to
// be tested
const doubleEvens = pipe(
  filter(isEven),
  // trace('Logging'),
  map(double)
)
console.log(doubleEvens([1, 2, 3, 4, 5 ])) // [ 4, 8 ]



console.log('------------')
/////////// 
// Partial application with function composition
const days = 7

// not apparent what this does?
const x = days * 24 * 60 * 60 * 1000
console.log(x)

// we can name it
const convertDaysToMilliseconds = x => x * 24 * 60 * 60 * 1000
const milliseconds = convertDaysToMilliseconds(days)
console.log('milliseconds', milliseconds)

// what if we want to convert hours to seconds?
const convertHoursToSeconds = x => x * 60 * 60
const seconds = convertHoursToSeconds(2)
console.log('seconds', seconds)

// how can we make this more reusable?
// add multiply fn
// const daysToHours = x => x * 24
// const hoursToMinutes = x => x * 60
// const minutesToSeconds = x => x * 60
// const secondsToMillis = x => x * 1000

// const daysToMillis = x => secondsToMillis(minutesToSeconds(hoursToMinutes(daysToHours(x))))
// console.log('daysToMillis', daysToMillis(days))

// const daysToMilliseconds = pipe(daysToHours, hoursToMinutes, minutesToSeconds, secondsToMillis)
// console.log('daysToMilliseconds', daysToMilliseconds(days))

// Even better?
// partially apply multiply and divide fns for better readability
const multiply = a => b => a * b
const divide = a => b => b / a

const daysToHours = multiply(24)
const hoursToMinutes = multiply(60)
const minutesToSeconds = multiply(60)
const secondsToMillis = multiply(1000)

const millisToSeconds = divide(1000)
const secondsToMinutes = divide(60)
const minutesToHours = divide(60)
const hoursToDays = divide(24)

const daysToMilliseconds = pipe(daysToHours, hoursToMinutes, minutesToSeconds, secondsToMillis)
const milliSecondsToDays = compose(hoursToDays, minutesToHours, secondsToMinutes, millisToSeconds)

const DAYS = 10
const millis = daysToMilliseconds(DAYS)
console.log('Millis', millis)
const daysAgain = milliSecondsToDays(millis)
console.log('Days', daysAgain)


////////////////
const R = require('ramda')

const expiringInDays = (expirationDays, createdDate) => {
  const expirationDate = createdDate.getTime() + daysToMilliseconds(expirationDays)
  const now = new Date().getTime()
  return milliSecondsToDays(expirationDate - now)
}

const expirationMessage = (expiresInDays) =>
  (expiresInDays > 1
    ? `Expiring in ${expiresInDays} days`
    : expiresInDays <= 1 && expiresInDays > 0
      ? 'Expiring in less than 1 day'
      : '')

const generateExpiryMessage = R.compose(expirationMessage, Math.round, expiringInDays)

console.log( generateExpiryMessage(7, new Date('8/30/2020')) )

