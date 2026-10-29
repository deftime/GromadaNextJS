import { ActivityPlate } from "@/components/ActivityPlate";

type ActivityProps = {
  activities: {
    category: string;
    title: string;
    text: string;
    isPopuped: boolean;
  }[];
};

export function ActivityGridSection({ activities }: ActivityProps) {
  if (activities.length === 0) return null;

  return (
    <section className="px-6 bg-white md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="text-xs text-[#5157A3] font-semibold tracking-[0.22em] uppercase mb-6">
              Досвід у дії
            </div>
            <h2 className="font-['PlayfairDisplay'] text-[#241102] font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.08]">
              Судова практика
            </h2>
          </div>
          <div className="max-w-md text-[#3D3229] opacity-65 text-sm leading-7">
            Приклади справ, у яких точна правова стратегія та послідовна робота команди допомогли захистити інтереси наших клієнтів.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#D9D9E6]">
          {activities.map((elem, index) => (
            <ActivityPlate key={elem.title} num={index} category={elem.category} title={elem.title} text={elem.text} isPopuped={elem.isPopuped} />
          ))}
        </div>

      </div>
    </section>
  );
}