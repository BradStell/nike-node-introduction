// https://nodejs.org/docs/latest-v12.x/api/index.html

////////////////////////////////////////////////////////////
// File System
const fs = require('fs')

// read .txt file
fs.readFile('10_string_file.txt', (err, data) => {
  if (err) {
    console.error(err.toString())
    process.exit(1)
  }

  // data is a Buffer
  console.log(data)

  // convert buffer to utf-8 characters
  console.log(data.toString('utf-8'))
})

// // read .json file
// fs.readFile('10_json_data.json', (err, data) => {
//   if (err) {
//     console.error(err.toString())
//     process.exit(1)
//   }

//   // Parse the string representation of our data
//   // into a javascript object
//   const dogs = JSON.parse(data.toString())
//   console.log(dogs)

//   // Demonstrage that `dogs` is a javascript array
//   // get the names of all cream dogs
//   const creamDogNames = dogs
//     .filter(dog => dog.color === 'Cream')
//     .map(dog => dog.name)
  
//   console.log(creamDogNames)
// })


/////////////////////////////////
// Buffers
// const buf = Buffer.from('this is a test')
// console.log(buf)

// buf[0] = 0x7A // hex code for 'z'
// console.log(buf)
// console.log(buf.toString())

// alloc memory
// const buf = Buffer.alloc(4);
// console.log(buf)

// little endian int32
// const buf = Buffer.from([0, 0, 1, 13]) // 269 little endian bytes
// const number = buf.readInt32BE()
// console.log(number)

///////////////////////////////////
// Crypto
// const crypto = require('crypto')

// // Create SHA256 hash
// const hash = crypto.createHash('sha256')
// hash.update('Brad Stell')
// console.log(hash.digest())
// // console.log(hash.digest('hex'))
// // console.log(hash.digest('base64'))

// chain above example
// const hash = crypto
//   .createHash('sha256')
//   .update(Buffer.from('Brad Stell'))
//   .digest('base64')

// console.log(hash)


// // Encrypt with AES CBC (AES Cypher Block Chaining)
// const password = 'secretpassword'
// // 24 byte key length (192 bits) for aes-192
// const key = crypto.scryptSync(password, 'salt', 24)
// // initialization vector
// const iv = crypto.randomBytes(16)
// // create cipher
// const cipher = crypto.createCipheriv('aes-192-cbc', key, iv)
// // encrpyt some text
// let encrypted = cipher.update('some text to encrpyt', 'utf8', 'hex')
// encrypted += cipher.final('hex')
// console.log(encrypted)


///////////////////////////////////
// URL
// const url = require('url')

// const myURL = url.parse('http://example.com/some-resource?user=brad')
// console.log(myURL)

////////////////////////////////
// http
const http = require('http')

// // make get request
// const options = {
//   hostname: 'dummy.restapiexample.com',
//   port: 80,
//   path: '/api/v1/employees',
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// }

// const req = http.request(options, (res) => {
//   res.setEncoding('utf8')
//   let data = ''

//   res.on('data', (chunk) => {
//     data += chunk
//   })

//   res.on('end', () => {
//     console.log(JSON.stringify(JSON.parse(data), null, 2))
//   })
// })

// req.on('error', (err) => {
//   console.error(err.toString())
// })

// req.end()


// create server
// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.end('Hello, World!');
// })
// server.listen(5001)
