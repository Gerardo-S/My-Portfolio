import React, { useState } from "react";
import { Widget, addResponseMessage, deleteMessages } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { debounce } from "lodash";
import { mutate } from "swr";
const DAILY_TOKEN_LIMIT = 5000;
const REQUESTS_PER_MINUTE = 10;

const postFetcher = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

const ChatWidget = () => {
  const [tokensUsed, setTokensUsed] = useState(0);
  const [requestsMade, setRequestsMade] = useState(0);

  const debouncedFetchResponse = debounce(async (message) => {
    addResponseMessage("Loading... Please wait.", "loading");
    setRequestsMade((prev) => prev + 1);
    try {
      const url = "/api/chatGPTAPI";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      };
      const data = await mutate(url, () => postFetcher(url, options));
      deleteMessages(1, "loading");
      if (data.error) {
        addResponseMessage(`Error: ${data.error.message}`);
      } else if (data.choices && data.choices.length > 0) {
        const responseTokens = data.usage.total_tokens;
        if (tokensUsed + responseTokens > DAILY_TOKEN_LIMIT) {
          addResponseMessage(
            "Daily token limit reached. Please try again tomorrow"
          );
        } else {
          setTokensUsed((prev) => prev + tokensUsed);
          addResponseMessage(data.choices[0].message.content.trim());
        }
      }
    } catch (error) {
      deleteMessages("loading");
      addResponseMessage(
        "An error occurred while processing your request. Please try again later."
      );
    }
  }, 1000);

  const handleNewUserMessage = async (message) => {
    if (tokensUsed > DAILY_TOKEN_LIMIT) {
      addResponseMessage(
        "Daily token limit reached. Please try again tomorrow"
      );
      return;
    }
    if (requestsMade >= REQUESTS_PER_MINUTE) {
      addResponseMessage(
        "Request limit reached. Please wait a moment and try again."
      );
    }
    if (message.length <= 80) {
      debouncedFetchResponse(message);
    } else {
      addResponseMessage(
        "Your message is too long. Please limit your characters to 80."
      );
    }
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Chat with Gerardo"
      subtitle="Ask me anything about my skills and experience"
    />
  );
};

export default ChatWidget;
