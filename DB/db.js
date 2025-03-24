import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_ATLAS);
    console.log(`MongoDB connected :: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB


