import Image from "next/image";
import { ReactNode } from "react";

type TopServiceSectionProps = {
  title: ReactNode;
  sub: string;
  desc: string;
  img: string;
}

export function TopServiceSection({ title, sub, desc, img }: TopServiceSectionProps) {
  return (
    <section className="relative flex flex-col bg-cover bg-[100%, 42%] min-h-190 md:min-h-screen overflow-hidden" aria-label="Цивільні справи">
      <Image src={img} alt="service-civil-img" width={1800} height={1080}
        className="absolute z-0 top-0 left-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(36,17,2,0.95) 0%, rgba(36,17,2,0.8) 45%, rgba(36,17,2,0.3) 100%)",
        }}
      />

      <div className="relative z-10 px-6 pt-42 pb-20 md:pt-50 md:pb-20 md:px-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="block w-10 h-px bg-[#FFBF37]" />
          <span className="text-xs text-[#FFBF37] font-semibold tracking-[0.24em] uppercase">
            Наші послуги
          </span>
        </div>
        <h1 className="font-['PlayfairDisplay'] font-bold text-white leading-none tracking-[-0.035em] text-[50px] md:text-[80px]">
          {title}
          {/*<span className="text-[#FFBF37] italic">справи</span>*/}
        </h1>
        <div className="font-['PlayfairDisplay'] mt-9 text-white text-xl md:text-2xl leading-snug max-w-2xl">
          {sub}
        </div>
        <div className="text-[rgba(255,255,255,0.68)] mt-6 max-w-2xl text-sm md:text-base leading-7">
          {desc}
        </div>
      </div>
      <a href="#next" className="relative z-10 px-6 pb-8 mt-auto md:px-16 flex items-center gap-3 w-fit text-xs text-[rgba(255,255,255,0.6)] tracking-[0.18em] uppercase">
        <span>Дізнатися більше</span>
        <span className="text-[#FFBF37]" aria-hidden="true">↓</span>
      </a>
    </section>
  )
}