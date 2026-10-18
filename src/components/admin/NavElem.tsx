'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import '@/styles/admin/NavElem.scss';

type NavElemProps = {
  title: string;
  href: string;
  icon: string;
};

export function NavElem({ title, href, icon }: NavElemProps) {
  const path = usePathname();
  const isActive = path === href ? 'active' : '';

  return (
    <Link href={href} className={`admin-link ${isActive}`}>
      <img src={icon} alt="Admin page icon" />
      <span>{title}</span>
    </Link>
  );
}