// async/await

function getUserAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: 'Brad' })
    }, 500)
  })
}

async function app() {
  console.log('before get user')
  const user = await getUserAsync()
  console.log('after get user')
  console.log(user)
}
app()
console.log('I will run before user returns')
