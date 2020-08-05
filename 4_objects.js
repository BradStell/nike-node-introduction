////////////////////////////
// create object
const brad = {
  firstName: 'Brad',
  lastName: 'Stell',
  age: 32,
  worksAtNike: true
}
console.log(brad)


///////////////////////////
// add new keys to object at runtime
// brad.address = '123 somewhere rd'
// console.log(brad)


//////////////////////////////
// pass by reference
// function login(user) {
//   user.loggedIn = true
// }
// login(brad)
// console.log(brad)



////////////////////////////////////////////////////////////
// object with nested object and fn as keys
// const truck = {
//   make: 'Toyota',
//   "model": 'Tacoma',
//   on: false,
//   specs: {
//     fourWheelDrive: true,
//     engine: '3.5l',
//     cylinders: 6
//   },
//   start: function() {
//     this.on = true
//     console.log('vroom')
//   }
// }

// console.log(truck)
// truck.start()
// console.log(truck)

////////////////////////////////////
// prototypes
// const x = { y: 'z' }
// console.log(x)
// console.log(x.toString())

// x.toString = () => 'I am x'
// console.log(x.toString())

// const y = { z: 0 }
// console.log(y.toString())

// Object.prototype.toString = () => 'I am an object'

// console.log({}.toString())

// const z = {}
