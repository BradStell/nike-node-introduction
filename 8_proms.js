function getUserAsync() {
  return new Promise((resolve, reject) => {
    // resolve({ username: 'Brad' })
    reject('This failed for some reason')
  })
}

async function app() {
  try {
    const user = await getUserAsync()
    console.log(user)
  } catch (err) {
    console.log(err)
  }
}
app()
