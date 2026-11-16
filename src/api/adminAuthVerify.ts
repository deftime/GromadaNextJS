import 'server-only'

import { cache } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { authServer } from '@/api/firebase-server';

// Тут функция проверки сессии, берем куку и отправляем на проверку токен из нее
// Используем везде, где нужно проверить авторизацию админки на стороне сервера

export const verifySession = cache(async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('session')?.value;
  if (!cookie) redirect('/admin/login')

  try {
    return await authServer.verifySessionCookie(cookie, true)
  } catch {
    redirect('/admin/login')
  }
})