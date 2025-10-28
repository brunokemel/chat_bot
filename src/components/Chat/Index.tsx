import React from "react";
import { ChatProps } from "../../types";
import {
  ChatContainer,
  ChatHeader,
  UserInfo,
  Username,
  StatusIndicator,
  StatusText,
  LogoutButton,
  MessagesContainer,
  InputContainer,
  MessageInput,
  SendButton,
} from "./Styled";

// import { userChat } from "../../Hooks/UserChat";
import { useUserChat } from "../../Hooks/UserChat"
import MessageItem from "./Message";

const Chat: React.FC<ChatProps> = ({ username, onLogout }) => {
  const {
    messages,
    newMessage,
    isOnline,
    messagesEndRef,
    handleMessageChange,
    handleSendMessage,
  } = useUserChat(username);

  return (
    <ChatContainer>
      <ChatHeader>
        <UserInfo>
          <Username>{username}</Username>
          <StatusIndicator isOnline={isOnline} />
          <StatusText>{isOnline ? "Online" : "Offline"}</StatusText>
        </UserInfo>
        <LogoutButton onClick={onLogout}>Sair</LogoutButton>
      </ChatHeader>

      <MessagesContainer>
        {messages.length === 0 && (
          <div
            style={{
              textAlign: "center",
              color: "#666",
              marginTop: "2rem",
              fontSize: "1.1rem",
            }}
          >
            Bem-vindo ao chat! Digite uma mensagem para começar.
          </div>
        )}

        {messages.map(message => (
          <MessageItem key={message.id} data={message} />
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>

      <InputContainer>
        <form
          onSubmit={handleSendMessage}
          style={{ display: "flex", gap: "0.5rem", width: "100%" }}
        >
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