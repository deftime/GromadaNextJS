'use client'

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { signOut } from 'firebase/auth';
import { auth } from '@/api/firebase-client';

import { Auth } from "@/components/admin/AuthClientProvider";
import '@/styles/admin/LoginStatus.scss';

export function LoginStatus() {
  const user = useContext(Auth);
  const router = useRouter();

  const loginHandler = () => {
    router.push('/admin/login');
  }

  const logoutHandler = async () => {
    await signOut(auth);
    router.push('/admin/login');
  }

  return (
    <div className="login-status">
      {user && user !== 'checking' ? (<>
          <div className="user">{user.email}</div>
          <button className="btn-out" onClick={logoutHandler}>Log Out</button>
      </>) : (
          <button className="btn-in" onClick={loginHandler}>Log In</button>
        )}
    </div>
  )
}