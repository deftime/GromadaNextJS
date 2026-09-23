import { TopSection } from "@/sections/TopSection";
import { AboutSection } from "@/sections/AboutSectiom";
import { TeamSection } from "@/sections/TeamSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { OfficesSection } from "@/sections/OfficesSection";
import { ContactsSection } from "@/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <TopSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <OfficesSection />
      <ContactsSection />
    </>
  );
}
