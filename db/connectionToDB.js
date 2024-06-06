import mongoose from "mongoose"
// const MONGO_URI="mongodb+srv://cfuser:12345@cluster0.kkskqwx.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.
        MONGO_URI);
        console.log("Connected To MongoDB!")
    }catch(error){console.log(`Error Connecting to MongoDB : ${error}`)}
}
export default connectToMongoDB;