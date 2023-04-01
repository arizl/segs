const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

module.exports = {
    name: "gpt",
    run: async(message) => {
        const prompt = message.content.substring(6)

        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            prompt,
            temperature: 0.7,
            max_tokens: 2000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

    const answer = response.data.choices[0].text;
    console.log(response.data)
    message.reply(answer);
    }
};
