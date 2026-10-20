import { Title } from "@/components/Title";
import { ServicePlate } from "@/components/ServicePlate";

const SERVICES = [
  {
    title: "Адмінистративні справи",
    desc: "Оскарження рішень органів державної виконавчої влади та органів місцевого самоврядування.",
    icon: '/img/admin.svg',
  },
  {
    title: "Цивільні справи",
    desc: "Стягнення боргу, збитків, майнові спори, спадщина, медичні помилки, авторське право, торгова марка.",
    icon: '/img/civil.svg',
  },
  {
    title: "Господарські справи",
    desc: "Договори, банкрутство, корпоративні спори, тендери.",
    icon: '/img/gosp.svg',
  },
  {
    title: "Військові справи",
    desc: "Мобілізація, ВЛК, контракти, соціальний захист військових.",
    icon: '/img/military.svg',
  },
  {
    title: "Кримінальні справи",
    desc: "Підозра, затримання, обшук, досудове розслідування, судовий розгляд.",
    icon: '/img/criminal.svg',
  },
  {
    title: "Трудові та пенсійні справи",
    desc: "Незаконне звільнення, невиплата зарплати, занижена пенсія, трудові спори.",
    icon: '/img/deal.svg',
  },
  {
    title: "Сімейні справи",
    desc: "Розлучення, аліменти, опіка, розділ майна.",
    icon: '/img/family.svg',
  },
  {
    title: "Кредитні справи",
    desc: "Реструктуризація боргів, банкрутство, спори з банками.",
    icon: '/img/credit.svg',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-8 bg-[#FAFAF8] md:py-36 md:px-16" aria-label="Наші послуги">
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