"use client";

import { Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import { validateForm } from "@/utils/helper-functions";

export type ActivityLevel = "Sedentary" | "Moderate" | "Active";
export type MeasurementForm = {
  gender: string | "";
  age: number | "";
  height: number;
  weight: number;
  goalWeight: number;
  activity: ActivityLevel;
};

const MeasurementInfo = ({ demo }: { demo: boolean }) => {
  const activityLevels: ActivityLevel[] = ["Sedentary", "Moderate", "Active"];
  const initialForm: MeasurementForm = {
    gender: demo ? "female" : "",
    age: demo ? 23 : "",
    height: demo ? 184 : 150,
    weight: demo ? 94 : 40,
    goalWeight: demo ? 75 : 40,
    activity: demo ? "Active" : "Sedentary",
  };

  const [form, setForm] = useState<MeasurementForm>(initialForm);
  const handleSubmit = () => {
    const validationError = validateForm(form, initialForm);

    if (validationError) {
      toast.error(validationError);
      return;
    }

    toast.success("Measurements submitted successfully");

    const formAsString = Object.entries(form)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    console.log("FORM DATA:", form);
    console.log(formAsString);
  };

  return (
    <>
      {/* age & gender */}
      <div className="w-full flex flex-col md:flex-row md:items-center gap-5 ">
        <div className="flex-1 flex items-center justify-between gap-7">
          <label className="flex justify-between text-sm font-medium text-text-third">
            <span>Gender</span>
          </label>

          <select
            className={cn(
              "w-full bg-tertiary-dark text-text-secondary text-sm font-medium  rounded-lg p-2  cursor-pointer outline-none ",
              demo && "cursor-default"
            )}
            disabled={demo}
            value={form.gender}
            onChange={(e) => setForm((f) => ({ ...f, gender: e.target.value }))}
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
            value={form.age}
            onChange={(e) =>
              setForm((f) => ({ ...f, age: Number(e.target.value) }))
            }
            disabled={demo}
          />
        </div>
      </div>

      {/* height */}

      <div className="w-full flex flex-col">
        <label className="flex justify-between text-sm font-medium text-text-third mb-4">
          <span>Height</span>
          <span className="text-main-color">{form.height}</span>
        </label>
        <input
          min="150"
          max="250"
          className={cn(
            "transition-colors text-sm w-full h-2 bg-tertiary-dark rounded-lg appearance-none cursor-pointer accent-main-color-hover mb-2 text-text-third hover:text-main-color-hover",
            demo && "disabled-slider cursor-default"
          )}
          type="range"
          value={form.height}
          onChange={(e) =>
            setForm((f) => ({ ...f, height: Number(e.target.value) }))
          }
          disabled={demo}
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
          <span className="text-main-color">{form.weight}</span>
        </label>
        <input
          min="40"
          max="300"
          className={cn(
            "w-full h-2 bg-tertiary-dark rounded-lg appearance-none cursor-pointer accent-main-color-hover mb-2",
            demo && "disabled-slider cursor-default"
          )}
          type="range"
          value={form.weight}
          onChange={(e) =>
            setForm((f) => ({ ...f, weight: Number(e.target.value) }))
          }
          disabled={demo}
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
          <span className="text-main-color">{form.goalWeight}</span>
        </label>
        <input
          min="40"
          max="300"
          className={cn(
            "w-full h-2 bg-tertiary-dark rounded-lg appearance-none cursor-pointer accent-main-color-hover mb-2",
            demo && "disabled-slider cursor-default"
          )}
          type="range"
          value={form.goalWeight}
          onChange={(e) =>
            setForm((f) => ({ ...f, goalWeight: Number(e.target.value) }))
          }
          disabled={demo}
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
            {activityLevels.map((level) => {
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
          <div className="w-full flex items-center justify-between gap-3">
            {activityLevels.map((level) => {
              const isActive = form.activity === level;

              return (
                <Button
                  key={level}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, activity: level }))}
                  className={cn(
                    "flex-1 py-4 rounded-lg text-sm transition-all font-normal border",
                    isActive
                      ? "border-main-color-hover bg-main-color-hover/20 text-main-color hover:bg-main-color-hover/20"
                      : "border-transparent bg-tertiary-dark text-text-secondary hover:bg-quaternary-dark"
                  )}
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

      {!demo && (
        <div className="w-full flex items-center justify-center border-t border-tertiary-dark">
          <Button
            onClick={handleSubmit}
            className="mt-6 w-1/2 py-5 rounded-lg border border-tertiary-dark bg-main-color text-text-dark hover:bg-main-color-hover transition-colors duration-200 font-bold "
          >
            Submit
          </Button>
        </div>
      )}
    </>
  );
};
export default MeasurementInfo;
