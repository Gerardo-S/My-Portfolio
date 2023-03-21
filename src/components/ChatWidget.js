import React, { useState, useEffect, useCallback } from "react";
import {
  Widget,
  addResponseMessage,
  toggleInputDisabled,
  toggleMsgLoader
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { debounce } from "lodash";
import { mutate } from "swr";

const DAILY_TOKEN_LIMIT = 5000;
const REQUESTS_PER_MINUTE = 8;

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
  const [requestsThisMinute, setRequestsThisMinute] = useState(0);

  // Increment requestsMade and requestsThisMinute counters
  const updateRequestCount = useCallback(() => {
    setRequestsThisMinute((prev) => prev + 1);
  }, []);
  // Reset requestsThisMinute counter every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRequestsThisMinute(0);
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  const debouncedFetchResponse = debounce(async (message) => {
    toggleMsgLoader();
    updateRequestCount();
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
          toggleInputDisabled();
          toggleMsgLoader();
        }
      }
    } catch (error) {
      toggleInputDisabled();
      toggleMsgLoader();
      addResponseMessage(
        "An error occurred while processing your request. Please try again later."
      );
    }
  }, 1000);

  const handleNewUserMessage = async (message) => {
    toggleInputDisabled();
    if (tokensUsed > DAILY_TOKEN_LIMIT) {
      addResponseMessage(
        "Daily token limit reached. Please try again tomorrow"
      );
      return;
    }
    if (requestsThisMinute >= REQUESTS_PER_MINUTE) {
      addResponseMessage(
        "Request limit reached. Please wait a moment and try again."
      );
      return;
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
      title="Hi! I am Clank."
      subtitle="Ask me anything about Gerardo's work experience."
    />
  );
};

export default ChatWidget;
