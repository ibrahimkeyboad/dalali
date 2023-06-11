import Accommodation from '@/models/accommodation';
import { NextResponse } from 'next/server';
import connetDB from '@/db';
import { FormData } from '@/app/profile/post/create/components/StepContainer';

export async function Post(request: Request) {
  try {
    connetDB();
    const body: FormData = await request.json();

    const { bathrooms, bedrooms, beds, imageCover, images, sofa } = body;

    await Accommodation.create({
      bathrooms,
      bedrooms,
      beds,
      imageCover,
      images,
      sofa,
    });
  } catch (err: any) {
    return new NextResponse(err, { status: 500 });
  }
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
