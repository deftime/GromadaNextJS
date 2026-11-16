import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Тут идет проверка авторизации для админки и если ее нет - редирект на логин.
// Если точнее - проверка наличия определенной куки.

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // На страницу Логина вход разрешен
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  // Тут проверка и если куки нет - редирект на Логин
  if (!request.cookies.get('session')) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

// Маска пути, по которому идет проверка. Все, что за /admin.
export const config = {
  matcher: ['/admin/:path*']
}