///////////////////////////////////////
// asyncronous code via callback

//////// build off of same function

// traditional linear syncronous example
function getWeatherFromServerSync() {
  return 'Sunny'
}

console.log(getWeatherFromServerSync())

// asyncronous
function getWeatherAsync() {
  setTimeout(() => {
    return 'Sunny'
  }, 2000)
}

console.log(getWeatherAsync())

/////////////////////////////////////////////////////////
// traditional way to do async code in node is callbacks
// callback example
function getWeatherAsync(callback) {
  setTimeout(() => {
    callback('Sunny')
  }, 2000)
}

getWeatherAsync((weather) => {
  console.log(weather)
})

console.log('I will run first')

function getUserAsync(cb) {
  setTimeout(() => {
    cb({ id: 1, username: 'Brad', email: 'brad.stell@nike.com' })
  }, 500)
}

function getUsersSettings(id, cb) {
  setTimeout(() => {
    cb({ theme: 'dark' })
  }, 500)
}

function toggleTheme(id, prevTheme, cb) {
  setTimeout(() => {
    cb(null, true)
  }, 500)
}

function getUserTodos(id, cb) {
  setTimeout(() => {
    cb([])
  }, 500)
}

// "callback hell" | christmas tree code
getUserAsync((user) => {
  // have user here
  getUsersSettings(user.id, (settings) => {
    // also have settings here
    toggleTheme(user.id, settings.theme, (err, result) => {
      if (!err) {
        getUserTodos(user.id, (todos) => {
          // have todos here
        })
      }
    })
  })
})

////////////////////////////////////////////////////
// next wave - PROMISES
const promiseWrappedNumber = new Promise((resolve) => {
  resolve(7)
})
console.log(promiseWrappedNumber)

// // // // get value out
promiseWrappedNumber.then((value) => {
  console.log(value)
})

// Promises
const promiseWith7Inside = new Promise((resolve) => {
  resolve(7)
})
console.log(promiseWith7Inside)

promiseWith7Inside.then((value) => {
  console.log(value)
  return value * 2
}).then((value) => {
  console.log(value)
  return new Promise((resolve) => {
    resolve(value * 3)
  })
}).then((value) => {
  console.log(value)
})




const failedPromiseWrappedNumber = new Promise((resolve, reject) => {
  reject("This async operatin failed")
})
console.log(failedPromiseWrappedNumber)

failedPromiseWrappedNumber.catch((reason) => {
  console.log(reason)
})

function getUserAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username: 'bstell', email: 'brad.stell@nike.com' })
    }, 2000)
  })
}

getUserAsync()
  .then((user) => {
    console.log(user)
  })
  .catch((err) => {
    console.log(err)
  })

// chain promises
getUserAsync()
  .then(getUserSettingsAsync)
  .then(setLoggedInTime)
  .then(getUserTodosAsync)
  .then(doSomethingWithTodos)
  .catch(handleErrors)


////////////////////////////////////
// async / await
function getUserAsync() {
  return Promise.resolve({ username: 'brad.stell@nike.com', age: 32 })
}

const userPromise = getUserAsync()
console.log(userPromise)

// // // will not work
const user = await getUserAsync()
console.log(user)

async function app() {
  const user = await getUserAsync()
  console.log(user)
}
app()

// fail case?

async function exampleWithAsyncAwait() {
  try {
    const user = await getUserAsync('1234')

    const promises = [
      getUserSettingsAsync(user.id),
      setLoggedInTime(user.id),
      getUserTodosAsync(user.id)
    ]

    const results = await Promise.allSettled(promises)

  } catch (err) {
    handleErrors(err)
  }
}
