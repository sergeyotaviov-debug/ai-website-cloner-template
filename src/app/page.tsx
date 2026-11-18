import { CreativeFeed } from "@/components/CreativeFeed";
import { FaqSection } from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import { PopularClasses } from "@/components/PopularClasses";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TeachersSection } from "@/components/TeachersSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PopularClasses />
        <CreativeFeed />
        <TeachersSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
