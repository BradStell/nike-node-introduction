/*
  Functional programming favors
  • Pure functions
  • Function composition
  • Avoid shared state
  • Avoid mutating state
  • Avoid side effects
  • Declarative vs imperative

  The problem with shared state is that in order to understand the
  effects of a function, you have to know the entire history of every
  shared variable that the function uses or affects.

  Imperative vs Declarative
  • Imperative programs spend lines of code describing the specific
    steps used to achieve the desired results — the flow control: How to do things.
  • Declarative programs abstract the flow control process (the how gets abstracted away),
    and instead spend lines of code describing the data flow: What to do.

  “Sometimes, the elegant implementation is just a function. Not a method. Not a class.
   Not a framework. Just a function.” ∼ John Carmack (Id Software, Oculus VR)

  “I made up the term ‘object-oriented’, and I can tell you I didn’t have C++ in mind.”
    ∼ Alan Kay, OOPSLA ‘97

  “I’m sorry that I long ago coined the term ‘objects’ for this topic because it gets
   many people to focus on the lesser idea. The big idea is messaging.” ∼ Alan Kay

  “OOP to me means only messaging, local retention and protection and hiding of
   state- process, and extreme late-binding of all things.” ∼ Alan Kay
   
  “Favor object composition over class inheritance.” ∼ Gang of Four, “Design Patterns”

   Functions are good abstractions bc
   • Composable
   • Reusable
   • Independent
   • Concise
   • Simple

  What is essential to OOP?
    • Encapsulation
    • Message passing
    • Dynamic binding (the ability for the program to evolve/adapt at runtime)
  What is non-essential?
    • Classes
    • Class inheritance
    • Special treatment for objects/functions/data
    • The new keyword
    • Polymorphism
    • Static types
    • Recognizing a class as a “type”
*/



////////////////////////////////////////////////////////////////////////
///////// ES6 ECMASCRIPT 2015 FUNCTIONS
////////////////////////////////////////////////////////////////////////


////////////////////////////////////
// .forEach

// for each loop iteration
const names = ['Ranger', 'Scout']
for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}`)
}

// es6 forEach
names.forEach(name => console.log(`Hello, ${name}`))


////////////////////////////////////
// .map
const arr = [1, 2, 3, 4, 5]

// in place update
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 2
}
console.log('in place:', arr)

// insert into new array
const results = []
for (let i = 0; i < arr.length; i++) {
  results.push(arr[i] * 2)
}
console.log('in new array', results)

// es6 map
const res = arr.map(i => i * 2)
console.log('map', res)


////////////////////////////////////
// .filter

const students = [
  {
    name: 'Ranger',
    grade: 89.5
  },
  {
    name: 'Scout',
    grade: 60
  },
  {
    name: 'Charlie',
    grade: 99.4
  },
  {
    name: 'Pumpkin',
    grade: 72
  }
]

const passingStudents = []
for (let i = 0; i < students.length; i++) {
  if (students[i].grade >= 80) {
    passingStudents.push(students[i].name)
  }
}
console.log('passing students', passingStudents)

// Using es6 filter
const passing = students.filter(s => s.grade >= 80).map(s => s.name)
console.log('passing students 2', passing)


////////////////////////////////////
// .reduce
const nums = [10, 20, 30, 40]

// for-loop
let total = 0
for (let i = 0; i < nums.length; i++) {
  total += nums[i]
}
console.log('total', total)

// es6 reduce
const sum = nums.reduce((total, current) => total + current, 0)
console.log('sum', sum)


////////////////////////////////////
// .some
const data = [10, 30, 50, 5, -6]

// imperative
let areAnyNegative = false
for (let i = 0; i < data.length; i++) {
  if (data[i] < 0) {
    areAnyNegative = true
    break
  }
}
console.log('areAnyNegative', areAnyNegative)

// functional
const lessThanZero = x => x < 0
const areNegatives = data.some(lessThanZero)
console.log('areNegatives', areNegatives)
