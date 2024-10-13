/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Write a script to generate 30 seconds video on topic :Interesting historical story along with Al image\nprompt in Realistic format for eachscene and give me result in JSON format with imagePrompt and\nContentText as field"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "## 30-Second Historical Video Script with AI Image Prompts\n\n**Topic:** The Legend of Robin Hood\n\n**Format:** JSON\n\n```json\n[\n  {\n    \"imagePrompt\": \"A dark, foreboding English forest, with tall, ancient trees and a thick canopy of leaves. Sunlight filters through the branches, creating dappled patterns on the forest floor.\",\n    \"contentText\": \"Deep in the Sherwood Forest, a legend was born. A legend of a man who stole from the rich to give to the poor...\"\n  },\n  {\n    \"imagePrompt\": \"A rugged, handsome man in green clothing, with a bow and arrow in his hand, standing in a clearing in the forest. He has a determined expression on his face.\",\n    \"contentText\": \"He was Robin Hood, a skilled archer and a champion of the oppressed.\"\n  },\n  {\n    \"imagePrompt\": \"A group of medieval peasants, dressed in tattered clothes, looking at Robin Hood with hope and gratitude. They are surrounded by a lavish feast.\",\n    \"contentText\": \"Robin and his Merry Men, a band of loyal outlaws, fought against the tyranny of the Sheriff of Nottingham.\"\n  },\n  {\n    \"imagePrompt\": \"A menacing, cruel-looking man in a black uniform, with a stern expression, holding a sword. He is surrounded by guards.\",\n    \"contentText\": \"The Sheriff, a corrupt and power-hungry official, oppressed the people and taxed them mercilessly.\"\n  },\n  {\n    \"imagePrompt\": \"Robin Hood and his Merry Men, riding through the forest on horseback, arrows flying from their bows, fighting against the Sheriff's guards.\",\n    \"contentText\": \"But Robin Hood was a cunning strategist, using his knowledge of the forest to outwit his enemies.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up shot of a hand holding a golden coin, dropping it into a beggar's cup. The beggar looks up with gratitude.\",\n    \"contentText\": \"He redistributed wealth, ensuring that those who were struggling had enough to survive.\"\n  },\n  {\n    \"imagePrompt\": \"Robin Hood and Maid Marian, standing together in a romantic embrace, surrounded by the forest. They are both smiling happily.\",\n    \"contentText\": \"He was a symbol of hope, a beacon of defiance against injustice. And his legend continues to inspire us to this day.\"\n  }\n]\n```\n\n**Notes:**\n\n* This script is designed for a 30-second video, but can be adjusted to fit a different length.\n* The \"imagePrompt\" field describes the scene and mood of the video.\n* The \"contentText\" field provides the narration for the video.\n* The script is just a starting point. You can add more scenes, characters, and details to make your video even more engaging. \n* The AI image generation prompts are designed to create realistic imagery that fits the historical theme. \n* You can use an AI image generation tool like Midjourney, DALL-E, or Stable Diffusion to create images from the prompts.\n* Remember to use music and sound effects to enhance the visual storytelling of your video.\n\n**Remember to credit the AI image generation tool used in your video.** \n"},
        ],
      },
    ],
  });

