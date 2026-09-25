import { Metadata } from "next";
import Link from "next/link";
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
        <Link href="/" className="site-link" target='_blank'>
          <img src={homeLogo.src} alt="Home logo" />
          <span>To site</span>
        </Link>
      </div>
      <div className="admin-base">
        <div className="sidebar">

          {/* Component? */}
          <Link href="/admin" className="admin-link">
            <img src={panelLogo.src} alt="Admin page icon" />
            <span>Panel</span>
          </Link>

          {/* Component? */}
          <Link href="/admin/feedback-form" className="admin-link">
            <img src={formLogo.src} alt="Admin page icon" />
            <span>Feedback form</span>
          </Link>

        </div>
        <div className="page-zone">
          {children}
        </div>
      </div>
    </section>
  )
}