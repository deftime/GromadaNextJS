import { Metadata } from "next";
import Link from "next/link";

import { NavElem } from "@/components/admin/NavElem";

import homeLogo from '@/assets/home.svg';
import formLogo from '@/assets/form.svg';
import panelLogo from '@/assets/dashboard.svg';
import '@/styles/admin/general.scss';

export const metadata: Metadata = {
  title: "Admin Next.JS",
  description: "Content Management System",
};

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <section className="admin-layout">
      <div className="admin-top">
        <div className="title">FirebaseMyAdmin</div>
        <Link href="/" className="site-link" target='_blank'>
          <img src={homeLogo.src} alt="Home logo" />
          <span>To site</span>
        </Link>
      </div>
      <div className="admin-base">
        <div className="sidebar">
          <NavElem title="Panel" href="/admin" icon={panelLogo.src} />
          <NavElem title="Feedback Form" href="/admin/feedback-form" icon={formLogo.src} />
        </div>
        <div className="page-zone">
          {children}
        </div>
      </div>
    </section>
  )
}