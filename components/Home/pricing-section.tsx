import { cn } from "@/lib/utils";
import { pricingPlans } from "@/utils/constants";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
};

const PricingCard = ({
  id,
  name,
  description,
  price,
  items,
  paymentLink,
}: PriceType) => {
  return (
    <div className="relative w-full">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-7 z-10 p-8 border border-white/10 rounded-3xl",
          id === "proAi" &&
            "border-main-color/50 bg-secondary-dark/80 shadow-2xl shadow-emerald-900/20 relative"
        )}
      >
        {id === "proAi" && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main-color text-main-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
        )}
        <div className="flex flex-col justify-between ">
          <p className="text-lg lg:text-xl font-semibold capitalize">{name}</p>
          <p className=" mt-2 text-text-secondary">{description}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-bold">${price}</p>
          <div className="flex flex-col justify-end mb-1">
            <p className="text-xs uppercase font-semibold text-text-secondary">
              USD
            </p>
            <p className="text-xs text-text-secondary">/month</p>
          </div>
        </div>

        <div className="space-y-2.5 leading-relaxed text-base flex-1/2">
          {items.map((item, idx) => (
            <li className="flex items-center gap-2" key={idx}>
              {id === "proAi" ? (
                <CheckIcon size={18} className="text-main-color" />
              ) : (
                <CheckIcon size={18} />
              )}
              <span className="text-text-third">{item}</span>
            </li>
          ))}
        </div>
        <div className="space-y-2 flex justify-center w-full">
          <Link
            href={paymentLink}
            className={cn(
              "w-full font-bold rounded-xl flex items-center justify-center gap-2 py-2 transition-all",
              id === "proAi"
                ? " py-4 bg-main-color hover:bg-main-color-hover text-text-dark shadow-lg shadow-main-color/20"
                : " py-4 bg-tertiary-dark hover:bg-quaternary-dark "
            )}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="mb-6">Simple Pricing, Powerful Results</h2>
          <p className="text-text-secondary max-w-lg md:max-w-2xl">
            Choose the plan that fits your journey. Cancel anytime.
          </p>
        </div>
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-12  ">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
