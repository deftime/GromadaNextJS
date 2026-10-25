import CheckIcon from "@/assets/check.svg";

type ListProps = {
  list: string[];
}

export function ListFeaturesSection({ list }: ListProps) {
  return (
    <section id="next" className="px-6 bg-[#FAFAF8] md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="text-xs font-semibold text-[#5157A3] tracking-[0.22em] uppercase mb-6">
            Наша допомога
          </div>
          <h2 className="font-['PlayfairDisplay'] text-5xl md:text-[70px] font-bold text-[#241102] leading-[1.08]">
            Що ми робимо
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[rgba(81,87,163,0.2)]">
          {list.map((service) => (
            <div key={service} className="group flex items-start gap-5 md:gap-7 py-7 md:py-9 md:px-6 border-b border-[rgba(81,87,163,0.2)]">
              <img src={CheckIcon.src} alt="check" className="block h-auto w-9 shrink-0 mt-2" />
              <div className="font-['PlayfairDisplay'] text-[18px] md:text-[25px] text-[#241102] font-semibold leading-[1.35]">
                {service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}