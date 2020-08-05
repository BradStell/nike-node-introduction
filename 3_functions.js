// //////////////////////////////////////////
// // add
function add(a, b) {
  return a + b
}

const count = add(5, 50)
console.log(count)

const count2 = add(3, 5.4)
console.log(count2)

const strAdd = add('Hello, ', 'World!')
console.log(strAdd)

// //////////////////////////////////////////
// // leave off parameters
function doSomething(a, b, c) {
  console.log('a is ' + a)
  console.log('b is ' + b)
  console.log('c is ' + c)
}

doSomething(1, true, 'Hello')
console.log('---')
doSomething('42', 34)
console.log('---')
doSomething()

// ///////////////////////////////////////////
// // store function in variable
const alsoAdds = add
const x = alsoAdds(5, 3)
console.log('---')
console.log(x)


// ////////////////////////////////////////////////
// // Pass function into function as parameter
function addFunctions (a, b) {
  return a() + b()
}

function get7() {
  return 7
}

const fourteen = addFunctions(get7, get7)
console.log('------')
console.log(fourteen)


// ///////////////////////////////////
// // more advanced version
function getUserFromDatabase(callbackFunction) {
  // does some async processing
  callbackFunction('Brad Stell')
}

function printUser(username) {
  console.log(username)
}

getUserFromDatabase(printUser)

getUserFromDatabase(function(username) {
  console.log('Hello, ' + username)
})


////////////////////////////////////////////////////////
// Function expressions / aka "fat arrow functions"
const double = (x) => {
  return x * 2
}

const double = (x) => x * 2

const double = x => x * 2
