///////////////////////////////////////
// this and lexical environments

const dog = {
  name: 'Scout',
  age: 1,
  sayHi: function() {
    console.log(`Hello, my name is ${name} and I am ${age} year old`)
  }
}

dog.sayHi()


// const EventEmitter = require('events')

// const myEmitter = new EventEmitter()
// myEmitter.on('someEvent', () => {
//   console.log('An event occured')
// })
// myEmitter.emit('someEvent')


// const logUserIn = (user) => {
//   console.log(user, 'logged in')
//   // this.emit('fetchData')
// }

// const myEmitterWithParams = new EventEmitter()
// myEmitterWithParams.on('loggedIn', logUserIn)
// myEmitterWithParams.emit('loggedIn', 'Brad')



// const person = {
//   name: 'Brad',
//   logIn: function(time) {
//     this.lastLoggedInTime = time
//   },
//   lastLoggedInTime: null
// }

// person.logIn(new Date())
// console.log(person.lastLoggedInTime)

// // const loginEmitter = new EventEmitter()

// // loginEmitter.on('loggedIn', person.logIn)
// // loginEmitter.emit('loggedIn', '1234')

// // console.log(person.lastLoggedInTime)




