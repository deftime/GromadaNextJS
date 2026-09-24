import Image from "next/image";
import topBg from '@/assets/main-bg.jpg';
import cls from '@/styles/modules/topSection.module.scss';
import clsx from "clsx";

export function TopSection() {
  return (
    <section className="relative min-h-screen flex flex-col" aria-label="Перший екран">
      <Image src={topBg} alt='main background' width={1920} height={1080} className={cls.bg} />

      <div className={cls.linBg} />

      <div className="relative z-10 text-center px-8 pb-20 pt-50">
        <div className="max-w-4xl w-full mx-auto">
          <h1 className={clsx(cls.asH1, "text-4xl text-white mb-12")}>Адвокатське об'єднання <span className="text-[#FFBF37]">"Громада і Закон"</span></h1>
          <div className="mx-auto mb-8 w-18 h-0.5 bg-[#FFBF37]" />
          <h2 className={cls.asH1} >
            Захист ваших прав —
            <em>
              наш обов'язок
            </em>
          </h2>

          <div className="text-white/72 mt-7 mb-10 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
            Кваліфікована юридична допомога у кримінальних, цивільних та
            господарських справах. Ми відстоюємо справедливість на кожному
            етапі судового провадження.
          </div>

          <a href="#contacts" className="inline-flex items-center bg-[#FFBF37] text-[#241102] gap-3 px-10 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:brightness-110 active:scale-95">
            Замовити консультацію
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className={cls.linBg2} />
    </section>
  )
}