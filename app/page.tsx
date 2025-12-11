import DemoSection from "@/components/Home/demo-section";
import HeroSection from "@/components/Home/hero-section";
import HiwSection from "@/components/Home/hiw-section";
import PricingSection from "@/components/Home/pricing-section";
import TestimonialSection from "@/components/Home/testimonial-section";

export default function Home() {
  return (
    <div className="flex flex-col mt-20">
      <HeroSection />
      <DemoSection />
      <HiwSection />
      <PricingSection />
      <TestimonialSection />
    </div>
  );
}
