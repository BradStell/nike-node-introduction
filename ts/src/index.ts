import utils from './utils'
import { ApplicationUser, AppRole } from './types'

const c = utils.add(4, 5)
console.log(c)

/**
 * Prints to console hello [name]
 * @param name to say hello to
 */
const sayHello = (name: string): void => {
  console.log(`Hello, ${name}`)
}
sayHello('Brad')

// boolean
const evens: number[] = [1, 2, 3, 4].filter(utils.isEven)
console.log(evens)

const logUserIn = (user: ApplicationUser): void => {
  user.lastLoginTime = new Date()
  console.log(`User ${user.firstName} has logged in`)

  if (user.role === AppRole.ADMIN) {
    // something special
  }
}

const user1: ApplicationUser = {
  firstName: 'Scout',
  lastName: 'Stell',
  age: 32,
  role: AppRole.ADMIN
}

const user2: ApplicationUser = {
  firstName: 'Ranger',
  lastName: 'Stell',
  age: 28,
  role: AppRole.READ_ONLY
}

logUserIn(user1)
logUserIn(user2)

const buf: Buffer = Buffer.from('Hello Buffer')
console.log(buf.toString('hex'))
