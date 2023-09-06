// ChatBot.js

import React, { useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { FiMessageSquare } from 'react-icons/fi'; 
import "./Chat.css"

function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleNewUserMessage = (newMessage) => {
    addResponseMessage("You said: " + newMessage);
  };

  return (
      <div
        className={`${isChatOpen ? 'expanded' : ''}`}
        onClick={handleChatToggle}
      >
          <Widget
            handleNewUserMessage={handleNewUserMessage}
            title="Chatbot"
            subtitle="Click here to close"
            showCloseButton
            fullScreenMode={false}
          />
      </div>
  );
}

export default ChatBot;
