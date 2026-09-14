'use client'

import Link from "next/link";
import clsx from "clsx";
import cls from '@/styles/modules/button.module.scss';

type ButtonProps = {
  text: string,
  link: string,
  variant?: 'primary' | 'empty',
}

export function Button({ text, link, variant = 'primary' }: ButtonProps) {

  return (
    <Link href={link} className={clsx(cls.btnLink, cls[variant])}>
      {text}
    </Link>
  )
}