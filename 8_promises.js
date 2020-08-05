///////////////////////////////////////
// asyncronous code via callback

// syncronous example
function getWeatherFromServerSync() {
  return 'Sunny'
}
console.log(getWeatherFromServerSync())

// asyncronous
// function getWeatherAsync() {
//   setTimeout(() => {
//     return 'Sunny'
//   }, 2000)
// }
// console.log(getWeatherAsync())

/////////////////////////////////////////////////////////
// traditional way to do async code in node is callbacks
// callback example
// function getWeatherAsync(callback) {
//   setTimeout(() => {
//     callback('Sunny')
//   }, 2000)
// }
// getWeatherAsync(function(weather) {
//   console.log(weather)
// })
// console.log('I will run first')

////////////////////////////////////////////////////
// next wave - PROMISES
// const promiseWrappedNumber = new Promise((resolve, reject) => {
//   resolve(7)
// })
// console.log(promiseWrappedNumber)

// // get value out
// promiseWrappedNumber.then((value) => {
//   console.log("promise value:", value)
// })

// const failedPromiseWrappedNumber = new Promise((resolve, reject) => {
//   reject("This async operatin failed")
// })
// console.log("failedPromiseWrappedNumber:", failedPromiseWrappedNumber)

// // failedPromiseWrappedNumber.catch((reason) => {
// //   console.log("reason async op failed →", reason)
// // })

// console.log('------------')
////////////////////////////////////
// async / await
// function getUserAsync() {
//   return Promise.resolve({ username: 'brad.stell@nike.com', age: 32 })
// }

// const userPromise = getUserAsync()
// console.log("userPromise:", userPromise)

// will not work
// const user = await getUserAsync()
// console.log(user)

// async function app() {
//   const user = await getUserAsync()
//   console.log("user in app:", user)
// }
// app()
