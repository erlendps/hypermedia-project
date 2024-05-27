import OpenAI from "openai";
import { promises as fs } from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const openai = new OpenAI({
    apiKey: useRuntimeConfig().openaiApiKey,
  });

  const filePath = path.join(process.cwd(), "assets", "initialPrompt.txt");
  const initialPrompt = await fs.readFile(filePath, "utf-8");
  const all_messages = [
    { role: "system", content: initialPrompt },
    ...messages,
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      messages: all_messages,
    });

    //console.log('API Response:', completion);
    return completion;
  } catch (error) {
    console.error("Error from OpenAI API:", error);
    event.node.res.statusCode = 500;
    return { error: "Failed to fetch response from ChatGPT" };
  }
});
