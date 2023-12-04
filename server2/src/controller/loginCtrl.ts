import { Request, Response } from "express";


export const userLogin = async (req: Request, res: Response) => {
    const { email, phone, password } = req.body
    try {
        console.log({ email, phone, password })
        res.send({ email, phone, password })
    } catch (err) {
        console.log(err)
        res.status(401).json({error: 'Something went wrong, check your internet and if this error continues, kindly inform us'})
    }
}