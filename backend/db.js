import mongoose from "mongoose";

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("SUCCESSFULLY CONNECTED TO THE DATABASE $$$$");
    } catch (err) {
        console.log("Something went Wrong Somewhere!!!,",err);
    }
}

export default connect