import { ActivityPlate } from "@/components/ActivityPlate";

const CASES = [
  {
    category: "Спадковий спір",
    title: "Визнання права власності на спадкове майно",
    text: "Клієнт пропустив строк прийняття спадщини через тривале перебування за кордоном. Команда зібрала докази поважності причин та підтвердила фактичне прийняття майна.",
    isPopuped: false,
  },
  {
    category: "Право власності",
    title: "Повернення квартири законному власнику",
    text: "Нерухомість вибула з володіння клієнта на підставі підроблених документів. У суді доведено незаконність реєстраційних дій та скасовано подальші договори.",
    isPopuped: false,
  },
  {
    category: "Відшкодування шкоди",
    title: "Компенсація збитків після дорожньої пригоди",
    text: "Страхова компанія відмовила у повній виплаті. Незалежна оцінка та послідовна правова позиція дозволили стягнути вартість ремонту, експертизи й судові витрати.",
    isPopuped: false,
  },
  {
    category: "Сімейне право",
    title: "Справедливий поділ спільного майна подружжя",
    text: "У склад майна входили нерухомість, корпоративні права та заощадження. Ми встановили джерела придбання активів і захистили особисту власність клієнта.",
    isPopuped: false,
  },
  {
    category: "Договірний спір",
    title: "Стягнення боргу за договором позики",
    text: "Боржник заперечував факт отримання коштів та справжність розписки. Почеркознавча експертиза й банківські документи підтвердили вимоги в повному обсязі.",
    isPopuped: false,
  },
  {
    category: "Земельний спір",
    title: "Відновлення меж земельної ділянки",
    text: "Через помилку в кадастрі частина ділянки клієнта накладалася на сусідню. Після землевпорядної експертизи суд скасував помилкову реєстрацію та відновив межі.",
    isPopuped: false,
  },
]

type ActivityProps = {
  activity: {
    category: string;
    title: string;
    text: string;
    isPopuped: boolean;
  }[];
};

export function ActivityGridSection({ activity }: ActivityProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D9D9E6] border border-[#D9D9E6]">
          {CASES.map((elem, index) => (
            <ActivityPlate key={elem.title} num={index} category={elem.category} title={elem.title} text={elem.text} isPopuped={elem.isPopuped} />
          ))}
        </div>

      </div>
    </section>
  );
}