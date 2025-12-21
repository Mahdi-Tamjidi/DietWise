"use server";

import { createDietFromLlama } from "@/lib/llama";
import { createDietFromGPT } from "@/lib/openai";

export const generateDiet = async (measurements: string) => {
  if (!measurements) {
    return {
      success: false,
      message: "Failed to receive measurements",
      data: null,
    };
  }

  let diet;

  try {
    diet = await createDietFromGPT(measurements);
    console.log(diet);
  } catch (gptError) {
    console.log(gptError);
    if (
      gptError instanceof Error &&
      gptError.message === "RATE_LIMIT_EXCEEDED"
    ) {
      try {
        diet = await createDietFromLlama(measurements);
        console.log(diet);
      } catch (llamaError) {
        console.log(llamaError);
        throw new Error("Failed to generate diet with available AI providers");
      }
    }
  }
  if (!diet) {
    return {
      success: false,
      message: "Failed to create diet",
      data: null,
    };
  }
  return {
    success: true,
    message: "Diet Generated Successfully",
    data: diet,
  };
};
