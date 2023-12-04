import validator from "validator"
import bcrypt from "bcrypt"
import { dummyUsers } from "./dummy"


// interface inputProp {
//     input: string | number
// }

// export const inputValidator = (input: inputProp) => {
//     if(!input) return `${input} is required`
// }

export const emailValidator = (input: string) => validator.isEmail(input)

export const strongPassword = (input: string) => validator.isStrongPassword(input)

export const salt = () => bcrypt.genSalt(10)

export const hashedPassword = (password: string, salted: string) => bcrypt.hash(password, salted)

export const comparePassword = (password: string, savedPassword: string) => bcrypt.compare(password, savedPassword)

export const checkingPhone = (num: string) => validator.isMobilePhone(num)

export const inputFinder = (value: string) => ''

