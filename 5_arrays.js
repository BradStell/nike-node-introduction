////////////////////////////////////////////////
// array with items
const numbers = [ 1, 2, 3, 4 ]
console.log(numbers)

numbers.push(5)
console.log(numbers)

const lastItem = numbers.pop()
console.log(lastItem)
console.log(numbers)

const firstItem = numbers.shift()
console.log(firstItem)
console.log(numbers)

const randomStuff = [ 1, 'two', 3.14, { name: 'Brad' } ]
console.log(randomStuff)

let doubles = []
for (let i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2)
}
console.log(doubles)

const double = x => x * 2

const doubledNumbers = numbers.map(double)
console.log(doubledNumbers)
console.log(numbers)

const isEven = (x) => x % 2 === 0
const evens = numbers.filter(isEven)
console.log(evens)


// Manual creation
const manualArr = new Array(5)
manualArr[0] = 5
console.log(manualArr)

const manualFillArr = new Array(3).fill(0)
console.log(manualFillArr)

