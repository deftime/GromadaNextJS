'use client'

import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export function MainLogo() {
  const path = usePathname();
  const Tag = path === '/' ? 'div' : 'a';

  return (
    <Tag {...path === '/' ? undefined : {href: '/'}} className="flex items-center gap-4">
      <Image src={logo} alt="Логотип Громада і Закон" className="h-14 w-14 object-contain shrink-0" width={48} height={48}/>
      <div>
        <span className="block text-xs text-white/60 tracking-[0.2em] uppercase mb-1">
          Адвокатське об'єднання
        </span>
        <span className="font-['PlayfairDisplay'] block font-bold text-2xl text-[#FFBF37] leading-tight tracking-wider">
          Громада і Закон
        </span>
      </div>
    </Tag>
  );
}