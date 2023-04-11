const mongoose = require("mongoose");
const db = "mongodb+srv://psubhasree9:AlhnC9VBNlZl9s9j@cluster0.poiturl.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async() =>{
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(db,{
            useNewUrlParser: true,
            
        })
    }
    catch (err){
        console.error(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;