const mongoose =require('mongoose');

const dbURL = "mongodb+srv://Abhishek:Abhishek@cluster0.k9ybfaj.mongodb.net/newdata?retryWrites=true&w=majority";

const connectDB = async ()=>{
    // mongoose.connect(dbURL,()=>{
    //     console.log("connected");
    // });
    await mongoose.connect(dbURL).then(console.log("connected"));
}

module.exports = connectDB;