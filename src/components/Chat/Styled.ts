import styled from "styled-components";
import {StatusIndicatorProps, MessageProps, MessageBubbleProps } from '../../types';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5;
`;

export const ChatHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Username = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

export const StatusIndicator = styled.div<StatusIndicatorProps>`
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

export const StatusText = styled.span`
  font-size: 0.9rem;
  opacity: 0.9;
`;

export const LogoutButton = styled.button`
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

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Message = styled.div<MessageProps>`
  display: flex;
  justify-content: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  margin-bottom: 0.5rem;
`;

export const MessageBubble = styled.div<MessageBubbleProps>`
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  background: ${props => props.isOwn ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.isOwn ? 'white' : '#333'};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
`;

export const MessageInfo = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
  margin-top: 0.25rem;
`;

export const InputContainer = styled.div`
  padding: 1rem;
  background: white;
  border-top: 1px solid #e1e5e9;
  display: flex;
  gap: 0.5rem;
`;

export const MessageInput = styled.input`
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

export const SendButton = styled.button`
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
