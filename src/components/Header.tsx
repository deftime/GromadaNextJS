import Image from "next/image";
import cls from '@/styles/modules/header.module.scss'
import logo from '@/assets/logo.svg';

export function Header() {
  return (
    <header className={cls.header}>
      <Image src={logo} alt="main logo" width={60} height={60} className={cls.logo}/>
      <nav className={cls.nav}>
        <a href="#">Про нас</a>
        <a href="#">Послуги</a>
        <a href="#">Команда</a>
        <a href="#">Відгуки</a>
        <a href="#">Контакти</a>
      </nav>
    </header>
  )
}