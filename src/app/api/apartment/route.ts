import { NextRequest, NextResponse } from 'next/server';

export async function Post() {
  return NextResponse.json({ msg: `hello app router ` }, { status: 200 });
}
