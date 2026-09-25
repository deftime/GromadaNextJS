import { Metadata } from "next";
import '@/styles/admin/general.scss';

export const metadata: Metadata = {
  title: "Admin Next.JS",
  description: "Content Management System",
};

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <section className="admin-layout">
      <div className="admin-top"></div>
      <div className="admin-base">
        <div className="sidebar">

        </div>
        <div className="page-zone">
          {children}
        </div>
      </div>
    </section>
  )
}