import mongoose from 'mongoose'

const connectDb = async () => {
    if (mongoose.connections[0].readyState){
        console.log('already connected to db');
        return
    }
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to Mongo DB');
}

export default connectDb