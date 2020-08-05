function createUser (name, age) {
  return {
    name: name,
    age: age,
    isValidLogin: true
  }
}
console.log(createUser('Brad', 32))

// function expression
// const createUser = (name, age) => {
//   return {
//     name: name,
//     age: age,
//     isValidLogin: true
//   }
// }
// console.log(createUser('Brad', 32))

// leave off keys if same name
// const createUser = (name, age) => {
//   return {
//     name,
//     age,
//     isValidLogin: true
//   }
// }
// console.log(createUser('Brad', 32))

// return statement implied
// const arr = [ 1, 2, 3 ]
// const doubled = arr.map(v => v * 2)
// console.log(doubled)
