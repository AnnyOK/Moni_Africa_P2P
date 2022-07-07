import { Request, Response, NextFunction } from  "express";
// import pool  from  "../db/connection";
import bcrypt from "bcryptjs"
import dotenv from 'dotenv';


dotenv.config()
export const registerUser = async(req:Request, res:Response) =>{
    const {email,fullname,mobile,password} = req.body
    try{
        const salt= process.env.SALT_ROUNDS as string
        const hashPassword = bcrypt.hash(password,+salt)
        
    }catch(err){
        res.status(500).send(err)
    }

}
export const allUsers= async(req:Request, res:Response)=>{

}
export const createUser= async(req:Request, res:Response)=>{
    
}
export const createTransaction= async(req:Request, res:Response)=>{
    
}