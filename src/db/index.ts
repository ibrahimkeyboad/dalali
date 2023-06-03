import mongoose from 'mongoose';
async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Conneted At ${conn.connection.host}`);
  } catch (error) {
    console.error('mongoose error', error);
  }
}

export default connectDB;
