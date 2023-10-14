import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    return Response.json('hello');
  } catch (err) {
    new Response('something went wrong', { status: 500 });
  }
}
