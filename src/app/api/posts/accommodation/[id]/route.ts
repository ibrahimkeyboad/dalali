import connectDB from '@/db';
import Accommodation from '@/models/accommodation';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    connectDB();
    const id = params.id;

    console.log(id);

    const house = await Accommodation.findById({ _id: id });

    return Response.json(house, { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response('something went wrong', { status: 500 });
  }
}
