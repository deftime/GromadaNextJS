import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // сторінка логіну доступна без cookie
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  if (!request.cookies.get('session')) {
    return NextResponse.redirect(new URL('/admin/login', request.url)) // ← тепер сюди, а не на /login
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}