import connectDB from '@/db';
import Accommodation from '@/models/accommodation';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    connectDB();
    const id = params.id;

    const house = await Accommodation.findOne({ _id: id });

    console.log('house', house);

    if (!house) {
      return new Response('Not found', { status: 404 });
    }

    return Response.json(house, { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response('something went wrong', { status: 500 });
  }
}
