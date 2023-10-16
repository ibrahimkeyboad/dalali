import connectDB from '@/db';
import Bedroom from '@/models/bedroom';

export async function POST(req: Request) {
  try {
    connectDB();
    const body = await req.json();

    console.log('body', body);

    const { sort, description, house } = body;
    const bedroom = await Bedroom.create({
      sort,
      description,
      house,
    });

    return Response.json({ bedroom }, { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response('something went wrong', { status: 500 });
  }
}
