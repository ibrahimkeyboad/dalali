import mongoose from 'mongoose';
async function connectDB() {
  console.log(process.env.MONGODB_URI);

  // try {
  //   if (mongoose.connections[0].readyState) {
  //     console.log('Mongodb is already connected');
  //     return;
  //   }

  const conn = await mongoose
    .connect(process.env.MONGODB_URI)
    .catch((error) => console.log('error'));
  //   console.log(`MongoDB Conneted At ${conn.connection.host}`);
  // } catch (error) {
  //   console.error('mongoose error', error);
  // }
}

export default connectDB;
