import {
  Activity,
  ArrowRight,
  Check,
  Circle,
  Play,
  TrendingDown,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero-section" className="py-13">
      <div className="container flex flex-col md:flex-row items-center justify-center w-full gap-7">
        <div className="flex flex-col flex-1 justify-center gap-7">
          <div className="flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-secondary-dark border border-tertiary-dark text-main-color-hover text-xs font-bold uppercase tracking-wider ">
            <Circle className="fill-main-color-hover w-3 h-3 animate-pulse" />
            <span>Now with GPT-5</span>
          </div>
          <h1>
            Eat smarter,
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-500">
              <br />
              not less.
            </span>
          </h1>
          <p className="text-text-secondary">
            DietWise AI analyzes your biology, habits, and goals to generate the
            perfect meal plan. Stop guessing and start transforming with
            precision nutrition.
          </p>
          <div className="flex flex-col lg:flex-row items-baseline lg:items-center gap-3">
            <Button className="border border-tertiary-dark px-12! py-7! rounded-2xl bg-main-color text-text-dark hover:bg-main-color-hover transition-colors duration-200 font-bold text-base md:text-lg ">
              Generate My Plan <ArrowRight strokeWidth={3} />
            </Button>
            <Button className="border border-tertiary-dark px-12! py-7! rounded-2xl bg-secondary-dark hover:bg-tertiary-dark text-white transition-colors duration-200 font-bold text-base md:text-lg">
              <Play className="fill-main-color text-main-color" />
              See a Demo
            </Button>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center -space-x-3">
              <div className="bg-tertiary-dark flex items-center text-sm justify-center w-8 h-8 rounded-full border-2 border-text-dark">
                <span className="text-text-third font-bold ">A</span>
              </div>
              <div className="bg-tertiary-dark flex items-center text-sm justify-center w-8 h-8 rounded-full border-2 border-text-dark">
                <span className="text-text-third font-bold ">B</span>
              </div>
              <div className="bg-tertiary-dark flex items-center text-sm justify-center w-8 h-8 rounded-full border-2 border-text-dark">
                <span className="text-text-third font-bold ">C</span>
              </div>
              <div className="bg-tertiary-dark flex items-center text-sm justify-center w-8 h-8 rounded-full border-2 border-text-dark">
                <span className="text-text-third font-bold ">D</span>
              </div>
            </div>

            <span className="text-sm text-text-secondary">
              Trusted by 10,000+ users
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="bg-secondary-dark p-6 rounded-3xl border border-tertiary-dark flex flex-col gap-7 relative">
            <div className="flex items-center justify-between border-b border-tertiary-dark pb-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center text-main-color-hover">
                  <Activity size={19} />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Daily Activity</p>
                  <span className="text-xs text-text-secondary">
                    Today, Oct 24
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <p className="font-bold text-main-color">1,845</p>
                <span className="text-xs text-text-secondary">
                  kcal remaining
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2 flex-1">
                <p className="text-xs text-text-secondary">Protein</p>
                <div className="h-2 w-full bg-secondary-dark rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-main-color-hover w-3/5"></div>
                </div>
                <span className=" text-sm font-bold text-text-third">120g</span>
              </div>
              <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2 flex-1">
                <p className="text-xs text-text-secondary">Carbs</p>
                <div className="h-2 w-full bg-secondary-dark rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-cyan-500 w-2/5"></div>
                </div>
                <span className=" text-sm font-bold text-text-third">200g</span>
              </div>
              <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2 flex-1">
                <p className="text-xs text-text-secondary">Fat</p>
                <div className="h-2 w-full bg-secondary-dark rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-violet-500 w-4/5"></div>
                </div>
                <span className=" text-sm font-bold text-text-third">30g</span>
              </div>
            </div>
            <div className="bg-text-dark rounded-xl p-4 border border-tertiary-dark flex items-center gap-3">
              <div className="w-13 h-13 lg:w-16 lg:h-16 rounded-lg bg-secondary-dark hidden lg:flex items-center justify-center text-text-secondary">
                <Utensils />
              </div>
              <div className="flex flex-col justify-center flex-1 gap-1">
                <div className="flex items-center justify-between gap-2 ">
                  <div className="flex flex-col">
                    <p className="font-bold text-sm">Grilled Salmon & Quinoa</p>
                    <span className="text-xs text-main-color">
                      Recommended for Lunch
                    </span>
                  </div>
                  <Check className="text-text-secondary" size={16} />
                </div>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <p>450 kcal</p>
                  <span>•</span>
                  <p>35g Protein</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 top-18 bg-tertiary-dark/30 backdrop-blur-3xl p-4 rounded-xl border border-quaternary-dark shadow-xl hidden sm:block animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-main-color/20 p-2 rounded-lg text-main-color flex items-center justify-center">
                  <TrendingDown strokeWidth={2} size={17} />
                </div>
                <div>
                  <div className="text-xs text-text-secondary">
                    Weight Trend
                  </div>
                  <div className="font-bold ">
                    -2.4 lbs{" "}
                    <span className="text-xs font-normal text-text-secondary">
                      this week
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
