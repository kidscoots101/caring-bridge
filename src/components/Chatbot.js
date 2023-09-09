import React, { useState } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./Chat.css";
import logo from "../assets/caring-bridge-icon.png"
import profileAvatar from '../assets/profile-avatar.png'


function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleNewUserMessage = (newMessage) => {
    if (newMessage === "Hi") {
      addResponseMessage("Hi there! How may I assist you today?");
    } else if (newMessage === "I'm feeling lonely") {
      addResponseMessage(
        "I'm sorry you feel that way. I'm here to chat and keep you company! Loneliness can be a tough feeling to deal with, but talking to someone or engaging in activities you enjoy can help alleviate it. Is there something specific you'd like to talk about or do to help you feel better?",
      );
    } else if (
      newMessage === "I am having a hard time taking care of my patients"
    ) {
      addResponseMessage(
        "I'm sorry to hear that you're having a difficult time taking care of your patients. Providing care for others, especially in a healthcare or caregiving setting, can be emotionally and physically demanding. If you'd like to talk or share anything, I'm here to listen and provide support. Remember, it's okay to struggle, reaching out to friends and family can also help.",
      );
    } else if (newMessage === "hsa") {
      addResponseMessage("I'm sorry I don't understand.")
    }
    else {
      addResponseMessage("Hi there! How may I assist you today?");
    }
  };

  return (
    <div
      className={`${isChatOpen ? "expanded" : ""}`}
      onClick={handleChatToggle}
    >
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Caring Bridge"
        subtitle="Our ChatBot is 24/7!"
        showCloseButton
        fullScreenMode={false}
        senderPlaceHolder={"Type a message..."}
        profileAvatar={logo}
        profileClientAvatar={profileAvatar}
        titleAvatar={logo}
        resizable={true}
        emojis={true}
        showBadge={true}
      />
    </div>
  );
}

export default ChatBot;


