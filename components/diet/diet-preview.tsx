import { Calendar, Clock, Target, TrendingDown, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type DietType = {
  title: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  duration: number;
  created: string;
  dietId: string;
  finished: string;
};

const DietPreview = ({
  title,
  calories,
  protein,
  carbs,
  fat,
  duration,
  created,
  dietId,
  finished,
}: DietType) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="bg-secondary-dark p-6 rounded-3xl border border-tertiary-dark flex flex-col gap-7 relative">
        <div className="flex flex-col gap-3  border-b border-tertiary-dark pb-3">
          <div className="flex justify-between items-baseline">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <div className="flex gap-1.5 text-text-secondary text-xs ">
                <Calendar size={15} />
                <span>{created}</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium border capitalize bg-quaternary-dark/20 text-main-color border-main-color/30">
              {finished === "completed" ? "finished" : "active"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 text-text-secondary text-xs ">
              <Clock size={15} />
              <span>{duration} months</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2">
            <p className=" text-text-secondary">Daily Calories</p>

            <span className="text-3xl text-main-color font-bold">
              {calories}{" "}
              <span className=" text-sm text-text-secondary font-normal">
                kcal
              </span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2 flex-1">
              <p className="text-xs text-text-secondary">Protein</p>

              <span className=" text-sm font-bold text-text-third">
                {protein}g
              </span>
            </div>
            <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2 flex-1">
              <p className="text-xs text-text-secondary">Carbs</p>

              <span className=" text-sm font-bold text-text-third">
                {carbs}g
              </span>
            </div>
            <div className="bg-text-dark rounded-xl p-3 text-center border border-tertiary-dark flex flex-col gap-2 flex-1">
              <p className="text-xs text-text-secondary">Fat</p>

              <span className=" text-sm font-bold text-text-third">{fat}g</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4  border-t border-tertiary-dark pt-3">
          <Button className="border border-tertiary-dark px-12! py-7! rounded-2xl bg-tertiary-dark hover:bg-secondary-dark text-white transition-colors duration-200 font-semibold text-base md:text-lg">
            <Link
              href={`/diet/${dietId}`}
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
