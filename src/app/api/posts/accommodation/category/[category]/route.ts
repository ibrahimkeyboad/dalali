import connectDB from '@/db';
import Accommodation from '@/models/accommodation';

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  try {
    connectDB();
    const category = params.category;

    console.log(category);

    const house = await Accommodation.find({ category: category });

    return Response.json(house, { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response('something went wrong', { status: 500 });
  }
}
