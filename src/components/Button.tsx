'use client'

import Link from "next/link";
import clsx from "clsx";
import cls from '@/styles/modules/button.module.scss';

type ButtonProps = {
  text: string,
  link?: string,
  onAction?: () => void,
  variant?: 'primary' | 'empty',
  position?: 'left' | 'right' | 'center',
}

export function Button({ text, link = undefined, onAction = undefined, variant = 'primary', position = 'left' }: ButtonProps) {

  return (
    link ? (
      <Link href={link} className={clsx(cls.btnLink, cls[variant], cls[position])}>
        {text}
      </Link>
      ) : (
      <button onClick={onAction} className={clsx(cls.btnLink, cls[variant], cls[position])}>
        {text}
      </button>
    )
  )
}