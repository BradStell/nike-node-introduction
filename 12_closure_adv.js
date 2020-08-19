// module level closure

let loggedInUser = 'Brad'

const accessTimes = []

const getLoggedInUser = () => {
  accessTimes.push(Date.now())
  return loggedInUser
}

const setLoggedInUser = (user) => {
  accessTimes.push(Date.now())
  loggedInUser = user
}

const printAccessTimes = () => {
  console.log(JSON.stringify(accessTimes))
}

module.exports = {
  getLoggedInUser,
  setLoggedInUser,
  printAccessTimes
}
