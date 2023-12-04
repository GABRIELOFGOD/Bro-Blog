import { Router } from 'express'
import { userRegistration } from '../controllers/user'


export const router = Router()

router.route('/register').post(userRegistration)