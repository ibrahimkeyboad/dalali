import connectDB from '@/db';
import Bedroom from '@/models/bedroom';

export async function POST(req: Request) {
  try {
    connectDB();
    const body = await req.json();

    console.log('body', body);

    const { sort, description } = body;
    const house = await Bedroom.create({
      sort,
      description,
    });

    return Response.json({ house }, { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response('something went wrong', { status: 500 });
  }
}
