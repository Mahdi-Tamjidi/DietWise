import HiwSection from "@/components/Home/hiw-section";
import PricingSection from "@/components/Home/pricing-section";
import TestimonialSection from "@/components/Home/testimonial-section";

export default function Home() {
  return (
    <div className="flex flex-col mt-20">
      <HiwSection />
      <PricingSection />
      <TestimonialSection />
    </div>
  );
}
