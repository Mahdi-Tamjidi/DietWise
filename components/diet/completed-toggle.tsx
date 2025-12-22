"use client";

import { useState, useTransition } from "react";
import { Switch } from "@/components/ui/switch";
import { updateDietFinished } from "@/actions/diet-actions";

const CompletedToggle = ({ id }: { id: string }) => {
  const [checked, setChecked] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = async (value: boolean) => {
    setChecked(value);
    startTransition(() => {
      updateDietFinished({
        id: id,
        finished: value ? "completed" : "not completed",
      });
    });
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="complete">
        {checked ? "Completed" : "Not Completed"}
      </label>
      <Switch
        id="complete"
        checked={checked}
        onCheckedChange={handleChange}
        disabled={isPending}
      />
    </div>
  );
};
export default CompletedToggle;
