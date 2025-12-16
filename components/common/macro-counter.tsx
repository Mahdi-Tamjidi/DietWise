import { TrendingDown } from "lucide-react";

type macrosType = {
  cals: number;
  protein: number;
  carbs: number;
  fat: number;
};

const MacroCounter = ({ cals, protein, carbs, fat }: macrosType) => {
  return (
    <>
      <div>
        <span className="text-sm text-text-secondary mb-3">
          Recommended Daily Intake
        </span>
        <h3 className="text-5xl font-bold mb-3 tracking-tight">
          {cals ? cals : ""}{" "}
          <span className="text-lg text-text-secondary font-normal ">kcal</span>
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
          <span className="font-mono font-bold ">
            {protein ? protein : ""}g
          </span>
        </div>
        <div className="w-full flex items-center justify-between p-4 bg-secondary-dark rounded-xl border border-tertiary-dark ">
          <div className="flex items-center gap-3 ">
            <div className="w-8 h-8 rounded bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-xs font-bold">
              P
            </div>
            <span className="text-text-third">Carbs</span>
          </div>
          <span className="font-mono font-bold ">{carbs ? carbs : ""}g</span>
        </div>

        <div className="w-full flex items-center justify-between p-4 bg-secondary-dark rounded-xl border border-tertiary-dark ">
          <div className="flex items-center gap-3 ">
            <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
              P
            </div>
            <span className="text-text-third">Fat</span>
          </div>
          <span className="font-mono font-bold ">{fat ? fat : ""}g</span>
        </div>
      </div>
    </>
  );
};
export default MacroCounter;
