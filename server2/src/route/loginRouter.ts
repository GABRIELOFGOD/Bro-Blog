import { Router } from "express";
import { userLogin } from "../controller";

export const router = Router()

router.route('/login').post(userLogin)

