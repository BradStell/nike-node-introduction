///////////////////////////////////
// let

// int
let age = 32
console.log(age)

// floating point
let pi = 3.14
console.log(pi)

// strings
let name = 'Brad'
let lastName = "Stell"
console.log(name + ' ' + lastName)
console.log(`${name} ${lastName}`)

// boolean
let worksAtNIKE = true
console.log(worksAtNIKE)

// demonstrate types
console.log('age is of type: ' + typeof age)
console.log('pi is of type: ' + typeof pi)
console.log('name is of type: ' + typeof name)
console.log('worksAtNIKE is of type: ' + typeof worksAtNIKE)

///////////////////////////////////
// reassign different type to same variable
let x = 3
console.log(typeof x)
x = "three"
console.log(typeof x)

///////////////////////////////////
// const
const theAnswer = 42
theAnswer = 13
