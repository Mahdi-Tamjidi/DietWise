import { Check, Crown, CrownIcon, Lock, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UpgradeRequired = () => {
  return (
    <div className="container mt-20 py-15">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-main-color rounded-full flex items-center justify-center">
              <Lock size={30} />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <Crown size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h2>Subscription Required</h2>
          <p className="max-w-xl text-text-secondary">
            You must have an active subscription to access this feature. Upgrade
            to unlock premium features and take your nutrition journey to the
            next level.
          </p>
        </div>
        <div className="flex flex-col gap-4  bg-linear-to-br from-tertiary-dark/90 to-secondary-dark/90 rounded-3xl py-8 px-10 md:px-20 border border-main-color/30 ">
          <div className="flex items-center gap-3">
            <Stars className="text-main-color-hover" />
            <h2 className="text-2xl font-bold">Premium Features Include</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Check size={16} className="text-main-color-hover" />
              <span className="text-sm text-text-third">
                Dynamic Macro Adjustments
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check size={16} className="text-main-color-hover" />
              <span className="text-sm text-text-third">
                AI Meal Generation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check size={16} className="text-main-color-hover" />
              <span className="text-sm text-text-third">
                Grocery List Automation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check size={16} className="text-main-color-hover" />
              <span className="text-sm text-text-third">
                24/7 AI Coach Chat
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check size={16} className="text-main-color-hover" />
              <span className="text-sm text-text-third">
                Progress Prediction
              </span>
            </div>
          </div>
        </div>
        <div>
          <Button className="border border-tertiary-dark px-12! py-7! rounded-3xl bg-main-color text-text-dark hover:bg-main-color-hover transition-colors duration-200 font-semibold text-base ">
            <Link
              href={"/#pricing-section"}
              className="flex items-center justify-center gap-2"
            >
              <CrownIcon />
              View Plans and Upgrade Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UpgradeRequired;
