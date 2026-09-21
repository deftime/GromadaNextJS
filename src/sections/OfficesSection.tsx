import { Title } from "@/components/Title";
import { Office } from "@/components/Office";

const OFFICES = [
  {
    city: "Київ",
    label: "Головний офіс",
    desc: "Центральний офіс об'єднання. Тут зосереджені ключові практики та керівництво. Приймаємо клієнтів щодня та дистанційно.",
    address: "вул. Хрещатик, 22, офіс 15, м. Київ, 01001",
    phone: "+38 (044) 123-45-67",
    email: "kyiv@gromada-zakon.ua",
    head: "Олексій Васильченко",
    headRole: "Керуючий партнер",
    photo: "/img/office.jpg",
  },
  {
    city: "Львів",
    label: "Західний офіс",
    desc: "Регіональний офіс із фокусом на цивільних та господарських спорах. Обслуговує клієнтів у Львівській, Волинській та Закарпатській областях.",
    address: "пл. Ринок, 8, офіс 3, м. Львів, 79000",
    phone: "+38 (032) 987-65-43",
    email: "lviv@gromada-zakon.ua",
    head: "Наталія Коваленко",
    headRole: "Партнер, кримінальна практика",
    photo: "/img/office.jpg",
  },
  {
    city: "Харків",
    label: "Східний офіс",
    desc: "Офіс зі спеціалізацією на адміністративному праві та захисті бізнесу. Обслуговує клієнтів у Харківській, Полтавській та Сумській областях.",
    address: "майдан Конституції, 1, офіс 210, м. Харків, 61022",
    phone: "+38 (057) 456-78-90",
    email: "kharkiv@gromada-zakon.ua",
    head: "Марина Іщенко",
    headRole: "Старший адвокат",
    photo: "/img/office.jpg",
  },
]

export function OfficesSection() {
  return (
    <section className="py-24 px-8 bg-white md:px-16 md:py-36" aria-label="Наші офіси">
      <div className="max-w-5xl mx-auto">

        <Title sup={'Представництво'} title={'Наші офіси в Україні'} />

        {/* Office list */}
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
                head={office.head}
                headRole={office.headRole}
                photo={office.photo}
              />
            ),
          )}
        </div>
      </div>
    </section>
  )
}