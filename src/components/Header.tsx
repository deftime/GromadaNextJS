import Image from "next/image";
import Link from "next/link";
import cls from '@/styles/modules/header.module.scss'
import logo from '@/assets/logo.svg';

export function Header() {
  return (
    <header className="absolute w-full z-10 flex items-center justify-between px-8 md:px-16 pt-8 pb-6">

      <div className="flex items-center gap-4">
        <Image
          src={logo}
          alt="Логотип Громада і Закон"
          className="h-14 w-14 object-contain shrink-0"
          width={48}
          height={48}
        />
        <div>
          <p
            className="text-xs tracking-[0.2em] uppercase mb-1"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Адвокатське об'єднання
          </p>
          <p
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.15rem',
              color: '#FFBF37',
              letterSpacing: '0.01em',
            }}
          >
            Громада і Закон
          </p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8" aria-label="Основна навігація">
        <a
          href="#"
          className="text-sm tracking-wider transition-colors duration-200 hover:text-[#FFBF37]"
          style={{ color: 'rgba(255,255,255,0.82)', letterSpacing: '0.06em' }}
        >
          Про нас
        </a>
        <a
          href="#"
          className="text-sm tracking-wider transition-colors duration-200 hover:text-[#FFBF37]"
          style={{ color: 'rgba(255,255,255,0.82)', letterSpacing: '0.06em' }}
        >
          Команда
        </a>
        <a
          href="#"
          className="text-sm tracking-wider transition-colors duration-200 hover:text-[#FFBF37]"
          style={{ color: 'rgba(255,255,255,0.82)', letterSpacing: '0.06em' }}
        >
          Послуги
        </a>
        <a
          href="#"
          className="text-sm tracking-wider transition-colors duration-200 hover:text-[#FFBF37]"
          style={{ color: 'rgba(255,255,255,0.82)', letterSpacing: '0.06em' }}
        >
          Офіси
        </a>
        <a
          href="#"
          className="text-sm tracking-wider transition-colors duration-200 hover:text-[#FFBF37]"
          style={{ color: 'rgba(255,255,255,0.82)', letterSpacing: '0.06em' }}
        >
          Контакти
        </a>
        <a
          href="#"
          className="text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200 hover:opacity-90"
          style={{
            background: '#FFBF37',
            color: '#241102',
            letterSpacing: '0.12em',
          }}
        >
          Консультація
        </a>
      </nav>
    </header>
  )
}