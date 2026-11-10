import { Suspense } from "react";

import { TopSection } from "@/sections/TopSection";
import { AboutSection } from "@/sections/AboutSection";
import { TeamSection } from "@/sections/TeamSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { OfficesSection } from "@/sections/OfficesSection";
import { ContactsSection } from "@/sections/ContactsSection";
import { SkeletonTeam } from "@/components/Skeletons";

export default function Home() {
  return (
    <>
      <TopSection />
      <AboutSection />
      <Suspense fallback={<SkeletonTeam />}>
        <TeamSection />
      </Suspense>
      <ServicesSection />
      <OfficesSection />
      <ContactsSection />
    </>
  );
}
