import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    let total = 0;
    for (let i = 0; i < 50000; i++) {
      total++;
      console.log(total);
    }
    return Response.json('hello' + ' ' + total);
  } catch (err) {
    new Response('something went wrong', { status: 500 });
  }
}
