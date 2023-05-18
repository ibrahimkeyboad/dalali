import mongoose from 'mongoose';
export async function connetDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Conneted At ${conn.connection.host}`);
  } catch (error) {
    console.error('mongoose error', error);
  }
}
