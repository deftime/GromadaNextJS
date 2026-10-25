'use client'

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Popup } from "@/components/Popup";

type ActivityProps = {
  num: number;
  category: string;
  title: string;
  text: string;
  isPopuped?: boolean;
}

export function ActivityPlate({ num, category, title, text, isPopuped = false }: ActivityProps) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  useEffect(()=>{
    document.body.style.overflow = isOpenPopup ? 'hidden' : 'auto';
  }, [isOpenPopup])

  return (
    <>
      <div className={clsx(isPopuped && "hover:bg-[#FFBF37] cursor-pointer", "group min-h-82 p-8 md:p-9 flex flex-col bg-white transition-colors duration-300")} onClick={() => isPopuped && setIsOpenPopup(true)}>
        <div className="flex items-center justify-between mb-14">
          <span className="text-[10px] text-[#5157A3] font-semibold tracking-[0.18em] uppercase">
            {category}
          </span>
          <span className="text-xs text-[rgba(36,17,2,0.35)]">
            {String(num + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="font-['PlayfairDisplay'] text-[1.45rem] text-[#241102] font-semibold leading-[1.28] mb-5">
          {title}
        </div>
        <div className="text-sm text-[#3D3229] opacity-65 leading-6 max-h-30 overflow-hidden text-ellipsis line-clamp-5">
          {text}
        </div>
      </div>

      {/* Попап, который показывает больше текста практики */}
      {/* Откроеться, только если ВКЛЮЧЕН для этой карточки */}
      <Popup isOpen={isOpenPopup} onClose={() => setIsOpenPopup(false)}>
        <div className="text-[10px] text-[#5157A3] font-semibold tracking-[0.18em] uppercase">
          {category}
        </div>
        <div className="font-['PlayfairDisplay'] text-[1.45rem] text-[#241102] font-semibold leading-[1.28] mb-5">
          {title}
        </div>
        <div className="text-sm text-[#3D3229] opacity-65 leading-6 max-h-130 overflow-scroll">
          {text}
        </div>
      </Popup>
    </>
  );
}