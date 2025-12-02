import { Brain, Scale, Utensils } from "lucide-react";
import { ReactNode } from "react";

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
    color: "#33ff47",
  },
  {
    icon: <Brain size={35} strokeWidth={1.8} />,
    label: "AI Analysis",
    description:
      "Our deep learning model calculates your optimal caloric deficit and macro split instantly.",
    color: "#8b33ff",
  },
  {
    icon: <Utensils size={35} strokeWidth={1.8} />,
    label: "Get Your Plan",
    description:
      "Receive a week-by-week meal plan that adapts as you progress toward your target weight.",
    color: "#ef4444",
  },
];

const HiwSection = () => {
  return (
    <section className=" py-12 bg-secondary-dark">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-9">
          <h2 className="mb-6">See How It Works</h2>
          <p className="text-text-secondary max-w-lg md:max-w-2xl">
            Experience the power of our metabolic engine. Adjust the parameters
            below to see how DietWise adapts the plan in real-time.
          </p>
        </div>
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
    <div className="relative p-6 rounded-md backdrop-blur-xs transition-colors group w-full border border-white/10">
      <div className="flex flex-col gap-4 h-full ">
        <div className="flex items-center justify-center h-18 w-18 mx-auto rounded-2xl bg-tertiary-dark border border-quaternary-dark group-hover:border-main-color/50 transition-colors">
          <div className={`text-[${color}]`}>{icon}</div>
        </div>
        <div className="flex flex-col flex-1 gap-1 justify-between">
          <h4 className="text-center font-bold text-xl mb-1">{label}</h4>
          <p className="text-center text-text-secondary text">{description}</p>
        </div>
      </div>
    </div>
  );
};
