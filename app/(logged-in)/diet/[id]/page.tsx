import CompletedToggle from "@/components/diet/completed-toggle";
import { getDietById } from "@/lib/diets";
import { Calendar, Clock, Flame, Target } from "lucide-react";
import { notFound } from "next/navigation";

interface DietPageProps {
  params: Promise<{ id: string }>;
}

const DietPage = async ({ params }: DietPageProps) => {
  const { id } = await params;

  const diet = await getDietById(id);

  if (!diet) {
    notFound();
  }

  const created = diet["created_at"];

  const {
    title,
    duration,
    calories,
    protein,
    carbs,
    fat,
    breakfast,
    snack1,
    lunch,
    snack2,
    dinner,
  } = diet["diet_plan"];

  const meals = [
    { label: "Breakfast", items: breakfast },
    { label: "Snack", items: snack1 },
    { label: "Lunch", items: lunch },
    { label: "Snack", items: snack2 },
    { label: "Dinner", items: dinner },
  ];

  return (
    <div className="container mt-20 py-10 flex flex-col gap-7">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-linear-to-br from-tertiary-dark/90 to-secondary-dark/90 p-10 rounded-2xl ">
        <div className="flex flex-col  gap-6">
          <h2>{title}</h2>
          <div className="flex flex-col lg:flex-row lg:gap-5 gap-3">
            <div className="flex items-center gap-1.5 text-text-secondary  ">
              <Calendar size={16} />
              <span>Created: {created.toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary ">
              <Clock size={16} />
              <span>Duration: {duration} months</span>
            </div>
          </div>
        </div>

        <CompletedToggle id={id} />
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
              {calories}{" "}
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
                {protein}
                <span className="text-xs text-text-secondary ">g</span>
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
                {carbs}
                <span className="text-xs text-text-secondary ">g</span>
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
                {fat}
                <span className="text-xs text-text-secondary ">g</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-5  bg-linear-to-br from-tertiary-dark/90 to-secondary-dark/90 p-10 rounded-2xl ">
        <p className="text-2xl font-bold">Daily Nutrition Target</p>
        {meals.map(({ label, items }, index) => (
          <div
            key={index}
            className="bg-text-dark rounded-xl px-7 py-5 border border-tertiary-dark flex items-baseline "
          >
            <p className="font-bold text-lg text-main-color-hover flex-1/3 md:flex-1/6">
              {label}
            </p>

            <ul className="flex flex-col gap-2.5 list-disc list-inside marker:text-main-color-hover flex-2/3 md:flex-5/6">
              {items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DietPage;
