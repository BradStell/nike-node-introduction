export enum AppRole {
  ADMIN = 'Admin',
  READ_ONLY = 'ReadOnly',
  BUSINESS_USER = 'BusinessUser'
}

export type ApplicationUser = {
  firstName: string
  lastName: string
  age: number
  address?: Address
  lastLoginTime?: Date
  role: AppRole
}

export type Address = {
  street: string
  city: string
}
