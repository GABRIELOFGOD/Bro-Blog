"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputFinder = exports.checkingPhone = exports.comparePassword = exports.hashedPassword = exports.salt = exports.strongPassword = exports.emailValidator = void 0;
const validator_1 = __importDefault(require("validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// interface inputProp {
//     input: string | number
// }
// export const inputValidator = (input: inputProp) => {
//     if(!input) return `${input} is required`
// }
const emailValidator = (input) => validator_1.default.isEmail(input);
exports.emailValidator = emailValidator;
const strongPassword = (input) => validator_1.default.isStrongPassword(input);
exports.strongPassword = strongPassword;
const salt = () => bcrypt_1.default.genSalt(10);
exports.salt = salt;
const hashedPassword = (password, salted) => bcrypt_1.default.hash(password, salted);
exports.hashedPassword = hashedPassword;
const comparePassword = (password, savedPassword) => bcrypt_1.default.compare(password, savedPassword);
exports.comparePassword = comparePassword;
const checkingPhone = (num) => validator_1.default.isMobilePhone(num);
exports.checkingPhone = checkingPhone;
const inputFinder = (value) => '';
exports.inputFinder = inputFinder;
