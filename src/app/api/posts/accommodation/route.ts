import connectDB from '@/db';
import Accommodation from '@/models/accommodation';

export async function POST(req: Request) {
  try {
    connectDB();
    const body = await req.json();

    const {
      type,
      price,
      purpose,
      description,
      location,
      category,
      kitchen,
      images,
      room,
      bath,
    }: Accommodation = body;
    const house = await Accommodation.create({
      type,
      price,
      purpose,
      description,
      location,
      category,
      images,
      room,
      kitchen,
      bath,
    });

    return Response.json({ house }, { status: 201 });
  } catch (err) {
    return new Response(`something went wrong ${err}`, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    connectDB();

    const houses = await Accommodation.find();

    return Response.json(houses, { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response(`something went wrong ${err}`, { status: 500 });
  }
}
