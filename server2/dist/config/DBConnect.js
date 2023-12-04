"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogin = void 0;
const mongoose = require('mongoose'); // Erase if already required
// Declare the Schema of the Mongo model
const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
//Export the model
exports.UserLogin = mongoose.model('User', loginSchema);
