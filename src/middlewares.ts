
import {Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken";
const secret = "123123"
export const userMiddleWare = (req : Request,res : Response,next:NextFunction) => {
    const token= req.headers["authorization"] ?? "";
    console.log(token+"checker");
    const decoded = jwt.verify(token, secret) as JwtPayload & {
        id:string
    };
    if(decoded){
        req.userId = decoded.id 
        next();
    }
    else{
        res.status(403).json({
            message : "you are not logged in"
        })
    }
}