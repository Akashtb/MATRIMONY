import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.accessToken
    if(!token){
        return next(createError(401,"You are not authenticated"))
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err){
            return next(createError(403,'token is not vaild'))
        }
        req.user = user
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id) {
        next()
      } else {
        return next(
          createError(403, 'You are not authorized to access this resource.')
        )
      }
    })
  }

  export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next()
      } else {
        return next(
          createError(403, 'You are not an admin to perform this operation.')
        )
      }
    })
  }