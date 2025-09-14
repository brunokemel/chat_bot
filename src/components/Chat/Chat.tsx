import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { ChatProps, MessageType, StatusIndicatorProps, MessageProps, MessageBubbleProps } from '../../types';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5;
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Username = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

const StatusIndicator = styled.div<StatusIndicatorProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.isOnline ? '#2ecc71' : '#e74c3c'};
  animation: ${props => props.isOnline ? 'pulse 2s infinite' : 'none'};

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

const StatusText = styled.span`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const LogoutButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Message = styled.div<MessageProps>`
  display: flex;
  justify-content: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  margin-bottom: 0.5rem;
`;

const MessageBubble = styled.div<MessageBubbleProps>`
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  background: ${props => props.isOwn ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.isOwn ? 'white' : '#333'};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
`;

const MessageInfo = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
  margin-top: 0.25rem;
`;

const InputContainer = styled.div`
  padding: 1rem;
  background: white;
  border-top: 1px solid #e1e5e9;
  display: flex;
  gap: 0.5rem;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #667eea;
  }
`;

const SendButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;


const Chat: React.FC<ChatProps> = ({ username, onLogout }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simular mudança de status online/offline
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 10000); // Muda a cada 10 segundos para demonstração

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;

    const message: MessageType = {
      id: Date.now(),
      text: newMessage.trim(),
      username,
      timestamp: new Date(),
      isOwn: true
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simular resposta automática
    setTimeout(() => {
      const responses: string[] = [
        'Olá! Como posso ajudar?',
        'Interessante! Conte-me mais.',
        'Entendi perfeitamente.',
        'Ótima pergunta!',
        'Concordo com você.',
        'Que legal!'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage: MessageType = {
        id: Date.now() + 1,
        text: randomResponse,
        username: 'Bot',
        timestamp: new Date(),
        isOwn: false
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const formatTime = (timestamp: Date): string => {
    return timestamp.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewMessage(e.target.value);
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <UserInfo>
          <Username>{username}</Username>
          <StatusIndicator isOnline={isOnline} />
          <StatusText>{isOnline ? 'Online' : 'Offline'}</StatusText>
        </UserInfo>
        <LogoutButton onClick={onLogout}>
          Sair
        </LogoutButton>
      </ChatHeader>

      <MessagesContainer>
        {messages.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            color: '#666', 
            marginTop: '2rem',
            fontSize: '1.1rem'
          }}>
            Bem-vindo ao chat! Digite uma mensagem para começar.
          </div>
        )}
        
        {messages.map((message) => (
          <Message key={message.id} isOwn={message.isOwn}>
            <div>
              <MessageBubble isOwn={message.isOwn}>
                {message.text}
              </MessageBubble>
              <MessageInfo>
                {message.username} • {formatTime(message.timestamp)}
              </MessageInfo>
            </div>
          </Message>
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>

      <InputContainer>
        <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
          <MessageInput
            type="text"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={handleMessageChange}
            maxLength={500}
          />
          <SendButton type="submit" disabled={!newMessage.trim()}>
            Enviar
          </SendButton>
        </form>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
