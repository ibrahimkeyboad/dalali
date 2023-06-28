import Accommodation from '@/models/accommodation';
import connectDB from '@/db';

async function getPosts() {
  try {
    connectDB();
    const posts = await Accommodation.find();

    if (!posts) {
      return [];
    }

    return posts;
  } catch (error) {
    return [];
  }
}

export default getPosts;
