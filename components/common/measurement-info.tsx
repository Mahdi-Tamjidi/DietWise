import { Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MeasurementInfo = ({ demo }: { demo: boolean }) => {
  return (
    <>
      {/* age & gender */}
      <div className="w-full flex items-center gap-5 ">
        <div className="flex-1 flex items-center justify-between gap-7">
          <label className="flex justify-between text-sm font-medium text-text-third">
            <span>Gender</span>
          </label>

          <select
            className={cn(
              "w-full bg-tertiary-dark text-text-secondary text-sm font-medium  rounded-lg p-2  cursor-pointer outline-none ",
              demo && "cursor-default"
            )}
            defaultValue={demo ? "female" : ""}
            disabled={!!demo}
          >
            <option value="" disabled>
              Choose a gender
            </option>
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
            className={cn(
              "w-full bg-tertiary-dark text-text-secondary text-sm font-medium rounded-lg p-2 outline-none",
              demo && "cursor-default"
            )}
            placeholder="Enter age"
            defaultValue={demo ? 23 : ""}
            disabled={!!demo}
          />
        </div>
      </div>

      {/* height */}

      <div className="w-full flex flex-col">
        <label className="flex justify-between text-sm font-medium text-text-third mb-4">
          <span>Height</span>
          <span className="text-main-color">{demo ? 184 : ""}</span>
        </label>
        <input
          min="150"
          max="250"
          className={cn(
            "transition-colors text-sm w-full h-2 bg-tertiary-dark rounded-lg appearance-none cursor-pointer accent-main-color-hover mb-2 text-text-third hover:text-main-color-hover",
            demo && "disabled-slider cursor-default"
          )}
          type="range"
          defaultValue={demo ? 184 : ""}
          disabled={!!demo}
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
          <span className="text-main-color">{demo ? 94 : ""}</span>
        </label>
        <input
          min="40"
          max="300"
          className={cn(
            "w-full h-2 bg-tertiary-dark rounded-lg appearance-none cursor-pointer accent-main-color-hover mb-2",
            demo && "disabled-slider cursor-default"
          )}
          type="range"
          defaultValue={demo ? 94 : ""}
          disabled={!!demo}
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
          <span className="text-main-color">{demo ? 75 : ""}</span>
        </label>
        <input
          min="40"
          max="300"
          className={cn(
            "w-full h-2 bg-tertiary-dark rounded-lg appearance-none cursor-pointer accent-main-color-hover mb-2",
            demo && "disabled-slider cursor-default"
          )}
          type="range"
          defaultValue={demo ? 75 : ""}
          disabled={!!demo}
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
        {demo && (
          <div className="w-full flex items-center justify-between gap-3 ">
            {["Sedentary", "Moderate", "Active"].map((level) => {
              const isActive = demo && level === "Active" ? true : false;
              return (
                <Button
                  key={level}
                  className={cn(
                    "flex-1 py-4 rounded-lg text-sm transition-all bg-tertiary-dark text-text-secondary border border-transparent hover:bg-quaternary-dark font-normal",
                    isActive
                      ? "border-2 bg-main-color-hover/20 border-main-color-hover/20 text-main-color cursor-default hover:bg-main-color-hover/20"
                      : "cursor-default hover:bg-tertiary-dark"
                  )}
                >
                  {level}
                </Button>
              );
            })}
          </div>
        )}
        {!demo && (
          <div className="w-full flex items-center justify-between gap-3 ">
            {["Sedentary", "Moderate", "Active"].map((level) => {
              return (
                <Button
                  key={level}
                  className="flex-1 py-4 rounded-lg text-sm transition-all bg-tertiary-dark text-text-secondary border border-transparent hover:bg-quaternary-dark font-normal active:border-2 active:bg-main-color-hover/20 active:border-main-color-hover/20 active:text-main-color foc"
                >
                  {level}
                </Button>
              );
            })}
          </div>
        )}
      </div>

      {demo && (
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
      )}
    </>
  );
};
export default MeasurementInfo;
