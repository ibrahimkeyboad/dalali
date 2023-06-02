import Accommodation from '@/models/accommodation';
import { NextResponse } from 'next/server';
import connetDB from '@/db';

export async function Post(request: Request) {
  connetDB();
  const body = await request.json();
}

export async function GET(req: Request) {
  try {
    connetDB();

    const data = await Accommodation.find();

    console.log(data);

    return NextResponse.json(data);
  } catch (err) {
    return new NextResponse(`${err}`, { status: 500 });
  }
}
