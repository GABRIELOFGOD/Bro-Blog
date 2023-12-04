import bcrypt from 'bcrypt'

 export const comparePassword = (password: string, savedPassword: string) => bcrypt.compare(password, savedPassword)