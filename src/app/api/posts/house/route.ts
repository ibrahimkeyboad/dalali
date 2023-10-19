import connectDB from '@/db';
import House from '@/models/house';

export async function POST(req: Request) {
  try {
    connectDB();
    const body = await req.json();

    console.log('body', body);

    const {
      type,
      price,
      purpose,
      duration,
      description,
      street,
      city,
      country,
      payFormDuration,
      category,
      located,
      kitchen,
      images,
      bedroom,
      bathroom,
    } = body;
    const house = await House.create({
      type,
      price,
      purpose,
      duration,
      description,
      street,
      city,
      country,
      payFormDuration,
      category,
      located,
      images,
      bedroom,
      kitchen,
      bathroom,
    });

    return Response.json({ house }, { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response('something went wrong', { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    connectDB();

    const houses = await House.find();

    return Response.json(houses, { status: 201 });
  } catch (err) {
    return new Response(`something went wrong ${err}`, { status: 500 });
  }
}
