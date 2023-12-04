import { Request, Response } from "express"
import { checkingPhone, emailValidator, hashedPassword, salt, strongPassword } from "../utils"

export const userRegistration = async (req: Request, res: Response) => {
    const { name, email, password, who, phone } = req.body
    try {
        // ============ CHECKING IF INPUTS ARE VALID ============ //
        if(!name || !email || !password || !who || !phone) return(res.status(400).json({error: 'All inputs are required'}))

        // =========== VALIDATING "WHO" INPUT VALUE ============== //
        if(who != 'writer' && who != 'reader') return(res.status(400).json({error: 'Invalid role selection, please select if your are a writer or a reader'}))

        // ============ VALIDATING EMAIL ========== //
        const isEmail = emailValidator(email)
        if(!isEmail) return(res.status(400).json({error: 'Enter a valid email'}))

        // =========== CHECKING FOR STRONG PASSWORD ============= //
        const strPwd = strongPassword(password)
        if(!strPwd) return(res.status(400).json({error: 'Your Password is not strong enough, It must include at least an uppercase, a lowercase, a number and a special character'}))

        // ============CHECKING IF IS MOBILE PHONE NUMBER ============= //
        const isPhone = checkingPhone(phone)
        if(!isPhone) return(res.status(400).json({error: 'Enter a valid phone number'}))

        // ============ HASHING PASSWORD ============== //
        const salted = await salt()
        const newPassword = await hashedPassword(password, salted)

        // =========== CREATING NEW USER ============== //
        const newUser = {name, email, who, phone, newPassword}

        res.status(201).json({
            success: 'new user created successfully',
            data: newUser
        })
    } catch (err) {
        console.log(err)
        res.status(401).json({error: 'Something went wrong, check your internet and if this error continues, kindly inform us'})
    }
}

export const writerApplication = async (req: Request, res: Response) => {
    const { email, phone } = req.body
    try {
        // ============== VALIDATING USER INPUT ============== //
        if(!email && !phone) return(res.status(400).json({error: 'Enter your registration email or your phone number'}))
            
        // 
    } catch (err) {
        console.log(err)
        res.status(401).json({error: 'Something went wrong, check your internet and if this error continues, kindly inform us'})
        
    }
}
