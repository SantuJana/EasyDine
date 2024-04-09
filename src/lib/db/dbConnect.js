import mongoose from "mongoose";

const mongoDBUri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already Connected To MongoDB");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting.....");
    return;
  }
  try {
    await mongoose.connect(mongoDBUri, { dbName });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Connection Failed > ', error.message);
    throw new Error('MongoDB Connection Failed');
  }
};

export default connect;
