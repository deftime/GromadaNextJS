import Image from "next/image";
import logo from '@/assets/logo.svg';
import cls from '@/styles/modules/footer.module.scss';
import Link from "next/link";

export function Footer() {
  return (
    <footer className={cls.footer}>
      <div className={cls.top}>
        <div className={cls.fDesc}>
          <div className={cls.logoName}>
            <Image src={logo} alt="main logo" width={70} height={70} />
            <div className={cls.side}>
              <span>Адвокатське об'єднання</span>
              <span>Громада і Закон</span>
            </div>
          </div>
          <div className={cls.desc}>Ваш надійний партнер у вирішенні складних правових<br/> питань. Надійність, професіоналізм,<br/> конфіденційність.</div>
        </div>
        <div className={cls.fContact}>
          <div className={cls.name}>Контакти</div>
          <div className={cls.data}>
            +380 44 123 45 67<br/>
            office@lexis.partners<br/>
            вул. Володимирська, 12, Київ
          </div>
        </div>
        <div className={cls.fContact}>
          <div className={cls.name}>Робочий час</div>
          <div className={cls.data}>
            Пн – Пт: 09:00 - 18:00<br/>
            Сб – Нд: За домовленістю
          </div>
        </div>
      </div>
      <div className={cls.bot}>
        <div className={cls.copyrights}>© 2026 Lexis & Partners. Всі права захищено.</div>
        <div className={cls.links}>
          <Link href="#">Політика конфіденційності</Link>
          <Link href="#">Правила користування</Link>
        </div>
      </div>
    </footer>
  )
}