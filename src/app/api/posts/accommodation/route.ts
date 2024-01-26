import connectDB from '@/db';
import Accommodation from '@/models/accommodation';
import { NextResponse } from 'next/server';

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
    await connectDB();

    const houses = await Accommodation.find();

    console.log(houses);

    return NextResponse.json(houses, { status: 200 });

    // return Response.json(houses, { status: 201 });
  } catch (err) {
    // console.log(' err');
    return new Response(`something went wrong ${err}`, { status: 500 });
  }
}
