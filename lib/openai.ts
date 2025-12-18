import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { DIET_PROMPT } from "@/utils/prompt";

const token = process.env["OPENAI_API_KEY"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export const createDietFromGPT = async (userMeasurements: string) => {
  try {
    const prompt = `${DIET_PROMPT}\n\nCalculate the calories, macros and create a simple 5-meal diet plan according to this person’s information with the tips and the formatting I told you:\n\n${userMeasurements}`;

    const client = ModelClient(endpoint, new AzureKeyCredential(token || ""));

    const response = await client.path("/chat/completions").post({
      body: {
        model,
        messages: [
          {
            role: "system",
            content:
              "You are a professional dietitian specialized in creating diets and calculating macros based on a person's information.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
        top_p: 1.0,
        max_tokens: 1500,
      },
    });

    if (isUnexpected(response)) {
      throw response.body.error;
    }

    const summary = response.body.choices?.[0]?.message?.content;
    if (!summary) {
      throw new Error("Empty response from GPT-4.1 API");
    }

    return summary;
  } catch (error) {
    console.error("GPT-4.1 API error:", error);
    throw error;
  }
};
