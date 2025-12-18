import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { DIET_PROMPT } from "@/utils/prompt";

const token = process.env["Llama_API_KEY"];
const endpoint = "https://models.github.ai/inference";
const modelName = "meta/Meta-Llama-3.1-405B-Instruct";

export const createDietFromLlama = async (userMeasurements: string) => {
  try {
    const prompt = `${DIET_PROMPT}\n\nCalculate the calories, macros and create a simple 5-meal diet plan according to this person’s information with the tips and the formatting I told you:\n\n${userMeasurements}`;

    const client = ModelClient(endpoint, new AzureKeyCredential(token || ""));

    const response = await client.path("/chat/completions").post({
      body: {
        model: modelName,
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
      throw new Error("Empty response from Llama API");
    }

    return summary;
  } catch (error) {
    console.error("Llama API error:", error);
    throw error;
  }
};
