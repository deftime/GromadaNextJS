'use client'

import { ReactNode } from "react";
import crossIcon from '@/assets/cross.svg';
import cls from '@/styles/modules/popup.module.scss';

type PopupProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

// Универсальный попап, который принимает внутри любой контент и полностью управляеться родителем

export function Popup({ children, isOpen, onClose }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className={cls.popupWrapper} onClick={onClose}>
      <div className={cls.popup} onClick={(e) => e.stopPropagation()}>
        <img src={crossIcon.src} alt="close icon" className={cls.closeBtn} onClick={onClose} />
        {children}
      </div>
    </div>
  )
}