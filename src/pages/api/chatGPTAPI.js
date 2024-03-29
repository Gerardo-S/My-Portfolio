import { Configuration, OpenAIApi } from "openai";
import workHistory from "../../workHistory";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { message } = req.body;
  const SKILLS = [
    "next.js",
    "javaScript",
    "HTML5",
    "CSS3",
    "node.js",
    "git",
    "mongoDB",
    "postman",
    "creat-react-app",
    "gatsby",
    "graphQL",
    "bootstrap"
  ];
  const EDUCATION = [
    ` {
      School: "UC San Diego Ext",
      Certificate: "Full Stack Web Development",
      Date: "Dec 12, 2020"
    },
    {
      School: "California State University, Long Beach",
      Certificate: "Bachelor of Science, Mechanical Engineering",
      Date: "2017"
    },
    {
      School: "El Camino City College",
      Certificate: "Lean Six Sigma Green Belt",
      Date: "Jan 15,2017"
    }`
  ];

  const workHistoryContext = workHistory
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
    content: `You are a personal talent agent chatbot based on GPT-3.5-turbo by OpenAI named Clank. Your purpose is to provide information about Gerardo's work history, technical background, and education to recruiters. Below is Gerardo's work history, skills, and education:\nWork History:\n${workHistoryContext}\nSkills:\n${SKILLS}\nEducation History:\n${EDUCATION}`
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
