import { MainLogo } from "@/components/MainLogo";

export async function Header() {

  return (
    <header className="absolute w-full z-100 flex items-center justify-between px-8 md:px-16 pt-8 pb-6">
      <MainLogo />
      <nav className="hidden min-[1100px]:flex items-center gap-8" aria-label="Основна навігація">
        <a href="/#about" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Про нас
        </a>
        <a href="/#team" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Команда
        </a>
        <a href="/#services" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Послуги
        </a>
        <a href="/#offices" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Офіси
        </a>
        <a href="/#contacts" className="text-sm text-white/80 tracking-wider transition-colors duration-200 hover:text-[#FFBF37]">
          Контакти
        </a>
        <a href="https://qu.weareukrainians.com" target="_blank" className="text-xs text-[#241102] font-semibold bg-[#FFBF37] tracking-widest uppercase px-5 py-2.5 transition-all duration-200 hover:bg-[#5157A3] hover:text-white">
          Онлайн-консультація
        </a>
      </nav>
    </header>
  )
}