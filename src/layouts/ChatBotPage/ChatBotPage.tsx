import openai from "@/ai-configurations/openai";
import React, { FormEvent, useState } from "react";

const ChatBotPage = () => {
  const [userInput, setUserInput] = useState("");
  const [assistantReply, setAssistantReply] = useState([]);

  const sendQuery = async (input: string) => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: input,
        },
      ],
    });
    const updatedAssistantReplies = [...assistantReply, userInput];
    alert(response.data.choices[0].message?.content);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(userInput);

    sendQuery(userInput);
    setUserInput("");
  };

  return (
    <>
      <div>ChatBotPage</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <input type="submit" value="send" />
        </form>
      </div>
      <div> </div>
    </>
  );
};

export default ChatBotPage;
