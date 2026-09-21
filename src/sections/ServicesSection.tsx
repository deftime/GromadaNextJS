import { Title } from "@/components/Title";
import { ServicePlate } from "@/components/ServicePlate";

const SERVICES = [
  {
    title: "Кримінальний захист",
    desc: "Представництво інтересів підозрюваних, обвинувачених і засуджених на всіх стадіях кримінального провадження.",
    icon: '/img/criminal.svg',
  },
  {
    title: "Цивільні справи",
    desc: "Вирішення спорів щодо майна, договорів, спадщини, відшкодування шкоди та захисту особистих немайнових прав.",
    icon: '/img/civil.svg',
  },
  {
    title: "Господарські спори",
    desc: "Захист прав бізнесу: корпоративні конфлікти, стягнення боргів, визнання договорів недійсними, банкрутство.",
    icon: '/img/gosp.svg',
  },
  {
    title: "Адміністративне право",
    desc: "Оскарження рішень органів влади, захист у справах про адміністративні правопорушення та публічно-правові спори.",
    icon: '/img/admin.svg',
  },
  {
    title: "Договірна практика",
    desc: "Розробка, аналіз і супровід договорів будь-якої складності. Мінімізація правових ризиків для бізнесу та приватних осіб.",
    icon: '/img/deal.svg',
  },
  {
    title: "Юридичні консультації",
    desc: "Первинна та глибинна правова аналітика. Усні й письмові висновки з будь-яких правових питань у стислі терміни.",
    icon: '/img/mail.svg',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-8 bg-[#FAFAF8] md:py-36 md:px-16" aria-label="Наші послуги">
      <div className="max-w-5xl mx-auto">

        <Title sup={'Правова допомога'} title={'Наші послуги'} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service) => (
            <ServicePlate key={service.title} icon={service.icon} title={service.title} desc={service.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}