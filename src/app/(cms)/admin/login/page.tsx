'use client'

import { type SubmitEvent, useState } from 'react'
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/api/firebase-client';

import '@/styles/admin/edit.scss';
import '@/styles/admin/LoginPage.scss';

type FormDataType = {
  username: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormDataType = Object.fromEntries(new FormData(event.currentTarget)) as FormDataType;
    try {
      await signInWithEmailAndPassword(auth, formData.username, formData.password);
      setError(null);
      router.push('/admin');
    } catch {
      setError('Wrong Login or Password!');
    }
  }

  return (
    <section className="admin-login">
      <form action="#" onSubmit={handleSubmit}>
        <div className="title">Log In</div>
        <div className="edit-block">
          <input type="email" name="username" placeholder="Login" required />
        </div>
        <div className="edit-block">
          <input type="password" name="password" placeholder="Password" required />
        </div>
        {error && <span className="error">{error}</span>}
        <button type="submit">Enter</button>
      </form>
    </section>
  )
}