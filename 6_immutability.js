/////////////////////////
// copying data

///////////////////////// OBJECT "dot" ASSIGN
// object.assign
const scout = {
  name: 'Scout',
  breed: 'Dachshund',
  miniature: true
}
console.log("scout:", scout)

// direct copy
// const scoutCopy = Object.assign({}, scout)
// console.log("scoutCopy:", scoutCopy)

// copy and overwrite property
// const ranger = Object.assign({}, scout, {
//   name: 'Ranger'
// })
// console.log('ranger:', ranger)

// console.log('-------')

// scout.name = 'Scout Stell'
// console.log("scout:", scout)
// console.log("ranger:", ranger)

// console.log('-------')

//////////////////////////////////////// SPREAD
// same thing with spread operator
// const sparky = {
//   ...scout,
//   name: 'Sparky'
// }
// console.log("sparky:", sparky)

// console.log('-------')

////////////////////////////
// what happens when object properties are objects?
// const john = {
//   name: 'John',
//   financialInformation: {
//     total: 0.00,
//     currency: 'USD'
//   }
// }
// console.log("john:", john)

// const brad = Object.assign({}, john, { name: 'Brad'})
// console.log("brad:", brad)

// john.financialInformation.total = 1000000
// console.log("john:", john)

// // How much money does brad have?
// console.log("brad:", brad)
