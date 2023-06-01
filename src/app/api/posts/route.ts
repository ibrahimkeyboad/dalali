import { NextRequest, NextResponse } from 'next/server';

export async function Post(request: Request) {
  const body = await request.json();
}
