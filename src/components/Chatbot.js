import React, { useState} from "react";
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
    const lowerCaseMessage = newMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("hi")) {
      addResponseMessage("Hi there! How may I assist you today?");
    } else if (lowerCaseMessage.includes("lonely")) {
      addResponseMessage(
        "I'm sorry to hear that you're feeling lonely. I'm here to chat and keep you company! Loneliness can be a tough feeling to deal with, but talking to someone or engaging in activities you enjoy can help alleviate it. Is there something specific you'd like to talk about or do to help you feel better?"
      );
    } else if (lowerCaseMessage.includes("patients") || lowerCaseMessage.includes("hard time")) {
      addResponseMessage(
        "I'm sorry to hear that you're having a difficult time taking care of your patients. Providing care for others, especially in a healthcare or caregiving setting, can be emotionally and physically demanding. If you'd like to talk or share anything, I'm here to listen and provide support. Remember, it's okay to struggle, reaching out to friends and family can also help."
      );
    } else if (lowerCaseMessage.includes("stressed")) {
      addResponseMessage(
        "I understand that you're feeling stressed. Stress is a common experience, and there are various relaxation techniques you can try. You can practice deep breathing, progressive muscle relaxation, or mindfulness meditation to help reduce stress. Our website shows more!"
      );
    } else if (lowerCaseMessage.includes("joke") && lowerCaseMessage.includes("tell")) {
      addResponseMessage(
        "Sure, here's a joke for you: Why don't scientists trust atoms? Because they make up everything!"
      );
    } else if (lowerCaseMessage.includes("thank")) {
      addResponseMessage("You're welcome! If you have any more questions, feel free to ask.");
    } else if (lowerCaseMessage.includes("/help")) {
      addResponseMessage(
        "You can talk to me about the following topics:\n\n" +
        "- Feeling lonely\n" +
        "- Difficulty taking care of patients\n" +
        "- Feeling stressed\n" +
        "- Tell me a joke\n" +
        "- Weather information\n" +
        "- How to contact support\n" +
        "- Fun facts\n" +
        "Feel free to choose a topic, or ask me anything else!"
      );
    } else {
      addResponseMessage("Sorry, I don't really understand. Could you please provide more details or rephrase your question?");
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
        senderPlaceHolder={"Type /help to see what I can do"}
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
