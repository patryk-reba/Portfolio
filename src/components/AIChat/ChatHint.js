import React, { useState, useEffect } from "react";
import "./ChatHint.css";

const ChatHint = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className="chat-hint">
      <p>Chat with AI about Patryk here!</p>
    </div>
  ) : null;
};

export default ChatHint;
