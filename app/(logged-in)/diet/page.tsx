"use client";

import { Switch } from "@/components/ui/switch";
import { Calendar, Clock, Flame, Target } from "lucide-react";
import { useState } from "react";

const DietPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="container mt-20 py-10 flex flex-col gap-7">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-linear-to-br from-tertiary-dark/90 to-secondary-dark/90 p-10 rounded-2xl ">
        <div className="flex flex-col  gap-4">
          <h2>Summer Shred</h2>
          <div className="flex flex-col lg:flex-row lg:gap-5 gap-3">
            <div className="flex items-center gap-1.5 text-text-secondary  ">
              <Calendar size={16} />
              <span>Created: Jan 15, 2024</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary ">
              <Clock size={16} />
              <span>Duration: 12 Weeks</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary  ">
              <Target size={16} />
              <span>Goal: Weight Loss</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="complete">
            {checked ? "Completed" : "Not Completed"}
          </label>
          <Switch
            id="complete"
            checked={checked}
            onCheckedChange={setChecked}
          />
        </div>
      </div>
      <div className=" flex flex-col gap-5  bg-linear-to-br from-tertiary-dark/90 to-secondary-dark/90 p-10 rounded-2xl ">
        <p className="text-2xl font-bold">Daily Nutrition Target</p>
        <div className="bg-text-dark rounded-xl px-7 py-5 border border-tertiary-dark flex items-center gap-4">
          <div className="w-13 h-13 text-lg  rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
            <Flame />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-text-secondary">Daily Calories</p>

            <span className="text-3xl text-main-color-hover font-bold">
              3024{" "}
              <span className=" text-xs text-text-secondary font-normal">
                kcal
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-2">
          <div className="bg-text-dark rounded-xl px-7 py-5 border border-tertiary-dark flex w-full items-center gap-4  flex-1">
            <div className="w-13 h-13 text-lg rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              P
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-text-secondary">Protein</p>

              <span className=" text-3xl font-bold flex gap-0.75 items-baseline">
                120<span className="text-xs text-text-secondary ">g</span>
              </span>
            </div>
          </div>
          <div className="bg-text-dark rounded-xl px-7 py-5 border border-tertiary-dark flex w-full items-center gap-4  flex-1">
            <div className="w-13 h-13 text-lg rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">
              C
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-text-secondary">Carbs</p>
              <span className=" text-3xl font-bold flex gap-0.75 items-baseline">
                200<span className="text-xs text-text-secondary ">g</span>
              </span>
            </div>
          </div>
          <div className="bg-text-dark rounded-xl px-7 py-5 border border-tertiary-dark flex w-full items-center gap-4  flex-1">
            <div className="w-13 h-13 text-lg rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
              F
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-text-secondary">Fat</p>

              <span className=" text-3xl font-bold flex gap-0.75 items-baseline">
                30<span className="text-xs text-text-secondary ">g</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-5  bg-linear-to-br from-tertiary-dark/90 to-secondary-dark/90 p-10 rounded-2xl ">
        <p className="text-2xl font-bold">Daily Nutrition Target</p>
        <div className="bg-text-dark rounded-xl px-7 py-5 border border-tertiary-dark flex items-baseline gap-10 md:gap-20">
          <p className="font-bold text-lg text-main-color-hover">Breakfast</p>
          <ul className="flex flex-col gap-2.5 list-disc list-inside marker:text-main-color-hover">
            <li>chicken</li>
            <li>chicken</li>
            <li>chicken</li>
            <li>chicken</li>
          </ul>
        </div>
        <div className="bg-text-dark rounded-xl px-7 py-5 border border-tertiary-dark flex items-baseline gap-10 md:gap-20">
          <p className="font-bold text-lg text-main-color-hover">Breakfast</p>
          <ul className="flex flex-col gap-2.5 list-disc list-inside marker:text-main-color-hover">
            <li>chicken</li>
            <li>chicken</li>
            <li>chicken</li>
            <li>chicken</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DietPage;
