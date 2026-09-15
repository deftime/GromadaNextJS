import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import '@/styles/app.scss';

export const metadata: Metadata = {
  title: "Gromada i Zakon",
  description: "Association of attorneys",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ua">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
