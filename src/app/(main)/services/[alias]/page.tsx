import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { TopServiceSection } from "@/sections/TopServiceSection";
import { ListFeaturesSection } from "@/sections/ListFeaturesSection";
import { ActivityGridSection } from "@/sections/ActivityGridSection";

type Service = {
  title: ReactNode | string;
  sub: string;
  desc: string;
  img: string;
  features: string[];
  activities: {
    category: string;
    title: string;
    text: string;
    isPopuped: boolean
  }[];
}

const SERVICES: Record<string, Service> = {
  'civilni-spravy': {
    title: <>Цивільні<br/> <span className="text-[#FFBF37] italic">справи</span></>,
    sub: 'Захищаємо особисте, майнове та сімейне — те, що має для вас справжню цінність.',
    desc: 'Надаємо комплексну правничу допомогу у приватноправових спорах: від аналізу документів і переговорів до представництва в судах усіх інстанцій та фактичного виконання рішення.',
    img: '/img/service-civil.jpg',
    features: [
      "Повний правовий супровід спадкових справ",
      "Судове оскарження дій нотаріату",
      "Юридичний супровід спадщини на земельний пай",
      "Спаткування прав на об'єкти інтелектуальної власності",
      "Захист прав пацієнтів у складних медичних справах, компенсація у випадку лікарської помилки",
      "Повний супровід справ про відшкодування шкоди",
      "Відшкодування збитків, завданих війною, відновлення зруйнованого житла",
      "Стягнення шкоди при порушенні прав споживачів",
      "Захист інтелектуальної власності, стягнення шкоди при порушенні авторського права",
      "Захист права власності від сторонніх посягань",
      "Визнання особи недієздатною",
      "Стягнення боргів",
    ],
    activities: [
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
  }
}

export default async function ServicePage({ params }: { params: Promise<{ alias: string }> }) {
  const { alias } = await params;
  let data: Service;

  if (SERVICES[alias]) {
    data = SERVICES[alias];
  } else {
    return notFound();
  }

  return (
    <>
      <TopServiceSection title={data.title} sub={data.sub} desc={data.desc} img={data.img} />
      <ListFeaturesSection list={data.features} />
      <ActivityGridSection activities={data.activities} />
    </>
  )
}