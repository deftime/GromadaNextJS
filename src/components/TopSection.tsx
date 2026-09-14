import Image from "next/image";
import topBg from '@/assets/top-bg.jpg';
import cls from '@/styles/modules/topSection.module.scss';
import { Button } from "@/components/Button";

export function TopSection() {
  return (
    <section className={cls.topSection}>
      <Image src={topBg} alt="main bg" width={1920} height={950} className={cls.bg} />
      <div className={cls.topName}>
        <span>АДВОКАТСЬКЕ ОБ'ЄДНАННЯ</span>
        <span>Громада і Закон</span>
      </div>
      <div className={cls.title}>Безкомпромісний захист<br/> ваших прав та бізнесу</div>
      <div className={cls.desc}>Lexis & Partners — провідне юридичне об'єднання, що забезпечує стабільність,<br/> конфіденційність та бездоганну правову експертизу навіть у найскладніших ситуаціях.</div>
      <Button text="Замовити консультацію" link="#bot-form" />
    </section>
  )
}