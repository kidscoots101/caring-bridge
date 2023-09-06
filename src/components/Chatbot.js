import React, { useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import "./Chat.css"

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleNewUserMessage = (newMessage) => {
    addResponseMessage("Hi there! How may I assist you today?");
  };

  return (
      <div
        className={`${isChatOpen ? 'expanded' : ''}`}
        onClick={handleChatToggle}
      >
          <Widget
            handleNewUserMessage={handleNewUserMessage}
            title="Caring Bridge"
            subtitle="Our ChatBot is 24/7!"
            showCloseButton
            fullScreenMode={false}
          />
      </div>
  );
}

export default ChatBot;
