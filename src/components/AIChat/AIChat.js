import React, { useState, useEffect, useRef } from "react";
import { streamMessage, textToSpeech } from "../../utils/openai";
import "./AIChat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faVolumeUp,
  faVolumeMute,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import ChatHint from "./ChatHint";
import { useLayoutEffect } from "react";

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showHint, setShowHint] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioCache, setAudioCache] = useState({});
  const [audioReady, setAudioReady] = useState({});
  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);
  const shouldScrollRef = useRef(true);
  const audioRef = useRef(new Audio());

  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hi! I'm here to tell you about Patryk Reba. Ask me anything about his experience, skills, or projects!",
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };

    loadVoices();

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const generateAudio = async (text, messageId) => {
    try {
      const url = await textToSpeech(text);
      setAudioCache((prev) => ({ ...prev, [messageId]: url }));
      setAudioReady((prev) => ({ ...prev, [messageId]: true }));
    } catch (error) {
      console.error("Error in text-to-speech:", error);
      setAudioReady((prev) => ({ ...prev, [messageId]: false }));
    }
  };

  const speakMessage = (text, messageId) => {
    if (isSpeaking) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const url = audioCache[messageId];
      if (url) {
        audioRef.current.src = url;
        audioRef.current.play();
        audioRef.current.onended = () => {
          setIsSpeaking(false);
        };
      } else {
        console.error("Audio not ready yet");
        setIsSpeaking(false);
      }
    }
  };

  const startListening = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        await handleSubmit(null, transcript, true);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert("Speech recognition is not supported in your browser.");
    }
  };

  const handleSubmit = async (e, voiceInput = null, isVoiceInput = false) => {
    if (e) {
      e.preventDefault();
    }
    const messageContent = voiceInput || input;
    if (!messageContent.trim()) return;

    const userMessage = { role: "user", content: messageContent };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      setIsStreaming(true);
      const stream = await streamMessage([...messages, userMessage]);

      let assistantMessage = { role: "assistant", content: "" };
      const messageId = Date.now().toString();
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...assistantMessage, id: messageId },
      ]);
      setAudioReady((prev) => ({ ...prev, [messageId]: false }));

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        assistantMessage.content += content;
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { ...assistantMessage, id: messageId },
        ]);
        scrollToBottom(); // Add this line to scroll after each update
      }

      // Generate audio for the complete message
      generateAudio(assistantMessage.content, messageId);
    } catch (error) {
      console.error("Error streaming message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: "I'm sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsStreaming(false);
      scrollToBottom(); // Add this line to ensure scrolling after streaming is complete
    }
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowHint(false);
    }
  };

  const handleScroll = () => {
    shouldScrollRef.current = chatWindowRef.current.scrollTop === 0;
  };

  return (
    <div className="ai-chat">
      <button className="chat-toggle" onClick={handleToggleChat}>
        <FontAwesomeIcon icon={faCommentDots} />
      </button>
      {showHint && !isOpen && <ChatHint />}
      {isOpen && (
        <div className="chat-window">
          <div
            className="chat-messages"
            ref={chatWindowRef}
            onScroll={handleScroll}
          >
            {messages.map((message, index) => (
              <div
                key={message.id || index}
                className={`message ${message.role}`}
              >
                {message.content}
                {message.role === "assistant" &&
                  !isStreaming &&
                  audioReady[message.id] && (
                    <button
                      className="speak-button"
                      onClick={() => speakMessage(message.content, message.id)}
                    >
                      <FontAwesomeIcon
                        icon={isSpeaking ? faVolumeMute : faVolumeUp}
                      />
                    </button>
                  )}
              </div>
            ))}
            {isStreaming && (
              <div className="message assistant streaming">...</div>
            )}
          </div>
          <form
            onSubmit={(e) => handleSubmit(e, null, false)}
            className="chat-input-form"
          >
            <button
              type="button"
              onClick={startListening}
              className="voice-input-button"
            >
              <FontAwesomeIcon icon={faMicrophone} spin={isListening} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Patryk Reba..."
              className="chat-input"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AIChat;
