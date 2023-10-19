import connectDB from '@/db';
import House from '@/models/house';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    connectDB();
    const id = params.id;

    console.log(id);

    const house = await House.findById({ _id: id });

    return Response.json(house, { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response('something went wrong', { status: 500 });
  }
}
