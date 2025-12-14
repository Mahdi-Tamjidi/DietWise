import { Calendar, Clock, Target, TrendingDown, Utensils } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const DietPreview = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="bg-secondary-dark p-6 rounded-3xl border border-tertiary-dark flex flex-col gap-7 relative">
        <div className="flex flex-col gap-3  border-b border-tertiary-dark pb-3">
          <div className="flex justify-between items-baseline">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Summer Shred</h3>
              <div className="flex gap-1.5 text-text-secondary text-xs ">
                <Calendar size={15} />
                <span>Jan 15, 2024</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium border capitalize bg-quaternary-dark/20 text-main-color border-main-color/30">
              active
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 text-text-secondary text-xs ">
              <Target size={15} />
              <span>Weight Loss</span>
            </div>
            <div className="flex gap-1.5 text-text-secondary text-xs ">
              <Clock size={15} />
              <span>12 Weeks</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2">
            <p className=" text-text-secondary">Daily Calories</p>

            <span className="text-3xl text-main-color font-bold">
              3024{" "}
              <span className=" text-sm text-text-secondary font-normal">
                kcal
              </span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2 flex-1">
              <p className="text-xs text-text-secondary">Protein</p>

              <span className=" text-sm font-bold text-text-third">120g</span>
            </div>
            <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2 flex-1">
              <p className="text-xs text-text-secondary">Carbs</p>

              <span className=" text-sm font-bold text-text-third">200g</span>
            </div>
            <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2 flex-1">
              <p className="text-xs text-text-secondary">Fat</p>

              <span className=" text-sm font-bold text-text-third">30g</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4  border-t border-tertiary-dark pt-3">
          <div className="flex items-center justify-between">
            <span className="text-text-secondary text-xs">85 kg</span>
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-linear-to-r from-tertiary-dark to-main-color w-12"></div>
              <TrendingDown size={15} className="text-main-color" />
            </div>
            <span className="text-main-color font-semibold">70 kg</span>
          </div>
          <Button className="border border-tertiary-dark px-12! py-7! rounded-2xl bg-tertiary-dark hover:bg-secondary-dark text-white transition-colors duration-200 font-semibold text-base md:text-lg">
            <Link
              href="#demo-section"
              className="flex items-center justify-center gap-2"
            >
              <Utensils className="fill-main-color text-main-color" />
              More Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DietPreview;
