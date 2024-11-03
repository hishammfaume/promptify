import mongoose from "mongoose";


let isConnected = false;
export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected){
        console.log('using existing connection')
        return;
    }

    try{    
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "promtify",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
        console.log('connected to database')

    }catch (e){
        console.log('error connecting to database')
        console.log(e)
    }

}