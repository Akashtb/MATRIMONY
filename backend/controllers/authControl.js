import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js";
import jwt  from "jsonwebtoken";
export const Register = async (req, res, next) => {
  try {
    let user = await User.findOne(req.params.userID);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    if (user) {
      user.age = req.body.age;
      user.gender = req.body.gender;
      user.dateOfBirth = req.body.dateOfBirth;
      user.city = req.body.city;
      user.state = req.body.state;
      user.district = req.body.district;
      user.qualification = req.body.qualification;
      user.professional = req.body.professional;
      user.password= hash,
      await user.save();
      res.status(200).json({user, message: "User updated successfully" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        googleID: req.body.googleID,
        displayName: req.body.displayName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        city: req.body.city,
        state: req.body.state,
        district: req.body.district,
        qualification: req.body.qualification,
        professional: req.body.professional,
        password: hash,
      });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (err) {
    next(err);
  }
};

export const Login = async (req, res, next) => {
  try {
    const user = await User.findOne({email:req.body.email})
    if (!user) return next(createError(404,"user not found"))

      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
      if (!isPasswordCorrect) return next(createError(400,"Invalid password"))

        const token = jwt.sign({
          id:user._id,
          isAdmin:user.isAdmin,
          isStaff:user.isStaff,
          googleID:user.googleID,
          password:user.password,
          email:user.email
        },
        process.env.JWT
      )
        const{password,isAdmin,isStaff,...otherDetails}=user._doc

    res.cookie("accessToken",token,{
      httpOnly:true,
    }).status(201).json(otherDetails);
  } catch (err) {
    next(err)
  }
}
