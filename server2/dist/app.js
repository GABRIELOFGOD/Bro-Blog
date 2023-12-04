"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = require("./route");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3400;
// ============ MIDDLEWARE CONFIGURATION ============ //
app.use(express_1.default.json());
// ============== ROUTER CONFIGURATION =============== //
app.use('/', route_1.userLoginRouter);
app.listen(PORT, () => {
    console.log(`server running on port hhtp://localhost:${PORT}`);
});
