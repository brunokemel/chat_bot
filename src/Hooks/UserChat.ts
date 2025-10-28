import {  useState, useRef, useEffect ,FormEvent, ChangeEvent } from "react";
import { MessageType } from "../types";



export const useUserChat = (username: string) => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [newMessage, setNewMessage] = useState("");
    // const [isOnline, setIsOnline] = React.useState<boolean>(true);
    const isOnline = true;
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }), [messages];

const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!newMessage.trim()) return;

    const message: MessageType = {
        id: Date.now(),
        text: newMessage.trim(),
        username,
        timestamp: new Date(),
        isOwn: true,
    };

    setMessages(prevMessages => [...prevMessages, message]);
    setNewMessage("");

    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: newMessage}),
      });
      const data = await response.json();

      const botMessage: MessageType = {
        id: Date.now() + 1,
        text: data.response,
        username: "kemelIA",
        timestamp: new Date(),
        isOwn: false,
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
};

const handleMessageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewMessage(e.target.value);
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return {
    messages,
    newMessage,
    isOnline,
    messagesEndRef,
    formatTime,
    handleSendMessage,
    handleMessageChange,
  };
};