import { Title } from "@/components/Title";
import { Office } from "@/components/Office";

const OFFICES = [
  {
    city: "Київ",
    label: "Головний офіс",
    desc: "Центральний офіс об'єднання. Тут зосереджені ключові практики та керівництво. Приймаємо клієнтів щодня та дистанційно.",
    address: "вул. Володимирська, 42а, офіс 17",
    phone: "+38 (097) 925-73-34",
    email: "gromada.zackon@gmail.com",
    photo: "/img/office.jpg",
    heads: [
      {
        name: "Лідія Горбунова",
        role: "Голова Адвокатського об’єднання",
        photo: "/img/Lidia-mini.jpg"
      }
    ]
  },
  {
    city: "Івано-Франківськ",
    label: "Західний офіс",
    desc: "Західний міжрегіональний офіс адвокатського об’єднання «Громада і Закон» розташований у місті Івано-Франківську та забезпечує надання професійної правничої допомоги по всім західним областям.",
    address: "вул. Довга, 60",
    phone: "+38 (044) 337-54-67",
    email: "hromadaizakonzahid@ukr.net",
    photo: "/img/OfficeFrankivsk2.jpg",
    heads: [
      {
        name: "Іван Тулик",
        role: "Заступник Голови Об'єднання",
        photo: "/img/Tulik-mini.jpg"
      },
      {
        name: "Вікторія Досюк",
        role: "Помічник адвоката",
        photo: "/img/DosukHelper-mini.jpg"
      },
    ]
  }
]

export function OfficesSection() {
  return (
    <section id="offices" className="py-24 px-8 bg-white md:px-16 md:py-36" aria-label="Наші офіси">
      <div className="max-w-5xl mx-auto">

        <Title sup={'Представництво'} title={'Наші офіси в Україні'} />

        <div className="flex flex-col gap-8">
          {OFFICES.map(
            (office) => (
              <Office
                key={office.city}
                city={office.city}
                label={office.label}
                desc={office.desc}
                address={office.address}
                phone={office.phone}
                email={office.email}
                heads={office.heads}
                photo={office.photo}
              />
            ),
          )}
        </div>
      </div>
    </section>
  )
}