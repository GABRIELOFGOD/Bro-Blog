"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
exports.router = (0, express_1.Router)();
exports.router.route('/register').post(user_1.userRegistration);
