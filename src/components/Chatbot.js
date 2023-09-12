import React, { useState, useEffect} from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./Chat.css";

import profileAvatar from '../assets/profile-avatar.png'
import logo1 from '../assets/caring-bridge-icon.png'
// import logo2 from '../assets/caring-bridge-icon.jpeg'


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
        "I'm sorry you feel that way. I'm here to chat and keep you company! Loneliness can be a tough feeling to deal with, but talking to someone or engaging in activities you enjoy can help alleviate it. Is there something specific you'd like to talk about or do to help you feel better?"
      );
    } else if (
      newMessage === "I am having a hard time taking care of my patients"
    ) {
      addResponseMessage(
        "I'm sorry to hear that you're having a difficult time taking care of your patients. Providing care for others, especially in a healthcare or caregiving setting, can be emotionally and physically demanding. If you'd like to talk or share anything, I'm here to listen and provide support. Remember, it's okay to struggle, reaching out to friends and family can also help."
      );
    } else if (newMessage === "I'm feeling stressed") {
      addResponseMessage(
        "I understand that you're feeling stressed. Stress is a common experience, and there are various relaxation techniques you can try. You can practice deep breathing, progressive muscle relaxation, or mindfulness meditation to help reduce stress. Our website shows more!"
      );
    } else if (newMessage === "Tell me a joke") {
      addResponseMessage(
        "Sure, here's a joke for you: Why don't scientists trust atoms? Because they make up everything!"
      );
    } else if (newMessage === "Thank you") {
      addResponseMessage("You're welcome! If you have any more questions, feel free to ask.");
    } else {
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
        profileAvatar={logo1}
        profileClientAvatar={profileAvatar}
        titleAvatar={logo1}
        resizable={true}
        emojis={true}
        showBadge={true}
      />
    </div>
  );
}

export default ChatBot;


