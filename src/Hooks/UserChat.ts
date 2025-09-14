import { useState, useRef, useEffect, FormEvent, ChangeEvent } from "react";
import { MessageType } from "../types";

export const userChat = (username: string) => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const [isOnline, setIsOnline] = useState<boolean>(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

     // Rola automaticamente para o final quando houver novas mensagens
    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

useEffect(() => {
    scrollToBottom();
}, [messages]);

useEffect(() => {
    const interval = setInterval(() => {
        setIsOnline(prev => !prev);
    }, 10000); 
    return () => clearInterval(interval);
}, []);

const handleSendMessage = (e: FormEvent<HTMLFormElement>): void => {
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

    setTimeout(() => {
        const responses: string[] =[
            "Olá! Como posso ajudar?",
            "Interessante! Conte-me mais.",
            "Entendi perfeitamente.",
            "Ótima pergunta!",
            "Concordo com você.",
            "Que legal!",
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        const botMessage: MessageType = {
            id: Date.now() + 1,
            text: randomResponse,
            username: "Bot",
            timestamp: new Date(),
            isOwn: false,   
        };

        setMessages(prev => [...prev, botMessage]);
    }, 1000);
};

const handleMessageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewMessage(e.target.value);
  };

  // Função para formatar o horário das mensagens
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