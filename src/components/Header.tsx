import Image from "next/image";
import Link from "next/link";
import cls from '@/styles/modules/header.module.scss'
import logo from '@/assets/logo.svg';

export function Header() {
  return (
    <header className={cls.header}>
      <Image src={logo} alt="main logo" width={60} height={60} className={cls.logo}/>
      <nav className={cls.nav}>
        <Link href="#">Про нас</Link>
        <Link href="#">Послуги</Link>
        <Link href="#">Команда</Link>
        <Link href="#">Відгуки</Link>
        <Link href="#">Контакти</Link>
      </nav>
    </header>
  )
}