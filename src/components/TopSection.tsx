import Image from "next/image";
import clsx from "clsx";
import topBg from '@/assets/main-bg.jpg';
import cls from '@/styles/modules/topSection.module.scss';

export function TopSection() {
  return (
    <section className="relative min-h-screen flex flex-col" aria-label="Перший екран">
      <Image src={topBg} alt='main background' width={1920} height={1080} className={cls.bg} />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(36,17,2,0.88) 0%, rgba(81,87,163,0.55) 60%, rgba(35,86,30,0.35) 100%)",
        }}
      />

      {/* Hero body */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-8 pb-32 pt-8">
        <div className="max-w-4xl w-full">
          {/* Hairline rule */}
          <div
            className="mx-auto mb-8"
            style={{ width: 48, height: 2, background: "#FFBF37" }}
          />

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            Захист ваших прав —{" "}
            <em style={{ color: "#FFBF37", fontStyle: "italic" }}>
              наш обов'язок
            </em>
          </h1>

          <p
            className="mt-7 mb-10 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Кваліфікована юридична допомога у кримінальних, цивільних та
            господарських справах. Ми відстоюємо справедливість на кожному
            етапі судового провадження.
          </p>

          <button
            className="inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{
              background: "#FFBF37",
              color: "#241102",
              letterSpacing: "0.14em",
            }}
          >
            Замовити консультацію
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(36,17,2,0.5), transparent)",
        }}
      />
    </section>
  )
}