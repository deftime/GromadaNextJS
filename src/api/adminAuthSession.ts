'use server'

import { cookies } from 'next/headers';
import { authServer } from '@/api/firebase-server';

export async function createSession(idToken: string) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 днів
  const sessionCookie = await authServer.createSessionCookie(idToken, { expiresIn });

  const cookieStore = await cookies()
  cookieStore.set('session', sessionCookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: expiresIn / 1000,
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}