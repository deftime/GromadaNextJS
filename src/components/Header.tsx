import Image from "next/image";
import clsx from "clsx";
import logo from '@/assets/logo.svg';
import cls from '@/styles/modules/header.module.scss'

export function Header() {
  return (
    <header className="absolute w-full z-100 flex items-center justify-between px-8 md:px-16 pt-8 pb-6">
      <div className="flex items-center gap-4">
        <Image
          src={logo}
          alt="Логотип Громада і Закон"
          className="h-14 w-14 object-contain shrink-0"
          width={48}
          height={48}
        />
        <div className={cls.logoText}>
          <span className="block text-xs text-white/60 tracking-[0.2em] uppercase mb-1">
            Адвокатське об'єднання
          </span>
          <span className="block font-bold text-2xl text-[#FFBF37] leading-tight tracking-wider">
            Громада і Закон
          </span>
        </div>
      </div>
      <nav className={clsx(cls.nav, "hidden md:flex items-center gap-8")} aria-label="Основна навігація">
        <a href="#about" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Про нас
        </a>
        <a href="#team" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Команда
        </a>
        <a href="#services" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Послуги
        </a>
        <a href="#offices" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Офіси
        </a>
        <a href="#contacts" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Контакти
        </a>
        <a href="https://qu.weareukrainians.com" target="_blank" className="text-xs text-[#241102] font-semibold bg-[#FFBF37] tracking-widest uppercase px-5 py-2.5 transition-all duration-200 hover:bg-[#5157A3] hover:text-white">
          Онлайн-консультація
        </a>
      </nav>
    </header>
  )
}