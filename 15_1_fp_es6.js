/*
  Functional programming favors
  • Pure functions
  • Function composition
  • Avoid shared state (pure)
  • Avoid mutating state (immutability)
  • Avoid side effects (pure)
  • Declarative vs imperative (what vs how)

  The problem with shared state is that in order to understand the
  effects of a function, you have to know the entire history of every
  shared variable that the function uses or affects.

  Imperative vs Declarative
  • Imperative programs spend lines of code describing the specific
    steps used to achieve the desired results — the flow control: How to do things.
  • Declarative programs abstract the flow control process (the how gets abstracted away),
    and instead spend lines of code describing the data flow: What to do.

  Functions are good abstractions bc
   • Composable
   • Reusable
   • Independent
   • Concise
   • Simple

  “Sometimes, the elegant implementation is just a function. Not a method. Not a class.
   Not a framework. Just a function.” ∼ John Carmack (Id Software, Oculus VR)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  “I made up the term ‘object-oriented’, and I can tell you I didn’t have C++ in mind.”
    ∼ Alan Kay, OOPSLA ‘97

  “I’m sorry that I long ago coined the term ‘objects’ for this topic because it gets
   many people to focus on the lesser idea. The big idea is messaging.” ∼ Alan Kay

  “OOP to me means only messaging, local retention and protection and hiding of
   state- process, and extreme late-binding of all things.” ∼ Alan Kay
   
  “Favor object composition over class inheritance.” ∼ Gang of Four, “Design Patterns”
  "has a" over "is a"
    a truck has an engine not is a thing that has an engine
      - how would you make this electronic?

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

  Issues with Class Inheritance
    • The tight coupling problem:
        Because child classes are dependent on the implementation of the parent class,
        class inheritance is the tightest coupling available in object oriented design.
    • The fragile base class problem:
        Due to tight coupling, changes to the base class can potentially
        break a large number of descendant classes – potentially in code managed by third parties. The
        author could break code they’re not aware of.
    • The inflexible hierarchy problem:
        With single ancestor taxonomies, given enough time and
        evolution, all class taxonomies are eventually wrong for new use-cases.
    • The duplication by necessity problem:
        Due to inflexible hierarchies, new use cases are often
        implemented by duplication, rather than extension, leading to similar classes which are unexpectedly divergent.
        Once duplication sets in, it’s not obvious which class new classes should descend from, or why.
    • The gorilla/banana problem:
        “...the problem with object-oriented languages is they’ve got all
        this implicit environment that they carry around with them. You wanted a banana but what you got
        was a gorilla holding the banana and the entire jungle.” ∼ Joe Armstrong, “Coders at Work”
*/



////////////////////////////////////////////////////////////////////////
///////// ES6 | ECMASCRIPT 2015 FUNCTIONS
////////////////////////////////////////////////////////////////////////

/*
  Array.prototype.forEach
  Array.prototype.map
  Array.prototype.filter
  Array.prototype.reduce
  Array.prototype.some
*/

////////////////////////////////////
// .forEach

const names = ['Ranger', 'Scout']

// imperative
// for each loop iteration
for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}`)
}

// declarative
// es6 forEach
// names.forEach(name => console.log(`Hello, ${name}`))

// ////////////////////////////////////
// // .map
// const arr = [1, 2, 3, 4, 5]

// // for loop imperative way
// const results = []
// for (let i = 0; i < arr.length; i++) {
//   results.push(arr[i] * 2)
// }
// console.log('map for loop', results)


// // es6 map
// const res = arr.map(a => a * 2)
// console.log('map', res)


// ////////////////////////////////////
// // .filter

// const students = [
//   {
//     name: 'Ranger',
//     grade: 89.5
//   },
//   {
//     name: 'Scout',
//     grade: 60
//   },
//   {
//     name: 'Charlie',
//     grade: 99.4
//   },
//   {
//     name: 'Pumpkin',
//     grade: 72
//   }
// ]

// // imperative
// const passingStudents = []
// for (let i = 0; i < students.length; i++) {
//   if (students[i].grade >= 80) {
//     passingStudents.push(students[i])
//   }
// }
// console.log('passing students', passingStudents)


// // declarative
// // Using es6 filter
// const passing = students.filter(s => s.grade >= 80)
// console.log('passing students 2', passing)


// ////////////////////////////////////
// // .reduce or "fold"
// const nums = [10, 20, 30, 40]

// // for-loop
// let total = 0
// for (let i = 0; i < nums.length; i++) {
//   total += nums[i]
// }
// console.log('total', total)


// // // es6 reduce
// const sum = nums.reduce((total, current) => total + current, 0)
// console.log('sum', sum)


// ////////////////////////////////////
// // .some
// const data = [10, 30, 50, 5, -6]

// // // imperative
// let areAnyNegative = false
// for (let i = 0; i < data.length; i++) {
//   if (data[i] < 0) {
//     areAnyNegative = true
//     break
//   }
// }
// console.log('areAnyNegative', areAnyNegative)


// // // functional
// const areNegatives = data.some(x => x < 0)
// console.log('areNegatives', areNegatives)
