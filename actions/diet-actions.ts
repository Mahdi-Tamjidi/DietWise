"use server";

import { getDbConnection } from "@/lib/db";
import { createDietFromLlama } from "@/lib/llama";
import { createDietFromGPT } from "@/lib/openai";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface DietType {
  userId?: string;
  dietPlan: string;
}

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

export const saveDietToDb = async ({ userId, dietPlan }: DietType) => {
  try {
    const sql = await getDbConnection();
    const [savedDiet] = await sql`
    INSERT INTO diets (
      user_id,
      diet_plan
      )VALUES(
    ${userId},
    ${dietPlan}
     )RETURNING id, diet_plan`;
    // console.log(savedDiet);
    return savedDiet;
  } catch (error) {
    console.error("Error saving diet plan", error);
    throw error;
  }
};

export const storeDiet = async ({ dietPlan }: DietType) => {
  let savedDiet: any;
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "User not found",
      };
    }

    savedDiet = await saveDietToDb({ userId, dietPlan });

    if (!savedDiet) {
      return {
        success: false,
        message: "Failed to save diet plan, please try again...",
      };
    }
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error saving diet plan",
    };
  }

  revalidatePath(`/diet/${savedDiet.id}`);

  return {
    success: true,
    message: "Diet plan saved successfully",
    data: { id: savedDiet.id },
  };
};
