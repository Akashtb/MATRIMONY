import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    googleID: {
        type: String,
        required: true,
        unique:true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    gender:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    dateOfBirth: {
        type: Date,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    district: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    qualification: {
        type: String,
    },
    professional: {
        type: String,
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isStaff: {
        type: Boolean,
        default: false
    }

},
{timestamp:true}
)

const User = mongoose.model('User', userSchema)
export default User;