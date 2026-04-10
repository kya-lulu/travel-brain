import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password } = body;

  const sitePassword = process.env.SITE_PASSWORD;

  if (!sitePassword) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
  }

  if (password === sitePassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('tl-travel-auth', 'authenticated', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    return response;
  }

  return NextResponse.json({ error: 'Wrong password' }, { status: 401 });
}
