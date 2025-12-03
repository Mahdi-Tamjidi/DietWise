import { Brain, Scale, Utensils } from "lucide-react";
import { ReactNode } from "react";
import Title from "@/components/common/title";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
  color: string;
};

const steps: Step[] = [
  {
    icon: <Scale size={35} strokeWidth={1.8} />,
    label: "Input Your Stats",
    description:
      "Tell us about your body, lifestyle, and goals. Our AI considers 50+ metabolic factors.",
    color: "text-emerald-400",
  },
  {
    icon: <Brain size={35} strokeWidth={1.8} />,
    label: "AI Analysis",
    description:
      "Our deep learning model calculates your optimal caloric deficit and macro split instantly.",
    color: "text-violet-400",
  },
  {
    icon: <Utensils size={35} strokeWidth={1.8} />,
    label: "Get Your Plan",
    description:
      "Receive a week-by-week meal plan that adapts as you progress toward your target weight.",
    color: "text-orange-400",
  },
];

const HiwSection = () => {
  return (
    <section id="hiw" className=" py-15 bg-secondary-dark/50">
      <div className="container">
        <Title
          title="See How It Works"
          subTitle="Experience the power of our metabolic engine. Adjust the parameters
            below to see how DietWise adapts the plan in real-time."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-2">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-stretch">
              <StepItem key={idx} {...step} />
              {idx < steps.length - 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HiwSection;

const StepItem = ({ icon, label, description, color }: Step) => {
  return (
    <div className="relative p-6 rounded-md backdrop-blur-xs transition-colors group w-full border border-white/10 hover:border-main-color/50 ">
      <div className="flex flex-col gap-4 h-full ">
        <div className="flex items-center justify-center h-18 w-18 mx-auto rounded-2xl bg-tertiary-dark border border-quaternary-dark group-hover:border-main-color/50 transition-colors">
          <div className={color}>{icon}</div>
        </div>
        <div className="flex flex-col flex-1 gap-1 justify-between">
          <h4 className="text-center font-bold text-xl mb-1">{label}</h4>
          <p className="text-center text-text-secondary text">{description}</p>
        </div>
      </div>
    </div>
  );
};
