import connectDB from '@/db';
import Accommodation from '@/models/accommodation';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    connectDB();
    const id = params.id;

    const house = await Accommodation.findById({ _id: id });

    return Response.json(house, { status: 200 });
  } catch (err) {
    return new Response('something went wrong', { status: 500 });
  }
}
