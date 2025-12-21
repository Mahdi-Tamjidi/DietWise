import type { MeasurementForm } from "@/components/common/measurement-info";

export const validateForm = (
  form: MeasurementForm,
  initialForm: MeasurementForm
) => {
  if (!form.gender) return "Please select a gender";
  if (!form.age || form.age <= 0) return "Please enter a valid age";
  if (form.height < 150) return "Please select your height";
  if (form.weight < 40) return "Please select your current weight";
  if (form.goalWeight < 40) return "Please select your goal weight";
  if (!form.activity) return "Please select an activity level";

  const unchanged =
    form.height === initialForm.height &&
    form.weight === initialForm.weight &&
    form.goalWeight === initialForm.goalWeight &&
    form.activity === initialForm.activity;

  if (unchanged) return "Please change at least one value before submitting";

  return null;
};

export type ParsedDiet = {
  title: string;
  duration: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  breakfast: string[];
  snack1: string[];
  lunch: string[];
  snack2: string[];
  dinner: string[];
};

export function parseDietString(input: string | null): ParsedDiet {
  if (input) {
    const lines = input
      .replace(/\r/g, "")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    const getAfterColon = (line: string) =>
      line.split(":").slice(1).join(":").trim();

    const parseFoods = (line: string) =>
      getAfterColon(line)
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean);

    const title =
      lines
        .find((l) => l.startsWith("# ") && !l.includes("months"))
        ?.replace("# ", "") ?? "";

    const duration = Number(
      lines
        .find((l) => l.startsWith("# ") && l.includes("months"))
        ?.replace("# ", "")
        .replace(/\D/g, "") ?? 0
    );

    const calories = Number(
      lines
        .find((l) => l.toLowerCase().startsWith("• calories"))
        ?.match(/\d+/)?.[0] ?? 0
    );

    const carbs = Number(
      lines
        .find((l) => l.toLowerCase().startsWith("• carbs"))
        ?.match(/\d+/)?.[0] ?? 0
    );

    const protein = Number(
      lines
        .find((l) => l.toLowerCase().startsWith("• protein"))
        ?.match(/\d+/)?.[0] ?? 0
    );

    const fat = Number(
      lines
        .find((l) => l.toLowerCase().startsWith("• fat"))
        ?.match(/\d+/)?.[0] ?? 0
    );

    const mealLines = lines.filter((l) => l.startsWith("•"));

    const breakfast = parseFoods(
      mealLines.find((l) => l.toLowerCase().startsWith("• breakfast")) ?? ""
    );

    const lunch = parseFoods(
      mealLines.find((l) => l.toLowerCase().startsWith("• lunch")) ?? ""
    );

    const dinner = parseFoods(
      mealLines.find((l) => l.toLowerCase().startsWith("• dinner")) ?? ""
    );

    const snacks = mealLines.filter((l) =>
      l.toLowerCase().startsWith("• snack")
    );

    const snack1 = snacks[0] ? parseFoods(snacks[0]) : [];
    const snack2 = snacks[1] ? parseFoods(snacks[1]) : [];

    return {
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
    };
  }
  return {
    title: "",
    duration: 0,
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    breakfast: [],
    snack1: [],
    lunch: [],
    snack2: [],
    dinner: [],
  };
}
