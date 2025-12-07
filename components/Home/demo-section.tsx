import Title from "@/components/common/title";
import { Button } from "@/components/ui/button";
import { Circle, TrendingDown } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo-section" className="py-15">
      <div className="container">
        <Title
          title="See how it works"
          subTitle="Experience the power of our metabolic engine. Adjust the parameters below to see how DietWise adapts the plan in real-time."
        />
        <div className=" flex items-center border border-white/10 rounded-2xl overflow-hidden">
          <div className=" flex bg-secondary-dark flex-col items-center justify-center flex-1 gap-8 p-15 border-b md:border-r border-white/10 ">
            {/* age & gender */}
            <div className="w-full flex items-center gap-5 ">
              <div className="flex-1 flex items-center justify-between gap-7">
                <label className="flex justify-between text-sm font-medium text-text-third">
                  <span>Gender</span>
                </label>

                <select className="w-full bg-tertiary-dark text-text-secondary text-sm font-medium  rounded-lg p-2  cursor-pointer outline-none ">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex-1 flex items-center justify-between gap-7">
                <label className="flex justify-between text-sm font-medium text-text-third">
                  <span>Age</span>
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full bg-tertiary-dark text-text-secondary text-sm font-medium rounded-lg p-2 outline-none"
                  placeholder="Enter age"
                />
              </div>
            </div>

            {/* height */}

            <div className="w-full flex flex-col">
              <label className="flex justify-between text-sm font-medium text-text-third mb-4">
                <span>Height</span>
                <span className="text-main-color">170 cm</span>
              </label>
              <input
                min="50"
                max="150"
                className="w-full h-2 bg-tertiary-dark rounded-lg appearance-none cursor-pointer accent-main-color-hover mb-2"
                type="range"
              />
              <div className="flex justify-between text-xs text-slate-600">
                <span>150 cm</span>
                <span>250 cm</span>
              </div>
            </div>
            {/* weight */}
            <div className="w-full flex flex-col">
              <label className="flex justify-between text-sm font-medium text-text-third mb-4">
                <span>Current Weight</span>
                <span className="text-main-color">80 kg</span>
              </label>
              <input
                min="50"
                max="150"
                className="w-full h-2 bg-tertiary-dark rounded-lg appearance-none cursor-pointer accent-main-color-hover mb-2"
                type="range"
              />
              <div className="flex justify-between text-xs text-slate-600">
                <span>40 kg</span>
                <span>300 kg</span>
              </div>
            </div>
            {/* goal */}
            <div className="w-full flex flex-col">
              <label className="flex justify-between text-sm font-medium text-text-third mb-4">
                <span>Goal Weight</span>
                <span className="text-main-color">70kg</span>
              </label>
              <input
                min="50"
                max="150"
                className="w-full h-2 bg-tertiary-dark rounded-lg appearance-none cursor-pointer accent-main-color-hover mb-2"
                type="range"
              />
              <div className="flex justify-between text-xs text-slate-600">
                <span>40 kg</span>
                <span>300 kg</span>
              </div>
            </div>
            {/* activity */}
            <div className="w-full flex flex-col ">
              <label className="flex justify-between text-sm font-medium text-text-third mb-4">
                <span>Activity Level</span>
              </label>
              <div className="w-full flex items-center justify-between gap-3 ">
                <Button className="flex-1 py-4  rounded-lg text-sm transition-all bg-tertiary-dark text-text-secondary border border-transparent hover:bg-quaternary-dark font-normal">
                  Sedentary
                </Button>
                <Button className="flex-1 py-4  rounded-lg text-sm transition-all bg-tertiary-dark text-text-secondary border border-transparent hover:bg-quaternary-dark font-normal">
                  Moderate
                </Button>
                <Button className="flex-1 py-4  rounded-lg text-sm transition-all bg-tertiary-dark text-text-secondary border border-transparent hover:bg-quaternary-dark font-normal">
                  Active
                </Button>
              </div>
            </div>
            <div className="w-full flex items-center gap-2">
              <Circle
                size={10}
                className="fill-main-color animate-pulse"
                stroke="none"
              />
              <p className="text-sm text-text-secondary">
                AI analyzing 48 metabolic markers...
              </p>
            </div>
          </div>
          <div className=" bg-text-dark flex flex-col items-center justify-center flex-1 gap-10 p-15  ">
            <div>
              <span className="text-sm text-text-secondary mb-3">
                Recommended Daily Intake
              </span>
              <h3 className="text-5xl font-bold mb-3 tracking-tight">
                2550{" "}
                <span className="text-lg text-text-secondary font-normal ">
                  kcal
                </span>
              </h3>
              <div className="flex items-center justify-center gap-2 i px-3 py-1 rounded-full bg-main-color-hover/10 text-main-color text-xs font-medium">
                <TrendingDown strokeWidth={1.5} size={17} />
                <span>Weight Loss Zone</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="w-full flex items-center justify-between p-4 bg-secondary-dark rounded-xl border border-tertiary-dark ">
                <div className="flex items-center gap-3 ">
                  <div className="w-8 h-8 rounded bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">
                    P
                  </div>
                  <span className="text-text-third">Protein</span>
                </div>
                <span className="font-mono font-bold ">180g</span>
              </div>
              <div className="w-full flex items-center justify-between p-4 bg-secondary-dark rounded-xl border border-tertiary-dark ">
                <div className="flex items-center gap-3 ">
                  <div className="w-8 h-8 rounded bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-xs font-bold">
                    P
                  </div>
                  <span className="text-text-third">Carbs</span>
                </div>
                <span className="font-mono font-bold ">180g</span>
              </div>
              <div className="w-full flex items-center justify-between p-4 bg-secondary-dark rounded-xl border border-tertiary-dark ">
                <div className="flex items-center gap-3 ">
                  <div className="w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold">
                    P
                  </div>
                  <span className="text-text-third">Fiber</span>
                </div>
                <span className="font-mono font-bold ">180g</span>
              </div>
              <div className="w-full flex items-center justify-between p-4 bg-secondary-dark rounded-xl border border-tertiary-dark ">
                <div className="flex items-center gap-3 ">
                  <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
                    P
                  </div>
                  <span className="text-text-third">Fat</span>
                </div>
                <span className="font-mono font-bold ">180g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DemoSection;
