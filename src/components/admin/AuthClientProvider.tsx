'use client'

import { type ReactNode, createContext, useEffect, useState } from 'react';
import { type User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/api/firebase-client";

type AuthProps = {
  children: ReactNode;
};

type UserType = User | 'checking' | null;

export const Auth = createContext<UserType>(null);

export function AuthClientProvider({ children }: AuthProps) {
  const [user, setUser] = useState<UserType>('checking');

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [])

  return (
    <Auth.Provider value={user}>
      {children}
    </Auth.Provider>
  );
}