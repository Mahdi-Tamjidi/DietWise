import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { DIET_PROMPT } from "@/utils/prompt";

const token = process.env["Llama_API_KEY"];
const endpoint = "https://models.github.ai/inference";
const modelName = "meta/Meta-Llama-3.1-405B-Instruct";

export const generateSummaryFromLlama = async (pdfText: string) => {
  try {
    const cleanedPdfText = pdfText.replace(/\s{2,}/g, " ").trim();

    const prompt = `${DIET_PROMPT}\n\nTransform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${cleanedPdfText}`;

    const client = ModelClient(endpoint, new AzureKeyCredential(token || ""));

    // Send the request to the Llama model
    const response = await client.path("/chat/completions").post({
      body: {
        model: modelName,
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant specialized in summarizing documents.",
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
