import { Title } from "@/components/Title";
import { Person } from "@/components/Person";

const TEAM = [
  {
    name: "Олексій Васильченко",
    role: "Керуючий партнер",
    bio: "Доктор юридичних наук, заслужений юрист України. Понад 20 років практики у кримінальному та господарському судочинстві.",
    photo: "/img/person1.jpg",
  },
  {
    name: "Наталія Коваленко",
    role: "Партнер, кримінальна практика",
    bio: "Кандидат юридичних наук, членкиня Національної асоціації адвокатів України. Спеціалізується на справах про економічні злочини.",
    photo: "/img/person2.jpg",
  },
  {
    name: "Марина Іщенко",
    role: "Старший адвокат",
    bio: "Магістр права Київського національного університету. Експерт у сфері захисту прав споживачів та сімейного права.",
    photo: "/img/person3.jpg",
  },
  {
    name: "Олена Романова",
    role: "Адвокат, цивільне право",
    bio: "Науковий співробітник Інституту держави і права НАН України. Авторка понад 30 наукових публікацій з цивільного процесу.",
    photo: "/img/person4.jpg",
  },
  {
    name: "Дмитро Лисенко",
    role: "Адвокат, господарські справи",
    bio: "Арбітр Міжнародного комерційного арбітражного суду. Спеціалізується на транскордонних корпоративних спорах.",
    photo: "/img/person5.jpg",
  },
  {
    name: "Артем Гриценко",
    role: "Адвокат-стажист",
    bio: "Випускник Національного юридичного університету імені Ярослава Мудрого. Переможець Всеукраїнської олімпіади з права.",
    photo: "/img/person6.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 md:py-30 px-8 md:px-16 bg-white" aria-label="Наша команда">
      <div className="max-w-6xl mx-auto">

        <Title sup={'Команда фахівців'} title={'Наша команда'} />

        <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-3 sm:grid-cols-2">
          {TEAM.map((person) => (
            <Person key={person.name} name={person.name} role={person.role} bio={person.bio} photo={person.photo} />
          ))}
        </div>

      </div>
    </section>
  )
}