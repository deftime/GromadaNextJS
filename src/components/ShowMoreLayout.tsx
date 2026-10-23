'use client'

import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { Button } from "@/components/Button";
import cls from '@/styles/modules/showMoreLayout.module.scss';

type MoreProps = {
  children: ReactNode;
  maxHeight: number;
  maxHeightMobile?: number;
}

// Компонент-обложка для отображения контента с кнопкой Больше/Меньше
// Работает по строгой высоте, которую мы задаем
// Можем задать по желанию Мобильную высоту, или будет использоватся всегда десктопная

export function ShowMoreLayout({ children, maxHeight, maxHeightMobile = undefined }: MoreProps) {
  const [close, setClose] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(()=> {
    if (!ref.current) return;
    setIsMobile(window.innerWidth <= 500);
    let needHeight: number | undefined;
    if (isMobile) {
      needHeight = maxHeightMobile ?? maxHeight;
    } else {
      needHeight = maxHeight;
    }
    if (ref.current.clientHeight > needHeight) {
      setClose(true);
    }
  }, [])

  const handleButton = () => {
    setClose((close) => !close);
  };

  return (
    <>
      <div ref={ref} className={clsx(cls.showMore, close && cls.close)}
           style={{ height: close ? `${isMobile ? maxHeightMobile ?? maxHeight : maxHeight}px` : 'auto' }}
      >
        {children}
      </div>
      <Button text={close ? "Показати більше" : "Показати менше"}   onAction={handleButton} position="center" />
    </>
  );
}