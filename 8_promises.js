///////////////////////////////////////
// asyncronous code via callback

// traditional linear syncronous example
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

// getWeatherAsync((weather) => {
//   console.log(weather)
// })

// console.log('I will run first')

// Problem - "callback hell | christmas tree code"
// getUserAsync((user) => {
//   getUserSettingsAsync(user.id, (settings) => {
//     setLoggedInTime(user.id, settings.lastLoginTime, (err, success) => {
//       if (!err) {
//         console.log(success)
//         // ...
//         getUserTodosAsync(user.id, (todos) => {
//           // ...
//         })
//       }
//     })
//   })
// })

////////////////////////////////////////////////////
// next wave - PROMISES
// const promiseWrappedNumber = new Promise((resolve) => {
//   resolve(7)
// })
// console.log(promiseWrappedNumber)

// // // get value out
// promiseWrappedNumber.then((value) => {
//   console.log(value)
// })

// const failedPromiseWrappedNumber = new Promise((resolve, reject) => {
//   reject("This async operatin failed")
// })
// console.log(failedPromiseWrappedNumber)

// failedPromiseWrappedNumber.catch((reason) => {
//   console.log(reason)
// })

// function getUserAsync() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ username: 'bstell', email: 'brad.stell@nike.com' })
//     }, 2000)
//   })
// }

// getUserAsync()
//   .then((user) => {
//     console.log(user)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// chain promises
// getUserAsync()
//   .then(getUserSettingsAsync)
//   .then(setLoggedInTime)
//   .then(getUserTodosAsync)
//   .then(doSomethingWithTodos)
//   .catch(handleErrors)


////////////////////////////////////
// async / await
// function getUserAsync() {
//   return Promise.resolve({ username: 'brad.stell@nike.com', age: 32 })
// }

// const userPromise = getUserAsync()
// console.log(userPromise)

// // will not work
// // const user = await getUserAsync()
// // console.log(user)

// async function app() {
//   const user = await getUserAsync()
//   console.log(user)
// }
// app()

// function exampleWithAsyncAwait() {
//   try {
//     const user = await getUserAsync('1234')
//     const settings = await getUserSettingsAsync(user.id)
//     const success = await setLoggedInTime(user.id, settings.lastLoginTime)
//     const todos = await getUserTodosAsync(user.id)
//     await doSomethingWithTodos()
//   } catch (err) {
//     handleErrors(err)
//   }
// }
