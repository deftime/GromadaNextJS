'use client'

import { type SubmitEvent, useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from '@/api/firebase-client';
import { createSession, deleteSession } from "@/api/adminAuthSession";

import { SkeletonLogin } from "@/components/admin/Skeletons";
import '@/styles/admin/edit.scss';
import '@/styles/admin/LoginPage.scss';

// Важность страницы - на нее идут редиректы, поэтому редиректы ИЗ НЕЕ делать НЕ РЕКОМЕНДУЕТСЯ
// При логине создаем новую сессию
// При любом входе на страницу - делаем ЛОГАУТ

type FormDataType = {
  username: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState<boolean>(false); // Ждем готовность формы после проверка статусов логина
  const [isLoading, setLoading] = useState<boolean>(false); // А тут просто следим за процесом логина
  const router = useRouter();

  useEffect(()=>{
    Promise.allSettled([signOut(auth), deleteSession()]).then(() => setReady(true))
  }, [])

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const formData: FormDataType = Object.fromEntries(new FormData(event.currentTarget)) as FormDataType;
    let token: string;

    try {
      const credential = await signInWithEmailAndPassword(auth, formData.username, formData.password);
      token = await credential.user.getIdToken();
    } catch {
      setError('Wrong Login or Password!');
      setLoading(false);
      return
    }

    try {
      await createSession(token);
    } catch {
      setError('Create session failed!');
      setLoading(false);
      return;
    }

    router.replace('/admin');

  }

  return (
    <section className="admin-login">
      {ready ? (
        <form action="#" onSubmit={handleSubmit}>
          <div className="title">Log In</div>
          <div className="edit-block">
            <input type="email" name="username" placeholder="Login" required />
          </div>
          <div className="edit-block">
            <input type="password" name="password" placeholder="Password" required />
          </div>
          {error && <span className="error">{error}</span>}
          <button className={isLoading ? 'load' : ''} type="submit">Enter</button>
        </form>
      ) : (
        <SkeletonLogin />
      )}
    </section>
  )
}