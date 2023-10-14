import connectDB from '@/db';
import House from '@/models/house';
import { NextResponse } from 'next/server';

export async function Post(req: Request) {
  connectDB();
  try {
    const body = await req.json();

    const {
      type,
      price,
      purpose,
      duration,
      desctiption,
      street,
      city,
      country,
      payFormDuration,
      category,
    } = body;
    const house = await House.create({
      type,
      price,
      purpose,
      duration,
      desctiption,
      street,
      city,
      country,
      payFormDuration,
      category,
    });

    return NextResponse.json({ house }, { status: 200 });
  } catch (err) {
    new NextResponse('something went wrong', { status: 500 });
  }
}
