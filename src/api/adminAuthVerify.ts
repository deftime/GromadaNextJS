import 'server-only'

import { cache } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { authServer } from '@/api/firebase-server';

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