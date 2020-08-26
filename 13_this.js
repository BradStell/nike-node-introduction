///////////////////////////////////////
// this and lexical environments

// const dog = {
//   name: 'Scout',
//   age: 1,
//   sayHi: () => {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} year old`)
//   }
// }

// dog.sayHi()


const EventEmitter = require('events')

// const myEmitter = new EventEmitter()
// myEmitter.on('someEvent', () => {
//   console.log('An event occured')
// })
// myEmitter.emit('someEvent')


// function logUserIn (user) {
//   console.log(user, 'logged in')
//   console.log(this)
//   this.emit('fetchData')
// }

// const myEmitterWithParams = new EventEmitter()
// myEmitterWithParams.on('loggedIn', logUserIn)
// myEmitterWithParams.emit('loggedIn', 'Brad')



const person = {
  name: 'Brad',
  logIn: function(time) {
    this.lastLoggedInTime = time
  },
  lastLoggedInTime: null
}

// person.logIn(new Date())
// console.log(person.lastLoggedInTime)

const loginEmitter = new EventEmitter()

loginEmitter.on('loggedIn', (val) => person.logIn(val))
loginEmitter.emit('loggedIn', '666666')

console.log(person.lastLoggedInTime)




