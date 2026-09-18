import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.svg';
import cls from '@/styles/modules/footer.module.scss';

export function Footer() {
  return (
    <footer className="bg-[#241102]" aria-label="Підвал сайту">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={logo}
                alt="Логотип Громада і Закон"
                className="h-12 w-12 object-contain"
                width={48}
                height={48}
              />
              <div className={cls.logoText}>
                <span className="block text-xs text-white/45 tracking-[0.18em] uppercase">
                  Адвокатське об'єднання
                </span>
                <span className="block font-bold">
                  Громада і Закон
                </span>
              </div>
            </div>
            <div className="text-sm text-white/50 leading-relaxed">
              Кваліфікована правнича допомога. Відстоюємо ваші інтереси в суді
              та поза ним на всіх стадіях провадження.
            </div>
          </div>

          <div>
            <div className="text-xs text-[#FFBF37] font-semibold tracking-[0.18em] uppercase mb-6">
              Напрямки
            </div>
            <Link href="#" className="block text-sm text-white/60 transition-colors duration-200 hover:text-[#FFBF37] mb-3">
              Кримінальний
            </Link>
            <Link href="#" className="block text-sm text-white/60 transition-colors duration-200 hover:text-[#FFBF37] mb-3">
              Цивільний
            </Link>
            <Link href="#" className="block text-sm text-white/60 transition-colors duration-200 hover:text-[#FFBF37] mb-3">
              Адміністративний
            </Link>
            <Link href="#" className="block text-sm text-white/60 transition-colors duration-200 hover:text-[#FFBF37] mb-3">
              Господарський
            </Link>
            <Link href="#" className="block text-sm text-white/60 transition-colors duration-200 hover:text-[#FFBF37] mb-3">
              Консультації
            </Link>
          </div>

          <div>
            <div className="text-xs text-[#FFBF37] font-semibold tracking-[0.18em] uppercase mb-6">
              Контакти
            </div>
            <span className="block text-sm text-white/60 mb-3">вул. Хрещатик, 22, офіс 15</span>
            <span className="block text-sm text-white/60 mb-3">м. Київ, 01001</span>
            <span className="block text-sm text-white/60 mb-3">+38 (044) 123-45-67</span>
            <span className="block text-sm text-white/60 mb-3">info@gromada-zakon.ua</span>
          </div>
        </div>

        <div className="block sm:flex mt-16 pt-8 flex-col md:flex-row items-center justify-between gap-3 border-t border-solid border-white/10">
          <span className="block text-xs text-white/30">
            © 2026 Адвокатське об'єднання «Громада і Закон». Усі права захищено.
          </span>
          <span className="block text-xs text-white/30 mt-2">
            Свідоцтво АО № 0001 від 12.03.2018
          </span>
        </div>
      </div>
    </footer>
  )
}