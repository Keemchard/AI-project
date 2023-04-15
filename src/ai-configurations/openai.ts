import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.API_KEY;

const openai = new OpenAIApi(
  new Configuration({
    apiKey: apiKey,
  })
);

export default openai;
