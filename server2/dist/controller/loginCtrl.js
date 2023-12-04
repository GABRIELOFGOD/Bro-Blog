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
exports.userLogin = void 0;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, phone, password } = req.body;
    try {
        console.log({ email, phone, password });
        res.send({ email, phone, password });
    }
    catch (err) {
        console.log(err);
        res.status(401).json({ error: 'Something went wrong, check your internet and if this error continues, kindly inform us' });
    }
});
exports.userLogin = userLogin;
