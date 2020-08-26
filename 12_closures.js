///////////////////////////////////
// closures
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables

// simple example
// const outer = (userName) => {
//   const currentTime = new Date()
//   return () => {
//     return `User ${userName} logged in at ${currentTime}`
//   }
// }

// const users = [ 'Ranger', 'Scout' ]

// const logUsersIn = users.map(outer)
// console.log(logUsersIn)

// logUsersIn.forEach(userFn => console.log( userFn() ))
// timeout to demo



// Partial application

// const add = a => b => a + b
// console.log(add(1)(5))

// // partially apply add
// const increment = add(1)

// console.log(increment(5))
// console.log(increment(10))
// console.log(increment(14))
// console.log(increment(17))



// module level closure
// const userService = require('./12_closure_adv')
// console.log( userService.getLoggedInUser() )
// userService.setLoggedInUser('Scout')
// console.log( userService.getLoggedInUser() )
// userService.printAccessTimes()

// // // can't access this "private" (or module sclped variable)
// console.log(userService.accessTimes)
