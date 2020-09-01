// 'use strict'
//////////////////////////////////////////////////////
////////////         IMMUTABILITY       //////////////
//////////////////////////////////////////////////////

// Not changing values of objects
// instead creating new objects with new values

const a = Object.freeze({
  name: 'Ranger',
  age: 3
})
a.age = 5 // nope - error if in 'use strict' mode
a.name = 'Scout'

console.log(a)


////////
const people = []

// lets be pure and not opperate on any outside state
const addPerson = (people, person) => {
  person.addedTime = Date.now()
  people.push(person)
  return people
}

const brad = { name: 'Brad' }
const newPeople = addPerson(people, brad)

console.log('brad object', brad) // oops we manipulated the brad object
console.log('returned array', newPeople)
console.log('original array', people) // oops we manipulated the original array

//////// Make add person function operate on data in an immutable way
const people2 = []

const addPersonBetter = (people, person) => {
  return [
    ...people, // copy existing array by "spreading" it into new array
    {
      ...person,  // copy existing person by spreading properties into new object
      addedTime: Date.now() // set new property on new object
    }
  ]
}

const ranger = { name: 'Ranger' }
const newPeople2 = addPersonBetter(people2, ranger)

console.log('ranger object', ranger) // unchanged
console.log('returned array', newPeople2)
console.log('original array', people2) // still the original array



