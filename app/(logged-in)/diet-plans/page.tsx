import Title from "@/components/common/title";
import DietPreview from "@/components/diet/diet-preview";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const GeneratePlan = () => {
  return (
    <div className="container mt-20 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Title
          title="My Diet Plans"
          subTitle="Track your nutrition journey and create personalized meal plans with AI"
          alignment="left"
        />
        <Button className="mb-14 border border-tertiary-dark px-12! py-7! rounded-2xl bg-main-color text-text-dark hover:bg-main-color-hover transition-colors duration-200 font-bold text-base md:text-lg group">
          <Link
            href={"/generate-plan"}
            className="flex items-center justify-center gap-2"
          >
            Generate My Plan{" "}
            <Plus
              className="group-hover:rotate-z-90 transition-transform duration-200"
              strokeWidth={3}
            />
          </Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DietPreview />
        <DietPreview />
        <DietPreview />
      </div>
    </div>
  );
};
export default GeneratePlan;
