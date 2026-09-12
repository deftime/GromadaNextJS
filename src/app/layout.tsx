import { Metadata } from "next";
import '@/styles/app.scss';

export const metadata: Metadata = {
  title: "Gromada i Zakon",
  description: "Association of attorneys",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" >
      <body>
        {children}
      </body>
    </html>
  );
}
