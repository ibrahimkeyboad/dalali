import connectDB from '@/db';
import User from '@/models/user';

async function getUsers() {
  try {
    connectDB();
    const user = await User.find();

    if (!user) {
      return [];
    }

    return user;
  } catch (error) {
    console.log('error', error);
    return [];
  }
}

export default getUsers;
