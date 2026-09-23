import { Title } from "@/components/Title";
import { BigNumber } from "@/components/BigNumber";

export function AboutSection() {
  return (
    <section id="about" className="py-15 px-8 md:py-36 md:px-16 bg-[#FAFAF8]" aria-label="Про нас">
      <div className="max-w-4xl mx-auto text-center">

        <Title sup={"Адвокатське об'єднання"} title={"Про нас"} />

        <div className="text-lg text-[#3D3229] opacity-85 leading-relaxed mb-8 md:text-xl">
          Адвокатське об'єднання «Громада і Закон» засноване у 2018 році
          командою досвідчених правників із понад 15-річним стажем у судових
          та консультаційних практиках. Ми спеціалізуємося на захисті прав
          фізичних і юридичних осіб у кримінальному, цивільному та
          господарському судочинстві.
        </div>
        <div className="text-base text-[#3D3229] opacity-65 leading-relaxed md:text-lg">
          Наш підхід базується на принципах законності, прозорості та
          відповідальності перед клієнтом. Кожна справа для нас — це не просто
          юридичний процес, а можливість відновити справедливість і захистити
          те, що справді важливо. Ми працюємо по всій Україні та супроводжуємо
          клієнтів на кожному етапі — від первинної консультації до виконання
          судового рішення.
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        <BigNumber value={'2018'} label={'Рік заснування'} />
        <BigNumber value={'500+'} label={'Виграних справ'} />
        <BigNumber value={'15+'} label={'Років досвіду'} />
        <BigNumber value={'12'} label={'Адвокатів у команді'} />
      </div>
    </section>
  )
}