import { Configuration, OpenAIApi } from "openai";
import jobContent from "../../jobContent";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { message } = req.body;
  const workHistoryContext = jobContent
    .map(
      (job) => `
        Job ${job.location}:
        - Company: ${job.location}
        - Position: ${job.position}
        - Duration: ${job.period.start}-${job.period.end}
        - Responsibilities: ${job.description}`
    )
    .join("\n");
  const systemMessage = {
    role: "system",
    content: `You are a personal talent agent chatbot based on GPT-3.5-turbo by OpenAI. Your purpose is to provide information about Gerardo's work history to recruiters. Below is Gerardo's work history:\n${workHistoryContext}`
  };
  const userMessage = { role: "user", content: `Recruiter: ${message}` };
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [systemMessage, userMessage],
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 256
    });
    res.status(200).json(completion.data);
  } catch (error) {
    throw new Error(error);
  }
}
