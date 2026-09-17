import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header/>
      <div className='min-h-screen flex flex-col'>
        {children}
      </div>
      <Footer/>
    </>
  );
}
