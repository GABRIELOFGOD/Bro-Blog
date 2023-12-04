"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writerApplication = exports.userRegistration = void 0;
const utils_1 = require("../utils");
const userRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, who, phone } = req.body;
    try {
        // ============ CHECKING IF INPUTS ARE VALID ============ //
        if (!name || !email || !password || !who || !phone)
            return (res.status(400).json({ error: 'All inputs are required' }));
        // =========== VALIDATING "WHO" INPUT VALUE ============== //
        if (who != 'writer' && who != 'reader')
            return (res.status(400).json({ error: 'Invalid role selection, please select if your are a writer or a reader' }));
        // ============ VALIDATING EMAIL ========== //
        const isEmail = (0, utils_1.emailValidator)(email);
        if (!isEmail)
            return (res.status(400).json({ error: 'Enter a valid email' }));
        // =========== CHECKING FOR STRONG PASSWORD ============= //
        const strPwd = (0, utils_1.strongPassword)(password);
        if (!strPwd)
            return (res.status(400).json({ error: 'Your Password is not strong enough, It must include at least an uppercase, a lowercase, a number and a special character' }));
        // ============CHECKING IF IS MOBILE PHONE NUMBER ============= //
        const isPhone = (0, utils_1.checkingPhone)(phone);
        if (!isPhone)
            return (res.status(400).json({ error: 'Enter a valid phone number' }));
        // ============ HASHING PASSWORD ============== //
        const salted = yield (0, utils_1.salt)();
        const newPassword = yield (0, utils_1.hashedPassword)(password, salted);
        // =========== CREATING NEW USER ============== //
        const newUser = { name, email, who, phone, newPassword };
        res.status(201).json({
            success: 'new user created successfully',
            data: newUser
        });
    }
    catch (err) {
        console.log(err);
        res.status(401).json({ error: 'Something went wrong, check your internet and if this error continues, kindly inform us' });
    }
});
exports.userRegistration = userRegistration;
const writerApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, phone } = req.body;
    try {
        // ============== VALIDATING USER INPUT ============== //
        if (!email && !phone)
            return (res.status(400).json({ error: 'Enter your registration email or your phone number' }));
        // 
    }
    catch (err) {
        console.log(err);
        res.status(401).json({ error: 'Something went wrong, check your internet and if this error continues, kindly inform us' });
    }
});
exports.writerApplication = writerApplication;
