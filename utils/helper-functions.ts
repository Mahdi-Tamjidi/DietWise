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
