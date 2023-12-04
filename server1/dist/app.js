"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = 3300;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.use((0, cors_1.default)());
// ====== MIDDLEWARES CONFIGURATION ========== //
app.use(express_1.default.json());
app.use('/', routes_1.userRouter);
app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`);
});
