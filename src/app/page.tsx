import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { GameTypesSection } from "@/components/home/GameTypesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <GameTypesSection />
      <FeaturesSection />
      <AppDownloadSection />
      <TestimonialsSection />
      <CtaSection />
    </MainLayout>
  );
}
